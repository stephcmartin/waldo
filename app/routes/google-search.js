import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
  controller.setProperties({
    lat: 42,
    lng: -71,
    zoom: 8
  });
}
});
