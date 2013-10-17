'use strict';

describe('Service: map', function () {

  // load the service's module
  beforeEach(module('wgoApp'));

  // instantiate service
  var map;
  beforeEach(inject(function (Map) {
    map = Map;
  }));

  it('should contain a Map service', function () {
    expect(!!map).toBeDefined();

    expect((typeof map.create === 'function')).toBe(true);
    expect((typeof map.addMarks === 'function')).toBe(true);
    expect((typeof map.addMark === 'function')).toBe(true);
    expect((typeof map.addBubble === 'function')).toBe(true);
    expect((typeof map.getMarkByPhotoID === 'function')).toBe(true);
    expect((typeof map.setCenter === 'function')).toBe(true);
  });

});
