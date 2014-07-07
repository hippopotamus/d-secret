$(document).ready(function() {
  var votes = {}

  $.getJSON("/hotness/get", function(data){
    console.log(data);
  $.each($('.juicy'), function(index, value){
    $(value).css("width", data[$(value).attr('id')]);
  });
  });

  $('a').click(function(e){
    e.preventDefault();
    $.ajax({
      url: "/"+$(this).attr("id"),
      type: "GET"
    }).done(function(response) {
      $(".right").html("");
      $(".right").append(response);
      $('.right div').hover(function(){
        $(this).animate({"marginLeft":"+=20"}, 100);
      }, function(){
        $(this).animate({"marginLeft":"-=20"}, 100);
      });
    });
  });

  $('#submit_secret').click(function(e){
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/new",
      data: $("#post_secret").serialize(),
      error: function(){
        alert("an error occured");
      },
      success: function() {
        window.location.reload();
      }
    });
  });

  $('#submit_comment').click(function(e){
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/new_comment",
      data: $("#post_comment").serialize(),
      error: function(){
        alert("an error occured");
      },
      success: function() {
        window.location.reload();
      }
    });
  });


  $('.left a div').hover(function(){
    $(this).animate({"marginLeft":"+=20"}, 100);
  }, function(){
    $(this).animate({"marginLeft":"-=20"}, 100);
  });
});
