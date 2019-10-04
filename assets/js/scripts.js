// Check off Specific Todo by Clicking
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
});

// LONG FORM of above
// if($(this).css("color") === "rgb(206, 206, 206)") {
//     $(this).css({
//         color: "black",
//         textDecoration: "none"
//     });
//     console.log("if: " + $(this).css("color"))
// } else {
//     $(this).css({
//         color: "rgb(206, 206, 206)",
//         textDecoration: "line-through"
//     });
//     console.log("else: " + $(this).css("color"))
// }


// Click on X to delete
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(300, function(){
        $(this).remove()
    });
    e.stopPropagation(); // stop bubbling up
});


$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        // grab new todo
        let todo = $(this).val();
        $(this).val("");
        // create new li with the new todo
        $("ul").append("<li><span>X</span> " + todo + "</li>");
    }
});