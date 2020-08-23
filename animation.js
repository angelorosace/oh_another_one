var showParts = function displayParts() {
  document.getElementsByClassName("floating")[0].style.visibility = "visible";
  document.getElementsByClassName("floating")[1].style.visibility = "visible";
  document.getElementsByClassName("floating")[2].style.visibility = "visible";
  document.getElementsByClassName("floating")[3].style.visibility = "visible";
  document.getElementsByClassName("floating")[4].style.visibility = "visible";
}
setTimeout("showParts()", 6000);

var parts = function displayParts() {
  $('.floating').addClass("temp");
  $('.temp').removeClass("floating");
  $('.temp').addClass("floating-not-animated");
}

var another = function displayAnotherOne() {
  document.getElementById("anotherOne").style.visibility = "visible";
}
setTimeout("another()", 2900);

var hideButton = function () {
  document.getElementById("skip").style.visibility = "hidden";
}
setTimeout("hideButton()", 7200);

var showScroll = function () {
  document.getElementById("scroll").style.visibility = "visible";
}
setTimeout("showScroll()", 7200);

function openGallery() {
  $.scrollify.disable();
  setTimeout('document.getElementById("chapters").style.visibility = "visible"', 1200);
  $('html').css("overflow-y","hidden");
  document.getElementById('auxiliary-panel-one').style.visibility = "visible";
  document.getElementById('auxiliary-panel-two').style.visibility = "visible";
  document.getElementById('auxiliary-panel-three').style.visibility = "visible";
  document.getElementById('photos').style.visibility = "visible";
  $('#first-col').animate({left:"-200%"}, 700);
  $('#second-col').animate({left:"-200%"}, 700);
  $('#scroll-gallery').animate({left:"-200%"}, 3000);
  $('.open').fadeOut("fast");
  $('.open-project').fadeOut("fast");
  if(  $("#auxiliary-panel-one").hasClass("slide-close-gallery-one") ) {
    $("#photos").removeClass("slide-close-gallery");
    $("#auxiliary-panel-one").removeClass("slide-close-gallery-one");
    $("#auxiliary-panel-two").removeClass("slide-close-gallery-two");
    $("#auxiliary-panel-three").removeClass("slide-close-gallery-three");
  }
  $("#auxiliary-panel-one").addClass("slide-open-gallery-one");
  $("#auxiliary-panel-two").addClass("slide-open-gallery-two");
  $("#auxiliary-panel-three").addClass("slide-open-gallery-three");
  $("#photos").addClass("slide-open-gallery");
  setTimeout('$("#back-div").fadeIn(1000)', 2200);
}

function closeGallery() {
  $.scrollify.enable();
  document.getElementById("chapters").style.visibility = "hidden";
  $('html').css("overflow-y","visible");
  $('#first-col').animate({left:"0"}, 1000);
  $('#second-col').animate({left:"0"}, 1000);
  $('#scroll-gallery').animate({left:"0"}, 3000);
  $('.open').animate({left:"0vw"}, 2000);
  $('.open').fadeIn("slow");
  $('.open-project').animate({left:"0vw"}, 2000);
  $('.open-project').fadeIn("slow");
  $('#back-div').hide();

  $("#auxiliary-panel-one").removeClass("slide-open-gallery-one");
  $("#auxiliary-panel-two").removeClass("slide-open-gallery-two");
  $("#auxiliary-panel-three").removeClass("slide-open-gallery-three");
  $("#photos").removeClass("slide-open-gallery");

  $('.active-illustration').removeClass("illustration-slide-in");
  $('#showcase').children("div").remove();

  $("#photos").addClass("slide-close-gallery");
  $("#auxiliary-panel-one").addClass("slide-close-gallery-one");
  $("#auxiliary-panel-two").addClass("slide-close-gallery-two");
  $("#auxiliary-panel-three").addClass("slide-close-gallery-three");
}

function openProject() {
  $.scrollify.disable();
  $('html').css("overflow-y","hidden");
  document.getElementById('auxiliary-panel-four').style.visibility = "visible";
  document.getElementById('auxiliary-panel-five').style.visibility = "visible";
  document.getElementById('auxiliary-panel-six').style.visibility = "visible";
  $(document).ready(function(){
    $('#first-col').animate({left:"200%"}, 1000);
    $('#second-col').animate({left:"200%"}, 1000);
    $('#scroll-gallery').animate({left:"200%"}, 3000);
    $('.open').fadeOut("fast");
    $('.open-project').fadeOut("fast");
    if(  $("#auxiliary-panel-four").hasClass("slide-close-gallery-four") ) {
      $("#project").removeClass("slide-close-project");
      $("#auxiliary-panel-four").removeClass("slide-close-gallery-four");
      $("#auxiliary-panel-five").removeClass("slide-close-gallery-five");
      $("#auxiliary-panel-six").removeClass("slide-close-gallery-six");
    }
    $("#auxiliary-panel-four").addClass("slide-open-gallery-four");
    $("#auxiliary-panel-five").addClass("slide-open-gallery-five");
    $("#auxiliary-panel-six").addClass("slide-open-gallery-six");
    $("#project").addClass("slide-open-project");
    setTimeout('$("#back-div-project").fadeIn(1000)', 2200);
  });
}

function closeProject() {
  $.scrollify.enable();
  $('html').css("overflow-y","visible");
  setTimeout("$('#second-col').animate({left:'0%'}, 2000);", 700);
  setTimeout("$('#first-col').animate({left:'0%'}, 2000);", 700);
  $('#scroll-gallery').animate({left:"0%"}, 3000);
  $('.open').animate({left:"0vw"}, 2000);
  $('.open').fadeIn("slow");
  $('.open-project').animate({left:"0vw"}, 2000);
  $('.open-project').fadeIn("slow");
  $('#back-div-project').hide();

  $("#auxiliary-panel-four").removeClass("slide-open-gallery-four");
  $("#auxiliary-panel-five").removeClass("slide-open-gallery-five");
  $("#auxiliary-panel-six").removeClass("slide-open-gallery-six");
  $("#project").removeClass("slide-open-project");

  $("#project").addClass("slide-close-project");
  $("#auxiliary-panel-four").addClass("slide-close-gallery-four");
  $("#auxiliary-panel-five").addClass("slide-close-gallery-five");
  $("#auxiliary-panel-six").addClass("slide-close-gallery-six");
}
