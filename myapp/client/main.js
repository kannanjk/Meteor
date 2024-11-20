// import './main.html';
// import './Sessions.html';
// import './Components/Tracker.html';
// import './Components/User.html';
// import { Task } from '../lib/colloctions';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
// import { Session } from 'meteor/session'
// import { Tracker } from 'meteor/tracker'
// import { check } from 'meteor/check'
// import { EJSON } from 'meteor/ejson'
// import {HTTP} from 'meteor/http'
// import { Email } from 'meteor/email'
// import { Accounts } from 'meteor/accounts-base';
// import { Mongo } from 'meteor/mongo'
// var PlayersCollection = new Mongo.Collection('playersCollection');
// const PlayersCollection=[
//   {
//     name:'jishnu'
//   },
//   {
//     name:'kannan'
//   },
//   {
//     name:'manu'
//   }
// ]
if (Meteor.isServer) {
  //   Meteor.methods({

  //     method1: function (arg) {
  //        var result = arg + 5;
  //        return result;
  //     },

  //     method2: function (arg) {
  //        var result = arg + 10;
  //        return result;
  //     }
  //  });
//   Meteor.publish('allowedData', function() {
//     return PlayersCollection.find();
//  })
}

if (Meteor.isClient) {
  // Template.task.helpers({
  //   task: function () {
  //     return Task.find()
  //   }
  // })
  /////////////////
  // Template.task.events({
  //   "submit .add-task": function (event) {

  //     const data = event.target.name.value
  //     Task.insert({
  //       name: data
  //     })

  //     // e.target.name.value = ''
  //     return false
  //   }
  // })
  /////////////////
  // var user = {
  //   name: "jishnu",
  //   id: 23
  // }
  // Session.set('mySession', user)
  // var mySession = Session.get('mySession')
  // console.log(mySession);
  /////////////////
  // var num = 0
  // Session.set("mySession", num)
  // Tracker.autorun(function () {
  //   var sessionData = Session.get('mySession')
  //   console.log(sessionData);
  // })
  // Template.myTemp.events({
  //   "click #myButt": function () {
  //     Session.set("mySession", num++)
  //   }
  // })
  /////////////////
  //   var myObject = {
  //     key1 : "Value 1...",
  //     key2 : "Value 2..."
  //  }

  //  var myTest = Match.test(myObject, {
  //     key1: String,
  //     key2: String
  //  });

  //  if ( myTest ) {
  //     console.log("Test is TRUE...");
  //  } else {
  //     console.log("Test is FALSE...");
  //  }
  /////////////////
  // var count = 0
  // var myIntervel = Meteor.setInterval(() => {
  //   count++
  //   console.log(`intervel called ${count} times! `);
  // }, 3000)
  // Template.myTemp.events({
  //   "click button": () => {
  //     Meteor.clearInterval(myIntervel)
  //     console.log("intervel cleard!");
  //   }
  // })
  /////////////////
  // var myEjson = `{"$binary":"c3VyZS4="}`
  // var myDate = EJSON.parse(myEjson)
  // console.log(myDate);
  /////////////////
  // HTTP.call("GET", 'http://jsonplaceholder.typicode.com/posts/1', {}, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(res.data);
  //   }
  // })
  //   var postData = {

  //     data: {
  //        "name1": "Value1",
  //        "name2": "Value2",
  //     }
  //  } 
  //   HTTP.post( 'http://jsonplaceholder.typicode.com/posts', postData, 
  //     function( error, response ) {

  //     if ( error ) {
  //        console.log( error );
  //     } else {
  //        console.log( response);
  //     }
  //  });
  /////////////////
  // process.env.MAIL_URL =
  //   "smtp://YOUR_DEFAULT_SMTP_LOGIN:YOUR_DEFAULT_PASSWORD@smtp.mailgun.org:587";

  // Email.send({
  //   to: "jishnukumbadam@email.com",
  //   from: "jishnukumba@email.com",
  //   subject: "Meteor Email",
  //   text: "The email content..."
  // });
  /////////////////
  //   const Users = new Mongo.Collection('users');
  //   Users.insert({
  //     name: 'James',
  //     email: 'eee@example.com',
  //     joined: new Date(2016, 2, 23)
  //  });
  // Template.register.events({
  //   'submit form': (event) => {
  //     event.preventDefault();

  //     var registerData = {
  //       email: event.target.email.value,
  //       password: event.target.password.value
  //     }
  //     Accounts.createUser(registerData, (err) => {
  //       if (Meteor.user()) {
  //         console.log(Meteor);
  //       } else {
  //         console.log(`Error` + err.reason);
  //       }
  //     })
  //   }
  // })
  // Template.login.events({
  //   'submit form': function (event) {
  //     event.preventDefault();
  //     var myEmail = event.target.email.value;
  //     var myPassword = event.target.password.value;

  //     Meteor.loginWithPassword(myEmail, myPassword, function (error) {

  //       if (Meteor.user()) {
  //         console.log(Meteor);
  //       } else {
  //         console.log("ERROR: " + error.reason);
  //       }
  //     });
  //   }
  // });
  // Template.home.events({
  //   'click .logout': (event) => {
  //     event.preventDefault()
  //     Meteor.logout((err,res) => {
  //       console.log('Err' + err.reason);
  //     })
  //   }
  // })
  // var aaa = 'aaa'
  // Meteor.call('method1', aaa, function (error, result) {

  //    if (error) {
  //       console.log(error);
  //     } else {
  //          console.log('Method 1 result is: ' + result);
  //       }
  //    }
  // );

  // Meteor.call('method2', 5, function (error, result) {

  //    if (error) {
  //       console.log(error);
  //    } else {
  //       console.log('Method 2 result is: ' + result);
  //    }
  // });
  // Meteor.subscribe('allowedData');
}

// Meteor.setTimeout(function() {
//   var myLog = PlayersCollection.find().fetch();
//   console.log(myLog);
// }, 1000);
