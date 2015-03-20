define('modules/models/vimeo-model', ['backbone', 'underscore', 'modules/utils/utils'], function(Bb, _, Utils){
	var VimeoModel = Bb.Model.extend({
		parse : function(model){
			if(model.upload_date) {
				model.dateAdded = Utils.formatDateFromString(model.upload_date);
			}
			return model ;
		}
	});

	return VimeoModel;

});
