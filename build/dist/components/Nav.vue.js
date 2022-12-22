import './Nav.vue.css.proxy.js';
const defaultExport = {
  name: "Nav"
};
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "contNav" }
const _hoisted_2 = { class: "nav" }
const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", { class: "partieGauche" }, [
  /*#__PURE__*/_createElementVNode("p", null, "buuk")
], -1)
const _hoisted_4 = { class: "partieCentre" }
const _hoisted_5 = /*#__PURE__*/_createTextVNode("Accueil")
const _hoisted_6 = /*#__PURE__*/_createTextVNode("Tous les concerts")
const _hoisted_7 = /*#__PURE__*/_createTextVNode("Mes Réservations")
const _hoisted_8 = /*#__PURE__*/_createElementVNode("div", { class: "partieDroite" }, [
  /*#__PURE__*/_createElementVNode("p", null, "+33 4 50 67 33 22")
], -1)

export function render(_ctx, _cache) {
  const _component_router_link = _resolveComponent("router-link")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("nav", _hoisted_2, [
      _hoisted_3,
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_router_link, { to: "/" }, {
          default: _withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }),
        _createVNode(_component_router_link, { to: "/about" }, {
          default: _withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }),
        _createVNode(_component_router_link, { to: "/mesReservations" }, {
          default: _withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_8
  ]))
};

defaultExport.render = render;

export default defaultExport;