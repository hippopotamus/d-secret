$(document).ready(function() {
  $('.secret').on('click', function(e) {
    e.preventDefault();
    var secret = $('.secret')
    // var sid =
    // console.log(this)
    $.ajax({
      method: "post",
      url: "/comments/1", // need to add secret_id
      data: $('this').serialize,
      format: "json",
      success: function(data) {
        console.log(this)
        $("#comments_column").html(data)
      }
    })
  })
});
