//for the on keyword, ul is used before the li keyword because it is definetly on the page
// when it loads as opposed to an li which may or may have not been there


// Check off specific Todos by clicking

//execute function only when an li inside of a ul is clicked
//works for future added li too
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");    
});

//Click on x to delete todo
//executes function when any current or future spans inside of a ul is clicked
$("ul").on("click", "span", function(event) {
    //deletes entire li (without parent(), only span would get deleted)
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    //checks for enter key
    if (event.which === 13) {
        //gets new todo text from input
        let todoText = $(this).val();
        //clear input
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");

        
    }
});
