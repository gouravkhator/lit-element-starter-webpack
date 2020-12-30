import { LitElement, html, css } from 'lit-element';
// import { style } from './header.scss';

class Header extends LitElement {
    static get styles() {
        return [css`
            nav, ul{
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            nav{
                background-color: pink;
                color: #8a3333;
            }
            
            ul{
                list-style: none;
            }

            li{
                margin-right: 10px;
                padding: 10px;
                background-color: #8a3333;
            }

            a{
                text-decoration: none;
                color: #fff4df;
            }
        `];
    }

    render() {
        return html`
            <nav>
                My App
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/page1">Page 1</a>
                    </li>
                    <li>
                        <a href="/page2">Page 2</a>
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('app-header', Header);
