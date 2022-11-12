(function ($) {
  $(function () {
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
    $(".collapsible").collapsible();
    $(".tabs").tabs({ swipeable: true });
    $(".carousel").carousel();
    $(".modal").modal();
    $('.gallery-expand').galleryExpand('close');

  });
})(jQuery);

$(document).ready(function () {
  $(".slider").slider({
    indicators: false,
  });
  $(document).ready(function () {
    $(".fixed-action-btn").floatingActionButton({ hoverEnabled: false });
  });
});

$(document).ready(function () {
  $(".scrollspy").scrollSpy();
});


