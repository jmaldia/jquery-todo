// Check off Specific Todo by Clicking
$('li').click(function(){
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
$('span').click(function(e){
    $(this).parent().fadeOut(300, function() {
        $(this).remove()
    });
    e.stopPropagation(); // stop bubbling up
});