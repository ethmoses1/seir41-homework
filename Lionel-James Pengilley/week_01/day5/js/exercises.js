// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number
// of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points.
//   (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
//     so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working.
//   You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']; //Do I just create an object with an array inside?
l = ['8th', '6th', 'Union Square', '3rd', '4th']; // Or do I do regex and find patterns in the input text from the user?
six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];


let p1 = prompt("What train line are you on?");
let aLine = eval(p1);

let aStop = prompt("What train stop are you on?");

let p3 = prompt("What train line will you arrive at?");
let bLine = eval(p3);

let bStop = prompt("What train stop will you arrive at?");

const planTrip = function (aLine, aStop, bLine, bStop) {
  let line1 = aLine;
  let a = aLine.indexOf(aStop);
  let b = bLine.indexOf(bStop);
  let aMidWay = aLine.indexOf('Union Square');
  let bMidWay = bLine.indexOf('Union Square');
  let numOfStops = 0;
    if (aMidWay < a) {
      for (var i = a; i !== aMidWay; i--) {
        console.log(`${aLine[i]} on line ${p1}`);
        numOfStops = a - aMidWay;
      };
    } if (aMidWay > a) {
    for (var i = a; i !== aMidWay; i++) {
      console.log(`${aLine[i]} on line ${p1}`);
      numOfStops = aMidWay - a;
    };
  } if (bMidWay < b) {
    for (var i = bMidWay; i < b; i++) {
      console.log(`${bLine[i]} on line ${p3}`);
      numOfStops = b - bMidWay;
    };
  } if (bMidWay > b) {
    for (var i = bMidWay; i > b; i--) {
      console.log(`${bLine[i]} on line ${p3}`);
      numOfStops = bMidWay - b;
    };
  };
  console.log(`${bStop} on line ${p3}`);
  console.log(`Number of stops: ${Math.abs(numOfStops) + 1}`);
};

 planTrip(aLine, aStop, bLine, bStop);