
export default class Mezo{
    #allapot=false;
    #valtozo=1;
    #szulElem;
    
    constructor(allapot){
        this.szulElem=szulElem;
        this.#megjelenit();
        this.#esemenykezelo();
    }

#esemenykezelo(){
    this.gombElem.on("click", ()=>{
    const e = new CustomEvent("klikkel",{detail:this.#valtozo})
    this.#valtozo+=1
    if (this.#valtozo % 2 === 0) {
        this.gombElem.textContent = "X"; // Páros esetén "X"
    } else {
        this.gombElem.textContent = "O"; // Páratlan esetén "O"
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