// An array displaying the hour slots with the time, meridiem (am/pm), and reminder
var defaultDay = [
    {
        block: "0",
        hour: "09",
        meridiem: "am",
        reminder: []
    },
    {
        block: "1",
        hour: "10",
        meridiem: "am",
        reminder: []
    },
    {
        block: "2",
        hour: "11",
        meridiem: "am",
        reminder: []
    },
    {
        block: "3",
        hour: "12",
        meridiem: "pm",
        reminder: []
    },
    {
        block: "4",
        hour: "01",
        meridiem: "pm",
        reminder: []
    },
    {
        block: "5",
        hour: "02",
        meridiem: "pm",
        reminder: []
    },
    {
        block: "6",
        hour: "03",
        meridiem: "pm",
        reminder: []
    },
    {
        block: "7",
        hour: "04",
        meridiem: "pm",
        reminder: []
    },
    {
        block: "8",
        hour: "05",
        meridiem: "pm",
        reminder: []
    },
];

// Local storage gets any reminders that have been saved in the planner, as well as retrieving the planner itself
let storedDay = localStorage.getItem("myDay");
let myDay;
if (storedDay == null) {
    myDay = defaultDay;
} else {
    myDay = JSON.parse(storedDay);
}

// A timer showing the current day and time
function timer() {
    let currentTimeAndDate = moment();
    $("#currentTime").text(currentTimeAndDate.format("LTS"));
    $("#currentDay").text(currentTimeAndDate.format("dddd, MMMM Do, YYYY"));
};

setInterval(timer, 1000);

// A planner displaying the time slots with a section to input events/reminders, and a save button
function showPlanner() {
    for (let i = 0; i < myDay.length; i++) {
        const row = $("<div>");
        $(row).attr("id", myDay[i].hour);
        $(row).attr("class", "row justify-content-center")
        // $(row).text("This is a test");
        row.appendTo('#container');

        // This div displays the hour from 9am to 5pm
        const timeHour = $("<div>");
        $(timeHour).attr("class", "col col-lg-1 time a1 bg-warning");
        $(timeHour).text(myDay[i].hour + myDay[i].meridiem);
        timeHour.appendTo(row);

        const eventDiv = $("<div>");
        $(eventDiv).attr("class", "col col-lg-9 makeEvent a2 colourcode");
        eventDiv.appendTo(row);

        // A section to write events/reminders
        const eventText = $("<input>");
        $(eventText).attr("id", "eventInput");
        $(eventText).attr("placeholder", "Enter reminder here");
        eventText.appendTo(eventDiv)

        for (let j = 0; j < myDay[i].reminder.length; j++) {
            $(eventDiv).append('<li>' + myDay[i].reminder[j] + '</li>');
        };

        // A save button to save the event/reminder into the slot
        const save = $("<button>");
        $(save).attr("class", "col col-lg-1 save a3 saveBtn bg-info");
        $(save).text("save");
        save.appendTo(row);

        // A function to handle the saving of a reminder, saving each as a list item
        function handleSubmit() {
            const description = $(eventText).val();
            console.log(description);
            $(eventDiv).append('<li>' + description + '</li>');
            $(eventText).val('');

            // Attempt of inserting a delete button for each event inputted but could not get it to work
            // const deleteBtn = $("<button>");
            // $(deleteBtn).attr("class", "btn btn-danger delete-event-btn");
            // $(deleteBtn).attr("type", "submit");
            // deleteBtn.appendTo('li');

            // Local storage saves reminders that are entered in the events section
            myDay[i].reminder.push(description);
            localStorage.setItem("myDay", JSON.stringify(myDay));
        }

        // function handleDeleteBtn() {
        //     const makeDelete = $(deleteBtn)
        //     makeDelete('li').remove();
        // }
        // $(deleteBtn).on("click", handleDeleteBtn);

        // Including an 'on click' event for the save button, which uses the handleSubmit function
        $(save).on("click", handleSubmit);
    };
};

// Calls the planner so that it is displayed on the page
showPlanner();

