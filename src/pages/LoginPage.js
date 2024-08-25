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
            <div>Login form </div>
            <user-login></user-login>
            <alert-message></alert-message>
            `;
  }
}

customElements.define("login-page", LoginPage);

