$(document).ready(function() {
  // var votes = {}

  $.getJSON("/hotness/get", function(data){
    $.each($('.juicy'), function(index, value){
      $(value).css("width", (data[$(value).attr('id')])*4);
    });
  });

  $('a').click(function(e){
    e.preventDefault();
    console.log($('a').not($(this).children()).children());
    $('a').not($(this).children()).children().css("background-color", "#23bdbd");
    $(this).children().css("background-color", "#ffba2f");
    $.ajax({
      url: "/"+$(this).attr("id"),
      type: "GET"
    }).done(function(response) {
      $(".righty").html("");
      $(".righty").append(response);
    });
  });

  $(".right").on('click','#submit_comment',(function(e){
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "/new_comment",
      data: $("#post_comment").serialize(),
      error: function(){
        alert("an error occured");
      },
      success: function(data) {
        console.log(data.secret_id);
        e.preventDefault();
        $.ajax({
          url: "/"+data.secret_id,
          type: "GET"
        }).done(function(response) {
          $(".righty").html("");
          $(".righty").append(response);
        });
      }
    });
  }));

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

  $('.left a div').hover(function(){
    $(this).animate({"marginLeft":"+=20"}, 100);
  }, function(){
    $(this).animate({"marginLeft":"-=20"}, 100);
  });
});
