import Megjelenit from "../view/MegjelenitView.js";
import { TODOLIST2 } from "../adatok.js";
import Urlap from "../view/UrlapView.js";
class Controller {
  constructor() {
    const tarolo = $(".tarolo");
    const ujadat = $(".ujadat");
    new Megjelenit(TODOLIST2, tarolo);
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
      TODOLIST2.push(event.detail);
      console.log(TODOLIST2);
      tarolo.empty();
      new Megjelenit(TODOLIST2, tarolo);
    });
  }
}
export default Controller;
