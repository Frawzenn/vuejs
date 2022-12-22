import './indexAussiDispo.vue.css.proxy.js';
const defaultExport = {
  name: "indexAussiDispo"
};
import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "contAussiDispo" }
const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", { class: "textAussiDispo" }, [
  /*#__PURE__*/_createElementVNode("h3", null, "buuk, aussi sur ton téléphone !"),
  /*#__PURE__*/_createElementVNode("p", null, "Télécharge l’application book sur ton smartphone pour pouvoir réserver encore plus facilement et être tenu au courant grâce aux notifications des derniers concerts disponibles sur la plateforme")
], -1)
const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", { class: "imageAussiDispo" }, [
  /*#__PURE__*/_createElementVNode("img", {
    class: "imgApple",
    src: "/img/appstore.png",
    alt: "Download on appstore"
  }),
  /*#__PURE__*/_createElementVNode("img", {
    class: "imgAndroid",
    src: "/img/ggplay.png",
    alt: "Download on google store"
  })
], -1)
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
]

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, _hoisted_4))
};

defaultExport.render = render;

export default defaultExport;