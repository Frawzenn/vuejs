// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n.contAussiDispo{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\n}\n.textAussiDispo{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        width:700px;\r\n        margin-top: 100px;\n}\n.textAussiDispo h3{\r\n        font-weight: 800;\r\n        font-size: 41px;\r\n        line-height: 63px;\r\n        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);\r\n        -webkit-background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n        background-clip: text;\n}\n.textAussiDispo p{\r\n        font-style: normal;\r\n        font-weight: 400;\r\n        font-size: 21px;\r\n        line-height: 30px;\r\n        color: #000000;\r\n        padding: 0 20px;\r\n        text-align: justify;\n}\n.imageAussiDispo{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 100px 30px ;\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}