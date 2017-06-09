$(document).ready(function () {
    $(".link").on("click", function(e){
        e.preventDefault()
        //var x= $(this).parent().children().eq(0).html();
        var value = $('#myTextarea').val();
        $(".segundacol").prepend("<div id='tweet'> <li>" + value + "</li></div>");
        $("<div id='LikeButton' class='glyphicon glyphicon-thumbs-up custombuttons' aria-hidden='true' style='cursor:pointer'></div>").appendTo("#tweet");
        $("<div id='TrashButton' class='glyphicon glyphicon-trash custombuttons' style='cursor:pointer'></div>").appendTo("#tweet");
        var num = 1;
        //$("#contador").html('<p>0</p>');
        $("#LikeButton").click(function(){
            $(this).parent().children().eq(1).html(num++);
            $(this).css("color", "#4099ff");
          });
          $("#TrashButton").click(function(){
            $(this).parent().remove();
      });
    });
});