define('modules/main', ['jquery', 'modules/utils/utils', 'modules/views/page-view', 'modules/models/vimeo-collection'], 
	function($, Utils, PageView, VimeoCollection){
		
	var pageViewRef, vimeoCollectionRef;

	return {
		start : function(){ 

			vimeoCollectionRef = vimeoCollectionRef || new VimeoCollection();

			vimeoCollectionRef.fetch({
				success : function( res, xhr ){
					pageViewRef =  pageViewRef || new PageView({ 
						collection : vimeoCollectionRef,
						el : $('#content')
					});

					Utils.stopLoading();
					pageViewRef.render(); 
				}
			});
			

			
		}
	};
});