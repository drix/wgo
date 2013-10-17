'use strict';

describe('Service: flickr', function () {

  // load the service's module
  beforeEach(module('wgoApp'));

  // instantiate service
  var flickr = true;
  var httpBackend = true;
  beforeEach(inject(function (Flickr, $httpBackend) {
    flickr = Flickr;
    httpBackend = $httpBackend;
  }));

  

  it('should contain a flickr service', function () {
    
    expect(flickr).toBeDefined();

    expect((typeof flickr.getPhotos === 'function')).toBe(true);

  });



  it('should just not search for empty keyword', function () {

    expect(flickr.getPhotos()).toBe(false);
  
  });



  it('can perform a successful ajax request', function() {
    
    httpBackend.when('JSONP').respond(200,{'photos':{'page':1, 'pages':158, 'perpage':50, 'total':'7899', 'photo':[{'id':'9428584523', 'owner':'12505664@N00', 'secret':'75943df866', 'server':'2864', 'farm':3, 'title':'Fiat', 'ispublic':1, 'isfriend':0, 'isfamily':0, 'latitude':52.495202, 'longitude':13.368743, 'accuracy':'16', 'context':0, 'place_id':'VULyzjBXVb89VXc', 'woeid':'675695', 'geo_is_family':0, 'geo_is_friend':0, 'geo_is_contact':0, 'geo_is_public':1}]}, 'stat':'ok'});

    expect(flickr.getPhotos({text:'pub'})).toBeDefined();

  });
});
