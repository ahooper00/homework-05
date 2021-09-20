// A timer showing the current day and time
function timer() {
    var currentTimeAndDate = moment();
    $("#currentTime").text(currentTimeAndDate.format("LTS"));
    $("#currentDay").text(currentTimeAndDate.format("dddd, MMMM Do, YYYY"));
};

setInterval(timer, 1000);

// I need to create segments made up of hour blocks between 8am and 5pm
// An event can be inputted into any of the timeblocks within these hours
// Colour coded to represent past, present or future events
// Click on a time, and presented with a form
