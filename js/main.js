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
});
