define('modules/utils/utils', ['jquery'], function($){

	var $loadingScreen, loading = false; 

	function buildLoadingScreen() {

		var $loader = $('<div />').addClass('loading-overlay').prependTo('body');
		  
		return $loader;						
	}

	var utils = {

		formatDateFromString : function ( dateString ){
			var months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var date =  new Date(dateString.replace(' ', 'T'));

			var monthStr = months[date.getMonth()]
			var year = date.getFullYear(); 
			var day = date.getDate();

			return monthStr + ' ' + day + ', ' + year;

		},

		startLoading : function(){
			if(!loading) {
				$loadingScreen = $loadingScreen || buildLoadingScreen();
				$loadingScreen.show();
				loading = true;  
			}
		},

		stopLoading : function() {
			if(loading) {
				$loadingScreen.hide();
				loading = false; 
			}
		}

	};


	
	return utils; 

});