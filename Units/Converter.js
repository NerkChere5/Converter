export let dimensions = {
  area: {
    'are': 100,
    'hectare': 10000,
    'square centimeter': 0.0001,
    'square decimeter': 0.01,
    'square foot': 0.09290304,
    'square inch': 0.00064516,
    'square kilometre': 1000000,
    'square meter': 1,
    'square millimeter': 0.000001,
    'square yard': 0.83612736,
  },
  length: {
    'centimeter': 0.01,
    'decimeter': 0.1,
    'foot': 0.3048,
    'inch': 0.0254,
    'kilometer': 1000,
    'meter': 1,
    'mile': 1609.344,
    'millimeter': 0.001,
    'nautical mile': 1852,
    'yard': 0.9144,
  },
  mass: {
    'centner': 100 ,
    'gram': 0.001,
    'gran': 0.0000648,
    'gross ton': 1016.0469088,
    'kilogram': 1,
    'ounce': 0.028,
    'pound': 0.454,
    'short ton': 907.18474,
    'stone': 6.35029318,
    'tons': 1000,
  },
  volume: {
    'cubic centimeter': 0.000001,
    'cubic detsimeter': 0.001,
    'cubic foot': 0.0283168,
    'cubic inch': 0.0000163871,
    'cubic metr': 1,
    'cubic millimeter': 0.000000001,
    'cubic yard': 0.76455,
    'liter': 0.001,
    'milliliter': 0.000001,
    'oil barrel': 0.158988,
  },
};




export function convert(dimension, measure_from, measure_to, value) {
  let value_processed = value * dimensions[dimension][measure_from] / dimensions[dimension][measure_to];
  
  return value_processed;
}
