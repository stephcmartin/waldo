import Ember from 'ember';

export default Ember.Component.extend({
  name: null,
  longitude: null,
  latitude: null,
  locationType: null,
actions:{
  updateLocation(){
    const location_id = this.get('location.id');
    const newLocation = this.get('name');
    const newLongitude = this.get('longitude');
    const newLatitude = this.get('latitude');
    const newType = this.get('locationType');
    const location ={
        id: location_id,
        name: newLocation,
        longitude: newLongitude,
        latitude: newLatitude,
        locationType: newType
    };
    this.sendAction('updateLocation', location);
    this.set('name', null);
    this.set('longitude', null);
    this.set('latitude', null);
    this.set('locationType', null);
  },
}
});
