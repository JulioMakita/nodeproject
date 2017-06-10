$(document).ready(function(){

  $('form').on('submit', function(){

      var name = $("input[name='name']").val();
      var age = $("input[name='age']").val();
      var email = $("input[name='email']").val();

      $.ajax({
        type: 'POST',
        url: '/user',
        data: {name:name, age:age, email:email},
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;
  });

  $('li').on('click', function(){

      var id = $(this).attr("rel");

      var r = confirm("Would you like to remove?");

      if(r == true){

        $.ajax({
          type: 'DELETE',
          url: '/user/' + id,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
      }
  });

});
