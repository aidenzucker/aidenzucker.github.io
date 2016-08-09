function whenDocumentIsReady() {
  function showMore () {
    $('.more').slideToggle();
    if ($('#see-more').html() ==='See more') {
      $('#see-more').html('See less');
    } else {
      $('#see-more').html('See more');
    }
  }
  $('#see-more').on('click', showMore);
}

$(document).ready(whenDocumentIsReady);


// Animate scroll when you click "Work"
$(document).ready(function() {
   $('#projects-container').localScroll({duration:800});

   // Serendipity.how --> Project 1
   $('#p1').mouseover(function(e) {
    var x0 = $('#p1').offset().left;
    var x1 = x0 + $('#p1').width();
    var y0 = $('#p1').offset().top;
    var y1 = y0 + $('#p1').height();
    $('#p1').mousemove(function(e) {
      if (e.pageX > x0 && e.pageX < x1 && e.pageY > y0 && e.pageY < y1) {
        $('#card-1').css({
          display: 'block',
          left: e.pageX - 200,
          top: e.pageY- 250
        });
      }
      else {
        $('#card-1').css('display', 'none');
      }
    });
  });

   // Start Up Chile --> Project 2
   $('#p2').mouseover(function(e) {
    var x0 = $('#p2').offset().left;
    var x1 = x0 + $('#p2').width();
    var y0 = $('#p2').offset().top;
    var y1 = y0 + $('#p2').height();
    $('#p2').mousemove(function(e) {
      if (e.pageX > x0 && e.pageX < x1 && e.pageY > y0 && e.pageY < y1) {
        $('#card-2').css({
          display: 'block',
          left: e.pageX - 950,
          top: e.pageY - 250
        });
      }
      else {
        $('#card-2').css('display', 'none');
      }
    });
  });

   // WWYTFAP --> Project 3
   $('#p3').mouseover(function(e) {
    var x0 = $('#p3').offset().left;
    var x1 = x0 + $('#p3').width();
    var y0 = $('#p3').offset().top;
    var y1 = y0 + $('#p3').height();
    $('#p3').mousemove(function(e) {
      if (e.pageX > x0 && e.pageX < x1 && e.pageY > y0 && e.pageY < y1) {
        $('#card-3').css({
          display: 'block',
          left: e.pageX - 200,
          top: e.pageY - 800
        });
      }
      else {
        $('#card-3').css('display', 'none');
      }
    });
  });


});
