import Mezo from "./Mezo.js";
export default class Jatekter{
    #szulElem;
    #lepesSzamlalo=1;
    
    constructor(szulElem){

        this.szulelem=this.szulElem;
        this.#mezoKiir();
        this.szulElem.empty();
    }
    #mezoKiir(){
        for (let index = 0; index < 9; index++) {
                new Mezo(allapot);
            
        }
    }
}