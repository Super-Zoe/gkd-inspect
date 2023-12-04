import { d as defineComponent, an as useRoute, ao as useRouter, s as shallowRef, a6 as onMounted, t as toValidURL, f as createElementBlock, K as withDirectives, L as vShow, h as createBaseVNode, l as toDisplayString, o as openBlock } from "./index-235f5a3e.js";
import { m as message, j as delay, u as urlStorage, a as snapshotStorage, n as loadingBar, q as githubZipUrlReg, e as githubZipStorage, r as githubImageUrlReg, b as githubJpgStorage } from "./storage-00dd3e29.js";
import { a as importFromNetwork } from "./import-1c0da893.js";
import "./jszip.min-9f22f6d7.js";
const _hoisted_1 = {
  class: "h-[calc(100%-10px)]",
  flex: "",
  "gap-5px": "",
  "p-5px": "",
  "flex-col": "",
  "flex-items-center": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImportPage",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const importUrl = String(route.query.url || ``);
    const loading = shallowRef(true);
    const tip = shallowRef(`加载中...`);
    onMounted(async () => {
      if (!toValidURL(importUrl)) {
        message.error(`非法URL参数`);
        await delay(1e3);
        router.replace({
          path: `/`
        });
        return;
      }
      await delay(1e3);
      const snapshotId = urlStorage[importUrl];
      if (snapshotId) {
        const snapshot = await snapshotStorage.getItem(snapshotId);
        if (snapshot) {
          router.replace({
            name: "snapshot",
            params: {
              snapshotId
            }
          });
          return;
        } else {
          delete urlStorage[importUrl];
        }
      }
      loadingBar.start();
      try {
        const [result] = await importFromNetwork(importUrl) ?? [];
        if (result.status == "fulfilled") {
          loadingBar.finish();
          const snapshot = result.value;
          if (snapshot == null ? void 0 : snapshot.id) {
            urlStorage[importUrl] = snapshot.id;
            if (importUrl.match(githubZipUrlReg)) {
              githubZipStorage[snapshot.id] = importUrl;
            } else if (importUrl.match(githubImageUrlReg)) {
              githubJpgStorage[snapshot.id] = importUrl;
            }
            loading.value = false;
            await delay(500);
            router.replace({
              name: "snapshot",
              params: {
                snapshotId: snapshot.id
              }
            });
          } else {
            tip.value = `获取资源失败`;
          }
        } else {
          throw result.reason;
        }
      } catch {
        loadingBar.error();
        tip.value = `加载资源失败`;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [withDirectives(createBaseVNode("div", {
        "mt-40px": ""
      }, toDisplayString(tip.value), 513), [[vShow, loading.value]])]);
    };
  }
});
export {
  _sfc_main as default
};
