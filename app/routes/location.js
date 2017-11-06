import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('location', params.location_id)
  },
  actions: {
    updateLocation(location) {
      this.get('store').findRecord('location', location.id).then(
          function(target) {
            target.set('name', location.name);
            target.set('longitude', location.longitude);
            target.set('latitude', location.latitude);
            target.set('locationType', location.locationType);
            target.save();
          })
        .then(() => this.get('flashMessages').success('Succesfully updated location.'))
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.');
        })
    }
  }
});
