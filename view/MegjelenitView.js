import MegjelenitSor from "./MegjelenitSorView.js";
class Megjelenit {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;

    szuloElem.append(`<table class= table >`);
    this.tablaElem = szuloElem.children("table");

    this.megjelenit();
  }
  megjelenit() {
    this.#lista.forEach((elem,index) => {
      new MegjelenitSor(elem, this.tablaElem,index);
    });
  }
}

export default Megjelenit;
