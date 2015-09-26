$(document).ready(function() 
{
//console.log($('p'));
	for (var i = 0; i<256; i++)
		{	
		$(".wrapper").append('<div class = "square"></div>');
		console.log(i);
	}
		//$("#square").hover(function(){
		//	$(this).css("background-color","black");

		//});
		$(".square").mouseenter(function()
		{
			$(this).addClass("square");

		});
		$(".square").mouseleave(function()
		{
			$(this).addClass("selected");

		});

		


	


});
