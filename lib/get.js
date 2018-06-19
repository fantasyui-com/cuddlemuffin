const path = require('path');
const pify = require('pify');
const fs = require('fs');
const sort = require('alphanum-sort');

module.exports = (superclass) => class extends superclass {
  async get(uuid) {
    if(!uuid) throw new Error('.uuid is required');
     const dataHasExisted = await this.has(uuid);
     if(!dataHasExisted) return null;
     const directory = path.join(this.location, uuid);
     const objectFilenames = await pify(fs.readdir)(directory);
     const filename = sort(objectFilenames).pop();
     return JSON.parse(fs.readFileSync( path.join(directory, filename) ).toString());
  }
};
