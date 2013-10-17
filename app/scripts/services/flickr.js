'use strict';

angular.module('wgoApp')
  .service('Flickr', function Flickr($resource) {

    var resource = $resource('http://api.flickr.com/services/rest/',{
      method:'flickr.photos.search',
      api_key:'bdf3f33439e23381af929d4ed7ef28ba',
      jsoncallback:'JSON_CALLBACK',
      per_page:50,
      page:1,
      format:'json',
      extras:'geo',
      has_geo:1,
      media:'photos',
      content_type:'1',
      text:'pub'
    },{get: { method:'JSONP'}});

    this.getPhotos = function(options, sussess, error){
      if(!options) {
        if(error){
          error.call();
        }
        return false;
      }
      return resource.get(options, sussess, error);
    };
  });
