require(['modules/main', 'jquery', 'modules/utils/utils'], function(main, $, Utils){
	Utils.startLoading(); 
	$(document).ready(
		main.start()
	);
});