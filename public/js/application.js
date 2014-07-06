$(document).ready(function() {
  $('a').click(function(e){
    e.preventDefault();
    $.get(this, function(data){
      $('.right').html(data);
    });
  });
});
