import Megjelenit from "./Megjelenit.js";
import { TODOLIST2 } from "./adatok.js";
$(function () {
  const tarolo = $(".tarolo");
  const tablazat = new Megjelenit(TODOLIST2, tarolo);
  $(window).on("torles",(event)=>{
    console.log(event.detail)
  })
  $(window).on("megse",(event)=>{
    console.log(event.detail)
  })
  $(window).on("kesz",(event)=>{
    console.log(event.detail)
  })
});

