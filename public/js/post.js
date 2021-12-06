$(function(){
    // $("form").click(function() {
    
    // });

    // let form = $('#likePost');
    // form.submit(function(event) {
    //     event.preventDefault();
    //     $.post(`/forum/like/${form._id}/${userId}`, { pid: "John", uid: "2pm" } );

    // });

    function updateLikesOnPage(btn, responseMessage){
        var likes = btn.find('.likes');
        var dislikes = btn.find('.dislikes');
        
        //update likes on page
        likes.html(responseMessage.likeNum);
        dislikes.html(responseMessage.dislikeNum);
    }


    $('.likebtn').on('click', function(event){
        event.preventDefault();
        var btn = $(this);
        var postId = btn.data('pid');
        var userId = btn.data('uid');

        if (userId){
            var requestConfig = {
                method: "POST",
                url: '/forum/like/' + postId + '/' + userId,
                contentType: 'application/json',
                data: JSON.stringify({
                    pid: postId,
                    uid: userId
                })
            };
            $.ajax(requestConfig).then(function(responseMessage){
                updateLikesOnPage(btn, responseMessage);
    
                //toggle icon color
                var other = btn.parent().find('.fa-thumbs-down')
                if (other.hasClass('filled')){
                    other.removeClass('filled');
                }
                btn.toggleClass('filled');
            })
        }else{
            showLikeError(btn);
        }
    })

    
    
});