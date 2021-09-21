var myDay = [
    { 
        block: "0",
        hour: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        block: "1",
        hour: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        block: "2",
        hour: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        block: "3",
        hour: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        block: "4",
        hour: "01",
        meridiem: "pm",
        reminder: ""
    },
    {
        block: "5",
        hour: "02",
        meridiem: "pm",
        reminder: ""
    },
    {
        block: "6",
        hour: "03",
        meridiem: "pm",
        reminder: ""
    },
    {
        block: "7",
        hour: "04",
        meridiem: "pm",
        reminder: ""
    },
    {
        block: "8",
        hour: "05",
        meridiem: "pm",
        reminder: ""
    },
]

// A timer showing the current day and time
function timer() {
    var currentTimeAndDate = moment();
    $("#currentTime").text(currentTimeAndDate.format("LTS"));
    $("#currentDay").text(currentTimeAndDate.format("dddd, MMMM Do, YYYY"));
};

setInterval(timer, 1000);

function showPlanner() {
    for (var i = 0; i < myDay.length; i++) {
        var row = $("<div>");
        $(row).attr("id", myDay[i].hour);
        // $(row).text("This is a test");

        var timeHour = $("<div>");
        $(timeHour).attr("class", "col col-lg-1 time a1");
        $(timeHour).text(myDay[i].hour + myDay[i].meridiem);

        var eventText = $("<input>");
        $(eventText).attr("class", "col col-lg-10 makeEvent a2");
        $(eventText).val(myDay[i].reminder);

        var save = $("<button>");
        $(save).attr("class", "col col-lg-1 save a3");
        $(save).text("save");

        console.log(myDay[i].hour);
        row.appendTo('#container');
        timeHour.appendTo(row);
        eventText.appendTo(row);
        save.appendTo(row);
    };
};
showPlanner();

// Input a description into event space
var addEvent = $(".makeEvent");

function handleFormSubmit(event) {
    event.preventDefault();

    var description = $('[class="makeEvent"]').val();

    addEvent.append('<li>' + description + '</li>');

    addEvent.append('<button class="btn btn-danger delete-event-btn">Delete</button>');

    addEvent.append('<p>' + description + '</p>');
    $('[class="makeEvent"]').val('');
}

function handleDeleteBtn(event) {
    var btnClicked = $('event.target');
    btnClicked.parent('li').remove();
}

// When button clicked, event is saved
var saveBtn = $(".save");

addEvent.on("click", ".delete-event-btn", handleDeleteBtn);
saveBtn.on('click', handleFormSubmit);

// I need to create interactive segments made up of hour blocks between 9am and 5pm
// An event can be inputted into any of the timeblocks within these hours
// Colour coded to represent past, present or future events
// Click on a time, and presented with a form??

// var event = {
//     startTime: "",
//     endTime: "",
//     reminder: ""
// };

// Where do put the reminder?
// How to put the reminder in to that spot?
// How to I save the reminder?
// How do I add a time to the reminder?