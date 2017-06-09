$(function () {
$(".link").on("click", function(e){
e.preventDefault()
//var x= $(this).parent().children().eq(0).html();
var value = $('#myTextarea').val();
$(".tweet").prepend("<li>" + value + "</li>");
$(".actions").html("");

})
})

$(document).ready(function(){ 
   num=0;
   $("#contador").html('<p>0</p>');
   $("#LikeButton").click(function(){
      num++;
      $("#contador").html(num);
   });
});

