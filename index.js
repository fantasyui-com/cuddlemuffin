const path = require('path');
const mixOf = require('mixof');

module.exports = function(location){

  if(!location) location = path.resolve( path.join('.', 'cuddlemuffin') );

  class Muffin {}

  class Cuddlemuffin extends mixOf( Muffin ).with( require('./lib/get.js'), require('./lib/has.js'), require('./lib/keys.js'), require('./lib/set.js'), require('./lib/values.js'), require('./lib/all.js'), require('./lib/clear.js'), require('./lib/delete.js'), require('./lib/entries.js'), require('./lib/for-each.js') ) {

  }

  return new Cuddlemuffin(location)

}
