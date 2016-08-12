function whenDocumentIsReady() {
  function showMore () {
    $('.more').slideToggle();
    if ($('#see-more').html() ==='What else?') {
      $('#see-more').html('Okay cool');
    } else {
      $('#see-more').html('What else?');
    }
  }
  $('#see-more').on('click', showMore);
}

//returns true if window width is under 800px
function detectmob() {
   if(window.innerWidth <= 800) {
     return true;
   } else {
     return false;
   }
}

$(document).ready(whenDocumentIsReady);


// Animate scroll when you click "Work"
$(document).ready(function() {
   $('#projects-container').localScroll({duration:800});

  if(!detectmob()){

    var container = $('.project-container');
    var p1 = $('#p1');
    var p2 = $('#p2');
    var p3 = $('#p3');
    var p4 = $('#p4');
    var card = $('.info-card');
    var title = $('.project-title');
    var date = $('.project-date');
    var desc = $('.project-description');

    container.mouseover(function() {
      p1.mouseover(function() {
        title.html('serendipity.how');
        date.html('2016');
        desc.html('Experimental website and tool for thinking about serendipity in a new way');
      });

      p2.mouseover(function() {
        title.html('Brand Manual for<br>Start-Up Chile');
        date.html('2015');
        desc.html('Heavily-researched set of bilingual design guidelines and tools');
      });

      p3.mouseover(function() {
        title.html('What Would You Trade<br>For A Pancake?');
        date.html('2016');
        desc.html('A delicious exchange system designed to take people out of their daily routine');
      });

      p4.mouseover(function() {
        title.html('Poetics of Space');
        date.html('2015');
        desc.html('Interdisciplinary book that juxtaposes Hiroshi Sugimoto & Gaston Bachelard');
      });

      container.mousemove(function(e) {
        card.css({
          display: 'inline-block',
          left: e.pageX - (card.width() / 2),
          top: e.pageY + 2
        });
      });
    });

    container.mouseleave(function() {
      card.css('display', 'none');
    })
  }
});


