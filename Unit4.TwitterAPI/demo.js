function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function MyTwitterApp(apiKey, apiSecret) {
	var $this = this;
	$this.bearToken = b64EncodeUnicode(apiKey + ":" + apiSecret);
	$this.getAccessToken = function() {
		$.support.cors = true;
		$.ajax({
			url:"https://api.twitter.com/oauth2/token",
			method: 'post',
			data: "grant_type=client_credentials",
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			crossDomain: true,
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8",
				"Authorization" : "Bear " + $this.bearToken,
				// "Access-Control-Allow-Origin" : "*",
				// "Access-Control-Allow-Methods" : "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				// "Access-Control-Allow-Headers" : "Origin, Content-Type, X-Auth-Token"
			},
			dataType: "json",
			beforeSend: function(xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + $this.bearToken);
				xhr.setRequestHeader('Access-Control-Allow-Origin','*');
			},
			success: function(data) {
				console.log(1);
				console.info(data);
			},
			error: function(err) {
				console.log(err);
			}
		});
	}

	return $this;
}

var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

$(function(){
	// $('#do-action').click(function(){
	// 	var app = new MyTwitterApp('poNNBhnBXE1ewQI8nWA8Yrhxg','Kxz7UQWzzrV67a34LR6is0a0C8jpODLgFtQue3GTL1JHLcgjSW');
	// 	app.getAccessToken();
	// });
	$.ajax({
			url:"https://api.twitter.com/oauth/request_token",
			method: 'post',
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			crossDomain: true,
			beforeSend: function(xhr) {
				xhr.setRequestHeader("Authorization", "OAuth oauth_callback='http%3A%2F%2Flocalhost%2Fjq%2Findex.html'");
				xhr.setRequestHeader('Access-Control-Allow-Origin','*');
			},
			success: function(data) {
				console.info(data);
			},
			error: function(err) {
				console.log(err);
			}
		});
});
var time = new Date().getTime();
var nonce = randomString(32);

var oauth_callback = 'oauth_callback="http%3A%2F%2Flocalhost%2Fjq%2Findex.html"';
var oauth_consumer_key = 'oauth_consumer_key="poNNBhnBXE1ewQI8nWA8Yrhxg"';
var oauth_nonce = 'oauth_nonce=""';
var oauth_signature = 'oauth_signature=""';
var oauth_signature_method = 'oauth_signature_method="HMAC-SHA1"';
var oauth_timestamp = 'oauth_timestamp="'+time+'"';
var oauth_version = 'oauth_version="1.0"'