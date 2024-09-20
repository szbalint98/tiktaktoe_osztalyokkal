export default class Jatekter{

    constructor(szulElem){

        this.szulelem=this.szulElem;
        this.#megjelenit();
        this.#esemenykezelo();
    }
    #esemenykezelo(){
        this.gombElem.on("click", ()=>{
        const e = new CustomEvent("kivalaszt",{detail:this.#kep})
        window.dispatchEvent(e)
    })
    }

    #megjelenit(){
        this.szulElem.append()

    }
}