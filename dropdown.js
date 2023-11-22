const template = document.createElement('template')

template.innerHTML =  `

<style>

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #0c0c0c;
  color: #c7c7c7;
  padding: 16px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  margin-right: 1.5rem;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0c0c0c;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #c7c7c7;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #c7c7c7;
  color: #0c0c0c;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover {
  transform: translateY(-5px);
  font-weight: bold;
  transition: all 0.2s ;
}

</style>

<div class="dropdown">
  <button class="dropbtn">Categorias</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="./equipamentos.html">Equipamentos</a>
    <a href="./armas.html">Armas</a>
    <a href="./roupas.html">Roupas</a>
  </div>
</div>

`;

class dropdown extends HTMLElement{
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('drop-down', dropdown)