'use strict';

angular.module('wgoApp')
  .controller('MainCtrl', ['$scope','Flickr', 'Map', '$timeout', function ($scope, $flickr, $map, $timeout) {

  $scope.sugestions = ['pubs','cats','dogs','beach','park','car'];
  $scope.q = 'pubs';

  var iUpdateMap, lastcenter;

  
  // INIT MAP
  try {
    var map = $map.create(document.getElementById('map'));
    
    map.addListener('displayready', function () {
      $scope.getPhotos();
      $map.addBubble('Welcome!');
    });
    
    map.addListener('mapviewchange', function (event) {
      if (event.data && event.MAPVIEWCHANGE_CENTER && !!lastcenter) {
        var pos = map.geoToPixel(lastcenter);

        // this code should be replace if jQuery is been used
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        // check if the old center is out of the screen
        if(pos.x < 0 || pos.y < 0 || pos.x > x || pos.y > y){
          $timeout.cancel(iUpdateMap);
          iUpdateMap = $timeout($scope.getPhotos, 1000);
        }
      }
      // need add the check for zoon out
    });

  } catch(er){
    console.log('Map ot loaded');
  }

  // FUNCTIOS

  $scope.getPhotos = function(text){
    var bbox = map.getViewBounds();
    lastcenter = map.center;

    if(!!text && typeof text === 'string'){
      $scope.q = text;
    }
  
    $scope.photos = $flickr.getPhotos({
      text: $scope.q,
      // find photos only inside the visible area of the map
      bbox: [
        bbox.topLeft.longitude,
        bbox.bottomRight.latitude,
        bbox.bottomRight.longitude,
        bbox.topLeft.latitude
      ].join(',')
    },
    // add the marks on the callback
    $map.addMarks);
  };

  $scope.photoSelected = function(id){
    var m = $map.getMarkByPhotoID(id);
    if (m) {
      $map.addBubble(m.data.title, m.coordinate);
      $map.setCenter(m.coordinate);
    }
  };

}]);