import {Component} from '../Component.js';




class Menu extends Component {
  _flod_menu = null;
  _list_menu = null;
  
  async _build() {
    await super._build();
    
    this._flod_menu = this._body.querySelector('.flod_menu');
    this._list_menu = this._body.querySelector('.list_menu');
    
    this._body.addEventListener('click', this._on_click.bind(this));
  }
  
  _on_click(event) {
    if (event.target.classList.contains('flod')) this.close_menu();
    if (event.target.classList.contains('show_menu')) this.show_menu();
  }
  
  
  
  
  close_menu() {
    this._list_menu.setAttribute('hidden', 'true');
    this._flod_menu.removeAttribute('hidden');
  }
  
  show_menu() {
    this._flod_menu.setAttribute('hidden', 'true');
    this._list_menu.removeAttribute('hidden');
  }
}


Menu.init(import.meta.url);
