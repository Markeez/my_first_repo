class Header extends HTMLElement {
    constructor()
    {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <header role="banner">
          <div class="header-inner">
                <h1>
                    <a href="index.html" title="Home">Mark Miasnikov</a>
                </h1>
                <p>UX/UI Designer</p>
            </div>
          </header>
        `;
    }
}

customElements.define('header-component', Header);