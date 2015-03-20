define('modules/views/content-view', ['jquery', 'backbone', 'underscore'],
	function($, Backbone, _){

		var ContentView = Backbone.View.extend({
			initialize : function(options){
				this.model = options.model;
				this.template = options.template;
				this.motherView = options.motherView;
			}, 

			prepareVideo : function () {
				var iframe = this.$el.find('iframe')[0];
			    var player = $f(iframe);

			     player.addEvent('ready', function() {
			        player.addEvent('finish', this.askForNext.bind(this));
			        player.api('play');
			    }.bind(this));
			},

			askForNext : function(e){
				this.motherView.playNextVideo();
				if(e) e.stopImmediatePropagation();
			},	

			render : function(){
				this.$el.append(this.template( { model : this.model.attributes } ));
				this.prepareVideo(); 
				return this; 
			}

		});

		return ContentView; 
	});