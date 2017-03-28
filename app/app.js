var URL_Youtube = "https://www.googleapis.com/youtube/v3/search";

var api_key = 'AIzaSyCk4yl042SL6pQlY4ru4XhzhnAbo1XrzQ8'; 

$(document).ready(function(){
	$('#js-search-form').submit(function(event){
		event.preventDefault();
		var result = $('.query').val();
		console.log(result);
		getDataFromYoutube(result, displayVideos);

	});
});


function getDataFromYoutube(search, callback){
	var settings = {
		url: URL_Youtube,
		data:{
			q: search,
			part: 'snippet',
			key: api_key
		},
		dataType: 'json',
	    type: 'GET',
	    success: callback
	};
	console.log(settings);
	$.ajax(settings);
	/*$ === jQuery('h2') === document.getElementByTagName('h2');
			jQuery returns a jQuery object, .parent(), .find(), .css(), .text()
			document.get.... returns an HTML tag. .text .style="lkdjfalksdjlj"
			$.ajax()
			jQuery.ajax()

			var jQuery = {
				length: 0,
				find: function(selector){
					
				},
				constructor: function(selector){
					
				}
			}

	*/
}

function displayVideos(data){
	var searchResults= data.items;
	$('.js-results').html('<h2>Here are the Top 5 videos</h2>');
	console.log(data.items);
	if(searchResults.length !== 0){
		for(var i = 0; i<searchResults.length; i++){
			$('.js-results').append('<p>'+searchResults[i].snippet.title+'</p>'+'<a href="https://www.youtube.com/watch?v='+searchResults[i].id.videoId+'"><img src="'+searchResults[i].snippet.thumbnails.high.url+'" alt="Video" class="thumbnails"></a>');
		}
	} else {
		$('.js-results').html('<p>No Results</p>');
	}
}

