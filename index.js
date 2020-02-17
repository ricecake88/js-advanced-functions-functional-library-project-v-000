const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    
    callback: function(element, index, collection) {
      alert(`${collection[index]}`)
    },

    each: function(collection, callback) {
      if (typeof collection === 'object') {
        for (let key in collection) {
          callback(collection[key], key, collection);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection);
        }
      }
      return collection;
    },

    map: function(collection, map_callback) {
      let new_array = []
      for (let [key, value] of Object.entries(collection)) {
        new_array.push(map_callback(value))
      }
      return new_array;
    },
    
    reduce: function(collection, reduce_callback, acc=0) {
      for (let i = 0; i < collection.length; i++) {
        reduce_callback();
      }
      return acc;
    },
    
    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true )
          return collection[i];
      }
      return undefined;
    },
    
    size: function(collection) {
      return Object.keys(collection).length;
    },

    filter: function(collection, predicate) {
      let new_array = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true)
          new_array.push(collection[i]);
      }
      return new_array;
    },

    first: function(array, num=0) {
      
     if (num > 0) {
      let new_array = [];
      let j = 0;
      for (let i = 0; i < array.length; i++) {
        if (i < num) {
          new_array.push(array[i]);
          j++;
        }
      }
      return new_array;
     } else {
       return array[0];
     }
    },

    last: function(array, num=0) {
      if (num > 0 && array.length >= num) {
        let new_array = [];
        let index = array.length - num;
        for (let i=index; i < array.length; i++) {
          new_array.push(array[i]);
        }
        return new_array;
      } else {
        return array[array.length-1];
      }
    },

    compact: function(array) {
      let new_array = [];
      for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
          continue;
        } else {
          new_array.push(array[i]);
        }
      }
      return new_array;
    },

    sortBy: function(array, callback) {
      //let new_array = [];
      //for (let i = 0; i < array.length; i++) {
      //  new_array.push(callback(array[i]));
      //}
      //new_array.sort(function(a,b) {return a-b});
      //return new_array;
      
      let new_array = [...array];
      console.log(new_array)
      new_array.sort(callback(a))
      console.log(new_array)
      return new_array;
    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
