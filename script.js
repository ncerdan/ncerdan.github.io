function attachEventHandlers() {
	$('.menu-image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const menuImages = $('.menu-image');
	const infoPanes = $('.info-pane');

	if (target.hasClass('selected')) {
		menuImages.removeClass('not-selected');
		infoPanes.removeClass('selected');
		target.removeClass('selected');
	}

	else {
		menuImages.removeClass('selected');
		menuImages.addClass('not-selected');

		target.removeClass('not-selected');
		target.addClass('selected');

		infoPanes.removeClass('selected');

		if (target.hasClass('home-image')) {
			$('div.home-info-pane').addClass('selected');
		} else if (target.hasClass('about-me-image')) {
			$('div.about-me-info-pane').addClass('selected');
		} else if (target.hasClass('education-image')) {
			$('div.education-info-pane').addClass('selected');
		} else if (target.hasClass('work-image')) {
			$('div.work-info-pane').addClass('selected');
		} else if (target.hasClass('projects-image')) {
			$('div.projects-info-pane').addClass('selected');
		} else {
			$('div.contact-me-info-pane').addClass('selected');
		}
	}
}

$('document').ready(function() {

	attachEventHandlers();

});