$(document).ready(function() 
{
	
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
				
				$(".wrapper").append('<div class = "square"></div>');
				console.log(gridSize);
				}
			mouseRespond();//functoin to define mouse hovering result on the squares

			});
		$('#erase').click(function()
		{
			$(".selected").removeClass("selected");
			$(".square").css("background-color","grey");
			console.log("click");
		});
		


	


});


    	

var mouseRespond = function(){
		$(".square").mouseenter(function()
		{
			var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
			$(this).addClass("square");
			
			

		});
		$(".square").mouseleave(function()
		{
			var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
			$(this).addClass("selected");
			$(this).css("background-color",hue);

		});};

