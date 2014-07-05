$(document).ready(function() {
  $('.secret').on('click', function(e) {
    e.preventDefault();
    var secret = $('.secret')
    console.log(this)
    $.ajax({
      url: "/",
      data: $('this').serialize,
      success: function(data) {
        console.log("hi")
        $("#comments_column").html(data)
      }
    })
  })
});
