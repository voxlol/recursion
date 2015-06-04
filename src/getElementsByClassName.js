// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var body = document.body;
  var children = document.body.childNodes;
  var result = [];

  if(body.classList.contains(className)) result.push(body);

  function findNodes(children){
    _.each(children, function(e){
      if(e.classList && e.classList.contains(className)){
        result.push(e);
      }

      if(e.childNodes.length){ // if has children, run recursive search
        return findNodes(e.childNodes);
      }
    });
    return result;
  }
  return findNodes(children);
};
