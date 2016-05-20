$(document).ready(function() {
  var yodaTweet;

    $('#tweetRap').on('click', function() {

      $(document)
      $.get( "/yoda", function( data ) {
        yodaTweet = data;
      $( ".result" ).html( yodaTweet );
      $.getJSON
      (
        "http://vaas.acapela-group.com/Services/UrlMaker?jsoncallback=?",
        {
          cl_login: 'EVAL_VAAS',
          cl_app: 'EVAL_8195604',
          cl_pwd: '3mkr1ggk',
          req_voice: "willlittlecreature22k",
          req_text: yodaTweet,
        },
        function(data){
          $(".player").html(
            "<audio src='"+data.snd_url+"' autoplay />"
          )
        }
      )
      console.log(data);
    })
  });
});
