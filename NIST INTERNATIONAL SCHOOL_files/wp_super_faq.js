$(function(){
	/**************************  WP Super FAQ  **************************/
	$('.wp-super-faq-answer').hide();

	// If a closed question is clicked
	$('.wp-super-faq-question-closed').on('click', function(event) {
		event.preventDefault();
		var wp_super_faq_id = '#' + $(this).attr('id') + '-answer';
		$(wp_super_faq_id + ' .wp-super-faq-triangle').html('&#9660;');
		$('.wp-super-faq-answer' + wp_super_faq_id).slideToggle();
		
	});
});