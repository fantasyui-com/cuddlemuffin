const path = require('path');
const mkdirp = require('mkdirp');
const mixOf = require('mixof');

module.exports = function(location){

  if(!location) location = path.resolve( path.join('.', 'cuddlemuffin-data') );

  class Muffin {}

  class Cuddlemuffin extends mixOf( Muffin ).with(
    require('./lib/set.js'),
    require('./lib/has.js'),
    require('./lib/version.js'),
    require('./lib/get.js'),
    require('./lib/keys.js'),
    require('./lib/values.js'),
    require('./lib/clear.js'),
    require('./lib/clean.js'),
    require('./lib/delete.js'),
    require('./lib/entries.js'),
  ){
    constructor(location) {
      super();
      this.debug = false;
      this.location = location;
      mkdirp.sync(this.location);
    }
  }

  return new Cuddlemuffin(location)

}
