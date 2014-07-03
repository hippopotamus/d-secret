$(document).ready(function() {
  $('.secret').click(function(e){
    e.preventDefault();
    $.get("/comments", function(data){
      $('.right').html(data);
    });
  });
});
