$(function(){
    // const postDelete= $(`input[name$=${userId}]`);
    // //const postDelete = $('#postDelete-61a3dedad8226a1572add66f');
    // postDelete.show();
  
    // //const commentDelete = $('#commentDelete-61a3dedad8226a1572add66f');
    
    // $("li").each(function(){
    //     commentDelete.show();
    // })

    $(".btn btn-link").click(function() {
        if ($(this).hasClass("like-active")) {
         $(this).find('.like-no').html(parseInt($(this).find('.like-no').html(), 10) - 1)
        } else {
         $(this).find('.like-no').html(parseInt($(this).find('.like-no').html(), 10) + 1)
        }
        $(this).toggleClass('like-active');
       });
});

