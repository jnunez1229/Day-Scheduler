// displays time upon opening webpage
let date = moment().format("MMMM DD, YYYY hh:mm:ss A");
    $('#currentDay').text(date);

// clock display timer
setInterval(function(){
    date = moment().format("MMMM DD, YYYY hh:mm:ss A");
    $('#currentDay').text(date);
}, 1000);








