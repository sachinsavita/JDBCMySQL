// $() and jQuery() are same
 $("h1").addClass("big-title margin-50");
 $("button").text("Don't Click Me");

 $("h1").hover(function(){
    $("h1").css("color", "blue")
 });
 

$("button").click(function()
{
  $("h1").css("color","red")
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});