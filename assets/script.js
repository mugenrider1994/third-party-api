// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

    var selectSaveButton = $(".saveBtn")
    selectSaveButton.on("click", function(){
        var hourId = $(this).parent().attr("id");
        var userInput = $(this).siblings(".description").val();
        localStorage.setItem(hourId, userInput);
    });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    var currentHour = (dayjs().hour());

    $('.time-block').each(function() {
        var hour = $(this).attr("id").split("-")[1]
        
        if (hour < currentHour) {
            $(this).addClass('past')

        }
        
        else if (hour == currentHour) {
            $(this).addClass('present')
        }

        else if (hour > currentHour) {
            $(this).addClass('future')
        }



    

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    var savedUserInput = localStorage.getItem('hour-' + hour)

    if(savedUserInput) {
        $(this).children(".description").val(savedUserInput);
    }
    })

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    var currentDayEl = $("#currentDay");
    var todaysDate = dayjs().format("dddd, MMMM D, YYYY");
    currentDayEl.text(todaysDate);
  });