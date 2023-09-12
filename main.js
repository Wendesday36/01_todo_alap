import Megjelenit from "./Megjelenit.js";
import { TODOLIST2 } from "./adatok.js";
$(function () {
  const tarolo = $(".tarolo");
  const tablazat = new Megjelenit(TODOLIST2, tarolo);
});
