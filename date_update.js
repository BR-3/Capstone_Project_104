"use strict";

/*  Capstone project
    MCON 104

    Author: Bluma Rodkin
    Date: 12/29/2022

   This page will add the current date, last updated date, and difference between the two to the HTML files.
 */

// the variable for the current date
var currentDate = new Date();
var today = currentDate.toLocaleString();

// variable for last updated date
var edit = new Date("December 27, 2022 19:43:23");
var update = edit.toLocaleString()

// this will store the code
var htmlCode = "";

// calling the function to write dates
writeDates(today, update, currentDate, edit);

// sending the HTML code to the HTML documents
document.getElementById("currentDate").innerHTML = htmlCode;


function writeDates(date, updated, uneditedDate, uneditedLastChanged) {
    printCurrentDate(date);
    printLastUpdated(updated);
    calculateDifference(uneditedDate,uneditedLastChanged);
}

function printCurrentDate(date) {
    htmlCode += date;
}

function printLastUpdated(update) {
    htmlCode += " Last updated: " + update;
}

function calculateDifference(uneditedDate, uneditedLastChanged) {
    var daysBetween = Math.floor((uneditedDate - uneditedLastChanged) / (1000 * 60 * 60 * 24));
    htmlCode += " (" + daysBetween + " days ago)";
}
