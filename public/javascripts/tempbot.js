$(document).ready(function(){
  $("#tweetRap").on('click', function(e){
    $.get('/bot/yoda')
  })
})
