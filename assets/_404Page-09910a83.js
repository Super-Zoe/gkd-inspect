import { d as defineComponent, an as useRoute, f as createElementBlock, u as unref, l as toDisplayString, h as createBaseVNode, am as withModifiers, o as openBlock } from "./index-235f5a3e.js";
const _hoisted_1 = { class: "_404Page" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "_404Page",
  setup(__props) {
    const route = useRoute();
    const { fullPath } = route.redirectedFrom ?? {};
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(fullPath) ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(`访问的地址 ` + unref(fullPath) + ` 不存在`), 1)) : (openBlock(), createElementBlock("div", _hoisted_3, "欢迎来到404页面")),
        createBaseVNode("a", {
          href: "/",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.$router.replace({ path: `/` }), ["prevent"]))
        }, " 回到首页 ")
      ]);
    };
  }
});
const _404Page_vue_vue_type_style_index_0_scoped_e1ecd3ed_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _404Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1ecd3ed"]]);
export {
  _404Page as default
};
