import {Component} from '../Component.js';
import '../Menu/Menu.js'
import '../Display/Display.js'



class Frame extends Component {
  _displays = [];

  async _build() {
    await super._build();
    
    this._get_type_display();
    
    this._body.addEventListener('click', this._on_click.bind(this));
  }
  
  _on_click(event) {
    if (!event.target.classList.contains('menu_item')) return;
    
    let display_link = event.target.textContent;
    let display = this._displays.find((item) => item.getAttribute('type_display') == display_link);
    let display_index = this._displays.find((index) => index.getAttribute('type_display') == display_link);
    
    if (!display) return;
    
    this._displays.slice(display_index, display_index);
    
    
    for (let display_i of this._displays) {
      display_i.visible = false;
    }
    
    display.visible = true;
    
    this._displays.push(display);
  }
  
  _get_type_display() {
    let elements_display_type = this._body.querySelector('.display_type').assignedElements();
    
    for (let element_display_type of elements_display_type) {
      let display = document.createElement('x-display');
        
      display.setAttribute('type_display', element_display_type.textContent)
      display.setAttribute('visible', 'false')
      
      this._body.append(display);
      
      this._displays.push(display);
    }
    
    this._displays[0].visible = true;
  }
}


Frame.init(import.meta.url);
