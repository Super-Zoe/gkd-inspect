import { s as shallowRef, d as defineComponent, ao as useRouter, a6 as onMounted, t as toValidURL, w as watchEffect, a as shallowReactive, e as watch, aq as resolveComponent, f as createElementBlock, b as createVNode, g as withCtx, u as unref, h as createBaseVNode, F as Fragment, j as NButton, k as createTextVNode, o as openBlock, N as NModal, ar as isRef, i as withKeys, l as toDisplayString, m as createCommentVNode } from "./index-df0b30b5.js";
import { l as enhanceFetch, m as message, j as delay, a as snapshotStorage, i as screenshotStorage, p as pLimit } from "./storage-71d9086d.js";
import { u as useTitle, b as useStorage, c as useDebounceFn, a as errorWrap, d as checkSelector, l as lib } from "./index-b6ecc2e7.js";
import { u as useSnapshotColumns, a as NSelect, N as NDataTable } from "./table-9941a21f.js";
import { u as useTask, x as useBatchTask, c as NSpace, N as NInput, h as NCheckbox, d as NIcon, a as NInputGroup } from "./node-8fda318c.js";
const useDeviceApi = (initOrigin) => {
  const origin = shallowRef(initOrigin);
  const rpc = async (rpcName, options = {}) => {
    var _a;
    if (!origin.value) {
      throw new Error(`origin must exist`);
    }
    const u = new URL(`/api/` + rpcName, origin.value);
    Object.entries(options.query || {}).forEach(([key, value]) => {
      if (value === void 0)
        return;
      u.searchParams.set(key, String(value));
    });
    const response = await enhanceFetch(u, options.init).catch((e) => {
      message.error(`网络错误:/` + rpcName);
      throw e;
    });
    if (!response.ok) {
      message.error(`接口错误:/` + rpcName + `:` + response.status);
      throw response;
    }
    if ((_a = response.headers.get(`Content-Type`)) == null ? void 0 : _a.includes(`application/json`)) {
      const error = await response.clone().json();
      if (error.__error) {
        message.error(error.message);
        throw response;
      }
    }
    return response;
  };
  const jsonRpc = async (...args) => {
    const response = await rpc(...args);
    return await response.json();
  };
  const blobRpc = async (...args) => {
    const response = await rpc(...args);
    return await response.blob();
  };
  const arrayBufferRpc = async (...args) => {
    const response = await rpc(...args);
    return await response.arrayBuffer();
  };
  const api = {
    device: async () => jsonRpc(`device`),
    snapshot: async (query) => {
      return jsonRpc(`snapshot`, { query });
    },
    screenshot: async (query) => {
      return arrayBufferRpc(`screenshot`, { query });
    },
    captureSnapshot: async () => {
      return jsonRpc(`captureSnapshot`);
    },
    snapshots: async () => {
      return jsonRpc(`snapshots`);
    },
    subsApps: async () => {
      return jsonRpc(`subsApps`);
    },
    updateSubsApps: async (data) => {
      return blobRpc(`updateSubsApps`, {
        init: {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }
      });
    },
    execSelector: async (data) => {
      return jsonRpc(
        `execSelector`,
        {
          init: {
            method: "POST",
            // value 是旧版本的选择器
            body: JSON.stringify({ ...data, value: data.selector }),
            headers: {
              "Content-Type": "application/json"
            }
          }
        }
      );
    }
  };
  return { origin, api };
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", {
  "h-15px": ""
}, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/gkd-kit/subscription/blob/main/src/types.ts",
  target: "_blank",
  rel: "noopener noreferrer"
}, " 查找说明 ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", {
  "h-10px": ""
}, null, -1);
const _hoisted_4 = {
  flex: "",
  "gap-10px": "",
  "flex-items-center": ""
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/gkd-kit/subscription/blob/main/src/types.ts",
  target: "_blank",
  rel: "noopener noreferrer"
}, " 操作说明 ", -1);
const _hoisted_6 = {
  flex: "",
  "flex-col": "",
  "p-10px": "",
  "gap-10px": "",
  "h-full": ""
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 32 32"
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z",
  fill: "currentColor"
})], -1);
const _hoisted_8 = {
  class: "h-full",
  flex: "",
  "flex-items-center": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DevicePage",
  setup(__props) {
    const router = useRouter();
    const title = useTitle(`新设备`);
    const {
      api,
      origin
    } = useDeviceApi();
    const link = useStorage(`device_link`, ``);
    const device = shallowRef();
    const connect = useTask(async () => {
      if (!link.value)
        return;
      origin.value = errorWrap(() => new URL(link.value.trim()), () => `非法设备地址`).origin;
      link.value = origin.value;
      device.value = await api.device();
    });
    onMounted(async () => {
      await delay(500);
      if (toValidURL(link.value)) {
        connect.invoke();
      }
    });
    const snapshots = shallowRef([]);
    watchEffect(async () => {
      if (!device.value)
        return;
      title.value = `已连接 ` + device.value.manufacturer;
      const result = await api.snapshots();
      result.sort((a, b) => b.id - a.id);
      snapshots.value = result;
      const subsApps = await api.subsApps();
      subsText.value = lib.stringify(subsApps || [], function(key, value) {
        if (value === null)
          return void 0;
        return value;
      }, 2);
    });
    const captureSnapshot = useTask(async () => {
      const snapshot = await api.captureSnapshot();
      const screenshot = await api.screenshot({
        id: snapshot.id
      });
      await snapshotStorage.setItem(snapshot.id, snapshot);
      await screenshotStorage.setItem(snapshot.id, screenshot);
      message.success(`保存快照成功`);
      const result = await api.snapshots();
      result.sort((a, b) => b.id - a.id);
      snapshots.value = result;
    });
    const downloadAllSnapshot = useTask(async () => {
      const snapshotIds = (await api.snapshots()).map((s) => s.id);
      const existSnapshotIds = new Set((await screenshotStorage.keys()).map((s) => parseInt(s)));
      const unimportSnapshotIds = snapshotIds.filter((k) => !existSnapshotIds.has(k));
      if (unimportSnapshotIds.length == 0) {
        message.success(`没有新记录可导入`);
        return;
      }
      let r = 0;
      const limit = pLimit(3);
      await Promise.all(unimportSnapshotIds.map((snapshotId) => limit(async () => {
        const [newSnapshot, newScreenshot] = await Promise.all([api.snapshot({
          id: snapshotId
        }), api.screenshot({
          id: snapshotId
        })]);
        if (!newSnapshot.nodes)
          return;
        await Promise.all([snapshotStorage.setItem(snapshotId, newSnapshot), screenshotStorage.setItem(snapshotId, newScreenshot)]);
        r++;
      })));
      message.success(`导入${r}条新记录`);
    });
    const {
      activityIdCol,
      appIdCol,
      appNameCol,
      ctimeCol,
      appVersionCodeCol,
      appVersionNameCol,
      reseColWidth
    } = useSnapshotColumns();
    const handleSorterChange = (sorter) => {
      if (sorter.columnKey == ctimeCol.key) {
        ctimeCol.sortOrder = sorter.order;
      }
    };
    const previewSnapshot = useBatchTask(async (row) => {
      if (!await snapshotStorage.hasItem(row.id)) {
        await snapshotStorage.setItem(row.id, await api.snapshot({
          id: row.id
        }));
      }
      if (!await screenshotStorage.hasItem(row.id)) {
        const bf = await api.screenshot({
          id: row.id
        });
        await screenshotStorage.setItem(row.id, bf);
      }
      window.open(router.resolve({
        name: "snapshot",
        params: {
          snapshotId: row.id
        }
      }).href);
    }, (r) => r.id);
    const columns = [ctimeCol, appNameCol, appIdCol, appVersionCodeCol, appVersionNameCol, activityIdCol, {
      key: `actions`,
      title: `Action`,
      fixed: "right",
      width: `120px`,
      render(row) {
        return createVNode(NSpace, {
          "size": "small"
        }, {
          default: () => [createVNode(NButton, {
            "size": "small",
            "loading": previewSnapshot.loading[row.id],
            "onClick": () => previewSnapshot.invoke(row)
          }, {
            default: () => [createTextVNode("查看")]
          })]
        });
      }
    }];
    const pagination = shallowReactive({
      page: 1,
      pageSize: 50,
      showSizePicker: true,
      pageSizes: [50, 100],
      onChange: (page) => {
        pagination.page = page;
      },
      onUpdatePageSize: (pageSize) => {
        pagination.pageSize = pageSize;
        pagination.page = 1;
      }
    });
    watch(pagination, reseColWidth);
    const showSubsModel = shallowRef(false);
    const subsText = shallowRef(``);
    const updateSubs = useTask(async () => {
      const appsSubs = errorWrap(() => lib.parse(subsText.value.trim() || `[]`));
      await api.updateSubsApps([].concat(appsSubs));
      message.success(`修改成功`);
    });
    const showSelectorModel = shallowRef(false);
    const actionOptions = ["click", "clickNode", "clickCenter", "back", "longClick", "longClickNode", "longClickCenter"].map((s) => ({
      value: s,
      label: s
    }));
    const clickAction = shallowReactive({
      selector: ``,
      selectorValid: false,
      action: actionOptions[0].value,
      quickFind: false
    });
    const checkSelectorValid = useDebounceFn(() => {
      clickAction.selectorValid = checkSelector(clickAction.selector);
    }, 500);
    watch(() => clickAction.selector.trim(), checkSelectorValid);
    const execSelector = useTask(async () => {
      const result = await api.execSelector({
        ...clickAction
      });
      if (result.message) {
        message.success(`点击成功:` + result.message);
        return;
      }
      if (result.action) {
        message.success((result.result ? `点击成功:` : `点击失败`) + result.action);
      }
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(NModal), {
        show: showSubsModel.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showSubsModel.value = $event),
        preset: "dialog",
        style: {
          "width": "800px"
        },
        title: "修改内存订阅",
        "positive-text": "确认",
        positiveButtonProps: {
          loading: unref(updateSubs).loading,
          onClick() {
            unref(updateSubs).invoke();
          }
        }
      }, {
        default: withCtx(() => [createVNode(unref(NInput), {
          value: subsText.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => subsText.value = $event),
          disabled: unref(updateSubs).loading,
          type: "textarea",
          class: "gkd_code",
          autosize: {
            minRows: 10,
            maxRows: 25
          },
          placeholder: `请输入订阅文本
订阅支持JSON5
根节点可以是APP规则对象也可以是APP规则对象数组`
        }, null, 8, ["value", "disabled"])]),
        _: 1
      }, 8, ["show", "positiveButtonProps"]), createVNode(unref(NModal), {
        show: showSelectorModel.value,
        "onUpdate:show": _cache[5] || (_cache[5] = ($event) => showSelectorModel.value = $event),
        preset: "dialog",
        style: {
          "width": "800px"
        },
        title: "执行选择器",
        "positive-text": "确认",
        positiveButtonProps: {
          loading: unref(execSelector).loading,
          disabled: !unref(clickAction).selectorValid,
          onClick() {
            unref(execSelector).invoke();
          }
        }
      }, {
        default: withCtx(() => [createVNode(unref(NInput), {
          value: unref(clickAction).selector,
          "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(clickAction).selector = $event),
          disabled: unref(execSelector).loading,
          type: "textarea",
          class: "gkd_code",
          autosize: {
            minRows: 4,
            maxRows: 10
          },
          placeholder: "请输入合法的选择器"
        }, null, 8, ["value", "disabled"]), _hoisted_1, createVNode(unref(NSpace), null, {
          default: withCtx(() => [createVNode(unref(NCheckbox), {
            checked: unref(clickAction).quickFind,
            "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => unref(clickAction).quickFind = $event)
          }, {
            default: withCtx(() => [createTextVNode(" 快速查找 ")]),
            _: 1
          }, 8, ["checked"]), _hoisted_2]),
          _: 1
        }), _hoisted_3, createBaseVNode("div", _hoisted_4, [createVNode(unref(NSelect), {
          value: unref(clickAction).action,
          "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(clickAction).action = $event),
          options: unref(actionOptions),
          class: "w-150px"
        }, null, 8, ["value", "options"]), _hoisted_5])]),
        _: 1
      }, 8, ["show", "positiveButtonProps"]), createBaseVNode("div", _hoisted_6, [createVNode(unref(NSpace), null, {
        default: withCtx(() => [createVNode(_component_RouterLink, {
          to: "/"
        }, {
          default: withCtx(() => [createVNode(unref(NButton), null, {
            icon: withCtx(() => [createVNode(unref(NIcon), null, {
              default: withCtx(() => [_hoisted_7]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), createVNode(unref(NInputGroup), null, {
          default: withCtx(() => [createVNode(unref(NInput), {
            value: unref(link),
            "onUpdate:value": _cache[6] || (_cache[6] = ($event) => isRef(link) ? link.value = $event : null),
            placeholder: "请输入设备地址",
            style: {
              minWidth: `250px`
            },
            onKeyup: withKeys(unref(connect).invoke, ["enter"])
          }, null, 8, ["value", "onKeyup"]), createVNode(unref(NButton), {
            onClick: unref(connect).invoke,
            loading: unref(connect).loading
          }, {
            default: withCtx(() => [createTextVNode(" 刷新连接 ")]),
            _: 1
          }, 8, ["onClick", "loading"])]),
          _: 1
        }), device.value ? (openBlock(), createElementBlock(Fragment, {
          key: 0
        }, [createBaseVNode("div", _hoisted_8, toDisplayString(`已连接 ${device.value.manufacturer} Android ${device.value.release}`), 1), createVNode(unref(NButton), {
          onClick: unref(captureSnapshot).invoke,
          loading: unref(captureSnapshot).loading
        }, {
          default: withCtx(() => [createTextVNode(" 快照 ")]),
          _: 1
        }, 8, ["onClick", "loading"]), createVNode(unref(NButton), {
          onClick: unref(downloadAllSnapshot).invoke,
          loading: unref(downloadAllSnapshot).loading
        }, {
          default: withCtx(() => [createTextVNode(" 下载设备所有快照 ")]),
          _: 1
        }, 8, ["onClick", "loading"]), createVNode(unref(NButton), {
          onClick: _cache[7] || (_cache[7] = ($event) => showSubsModel.value = true)
        }, {
          default: withCtx(() => [createTextVNode(" 修改内存订阅 ")]),
          _: 1
        }), createVNode(unref(NButton), {
          onClick: _cache[8] || (_cache[8] = ($event) => showSelectorModel.value = true)
        }, {
          default: withCtx(() => [createTextVNode(" 执行选择器 ")]),
          _: 1
        })], 64)) : createCommentVNode("", true)]),
        _: 1
      }), createVNode(unref(NDataTable), {
        striped: "",
        flexHeight: "",
        data: snapshots.value,
        columns,
        pagination: unref(pagination),
        "onUpdate:sorter": handleSorterChange,
        size: "small",
        class: "flex-1",
        scrollX: 1200
      }, null, 8, ["data", "pagination"])])], 64);
    };
  }
});
export {
  _sfc_main as default
};
