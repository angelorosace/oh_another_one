function skip() {
  $(document).ready(function(){
      $("#description-locator").removeClass("fade-in-delayed");
      $("#logo").removeClass("slide-in-from-right");
      $("#logo").addClass("logo-not-animated");
      $("#anotherOne").hide();
  });
  clearTimeout(another);
  clearTimeout(desc);
  clearTimeout(logo);
  clearTimeout(hideButton);
  logo()
  desc()
  document.getElementById("anotherOne").style.visibility = "hidden";
  document.getElementById("oh").style.visibility = "hidden";
  document.getElementById("skip").style.visibility = "hidden";
}

function removeScrollY() {
  $(document).ready(function(){
      $("html").css({
          'overflow-y': 'hidden'
      });
  });
}

function restoreScrollY() {
  $(document).ready(function(){
      $("html").css({
          'overflow-y': 'scroll'
      });
  });
}

function removeScrollX() {
  $(document).ready(function(){
      $("html").css({
          'overflow-x': 'hidden'
      });
  });
}

function restoreScrollX() {
  $(document).ready(function(){
      $("html").css({
          'overflow-x': 'scroll'
      });
  });
}
