// CSS
$(document).ready(function () {
  $("#btnChangeColor").css("display", "block");
  $("#btnChangeColor").click(function () {
    $(".box").css("background-color", "blue");
    $("#box1").css("border", "1px solid yellow");
  });
});

// HTML
$(document).ready(function () {
  $("#html_button").click(function(){
    $("#html_id p").html("<p><b><mark>Diğer Satır</mark></b></p>")
  });
});

// Text
$(document).ready(function () {
  $("#text_button").click(function(){
    $("#html_id p").html("<p>Text Diğer Satır</p>")
  });
});

// Attribute
$(document).ready(function(){
  $("#attr_button").click(function () {
    $("#attr_id").attr("href","https://www.google.com")
  })
});