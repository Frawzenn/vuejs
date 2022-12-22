// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n.footerPartieGauche p{\r\n        font-style: normal;\r\n        font-weight: 800;\r\n        font-size: 45px;\r\n        line-height: 63px;\r\n        background: linear-gradient(89.6deg, #D99CF0 -2.19%, #927BF9 102.14%);\r\n        -webkit-background-clip: text;\r\n        -webkit-text-fill-color: transparent;\r\n        background-clip: text;\r\n        margin: 10px 50px;\n}\n.footerPartieDroite p{\r\n        font-weight: 100;\r\n        font-size: 20px;\r\n        line-height: 25px;\r\n        color: #000000;\r\n        margin: 0 15px;\n}\n.footerPartieDroite p:last-child{\r\n        font-weight: 800;\r\n        font-size: 20px;\r\n        line-height: 25px;\n}\n.footerPartieDroite{\r\n        display: flex;\r\n        justify-content: flex-end;\n}\n.contFooter{\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        background-color: #FAFAFA;\n}\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}