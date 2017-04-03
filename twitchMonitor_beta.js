var users = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 
'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'brunofin', 'comster404'];
//var name;
var y = 0;
function process(result){
	var out = [];
	
				if (result.stream == null){
					out.push('<h2>offline</h2>');
					$('#' + y).append(out);
					$('#a' + y).prop('href', result._links.self);
				
				}else{
					$.each(result.stream, function( x, val){
					out.push('<h2>' + x + ': ' + val +'</h2>');
				});
			$('#' + y).append(out);
			$('#a' + y).prop('href', result.stream.channel.url);
		
				}				
out = [];
y++;
}
function fetch(data, i){
	$.get({
					type: 'POST',
					url: 'https://wind-bow.gomix.me/twitch-api/users/' + data,
					dataType: 'jsonp',
					async: false,
					success: process
				});		
}
$(document).ready(function(){
	for (var i = 0; i < users.length; i++){
		$('#channels').append('<li id="' + [i] +'"><a id=a' + [i] + ' href=#><h1>' + users[i] + '</h1></a></li>');
		fetch(users[i]);
		
	}
});
//https://wind-bow.gomix.me/twitch-api
/*This server caches data to lower the request rate. To prevent abuses this server accepts 
GET requests only, and serves only routes /users/:user, /channels/:channel, and /streams/:stream. 
These are more than enough to complete the challenge. */
