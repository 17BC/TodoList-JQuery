//Check off todo list by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event){
    alert("Clicked on a span");
    $(this).parent().fadeOut(500, function(){//"this" on this line refers to span
        $(this).remove();//"this" on this line refers to li.
    });
    event.stopPropagation();//this line stops "event bubbling"
})

$("input[type='text']").keypress(function(event){//"input" and "[type='text']" should have no space in between
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //Create new Todo item
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
}); 

$(".fa-plus").click(function(){
    $("input[type='text']").slideToggle("slow");
});