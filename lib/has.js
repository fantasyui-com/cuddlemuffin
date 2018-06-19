const path = require('path');
const pathExists = require('path-exists');

module.exports = (superclass) => class extends superclass {
  async has(uuid) {
    const directory = path.join(this.location, uuid);
    return await pathExists(directory);
  }
};
