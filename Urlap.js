
class Urlap {
 
  constructor(SzuloElem,adat) {
    this.SzuloElem = SzuloElem;
    this.adat = adat;
    this.#urlap();
    this.tevekenysegElem =this.SzuloElem.children("form").children("#tevekenyseg");
    this.hataridoElem = this.SzuloElem.children("form").children("#hatarido");
    this.submitElem = this.SzuloElem.children("form").children("#submit");
    this.submitElem.on("click",(event)=>{
        event.preventDefault();
        this.adatgyujt()
        this.#feltoles("ujadat")
    })
  }
  #urlap() {
    let txt = "";

    txt += `<form>
    <label for="tevekenyseg">Tevékenység:</label><br>
    <input type="text" id="tevekenyseg" name="tevekenyseg"><br>
    <label for="hatarido">Határ idő:</label><br>
    <input type="text" id="hatarido" name="hatarido">
    <input type="submit" id ="submit" value="Submit">
  </form>`;

    this.SzuloElem.append(txt);
  }
  adatgyujt(){
    this.adat= {tevékenység:this.tevekenysegElem.val(),határidő:this.hataridoElem.val()}
    
  }
  #feltoles(esemenynev){
    const esemenyem = new CustomEvent(esemenynev,{detail:this.adat})
    window.dispatchEvent(esemenyem)
  }
}
export default Urlap;
