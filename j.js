$(document).ready(function() {
  $('.thumbnails img').click(function() {
    let newSrc = $(this).attr('src');
    
    // Update main image with fade effect
    $('#current').fadeOut(200, function() {
      $(this).attr('src', newSrc).fadeIn(200);
    });

    // Highlight active thumbnail
    $('.thumbnails img').removeClass('active');
    $(this).addClass('active');
  });

  // Optional: Set the first image as active
  $('.thumbnails img:first').addClass('active');
});