import './main.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Task } from '../lib/colloctions';

if (Meteor.isClient) {
  Template.task.helpers({
    task: function () {
      return Task.find()
    }
  })

  Template.task.events({
    "submit .add-task": function (e) {
      var data = e.target.name.value
      console.log(data);
      return false
    }
  })
}