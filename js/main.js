$( document ).ready(function() {

  function hidePopUp() {
     $('.popup').css('opacity', '0');
     $('.popup').css('visibility', 'hidden');
  }

  function showPopUp() {
    $('.popup').css('opacity', '1');
    $('.popup').css('visibility', 'visible');
  }

  $('.contact-me').click(function() {
    showPopUp();
  });


  $('.popup').click(function(event) {      
    if ( $( event.target).is('.email-me') || $( event.target).is('.name') || $( event.target).is('.email') || $( event.target).is('.message') || $( event.target).is('.send') ) {
      event.stopPropagation();
    }
    else {
      hidePopUp();
    }
  });

});