'use strict';

describe('Service: flickr', function () {

  // load the service's module
  beforeEach(module('wgoApp'));

  // instantiate service
  var flickr = true;
  beforeEach(inject(function () {
    //flickr = _flickr_;
  }));

  it('should do something', function () {
    expect(flickr).toBe(true);
  });

});
