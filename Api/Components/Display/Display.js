import {Component} from '../Component.js';

import * as Converter from '../../../Units/Converter.js';


class Display extends Component {
  _result_convert = null;
  _type = null;
  _value_to = null;
  
  async _build() {
    await super._build();
    
    this._type = this.getAttribute('type_display');
    this._value_to = this._body.querySelector('.value_to');
    
    this._distibutor();
    
    this._body.addEventListener('keyup', this._on__keyup.bind(this));
  }
  
  _on__keyup(event) {
    if (!event.target.classList.contains('value_from')) return;
    
    let value = event.target.value;
    let measure_from = this._body.querySelector('.measure_from').value;
    let measure_to = this._body.querySelector('.measure_to').value;
    
    this._result_convert = Converter.convert(this._type, measure_from, measure_to, value);
    
    this._value_to.textContent = this._result_convert;
  }
  
  _distibutor() {
    let lists = this._body.querySelectorAll('select');
    let names = Object.keys(Converter.dimensions[this._type]);
    
    for (let i = 0; i < lists.length; i++) {
     for (let k = 0; k < names.length; k++) {
        let option = document.createElement('option');
        
        option.textContent = names[k];
       
        lists[i].append(option);
      }
    }
  }
}


Display.init(import.meta.url);
