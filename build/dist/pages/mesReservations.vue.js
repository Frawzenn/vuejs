
  import Welcome from '../components/Welcome.vue.js'
  import Nav from '../components/Nav.vue.js'
  
  const defaultExport = {
    name: 'About',
    components: {
      Nav,
    },
  }
  
import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "about" }

export function render(_ctx, _cache) {
  const _component_Nav = _resolveComponent("Nav")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_Nav)
  ]))
};

defaultExport.render = render;

export default defaultExport;