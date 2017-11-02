import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  longitude: DS.attr('number'),
  latitude: DS.attr('number'),
  locationType: DS.attr('string'),
  editable: DS.attr('boolean')
});
