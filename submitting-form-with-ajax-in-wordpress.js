$('#ajax-contact-form').submit(function(e){
    var name = $("#name").val();
    $.ajax({ 
         data: {action: 'contact_form', name:name},
         type: 'post',
         url: ajaxurl,
         success: function(data) {
              console.log(data);

        }
    });

});
