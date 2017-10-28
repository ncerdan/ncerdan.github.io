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

		infoPanes.fadeOut(200);

		$('div.default-info-pane').addClass('selected');
		$('div.default-info-pane').fadeIn(200);
	}

	else {
		menuImages.removeClass('selected');
		menuImages.addClass('not-selected');

		target.removeClass('not-selected');
		target.addClass('selected');

		infoPanes.removeClass('selected');
		infoPanes.fadeOut(200);

		$('div.default-info-pane').removeClass('selected');
		$('div.default-info-pane').fadeOut(200);

		if (target.hasClass('home-image')) {
			$('div.home-info-pane').addClass('selected');
			$('div.home-info-pane').fadeIn(200);
		} else if (target.hasClass('about-me-image')) {
			$('div.about-me-info-pane').addClass('selected');
			$('div.about-me-info-pane').fadeIn(200);
		} else if (target.hasClass('education-image')) {
			$('div.education-info-pane').addClass('selected');
			$('div.education-info-pane').fadeIn(200);
		} else if (target.hasClass('work-image')) {
			$('div.work-info-pane').addClass('selected');
			$('div.work-info-pane').fadeIn(200);
		} else if (target.hasClass('projects-image')) {
			$('div.projects-info-pane').addClass('selected');
			$('div.projects-info-pane').fadeIn(200);
		} else {
			$('div.contact-me-info-pane').addClass('selected');
			$('div.contact-me-info-pane').fadeIn(200);
		}
	}
}

$('document').ready(function() {

	attachEventHandlers();

});