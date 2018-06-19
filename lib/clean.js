const fs = require('fs');
const pify = require('pify');
const path = require('path');
const pathExists = require('path-exists');
const sort = require('alphanum-sort');

module.exports = (superclass) => class extends superclass {

  async clean() {

    return new Promise( async (resolve, reject) => {
          let tasks = Promise.resolve();
          const response = [];
          const records = await this.keys();
          records.forEach(async id => {
            tasks = tasks.then(async () => {
              const directory = path.join(this.location, id);
              const objectFilenames = sort(await pify(fs.readdir)(directory));
              objectFilenames.pop();
              objectFilenames.forEach(file=>{
                const fullPath = path.join(directory,file);
                fs.unlinkSync(fullPath);
                response.push( 'clean: '+fullPath );
              });
            });
          });
          await tasks;
          resolve(response);
        }); // Promise ...

  }

};
