import Ember from 'ember';

export default Ember.Route.extend({
  gMap: Ember.inject.service(),

  standardGeocode(address) {
    this.get('gMap')
      .geocode({address})
      .then((geocodes) => {
        // Get first geocode latitude
        console.log(geocodes[0].geometry.location.lat());
      })
      .catch(console.error);
  }
  // ,
  //
  // reverseGeocode(lat, lng) {
  //   this.get('gMap')
  //     .geocode({lat, lng})
  //     .then((geocodes) => {
  //       // Get first geocode address
  //       console.log(geocodes[0].formatted_address);
  //     })
  //     .catch(console.error);
  // }
})
