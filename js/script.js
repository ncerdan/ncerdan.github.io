/*will handle all event*/
function attachEventHandlers() {
	$('.project').hover(handleProjectEnter, handleProjectLeave);
	$('.contact-item').on('mouseenter', handleContactEnter);
}

/*moves title to top and brings description out at bottom*/
function handleProjectEnter(event) {
	$(event.currentTarget).addClass('hovered');
	$(event.currentTarget).find('.project-title').animate({
		'bottom': '90%'
	}, 175);
	$(event.currentTarget).find('.project-description').slideToggle(200);
}

/*returns title and description back to normal*/
function handleProjectLeave(event) {
	$(event.currentTarget).removeClass('hovered');
	$(event.currentTarget).find('.project-title').animate({
		'bottom': '0px'
	}, 175);
	$(event.currentTarget).find('.project-description').slideToggle(200);
}

/*make icons 'bounce'*/
function handleContactEnter(event) {
	$(event.currentTarget).find('.contact-icon').animate({
		'bottom': '25px'
	}, 100);
	$(event.currentTarget).find('.contact-icon').animate({
		'bottom': '0px'
	}, 100);
	$(event.currentTarget).find('.contact-icon').animate({
		'bottom': '10px'
	}, 65);
	$(event.currentTarget).find('.contact-icon').animate({
		'bottom': '0px'
	}, 65);
}

/*readys event listeners*/
$('document').ready(function() {
	attachEventHandlers();
});

