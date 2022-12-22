// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n.contHeader svg{\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 50%;\r\n        transform: translate(-50%, -50%);\r\n        z-index: 0;\n}\n.textHeader{\r\n        position: relative;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        z-index: 1;\r\n        height: 550px;\n}\n.textHeader h1{\r\n        font-style: normal;\r\n        font-weight: 800;\r\n        font-size: 60px;\r\n        line-height: 76px;\r\n        color: white;\r\n        position: relative;\r\n        z-index: 1;\n}\n.textHeader h2{\r\n        font-style: normal;\r\n        font-weight: 800;\r\n        font-size: 50px;\r\n        line-height: 63px;\r\n        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);\r\n        -webkit-background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n        background-clip: text;\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}