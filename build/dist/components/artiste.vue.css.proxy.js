// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n.nomArtiste{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    width: 100%;\n}\n.nomArtiste a{\r\n    width: 20%;\r\n    color: white;\r\n    padding: 30px 0;\r\n    border-right: grey solid 2px;\n}\n.nomArtiste a:last-child{\r\n    border-right: none;\n}\n.nomArtiste .active{\r\n    background: linear-gradient(72.83deg, #D48AE6 0%, #9A82FC 100%);\r\n    border-radius: 10px 10px 0 0 ;\r\n    border-right: none;\n}\n.imageArtiste img{\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: cover;\n}\n.imageArtiste{\r\n    width: 100%;\r\n    height: 600px;\n}\n.contArtiste{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n    width: 90%;\r\n    margin: 0 auto;\n}\n.artisteBasGauche{\r\n    position: absolute;\r\n    top: 85%;\r\n    left: 9%;\n}\n.artisteBasGauche h4{\r\n    color: white;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\n}\n.artisteBasGauche p {\r\n    color: white;\r\n    font-size: 15px;\r\n    font-weight: light;\n}\n.artisteBasDroite a{\r\n    padding: 14px;\r\n    background: linear-gradient(72.83deg, #D48AE6 0%, #9A82FC 100%);\r\n    border-radius: 8px;\r\n    color: white;\r\n    font-weight: bold;\n}\n.artisteBasDroite{\r\n    position: absolute;\r\n    right: 10%;\r\n    top : 89%\n}\r\n  \r\n\r\n\r\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}