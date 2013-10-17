'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('wgoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Controller "MainCtrl" must be correctly defined', function () {

    expect(!!MainCtrl).toBeDefined();

    expect((typeof scope.getPhotos === 'function')).toBe(true);
    expect((typeof scope.photoSelected === 'function')).toBe(true);

  });
});
