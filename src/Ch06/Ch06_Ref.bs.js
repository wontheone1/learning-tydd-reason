// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function tryFind(needle, haystack) {
  var currHaystack = haystack;
  var stop = /* false */0;
  var currItem = /* None */0;
  while(!stop) {
    var match = currHaystack;
    if (match) {
      var item = match[0];
      if (Curry._1(needle, item)) {
        stop = /* true */1;
        currItem = /* Some */[item];
      } else {
        currHaystack = match[1];
      }
    } else {
      stop = /* true */1;
    }
  };
  return currItem;
}

exports.tryFind = tryFind;
/* No side effect */
