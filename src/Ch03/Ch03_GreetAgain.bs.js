// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");

function greetAgain(person) {
  return "Hello again, " + (person[/* name */1] + (" with ID " + (Pervasives.string_of_int(person[/* id */0]) + "!")));
}

exports.greetAgain = greetAgain;
/* No side effect */
