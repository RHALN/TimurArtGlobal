
$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    var widthCalc = $(this).width();
    if (widthCalc < 983 ) {
      if (st > lastScrollTop) {
        $(".nav-list").slideUp(300);
      } else {
        $(".nav-list").slideDown(300);
      }
      lastScrollTop = st;
    } else {
      $(".nav-list").slideDown();
    }
  });
});
