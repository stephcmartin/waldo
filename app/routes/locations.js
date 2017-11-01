import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('location');
},
actions: {
  deleteLocation(location){
    location.destroyRecord()
  }
},
});
