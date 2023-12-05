import { d as defineComponent, s as shallowRef, a as shallowReactive, c as computed, w as watchEffect, r as reactive, b as createVNode, e as watch, f as createElementBlock, g as withCtx, u as unref, h as createBaseVNode, F as Fragment, t as toValidURL, o as openBlock, N as NModal, i as withKeys, j as NButton, k as createTextVNode, l as toDisplayString, m as createCommentVNode, R as RouterLink } from "./index-df0b30b5.js";
import { _ as _sfc_main$1, b as batchJpgDownloadZip, a as batchZipDownloadZip, c as batchCreateJpgUrl, s as showTextDLg, d as batchCreateZipUrl } from "./ActionCard.vue_vue_type_script_setup_true_lang-d948deff.js";
import { s as shallowSnapshotStorage, d as dialog, a as snapshotStorage, g as githubUrlToSelfUrl } from "./storage-71d9086d.js";
import { i as importFromLocal, a as importFromNetwork } from "./import-db3ec019.js";
import { u as useSnapshotColumns, N as NDataTable, r as renderDveice } from "./table-9941a21f.js";
import { u as useTask, N as NInput, a as NInputGroup, b as NPopover, c as NSpace, d as NIcon } from "./node-8fda318c.js";
import "./jszip.min-9024b065.js";
const _hoisted_1 = {
  flex: "",
  "flex-col": "",
  "p-10px": "",
  "gap-10px": "",
  "h-full": ""
};
const _hoisted_2 = {
  flex: ""
};
const _hoisted_3 = {
  "h-full": "",
  flex: "",
  "flex-items-center": ""
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", {
  "flex-1": ""
}, null, -1);
const _hoisted_5 = {
  href: "https://github.com/gkd-kit/inspect",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 496 512"
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z",
  fill: "currentColor"
})], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, [/* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "32",
  d: "M256 112v288"
}), /* @__PURE__ */ createBaseVNode("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "32",
  d: "M400 256H112"
})], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
}, [/* @__PURE__ */ createBaseVNode("path", {
  d: "M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4c-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8c-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6c-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9a26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4c30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z",
  fill: "currentColor"
})], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomePage",
  setup(__props) {
    const snapshots = shallowRef([]);
    const updateSnapshots = async () => {
      snapshots.value = (await shallowSnapshotStorage.getAllItems()).reverse();
      checkedRowKeys.value = [];
    };
    updateSnapshots();
    const filterOption = shallowReactive({
      query: ``,
      actualQuery: ``,
      updateQuery: () => {
        filterOption.actualQuery = filterOption.query.trim();
        checkedRowKeys.value = [];
      }
    });
    const filterSnapshots = computed(() => {
      const actualQuery = filterOption.actualQuery;
      if (!actualQuery)
        return snapshots.value;
      return snapshots.value.filter((s) => {
        return (s.appName || ``).includes(actualQuery) || (s.appId || ``).includes(actualQuery) || (s.activityId || ``).includes(actualQuery);
      });
    });
    const importLoacl = useTask(async () => {
      await importFromLocal();
      await updateSnapshots();
    });
    const {
      activityIdCol,
      appIdCol,
      appNameCol,
      ctimeCol,
      deviceCol,
      appVersionCodeCol,
      appVersionNameCol,
      reseColWidth
    } = useSnapshotColumns();
    watchEffect(() => {
      const set = filterSnapshots.value.reduce((p, c) => (p.add(renderDveice(c)), p), /* @__PURE__ */ new Set());
      if (set.size <= 1) {
        deviceCol.filterOptions = void 0;
        return;
      }
      deviceCol.filterOptions = [...set.values()].map((s) => ({
        value: s,
        label: s
      }));
    });
    watchEffect(() => {
      const set = filterSnapshots.value.reduce((p, c) => (p.add(c.appName), p), /* @__PURE__ */ new Set());
      if (set.size <= 1) {
        appNameCol.filterOptions = void 0;
        return;
      }
      appNameCol.filterOptions = [...set.values()].map((s) => ({
        value: s,
        label: s
      }));
    });
    watchEffect(() => {
      const set = filterSnapshots.value.reduce((p, c) => (p.add(c.activityId), p), /* @__PURE__ */ new Set());
      if (set.size <= 1) {
        activityIdCol.filterOptions = void 0;
        return;
      }
      activityIdCol.filterOptions = [...set.values()].map((s) => ({
        value: s,
        label: s
      }));
    });
    const columns = reactive([{
      type: "selection"
    }, ctimeCol, deviceCol, appNameCol, appIdCol, appVersionCodeCol, appVersionNameCol, activityIdCol, {
      key: `actions`,
      title: `操作`,
      fixed: "right",
      width: `255px`,
      render(row) {
        return createVNode(_sfc_main$1, {
          "snapshot": row,
          "onDelete": updateSnapshots
        }, null);
      }
    }]);
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
    const handleSorterChange = (sorter) => {
      if (sorter.columnKey == ctimeCol.key) {
        ctimeCol.sortOrder = sorter.order;
      }
    };
    const showModal = shallowRef(false);
    const text = shallowRef(``);
    const importNetwork = useTask(async () => {
      const urls = text.value.trim().split(`
`).map((u) => u.trim()).filter((u) => toValidURL(u));
      if (urls.length == 0)
        return;
      await importFromNetwork(urls);
      await updateSnapshots();
      text.value = ``;
    });
    const checkedRowKeys = shallowRef([]);
    const checkedSnapshots = () => {
      return Promise.all(checkedRowKeys.value.map((id) => snapshotStorage.getItem(id)));
    };
    const batchDelete = useTask(async () => {
      await new Promise((res, rej) => {
        dialog.warning({
          title: `删除`,
          content: `是否批量删除 ${checkedRowKeys.value.length} 个快照`,
          negativeText: `取消`,
          positiveText: `确认`,
          onClose: rej,
          onEsc: rej,
          onMaskClick: rej,
          onNegativeClick: rej,
          onPositiveClick: res
        });
      });
      await Promise.all(checkedRowKeys.value.map((k) => snapshotStorage.removeItem(k)));
      await updateSnapshots();
    });
    const batchDownloadJpg = useTask(async () => {
      await batchJpgDownloadZip(await checkedSnapshots());
    });
    const batchDownloadZip = useTask(async () => {
      await batchZipDownloadZip(await checkedSnapshots());
    });
    const batchShareJpgUrl = useTask(async () => {
      const pngUrls = await batchCreateJpgUrl(await checkedSnapshots());
      showTextDLg({
        content: pngUrls.map((s) => githubUrlToSelfUrl(s)).join(`
`) + `
`
      });
    });
    const batchShareZipUrl = useTask(async () => {
      const zipUrls = await batchCreateZipUrl(await checkedSnapshots());
      showTextDLg({
        content: zipUrls.map((s) => githubUrlToSelfUrl(s)).join(`
`) + `
`
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(NModal), {
        show: showModal.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => showModal.value = $event),
        preset: "dialog",
        title: "导入网络文件",
        showIcon: false,
        positiveText: "确认",
        negativeText: "取消",
        style: {
          "width": "800px"
        },
        onPositiveClick: unref(importNetwork).invoke,
        loading: unref(importNetwork).loading
      }, {
        default: withCtx(() => [createVNode(unref(NInput), {
          value: text.value,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => {
            if (!unref(importNetwork).loading) {
              text.value = $event;
            }
          }),
          type: "textarea",
          placeholder: `仅支持ZIP文件链接
每行一个
空白行自动忽略
非法链接行自动忽略`,
          autosize: {
            minRows: 8,
            maxRows: 16
          },
          inputProps: {
            style: `white-space: nowrap;`
          }
        }, null, 8, ["value"])]),
        _: 1
      }, 8, ["show", "onPositiveClick", "loading"]), createBaseVNode("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(unref(NSpace), null, {
        default: withCtx(() => [createVNode(unref(NInputGroup), null, {
          default: withCtx(() => [createVNode(unref(NInput), {
            placeholder: "请输入关键字搜索",
            clearable: "",
            value: unref(filterOption).query,
            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(filterOption).query = $event),
            onKeyup: withKeys(unref(filterOption).updateQuery, ["enter"]),
            onChange: unref(filterOption).updateQuery
          }, null, 8, ["value", "onKeyup", "onChange"]), createVNode(unref(NButton), {
            onClick: unref(filterOption).updateQuery
          }, {
            default: withCtx(() => [createTextVNode(" 搜索 ")]),
            _: 1
          }, 8, ["onClick"])]),
          _: 1
        }), checkedRowKeys.value.length ? (openBlock(), createElementBlock(Fragment, {
          key: 0
        }, [createVNode(unref(NPopover), null, {
          trigger: withCtx(() => [createVNode(unref(NButton), null, {
            default: withCtx(() => [createTextVNode(" 批量下载 ")]),
            _: 1
          })]),
          default: withCtx(() => [createVNode(unref(NSpace), {
            vertical: ""
          }, {
            default: withCtx(() => [createVNode(unref(NButton), {
              onClick: unref(batchDownloadZip).invoke,
              loading: unref(batchDownloadZip).loading
            }, {
              default: withCtx(() => [createTextVNode(" 批量下载-快照 ")]),
              _: 1
            }, 8, ["onClick", "loading"]), createVNode(unref(NButton), {
              onClick: unref(batchDownloadJpg).invoke,
              loading: unref(batchDownloadJpg).loading
            }, {
              default: withCtx(() => [createTextVNode(" 批量下载-图片 ")]),
              _: 1
            }, 8, ["onClick", "loading"])]),
            _: 1
          })]),
          _: 1
        }), createVNode(unref(NPopover), null, {
          trigger: withCtx(() => [createVNode(unref(NButton), null, {
            default: withCtx(() => [createTextVNode(" 批量分享 ")]),
            _: 1
          })]),
          default: withCtx(() => [createVNode(unref(NSpace), {
            vertical: ""
          }, {
            default: withCtx(() => [createVNode(unref(NButton), {
              onClick: unref(batchShareZipUrl).invoke,
              loading: unref(batchShareZipUrl).loading
            }, {
              default: withCtx(() => [createTextVNode(" 批量生成链接-快照 ")]),
              _: 1
            }, 8, ["onClick", "loading"]), createVNode(unref(NButton), {
              onClick: unref(batchShareJpgUrl).invoke,
              loading: unref(batchShareJpgUrl).loading
            }, {
              default: withCtx(() => [createTextVNode(" 批量生成链接-图片 ")]),
              _: 1
            }, 8, ["onClick", "loading"])]),
            _: 1
          })]),
          _: 1
        }), createVNode(unref(NButton), {
          onClick: unref(batchDelete).invoke
        }, {
          default: withCtx(() => [createTextVNode(" 批量删除 ")]),
          _: 1
        }, 8, ["onClick"]), createBaseVNode("div", _hoisted_3, toDisplayString(`已选中 ${checkedRowKeys.value.length} 个快照`), 1)], 64)) : createCommentVNode("", true)]),
        _: 1
      }), _hoisted_4, createVNode(unref(NSpace), null, {
        default: withCtx(() => [createBaseVNode("a", _hoisted_5, [createVNode(unref(NButton), null, {
          icon: withCtx(() => [createVNode(unref(NIcon), null, {
            default: withCtx(() => [_hoisted_6]),
            _: 1
          })]),
          _: 1
        })]), createVNode(unref(NPopover), null, {
          trigger: withCtx(() => [createVNode(unref(NButton), null, {
            icon: withCtx(() => [createVNode(unref(NIcon), null, {
              default: withCtx(() => [_hoisted_7]),
              _: 1
            })]),
            _: 1
          })]),
          default: withCtx(() => [createVNode(unref(NSpace), {
            vertical: ""
          }, {
            default: withCtx(() => [createVNode(unref(NButton), {
              onClick: unref(importLoacl).invoke,
              loading: unref(importLoacl).loading
            }, {
              default: withCtx(() => [createTextVNode(" 导入本地文件 ")]),
              _: 1
            }, 8, ["onClick", "loading"]), createVNode(unref(NButton), {
              onClick: _cache[3] || (_cache[3] = ($event) => showModal.value = true),
              loading: unref(importNetwork).loading
            }, {
              default: withCtx(() => [createTextVNode(" 导入网络文件 ")]),
              _: 1
            }, 8, ["loading"])]),
            _: 1
          })]),
          _: 1
        }), createVNode(unref(RouterLink), {
          to: "/device"
        }, {
          default: withCtx(() => [createVNode(unref(NButton), null, {
            icon: withCtx(() => [createVNode(unref(NIcon), null, {
              default: withCtx(() => [_hoisted_8]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })]), createVNode(unref(NDataTable), {
        striped: "",
        data: filterSnapshots.value,
        columns,
        scrollX: 1800,
        pagination: unref(pagination),
        checkedRowKeys: checkedRowKeys.value,
        "onUpdate:checkedRowKeys": _cache[4] || (_cache[4] = ($event) => checkedRowKeys.value = $event),
        rowKey: (r) => r.id,
        "onUpdate:sorter": handleSorterChange,
        size: "small",
        class: "flex-1",
        flexHeight: ""
      }, null, 8, ["data", "columns", "pagination", "checkedRowKeys", "rowKey"])])], 64);
    };
  }
});
export {
  _sfc_main as default
};
