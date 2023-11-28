const templateCardH = document.createElement('template')

templateCardH.innerHTML = `

<style>

*{
    color: #0c0c0c;
    font-weight: bold ;
}

.imgClass{
    display: flex;
    align-items: center;
    width: 150px;
    height: 150px;
}
img{
    width: 150px;
}
.conteinerCard{
    background-color: #c7c7c7;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-radius: 30px;
    height: 220px;
    transition: all 0.2s ;

}
.conteinerCard:hover {
    box-shadow: 0px -3px 53px 5px rgba(199,199,199,0.35);
}
</style>

<div class='conteinerCard'>
    <div class='imgClass'>
    </div>
</div>
`

class CardH extends HTMLElement {

    constructor(){
        super()
        this.root = this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(templateCardH.content.cloneNode(true))

        this.root.querySelector('.conteinerCard').addEventListener('click', () => {
            window.location.href = './produto.html';
        });
    }

    static get observedAttributes(){
        return ['source', 'descr']
    }

    get source(){
        return this.getAttribute('source')
    }
    set source(value){
        this.setAttribute('source', value)
    }

    get descr(){
        return this.getAttribute('descr')
    }
    set descr(value){
        this.setAttribute('descr', value)
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        if(attrName.toLowerCase() === 'source'){
            const divC = this.root.querySelector('.imgClass')
            let imgCard = divC.querySelector('.imageCard') ? divC.querySelector('.imageCard') : document.createElement('img');
            imgCard.src = newVal
            divC.append(imgCard)
        }
        if(attrName.toLowerCase() === 'descr'){
            const divC = this.root.querySelector('.conteinerCard')
            let pCard = divC.querySelector('.pImg') ? divC.querySelector('.pImg') : document.createElement('p');
            pCard.innerText = newVal
            divC.append(pCard)
        }
    }
    

}


window.customElements.define('card-h', CardH)