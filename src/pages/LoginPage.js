class LoginPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
              .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
            </style>
            <div class='container'> 
              <user-login></user-login>
              </div>
            <alert-message></alert-message>
            `;
  }
}

customElements.define("login-page", LoginPage);

