var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.getElementById("greetings").innerHTML = "<b>" + greet + "</b>";

function showConfirmation(event) {
  // Prevent the form from submitting (page reload)
  event.preventDefault();

  // Show the confirmation popup
  alert("Your details have been submitted");
}
