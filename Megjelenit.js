class Megjelenit {
  #lista = [];

  constructor(lista, hely) {
    this.#lista = lista;
    this.hely = hely;

    $(hely).append(`<table class= table >`);
    this.tablazat = $(hely).children(".table");

    this.megjelenit();
  }
  megjelenit() {
    this.#lista.forEach((element, index) => {
      this.tablazat.append(`<tr><th>${index + 1}</th><td>${element.tevekenyseg}</td><td>${element.hatarido}</td></tr>`);
    });
  }
}
export default Megjelenit;
