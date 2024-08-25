class AlertMessage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
              <div>Alert message component </div>
              `;
    }
  }
  
  customElements.define("alert-message", AlertMessage);
  