const templatePage = document.createElement('template')

templatePage.innerHTML = `

<style>
    *{
        color: #fff;
        font-weight: bold ;
    }

    .imgClass{
        display: flex;
        align-items: center;
        width: 150px;
        height: 150px;
    }

    img{
        max-width: 100%;  /* Garante que a imagem não ultrapasse a largura do contêiner */
        max-height: 100%;
        overflow: auto;
        border-radius: 30px;
    }

    .conteiner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .conteinerProduct{
        background-color: #c7c7c7;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-radius: 30px;
        height: 400px;
    }

</style> 

<div class="conteiner">
    <div class="conteinerProduct">
        <img src="./images/kit_pesca.png">
    </div>
    <div class="conteinerText">
        <h2>Kit De Pesca Profissional Vara Carbono 5'6 +carretilha 10rol</h2>
    </div>
</div>
`

class ProductPage extends HTMLElement {
    
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(templatePage.content.cloneNode(true)) 
    }
}

window.customElements.define('product-p', ProductPage)