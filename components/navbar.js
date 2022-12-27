const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
<style>

</style>

<nav class="navbar">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="mechanicsHomePage.html">Classical Mechanics</a></li>
        <li><a href="quantumHomePage.html">Quantum Mechanics</a></li>
        <li><a href="statisticalMechanicsHomePage.html">Statistical Mechanics</a></li>
        <li><a href="electricityAndMagnetismHomePage.html">Electricity and Magnetism</a></li>
        <li><a href="solidStateHomePage.html">Solid State Physics</a></li>
    <ul>
</nav>`

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navbarTemplate.content);
    }
}

customElements.define('navbar-component', Navbar);