
export default class Mezo{
    
    #lepesSzamlalo;
    #szulElem;
    
    constructor(lepesSzamlalo,szulElem){
        this.lepesSzamlalo=lepesSzamlalo;
        this.szulElem=szulElem;
        this.#megjelenit();
        this.#esemenykezelo();
        
        
    }
    #esemenykezelo() {
        this.#szulElem.on("click", (event) => {
            const e = new CustomEvent("klikkel", { detail: this.#lepesSzamlalo });
                this.#lepesSzamlalo += 1;
                if (this.#lepesSzamlalo % 2 === 0) {
                    $(event.target.addClass("MezoX"));
                    console.log(event.target)
                } else {
                    $(event.target.addClass("MezoO"));
                    console.log(event.target)
                }
                window.dispatchEvent(e);
            });
    }

#megjelenit(){
    let txt=`<div class="mezo">        
                   </div> `;
    this.szulElem.append(txt);
}

}