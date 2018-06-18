module.exports = (superclass) => class extends superclass {

  set(key, value) {
    console.log('foo from Mixin1');

    //if (super.foo) super.foo();
  }

};
