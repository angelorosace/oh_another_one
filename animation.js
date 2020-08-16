var logo = function displayLogo() {
  document.getElementById("logo").style.visibility = "visible";
}
setTimeout("logo()", 5600)

var another = function displayAnotherOne() {
  document.getElementById("anotherOne").style.visibility = "visible";
}
setTimeout("another()", 2750)

var desc = function displayDescription() {
  document.getElementById("description-locator").style.visibility = "visible";
}
setTimeout("desc()", 7200)

var hideButton = function () {
  document.getElementById("skip").style.visibility = "hidden";
}
setTimeout("hideButton()", 7200);

function openGallery() {
  $.scrollify.disable();
  setTimeout('document.getElementById("chapters").style.visibility = "visible"', 1200);
  document.getElementById('auxiliary-panel-one').style.visibility = "visible";
  document.getElementById('auxiliary-panel-two').style.visibility = "visible";
  document.getElementById('auxiliary-panel-three').style.visibility = "visible";
  document.getElementById('photos').style.visibility = "visible";
  $(document).ready(function(){
      $('#gallery-title').animate({left:"-100vw"}, 2000);
      $('.open-gallery-link').fadeOut("slow");
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
  $('#gallery-title').animate({left:"0vw"}, 2000);
  $('.open-gallery-link').animate({left:"0vw"}, 2000);
  $('.open-gallery-link').fadeIn("slow");
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
