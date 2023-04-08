/*
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:
When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

*/
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  // Write your code here
  if (n === p || n === 1 || p === 1) return 0;
  if (n % 2 === 1 && p === n - 1) return 0;

  let count1 = 0;
  let add1 = 1;
  while (add1 < p) {
    // if (p % 2 === 0) {
    //         add1 = add1 + 2;
    //     } else {
    //         add1++;
    //     }
    add1 = add1 + 2;
    count1++;
  }

  let countn = 0;
  let add = n;
  while (add > p) {
    if (add % 2 === 0) {
      add = add - 2;
    } else {
      add = add - 3;
    }
    countn++;
  }

  if (count1 < countn) return count1;
  else return countn;
}
