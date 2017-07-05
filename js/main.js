$( function() {
  
  $( ".draggable" ).draggable();
  $( ".dialog" ).dialog({
    autoOpen: false,
    width: 450,
    minHeight: 240,
    maxHeight: 650,
    show: {
        effect: "drop",
        duration: 300
      },
      hide: {
        effect: "drop",
        duration: 300
      }
  });

  $( ".icon" ).on( "click", function() {
    var dialog = $(this).attr( "data-dialog" );
    $( "." + dialog ).dialog( "open" );
  });

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
  });

  $('.close-me').click(function(event){
   hidePopUp();
  });

});