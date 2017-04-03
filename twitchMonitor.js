var users = [
	{name: 'ESL_SC2',
	user: '',
	stream: ''},
	{name :'OgamingSC2',
	user: '',
	stream: ''
	}, 
	{name: 'cretetion', 
	user: '',
	stream: ''
	}, 
	{name: 'freecodecamp', 
	user: '',
	stream: ''
	},
	{name: 'storbeck',
	user: '',
	stream: ''
	},
	{name: 'habathcx',
	user: '',
	stream: ''
	},
	{name: 'RobotCaleb',
	user: '',
	stream: ''
	}, 
	{name: 'noobs2ninjas',
	user: '',
	stream: ''
	},
	{name: 'brunofin',	
	user: '',
	stream: ''
	}, 
	{name: 'comster404',
	user: '',
	stream: ''
	}];

function process(result){
	var out = [];
		if(result.user.responseJSON.error){
		out.push('<div class= "info><li class= "name">' + result.name + '</li><li>' + result.user.responseJSON.error + '</li><li>' + result.user.responseJSON.message + '</li></div>');
		$('#' + result.name).addClass('error');
			}else if (result.stream.responseJSON.stream == null){
					out.push('<div  class= "logo"><img src="' + result.user.responseJSON.logo + '"</img></div><div class= "info"><a id=a' + 
					result.name + ' href= #><li class= "name">' + result.name + '</li></a><li class= "bio"> Bio:' + 
					result.user.responseJSON.bio + '</li><li class= "off">offline</li></div>');
				}else{
					out.push('<div class= "logo"><img src="' + result.user.responseJSON.logo + '"</img></div><div class= "info"><a id=a' + result.name + ' href=' + 
					result.stream.responseJSON.stream.channel.url+ '><li class= "name">' + 
					result.name + '</li></a><li class= "bio"> Bio:' +
					result.user.responseJSON.bio + '</li><li class= "game"> Game:' + 
					result.stream.responseJSON.stream.channel.game + '</li><li class= "language"> Lang:' + 
					result.stream.responseJSON.stream.channel.language + '</li><li class= "views"> Views:' + 
					result.stream.responseJSON.stream.channel.views + '</li><li class= "status"> Status:' + 
					result.stream.responseJSON.stream.channel.status + '</li></div>');
				}
			$('#' + result.name).append(out);
			out = []		
						}				


$(document).ready(function(){
	for (var i = 0; i < users.length; i++){
		$('#channels').append('<ul id="' + users[i].name +'"></a></ul>');
		var val = $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + users[i].name + '?&callback=?')
		users[i].user = val;
		var val2 = $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + users[i].name + '?&callback=?');
		users[i].stream = val2;
	}
});
 	$(document).ajaxStop(function(){
		for (var i = 0; i < users.length; i++){
		process(users[i]);
	}
	});
//https://wind-bow.gomix.me/twitch-api
/*This server caches data to lower the request rate. To prevent abuses this server accepts 
GET requests only, and serves only routes /users/:user, /channels/:channel, and /streams/:stream. 
These are more than enough to complete the challenge. */
