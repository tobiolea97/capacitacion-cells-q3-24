class LoginPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    const LoginForm = this.shadowRoot.querySelector("user-login");
    const alertMessage = this.shadowRoot.querySelector("alert-message");

    this.addEventListener("login-success", (e) => {
      this.handleLoginSuccess(e);
    });

    this.addEventListener("login-error", (e) => {
      this.handleLoginError(e);
    });
  }

  handleLoginSuccess(e) {
    // debugger;
    const alertMessage = this.shadowRoot.querySelector("alert-message");
    alertMessage.setAttribute("type", "success");
    alertMessage.setAttribute("message", e.detail.message);
  }
  
  handleLoginError(e) {
    // debugger;
    const alertMessage = this.shadowRoot.querySelector("alert-message");
    alertMessage.setAttribute("type", "error");
    alertMessage.setAttribute("message", e.detail.message);
  }

  disconnectedCallback() {
    this.removeEventListener("login-success", this.handleLoginSuccess);
    this.removeEventListener("login-error", this.handleLoginError);
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
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
            <alert-message type='' message='' ></alert-message>
            `;
  }
}

customElements.define("login-page", LoginPage);

