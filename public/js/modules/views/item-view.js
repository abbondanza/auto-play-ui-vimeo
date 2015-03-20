define('modules/views/item-view', ['jquery', 'backbone', 'underscore'],
	function($, Backbone, _){

		var ItemView = Backbone.View.extend({

			events : {
				"click" : "select"
			}, 

			initialize : function(options){
				this.model = options.model;
				this.template = options.template;
				this.motherView = options.motherView; 
			}, 

			select : function( e ) {
				this.motherView.handleItemSelection( this.$el , this.model);
			},

			render : function(){
				this.$el.append(this.template( { model : this.model.attributes } ));
				return this; 
			}

		});

		return ItemView; 
	});