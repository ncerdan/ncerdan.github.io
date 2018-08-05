function attachEventHandlers() {
	$('.project').on('mouseenter', handleProjectHover);
	$('.project').on('mouseleave', handleProjectLeave);
}

function handleProjectHover(event) {
	$(event.currentTarget).addClass('hovered');
	$(event.currentTarget).find('.project-title').animate({
		'bottom': '90%'
	}, 175);
	$(event.currentTarget).find('.project-description').slideToggle(200);
}

function handleProjectLeave(event) {
	$(event.currentTarget).removeClass('hovered');
	$(event.currentTarget).find('.project-title').animate({
		'bottom': '0px'
	}, 175);
	$(event.currentTarget).find('.project-description').slideToggle(200);

}

$('document').ready(() => {
	attachEventHandlers();
});

