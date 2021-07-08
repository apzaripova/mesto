export default class Section {
    constructor( {renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    renderCards(cardsItem) {
      cardsItem.forEach(card => {
        this._renderer(card);
      })
    }

    addItem(domElement, place = 'prepend') {
      if (place === 'append') {
        this._container.append(domElement);
      } else {
        this._container.prepend(domElement);
      }
    }
}