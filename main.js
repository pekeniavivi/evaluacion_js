$(document).ready(function () {
  $(".link").on("click", function (e) {
    e.preventDefault()
    var value = $('#myTextarea').val();
    $(".segundacol").prepend("<div id='tweet'> <li>" + value + "</li></div>");
    $("<div />")
      .addClass('glyphicon glyphicon-thumbs-up custombuttons likeable')
      .data('likes', 0)
      .appendTo("#tweet");
    $("<div />")
      .addClass('glyphicon glyphicon-trash custombuttons deletable')
      .appendTo("#tweet");
  });
  var like = function () {
    var likes = $(this).data('likes') + 1;
    $(this).data('likes', likes);
    $(this).parent().children().eq(1).html(likes);
    $(this).css("color", "#4099ff");
  };
  var trash = function () {
    $(this).parent().remove();
  };
  $('.segundacol')
    .on('click', '.likeable', like)
    .on('click', '.deletable', trash);
});