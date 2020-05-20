// current day has to show at the top of the page
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
});

// when you scroll down, the business hours show up

// each hour will show whether they're in the past, present, or future

/* 
FUTURE
if { moment().isBefore(Moment|String|Number|Date|Array)

    PRESENT
    if moment().isSame(Moment|String|Number|Date|Array);

    PAST
    ifmoment().isAfter(Moment|String|Number|Date|Array);
}  */


// you can click on an hour to create an event

// that opens the text box

// then you can save that info by clicking 'save' button

// info will need to be saved in the local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
// on click events are at the bottom
$(".saveBtn").click(function () {
	let textValue = $(this).siblings(".description").val();
	// console.log(timeOne);
	let timeKey = $(this).parent().attr("id");
	// console.log(timeTwo);
	localStorage.setItem(timeKey, textValue);
});

let now = moment().hour();
console.log(now);

let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i = 0; i < hours.length; i++) {
	// console.log(i);
	console.log(hours[i]);
	if (now < hours[i]) {
		// calling id through the for loop number so if the number is 9 the id is 9
		$("#" + hours[i])
			.removeClass("present")
			.addClass("future");
	} else if (now > hours[i]) {
		console.log(now);
		// calling id through the for loop number so if the number is 9 the id is 9, if the current time is less than the current hour then you change the id to get a different color
		$("#" + hours[i])
			.removeClass("present")
			.addClass("past");
	} else {
		$("#" + hours[i]) 
			.addClass("present");
	}
}




// that local storage will maintain the data even after the page refreshes