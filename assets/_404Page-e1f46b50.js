import { d as defineComponent, an as useRoute, f as createElementBlock, u as unref, l as toDisplayString, h as createBaseVNode, am as withModifiers, o as openBlock } from "./index-df0b30b5.js";
const _hoisted_1 = {
  flex: "",
  "flex-col": "",
  "flex-items-center": "",
  "w-100vw": "",
  "pt-50px": "",
  "gap-20px": ""
};
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
export {
  _sfc_main as default
};
