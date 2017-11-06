import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  createLocation(location){
    let newLocation = this.get('store').createRecord('location', location);
    newLocation.save().then(()=> this.transitionTo('locations'))
    .then(() => this.get('flashMessages').success('Succesfully added new location!'))
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
    });
  }
}
});
