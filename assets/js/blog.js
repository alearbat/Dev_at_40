/*function myGift() {
  document.getElementById("gift").innerHTML = "Hello JavaScript!!";
  var change_class = document.getElementById("button_gift").className;
  if (change_class == "fas fa-chevron-down fa-rotate-270") {
    document.getElementById('button_gift').className = "fas fa-chevron-down"; 
    document.getElementById("gift").style.display = "";
  } else {
    document.getElementById("button_gift").className = "fas fa-chevron-down fa-rotate-270";
    document.getElementById("gift").style.display = "none";
    }
}
*/

// This is the same Js, Jquery Version

function myGift() {
  $("#gift").html("Hello JavaScript!!");
  var change_class = $("#button_gift").hasClass("fa-rotate-270");
  if (change_class == true) {
    $("#button_gift").removeClass("fa-rotate-270");
    $("#gift").css("display", "");
  } else {
    $("#button_gift").addClass("fa-rotate-270");
    $("#gift").css("display", "none");
  }
}

