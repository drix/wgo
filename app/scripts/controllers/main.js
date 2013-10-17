'use strict';

angular.module('wgoApp')
  .controller('MainCtrl', ['$scope','Flickr', 'Map', '$timeout', '$window', function ($scope, $flickr, $map, $timeout, $window) {

  $scope.sugestions = ['pubs','cats','dogs','beach','festival','park','car','bar'];
  $scope.q = 'pubs';

  var map = $map.create(document.getElementById('map'));
  var iUpdateMap, lastcenter;
 /* 
    var clusterProvider = new nokia.maps.clustering.ClusterProvider(map, {
      eps: 16,
      minPts: 1
    });
*/
    //clusterProvider.cluster();


  $scope.getPhotos = function(text){
    console.log('getPhotos');
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

  // INIT
  map.addListener('displayready', function () {
    $scope.getPhotos();
    $map.addBubble('Welcome!');
  });
  // Use bitwise "&" operator, to check for specific map view property changes:
  map.addListener('mapviewchange', function (event) {
    if (event.data && event.MAPVIEWCHANGE_CENTER && !!lastcenter) {
      var pos = map.geoToPixel(lastcenter);
      if(pos.x < 0 || pos.y < 0 || pos.x > $window.width() || pos.y > $window.height()){
        $timeout.cancel(iUpdateMap);
        iUpdateMap = $timeout($scope.getPhotos, 1000);
      }
    }
  });
}]);