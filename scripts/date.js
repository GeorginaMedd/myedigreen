var date = document.getElementById("date");
var time = document.getElementById("time");

var now = new Date();

var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();

if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}

date.innerHTML = day + "-" + month + "-" + year;

var hour = now.getHours();
var minute = now.getMinutes();
if (hour < 10) {
  hour = "0" + hour;
}
if (minute < 10) {
  minute = "0" + minute;
}

time.innerHTML = hour + ":" + minute;

var refresh = function() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  time.innerHTML = hour + ":" + minute;
};
setInterval(refresh, 1000);
