"use strict";

//Complete this algo
const isLoop = ll => {
  let elem;
  let runner;

  if (ll.head.next && ll.head.next.next) {
    elem = ll.head.next;
    runner = ll.head.next.next;
  } else {
    return false;
  }

  while (elem.value !== runner.value) {
    if (elem.next && runner.next && runner.next.next ) {
      elem = elem.next;
      runner = runner.next.next;
    } else {
      return false;
    }
    if (elem.value === runner.value) {
      return true;
    }
  }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
