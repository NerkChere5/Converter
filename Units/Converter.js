export let dimensions = {
  area: {
    'square meter': 1,
    'square foot': 0.09290304,
  },
  length: {
    'meter': 1,
    'mile': 1609.344,
    'inch': 0.0254,
  },
  mass: {
    'gram': 0.001,
    'stone': 6.35029318,
  },
};




export function convert(dimension, measure_from, measure_to, value) {
  let value_processed = value * dimensions[dimension][measure_from] / dimensions[dimension][measure_to];
  
  return value_processed;
}




// let v = convert('length', 'mile', 'inch', 1);
// v = convert('mass', 'stone', 'gram', 1);
// v = convert('area', 'square meter', 'square foot', 1);
// console.log(v);
