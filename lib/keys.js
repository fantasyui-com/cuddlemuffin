const fs = require('fs');
const pify = require('pify');
const path = require('path');

module.exports = (superclass) => class extends superclass {
  async keys() {
    const directory = path.join(this.location);
    const uuids = await pify(fs.readdir)(directory);
    return uuids;
  }
};
