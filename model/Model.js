import { TODOLIST2 } from "../adatok.js"
class Model{
    #lista=[]
    constructor(){
        this.#lista=TODOLIST2
        
    }
    ujAdat(OBJ){
        this.#lista.push(OBJ)
    }
    getList(){
        return this.#lista
    }
}
export default Model