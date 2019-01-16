var template = require('ak-template');
var Backbone = require('Backbone');

require('./index.scss');

var listTpl = require('./list.tpl');

module.exports = Backbone.View.extend({
  'el': '.list-tasks',
  'template': template(listTpl),
  'events': {
    'click .tasks li': 'checkTask'
  },
  'initialize': function initialize () {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
  },
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));

    return this;
  },
  'checkTask': function checkTask (e) {
    var isChecked = ! e.target.classList.contains('isChecked');
    var item = {
      'checked': isChecked
    };

    this.collection.updateTask(e.target.dataset.id, item);
  }
});
