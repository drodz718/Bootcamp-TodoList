// Check off specific Todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");    
});

//Click on x to delete todo
$("span").click(function(event) {
    //deletes entire li (without parent(), only span would get deleted)
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});
