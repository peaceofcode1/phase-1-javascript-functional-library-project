function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const mappedArray = [];
    myEach(collection, function (value, keyOrIndex, collection) {
      mappedArray.push(callback(value, keyOrIndex, collection));
    });
    return mappedArray;
  }
  
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    let result;
    myEach(collection, function (value, keyOrIndex, coll) {
      if (predicate(value, keyOrIndex, coll)) {
        result = value;
        return false; // exit loop
      }
    });
    return result;
  }
  
  function myFilter(collection, predicate) {
    const filteredArray = [];
    myEach(collection, function (value, keyOrIndex, coll) {
      if (predicate(value, keyOrIndex, coll)) {
        filteredArray.push(value);
      }
    });
    return filteredArray;
  }
  
  function mySize(collection) {
    let size = 0;
    myEach(collection, function () {
      size++;
    });
    return size;
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  function mySortBy(array, callback) {
    return array.slice().sort(function (a, b) {
      return callback(a) > callback(b) ? 1 : callback(b) > callback(a) ? -1 : 0;
    });
  }
  
  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && shallow) {
        newArr.push(...array[i]);
      } else if (Array.isArray(array[i]) && !shallow) {
        myFlatten(array[i], shallow, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const values = Object.values(collection);
  
    if (acc === undefined) {
      acc = values[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    let result;
  
    collection.some(function (value, keyOrIndex, coll) {
      if (predicate(value, keyOrIndex, coll)) {
        result = value;
        return true; // stop iteration
      }
    });
  
    return result;
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    mySortBy,
    myFlatten,
    myKeys,
    myValues,
  };
  