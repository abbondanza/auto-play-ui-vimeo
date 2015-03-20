require.config({
	baseUrl : "js",
	paths : {
		"jquery" : ["//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min", "lib/jquery"],
		"backbone" : ["//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js", "lib/backbone"],
		"underscore" : ["//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js", "lib/underscore"]
	},
	shim : {
		"backbone" : ["jquery", "underscore"]
	}
});
