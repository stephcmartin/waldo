import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('location');
},
actions: {
  deleteLocation(location){
    location.destroyRecord()
    .then(() => this.get('flashMessages').success('Succesfully deleted location.'))
    .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
    })
  }
},
});
