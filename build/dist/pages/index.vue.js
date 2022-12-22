import './index.vue.css.proxy.js';

import Nav from '../components/Nav.vue.js'
import textHeader from '../components/textHeader.vue.js'
import artiste from '../components/artiste.vue.js'
import basIndex from '../components/basIndex.vue.js';
import IndexAussiDispo from '../components/indexAussiDispo.vue.js';
import testFooter from '../components/testFooter.vue.js';

const defaultExport = {
  name: 'Home',
  components: {
    Nav,
    textHeader,
    artiste,
    basIndex,
    IndexAussiDispo,
    testFooter,
},
}

import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "homeHaut" }
const _hoisted_2 = { class: "homeBas" }

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")
  const _component_textHeader = _resolveComponent("textHeader")
  const _component_artiste = _resolveComponent("artiste")
  const _component_basIndex = _resolveComponent("basIndex")
  const _component_IndexAussiDispo = _resolveComponent("IndexAussiDispo")
  const _component_testFooter = _resolveComponent("testFooter")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_Nav),
      _createVNode(_component_textHeader),
      _createVNode(_component_artiste),
      _createVNode(_component_basIndex)
    ]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_IndexAussiDispo),
      _createVNode(_component_testFooter)
    ])
  ], 64))
};

defaultExport.render = render;

export default defaultExport;