define('modules/models/vimeo-collection', ['backbone', 'underscore', 'modules/models/vimeo-model'], function(Bb, _ , VimeoModel){
 	var VimeoCollection = Bb.Collection.extend({
      url : function(){
        return 'http://vimeo.com/api/v2/channel/staffpicks/videos.json?callback=none'
      },
      sync : function(method, collection, options) {
        options.dataType = "jsonp";
        return Backbone.sync(method, collection, options);
      },
      parse : function(res) {
        return res;
      },
      model : VimeoModel 
    });

    return VimeoCollection;
});