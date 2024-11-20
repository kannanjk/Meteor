// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by package-name.js.
import { name as packageName } from "meteor/username:package-name";

// Write your tests here!
// Here is an example.
Tinytest.add('package-name - example', function (test) {
  test.equal(packageName, "package-name");
});
