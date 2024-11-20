import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Notes } from '../lib/colloction';

import './main.html';

Template.body.helpers({
  notes() {
    const a = Notes.find().fetch()
    console.log(a);
    return Notes.find().fetch()
  },
});

Template.add.events({
  'submit .add-form': (event) => {
    event.preventDefault()
    const target = event.target
    const text = target.text.value
    const a = Notes.insert({
      text: text,
      createdAt: new Date(),
    });
    console.log(a);
    
    target.text.value = ''
    return false
  }
})
