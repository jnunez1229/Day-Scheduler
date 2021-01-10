// displays time upon opening webpage
let date = moment().format("MMMM DD, YYYY hh:mm:ss A");
    $('#currentDay').text(date);

// clock display timer
setInterval(function(){
    date = moment().format("MMMM DD, YYYY hh:mm:ss A");
    $('#currentDay').text(date);
}, 1000);

// updates Timeblock color based on the hour
function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".description").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // add class "past" if currentHour is greater than blockHour
      if(currentHour > blockHour) {
        $(this).addClass("past");
      }
     
      //remove class "past" and add class "present" if currentHour = blockHourd
      else if(currentHour === blockHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
     
      // remove class "past", remove class "present", add class "future" if time has passed
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
      
    });
}

hourUpdater();







