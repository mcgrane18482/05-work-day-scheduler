// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var main = $('#main');
var currentHour = dayjs().hour()
$("#currentDay").text(dayjs().format("dddd D MMMM, YYYY"))


$(function () {
  $(".saveBtn").on("click", function(event){
    event.preventDefault()
    var text = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("id")
   localStorage.setItem(hour, text)
  })

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))

$(".time-block").each(function(){
  var blockTime = parseInt($(this).attr("id").split("-")[1])
  if(blockTime<currentHour){
    $(this).addClass("past")
  }else if(blockTime === currentHour){
    $(this).removeClass("past")
    $(this).addClass("present")
  }else{
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
  }
})
});
