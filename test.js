const assert = require('assert');
const db = require('./index.js')();

async function main(){

  const expected = {
    uuid:"03f6fe5c-6631-4d8e-a0b0-fccf6c16db18",
    email: 'user@example.com'
  };

  await db.set(expected);

  const actual = await db.get(expected.uuid);

  assert.equal( actual.email , expected.email );

  console.log( JSON.stringify(actual, null, '  ') );
  console.log( JSON.stringify(await db.entries(), null, '  ') );
  console.log( JSON.stringify(await db.keys(), null, '  ') );

  console.log( JSON.stringify(await db.clean(), null, '  ') );
  console.log( JSON.stringify(await db.clear(), null, '  ') );

}

main();
