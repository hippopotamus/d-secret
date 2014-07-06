$(document).ready(function() {
    $('a').click(function(e){
  	e.preventDefault(); 
  	$.get(this, function(data){
  		$('.right').html(data);
  	});
  });

    $('#submit_secret').click(function(e){

      var postData = $(this).serializeForm();

      e.preventDefault();
      $.ajax({
        url: "/new",
        data: postData,
        error: function(){
          alert("an error occured");
        }

      });
    });

    

  $('.left a div').hover(function(){
  	$(this).animate({"marginLeft":"+=20"}, 100);
  }, function(){
  	 $(this).animate({"marginLeft":"-=20"}, 100);
  });

});
