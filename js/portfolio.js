$(document).ready(function() {
  var $root = $('html, body');
  $('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 75
    }, 2000,"easeInOutExpo", function () {
        window.location.hash = href;
    });
    return false;
  });

 var top = $('#email_box').offset().top;
  // $(window).scroll(function (event) {
  //   var y = $(this).scrollTop();

  //   if (y >= top) {
  //     $('#email_box').addClass('fixed');
  //     $('#intro_box').addClass('fixed');
  //   } else {
  //     $('#email_box').removeClass('fixed');
  //     $('#intro_box').removeClass('fixed');
  //   }
  // });
});


