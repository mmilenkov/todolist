$("ul").on("click", ".content", function (){

	$(this).toggleClass("clicked");
})

$("ul").on("click", "#del", function ()
{
	$(this).parent().fadeOut(400,function()
		{
			$(this).remove();
		});
})

$("input[type='text']").on("keypress", function(event)
{
	if(event.which === 13)
	{ 
		var userInput = $("input[type='text']").val();
		$("ul").append('<li><span id="del"><i class="fas fa-trash"></i></span><span class="content">' + " " + userInput + '</span></li>')
		$(this).val("");
	};

});

$(".hideIcon").on("click", function()
{
	$("input[type='text']").slideToggle(500);
})