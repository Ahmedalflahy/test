$(document).ready(function(){
	// $("a").click(function(){

	// });

	$("button").click(function(){
		// var userInput= $("input").val();
		$('btn').click(function(){
			getVideoIdFromYouTube();
		});
		// getVideoIdFromYouTube(userInput);
	})

	// getVideoIdFromYouTube();	
});

// function for making the AJAX request
function getVideoIdFromYouTube() {
	// AJAX happens hereeeeeeee
	$.ajax(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDYh2b125tU8IsCWUwuFVayxcs59k_i2ng&maxResults=1`,
		function(jsonResponse){
		addVideoToDOM(jsonResponse.items[0].id.videoId);
		console.log(jsonResponse)
	});
}

// function for adding an iframe element to the DOM with the extracted video URL
function addVideoToDOM(videoId) {
	$('#video').html(`<iframe 
	width="560" 
	height="315" 
	src="https://www.youtube.com/embed/JLm1ELLqJkA?list=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB" frameborder="0" 
	allowfullscreen>
	</iframe>`
		);
}

// https://www.youtube.com/embed/wikX3P4eBbQ