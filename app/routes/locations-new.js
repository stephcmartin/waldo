import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  createLocation(location){
    let newLocation = this.get('store').createRecord('location', location);
    newLocation.save().then(()=> this.transitionTo('locations'))
  }
}
});
