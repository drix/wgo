'use strict';

angular.module('wgoApp')
  .controller('MainCtrl', ['$scope','Flickr', function ($scope, $flickr) {


  var map = new nokia.maps.map.Display( document.getElementById('map'), {
    // Zoom level for the map
    zoomLevel: 10,
    // Map center coordinates
    center: [52.51, 13.4],
    components: [
      new nokia.maps.map.component.InfoBubbles(),
      new nokia.maps.map.component.Behavior(),
      new nokia.maps.map.component.ZoomBar()
    ]
  });
  
  map.addListener('displayready', function () {
    // Place code implementing the functionality of app
    // here, for example to manipulate the map view.
    
  });


  $scope.addMarks = function(photos){
    var m;//, markers = [];
    angular.forEach(photos.photos.photo, function(photo){

      m = new nokia.maps.map.Marker([photo.latitude, photo.longitude], {
        //text: photo.title,
        icon: new nokia.maps.gfx.BitmapImage('http://farm'+ photo.farm +'.staticflickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_s.jpg')
      });
      m.addListener('click', function(){
        console.log('click');
      });

      //markers.push({latitude:photo.latitude, longitude:photo.longitude});
      map.objects.add(m);
    });
 /*
    var clusterProvider = new nokia.maps.clustering.ClusterProvider(map, {
      eps: 16,
      minPts: 1
    });
*/
    //clusterProvider.cluster();
  };

  $scope.getPhotos = function(){
    $scope.photos = $flickr.getPhotos($scope.q, $scope.addMarks);
  };

  $scope.q = 'pub';
  $scope.getPhotos();
}]);



