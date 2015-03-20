define('modules/views/page-view', ['jquery', 'backbone', 'underscore', 'modules/views/item-view', 'modules/views/content-view', 'modules/utils/utils'], 
	function($, Backbone, _, ItemView, ContentView, Utils){

	var $currentLi; 

	var PageView = Backbone.View.extend({

		initialize : function( options ){
			this.template = options.template;
			this.collection = options.collection;
			this.pageModel = options.pageModel;
			this.currentModel = options.currentModel || this.collection.models[0];

			this.pageHeaderTemplate = _.template($('#header-tpl').html()) ; 
		},

		renderList : function(){
			var $listPanelList = $listPanelList || this.$el.find('.list-panel ul');
			var itemTpl = _.template( $('#item-tpl').html() );

			this.collection.forEach(function(vimeoModel, idx){

				var viewEl = $('<li />').appendTo($listPanelList);

				var itemView = new ItemView({
					el : viewEl, 
					model : vimeoModel,
					template : itemTpl,
					motherView : this
				});

				itemView.render(); 

				if(idx === 0 && !$currentLi) {
					$currentLi = viewEl.addClass('selected');
				}

			}.bind(this));
		},

		renderContentPanel : function( vimeoModel ){
			var contentTpl = _.template( $('#content-tpl').html() );
			var contentEl = this.$el.find('.content-panel');
			contentEl.empty();

			var contentView = new ContentView({
				el : contentEl, 
				model : vimeoModel, 
				template : contentTpl,
				motherView : this
			});

			contentView.render(); 
		},

		handleItemSelection : function( listItem, vimeoModel ){
			$currentLi.removeClass('selected');
			$currentLi = listItem.addClass('selected');

			this.renderContentPanel(vimeoModel);
		},

		playNextVideo : function() {
			$currentLi.next().trigger('click');
		},

		renderHeader : function(){
			this.$el.before( this.pageHeaderTemplate({ title : "Auto-play UI"}) );
		},

		render : function(){
			this.renderHeader();
			this.renderList();
			if ($currentLi && this.currentModel) {
				this.handleItemSelection( $currentLi, this.currentModel );
			}
		}
	});

	return PageView;
});