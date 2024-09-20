import Mezo from "./Mezo.js";
export default class Jatekter{
    #szulElem
    #lista= []
    constructor(lista,szulElem){

        this.szulelem=this.szulElem;
        this.szulElem.empty();
    }
    mezoKiir(){
        this.#lista.forEach((element=>{
            new Mezo()
        }))
    }
}