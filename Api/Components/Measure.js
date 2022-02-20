export class Measure {
  _length = [
    'millimeter',
    'millimeter',
    'centimeter',
    'decimeter',
    'meter',
    'kilometer',
    'inch',
    'foot',
    'yard',
    'mile',
    'nautical mile',
  ]
  _volume = [
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
  ]
  _mass = [
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
  ]
  _area = [
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
  ]
  
  
  static _distibutor(body, type) {
    let lists = body.querySelectorAll('select');
    
    for (let i = 0; i < 2; i++) {
      for (let k = 0; k < 10; k++) {
        let option = document.createElement('option');
        
        option.textContent = this._[type][k];
        
        lists[i].append(option);
      }
    }
  }



  static init(body, type) {
    this._distibutor(body, type);
  }
}
