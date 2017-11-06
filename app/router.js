import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('locations');
  this.route('locations-new', {path: 'locations/new'});
  this.route('location', {path: 'locations/:location_id'});
  this.route('map', {path: 'locations/gov-verified'});
  this.route('google-search', {path: 'location/search'});
  this.route('about-us');
});

export default Router;
