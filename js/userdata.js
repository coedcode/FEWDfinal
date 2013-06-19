$(document).ready(function(){
  $('#add_user_data').submit(function(event){
    event.preventDefault();
    
    var budget = $('#budget').val();
    var eventType = $('#event-type').val();
    var area = $('#area').val();
    console.log(budget);
    console.log(eventType);
    console.log(area);

    $('#info').html('');
    $('#info').append('<p>budget: ' + budget + '</p>');
    $('#info').append('<p>event type: ' + eventType + '</p>');
    $('#info').append('<p>area: ' + area + '</p>');
  });  
});

