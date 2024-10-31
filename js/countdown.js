'use strict'

// Date set to Jan 1st 2023 
var target_date = new Date('Jan, 1, 2024').getTime();
 
var days; 
var hours; 
var minutes; 
var seconds;
 
// get tag element, div countdowm
var countdown = document.getElementById('countdown');
 
// change VAR for LET et regarder le newDate
 
// main function  
setInterval (function () {
    var current_date = new Date().getTime();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
    
    var seconds_left = (target_date - current_date) / 1000;
    // calculation in seconds
    
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    
    minutes = parseInt(seconds_left / 60);
    // console.log(minutes)
    
    seconds = parseInt(seconds_left % 60);
  
    // countdown string + set tag value in html as div is empty
   countdown.innerHTML = ''+
      '<span class="days">'+days+' days </span>'+"  "+
      '<span class="hours">'+hours+' hs </span>'+"  "+
      '<span class="minutes">'+minutes+' min </span>'+"  "+
      '<span class="seconds">'+seconds+' sec </span>';
    }
 );  //end setInteval



//*************** chat GPT code on Dec 12th 2022 with this prompt: Hi GPT, can you code a countdown timer in JavaScript? *****************//

// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);



    
    