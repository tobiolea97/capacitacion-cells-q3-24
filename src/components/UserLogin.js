class UserLogin extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
              <div>User loging component </div>
              `;
    }
  }
  
  customElements.define("user-login", UserLogin);
  