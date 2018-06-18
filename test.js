const assert = require('assert');
const db = require('./index.js')();

async function main(){

  const expected = {uuid:1, version:1, class:"bueno", email: 'user@example.com'};

  db.set(expected);

  const actual = await db.get(expected.uuid);

  assert.equal( actual , expected );

  console.log(db)

}

main();
