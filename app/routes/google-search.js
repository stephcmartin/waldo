import Ember from 'ember';
export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({
      lat: 42.3601,
      lng: -71.0589,
      zoom: 8
    });
  }
});
