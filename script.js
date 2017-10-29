function attachEventHandlers() {
	$('.menu-image').on('click', handleImageClick);
	$('.header').on('click', handleHeaderClick);
}

function handleHeaderClick(event) {
	const target = $(event.target);
	const menuImages = $('.menu-image');
	const infoPanes = $('.info-pane');

	menuImages.removeClass('not-selected');
	menuImages.removeClass('selected');
	
	infoPanes.removeClass('visible');
	infoPanes.fadeOut(250);
	
	$('div.home-info-pane').addClass('visible');
	$('div.home-info-pane').fadeIn(250);
}

function handleImageClick(event) {
	const target = $(event.target);
	const menuImages = $('.menu-image');
	const infoPanes = $('.info-pane');

	if (!target.hasClass('selected')) {

		menuImages.removeClass('selected');
		menuImages.addClass('not-selected');

		target.removeClass('not-selected');
		target.addClass('selected');

		infoPanes.removeClass('visible');
		infoPanes.fadeOut(250);

		$('div.home-info-pane').removeClass('visible');
		$('div.home-info-pane').fadeOut(250);

		if (target.hasClass('about-me-image')) {
			$('div.about-me-info-pane').addClass('visible');
			$('div.about-me-info-pane').fadeIn(250);
		} else if (target.hasClass('skills-image')) {
			$('div.skills-info-pane').addClass('visible');
			$('div.skills-info-pane').fadeIn(250);
		} else if (target.hasClass('education-image')) {
			$('div.education-info-pane').addClass('visible');
			$('div.education-info-pane').fadeIn(250);
		} else if (target.hasClass('work-image')) {
			$('div.work-info-pane').addClass('visible');
			$('div.work-info-pane').fadeIn(250);
		} else if (target.hasClass('projects-image')) {
			$('div.projects-info-pane').addClass('visible');
			$('div.projects-info-pane').fadeIn(250);
		} else {
			$('div.contact-me-info-pane').addClass('visible');
			$('div.contact-me-info-pane').fadeIn(250);
		}
	}
}

$('document').ready(function() {
	attachEventHandlers();
});