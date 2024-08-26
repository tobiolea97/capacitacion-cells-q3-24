class AlertMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    let type = this.getAttribute("type");
    let message = this.getAttribute("message");
  }

  static get observedAttributes() {
    return ["type", "message"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const type = this.getAttribute("type") || "error";
    const message = this.getAttribute("message") || "";

    let backgroundColor;
    switch(type) {
      case "success":
        backgroundColor = "#4CAF50";
        break;
      case "warning":
        backgroundColor = "#FFC107";
        break;
      case "info":
        backgroundColor = "#2196F3";
        break;
      case "error":
      default:
        backgroundColor = "#f44336";
        break;
    }

    this.shadowRoot.innerHTML = /*html*/ `
    <style>
      :host {
          position: fixed;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
      }
      .alert {
        display: ${message != "" ? "block" : "none"};
          width: auto;
          padding: 20px 50px;
          background-color: ${backgroundColor};
          color: white;
      }
          .alert span {
            margin-right: 15px;
          }
    </style>
    <div class="alert">
        <strong>${message}</strong>
    </div>
    `;
  }
}

customElements.define("alert-message", AlertMessage);

