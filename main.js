'use strict';

// Реализация 1
let createHash1 = () => {
    return createHash1;
}
createHash1.hashMap = new Map();
createHash1.set = function (key, value) {
    this.hashMap.set(key, value);
    return this;
};
createHash1.remove = function (key) {
    this.hashMap.delete(key);
    return this;
};
createHash1.getValues = function () {
    return Object.fromEntries(this.hashMap.entries());
};

// Реализация 2
const createHash2 = () => {
    this.hashMap = {
        map: new Map(),
        set: function (key, value) {
            this.map.set(key, value);
            return this;
        },
        remove: function (key) {
            this.map.delete(key);
            return this;
        },
        getValues: function () {
            return Object.fromEntries(this.map.entries());
        }
    }
    return this.hashMap;
}

console.log(createHash1().set('1', 2).set('3', 4).remove('1').getValues());
console.log(createHash2().set('1', 2).set('3', 4).remove('1').getValues());
