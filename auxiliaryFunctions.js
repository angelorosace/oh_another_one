function skip() {
  $(document).ready(function(){
      $("#anotherOne").hide();
  });
  clearTimeout(another);
  clearTimeout(hideButton);
  document.getElementById("anotherOne").style.visibility = "hidden";
  document.getElementById("oh").style.visibility = "hidden";
  document.getElementById("skip").style.visibility = "hidden";
  document.getElementById("scroll").style.visibility = "visible";
  showParts();
  parts();
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
