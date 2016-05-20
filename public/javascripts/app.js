$(document).ready(function() {

    $('#tweetRap').on('click', function() {
      $.get( "/yoda", function( data ) {
      $( ".result" ).html( data );
      console.log(data);
    })
  });

});
