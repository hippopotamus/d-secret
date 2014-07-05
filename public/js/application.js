$(document).ready(function() {
  $('.secret tr td').on('click', function(e) {
    e.preventDefault();
    var sid = parseInt($(this).text()) + 1
    // console.log(parseInt(secret) + 1)
    $.ajax({
      method: "post",
      url: "/comments/"+sid,
      data: $('this').serialize,
      format: "json",
      success: function(data) {
        // console.log(this)
        $("#comments_column").html(data)
      }
    })
  })
});
