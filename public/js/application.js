$(document).ready(function() {
  $('a').click(function(e){
    e.preventDefault();
    $.ajax({
      url: "/"+$(this).attr("id"),
      type: "GET"
    }).done(function(response) {
      $(".right").html("");
      $(".right").append(response);
      });
    //
    });

    //console.log("/"+$(this).attr("id"));

      $('#submit_comment').click(function(e){
         e.preventDefault();
         console.log("hello world!");
        $.ajax({
          type: "post",
          url: "/new_comment",
          data: $("#post_comment").serialize(),
          error: function(){
            console.log("yo");
            alert("an error occured");
          },
          success: function() {
            console.log("hi");
             window.location.reload();
          }
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



  $('.left a div').hover(function(){
    $(this).animate({"marginLeft":"+=20"}, 100);
  }, function(){
    $(this).animate({"marginLeft":"-=20"}, 100);
  });
});
