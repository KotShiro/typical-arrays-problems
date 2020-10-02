
location = function location (way, array) {
  if (array && array.length !== 0 && Array.isArray(array)){
    let dump = array[0];
    for (let i = 0; i < array.length; i += 1) {
      if (way === 'min') {
        if (array[i] < dump) dump = array[i];
      }
      if (way === 'max') {
        if (array[i] > dump) dump = array[i];
      }
    }
    return dump;
  }
  return 0;
}

exports.min = function min (array) {
  return location('min',array);
}

exports.max = function max (array) {
  return location('max',array);
}

exports.avg = function avg (array) {
  if (array && array.length !== 0 && Array.isArray(array)){
    let dump = 0;
    array.forEach(function(item) {
      dump += item;
    });
    return dump/array.length;
  }
  return 0;
}
