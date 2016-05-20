$(document).ready(function() {

    $.get( "/yoda", function( data ) {
    $( ".result" ).html( data );
    console.log(data);
  });

});
