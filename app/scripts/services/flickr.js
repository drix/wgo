'use strict';

angular.module('wgoApp')
  .service('Flickr', function Flickr($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var flickrService = $resource('http://api.flickr.com/services/rest/',{
      method:'flickr.photos.search',
      api_key:'bdf3f33439e23381af929d4ed7ef28ba',
      jsoncallback:'JSON_CALLBACK',
      lat:52.51,
      lon:13.4,
      accuracy:1,
      per_page:10,
      page:1,
      format:'json',
      extras:'geo',
      has_geo:1,
      media:'photos',
      content_type:'1',
      text:'pub'
    },{get: { method:'JSONP'}});

    this.getPhotos = function(text, sussess, error){
      if(!text) {
        error.call();
        return false;
      }
      return flickrService.get({text: text}, sussess, error);
    };
  });
