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

