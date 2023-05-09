(function($) {
	function isEmail(email) {
  	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	return regex.test(email);
	}

	$(document).ready(function() {
		if( $(document).width() >= 1200 ) {
			$('.extension-col').each(function(i, val) {
				$(val).css('margin-top', (i * 2.5) + 'rem');
			});
		}

		$('.btn-menu').on('click', function(e) {
			e.preventDefault();
			var $menu = $(this).parent().find('.menu');
			$('.modal').addClass('shown');
			$('.modal-body').append($menu.clone());
			$('html').addClass('modalOn');
		});

		$('.btn-close').on('click', function(e) {
			e.preventDefault();
			$('.modal-body').find('.menu').remove();
			$('.modal').removeClass('shown');
			$('html').removeClass('modalOn');
		});

		$('.nav-tab-link').on('click', function(e) {
			e.preventDefault();
			var $tabLink = $(this);
			$tabLink.parent().parent().find('.nav-tab-link').removeClass('active');
			$tabLink.parent().parent().find('.nav-tab-link').attr('aria-selected', 'false');
			$tabLink.addClass('active');
			$tabLink.attr('aria-selected', 'true');
			$($tabLink.data('target')).parent().find('.tab-pane').removeClass('show').removeClass('active');
			$($tabLink.data('target')).addClass('show').addClass('active');
		});

		$('.accordion-button').on('click', function(e) {
			e.preventDefault();
			var $accBtn = $(this);
			if( $accBtn.attr('aria-expanded') === 'false' ) {
				$accBtn.parent().parent().parent().find('.accordion-button').removeClass('active');
				$accBtn.parent().parent().parent().find('.accordion-button').attr('aria-expanded', 'false');
				$($accBtn.data('target')).parent().parent().find('.accordion-collapse').removeClass('show').removeClass('active');
				$accBtn.attr('aria-expanded', 'true');
				$accBtn.addClass('active');
				$($accBtn.data('target')).addClass('show').addClass('active');
			} else {
				$accBtn.attr('aria-expanded', 'false');
				$accBtn.removeClass('active');
				$($accBtn.data('target')).removeClass('show').removeClass('active');
			}
		});

		$('.contact-form').on('submit', function(e){
			e.preventDefault();
			var $form = $(this);
			var $email = $form.find('input[name="email"]');
			$form.find('.form-message').remove();
			$email.removeClass('field-error');
			$email.removeClass('field-success');
			$email.parent().removeClass('has-error');
			$email.parent().removeClass('has-success');

			if( isEmail($email.val()) === false ) {
				$email.addClass('field-error');
				$email.parent().addClass('has-error');
				$email.parent().append("<p class=\"form-message\">Whoops, make sure it's an email</p>");
			} else {
				$email.addClass('field-success');
				$email.parent().addClass('has-success');
				$email.parent().append("<p class=\"form-message\">Joined successfully!</p>");
			}
		});
	});
})(jQuery);