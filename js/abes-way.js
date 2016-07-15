

function whenDocumentIsReady(){
	function handleClick() {
		var itIsOpen = $(this).closest('section').hasClass('open');
		if (itIsOpen) {
			$(this).closest('.accordian').find('section').removeClass('open');
		} else {
			$(this).closest('.accordian').find('section').removeClass('open');
			$(this).closest('section').addClass('open');
		}
	}

	$('.accordian section header').on('click', handleClick)
}

$(document).ready(whenDocumentIsReady);

