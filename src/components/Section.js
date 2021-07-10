export default class Section {
    constructor(containerSelector) {
        this._container = containerSelector;
    }


    addItem(domElement, place = 'prepend') {
      if (place === 'append') {
        this._container.append(domElement);
      } else {
        this._container.prepend(domElement);
      }
    }
}