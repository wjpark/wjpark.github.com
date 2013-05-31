$(document).ready(function() {
  var $root = $('html, body');
  $('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top - 75
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
  });
  // $('#email_box').waypoint('sticky', {
  //   offset: 30 // Apply "stuck" when element 30px from top
  // });
});


