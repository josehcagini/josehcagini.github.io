const templateNav = document.createElement('template')

templateNav.innerHTML = `

<style>

*{
    transition: all 0.2s;
}

.header-inner-content{
    max-width: 1300px;
    margin-left: auto ;
    margin-right: auto ;
    height: 4rem;
}

.navbar{
    background-color: #0c0c0c;
    padding: 1rem;
    position: sticky;
    top: 0;
    box-shadow: 10px 0px 10px #0c0c0c;
    z-index: 99;
}

.navbar>div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.logo{
    cursor: pointer;
    font-size: 4rem; 
    color: #c7c7c7;
}

.logo span {
    font-size: 5rem;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url('./images/camo.jpg');
}

nav ul{
    display: flex;
    list-style: none;
    align-items: center;
}

.nav-icon-conteiner{
    display: flex;
    align-items: center;

}

.nav-icon-conteiner img{
    width: 30px;
    cursor: pointer;
}

.nav-icon-conteiner img:first-child{
    margin-right: 1rem;
}

nav ul li {
    color: #c7c7c7;
    font-weight: bold;
    margin-right: 1.5rem;
    cursor: pointer;
}

nav ul li:hover {
    transform: translateY(-5px);
    font-weight: bold;
    transition: all 0.2s ;
    
}

.menu-button{
    display: none;
}

@media (max-width: 800px){

    *{
        transition: all 0.2s;
    }

    .logo{
        font-size: 1.5rem;
    }

    .logo span {
        font-size: 2.5rem;
    }

    nav{
        position: absolute;
        background-color: #0c0c0c;
        width: 100%;
        top: 80px;
        display: none;
    }

    .menu-button{
        display: block;
    }

    .show-menu nav{
        display: inline;
    }

    nav ul{
        flex-direction: column;
    }

    nav ul li{
        text-align: center;
        padding: 1rem;
        font-size: 1rem;
    }
}

</style>

<div class="navbar">
        <div class="header-inner-content ">
            <h1 class="logo"><a href='./index.html'>Legio<span>Store</span></a></h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <drop-down> </drop-down>
                </ul>
            </nav>
            <div class="nav-icon-conteiner">
                <img src="./images/cart.png" alt="carr">
                <img class="menu-button" src="./images/menu.png" alt="carr">
            </div>
        </div>
    </div>
`
class NavBarC extends HTMLElement {

    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(templateNav.content.cloneNode(true))

    }

    connectedCallback(){

        const navbar = this.shadowRoot.querySelector(".navbar");
        const menuButton = this.shadowRoot.querySelector(".menu-button")

        menuButton.addEventListener('click', () => {
            navbar.classList.toggle("show-menu");
        })
    }

}

window.customElements.define('navbar-c', NavBarC)