import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({
      lat: 42.3601,
      lng: -71.0589,
      zoom: 8
    });
  },
  gMap: Ember.inject.service(),
  standardGeocode(address) {
   this.get('gMap')
     .geocode({address})
     .then((geocodes) => {
       // Get first geocode latitude
       console.log(geocodes[0].geometry.location.lat());
     })
     .catch((err) => console.error(err));
 },

});
