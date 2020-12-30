import { LitElement, html } from 'lit-element';

class Footer extends LitElement {
    render() {
        return html`
            <footer>
                Copyright &#169; Gourav Khator Limited
            </footer>
        `;
    }
}

customElements.define('app-footer', Footer);
