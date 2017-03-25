var URL_Youtube = "https://www.googleapis.com/youtube/v3/search";

var api_key = 'AIzaSyCk4yl042SL6pQlY4ru4XhzhnAbo1XrzQ8'; 

$(document).ready(function(){
	$('.js-submit').submit(function(event){
		event.preventDefault();
		var result = $(this).val();
		getDataFromYoutube(result, function(data){
			for (var i = data.items.length - 1; i >= 0; i--) {
				//data.items[i].snippet.title;
				//data.items[i].snippet.thumbnails.default.url;
			}
		});
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

