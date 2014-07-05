$(document).ready(function() {
  $('.secret tr td').on('click', function(e) {
    e.preventDefault();
    var sid = parseInt($(this).text())
    // console.log(parseInt(secret) + 1)
    $.ajax({
      method: "post",
      url: "/comments/"+sid,
      data: $(this).serialize,
      format: "json",
      success: function(data) {
        console.log(this)
        $("#comments_column").html(data)
      }
    })
  })

  // $('#new_secret').on('click', function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //     method: "post",
  //     url: '/new_secret',
  //     success: function(data) {
  //       $('#left_column').html(data) // need to find out how to do the ruby post method
      // using ajax. can't find good examples online so far.
  //     }
  //   })
  // })
});
