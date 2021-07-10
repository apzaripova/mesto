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

    addItem(element) {
        this._container.prepend(element);
    }
}