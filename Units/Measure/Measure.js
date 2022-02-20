export class Measure {
  static length = [
    {
      name: 'millimeter',
      measure: 0.001,
    },
    'millimeter',
    'centimeter',
    'decimeter',
    {
      name: 'meter',
      measure: 1,
    },
    'kilometer',
    'inch',
    'foot',
    'yard',
    'mile',
    'nautical mile',
  ];
  static volume = [
    'cubic centimeter',
    'cubic detsimeter',
    'cubic inch',
    'cubic inch',
    'oil barrel',
    'cubic metr',
    'cubic millimeter',
    'cubic yard',
    'liter',
    'milliliter',
  ];
  static mass = [
    'centner',
    'gram',
    'gran',
    'gross ton',
    'kilogram',
    'ounce',
    'pound',
    'short ton',
    'stone',
    'tons',
  ];
  static area = [
    'acre',
    'are',
    'hectare',
    'square centimeter',
    'square decimeter',
    'square foot',
    'square inch',
    'square kilometre',
    'square millimeter',
    'square yard',
  ];
  
  
  static _distibutor(body, type) {
    let lists = body.querySelectorAll('select');
    
    for (let i = 0; i < lists.length; i++) {
      for (let k = 0; k < this[type].length; k++) {
        let option = document.createElement('option');
        option.textContent = this[type][k];
        
        lists[i].append(option);
      }
    }
  }



  static init(body, type) {
    this._distibutor(body, type);
  }
}
