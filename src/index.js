import './components/header/header.js';
import './components/footer/footer.js';
import './styles/main.scss';

class MainApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(document.createElement('app-header'));
        this.shadowRoot.appendChild(document.createElement('app-footer'));
    }
}

customElements.define('main-app', MainApp);
