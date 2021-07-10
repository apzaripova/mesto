export default class Section {
    constructor( {renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }

    render(arr) {
      arr.reverse().forEach(item => {
        this._render(item);
      })
    }

    addItem(element) {
        this._container.prepend(element);
    }
}