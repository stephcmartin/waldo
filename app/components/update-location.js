import Ember from 'ember';

export default Ember.Component.extend({
  newLocation: {
  name: null,
  longitude: null,
  latitude: null,
  locationType: null
  },
  actions: {
    createLocation() {
      this.sendAction('createLocation', this.get('newLocation'))
      this.set('newLocation.name', null),
      this.set('newLocation.longitude', null),
      this.set('newLocation.latitude', null),
      this.set('newLocation.locationType', null)
    }
  }
});
