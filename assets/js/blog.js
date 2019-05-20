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

