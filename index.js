const mixOf = require('mixof');

module.exports = function(location){

  if(!location) location = path.resolve( path.join('.', 'cuddlemuffin') );

  const get     = require('./get-mixin.js');
  const has     = require('./has-mixin.js');
  const keys    = require('./keys-mixin.js');
  const set     = require('./set-mixin.js');
  const values  = require('./values-mixin.js');
  const all     = require('./all-mixin.js');
  const clear   = require('./clear-mixin.js');
  const delete  = require('./delete-mixin.js');
  const entries = require('./entries-mixin.js');
  const forEach = require('./for-each-mixin.js');

  class Muffin {}

  class Cuddlemuffin extends mixOf( Muffin ).with( get, has, keys, set, values, all, clear, delete, entries, forEach ) {

  }

  return new Cuddlemuffin(options)

}
