$(document).ready(function() {

  //Navbar Toggle
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
  });

  //Fixed Navbar
  $(window).scroll(function(){
    let position = $(this).scrollTop();
    
    if (position >= 758){
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    }

    else{
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  })

  //Smooth Scroll
  $('.nav-item a').click(function(link){
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top = 25
    }, 3000);
  })

  //Ripples
  $("#header, .info").ripples({
    dropRadius: 20,
    perturbance: 0,
    resolution: 300
  });

  //Magnetic Popup
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery:{
      enabled: true,
    }
    // other options
  });

});