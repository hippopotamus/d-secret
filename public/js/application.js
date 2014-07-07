$(document).ready(function() {
  $('#post_comment').hide()
  $('a').click(function(e){
    e.preventDefault();
    $.ajax({
      url: "/"+$(this).attr("id"),
      type: "GET"
    }).done(function(response) {
      $(".righty").html("");
      $(".righty").append(response);
      $('#post_comment').show();
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
        $(".righty").html("");
        $(".righty").append(response);
        $('#post_comment').show();
      }
    });
  });

  $('.left a div').hover(function(){
    $(this).animate({"marginLeft":"+=20"}, 100);
  }, function(){
    $(this).animate({"marginLeft":"-=20"}, 100);
  });
});
