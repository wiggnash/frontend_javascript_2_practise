/*
You are given a date in the form of "DD/MM/YYYY". Calculate the number of days between the given date and today's date.
Today's day is the date when the program is executed.
=====================================================================
Note:
Sample I/O considers today's date as 28/08/2020
You may assume all the dates in the input are correct and in the given format
The given date is in the past as compared to today
JavaScript new Date() constructor takes in date in the "MM/DD/YYYY" format
Use let todaysDate = new Date() to get today’s date
Use Split() function to split the input date string 10/08/2020 where you can pass "/" as a deluminator. You can check the reference link given below to know how to use Split() function.
Keep in mind, input strings format is "DD/MM/YYYY" and the JavaScript new Date() constructor take date in the “MM/DD/YYYY” format.
*/

function getNumberOfDays(date) {
    let dateArray = date.split("/");
    let correctDateString = dateArray[1]+"/"+dateArray[0]+"/"+dateArray[2];
    const givenDate = new Date(correctDateString).setUTCHours(0,0,0,0);
    const todayDate = new Date().setUTCHours(0,0,0,0);
    const timeDifference = todayDate - givenDate;
    const days = timeDifference/(1000*60*60*24);
    return Math.floor(days);
}