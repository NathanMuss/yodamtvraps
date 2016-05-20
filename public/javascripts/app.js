$(document).ready(function() {

    $.post( "/yoda", function( data ) {
    $( ".result" ).html( data );
    console.log(data);
  });

});
