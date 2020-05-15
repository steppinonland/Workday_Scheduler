// current day has to show at the top of the page
$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

});

// when you scroll down, the business hours show up

// each hour will show whether they're in the past, present, or future

// you can click on an hour to create an event

// that opens the text box

// then you can save that info by clicking 'save' button

// info will need to be saved in the local storage

// that local storage will maintain the data even after the page refreshes