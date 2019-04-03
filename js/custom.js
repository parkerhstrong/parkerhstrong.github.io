
(function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('close');
        $('.site-branding').toggleClass('hide');
        $('.site-navigation').toggleClass('show');
        $('.site-header').toggleClass('no-shadow');
    });

    // Scroll to Next Section
    $( '.scroll-down' ).click(function() {
        $( 'html, body' ).animate({
            scrollTop: $( '.scroll-down' ).offset().top + 100
        }, 800 );
    });
})(jQuery);




$(document).ready(function() {
    $('#contact-form').submit(function(e) {
      var name    = document.getElementById('inputName')
      var email   = document.getElementById('inputEmail')
      var message = document.getElementById('inputMessage')
  
      if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/parker.strong.jr@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success("Message sent");
      }
    });
  });