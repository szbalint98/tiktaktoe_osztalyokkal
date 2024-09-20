import Mezo from "./Mezo.js";
export default class Jatekter{
    #szulElem;
    #lepesSzamlalo=1;
    
    constructor(){
        this.szulElem=$(".mezok")
        this.szulElem.empty();
        this.#mezoKiir();
        
    }
    #mezoKiir(){
        for (let index = 0; index < 9; index++) {
                new Mezo(allapot,this.#szulElem);
            
        }
    }
}