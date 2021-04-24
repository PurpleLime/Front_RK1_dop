'use strict';

let createHash = () => {
    return createHash;
}

createHash.hashMap = new Map();
createHash.set = function (key, value) {
    this.hashMap.set(key, value);
    return this;
};
createHash.remove = function (key) {
    this.hashMap.delete(key);
    return this;
};
createHash.getValues = function () {
    return Object.fromEntries(this.hashMap.entries());
};

console.log(createHash().set('1', 2).set('3', 4).remove('1').getValues());
