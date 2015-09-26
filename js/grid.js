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

		mouseRespond();
		$('#new').click(function()
		{
			$(".selected").removeClass("selected");
			console.log("click");
			var gridSize = prompt("Pleas enter the grid size:","");
			console.log(gridSize);
			$('.wrapper').empty();

			for (var i = 0; i<=gridSize; i++)
				{	
				
				$(".wrapper").append('<div class = "square">'+ i +'</div>');
				console.log(gridSize);
				}
			mouseRespond();

			});
		$('#erase').click(function()
		{
			$(".selected").removeClass("selected");
		});
		


	


});


var mouseRespond = function(){
		$(".square").mouseenter(function()
		{
			$(this).addClass("square");

		});
		$(".square").mouseleave(function()
		{
			$(this).addClass("selected");

		});};