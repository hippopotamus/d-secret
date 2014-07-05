$(document).ready(function() {
  $('.secret tr td').on('click', function(e) { 
    e.preventDefault();
    var secret = $(this).text()
    var sid = parseInt(secret) + 1
    console.log(parseInt(secret) + 1)
    $.ajax({
      method: "post",
      url: "/comments/"+sid, // need to add secret_id
      data: $('this').serialize,
      format: "json",
      success: function(data) {
        // console.log(this)
        $("#comments_column").html(data)
      }
    })
  })
});
