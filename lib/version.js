const fs = require('fs');
const pify = require('pify');
const path = require('path');
const pathExists = require('path-exists');
const sort = require('alphanum-sort');

module.exports = (superclass) => class extends superclass {

  async version(uuid) {
    const directory = path.join(this.location, uuid);
    const objectFilenames = await pify(fs.readdir)(directory);
    if(objectFilenames.length === 0) objectFilenames.push('0-a')
    const [latestVersion] = sort(objectFilenames).pop().split('-');
    return parseInt(latestVersion)||1;
  }

};
