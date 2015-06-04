// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === undefined){
    return null;
  }else if(typeof(obj) === 'function'){
    return null;
  }else if(obj === null){
    return 'null';
  }else if(typeof(obj) === 'string'){
    return '"' + obj + '"';
  }else if(typeof(obj) === 'number'){
    return obj.toString();
  }else if(typeof(obj) == 'boolean'){
    return obj.toString();
  }else if(Array.isArray(obj)){        // array case
    if(obj.length === 0) return '[]';
    else{
      return '[' + 
        obj.map(function(ele){
          return stringifyJSON(ele);
      }).join(',') + ']';
    }
  }else{
    // object case
    var result = [];
    keys = Object.keys(obj);

    keys.forEach(function(key){
      var value = stringifyJSON(obj[key]); // get the string value of the obj through recursion
      
      if(value !== null){
        result.push('"' + key + '":' + value);
      }
    });

    return "{" + result.join(",") + "}";
  }
};
