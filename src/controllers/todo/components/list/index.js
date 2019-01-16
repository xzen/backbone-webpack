var template = require('ak-template');
var Backbone = require('backbone');

require('./index.scss');

var listTpl = require('./list.tpl');

module.exports = Backbone.View.extend({
  'el': '.list-tasks',
  'template': template(listTpl),
  'events': {
    'click .tasks li span': 'checkTask',
    'click .tasks li button': 'removeTask'
  },
  'initialize': function initialize () {
    this.listenTo(this.collection, 'update', this.render);
    this.listenTo(this.collection, 'change', this.render);
  },
  'render': function render () {
    this.$el.html(this.template(this.collection.toJSON()));

    return this;
  },
  'checkTask': function checkTask (e) {
    var isChecked = ! e.target.parentElement.classList.contains('isChecked');
    var item = {
      'checked': isChecked
    };

    this.collection.updateTask(e.target.parentElement.dataset.id, item);

    return this;
  },
  'removeTask': function removeTask (e) {
    this.collection.removeTask(e.target.parentElement.dataset.id);

    return this;
  }
});
