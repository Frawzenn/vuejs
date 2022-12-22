// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n.homeHaut{\n    background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);\n    font-family: 'montserra', sans-serif;\n    border-bottom-left-radius: 150px ;\n    border-bottom-right-radius: 150px;\n}\n.homeBas{\n    background: white;\n    font-family: 'montserra', sans-serif;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}