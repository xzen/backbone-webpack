// Dependencies
var Backbone = require('backbone');

// Models
var Task = require('../models/task.js');

// Collection
var Todo = Backbone.Collection.extend({
  'model': Task,
  'addTask': function addTask (item) {
    this.add({
      'id': Math.floor(Math.random() * new Date().getTime()),
      'name': item.name || 'no name',
      'checked': item.checked || false
    });
  },
  'updateTask': function updateTask (id, item) {
    var model = this.get({id});

    model.set(item);
  },
  'removeTask': function removeTask (id) {
    var model = this.get({id});

    this.remove(model);
  }
});

module.exports = new Todo();
