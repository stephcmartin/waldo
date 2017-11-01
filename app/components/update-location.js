import Ember from 'ember';

export default Ember.Component.extend({
  name: null,
  longitude: null,
  latitude: null,
  locationType: null,
actions:{
  updateLocation(){
    const location_id = this.get('location.id')
    const newLocation = this.get('name')
    const location ={
        id: location_id,
        name: newLocation
    }
    this.sendAction('updateLocation', location);
    this.set('name', null);
  },
}
});
