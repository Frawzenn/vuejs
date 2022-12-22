// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap%27');\n.contNav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px #595959 solid;\n  align-items: center;\n  background: radial-gradient(51.9% 336.54% at 51.9% 50%, #241B4D 0%, #1B1B1B 100%);\n}\n.nav{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.partieGauche{\n  border-right: 1px #595959 solid;\n}\n.partieGauche p {\n  font-family: 'montserrat', sans-serif;\n  padding: 15px 30px;\n  color: white;\n  font-weight: bold;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 30px;\n  line-height: 38px;\n}\n.partieCentre{\n  display: flex;\n  font-family: 'montserrat', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 25px;\n}\n.partieCentre a{\n  color: white;\n  text-decoration: none;\n  padding: 23px;\n}\n.partieCentre a.router-link-active{\n  border-bottom: 1px solid #D48AE6;\n  color: #D48AE6;\n}\n.partieDroite{\n  color: white;\n  font-family: 'montserrat', sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 20px;\n  line-height: 25px;\n  margin-right: 15px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}