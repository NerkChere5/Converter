import {Component} from '../Component.js';
import '../Menu/Menu.js'
import '../Display/Display.js'



class Frame extends Component {
  async _build() {
    await super._build();
    
    this._get_type_display();
  }
  
  _get_type_display() {
    let elements_display_type = this._body.querySelector('.display_type').assignedNodes();
    
    for (let element_display_type of elements_display_type) {
      let display = document.createElement('x-display');
      
      display.setAttribute('type_display', element_display_type.textContent)
      
      this._body.append(display);
    }
  }
}


Frame.init(import.meta.url);

//assignedNodes
