import { _ as _sfc_main$6, e as exportSnapshotAsJpgUrl, f as exportSnapshotAsZipUrl } from "./ActionCard.vue_vue_type_script_setup_true_lang-bda27d9e.js";
import { f as fadeInHeightExpandTransition, c as copy, m as message, b as githubJpgStorage, g as githubUrlToSelfUrl, e as githubZipStorage, a as snapshotStorage, h as gmOk, i as screenshotStorage, j as delay } from "./storage-00dd3e29.js";
import { d as defineComponent, n as h, p as commonLight, q as cB, v as cM, x as cE, y as c, z as useConfig, A as ref, c as computed, B as useTheme, C as provide, D as useRtl, E as useThemeClass, G as createInjectionKey, H as call, I as useFalseUntilTruthy, J as toRef, K as withDirectives, L as vShow, M as NFadeInExpandTransition, O as createId, P as useMemo, Q as inject, S as throwError, T as resolveSlotWithProps, U as NBaseIcon, V as resolveWrappedSlotWithProps, W as composite, X as createTheme, Y as scrollbarLight, Z as changeColor, _ as cNotM, $ as insideModal, a0 as insidePopover, a1 as createKey, a2 as NIconSwitchTransition, a3 as NBaseLoading, a4 as render, a5 as isBrowser, a6 as onMounted, a7 as repeat, a8 as pxfy, a9 as iconSwitchTransition, w as watchEffect, e as watch, aa as getMargin, ab as depx, ac as XScrollbar, ad as resolveSlot, ae as nextTick, a as shallowReactive, s as shallowRef, af as onUnmounted, ag as createBlock, h as createBaseVNode, ah as renderSlot, ai as normalizeStyle, aj as normalizeClass, ak as Teleport, o as openBlock, g as withCtx, b as createVNode, u as unref, f as createElementBlock, al as renderList, F as Fragment, l as toDisplayString, m as createCommentVNode, k as createTextVNode, i as withKeys, j as NButton, am as withModifiers, an as useRoute, ao as useRouter } from "./index-235f5a3e.js";
import { e as useMergedState, C as ChevronRightIcon, f as checkboxLight, g as emptyLight, h as NCheckbox, i as happensIn, V as VVirtualList, j as createTreeMate, k as flatten, l as createIndexGetter, m as NEmpty, n as NTooltip, d as NIcon, o as NEllipsis, p as findNodeByXy, c as NSpace, q as NRadio, r as NRadioGroup, N as NInput, a as NInputGroup, s as getNodeLabel, t as dayjs, v as getDevice, w as listToTree } from "./node-c1756ecf.js";
import { e as errorTry, a as errorWrap, p as parseSelector, l as lib, u as useTitle } from "./index-2bb4cdf2.js";
import "./jszip.min-9f22f6d7.js";
function createDataKey(key) {
  return typeof key === "string" ? `s-${key}` : `n-${key}`;
}
const ChevronLeftIcon = defineComponent({
  name: "ChevronLeft",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z", fill: "currentColor" })
    );
  }
});
const SwitcherIcon = defineComponent({
  name: "Switcher",
  render() {
    return h(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
      h("path", { d: "M12 8l10 8l-10 8z" })
    );
  }
});
const self$2 = (vars) => {
  const { fontWeight, textColor1, textColor2, textColorDisabled, dividerColor, fontSize } = vars;
  return {
    titleFontSize: fontSize,
    titleFontWeight: fontWeight,
    dividerColor,
    titleTextColor: textColor1,
    titleTextColorDisabled: textColorDisabled,
    fontSize,
    textColor: textColor2,
    arrowColor: textColor2,
    arrowColorDisabled: textColorDisabled,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
};
const collapseLight = {
  name: "Collapse",
  common: commonLight,
  self: self$2
};
const collapseLight$1 = collapseLight;
const style$2 = cB("collapse", "width: 100%;", [cB("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [cM("disabled", [cE("header", "cursor: not-allowed;", [cE("header-main", `
 color: var(--n-title-text-color-disabled);
 `), cB("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), cB("collapse-item", "margin-left: 32px;"), c("&:first-child", "margin-top: 0;"), c("&:first-child >", [cE("header", "padding-top: 0;")]), cM("left-arrow-placement", [cE("header", [cB("collapse-item-arrow", "margin-right: 4px;")])]), cM("right-arrow-placement", [cE("header", [cB("collapse-item-arrow", "margin-left: 4px;")])]), cE("content-wrapper", [cE("content-inner", "padding-top: 16px;"), fadeInHeightExpandTransition({
  duration: "0.15s"
})]), cM("active", [cE("header", [cM("active", [cB("collapse-item-arrow", "transform: rotate(90deg);")])])]), c("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), cE("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 cursor: pointer;
 `, [cE("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), cE("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cB("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);
const collapseProps = Object.assign(Object.assign({}, useTheme.props), {
  defaultExpandedNames: {
    type: [Array, String],
    default: null
  },
  expandedNames: [Array, String],
  arrowPlacement: {
    type: String,
    default: "left"
  },
  accordion: {
    type: Boolean,
    default: false
  },
  displayDirective: {
    type: String,
    default: "if"
  },
  onItemHeaderClick: [Function, Array],
  "onUpdate:expandedNames": [Function, Array],
  onUpdateExpandedNames: [Function, Array],
  // deprecated
  onExpandedNamesChange: {
    type: [Function, Array],
    validator: () => {
      return true;
    },
    default: void 0
  }
});
const collapseInjectionKey = createInjectionKey("n-collapse");
const NCollapse = defineComponent({
  name: "Collapse",
  props: collapseProps,
  setup(props, { slots }) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const uncontrolledExpandedNamesRef = ref(props.defaultExpandedNames);
    const controlledExpandedNamesRef = computed(() => props.expandedNames);
    const mergedExpandedNamesRef = useMergedState(controlledExpandedNamesRef, uncontrolledExpandedNamesRef);
    const themeRef = useTheme("Collapse", "-collapse", style$2, collapseLight$1, props, mergedClsPrefixRef);
    function doUpdateExpandedNames(names) {
      const { "onUpdate:expandedNames": _onUpdateExpandedNames, onUpdateExpandedNames, onExpandedNamesChange } = props;
      if (onUpdateExpandedNames) {
        call(onUpdateExpandedNames, names);
      }
      if (_onUpdateExpandedNames) {
        call(_onUpdateExpandedNames, names);
      }
      if (onExpandedNamesChange) {
        call(onExpandedNamesChange, names);
      }
      uncontrolledExpandedNamesRef.value = names;
    }
    function doItemHeaderClick(info) {
      const { onItemHeaderClick } = props;
      if (onItemHeaderClick) {
        call(onItemHeaderClick, info);
      }
    }
    function toggleItem(collapse, name, event) {
      const { accordion } = props;
      const { value: expandedNames } = mergedExpandedNamesRef;
      if (accordion) {
        if (collapse) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({ name, expanded: true, event });
        } else {
          doUpdateExpandedNames([]);
          doItemHeaderClick({ name, expanded: false, event });
        }
      } else {
        if (!Array.isArray(expandedNames)) {
          doUpdateExpandedNames([name]);
          doItemHeaderClick({ name, expanded: true, event });
        } else {
          const activeNames = expandedNames.slice();
          const index = activeNames.findIndex((activeName) => name === activeName);
          if (~index) {
            activeNames.splice(index, 1);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({ name, expanded: false, event });
          } else {
            activeNames.push(name);
            doUpdateExpandedNames(activeNames);
            doItemHeaderClick({ name, expanded: true, event });
          }
        }
      }
    }
    provide(collapseInjectionKey, {
      props,
      mergedClsPrefixRef,
      expandedNamesRef: mergedExpandedNamesRef,
      slots,
      toggleItem
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut }, self: { titleFontWeight, dividerColor, titlePadding, titleTextColor, titleTextColorDisabled, textColor, arrowColor, fontSize, titleFontSize, arrowColorDisabled, itemMargin } } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-divider-color": dividerColor,
        "--n-title-padding": titlePadding,
        "--n-title-font-size": titleFontSize,
        "--n-title-text-color": titleTextColor,
        "--n-title-text-color-disabled": titleTextColorDisabled,
        "--n-title-font-weight": titleFontWeight,
        "--n-arrow-color": arrowColor,
        "--n-arrow-color-disabled": arrowColorDisabled,
        "--n-item-margin": itemMargin
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("collapse", void 0, cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedTheme: themeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", { class: [
      `${this.mergedClsPrefix}-collapse`,
      this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`,
      this.themeClass
    ], style: this.cssVars }, this.$slots);
  }
});
const NCollapseItemContent = defineComponent({
  name: "CollapseItemContent",
  props: {
    displayDirective: {
      type: String,
      required: true
    },
    show: Boolean,
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const onceTrueRef = useFalseUntilTruthy(toRef(props, "show"));
    return {
      onceTrue: onceTrueRef
    };
  },
  render() {
    return h(NFadeInExpandTransition, null, {
      default: () => {
        const { show, displayDirective, onceTrue, clsPrefix } = this;
        const useVShow = displayDirective === "show" && onceTrue;
        const contentNode = h(
          "div",
          { class: `${clsPrefix}-collapse-item__content-wrapper` },
          h("div", { class: `${clsPrefix}-collapse-item__content-inner` }, this.$slots)
        );
        return useVShow ? withDirectives(contentNode, [[vShow, show]]) : show ? contentNode : null;
      }
    });
  }
});
const collapseItemProps = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
};
const NCollapseItem = defineComponent({
  name: "CollapseItem",
  props: collapseItemProps,
  setup(props) {
    const { mergedRtlRef } = useConfig(props);
    const randomName = createId();
    const mergedNameRef = useMemo(() => {
      var _a;
      return (_a = props.name) !== null && _a !== void 0 ? _a : randomName;
    });
    const NCollapse2 = inject(collapseInjectionKey);
    if (!NCollapse2) {
      throwError("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    }
    const { expandedNamesRef, props: collapseProps2, mergedClsPrefixRef, slots: collapseSlots } = NCollapse2;
    const collapsedRef = computed(() => {
      const { value: expandedNames } = expandedNamesRef;
      if (Array.isArray(expandedNames)) {
        const { value: name } = mergedNameRef;
        return !~expandedNames.findIndex((expandedName) => expandedName === name);
      } else if (expandedNames) {
        const { value: name } = mergedNameRef;
        return name !== expandedNames;
      }
      return true;
    });
    const rtlEnabledRef = useRtl("Collapse", mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      collapseSlots,
      randomName,
      mergedClsPrefix: mergedClsPrefixRef,
      collapsed: collapsedRef,
      mergedDisplayDirective: computed(() => {
        const { displayDirective } = props;
        if (displayDirective) {
          return displayDirective;
        } else {
          return collapseProps2.displayDirective;
        }
      }),
      arrowPlacement: computed(() => {
        return collapseProps2.arrowPlacement;
      }),
      handleClick(e) {
        if (NCollapse2 && !props.disabled) {
          NCollapse2.toggleItem(collapsedRef.value, mergedNameRef.value, e);
        }
      }
    };
  },
  render() {
    const { collapseSlots, $slots, arrowPlacement, collapsed, mergedDisplayDirective, mergedClsPrefix, disabled } = this;
    const headerNode = resolveSlotWithProps($slots.header, { collapsed }, () => [this.title]);
    const headerExtraSlot = $slots["header-extra"] || collapseSlots["header-extra"];
    const arrowSlot = $slots.arrow || collapseSlots.arrow;
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-collapse-item`,
        `${mergedClsPrefix}-collapse-item--${arrowPlacement}-arrow-placement`,
        disabled && `${mergedClsPrefix}-collapse-item--disabled`,
        !collapsed && `${mergedClsPrefix}-collapse-item--active`
      ] },
      h(
        "div",
        { class: [
          `${mergedClsPrefix}-collapse-item__header`,
          !collapsed && `${mergedClsPrefix}-collapse-item__header--active`
        ] },
        h(
          "div",
          { class: `${mergedClsPrefix}-collapse-item__header-main`, onClick: this.handleClick },
          arrowPlacement === "right" && headerNode,
          h("div", { class: `${mergedClsPrefix}-collapse-item-arrow`, key: this.rtlEnabled ? 0 : 1 }, resolveSlotWithProps(arrowSlot, { collapsed }, () => {
            var _a;
            return [
              h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                default: (_a = collapseSlots.expandIcon) !== null && _a !== void 0 ? _a : () => this.rtlEnabled ? h(ChevronLeftIcon, null) : h(ChevronRightIcon, null)
              })
            ];
          })),
          arrowPlacement === "left" && headerNode
        ),
        resolveWrappedSlotWithProps(headerExtraSlot, { collapsed }, (children) => h("div", { class: `${mergedClsPrefix}-collapse-item__header-extra`, onClick: this.handleClick }, children))
      ),
      h(NCollapseItemContent, { clsPrefix: mergedClsPrefix, displayDirective: mergedDisplayDirective, show: !collapsed }, $slots)
    );
  }
});
const sizeVariables = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
const self$1 = (vars) => {
  const { dividerColor, cardColor, modalColor, popoverColor, tableHeaderColor, tableColorStriped, textColor1, textColor2, borderRadius, fontWeightStrong, lineHeight, fontSizeSmall, fontSizeMedium, fontSizeLarge } = vars;
  return Object.assign(Object.assign({}, sizeVariables), {
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    lineHeight,
    borderRadius,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    tdColor: cardColor,
    tdColorModal: modalColor,
    tdColorPopover: popoverColor,
    tdColorStriped: composite(cardColor, tableColorStriped),
    tdColorStripedModal: composite(modalColor, tableColorStriped),
    tdColorStripedPopover: composite(popoverColor, tableColorStriped),
    thColor: composite(cardColor, tableHeaderColor),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thTextColor: textColor1,
    tdTextColor: textColor2,
    thFontWeight: fontWeightStrong
  });
};
const tableLight = {
  name: "Table",
  common: commonLight,
  self: self$1
};
const tableLight$1 = tableLight;
const self = (vars) => {
  const { borderRadiusSmall, hoverColor, pressedColor, primaryColor, textColor3, textColor2, textColorDisabled, fontSize } = vars;
  return {
    fontSize,
    lineHeight: "1.5",
    nodeHeight: "30px",
    nodeWrapperPadding: "3px 0",
    nodeBorderRadius: borderRadiusSmall,
    nodeColorHover: hoverColor,
    nodeColorPressed: pressedColor,
    nodeColorActive: changeColor(primaryColor, { alpha: 0.1 }),
    arrowColor: textColor3,
    nodeTextColor: textColor2,
    nodeTextColorDisabled: textColorDisabled,
    loadingColor: primaryColor,
    dropMarkColor: primaryColor
  };
};
const treeLight = createTheme({
  name: "Tree",
  common: commonLight,
  peers: {
    Checkbox: checkboxLight,
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self
});
const treeLight$1 = treeLight;
const style$1 = c([cB("table", `
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `, [c("th", `
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `, [c("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), c("td", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `, [c("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [c("tr", [c("&:last-child", [c("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), cM("single-line", [c("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), c("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("single-column", [c("tr", [c("&:not(:last-child)", [c("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), cM("striped", [c("tr:nth-of-type(even)", [c("td", "background-color: var(--n-td-color-striped)")])]), cNotM("bottom-bordered", [c("tr", [c("&:last-child", [c("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), insideModal(cB("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [c("th", `
 background-color: var(--n-th-color-modal);
 `), c("td", `
 background-color: var(--n-td-color-modal);
 `)])), insidePopover(cB("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [c("th", `
 background-color: var(--n-th-color-popover);
 `), c("td", `
 background-color: var(--n-td-color-popover);
 `)]))]);
const tableProps = Object.assign(Object.assign({}, useTheme.props), { bordered: {
  type: Boolean,
  default: true
}, bottomBordered: {
  type: Boolean,
  default: true
}, singleLine: {
  type: Boolean,
  default: true
}, striped: Boolean, singleColumn: Boolean, size: {
  type: String,
  default: "medium"
} });
const NTable = defineComponent({
  name: "Table",
  props: tableProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Table", "-table", style$1, tableLight$1, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Table", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { self: { borderColor, tdColor, tdColorModal, tdColorPopover, thColor, thColorModal, thColorPopover, thTextColor, tdTextColor, borderRadius, thFontWeight, lineHeight, borderColorModal, borderColorPopover, tdColorStriped, tdColorStripedModal, tdColorStripedPopover, [createKey("fontSize", size)]: fontSize, [createKey("tdPadding", size)]: tdPadding, [createKey("thPadding", size)]: thPadding }, common: { cubicBezierEaseInOut } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-td-color": tdColor,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-td-text-color": tdTextColor,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-border-radius": borderRadius,
        "--n-font-size": fontSize,
        "--n-th-color": thColor,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-popover": thColorPopover,
        "--n-th-font-weight": thFontWeight,
        "--n-th-text-color": thTextColor,
        "--n-line-height": lineHeight,
        "--n-td-padding": tdPadding,
        "--n-th-padding": thPadding,
        "--n-td-color-striped": tdColorStriped,
        "--n-td-color-striped-modal": tdColorStripedModal,
        "--n-td-color-striped-popover": tdColorStripedPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("table", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("table", { class: [
      `${mergedClsPrefix}-table`,
      this.themeClass,
      {
        [`${mergedClsPrefix}-table--rtl`]: this.rtlEnabled,
        [`${mergedClsPrefix}-table--bottom-bordered`]: this.bottomBordered,
        [`${mergedClsPrefix}-table--bordered`]: this.bordered,
        [`${mergedClsPrefix}-table--single-line`]: this.singleLine,
        [`${mergedClsPrefix}-table--single-column`]: this.singleColumn,
        [`${mergedClsPrefix}-table--striped`]: this.striped
      }
    ], style: this.cssVars }, this.$slots);
  }
});
const NTh = defineComponent({
  name: "Th",
  render() {
    return h("th", null, this.$slots);
  }
});
const NTr = defineComponent({
  name: "Tr",
  render() {
    return h("tr", null, this.$slots);
  }
});
const NTd = defineComponent({
  name: "Td",
  render() {
    return h("td", null, this.$slots);
  }
});
const NThead = defineComponent({
  name: "Thead",
  render() {
    return h("thead", null, this.$slots);
  }
});
const NTbody = defineComponent({
  name: "Tbody",
  render() {
    return h("tbody", null, this.$slots);
  }
});
const treeSelectInjectionKey = createInjectionKey("n-tree-select");
const treeInjectionKey = createInjectionKey("n-tree");
const NTreeNodeSwitcher = defineComponent({
  name: "NTreeSwitcher",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    indent: { type: Number, required: true },
    expanded: Boolean,
    selected: Boolean,
    hide: Boolean,
    loading: Boolean,
    onClick: Function,
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { renderSwitcherIconRef } = inject(treeInjectionKey, null);
    return () => {
      const { clsPrefix, expanded, hide, indent, onClick } = props;
      return h(
        "span",
        { "data-switcher": true, class: [
          `${clsPrefix}-tree-node-switcher`,
          expanded && `${clsPrefix}-tree-node-switcher--expanded`,
          hide && `${clsPrefix}-tree-node-switcher--hide`
        ], style: { width: `${indent}px` }, onClick },
        h(
          "div",
          { class: `${clsPrefix}-tree-node-switcher__icon` },
          h(NIconSwitchTransition, null, {
            default: () => {
              if (props.loading) {
                return h(NBaseLoading, { clsPrefix, key: "loading", radius: 85, strokeWidth: 20 });
              }
              const { value: renderSwitcherIcon } = renderSwitcherIconRef;
              return renderSwitcherIcon ? renderSwitcherIcon({
                expanded: props.expanded,
                selected: props.selected,
                option: props.tmNode.rawNode
              }) : h(NBaseIcon, { clsPrefix, key: "switcher" }, { default: () => h(SwitcherIcon, null) });
            }
          })
        )
      );
    };
  }
});
const NTreeNodeCheckbox = defineComponent({
  name: "NTreeNodeCheckbox",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    indent: {
      type: Number,
      required: true
    },
    right: Boolean,
    focusable: Boolean,
    disabled: Boolean,
    checked: Boolean,
    indeterminate: Boolean,
    onCheck: Function
  },
  setup(props) {
    const NTree2 = inject(treeInjectionKey);
    function doCheck(value) {
      const { onCheck } = props;
      if (onCheck) {
        onCheck(value);
      }
    }
    function handleUpdateValue(value) {
      doCheck(value);
    }
    return {
      handleUpdateValue,
      mergedTheme: NTree2.mergedThemeRef
    };
  },
  render() {
    const { clsPrefix, mergedTheme, checked, indeterminate, disabled, focusable, indent, handleUpdateValue } = this;
    return h(
      "span",
      { class: [
        `${clsPrefix}-tree-node-checkbox`,
        this.right && `${clsPrefix}-tree-node-checkbox--right`
      ], style: {
        width: `${indent}px`
      }, "data-checkbox": true },
      h(NCheckbox, { focusable, disabled, theme: mergedTheme.peers.Checkbox, themeOverrides: mergedTheme.peerOverrides.Checkbox, checked, indeterminate, onUpdateChecked: handleUpdateValue })
    );
  }
});
const NTreeNodeContent = defineComponent({
  name: "TreeNodeContent",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    disabled: Boolean,
    checked: Boolean,
    selected: Boolean,
    onClick: Function,
    onDragstart: Function,
    tmNode: {
      type: Object,
      required: true
    },
    nodeProps: Object
  },
  setup(props) {
    const { renderLabelRef, renderPrefixRef, renderSuffixRef, labelFieldRef } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inject(treeInjectionKey)
    );
    const selfRef = ref(null);
    function doClick(e) {
      const { onClick } = props;
      if (onClick)
        onClick(e);
    }
    function handleClick(e) {
      doClick(e);
    }
    return {
      selfRef,
      renderLabel: renderLabelRef,
      renderPrefix: renderPrefixRef,
      renderSuffix: renderSuffixRef,
      labelField: labelFieldRef,
      handleClick
    };
  },
  render() {
    const { clsPrefix, labelField, nodeProps, checked = false, selected = false, renderLabel, renderPrefix, renderSuffix, handleClick, onDragstart, tmNode: { rawNode, rawNode: { prefix, suffix, [labelField]: label } } } = this;
    return h(
      "span",
      Object.assign({}, nodeProps, { ref: "selfRef", class: [`${clsPrefix}-tree-node-content`, nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps.class], onClick: handleClick, draggable: onDragstart === void 0 ? void 0 : true, onDragstart }),
      renderPrefix || prefix ? h("div", { class: `${clsPrefix}-tree-node-content__prefix` }, renderPrefix ? renderPrefix({
        option: rawNode,
        selected,
        checked
      }) : render(prefix)) : null,
      h("div", { class: `${clsPrefix}-tree-node-content__text` }, renderLabel ? renderLabel({
        option: rawNode,
        selected,
        checked
      }) : render(label)),
      renderSuffix || suffix ? h("div", { class: `${clsPrefix}-tree-node-content__suffix` }, renderSuffix ? renderSuffix({
        option: rawNode,
        selected,
        checked
      }) : render(suffix)) : null
    );
  }
});
function renderDropMark({ position, offsetLevel, indent, el }) {
  const style2 = {
    position: "absolute",
    boxSizing: "border-box",
    right: 0
  };
  if (position === "inside") {
    style2.left = 0;
    style2.top = 0;
    style2.bottom = 0;
    style2.borderRadius = "inherit";
    style2.boxShadow = "inset 0 0 0 2px var(--n-drop-mark-color)";
  } else {
    const cssPosition = position === "before" ? "top" : "bottom";
    style2[cssPosition] = 0;
    style2.left = `${el.offsetLeft + 6 - offsetLevel * indent}px`;
    style2.height = "2px";
    style2.backgroundColor = "var(--n-drop-mark-color)";
    style2.transformOrigin = cssPosition;
    style2.borderRadius = "1px";
    style2.transform = position === "before" ? "translateY(-4px)" : "translateY(4px)";
  }
  return h("div", { style: style2 });
}
function defaultAllowDrop({ dropPosition, node }) {
  if (node.isLeaf === false)
    return true;
  if (node.children) {
    return true;
  }
  return dropPosition !== "inside";
}
function useMergedCheckStrategy(props) {
  return computed(() => props.leafOnly ? "child" : props.checkStrategy);
}
function isNodeDisabled(node, disabledField) {
  return !!node.rawNode[disabledField];
}
function traverse(nodes, childrenField, callback, callbackAfter) {
  nodes === null || nodes === void 0 ? void 0 : nodes.forEach((node) => {
    callback(node);
    traverse(node[childrenField], childrenField, callback, callbackAfter);
    callbackAfter(node);
  });
}
function keysWithFilter(nodes, pattern, keyField, childrenField, filter) {
  const keys = /* @__PURE__ */ new Set();
  const highlightKeySet = /* @__PURE__ */ new Set();
  const path = [];
  traverse(nodes, childrenField, (node) => {
    path.push(node);
    if (filter(pattern, node)) {
      highlightKeySet.add(node[keyField]);
      for (let i = path.length - 2; i >= 0; --i) {
        if (!keys.has(path[i][keyField])) {
          keys.add(path[i][keyField]);
        } else {
          return;
        }
      }
    }
  }, () => {
    path.pop();
  });
  return {
    expandedKeys: Array.from(keys),
    highlightKeySet
  };
}
if (isBrowser && Image) {
  const emptyImage = new Image();
  emptyImage.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
}
function filterTree(tree, filter, pattern, keyField, childrenField) {
  const visitedTailKeys = /* @__PURE__ */ new Set();
  const visitedNonTailKeys = /* @__PURE__ */ new Set();
  const highlightKeySet = /* @__PURE__ */ new Set();
  const expandedKeys = [];
  const filteredTree = [];
  const path = [];
  function visit(t) {
    t.forEach((n) => {
      path.push(n);
      if (filter(pattern, n)) {
        visitedTailKeys.add(n[keyField]);
        highlightKeySet.add(n[keyField]);
        for (let i = path.length - 2; i >= 0; --i) {
          const key = path[i][keyField];
          if (!visitedNonTailKeys.has(key)) {
            visitedNonTailKeys.add(key);
            if (visitedTailKeys.has(key)) {
              visitedTailKeys.delete(key);
            }
          } else {
            break;
          }
        }
      }
      const children = n[childrenField];
      if (children) {
        visit(children);
      }
      path.pop();
    });
  }
  visit(tree);
  function build(t, sibs) {
    t.forEach((n) => {
      const key = n[keyField];
      const isVisitedTail = visitedTailKeys.has(key);
      const isVisitedNonTail = visitedNonTailKeys.has(key);
      if (!isVisitedTail && !isVisitedNonTail)
        return;
      const children = n[childrenField];
      if (children) {
        if (isVisitedTail) {
          sibs.push(n);
        } else {
          expandedKeys.push(key);
          const clonedNode = Object.assign(Object.assign({}, n), { [childrenField]: [] });
          sibs.push(clonedNode);
          build(children, clonedNode[childrenField]);
        }
      } else {
        sibs.push(n);
      }
    });
  }
  build(tree, filteredTree);
  return {
    filteredTree,
    highlightKeySet,
    expandedKeys
  };
}
const TreeNode = defineComponent({
  name: "TreeNode",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const NTree2 = inject(treeInjectionKey);
    const { droppingNodeParentRef, droppingMouseNodeRef, draggingNodeRef, droppingPositionRef, droppingOffsetLevelRef, nodePropsRef, indentRef, blockLineRef, checkboxPlacementRef, checkOnClickRef, disabledFieldRef, showLineRef } = NTree2;
    const checkboxDisabledRef = useMemo(() => !!props.tmNode.rawNode.checkboxDisabled);
    const nodeIsDisabledRef = useMemo(() => {
      return isNodeDisabled(props.tmNode, disabledFieldRef.value);
    });
    const disabledRef = useMemo(() => NTree2.disabledRef.value || nodeIsDisabledRef.value);
    const resolvedNodePropsRef = computed(() => {
      const { value: nodeProps } = nodePropsRef;
      if (!nodeProps)
        return void 0;
      return nodeProps({ option: props.tmNode.rawNode });
    });
    const contentInstRef = ref(null);
    const contentElRef = { value: null };
    onMounted(() => {
      contentElRef.value = contentInstRef.value.$el;
    });
    function handleSwitcherClick() {
      const { tmNode } = props;
      if (!tmNode.isLeaf && !tmNode.shallowLoaded) {
        if (!NTree2.loadingKeysRef.value.has(tmNode.key)) {
          NTree2.loadingKeysRef.value.add(tmNode.key);
        } else {
          return;
        }
        const { onLoadRef: { value: onLoad } } = NTree2;
        if (onLoad) {
          void onLoad(tmNode.rawNode).then((value) => {
            if (value !== false) {
              NTree2.handleSwitcherClick(tmNode);
            }
          }).finally(() => {
            NTree2.loadingKeysRef.value.delete(tmNode.key);
          });
        }
      } else {
        NTree2.handleSwitcherClick(tmNode);
      }
    }
    const selectableRef = useMemo(() => !nodeIsDisabledRef.value && NTree2.selectableRef.value && (NTree2.internalTreeSelect ? NTree2.mergedCheckStrategyRef.value !== "child" || NTree2.multipleRef.value && NTree2.cascadeRef.value || props.tmNode.isLeaf : true));
    const checkableRef = useMemo(() => NTree2.checkableRef.value && (NTree2.cascadeRef.value || NTree2.mergedCheckStrategyRef.value !== "child" || props.tmNode.isLeaf));
    const checkedRef = useMemo(() => NTree2.displayedCheckedKeysRef.value.includes(props.tmNode.key));
    const mergedCheckOnClickRef = useMemo(() => {
      const { value: checkable } = checkableRef;
      if (!checkable)
        return false;
      const { value: checkOnClick } = checkOnClickRef;
      const { tmNode } = props;
      if (typeof checkOnClick === "boolean") {
        return !tmNode.disabled && checkOnClick;
      }
      return checkOnClick(props.tmNode.rawNode);
    });
    function _handleClick(e) {
      const { value: expandOnClick } = NTree2.expandOnClickRef;
      const { value: selectable } = selectableRef;
      const { value: mergedCheckOnClick } = mergedCheckOnClickRef;
      if (!selectable && !expandOnClick && !mergedCheckOnClick)
        return;
      if (happensIn(e, "checkbox") || happensIn(e, "switcher"))
        return;
      const { tmNode } = props;
      if (selectable) {
        NTree2.handleSelect(tmNode);
      }
      if (expandOnClick && !tmNode.isLeaf) {
        handleSwitcherClick();
      }
      if (mergedCheckOnClick) {
        handleCheck(!checkedRef.value);
      }
    }
    function handleContentClick(e) {
      var _a, _b;
      if (blockLineRef.value)
        return;
      if (!disabledRef.value)
        _handleClick(e);
      (_b = (_a = resolvedNodePropsRef.value) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    }
    function handleLineClick(e) {
      var _a, _b;
      if (!blockLineRef.value)
        return;
      if (!disabledRef.value) {
        _handleClick(e);
      }
      (_b = (_a = resolvedNodePropsRef.value) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
    }
    function handleCheck(checked) {
      NTree2.handleCheck(props.tmNode, checked);
    }
    function handleDragStart(e) {
      NTree2.handleDragStart({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragEnter(e) {
      if (e.currentTarget !== e.target) {
        return;
      }
      NTree2.handleDragEnter({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragOver(e) {
      e.preventDefault();
      NTree2.handleDragOver({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragEnd(e) {
      NTree2.handleDragEnd({
        event: e,
        node: props.tmNode
      });
    }
    function handleDragLeave(e) {
      if (e.currentTarget !== e.target) {
        return;
      }
      NTree2.handleDragLeave({
        event: e,
        node: props.tmNode
      });
    }
    function handleDrop(e) {
      e.preventDefault();
      if (droppingPositionRef.value !== null) {
        NTree2.handleDrop({
          event: e,
          node: props.tmNode,
          dropPosition: droppingPositionRef.value
        });
      }
    }
    const indentNodes = computed(() => {
      const { clsPrefix } = props;
      const { value: indent } = indentRef;
      if (showLineRef.value) {
        const indentNodes2 = [];
        let cursor = props.tmNode.parent;
        while (cursor) {
          if (cursor.isLastChild) {
            indentNodes2.push(h(
              "div",
              { class: `${clsPrefix}-tree-node-indent` },
              h("div", { style: { width: `${indent}px` } })
            ));
          } else {
            indentNodes2.push(h(
              "div",
              { class: [
                `${clsPrefix}-tree-node-indent`,
                `${clsPrefix}-tree-node-indent--show-line`
              ] },
              h("div", { style: { width: `${indent}px` } })
            ));
          }
          cursor = cursor.parent;
        }
        return indentNodes2.reverse();
      } else {
        return repeat(props.tmNode.level, h(
          "div",
          { class: `${props.clsPrefix}-tree-node-indent` },
          h("div", { style: { width: `${indent}px` } })
        ));
      }
    });
    return {
      showDropMark: useMemo(() => {
        const { value: draggingNode } = draggingNodeRef;
        if (!draggingNode)
          return;
        const { value: droppingPosition } = droppingPositionRef;
        if (!droppingPosition)
          return;
        const { value: droppingMouseNode } = droppingMouseNodeRef;
        if (!droppingMouseNode) {
          return;
        }
        const { tmNode } = props;
        if (tmNode.key === droppingMouseNode.key)
          return true;
        return false;
      }),
      showDropMarkAsParent: useMemo(() => {
        const { value: droppingNodeParent } = droppingNodeParentRef;
        if (!droppingNodeParent)
          return false;
        const { tmNode } = props;
        const { value: droppingPosition } = droppingPositionRef;
        if (droppingPosition === "before" || droppingPosition === "after") {
          return droppingNodeParent.key === tmNode.key;
        }
        return false;
      }),
      pending: useMemo(() => NTree2.pendingNodeKeyRef.value === props.tmNode.key),
      loading: useMemo(() => NTree2.loadingKeysRef.value.has(props.tmNode.key)),
      highlight: useMemo(() => {
        var _a;
        return (_a = NTree2.highlightKeySetRef.value) === null || _a === void 0 ? void 0 : _a.has(props.tmNode.key);
      }),
      checked: checkedRef,
      indeterminate: useMemo(() => NTree2.displayedIndeterminateKeysRef.value.includes(props.tmNode.key)),
      selected: useMemo(() => NTree2.mergedSelectedKeysRef.value.includes(props.tmNode.key)),
      expanded: useMemo(() => NTree2.mergedExpandedKeysRef.value.includes(props.tmNode.key)),
      disabled: disabledRef,
      checkable: checkableRef,
      mergedCheckOnClick: mergedCheckOnClickRef,
      checkboxDisabled: checkboxDisabledRef,
      selectable: selectableRef,
      expandOnClick: NTree2.expandOnClickRef,
      internalScrollable: NTree2.internalScrollableRef,
      draggable: NTree2.draggableRef,
      blockLine: blockLineRef,
      nodeProps: resolvedNodePropsRef,
      checkboxFocusable: NTree2.internalCheckboxFocusableRef,
      droppingPosition: droppingPositionRef,
      droppingOffsetLevel: droppingOffsetLevelRef,
      indent: indentRef,
      checkboxPlacement: checkboxPlacementRef,
      showLine: showLineRef,
      contentInstRef,
      contentElRef,
      indentNodes,
      handleCheck,
      handleDrop,
      handleDragStart,
      handleDragEnter,
      handleDragOver,
      handleDragEnd,
      handleDragLeave,
      handleLineClick,
      handleContentClick,
      handleSwitcherClick
    };
  },
  render() {
    const { tmNode, clsPrefix, checkable, expandOnClick, selectable, selected, checked, highlight, draggable, blockLine, indent, indentNodes, disabled, pending, internalScrollable, nodeProps, checkboxPlacement } = this;
    const dragEventHandlers = draggable && !disabled ? {
      onDragenter: this.handleDragEnter,
      onDragleave: this.handleDragLeave,
      onDragend: this.handleDragEnd,
      onDrop: this.handleDrop,
      onDragover: this.handleDragOver
    } : void 0;
    const dataKey = internalScrollable ? createDataKey(tmNode.key) : void 0;
    const checkboxOnRight = checkboxPlacement === "right";
    const checkboxNode = checkable ? h(NTreeNodeCheckbox, { indent, right: checkboxOnRight, focusable: this.checkboxFocusable, disabled: disabled || this.checkboxDisabled, clsPrefix, checked: this.checked, indeterminate: this.indeterminate, onCheck: this.handleCheck }) : null;
    return h(
      "div",
      Object.assign({ class: `${clsPrefix}-tree-node-wrapper` }, dragEventHandlers),
      h(
        "div",
        Object.assign({}, blockLine ? nodeProps : void 0, { class: [
          `${clsPrefix}-tree-node`,
          {
            [`${clsPrefix}-tree-node--selected`]: selected,
            [`${clsPrefix}-tree-node--checkable`]: checkable,
            [`${clsPrefix}-tree-node--highlight`]: highlight,
            [`${clsPrefix}-tree-node--pending`]: pending,
            [`${clsPrefix}-tree-node--disabled`]: disabled,
            [`${clsPrefix}-tree-node--selectable`]: selectable,
            [`${clsPrefix}-tree-node--clickable`]: selectable || expandOnClick || this.mergedCheckOnClick
          },
          nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps.class
        ], "data-key": dataKey, draggable: draggable && blockLine, onClick: this.handleLineClick, onDragstart: draggable && blockLine && !disabled ? this.handleDragStart : void 0 }),
        indentNodes,
        tmNode.isLeaf && this.showLine ? h(
          "div",
          { class: [
            `${clsPrefix}-tree-node-indent`,
            `${clsPrefix}-tree-node-indent--show-line`,
            tmNode.isLeaf && `${clsPrefix}-tree-node-indent--is-leaf`,
            tmNode.isLastChild && `${clsPrefix}-tree-node-indent--last-child`
          ] },
          h("div", { style: { width: `${indent}px` } })
        ) : h(NTreeNodeSwitcher, { clsPrefix, expanded: this.expanded, selected, loading: this.loading, hide: tmNode.isLeaf, tmNode: this.tmNode, indent, onClick: this.handleSwitcherClick }),
        !checkboxOnRight ? checkboxNode : null,
        h(NTreeNodeContent, { ref: "contentInstRef", clsPrefix, checked, selected, onClick: this.handleContentClick, nodeProps: blockLine ? void 0 : nodeProps, onDragstart: draggable && !blockLine && !disabled ? this.handleDragStart : void 0, tmNode }),
        draggable ? this.showDropMark ? renderDropMark({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          el: this.contentElRef.value,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          position: this.droppingPosition,
          offsetLevel: this.droppingOffsetLevel,
          indent
        }) : this.showDropMarkAsParent ? renderDropMark({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          el: this.contentElRef.value,
          position: "inside",
          offsetLevel: this.droppingOffsetLevel,
          indent
        }) : null : null,
        checkboxOnRight ? checkboxNode : null
      )
    );
  }
});
const NTreeNode = TreeNode;
function useKeyboard({ props, fNodesRef, mergedExpandedKeysRef, mergedSelectedKeysRef, handleSelect, handleSwitcherClick }) {
  const { value: mergedSelectedKeys } = mergedSelectedKeysRef;
  const treeSelectInjection = inject(treeSelectInjectionKey, null);
  const pendingNodeKeyRef = treeSelectInjection ? treeSelectInjection.pendingNodeKeyRef : ref(mergedSelectedKeys.length ? mergedSelectedKeys[mergedSelectedKeys.length - 1] : null);
  function handleKeydown(e) {
    if (!props.keyboard)
      return;
    const { value: pendingNodeKey } = pendingNodeKeyRef;
    if (pendingNodeKey === null) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
      }
      if (["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        if (pendingNodeKey === null) {
          const { value: fNodes } = fNodesRef;
          let fIndex = 0;
          while (fIndex < fNodes.length) {
            if (!fNodes[fIndex].disabled) {
              pendingNodeKeyRef.value = fNodes[fIndex].key;
              break;
            }
            fIndex += 1;
          }
        }
      }
    } else {
      const { value: fNodes } = fNodesRef;
      let fIndex = fNodes.findIndex((tmNode) => tmNode.key === pendingNodeKey);
      if (!~fIndex)
        return;
      if (e.key === "Enter") {
        handleSelect(fNodes[fIndex]);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        fIndex += 1;
        while (fIndex < fNodes.length) {
          if (!fNodes[fIndex].disabled) {
            pendingNodeKeyRef.value = fNodes[fIndex].key;
            break;
          }
          fIndex += 1;
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        fIndex -= 1;
        while (fIndex >= 0) {
          if (!fNodes[fIndex].disabled) {
            pendingNodeKeyRef.value = fNodes[fIndex].key;
            break;
          }
          fIndex -= 1;
        }
      } else if (e.key === "ArrowLeft") {
        const pendingNode = fNodes[fIndex];
        if (pendingNode.isLeaf || !mergedExpandedKeysRef.value.includes(pendingNodeKey)) {
          const parentTmNode = pendingNode.getParent();
          if (parentTmNode) {
            pendingNodeKeyRef.value = parentTmNode.key;
          }
        } else {
          handleSwitcherClick(pendingNode);
        }
      } else if (e.key === "ArrowRight") {
        const pendingNode = fNodes[fIndex];
        if (pendingNode.isLeaf)
          return;
        if (!mergedExpandedKeysRef.value.includes(pendingNodeKey)) {
          handleSwitcherClick(pendingNode);
        } else {
          fIndex += 1;
          while (fIndex < fNodes.length) {
            if (!fNodes[fIndex].disabled) {
              pendingNodeKeyRef.value = fNodes[fIndex].key;
              break;
            }
            fIndex += 1;
          }
        }
      }
    }
  }
  return {
    pendingNodeKeyRef,
    handleKeydown
  };
}
const MotionWrapper = defineComponent({
  name: "TreeMotionWrapper",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    height: Number,
    nodes: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    onAfterEnter: {
      type: Function,
      required: true
    }
  },
  render() {
    const { clsPrefix } = this;
    return h(NFadeInExpandTransition, { onAfterEnter: this.onAfterEnter, appear: true, reverse: this.mode === "collapse" }, {
      default: () => h("div", { class: [
        `${clsPrefix}-tree-motion-wrapper`,
        `${clsPrefix}-tree-motion-wrapper--${this.mode}`
      ], style: {
        height: pxfy(this.height)
      } }, this.nodes.map((node) => h(NTreeNode, { clsPrefix, tmNode: node })))
    });
  }
});
const iconSwitchTransitionNode = iconSwitchTransition();
const style = cB("tree", `
 font-size: var(--n-font-size);
 outline: none;
`, [c("ul, li", `
 margin: 0;
 padding: 0;
 list-style: none;
 `), c(">", [cB("tree-node", [c("&:first-child", "margin-top: 0;")])]), cB("tree-motion-wrapper", [cM("expand", [fadeInHeightExpandTransition({
  duration: "0.2s"
})]), cM("collapse", [fadeInHeightExpandTransition({
  duration: "0.2s",
  reverse: true
})])]), cB("tree-node-wrapper", `
 box-sizing: border-box;
 padding: var(--n-node-wrapper-padding);
 `), cB("tree-node", `
 transform: translate3d(0,0,0);
 position: relative;
 display: flex;
 border-radius: var(--n-node-border-radius);
 transition: background-color .3s var(--n-bezier);
 `, [cM("highlight", [cB("tree-node-content", [cE("text", "border-bottom-color: var(--n-node-text-color-disabled);")])]), cM("disabled", [cB("tree-node-content", `
 color: var(--n-node-text-color-disabled);
 cursor: not-allowed;
 `)]), cNotM("disabled", [cM("clickable", [cB("tree-node-content", `
 cursor: pointer;
 `)])])]), cM("block-node", [cB("tree-node-content", `
 flex: 1;
 min-width: 0;
 `)]), cNotM("block-line", [cB("tree-node", [cNotM("disabled", [cB("tree-node-content", [c("&:hover", "background: var(--n-node-color-hover);")]), cM("selectable", [cB("tree-node-content", [c("&:active", "background: var(--n-node-color-pressed);")])]), cM("pending", [cB("tree-node-content", `
 background: var(--n-node-color-hover);
 `)]), cM("selected", [cB("tree-node-content", "background: var(--n-node-color-active);")])])])]), cM("block-line", [cB("tree-node", [cNotM("disabled", [c("&:hover", "background: var(--n-node-color-hover);"), cM("pending", `
 background: var(--n-node-color-hover);
 `), cM("selectable", [cNotM("selected", [c("&:active", "background: var(--n-node-color-pressed);")])]), cM("selected", "background: var(--n-node-color-active);")]), cM("disabled", `
 cursor: not-allowed;
 `)])]), cB("tree-node-indent", `
 flex-grow: 0;
 flex-shrink: 0;
 `, [cM("show-line", "position: relative", [c("&::before", `
 position: absolute;
 left: 50%;
 border-left: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 transform: translate(-50%);
 content: "";
 top: var(--n-line-offset-top);
 bottom: var(--n-line-offset-bottom);
 `), cM("last-child", [c("&::before", `
 bottom: 50%;
 `)]), cM("is-leaf", [c("&::after", `
 position: absolute;
 content: "";
 left: calc(50% + 0.5px);
 right: 0;
 bottom: 50%;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-border-color);
 `)])]), cNotM("show-line", "height: 0;")]), cB("tree-node-switcher", `
 cursor: pointer;
 display: inline-flex;
 flex-shrink: 0;
 height: var(--n-node-content-height);
 align-items: center;
 justify-content: center;
 transition: transform .15s var(--n-bezier);
 vertical-align: bottom;
 `, [cE("icon", `
 position: relative;
 height: 14px;
 width: 14px;
 display: flex;
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 font-size: 14px;
 `, [cB("icon", [iconSwitchTransitionNode]), cB("base-loading", `
 color: var(--n-loading-color);
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [iconSwitchTransitionNode]), cB("base-icon", [iconSwitchTransitionNode])]), cM("hide", "visibility: hidden;"), cM("expanded", "transform: rotate(90deg);")]), cB("tree-node-checkbox", `
 display: inline-flex;
 height: var(--n-node-content-height);
 vertical-align: bottom;
 align-items: center;
 justify-content: center;
 `), cB("tree-node-content", `
 user-select: none;
 position: relative;
 display: inline-flex;
 align-items: center;
 min-height: var(--n-node-content-height);
 box-sizing: border-box;
 line-height: var(--n-line-height);
 vertical-align: bottom;
 padding: 0 6px 0 4px;
 cursor: default;
 border-radius: var(--n-node-border-radius);
 color: var(--n-node-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [c("&:last-child", "margin-bottom: 0;"), cE("prefix", `
 display: inline-flex;
 margin-right: 8px;
 `), cE("text", `
 border-bottom: 1px solid #0000;
 transition: border-color .3s var(--n-bezier);
 flex-grow: 1;
 max-width: 100%;
 `), cE("suffix", `
 display: inline-flex;
 `)]), cE("empty", "margin: auto;")]);
var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function createTreeMateOptions(keyField, childrenField, disabledField, getChildren) {
  const settledGetChildren = getChildren || ((node) => {
    return node[childrenField];
  });
  return {
    getIsGroup() {
      return false;
    },
    getKey(node) {
      return node[keyField];
    },
    getChildren: settledGetChildren,
    getDisabled(node) {
      return !!(node[disabledField] || node.checkboxDisabled);
    }
  };
}
const treeSharedProps = {
  allowCheckingNotLoaded: Boolean,
  filter: Function,
  defaultExpandAll: Boolean,
  expandedKeys: Array,
  keyField: {
    type: String,
    default: "key"
  },
  labelField: {
    type: String,
    default: "label"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  disabledField: {
    type: String,
    default: "disabled"
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  indeterminateKeys: Array,
  renderSwitcherIcon: Function,
  onUpdateIndeterminateKeys: [Function, Array],
  "onUpdate:indeterminateKeys": [Function, Array],
  onUpdateExpandedKeys: [Function, Array],
  "onUpdate:expandedKeys": [Function, Array]
};
const treeProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), { accordion: Boolean, showIrrelevantNodes: { type: Boolean, default: true }, data: {
  type: Array,
  default: () => []
}, expandOnDragenter: {
  type: Boolean,
  default: true
}, expandOnClick: Boolean, checkOnClick: {
  type: [Boolean, Function],
  default: false
}, cancelable: {
  type: Boolean,
  default: true
}, checkable: Boolean, draggable: Boolean, blockNode: Boolean, blockLine: Boolean, showLine: Boolean, disabled: Boolean, checkedKeys: Array, defaultCheckedKeys: {
  type: Array,
  default: () => []
}, selectedKeys: Array, defaultSelectedKeys: {
  type: Array,
  default: () => []
}, multiple: Boolean, pattern: {
  type: String,
  default: ""
}, onLoad: Function, cascade: Boolean, selectable: {
  type: Boolean,
  default: true
}, scrollbarProps: Object, indent: {
  type: Number,
  default: 24
}, allowDrop: {
  type: Function,
  default: defaultAllowDrop
}, animated: {
  type: Boolean,
  default: true
}, checkboxPlacement: {
  type: String,
  default: "left"
}, virtualScroll: Boolean, watchProps: Array, renderLabel: Function, renderPrefix: Function, renderSuffix: Function, nodeProps: Function, keyboard: {
  type: Boolean,
  default: true
}, getChildren: Function, onDragenter: [Function, Array], onDragleave: [Function, Array], onDragend: [Function, Array], onDragstart: [Function, Array], onDragover: [Function, Array], onDrop: [Function, Array], onUpdateCheckedKeys: [Function, Array], "onUpdate:checkedKeys": [Function, Array], onUpdateSelectedKeys: [Function, Array], "onUpdate:selectedKeys": [Function, Array] }), treeSharedProps), {
  // internal props for tree-select
  internalTreeSelect: Boolean,
  internalScrollable: Boolean,
  internalScrollablePadding: String,
  // use it to display
  internalRenderEmpty: Function,
  internalHighlightKeySet: Object,
  internalUnifySelectCheck: Boolean,
  internalCheckboxFocusable: {
    type: Boolean,
    default: true
  },
  internalFocusable: {
    // Make tree-select take over keyboard operations
    type: Boolean,
    default: true
  },
  checkStrategy: {
    type: String,
    default: "all"
  },
  /**
   * @deprecated
   */
  leafOnly: Boolean
});
const NTree = defineComponent({
  name: "Tree",
  props: treeProps,
  setup(props) {
    const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const rtlEnabledRef = useRtl("Tree", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("Tree", "-tree", style, treeLight$1, props, mergedClsPrefixRef);
    const selfElRef = ref(null);
    const scrollbarInstRef = ref(null);
    const virtualListInstRef = ref(null);
    function getScrollContainer() {
      var _a;
      return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.listElRef;
    }
    function getScrollContent() {
      var _a;
      return (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.itemsElRef;
    }
    const mergedFilterRef = computed(() => {
      const { filter } = props;
      if (filter)
        return filter;
      const { labelField } = props;
      return (pattern, node) => {
        if (!pattern.length)
          return true;
        const label = node[labelField];
        if (typeof label === "string") {
          return label.toLowerCase().includes(pattern.toLowerCase());
        }
        return false;
      };
    });
    const filteredTreeInfoRef = computed(() => {
      const { pattern } = props;
      if (!pattern) {
        return {
          filteredTree: props.data,
          highlightKeySet: null,
          expandedKeys: void 0
        };
      }
      if (!pattern.length || !mergedFilterRef.value) {
        return {
          filteredTree: props.data,
          highlightKeySet: null,
          expandedKeys: void 0
        };
      }
      return filterTree(props.data, mergedFilterRef.value, pattern, props.keyField, props.childrenField);
    });
    const displayTreeMateRef = computed(() => createTreeMate(props.showIrrelevantNodes ? props.data : filteredTreeInfoRef.value.filteredTree, createTreeMateOptions(props.keyField, props.childrenField, props.disabledField, props.getChildren)));
    const treeSelectInjection = inject(treeSelectInjectionKey, null);
    const dataTreeMateRef = props.internalTreeSelect ? treeSelectInjection.dataTreeMate : displayTreeMateRef;
    const { watchProps } = props;
    const uncontrolledCheckedKeysRef = ref([]);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultCheckedKeys")) {
      watchEffect(() => {
        uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
      });
    } else {
      uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
    }
    const controlledCheckedKeysRef = toRef(props, "checkedKeys");
    const mergedCheckedKeysRef = useMergedState(controlledCheckedKeysRef, uncontrolledCheckedKeysRef);
    const checkedStatusRef = computed(() => {
      const value = dataTreeMateRef.value.getCheckedKeys(mergedCheckedKeysRef.value, {
        cascade: props.cascade,
        allowNotLoaded: props.allowCheckingNotLoaded
      });
      return value;
    });
    const mergedCheckStrategyRef = useMergedCheckStrategy(props);
    const displayedCheckedKeysRef = computed(() => {
      return checkedStatusRef.value.checkedKeys;
    });
    const displayedIndeterminateKeysRef = computed(() => {
      const { indeterminateKeys } = props;
      if (indeterminateKeys !== void 0)
        return indeterminateKeys;
      return checkedStatusRef.value.indeterminateKeys;
    });
    const uncontrolledSelectedKeysRef = ref([]);
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultSelectedKeys")) {
      watchEffect(() => {
        uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
      });
    } else {
      uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
    }
    const controlledSelectedKeysRef = toRef(props, "selectedKeys");
    const mergedSelectedKeysRef = useMergedState(controlledSelectedKeysRef, uncontrolledSelectedKeysRef);
    const uncontrolledExpandedKeysRef = ref([]);
    const initUncontrolledExpandedKeys = (keys) => {
      uncontrolledExpandedKeysRef.value = props.defaultExpandAll ? dataTreeMateRef.value.getNonLeafKeys() : keys === void 0 ? props.defaultExpandedKeys : keys;
    };
    if (watchProps === null || watchProps === void 0 ? void 0 : watchProps.includes("defaultExpandedKeys")) {
      watchEffect(() => {
        initUncontrolledExpandedKeys(void 0);
      });
    } else {
      watchEffect(() => {
        initUncontrolledExpandedKeys(props.defaultExpandedKeys);
      });
    }
    const controlledExpandedKeysRef = toRef(props, "expandedKeys");
    const mergedExpandedKeysRef = useMergedState(controlledExpandedKeysRef, uncontrolledExpandedKeysRef);
    const fNodesRef = computed(() => displayTreeMateRef.value.getFlattenedNodes(mergedExpandedKeysRef.value));
    const { pendingNodeKeyRef, handleKeydown } = useKeyboard({
      props,
      mergedSelectedKeysRef,
      fNodesRef,
      mergedExpandedKeysRef,
      handleSelect,
      handleSwitcherClick
    });
    let expandTimerId = null;
    let nodeKeyToBeExpanded = null;
    const uncontrolledHighlightKeySetRef = ref(/* @__PURE__ */ new Set());
    const controlledHighlightKeySetRef = computed(() => {
      return props.internalHighlightKeySet || filteredTreeInfoRef.value.highlightKeySet;
    });
    const mergedHighlightKeySetRef = useMergedState(controlledHighlightKeySetRef, uncontrolledHighlightKeySetRef);
    const loadingKeysRef = ref(/* @__PURE__ */ new Set());
    const expandedNonLoadingKeysRef = computed(() => {
      return mergedExpandedKeysRef.value.filter((key) => !loadingKeysRef.value.has(key));
    });
    let dragStartX = 0;
    const draggingNodeRef = ref(null);
    const droppingNodeRef = ref(null);
    const droppingMouseNodeRef = ref(null);
    const droppingPositionRef = ref(null);
    const droppingOffsetLevelRef = ref(0);
    const droppingNodeParentRef = computed(() => {
      const { value: droppingNode } = droppingNodeRef;
      if (!droppingNode)
        return null;
      return droppingNode.parent;
    });
    watch(toRef(props, "data"), () => {
      loadingKeysRef.value.clear();
      pendingNodeKeyRef.value = null;
      resetDndState();
    }, {
      deep: false
    });
    let expandAnimationDisabled = false;
    const disableExpandAnimationForOneTick = () => {
      expandAnimationDisabled = true;
      void nextTick(() => {
        expandAnimationDisabled = false;
      });
    };
    let memoizedExpandedKeys;
    watch(toRef(props, "pattern"), (value, oldValue) => {
      if (props.showIrrelevantNodes) {
        memoizedExpandedKeys = void 0;
        if (value) {
          const { expandedKeys: expandedKeysAfterChange, highlightKeySet } = keysWithFilter(props.data, props.pattern, props.keyField, props.childrenField, mergedFilterRef.value);
          uncontrolledHighlightKeySetRef.value = highlightKeySet;
          disableExpandAnimationForOneTick();
          doUpdateExpandedKeys(expandedKeysAfterChange, getOptionsByKeys(expandedKeysAfterChange), { node: null, action: "filter" });
        } else {
          uncontrolledHighlightKeySetRef.value = /* @__PURE__ */ new Set();
        }
      } else {
        if (!value.length) {
          if (memoizedExpandedKeys !== void 0) {
            disableExpandAnimationForOneTick();
            doUpdateExpandedKeys(memoizedExpandedKeys, getOptionsByKeys(memoizedExpandedKeys), { node: null, action: "filter" });
          }
        } else {
          if (!oldValue.length) {
            memoizedExpandedKeys = mergedExpandedKeysRef.value;
          }
          const { expandedKeys } = filteredTreeInfoRef.value;
          if (expandedKeys !== void 0) {
            disableExpandAnimationForOneTick();
            doUpdateExpandedKeys(expandedKeys, getOptionsByKeys(expandedKeys), {
              node: null,
              action: "filter"
            });
          }
        }
      }
    });
    function triggerLoading(node) {
      return __awaiter(this, void 0, void 0, function* () {
        const { onLoad } = props;
        if (!onLoad) {
          yield Promise.resolve();
          return;
        }
        const { value: loadingKeys } = loadingKeysRef;
        if (!loadingKeys.has(node.key)) {
          loadingKeys.add(node.key);
          try {
            const loadResult = yield onLoad(node.rawNode);
            if (loadResult === false) {
              resetDragExpandState();
            }
          } catch (loadError) {
            console.error(loadError);
            resetDragExpandState();
          }
          loadingKeys.delete(node.key);
        }
      });
    }
    watchEffect(() => {
      var _a;
      const { value: displayTreeMate } = displayTreeMateRef;
      if (!displayTreeMate)
        return;
      const { getNode } = displayTreeMate;
      (_a = mergedExpandedKeysRef.value) === null || _a === void 0 ? void 0 : _a.forEach((key) => {
        const node = getNode(key);
        if (node && !node.shallowLoaded) {
          void triggerLoading(node);
        }
      });
    });
    const aipRef = ref(false);
    const afNodesRef = ref([]);
    watch(expandedNonLoadingKeysRef, (value, prevValue) => {
      if (!props.animated || expandAnimationDisabled) {
        void nextTick(syncScrollbar);
        return;
      }
      const nodeHeight = depx(themeRef.value.self.nodeHeight);
      const prevVSet = new Set(prevValue);
      let addedKey = null;
      let removedKey = null;
      for (const expandedKey of value) {
        if (!prevVSet.has(expandedKey)) {
          if (addedKey !== null)
            return;
          addedKey = expandedKey;
        }
      }
      const currentVSet = new Set(value);
      for (const expandedKey of prevValue) {
        if (!currentVSet.has(expandedKey)) {
          if (removedKey !== null)
            return;
          removedKey = expandedKey;
        }
      }
      if (addedKey === null && removedKey === null) {
        return;
      }
      const { virtualScroll } = props;
      const viewportHeight = (virtualScroll ? virtualListInstRef.value.listElRef : selfElRef.value).offsetHeight;
      const viewportItemCount = Math.ceil(viewportHeight / nodeHeight) + 1;
      let baseExpandedKeys;
      if (addedKey !== null) {
        baseExpandedKeys = prevValue;
      }
      if (removedKey !== null) {
        if (baseExpandedKeys === void 0) {
          baseExpandedKeys = value;
        } else {
          baseExpandedKeys = baseExpandedKeys.filter((key) => key !== removedKey);
        }
      }
      aipRef.value = true;
      afNodesRef.value = displayTreeMateRef.value.getFlattenedNodes(baseExpandedKeys);
      if (addedKey !== null) {
        const expandedNodeIndex = afNodesRef.value.findIndex((node) => node.key === addedKey);
        if (~expandedNodeIndex) {
          const children = (
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            afNodesRef.value[expandedNodeIndex].children
          );
          if (children) {
            const expandedChildren = flatten(children, value);
            afNodesRef.value.splice(expandedNodeIndex + 1, 0, {
              __motion: true,
              mode: "expand",
              height: virtualScroll ? expandedChildren.length * nodeHeight : void 0,
              nodes: virtualScroll ? expandedChildren.slice(0, viewportItemCount) : expandedChildren
            });
          }
        }
      }
      if (removedKey !== null) {
        const collapsedNodeIndex = afNodesRef.value.findIndex((node) => node.key === removedKey);
        if (~collapsedNodeIndex) {
          const collapsedNodeChildren = afNodesRef.value[collapsedNodeIndex].children;
          if (!collapsedNodeChildren)
            return;
          aipRef.value = true;
          const collapsedChildren = flatten(collapsedNodeChildren, value);
          afNodesRef.value.splice(collapsedNodeIndex + 1, 0, {
            __motion: true,
            mode: "collapse",
            height: virtualScroll ? collapsedChildren.length * nodeHeight : void 0,
            nodes: virtualScroll ? collapsedChildren.slice(0, viewportItemCount) : collapsedChildren
          });
        }
      }
    });
    const getFIndexRef = computed(() => {
      return createIndexGetter(fNodesRef.value);
    });
    const mergedFNodesRef = computed(() => {
      if (aipRef.value)
        return afNodesRef.value;
      else
        return fNodesRef.value;
    });
    function syncScrollbar() {
      const { value: scrollbarInst } = scrollbarInstRef;
      if (scrollbarInst)
        scrollbarInst.sync();
    }
    function handleAfterEnter() {
      aipRef.value = false;
      if (props.virtualScroll) {
        void nextTick(syncScrollbar);
      }
    }
    function getOptionsByKeys(keys) {
      const { getNode } = dataTreeMateRef.value;
      return keys.map((key) => {
        var _a;
        return ((_a = getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode) || null;
      });
    }
    function doUpdateExpandedKeys(value, option, meta) {
      const { "onUpdate:expandedKeys": _onUpdateExpandedKeys, onUpdateExpandedKeys } = props;
      uncontrolledExpandedKeysRef.value = value;
      if (_onUpdateExpandedKeys) {
        call(_onUpdateExpandedKeys, value, option, meta);
      }
      if (onUpdateExpandedKeys) {
        call(onUpdateExpandedKeys, value, option, meta);
      }
    }
    function doUpdateCheckedKeys(value, option, meta) {
      const { "onUpdate:checkedKeys": _onUpdateCheckedKeys, onUpdateCheckedKeys } = props;
      uncontrolledCheckedKeysRef.value = value;
      if (onUpdateCheckedKeys) {
        call(onUpdateCheckedKeys, value, option, meta);
      }
      if (_onUpdateCheckedKeys) {
        call(_onUpdateCheckedKeys, value, option, meta);
      }
    }
    function doUpdateIndeterminateKeys(value, option) {
      const { "onUpdate:indeterminateKeys": _onUpdateIndeterminateKeys, onUpdateIndeterminateKeys } = props;
      if (_onUpdateIndeterminateKeys) {
        call(_onUpdateIndeterminateKeys, value, option);
      }
      if (onUpdateIndeterminateKeys) {
        call(onUpdateIndeterminateKeys, value, option);
      }
    }
    function doUpdateSelectedKeys(value, option, meta) {
      const { "onUpdate:selectedKeys": _onUpdateSelectedKeys, onUpdateSelectedKeys } = props;
      uncontrolledSelectedKeysRef.value = value;
      if (onUpdateSelectedKeys) {
        call(onUpdateSelectedKeys, value, option, meta);
      }
      if (_onUpdateSelectedKeys) {
        call(_onUpdateSelectedKeys, value, option, meta);
      }
    }
    function doDragEnter(info) {
      const { onDragenter } = props;
      if (onDragenter)
        call(onDragenter, info);
    }
    function doDragLeave(info) {
      const { onDragleave } = props;
      if (onDragleave)
        call(onDragleave, info);
    }
    function doDragEnd(info) {
      const { onDragend } = props;
      if (onDragend)
        call(onDragend, info);
    }
    function doDragStart(info) {
      const { onDragstart } = props;
      if (onDragstart)
        call(onDragstart, info);
    }
    function doDragOver(info) {
      const { onDragover } = props;
      if (onDragover)
        call(onDragover, info);
    }
    function doDrop(info) {
      const { onDrop } = props;
      if (onDrop)
        call(onDrop, info);
    }
    function resetDndState() {
      resetDragState();
      resetDropState();
    }
    function resetDragState() {
      draggingNodeRef.value = null;
    }
    function resetDropState() {
      droppingOffsetLevelRef.value = 0;
      droppingNodeRef.value = null;
      droppingMouseNodeRef.value = null;
      droppingPositionRef.value = null;
      resetDragExpandState();
    }
    function resetDragExpandState() {
      if (expandTimerId) {
        window.clearTimeout(expandTimerId);
        expandTimerId = null;
      }
      nodeKeyToBeExpanded = null;
    }
    function handleCheck(node, checked) {
      if (props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      if (props.internalUnifySelectCheck && !props.multiple) {
        handleSelect(node);
        return;
      }
      const checkedAction = checked ? "check" : "uncheck";
      const { checkedKeys, indeterminateKeys } = dataTreeMateRef.value[checkedAction](node.key, displayedCheckedKeysRef.value, {
        cascade: props.cascade,
        checkStrategy: mergedCheckStrategyRef.value,
        allowNotLoaded: props.allowCheckingNotLoaded
      });
      doUpdateCheckedKeys(checkedKeys, getOptionsByKeys(checkedKeys), {
        node: node.rawNode,
        action: checkedAction
      });
      doUpdateIndeterminateKeys(indeterminateKeys, getOptionsByKeys(indeterminateKeys));
    }
    function toggleExpand(node) {
      if (props.disabled)
        return;
      const { key } = node;
      const { value: mergedExpandedKeys } = mergedExpandedKeysRef;
      const index = mergedExpandedKeys.findIndex((expandNodeId) => expandNodeId === key);
      if (~index) {
        const expandedKeysAfterChange = Array.from(mergedExpandedKeys);
        expandedKeysAfterChange.splice(index, 1);
        doUpdateExpandedKeys(expandedKeysAfterChange, getOptionsByKeys(expandedKeysAfterChange), {
          node: node.rawNode,
          action: "collapse"
        });
      } else {
        const nodeToBeExpanded = displayTreeMateRef.value.getNode(key);
        if (!nodeToBeExpanded || nodeToBeExpanded.isLeaf) {
          return;
        }
        let nextKeys;
        if (props.accordion) {
          const siblingKeySet = new Set(node.siblings.map(({ key: key2 }) => key2));
          nextKeys = mergedExpandedKeys.filter((expandedKey) => {
            return !siblingKeySet.has(expandedKey);
          });
          nextKeys.push(key);
        } else {
          nextKeys = mergedExpandedKeys.concat(key);
        }
        doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys), {
          node: node.rawNode,
          action: "expand"
        });
      }
    }
    function handleSwitcherClick(node) {
      if (props.disabled || aipRef.value)
        return;
      toggleExpand(node);
    }
    function handleSelect(node) {
      if (props.disabled || !props.selectable) {
        return;
      }
      pendingNodeKeyRef.value = node.key;
      if (props.internalUnifySelectCheck) {
        const { value: { checkedKeys, indeterminateKeys } } = checkedStatusRef;
        if (props.multiple) {
          handleCheck(node, !(checkedKeys.includes(node.key) || indeterminateKeys.includes(node.key)));
        } else {
          doUpdateCheckedKeys([node.key], getOptionsByKeys([node.key]), {
            node: node.rawNode,
            action: "check"
          });
        }
      }
      if (props.multiple) {
        const selectedKeys = Array.from(mergedSelectedKeysRef.value);
        const index = selectedKeys.findIndex((key) => key === node.key);
        if (~index) {
          if (props.cancelable) {
            selectedKeys.splice(index, 1);
          }
        } else if (!~index) {
          selectedKeys.push(node.key);
        }
        doUpdateSelectedKeys(selectedKeys, getOptionsByKeys(selectedKeys), {
          node: node.rawNode,
          action: ~index ? "unselect" : "select"
        });
      } else {
        const selectedKeys = mergedSelectedKeysRef.value;
        if (selectedKeys.includes(node.key)) {
          if (props.cancelable) {
            doUpdateSelectedKeys([], [], {
              node: node.rawNode,
              action: "unselect"
            });
          }
        } else {
          doUpdateSelectedKeys([node.key], getOptionsByKeys([node.key]), {
            node: node.rawNode,
            action: "select"
          });
        }
      }
    }
    function expandDragEnterNode(node) {
      if (expandTimerId) {
        window.clearTimeout(expandTimerId);
        expandTimerId = null;
      }
      if (node.isLeaf)
        return;
      nodeKeyToBeExpanded = node.key;
      const expand = () => {
        if (nodeKeyToBeExpanded !== node.key)
          return;
        const { value: droppingMouseNode } = droppingMouseNodeRef;
        if (droppingMouseNode && droppingMouseNode.key === node.key && !mergedExpandedKeysRef.value.includes(node.key)) {
          const nextKeys = mergedExpandedKeysRef.value.concat(node.key);
          doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys), {
            node: node.rawNode,
            action: "expand"
          });
        }
        expandTimerId = null;
        nodeKeyToBeExpanded = null;
      };
      if (!node.shallowLoaded) {
        expandTimerId = window.setTimeout(() => {
          void triggerLoading(node).then(() => {
            expand();
          });
        }, 1e3);
      } else {
        expandTimerId = window.setTimeout(() => {
          expand();
        }, 1e3);
      }
    }
    function handleDragEnter({ event, node }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      handleDragOver({ event, node }, false);
      doDragEnter({ event, node: node.rawNode });
    }
    function handleDragLeave({ event, node }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      doDragLeave({ event, node: node.rawNode });
    }
    function handleDragLeaveTree(e) {
      if (e.target !== e.currentTarget)
        return;
      resetDropState();
    }
    function handleDragEnd({ event, node }) {
      resetDndState();
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      doDragEnd({ event, node: node.rawNode });
    }
    function handleDragStart({ event, node }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      dragStartX = event.clientX;
      draggingNodeRef.value = node;
      doDragStart({ event, node: node.rawNode });
    }
    function handleDragOver({ event, node }, emit = true) {
      var _a;
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      const { value: draggingNode } = draggingNodeRef;
      if (!draggingNode)
        return;
      const { allowDrop, indent } = props;
      if (emit)
        doDragOver({ event, node: node.rawNode });
      const el = event.currentTarget;
      const { height: elOffsetHeight, top: elClientTop } = el.getBoundingClientRect();
      const eventOffsetY = event.clientY - elClientTop;
      let mousePosition;
      const allowDropInside = allowDrop({
        node: node.rawNode,
        dropPosition: "inside",
        phase: "drag"
      });
      if (allowDropInside) {
        if (eventOffsetY <= 8) {
          mousePosition = "before";
        } else if (eventOffsetY >= elOffsetHeight - 8) {
          mousePosition = "after";
        } else {
          mousePosition = "inside";
        }
      } else {
        if (eventOffsetY <= elOffsetHeight / 2) {
          mousePosition = "before";
        } else {
          mousePosition = "after";
        }
      }
      const { value: getFindex } = getFIndexRef;
      let finalDropNode;
      let finalDropPosition;
      const hoverNodeFIndex = getFindex(node.key);
      if (hoverNodeFIndex === null) {
        resetDropState();
        return;
      }
      let mouseAtExpandedNonLeafNode = false;
      if (mousePosition === "inside") {
        finalDropNode = node;
        finalDropPosition = "inside";
      } else {
        if (mousePosition === "before") {
          if (node.isFirstChild) {
            finalDropNode = node;
            finalDropPosition = "before";
          } else {
            finalDropNode = fNodesRef.value[hoverNodeFIndex - 1];
            finalDropPosition = "after";
          }
        } else {
          finalDropNode = node;
          finalDropPosition = "after";
        }
      }
      if (!finalDropNode.isLeaf && mergedExpandedKeysRef.value.includes(finalDropNode.key)) {
        mouseAtExpandedNonLeafNode = true;
        if (finalDropPosition === "after") {
          finalDropNode = fNodesRef.value[hoverNodeFIndex + 1];
          if (!finalDropNode) {
            finalDropNode = node;
            finalDropPosition = "inside";
          } else {
            finalDropPosition = "before";
          }
        }
      }
      const droppingMouseNode = finalDropNode;
      droppingMouseNodeRef.value = droppingMouseNode;
      if (!mouseAtExpandedNonLeafNode && draggingNode.isLastChild && draggingNode.key === finalDropNode.key) {
        finalDropPosition = "after";
      }
      if (finalDropPosition === "after") {
        let offset = dragStartX - event.clientX;
        let offsetLevel = 0;
        while (offset >= indent / 2 && // divide by 2 to make it easier to trigger
        finalDropNode.parent !== null && finalDropNode.isLastChild && offsetLevel < 1) {
          offset -= indent;
          offsetLevel += 1;
          finalDropNode = finalDropNode.parent;
        }
        droppingOffsetLevelRef.value = offsetLevel;
      } else {
        droppingOffsetLevelRef.value = 0;
      }
      if (draggingNode.contains(finalDropNode) || finalDropPosition === "inside" && ((_a = draggingNode.parent) === null || _a === void 0 ? void 0 : _a.key) === finalDropNode.key) {
        if (draggingNode.key === droppingMouseNode.key && draggingNode.key === finalDropNode.key)
          ;
        else {
          resetDropState();
          return;
        }
      }
      if (!allowDrop({
        node: finalDropNode.rawNode,
        dropPosition: finalDropPosition,
        phase: "drag"
      })) {
        resetDropState();
        return;
      }
      if (draggingNode.key === finalDropNode.key) {
        resetDragExpandState();
      } else {
        if (nodeKeyToBeExpanded !== finalDropNode.key) {
          if (finalDropPosition === "inside") {
            if (props.expandOnDragenter) {
              expandDragEnterNode(finalDropNode);
              if (!finalDropNode.shallowLoaded && nodeKeyToBeExpanded !== finalDropNode.key) {
                resetDndState();
                return;
              }
            } else {
              if (!finalDropNode.shallowLoaded) {
                resetDndState();
                return;
              }
            }
          } else {
            resetDragExpandState();
          }
        } else {
          if (finalDropPosition !== "inside") {
            resetDragExpandState();
          }
        }
      }
      droppingPositionRef.value = finalDropPosition;
      droppingNodeRef.value = finalDropNode;
    }
    function handleDrop({ event, node, dropPosition }) {
      if (!props.draggable || props.disabled || isNodeDisabled(node, props.disabledField)) {
        return;
      }
      const { value: draggingNode } = draggingNodeRef;
      const { value: droppingNode } = droppingNodeRef;
      const { value: droppingPosition } = droppingPositionRef;
      if (!draggingNode || !droppingNode || !droppingPosition) {
        return;
      }
      if (!props.allowDrop({
        node: droppingNode.rawNode,
        dropPosition: droppingPosition,
        phase: "drag"
      })) {
        return;
      }
      if (draggingNode.key === droppingNode.key) {
        return;
      }
      if (droppingPosition === "before") {
        const nextNode = draggingNode.getNext({ includeDisabled: true });
        if (nextNode) {
          if (nextNode.key === droppingNode.key) {
            resetDropState();
            return;
          }
        }
      }
      if (droppingPosition === "after") {
        const prevNode = draggingNode.getPrev({ includeDisabled: true });
        if (prevNode) {
          if (prevNode.key === droppingNode.key) {
            resetDropState();
            return;
          }
        }
      }
      doDrop({
        event,
        node: droppingNode.rawNode,
        dragNode: draggingNode.rawNode,
        dropPosition
      });
      resetDndState();
    }
    function handleScroll() {
      syncScrollbar();
    }
    function handleResize() {
      syncScrollbar();
    }
    function handleFocusout(e) {
      var _a;
      if (props.virtualScroll || props.internalScrollable) {
        const { value: scrollbarInst } = scrollbarInstRef;
        if ((_a = scrollbarInst === null || scrollbarInst === void 0 ? void 0 : scrollbarInst.containerRef) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget)) {
          return;
        }
        pendingNodeKeyRef.value = null;
      } else {
        const { value: selfEl } = selfElRef;
        if (selfEl === null || selfEl === void 0 ? void 0 : selfEl.contains(e.relatedTarget))
          return;
        pendingNodeKeyRef.value = null;
      }
    }
    watch(pendingNodeKeyRef, (value) => {
      var _a, _b;
      if (value === null)
        return;
      if (props.virtualScroll) {
        (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({ key: value });
      } else if (props.internalScrollable) {
        const { value: scrollbarInst } = scrollbarInstRef;
        if (scrollbarInst === null)
          return;
        const targetEl = (_b = scrollbarInst.contentRef) === null || _b === void 0 ? void 0 : _b.querySelector(`[data-key="${createDataKey(value)}"]`);
        if (!targetEl)
          return;
        scrollbarInst.scrollTo({
          el: targetEl
        });
      }
    });
    provide(treeInjectionKey, {
      loadingKeysRef,
      highlightKeySetRef: mergedHighlightKeySetRef,
      displayedCheckedKeysRef,
      displayedIndeterminateKeysRef,
      mergedSelectedKeysRef,
      mergedExpandedKeysRef,
      mergedThemeRef: themeRef,
      mergedCheckStrategyRef,
      nodePropsRef: toRef(props, "nodeProps"),
      disabledRef: toRef(props, "disabled"),
      checkableRef: toRef(props, "checkable"),
      selectableRef: toRef(props, "selectable"),
      expandOnClickRef: toRef(props, "expandOnClick"),
      onLoadRef: toRef(props, "onLoad"),
      draggableRef: toRef(props, "draggable"),
      blockLineRef: toRef(props, "blockLine"),
      indentRef: toRef(props, "indent"),
      cascadeRef: toRef(props, "cascade"),
      checkOnClickRef: toRef(props, "checkOnClick"),
      checkboxPlacementRef: props.checkboxPlacement,
      droppingMouseNodeRef,
      droppingNodeParentRef,
      draggingNodeRef,
      droppingPositionRef,
      droppingOffsetLevelRef,
      fNodesRef,
      pendingNodeKeyRef,
      showLineRef: toRef(props, "showLine"),
      disabledFieldRef: toRef(props, "disabledField"),
      internalScrollableRef: toRef(props, "internalScrollable"),
      internalCheckboxFocusableRef: toRef(props, "internalCheckboxFocusable"),
      internalTreeSelect: props.internalTreeSelect,
      renderLabelRef: toRef(props, "renderLabel"),
      renderPrefixRef: toRef(props, "renderPrefix"),
      renderSuffixRef: toRef(props, "renderSuffix"),
      renderSwitcherIconRef: toRef(props, "renderSwitcherIcon"),
      labelFieldRef: toRef(props, "labelField"),
      multipleRef: toRef(props, "multiple"),
      handleSwitcherClick,
      handleDragEnd,
      handleDragEnter,
      handleDragLeave,
      handleDragStart,
      handleDrop,
      handleDragOver,
      handleSelect,
      handleCheck
    });
    function scrollTo(options) {
      var _a;
      (_a = virtualListInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(options);
    }
    const exposedMethods = {
      handleKeydown,
      scrollTo,
      getCheckedData: () => {
        if (!props.checkable)
          return { keys: [], options: [] };
        const { checkedKeys } = checkedStatusRef.value;
        return {
          keys: checkedKeys,
          options: getOptionsByKeys(checkedKeys)
        };
      },
      getIndeterminateData: () => {
        if (!props.checkable)
          return { keys: [], options: [] };
        const { indeterminateKeys } = checkedStatusRef.value;
        return {
          keys: indeterminateKeys,
          options: getOptionsByKeys(indeterminateKeys)
        };
      }
    };
    const cssVarsRef = computed(() => {
      const { common: { cubicBezierEaseInOut }, self: { fontSize, nodeBorderRadius, nodeColorHover, nodeColorPressed, nodeColorActive, arrowColor, loadingColor, nodeTextColor, nodeTextColorDisabled, dropMarkColor, nodeWrapperPadding, nodeHeight, lineHeight } } = themeRef.value;
      const lineOffsetTop = getMargin(nodeWrapperPadding, "top");
      const lineOffsetBottom = getMargin(nodeWrapperPadding, "bottom");
      const nodeContentHeight = pxfy(depx(nodeHeight) - depx(lineOffsetTop) - depx(lineOffsetBottom));
      return {
        "--n-arrow-color": arrowColor,
        "--n-loading-color": loadingColor,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-node-border-radius": nodeBorderRadius,
        "--n-node-color-active": nodeColorActive,
        "--n-node-color-hover": nodeColorHover,
        "--n-node-color-pressed": nodeColorPressed,
        "--n-node-text-color": nodeTextColor,
        "--n-node-text-color-disabled": nodeTextColorDisabled,
        "--n-drop-mark-color": dropMarkColor,
        "--n-node-wrapper-padding": nodeWrapperPadding,
        "--n-line-offset-top": `-${lineOffsetTop}`,
        "--n-line-offset-bottom": `-${lineOffsetBottom}`,
        "--n-node-content-height": nodeContentHeight,
        "--n-line-height": lineHeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tree", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      rtlEnabled: rtlEnabledRef,
      fNodes: mergedFNodesRef,
      aip: aipRef,
      selfElRef,
      virtualListInstRef,
      scrollbarInstRef,
      handleFocusout,
      handleDragLeaveTree,
      handleScroll,
      getScrollContainer,
      getScrollContent,
      handleAfterEnter,
      handleResize,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const { fNodes, internalRenderEmpty } = this;
    if (!fNodes.length && internalRenderEmpty) {
      return internalRenderEmpty();
    }
    const { mergedClsPrefix, blockNode, blockLine, draggable, disabled, internalFocusable, checkable, handleKeydown, rtlEnabled, handleFocusout, scrollbarProps } = this;
    const mergedFocusable = internalFocusable && !disabled;
    const tabindex = mergedFocusable ? "0" : void 0;
    const treeClass = [
      `${mergedClsPrefix}-tree`,
      rtlEnabled && `${mergedClsPrefix}-tree--rtl`,
      checkable && `${mergedClsPrefix}-tree--checkable`,
      (blockLine || blockNode) && `${mergedClsPrefix}-tree--block-node`,
      blockLine && `${mergedClsPrefix}-tree--block-line`
    ];
    const createNode = (tmNode) => {
      return "__motion" in tmNode ? h(MotionWrapper, { height: tmNode.height, nodes: tmNode.nodes, clsPrefix: mergedClsPrefix, mode: tmNode.mode, onAfterEnter: this.handleAfterEnter }) : h(NTreeNode, { key: tmNode.key, tmNode, clsPrefix: mergedClsPrefix });
    };
    if (this.virtualScroll) {
      const { mergedTheme, internalScrollablePadding } = this;
      const padding = getMargin(internalScrollablePadding || "0");
      return h(XScrollbar, Object.assign({}, scrollbarProps, { ref: "scrollbarInstRef", onDragleave: draggable ? this.handleDragLeaveTree : void 0, container: this.getScrollContainer, content: this.getScrollContent, class: treeClass, theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, tabindex, onKeydown: mergedFocusable ? handleKeydown : void 0, onFocusout: mergedFocusable ? handleFocusout : void 0 }), {
        default: () => {
          var _a2;
          (_a2 = this.onRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          return h(VVirtualList, { ref: "virtualListInstRef", items: this.fNodes, itemSize: depx(mergedTheme.self.nodeHeight), ignoreItemResize: this.aip, paddingTop: padding.top, paddingBottom: padding.bottom, class: this.themeClass, style: [
            this.cssVars,
            {
              paddingLeft: padding.left,
              paddingRight: padding.right
            }
          ], onScroll: this.handleScroll, onResize: this.handleResize, showScrollbar: false, itemResizable: true }, {
            default: ({ item }) => createNode(item)
          });
        }
      });
    }
    const { internalScrollable } = this;
    treeClass.push(this.themeClass);
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    if (internalScrollable) {
      return h(XScrollbar, Object.assign({}, scrollbarProps, { class: treeClass, tabindex, onKeydown: mergedFocusable ? handleKeydown : void 0, onFocusout: mergedFocusable ? handleFocusout : void 0, style: this.cssVars, contentStyle: { padding: this.internalScrollablePadding } }), {
        default: () => h("div", { onDragleave: draggable ? this.handleDragLeaveTree : void 0, ref: "selfElRef" }, this.fNodes.map(createNode))
      });
    } else {
      return h("div", { class: treeClass, tabindex, ref: "selfElRef", style: this.cssVars, onKeydown: mergedFocusable ? handleKeydown : void 0, onFocusout: mergedFocusable ? handleFocusout : void 0, onDragleave: draggable ? this.handleDragLeaveTree : void 0 }, !fNodes.length ? resolveSlot(this.$slots.empty, () => [
        h(NEmpty, { class: `${mergedClsPrefix}-tree__empty`, theme: this.mergedTheme.peers.Empty, themeOverrides: this.mergedTheme.peerOverrides.Empty })
      ]) : fNodes.map(createNode));
    }
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DraggableCard",
  props: {
    initialValue: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const isLeft = props.initialValue.left !== void 0;
    const isTop = props.initialValue.top !== void 0;
    const prevOffset = {
      x: (isLeft ? props.initialValue.left : props.initialValue.right) ?? 0,
      y: (isTop ? props.initialValue.top : props.initialValue.bottom) ?? 0
    };
    const offset = shallowReactive({ ...prevOffset });
    const currentStyle = computed(() => {
      const xStyle = isLeft ? `left:${offset.x}px;` : `right:${offset.x}px;`;
      const yStyle = isTop ? `top:${offset.y}px;` : `bottom:${offset.y}px;`;
      return xStyle + yStyle;
    });
    let prevEv = void 0;
    const startMove = (ev) => {
      prevEv = ev;
      prevOffset.x = offset.x;
      prevOffset.y = offset.y;
    };
    const move = (ev) => {
      if (!target.value || !prevEv)
        return;
      const dx = ev.clientX - prevEv.clientX;
      const dy = ev.clientY - prevEv.clientY;
      offset.x = prevOffset.x + (isLeft ? dx : -dx);
      offset.y = prevOffset.y + (isTop ? dy : -dy);
    };
    const endMove = () => {
      prevEv = void 0;
    };
    const box = shallowRef();
    const target = shallowRef();
    const preventSelection = (ev) => {
      if (prevEv) {
        ev.preventDefault();
      }
    };
    const transitions = [`transition-top,bottom,left,right-500`];
    const windowEndMove = () => {
      if (!target.value)
        return;
      const { top, bottom, left, right } = target.value.getBoundingClientRect();
      if (right < 0 || left > window.innerWidth || bottom < 0 || top > window.innerHeight) {
        offset.x = prevOffset.x;
        offset.y = prevOffset.y;
        endMove();
        const boxDiv = box.value;
        if (boxDiv) {
          boxDiv.classList.add(...transitions);
          setTimeout(() => {
            boxDiv.classList.remove(...transitions);
          }, 550);
        }
      }
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", windowEndMove);
    document.addEventListener("selectstart", preventSelection);
    onUnmounted(() => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", windowEndMove);
      document.removeEventListener("selectstart", preventSelection);
      endMove();
    });
    watch(target, (newValue, oldvalue) => {
      if (newValue) {
        newValue.addEventListener("pointerdown", startMove);
        newValue.addEventListener("pointerup", endMove);
      }
      if (oldvalue) {
        oldvalue.removeEventListener("pointerdown", startMove);
        oldvalue.removeEventListener("pointerup", endMove);
      }
    });
    onUnmounted(() => {
      if (!target.value)
        return;
      target.value.removeEventListener("pointerdown", startMove);
      target.value.removeEventListener("pointerup", endMove);
    });
    const updateTarget = (arg) => {
      if (arg instanceof HTMLElement) {
        target.value = arg;
      } else {
        target.value = void 0;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", {
          fixed: "",
          ref_key: "box",
          ref: box,
          style: normalizeStyle([_ctx.$attrs.style, currentStyle.value]),
          class: normalizeClass(_ctx.$attrs.class)
        }, [
          renderSlot(_ctx.$slots, "default", { onRef: updateTarget })
        ], 6)
      ]);
    };
  }
});
const DraggableCard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("th", null, "Name", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("th", null, "Value", -1);
const _hoisted_3$2 = [
  _hoisted_1$4,
  _hoisted_2$2
];
const _hoisted_4$2 = {
  key: 0,
  flex: "",
  "flex-justify-between": "",
  "flex-items-center": ""
};
const _hoisted_5$2 = {
  key: 0,
  viewBox: "0 0 28 28"
};
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("g", { fill: "none" }, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M15 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0zm-1.75 3.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0zM2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14zM14 3.5C8.201 3.5 3.5 8.201 3.5 14S8.201 24.5 14 24.5S24.5 19.799 24.5 14S19.799 3.5 14 3.5z",
    fill: "currentColor"
  })
], -1);
const _hoisted_7$2 = [
  _hoisted_6$2
];
const _hoisted_8$2 = {
  key: 1,
  viewBox: "0 0 1024 1024"
};
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M722.500267 330.888533l-273.408 273.408-147.729067-147.729066a42.018133 42.018133 0 1 0-59.426133 59.426133l177.425066 177.493333a41.984 41.984 0 0 0 59.426134 0L781.9264 390.314667a42.001067 42.001067 0 0 0-59.392-59.426134h-0.034133zM78.506667 783.496533a508.279467 508.279467 0 0 0 319.0784 226.986667C530.773333 1041.066667 667.886933 1017.924267 783.701333 945.390933a508.279467 508.279467 0 0 0 226.986667-319.0784 508.279467 508.279467 0 0 0-65.058133-386.116266C848.554667 85.367467 681.710933 0.341333 511.214933 0.341333a508.6208 508.6208 0 0 0-270.813866 77.960534A36.864 36.864 0 0 0 279.552 140.629333C484.113067 12.288 755.029333 74.581333 883.268267 279.278933a434.9952 434.9952 0 0 1 55.739733 330.5472 435.029333 435.029333 0 0 1-194.3552 273.134934 435.746133 435.746133 0 0 1-330.581333 55.773866A435.165867 435.165867 0 0 1 140.936533 744.379733a436.770133 436.770133 0 0 1-5.666133-456.055466 36.829867 36.829867 0 0 0-63.317333-37.546667A510.1568 510.1568 0 0 0 78.506667 783.530667v-0.034134z" }, null, -1);
const _hoisted_10 = [
  _hoisted_9$2
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AttrCard",
  props: {
    focusNode: {}
  },
  setup(__props) {
    const props = __props;
    const lenAttrNames = [`text`, `desc`];
    const attrs = computed(() => {
      return Object.entries(props.focusNode.attr).map(([name, value]) => {
        const attr = {
          name,
          value: JSON.stringify(value)
        };
        if (lenAttrNames.includes(name)) {
          return [
            attr,
            {
              name: name + `.length`,
              value: JSON.stringify((value == null ? void 0 : value.length) ?? null)
            }
          ];
        }
        return attr;
      }).flat();
    });
    const attrDesc = {
      _id: `虚拟属性:生成快照访问节点顺序`,
      _pid: `虚拟属性:父节点的 _id`,
      depth: `在某些应用上可能造成无限节点错误`,
      id: `可快速查找`,
      text: `可快速查找`
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$5, { initialValue: { top: 75, right: 10 } }, {
        default: withCtx(({ onRef }) => [
          createVNode(unref(NTable), {
            size: "small",
            striped: "",
            singleLine: false,
            class: "gkd_code",
            themeOverrides: {
              thPaddingSmall: "1px 3px",
              tdPaddingSmall: "1px 3px"
            }
          }, {
            default: withCtx(() => [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", {
                  ref: onRef,
                  "cursor-move": ""
                }, _hoisted_3$2, 512)
              ]),
              createVNode(unref(NTbody), null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(attrs.value, (attrx) => {
                    return openBlock(), createBlock(unref(NTr), {
                      key: attrx.name
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NTd), {
                          onClick: ($event) => unref(copy)(`${attrx.name}=${attrx.value}`)
                        }, {
                          default: withCtx(() => [
                            attrx.name in attrDesc ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
                              createBaseVNode("div", null, toDisplayString(attrx.name), 1),
                              createVNode(unref(NTooltip), null, {
                                trigger: withCtx(() => [
                                  createVNode(unref(NIcon), { size: "16" }, {
                                    default: withCtx(() => [
                                      attrx.name != `id` && attrx.name != `text` ? (openBlock(), createElementBlock("svg", _hoisted_5$2, _hoisted_7$2)) : (_ctx.focusNode.quickFind || attrx.name == "id" && _ctx.focusNode.idQf || attrx.name == "text" && _ctx.focusNode.textQf) && JSON.parse(attrx.value) ? (openBlock(), createElementBlock("svg", _hoisted_8$2, _hoisted_10)) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                default: withCtx(() => [
                                  createTextVNode(" " + toDisplayString(attrDesc[attrx.name]), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(attrx.name), 1)
                            ], 64))
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(unref(NTd), null, {
                          default: withCtx(() => [
                            attrx.name == "id" ? (openBlock(), createBlock(unref(NEllipsis), {
                              key: 0,
                              style: { "width": "180px", "min-width": "max(12vw, 180px)", "direction": "rtl", "text-align": "left" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(attrx.value), 1)
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(unref(NEllipsis), {
                              key: 1,
                              style: { "width": "180px", "min-width": "max(12vw, 180px)" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(attrx.value), 1)
                              ]),
                              _: 2
                            }, 1024))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$3 = {
  flex: "",
  "flex-col": "",
  relative: "",
  "h-full": ""
};
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", {
  absolute: "",
  "left-0": "",
  "top-0": "",
  "bottom-0": "",
  "right-0": "",
  "b-solid": "",
  "b-1px": "",
  "b-red": ""
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5$1 = {
  class: "left-[calc(100%+4px)]",
  absolute: "",
  "top-0": "",
  "overflow-hidden": "",
  "z-1": "",
  "bg-white": "",
  "h-200px": "",
  "w-200px": "",
  "border-1px": "",
  "border-indigo-600": "",
  "border-dashed": ""
};
const _hoisted_6$1 = ["src"];
const _hoisted_7$1 = {
  absolute: "",
  "left-2px": "",
  "top-2px": "",
  class: "leading-[1]",
  style: { "background-color": "rgba(256, 256, 256, 0.7)" }
};
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", {
  class: "top-[calc(50%-1px)]",
  absolute: "",
  "left-0": "",
  "right-0": "",
  "h-1px": "",
  "bg-repeat-x": "",
  "mix-blend-difference": "",
  style: { "background": "linear-gradient(\n            to left,\n            transparent 0%,\n            transparent 50%,\n            #fff 50%,\n            #fff 100%\n          )", "background-size": "10px 1px" }
}, null, -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", {
  class: "left-[calc(50%-1px)]",
  absolute: "",
  "top-0": "",
  "bottom-0": "",
  "w-1px": "",
  "bg-repeat-y": "",
  "mix-blend-difference": "",
  style: { "background": "linear-gradient(\n            to top,\n            transparent 0%,\n            transparent 50%,\n            #fff 50%,\n            #fff 100%\n          )", "background-size": "1px 10px" }
}, null, -1);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ScreenshotCard",
  props: {
    url: {},
    snapshot: {},
    rootNode: {},
    focusNode: {},
    onUpdateFocusNode: { type: Function, default: () => () => {
    } }
  },
  setup(__props) {
    const props = __props;
    const imgRef = shallowRef();
    const clickEvRef = shallowRef();
    watchEffect(() => {
      if (!props.rootNode)
        return;
      const ev = clickEvRef.value;
      const img = imgRef.value;
      if (!ev || !img) {
        return;
      }
      const imgRect = img.getBoundingClientRect();
      const innerHeight = imgRect.width / img.naturalWidth * img.naturalHeight;
      const offsetTop = (imgRect.height - innerHeight) / 2;
      const ox = (ev.clientX - imgRect.left) / imgRect.width * img.naturalWidth;
      const oy = (ev.clientY - imgRect.top - offsetTop) / innerHeight * img.naturalHeight;
      const childNode = findNodeByXy(props.snapshot.nodes, ox, oy);
      if (childNode) {
        props.onUpdateFocusNode(childNode);
      }
    });
    const percent = (n) => {
      return `${n * 100}%`;
    };
    const positionStyle = computed(() => {
      var _a;
      const img = imgRef.value;
      const attr = (_a = props.focusNode) == null ? void 0 : _a.attr;
      if (!props.focusNode || !img || !attr) {
        return ``;
      }
      const imgRect = img.getBoundingClientRect();
      const innerHeight = imgRect.width / img.naturalWidth * img.naturalHeight;
      return {
        left: `calc(${percent(attr.left / img.naturalWidth)} - 2px)`,
        width: `calc(${percent(
          (attr.right - attr.left) / img.naturalWidth
        )} + 2px)`,
        top: `calc(${percent(
          (attr.top / img.naturalHeight * innerHeight + (imgRect.height - innerHeight) / 2) / imgRect.height
        )} - 2px)`,
        height: `calc(${percent(
          (attr.bottom - attr.top) / img.naturalHeight * innerHeight / imgRect.height
        )} + 2px)`
      };
    });
    const imgHover = shallowRef(false);
    const hoverPosition = shallowRef({ ox: 0, oy: 0 });
    const imgMove = (ev) => {
      const img = imgRef.value;
      if (!img)
        return;
      const imgRect = img.getBoundingClientRect();
      const innerHeight = imgRect.width / img.naturalWidth * img.naturalHeight;
      const offsetTop = (imgRect.height - innerHeight) / 2;
      const ox = (ev.clientX - imgRect.left) / imgRect.width * img.naturalWidth;
      const oy = (ev.clientY - imgRect.top - offsetTop) / innerHeight * img.naturalHeight;
      hoverPosition.value = { ox, oy };
      hoverPositionStyle.value = {
        left: -(ox - 0.1 * img.naturalWidth) / img.naturalWidth * 1e3 + "px",
        top: -(oy - 0.1 * img.naturalWidth) / img.naturalWidth * 1e3 + "px"
      };
    };
    const hoverPositionStyle = shallowRef({ left: "0", top: "0" });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("img", {
          ref_key: "imgRef",
          ref: imgRef,
          src: _ctx.url,
          onClick: _cache[0] || (_cache[0] = ($event) => clickEvRef.value = $event),
          "cursor-crosshair": "",
          "h-full": "",
          "object-contain": "",
          style: { "max-width": "max(35vw, 400px)" },
          onMouseover: _cache[1] || (_cache[1] = ($event) => imgHover.value = true),
          onMouseleave: _cache[2] || (_cache[2] = ($event) => imgHover.value = false),
          onMousemove: imgMove
        }, null, 40, _hoisted_2$1),
        createBaseVNode("div", {
          style: normalizeStyle(positionStyle.value),
          absolute: "",
          "pointer-events-none": "",
          "transition-all-300": "",
          "b-1px": "",
          "b-blue": "",
          "b-solid": ""
        }, _hoisted_4$1, 4),
        withDirectives(createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("img", {
            src: _ctx.url,
            "object-contain": "",
            absolute: "",
            "left-0": "",
            "top-0": "",
            style: normalizeStyle(hoverPositionStyle.value),
            "w-1000px": ""
          }, null, 12, _hoisted_6$1),
          createBaseVNode("div", _hoisted_7$1, toDisplayString(`${hoverPosition.value.ox.toFixed(0)},${hoverPosition.value.oy.toFixed(0)}`), 1),
          _hoisted_8$1,
          _hoisted_9$1
        ], 512), [
          [vShow, imgHover.value]
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = {
  "w-480px": "",
  "bg-white": "",
  "b-1px": "",
  "b-solid": "",
  "b-gray-200": "",
  "rounded-4px": "",
  "p-8px": "",
  style: { "min-width": "max(25vw, 480px)" }
};
const _hoisted_2 = {
  flex: "",
  "m-b-4px": ""
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z",
    fill: "currentColor"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { "p-5px": "" }, null, -1);
const _hoisted_5 = {
  key: 0,
  underline: "",
  "decoration-1": "",
  "m-r-4px": "",
  title: "查询数量"
};
const _hoisted_6 = ["title"];
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("svg", { viewBox: "0 0 24 24" }, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",
    fill: "currentColor"
  })
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { "p-l-8px": "" }, null, -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("svg", { viewBox: "0 0 24 24" }, [
  /* @__PURE__ */ createBaseVNode("g", { fill: "none" }, [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-1.28 13.02a2.75 2.75 0 0 1-2.561 2.474l-.176.006H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75zm6.197 4.75H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h7.374c.6 0 1.109-.425 1.225-1.002l.02-.126L18.196 6.5zM13.75 9.25a.75.75 0 0 1 .743.648L14.5 10v7a.75.75 0 0 1-1.493.102L13 17v-7a.75.75 0 0 1 .75-.75zm-3.5 0a.75.75 0 0 1 .743.648L11 10v7a.75.75 0 0 1-1.493.102L9.5 17v-7a.75.75 0 0 1 .75-.75zm1.75-6a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25z",
      fill: "currentColor"
    })
  ])
], -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchCard",
  props: {
    snapshot: {},
    rootNode: {},
    onUpdateFocusNode: { type: Function, default: () => () => {
    } }
  },
  setup(__props) {
    const props = __props;
    const selectorText = shallowRef(``);
    const selectorResults = shallowReactive([]);
    const searchBySelector = errorTry(() => {
      if (!props.rootNode) {
        message.error(`根节点不存在`);
        return;
      }
      const text = selectorText.value.trim();
      if (!text)
        return;
      if (enableSearchBySelector.value) {
        const selector = errorWrap(() => parseSelector(text), `选择器非法`);
        if (selectorResults.find(
          (s) => typeof s.selector == "object" && s.selector.toString() == selector.toString()
        )) {
          message.warning(`不可重复选择`);
          return;
        }
        const results = selector.querySelectorAll(props.rootNode);
        if (results.length == 0) {
          message.success(`没有选择到节点`);
          return;
        }
        message.success(`选择到 ${results.length} 个节点`);
        selectorResults.unshift({ selector, results });
      } else {
        if (selectorResults.find(
          (s) => typeof s.selector == "string" && s.selector.toString() == text
        )) {
          message.warning(`不可重复选择`);
          return;
        }
        const results = [];
        const stack = [props.rootNode];
        while (stack.length > 0) {
          const n = stack.pop();
          if (getNodeLabel(n).includes(text)) {
            results.push(n);
          }
          stack.push(...[...n.children].reverse());
        }
        if (results.length == 0) {
          message.success(`没有搜索到节点`);
          return;
        }
        message.success(`搜索到 ${results.length} 个节点`);
        selectorResults.unshift({ selector: text, results });
      }
    });
    const generateRules = errorTry(async (selector) => {
      let jpgUrl = githubJpgStorage[props.snapshot.id];
      if (jpgUrl) {
        jpgUrl = githubUrlToSelfUrl(jpgUrl);
      }
      let zipUrl = githubZipStorage[props.snapshot.id];
      if (zipUrl) {
        zipUrl = githubUrlToSelfUrl(zipUrl);
      }
      const rule = {
        id: props.snapshot.appId,
        name: props.snapshot.appName,
        groups: [
          {
            key: 1,
            name: `[ChangeMe]规则名称-${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
            desc: `[ChangeMe]本规则由GKD网页端审查工具生成`,
            rules: [
              {
                activityIds: props.snapshot.activityId,
                matches: selector.toString(),
                exampleUrls: jpgUrl,
                snapshotUrls: zipUrl
              }
            ]
          }
        ]
      };
      copy(lib.stringify(rule, void 0, 2));
    });
    const enableSearchBySelector = shallowRef(true);
    const _1vw = window.innerWidth / 100;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$5, {
        initialValue: { top: 75, right: Math.max(315, 12 * _1vw + 135) },
        class: "z-1"
      }, {
        default: withCtx(({ onRef }) => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(NRadioGroup), {
                value: enableSearchBySelector.value,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => enableSearchBySelector.value = $event)
              }, {
                default: withCtx(() => [
                  createVNode(unref(NSpace), null, {
                    default: withCtx(() => [
                      createVNode(unref(NRadio), { value: false }, {
                        default: withCtx(() => [
                          createTextVNode(" 字符搜索 ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(NRadio), { value: true }, {
                        default: withCtx(() => [
                          createTextVNode(" 选择器查询 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"]),
              createBaseVNode("div", {
                "flex-1": "",
                "cursor-move": "",
                ref: onRef
              }, null, 512)
            ]),
            createVNode(unref(NInputGroup), null, {
              default: withCtx(() => [
                createVNode(unref(NInput), {
                  value: selectorText.value,
                  "onUpdate:value": _cache[1] || (_cache[1] = ($event) => selectorText.value = $event),
                  placeholder: enableSearchBySelector.value ? `请输入选择器` : `请输入字符`,
                  onKeyup: withKeys(unref(searchBySelector), ["enter"]),
                  inputProps: { class: "gkd_code" }
                }, null, 8, ["value", "placeholder", "onKeyup"]),
                createVNode(unref(NButton), { onClick: unref(searchBySelector) }, {
                  icon: withCtx(() => [
                    createVNode(unref(NIcon), null, {
                      default: withCtx(() => [
                        _hoisted_3
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            }),
            _hoisted_4,
            createVNode(unref(NCollapse), null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(selectorResults), (selectorResult, index) => {
                  return openBlock(), createBlock(unref(NCollapseItem), {
                    key: selectorResult.selector.toString()
                  }, {
                    header: withCtx(() => [
                      selectorResult.results.length > 1 ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(selectorResult.results.length), 1)) : createCommentVNode("", true),
                      createBaseVNode("span", {
                        "break-all": "",
                        title: typeof selectorResult.selector == "object" ? `选择器` : `搜索字符`
                      }, toDisplayString(selectorResult.selector.toString()), 9, _hoisted_6)
                    ]),
                    "header-extra": withCtx(() => [
                      typeof selectorResult.selector == "object" ? (openBlock(), createBlock(unref(NButton), {
                        key: 0,
                        size: "small",
                        onClick: withModifiers(($event) => unref(generateRules)(selectorResult.selector), ["stop"]),
                        title: "复制规则"
                      }, {
                        icon: withCtx(() => [
                          createVNode(unref(NIcon), null, {
                            default: withCtx(() => [
                              _hoisted_7
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true),
                      _hoisted_8,
                      createVNode(unref(NButton), {
                        size: "small",
                        onClick: withModifiers(($event) => unref(selectorResults).splice(index, 1), ["stop"]),
                        title: "删除记录"
                      }, {
                        icon: withCtx(() => [
                          createVNode(unref(NIcon), null, {
                            default: withCtx(() => [
                              _hoisted_9
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(unref(NSpace), { style: { "max-height": "400px", "overflow-y": "scroll", "padding-bottom": "10px" } }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(selectorResult.results, (resultNode) => {
                            return openBlock(), createBlock(unref(NButton), {
                              key: resultNode.id,
                              onClick: ($event) => _ctx.onUpdateFocusNode(resultNode),
                              size: "small"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(getNodeLabel)(resultNode)), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["initialValue"]);
    };
  }
});
const _hoisted_1$1 = {
  flex: "",
  "flex-col": ""
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WindowCard",
  props: {
    snapshot: {},
    rootNode: {},
    focusNode: {},
    onUpdateFocusNode: {
      type: Function,
      default: () => () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const defaultExpandedKeys = shallowRef([]);
    watchEffect(async () => {
      var _a;
      if (!props.focusNode)
        return;
      const key = props.focusNode.id;
      let n = props.focusNode.parent;
      if (!n) {
        return;
      }
      const s = new Set(defaultExpandedKeys.value);
      while (n) {
        s.add(n.id);
        n = n.parent;
      }
      if (s.size == defaultExpandedKeys.value.length) {
        return;
      }
      defaultExpandedKeys.value = [...s];
      await nextTick();
      (_a = treeRef.value) == null ? void 0 : _a.scrollTo({
        key
      });
    });
    const treeRef = shallowRef();
    const updateCheckedKeys = (keys, options, meta) => {
    };
    const treeFilter = (pattern, node) => {
      var _a;
      return node.id === ((_a = props.focusNode) == null ? void 0 : _a.id);
    };
    const treeNodeProps = (info) => {
      var _a;
      return {
        onClick: () => {
          props.onUpdateFocusNode(info.option);
        },
        style: {
          color: info.option.id == ((_a = props.focusNode) == null ? void 0 : _a.id) ? `#00F` : void 0
        }
      };
    };
    const renderLabel = (info) => {
      return getNodeLabel(info.option);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(NTable), {
        size: "small",
        striped: "",
        singleLine: false,
        class: "table-fixed",
        themeOverrides: {
          thPaddingSmall: "2px 4px",
          tdPaddingSmall: "2px 4px"
        }
      }, {
        default: withCtx(() => [createVNode(unref(NThead), null, {
          default: withCtx(() => [createVNode(unref(NTr), null, {
            default: withCtx(() => [createVNode(unref(NTh), {
              class: "w-140px"
            }, {
              default: withCtx(() => [createTextVNode(" Device ")]),
              _: 1
            }), createVNode(unref(NTh), {
              class: "w-100px"
            }, {
              default: withCtx(() => [createTextVNode(" Name ")]),
              _: 1
            }), createVNode(unref(NTh), {
              class: "w-100px"
            }, {
              default: withCtx(() => [createTextVNode(" VersionName ")]),
              _: 1
            }), createVNode(unref(NTh), {
              class: "w-100px"
            }, {
              default: withCtx(() => [createTextVNode(" VersionCode ")]),
              _: 1
            }), createVNode(unref(NTh), {
              class: "w-150px"
            }, {
              default: withCtx(() => [createTextVNode(" AppId ")]),
              _: 1
            }), createVNode(unref(NTh), null, {
              default: withCtx(() => [createTextVNode(" ActivityId ")]),
              _: 1
            }), createVNode(unref(NTh), {
              class: "w-175px"
            }, {
              default: withCtx(() => [createTextVNode(" 操作 ")]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), createVNode(unref(NTbody), null, {
          default: withCtx(() => [createVNode(unref(NTr), null, {
            default: withCtx(() => [createVNode(unref(NTd), {
              class: "whitespace-nowrap"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(`${unref(getDevice)(_ctx.snapshot).manufacturer} Android ${unref(getDevice)(_ctx.snapshot).release || ``}`), 1)]),
              _: 1
            }), createVNode(unref(NTd), {
              class: "whitespace-nowrap",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(_ctx.snapshot.appName))
            }, {
              default: withCtx(() => [createVNode(unref(NEllipsis), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.snapshot.appName), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(unref(NTd), {
              class: "whitespace-nowrap",
              onClick: _cache[1] || (_cache[1] = ($event) => unref(copy)(_ctx.snapshot.appVersionName))
            }, {
              default: withCtx(() => [createVNode(unref(NEllipsis), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.snapshot.appVersionName), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(unref(NTd), {
              class: "whitespace-nowrap",
              onClick: _cache[2] || (_cache[2] = ($event) => unref(copy)(_ctx.snapshot.appVersionCode.toString()))
            }, {
              default: withCtx(() => [createVNode(unref(NEllipsis), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.snapshot.appVersionCode), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(unref(NTd), {
              class: "whitespace-nowrap",
              onClick: _cache[3] || (_cache[3] = ($event) => unref(copy)(_ctx.snapshot.appId))
            }, {
              default: withCtx(() => [createVNode(unref(NEllipsis), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.snapshot.appId), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(unref(NTd), {
              onClick: _cache[4] || (_cache[4] = ($event) => unref(copy)(_ctx.snapshot.activityId)),
              class: "break-words"
            }, {
              default: withCtx(() => [createVNode(unref(NEllipsis), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.snapshot.activityId), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(unref(NTd), null, {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
              _: 3
            })]),
            _: 3
          })]),
          _: 3
        })]),
        _: 3
      }), createVNode(unref(NTree), {
        ref_key: "treeRef",
        ref: treeRef,
        virtualScroll: "",
        showLine: "",
        "onUpdate:checkedKeys": updateCheckedKeys,
        keyField: "id",
        defaultExpandedKeys: defaultExpandedKeys.value,
        data: [_ctx.rootNode],
        filter: treeFilter,
        nodeProps: treeNodeProps,
        renderLabel,
        style: {
          "--n-border-color": "rgb(239, 239, 245)"
        }
      }, null, 8, ["defaultExpandedKeys", "data", "filter", "nodeProps", "renderLabel"])]);
    };
  }
});
const _hoisted_1 = {
  "h-full": "",
  flex: "",
  "gap-5px": "",
  "p-5px": "",
  "box-border": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SnapshotPage",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const title = useTitle();
    const snapshotId = computed(() => String(route.params.snapshotId || ``));
    const showSize = computed(() => {
      const n = Number(route.query.showSize || ``);
      if (!Number.isSafeInteger(n) || n <= 0) {
        return 2e3;
      }
      return n;
    });
    const screenshotUrl = shallowRef(``);
    const snapshot = shallowRef();
    watchEffect(async () => {
      const localSnapshot = await snapshotStorage.getItem(snapshotId.value);
      if (!localSnapshot) {
        message.error(`快照数据缺失`);
        return;
      }
      if (gmOk()) {
        setTimeout(async () => {
          exportSnapshotAsJpgUrl(localSnapshot);
          if (!githubZipStorage[localSnapshot.id]) {
            exportSnapshotAsZipUrl(
              await snapshotStorage.getItem(snapshotId.value)
            );
          }
        }, 1e3);
      }
      if (localSnapshot.nodes.length > showSize.value) {
        message.warning(
          `当前展示节点数量为${showSize.value}
之后的${localSnapshot.nodes.length - showSize.value}个节点将被丢弃
使用showSize查询参数可以修改展示数量`
        );
        localSnapshot.nodes = localSnapshot.nodes.slice(0, showSize.value);
      }
      const bf = await screenshotStorage.getItem(snapshotId.value);
      if (!bf) {
        message.create(`截屏数据缺失`);
        return;
      }
      screenshotUrl.value = URL.createObjectURL(
        new Blob([bf], {
          type: "image/png"
        })
      );
      snapshot.value = localSnapshot;
      rootNode.value = listToTree(localSnapshot.nodes);
      title.value = "快照-" + localSnapshot.appName || localSnapshot.appId;
      await delay(500);
      if (!focusNode.value) {
        focusNode.value = rootNode.value;
      }
    });
    const rootNode = shallowRef();
    const focusNode = shallowRef();
    const onDelete = async () => {
      message.success(`删除成功,即将回到首页`);
      await delay(2e3);
      router.replace({
        path: `/`
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        screenshotUrl.value && snapshot.value ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          url: screenshotUrl.value,
          snapshot: snapshot.value,
          rootNode: rootNode.value,
          focusNode: focusNode.value,
          onUpdateFocusNode: _cache[0] || (_cache[0] = ($event) => focusNode.value = $event)
        }, null, 8, ["url", "snapshot", "rootNode", "focusNode"])) : createCommentVNode("", true),
        snapshot.value && rootNode.value ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          rootNode: rootNode.value,
          snapshot: snapshot.value,
          focusNode: focusNode.value,
          onUpdateFocusNode: _cache[1] || (_cache[1] = ($event) => focusNode.value = $event),
          class: "flex-1"
        }, {
          default: withCtx(() => [
            snapshot.value ? (openBlock(), createBlock(_sfc_main$6, {
              key: 0,
              snapshot: snapshot.value,
              onDelete,
              showPreview: false
            }, null, 8, ["snapshot"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["rootNode", "snapshot", "focusNode"])) : createCommentVNode("", true),
        focusNode.value ? (openBlock(), createBlock(_sfc_main$4, {
          key: 2,
          focusNode: focusNode.value
        }, null, 8, ["focusNode"])) : createCommentVNode("", true),
        rootNode.value ? (openBlock(), createBlock(_sfc_main$2, {
          key: 3,
          snapshot: snapshot.value,
          rootNode: rootNode.value,
          onUpdateFocusNode: _cache[2] || (_cache[2] = ($event) => focusNode.value = $event)
        }, null, 8, ["snapshot", "rootNode"])) : createCommentVNode("", true)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
