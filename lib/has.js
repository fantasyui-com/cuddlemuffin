const path = require('path');
const pathExists = require('path-exists');

module.exports = (superclass) => class extends superclass {

  async has(uuid) {
    const directory = path.join(options.path, id);
    return await pathExists(directory);
  }

};
