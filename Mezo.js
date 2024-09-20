
export default class Mezo{
    #allapot=false;
    #valtozo=1;
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
    const e = new CustomEvent("klikkel",{detail:this.#valtozo})
    this.#valtozo+=1
    if (this.#valtozo % 2 === 0) {
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