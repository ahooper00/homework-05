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
    let currentTimeAndDate = moment();
    $("#currentTime").text(currentTimeAndDate.format("LTS"));
    $("#currentDay").text(currentTimeAndDate.format("dddd, MMMM Do, YYYY"));
};

setInterval(timer, 1000);

function showPlanner() {
    for (let i = 0; i < myDay.length; i++) {
        const row = $("<div>");
        $(row).attr("id", myDay[i].hour);
        $(row).attr("class", "row justify-content-center")
        // $(row).text("This is a test");
        row.appendTo('#container');

        const timeHour = $("<div>");
        $(timeHour).attr("class", "col col-lg-1 time a1 bg-warning");
        $(timeHour).text(myDay[i].hour + myDay[i].meridiem);
        timeHour.appendTo(row);

        const eventDiv = $("<div>");
        $(eventDiv).attr("class", "col col-lg-9 makeEvent a2 colourcode");
        eventDiv.appendTo(row);

        const eventText = $("<input>");
        $(eventText).attr("id", "eventInput");
        $(eventText).val(myDay[i].reminder);
        eventText.appendTo(eventDiv);

        const save = $("<button>");
        $(save).attr("class", "col col-lg-1 save a3 saveBtn bg-info");
        $(save).text("save");
        save.appendTo(row);

        function handleSubmit() {
            const description = $(eventText).val();
            console.log(description);
            $(eventDiv).append('<li>' + description + '</li>');
            $(eventText).val('');
        }
        $(save).on("click", handleSubmit);
    };
    localStorage.setItem("description", JSON.stringify(description));
};
showPlanner();



// signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     // create user object from submission
//     var user = {
//       firstName: firstNameInput.value.trim(),
//       lastName: lastNameInput.value.trim(),
//       email: emailInput.value.trim(),
//       password: passwordInput.value.trim()
//     };
  
//     // set new submission to local storage 
//     localStorage.setItem("user", JSON.stringify(user));
    
//   });




// Input a description into event space
// var addEvent = $(".makeEvent");

// function handleFormSubmit(event) {
//     event.preventDefault();

//     var description = $('[id="makeEvent"]').val();

//     addEvent.append('<li>' + description + '</li>');

//     addEvent.append('<button class="btn btn-danger delete-event-btn">Delete</button>');

//     addEvent.append('<p>' + description + '</p>');
//     $('[class="makeEvent"]').val('');
// }

// function handleDeleteBtn(event) {
//     var btnClicked = $('event.target');
//     btnClicked.parent('li').remove();
// }

// When button clicked, event is saved
// var saveBtn = $(".save");

// addEvent.on("click", ".delete-event-btn", handleDeleteBtn);
// saveBtn.on('click', handleFormSubmit);

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