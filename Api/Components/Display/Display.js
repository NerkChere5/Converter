import {Component} from '../Component.js';
import {Measure} from '../../../Units/Measure/Measure.js'


class Display extends Component {
  async _build() {
    await super._build();
    
    Measure.init(this._body, 'length')
  }
  
}


Display.init(import.meta.url);
