function attachEventHandlers() {
	$('.menu-image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const menuImages = $('.menu-row .menu-image');

	if (target.hasClass('selected')) {
		menuImages.removeClass('not-selected');
		target.removeClass('selected');
	}
	else {
		menuImages.removeClass('selected');
		menuImages.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');
	}
}

$('document').ready(function() {

	attachEventHandlers();

});