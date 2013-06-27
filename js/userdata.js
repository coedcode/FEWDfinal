$(document).ready(function(){
  $('#add_user_data').submit(function(event){
    event.preventDefault();
    
    var budget = $('#budget').val();
    var eventType = $('#event-type').val();
    var area = $('#area').val();
    var y = $(window).scrollTop(); $("html, body").animate({ scrollTop: y + $(window).height() }, 600); 

    $('#info').html('');
    if(parseInt($('#budget').val()) <= 100) {
    $('#info').append('<p>Peking Opera Performance   Thursday, June 20th<p> <img width="220" height="250" src="new_images/CantoOpman.png"/>');
    }
    else{
    $('#info').append('<p>Misia live   June 22nd<p> <a href="#"><iframe width="300" height="169" src="http://www.youtube.com/embed/u0dZbpZ6OhQ" frameborder="0" allowfullscreen></iframe></a>');
    }
  
  });  
});




