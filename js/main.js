$(document).ready(function() {

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