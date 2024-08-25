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
    <style>
      :host {
          position: fixed;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
      }
    .alert {
                      padding: 20px;
                      background-color: #f44336;
                      color: white;
                  }
              </style>
              <div class="alert">
                  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                  <strong>Error!</strong>
              </div>
              `;
  }
}

customElements.define("alert-message", AlertMessage);

