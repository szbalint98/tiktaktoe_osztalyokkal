
export default class Mezo{
    #allapot=false;
    
    constructor(allapot){
        this.szulElem=szulElem;
        this.#megjelenit();
        this.#esemenykezelo();
    }

#esemenykezelo(){
    this.gombElem.on("click", ()=>{
    const e = new CustomEvent()
    window.dispatchEvent(e)
})
}
#megjelenit(){
    let txt=`<div class="mezo">        
                   </div> `;
    this.szulElem.append(txt);
}
}