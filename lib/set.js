const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const uuidv4 = require('uuid/v4');

module.exports = (superclass) => class extends superclass {

  async set(object) {

    if (!object) throw new Error('object is required')
    if (!object.uuid) throw new Error('object.uuid is required')

    const dataHasVersion = !!(object.version);
    const dataHasExisted = await this.has(object.uuid);

    let version = undefined;
    if (dataHasVersion) {
      if (this.debug) console.log('set: Version exists in the object being saved, it will be incremented and used.')
      version = object.version;
    }
    else if (dataHasExisted) {
      if (this.debug) console.log('set: Document exists, but version was not in object bing saved, getting the latest version from document.')
      version = await this.version(object.uuid);
    }
    else {
      if (this.debug) console.log('set: No version was provided, and the document does not exist, this version is #1.')
      version = 0; // soon to be incremented;
    }

    version = version + 1;

    const updated = Object.assign({}, object, { version, basename: uuidv4(), class:""})
    const directory = path.join(this.location, updated.uuid);
    const fullpath = path.join(directory, updated.version + '-' + updated.basename + '.json');
    mkdirp.sync(directory);
    fs.writeFileSync(fullpath, JSON.stringify(updated, null, '  '));

    return updated;

  }

};
