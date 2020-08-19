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
  $(document).ready(function(){
    $('#first-col').animate({left:"-100vw"}, 2000);
    $('#second-col').animate({left:"-100vw"}, 2000);
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
  });
}

function closeGallery() {
  $.scrollify.enable();
  document.getElementById("chapters").style.visibility = "hidden";
  $('html').css("overflow-y","visible");
  $('#first-col').animate({left:"0vw"}, 2000);
  $('#second-col').animate({left:"0vw"}, 2000);
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
  $(".active-mockup").removeClass("mockup-slide-in");
  $('#showcase').children("div").remove();

  $("#photos").addClass("slide-close-gallery");
  $("#auxiliary-panel-one").addClass("slide-close-gallery-one");
  $("#auxiliary-panel-two").addClass("slide-close-gallery-two");
  $("#auxiliary-panel-three").addClass("slide-close-gallery-three");
}

function openProject() {
  $.scrollify.disable();
  $('html').css("overflow-y","hidden");
  //document.getElementById('auxiliary-panel-one').style.visibility = "visible";
  //document.getElementById('auxiliary-panel-two').style.visibility = "visible";
  //document.getElementById('auxiliary-panel-three').style.visibility = "visible";
  $(document).ready(function(){
    $('#first-col').animate({left:"100vw"}, 2000);
    $('#second-col').animate({left:"100vw"}, 2000);
    $('.open').fadeOut("fast");
    $('.open-project').fadeOut("fast");
    //if(  $("#auxiliary-panel-one").hasClass("slide-close-gallery-one") ) {
    //  $("#photos").removeClass("slide-close-gallery");
    //  $("#auxiliary-panel-one").removeClass("slide-close-gallery-one");
    //  $("#auxiliary-panel-two").removeClass("slide-close-gallery-two");
    //  $("#auxiliary-panel-three").removeClass("slide-close-gallery-three");
    //}
    //$("#auxiliary-panel-one").addClass("slide-open-gallery-one");
    //$("#auxiliary-panel-two").addClass("slide-open-gallery-two");
    //$("#auxiliary-panel-three").addClass("slide-open-gallery-three");
    //$("#photos").addClass("slide-open-gallery");
    //setTimeout('$("#back-div").fadeIn(1000)', 2200);
  });
}

function closeProject() {
  $.scrollify.enable();
  $('html').css("overflow-y","visible");
  $('#first-col').animate({left:"0vw"}, 2000);
  $('#second-col').animate({left:"0vw"}, 2000);
  $('.open').animate({left:"0vw"}, 2000);
  $('.open').fadeIn("slow");
  $('.open-project').animate({left:"0vw"}, 2000);
  $('.open-project').fadeIn("slow");
  //$('#back-div').hide();

  //$("#auxiliary-panel-one").removeClass("slide-open-gallery-one");
  //$("#auxiliary-panel-two").removeClass("slide-open-gallery-two");
  //$("#auxiliary-panel-three").removeClass("slide-open-gallery-three");

  //$("#auxiliary-panel-one").addClass("slide-close-gallery-one");
  //$("#auxiliary-panel-two").addClass("slide-close-gallery-two");
  //$("#auxiliary-panel-three").addClass("slide-close-gallery-three");
}

var hovered = false;

function move(section) {
  if (!hovered) {
    hovered = true;
    $('.float-icon').animate({'marginTop' : "-=30%"}, 500);
    if (section=="gallery") {
      $('.gallery-title-div').animate({ opacity: 1 }, { duration: 3000 });
      $('.open-container').animate({ opacity: 1 }, { duration: 3000 });
    } else {

    }
  }
}
