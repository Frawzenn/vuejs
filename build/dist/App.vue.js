
  const defaultExport = {
    setup() {
      return {};
    },
  };

import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock } from "../_snowpack/pkg/vue.js"

export function render(_ctx, _cache) {
  const _component_router_view = _resolveComponent("router-view")

  return (_openBlock(), _createBlock(_component_router_view))
};

defaultExport.render = render;

export default defaultExport;