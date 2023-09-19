import Model from "../model/Model.js";
import Megjelenit from "../view/MegjelenitView.js";

import Urlap from "../view/UrlapView.js";
class Controller {
  constructor() {
    const tarolo = $(".tarolo");
    const ujadat = $(".ujadat");
    const MODEL = new Model()
    new Megjelenit(MODEL.getList(), tarolo);
    new Urlap(ujadat, { tevekenyseg: "", hatarido: "" });
    $(window).on("torles", (event) => {
      console.log(event.detail);
    });
    $(window).on("megse", (event) => {
      console.log(event.detail);
    });
    $(window).on("kesz", (event) => {
      console.log(event.detail);
    });
    $(window).on("ujadat", (event) => {
      //console.log(event.detail);
      MODEL.ujAdat(event.detail);
      tarolo.empty();
      new Megjelenit(MODEL.getList(), tarolo);
    });
  }
}
export default Controller;
