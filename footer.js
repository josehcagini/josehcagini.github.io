const templateFooterc = document.createElement('template')

templateFooterc.innerHTML = `

<style>

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font: 'arial';
}

.gray-background{
    overflow: hidden;
    width: 100%;
    background-color: #0c0c0c;
}


.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c7c7c7;
    padding: 1rem 1rem;
    gap: 2rem;
}


.download-options>*{
    margin: 1rem 0;
}

.download-options>p:first-child{
    font-weight: bold;
    color: #c7c7c7;
}

.download-options>div{
    display: flex;
}

.download-options>div img{
    width: 180px;
}

.logo-footer{
    text-align: center;
}

.logo{
    font-size: 4rem; 
    color: #c7c7c7;
}

.logo span {
    font-size: 5rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url('./images/camo.jpg');
}

.links-footer h3{
    color: #fff;
    margin-bottom: 0.8rem;
}

.links-footer ul{
    list-style: none;
}

.links-footer ul li{
    margin-bottom: 0.5rem;
    cursor: pointer;

}

.copyright{
    color: #c7c7c7;
    padding: 2rem 0;
    text-align: center;
}

@media (max-width: 800px) {
    .footer-content{
        display: inline;
        font-size: 0.8rem;
    }

    .footer-content>div{
        padding: 1rem;

    }

    .download-options>div{
        display: inline;
    }

    .download-options>div img{
        width: 120px;
    }

    .copyright{
        font-size: 0.8rem;
    }

    .logo{
        font-size: 1.5rem;
    }

    .logo span {
        font-size: 2.5rem;
    }


}

</style>

<footer class="gray-background">
    <div class="page-inner-content footer-content">
        <div class="download-options">
            <p>Baixe nosso app</p>
            <div>
                <img src="./images/app-store.png" alt="store">
                <img src="./images/play-store.png" alt="store">
            </div>
        </div>

        <div class="logo-footer">
            <h1 class="logo">Legio<span>Store</span></h1>
            <p>...</p>
        </div>

        <div class="links-footer">
            <h3>Links</h3>
            <ul>
                <li>Cupons</li>
                <li>Blog Post</li>
                <li>Políticas</li>
                <li>Torne-se afiliado</li>
            </ul>
        </div>
    </div>
    <hr class="page-inner-content" />
    <div class="page-inner-content copyright">
        <p>José H. &copy; Copyright 2023</p>
    </div>
</footer>
`

class FooterCus extends HTMLElement {

    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(templateFooterc.content.cloneNode(true))

    }

}

window.customElements.define('footer-cus', FooterCus)