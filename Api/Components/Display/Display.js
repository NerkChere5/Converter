import {Component} from '../Component.js';

import * as Converter from '../../../Units/Converter.js';


class Display extends Component {
  _result_convert = null;
  _type = null;
  _value_to = null;
  
  
  
  
  set visible(value) {
    this.setAttribute('visible', value);
  }
  
  
  
  
  async _build() {
    await super._build();
    
    this._type = this.getAttribute('type_display');
    this._value_to = this._body.querySelector('.value_to');
    
    this._distibutor();
    this._convertor();
    
    this._body.addEventListener('keyup', this._on__keyup__click.bind(this));
    this._body.addEventListener('click', this._on__keyup__click.bind(this));
  }
  
  _on__keyup__click(event) {
    if (!event.target.classList.contains('conv')) return;
    
    this._convertor();
  }
  
  _convertor() {
    let value = this._body.querySelector('input').value;
    
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
