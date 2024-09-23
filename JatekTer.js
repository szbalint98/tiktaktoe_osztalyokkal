import Mezo from "./Mezo.js";
export default class Jatekter{
    
    #lepesSzamlalo=1;
    
    constructor(){
        const szulElem=$(".mezok")
        szulElem.empty();
        this.#mezoKiir(szulElem);
        window.addEventListener("click", (event) => {
            console.log("Kattintás , lépésszámláló:", event.detail);
        });
    }
    #mezoKiir(szulElem){
        for (let index = 0; index < 9; index++) {
                new Mezo(this.#lepesSzamlalo,szulElem);
            
        }
    }
}