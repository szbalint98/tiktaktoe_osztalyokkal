
export default class Mezo{
    #allapot=false;
    #lepesSzamlalo;
    #szulElem;
    
    constructor(allapot,szulElem){
        this.szulElem=szulElem;
        this.#megjelenit();
        this.#esemenykezelo();
        this.#beallitO();
        this.#beallitX();
    }

#esemenykezelo(){
    this.#szulElem.on("click", ()=>{
    const e = new CustomEvent("klikkel",{detail:this.#lepesSzamlalo})
    this.#lepesSzamlalo+=1
    if (this.#lepesSzamlalo % 2 === 0) {
        this.#beallitO();
    } else {
        this.#beallitX();
    }
    window.dispatchEvent(e)
})
}
#megjelenit(){
    let txt=`<div class="mezo">        
                   </div> `;
    this.szulElem.append(txt);
}
#beallitX(){
    this.#szulElem.addClass("MezoX")    
}
#beallitO(){
    this.#szulElem.addClass("MezoO")    
}
}