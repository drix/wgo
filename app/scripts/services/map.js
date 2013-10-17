'use strict';

angular.module('wgoApp')
  .service('Map', function Map() {
  
  var map, bubble, infoBubbles, that = this;


  that.create = function(el, options){
    infoBubbles = new nokia.maps.map.component.InfoBubbles();

    map = new nokia.maps.map.Display( el, angular.extend({
      // default value setted to Berlin
      zoomLevel: 8,
      center: [52.51, 13.4],
      components: [
        infoBubbles,
        new nokia.maps.map.component.Behavior(),
        new nokia.maps.map.component.ZoomBar()
      ]
    },
    options));
    
    return map;
  };


  that.addMarks = function(photos){
    if(map.objects.getLength() > 0){
      map.objects.removeAll(map.objects.asArray());
      
      if(angular.isDefined(bubble)){
        bubble.close();
      }
    }
    angular.forEach(photos.photos.photo, that.addMark);
  };

  that.addMark = function(photo){
    try {
      var m = new nokia.maps.map.Marker([photo.latitude, photo.longitude], {
        anchor: {x:35,y:35},
        icon: new nokia.maps.gfx.BitmapImage('http://farm'+ photo.farm +'.staticflickr.com/'+ photo.server +'/'+ photo.id +'_'+ photo.secret +'_s.jpg')
      });
      m.data = photo;
      m.addListener('click', function(){
        that.addBubble(this.data.title, this.coordinate);
      });
      map.objects.add(m);
    } catch (er) {
      console.log('map.addMark fail');
      console.dir(photo);
    }
  };

  that.addBubble = function(text, coord){
    text = (text || 'Nice!');
    if(text.length > 50) {
      text = text.slice(0,51).split(' ').slice(0,-1).join(' ') + '...';
    }
    bubble = infoBubbles.openBubble('<h3>'+ text + '</h3>', coord || map.center);
  };
  that.getMarkByPhotoID = function(id){
    if(!map.objects.getLength()){
      return null;
    }
    var marks = map.objects.asArray();
    for (var i = 0; i < marks.length; i++) {
      if(marks[i].data.id === id) {
        return marks[i];
      }
    }
  };

  that.setCenter = function(coord){
    if(!!coord){
      map.centerSetter(coord);
    }
  };
});
