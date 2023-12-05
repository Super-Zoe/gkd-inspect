import { A as ref, e as watch, r as reactive, as as hasInstance, at as onBeforeMount, au as onBeforeUnmount, av as off, aw as readonly, ax as on, d as defineComponent, ay as useSsrAdapter, a6 as onMounted, ae as nextTick, n as h, ah as renderSlot, az as resizeObserverManager, X as createTheme, p as commonLight, Y as scrollbarLight, Q as inject, P as useMemo, a4 as render, U as NBaseIcon, aA as Transition, q as cB, x as cE, v as cM, y as c$1, _ as cNotM, aB as fadeInScaleUpTransition, B as useTheme, J as toRef, c as computed, C as provide, E as useThemeClass, aC as resolveWrappedSlot, a3 as NBaseLoading, aD as NScrollbar, ad as resolveSlot, ab as depx, a1 as createKey, aa as getMargin, Z as changeColor, z as useConfig, D as useRtl, aE as NBaseClose, G as createInjectionKey, H as call, aF as color2Class, w as watchEffect, aG as Wrapper, F as Fragment, aH as keysOf, aI as keep, aJ as useFormItem, aK as isMounted, K as withDirectives, L as vShow, aL as clickoutside, aM as getPreciseEventTarget, aN as markEventEffectPerformed, aO as buttonLight, W as composite, aP as useMergedClsPrefix, aQ as useStyle, aR as mergeProps, j as NButton, aS as popoverBodyInjectionKey, aT as warn, aU as modalBodyInjectionKey, aV as drawerBodyInjectionKey, ac as XScrollbar, a8 as pxfy, a2 as NIconSwitchTransition, af as onUnmounted, aW as VResizeObserver, aX as cssrAnchorMetaName$1, a7 as repeat, a9 as iconSwitchTransition, $ as insideModal, a0 as insidePopover, O as createId, a as shallowReactive, b as createVNode } from "./index-df0b30b5.js";
import { y as cssrAnchorMetaName, z as c, g as emptyLight, A as internalSelectionMenuInjectionKey, V as VVirtualList, l as createIndexGetter, i as happensIn, B as internalSelectionMenuBodyInjectionKey, m as NEmpty, D as popoverLight, E as NBaseSuffix, b as NPopover, j as createTreeMate, F as popoverBaseProps, e as useMergedState, G as useLocale, H as useCompitable, I as useAdjustedTo, J as VBinder, K as VTarget, L as VFollower, M as inputLight, N as NInput, f as checkboxLight, O as radioLight, P as ellipsisLight, Q as ellipsisProps, R as style$9, o as NEllipsis, S as createLineClampClass, T as createCursorClass, U as formatLength, W as NCheckboxGroup, h as NCheckbox, r as NRadioGroup, q as NRadio, d as NIcon, C as ChevronRightIcon, X as renderArrow, Y as ChevronDownIcon, Z as get, _ as beforeNextFrameOnce, t as dayjs, v as getDevice } from "./node-8fda318c.js";
import { x as omit } from "./storage-71d9086d.js";
function smallerSize(size) {
  switch (size) {
    case "tiny":
      return "mini";
    case "small":
      return "tiny";
    case "medium":
      return "small";
    case "large":
      return "medium";
    case "huge":
      return "large";
  }
  throw Error(`${size} has no smaller size.`);
}
function getTitleAttribute(value) {
  switch (typeof value) {
    case "string":
      return value || void 0;
    case "number":
      return String(value);
    default:
      return void 0;
  }
}
function createRefSetter(ref2) {
  return (inst) => {
    if (inst) {
      ref2.value = inst.$el;
    } else {
      ref2.value = null;
    }
  };
}
function mergeEventHandlers(handlers) {
  const filteredHandlers = handlers.filter((handler) => handler !== void 0);
  if (filteredHandlers.length === 0)
    return void 0;
  if (filteredHandlers.length === 1)
    return filteredHandlers[0];
  return (e) => {
    handlers.forEach((handler) => {
      if (handler) {
        handler(e);
      }
    });
  };
}
function useDeferredTrue(valueRef, delay, shouldDelayRef) {
  if (!delay)
    return valueRef;
  const delayedRef = ref(valueRef.value);
  let timerId = null;
  watch(valueRef, (value) => {
    if (timerId !== null)
      window.clearTimeout(timerId);
    if (value === true) {
      if (shouldDelayRef && !shouldDelayRef.value) {
        delayedRef.value = true;
      } else {
        timerId = window.setTimeout(() => {
          delayedRef.value = true;
        }, delay);
      }
    } else {
      delayedRef.value = false;
    }
  });
  return delayedRef;
}
function useKeyboard(options = {}, enabledRef) {
  const state = reactive({
    ctrl: false,
    command: false,
    win: false,
    shift: false,
    tab: false
  });
  const { keydown, keyup } = options;
  const keydownHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = true;
        break;
      case "Meta":
        state.command = true;
        state.win = true;
        break;
      case "Shift":
        state.shift = true;
        break;
      case "Tab":
        state.tab = true;
        break;
    }
    if (keydown !== void 0) {
      Object.keys(keydown).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keydown[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const keyupHandler = (e) => {
    switch (e.key) {
      case "Control":
        state.ctrl = false;
        break;
      case "Meta":
        state.command = false;
        state.win = false;
        break;
      case "Shift":
        state.shift = false;
        break;
      case "Tab":
        state.tab = false;
        break;
    }
    if (keyup !== void 0) {
      Object.keys(keyup).forEach((key) => {
        if (key !== e.key)
          return;
        const handler = keyup[key];
        if (typeof handler === "function") {
          handler(e);
        } else {
          const { stop = false, prevent = false } = handler;
          if (stop)
            e.stopPropagation();
          if (prevent)
            e.preventDefault();
          handler.handler(e);
        }
      });
    }
  };
  const setup = () => {
    if (enabledRef === void 0 || enabledRef.value) {
      on("keydown", document, keydownHandler);
      on("keyup", document, keyupHandler);
    }
    if (enabledRef !== void 0) {
      watch(enabledRef, (value) => {
        if (value) {
          on("keydown", document, keydownHandler);
          on("keyup", document, keyupHandler);
        } else {
          off("keydown", document, keydownHandler);
          off("keyup", document, keyupHandler);
        }
      });
    }
  };
  if (hasInstance()) {
    onBeforeMount(setup);
    onBeforeUnmount(() => {
      if (enabledRef === void 0 || enabledRef.value) {
        off("keydown", document, keydownHandler);
        off("keyup", document, keyupHandler);
      }
    });
  } else {
    setup();
  }
  return readonly(state);
}
const hiddenAttr = "v-hidden";
const style$8 = c("[v-hidden]", {
  display: "none!important"
});
const VOverflow = defineComponent({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateOverflow: Function
  },
  setup(props, { slots }) {
    const selfRef = ref(null);
    const counterRef = ref(null);
    function deriveCounter() {
      const { value: self2 } = selfRef;
      const { getCounter, getTail } = props;
      let counter;
      if (getCounter !== void 0)
        counter = getCounter();
      else {
        counter = counterRef.value;
      }
      if (!self2 || !counter)
        return;
      if (counter.hasAttribute(hiddenAttr)) {
        counter.removeAttribute(hiddenAttr);
      }
      const { children } = self2;
      const containerWidth = self2.offsetWidth;
      const childWidths = [];
      const tail = slots.tail ? getTail === null || getTail === void 0 ? void 0 : getTail() : null;
      let childWidthSum = tail ? tail.offsetWidth : 0;
      let overflow = false;
      const len = self2.children.length - (slots.tail ? 1 : 0);
      for (let i = 0; i < len - 1; ++i) {
        if (i < 0)
          continue;
        const child = children[i];
        if (overflow) {
          if (!child.hasAttribute(hiddenAttr)) {
            child.setAttribute(hiddenAttr, "");
          }
          continue;
        } else if (child.hasAttribute(hiddenAttr)) {
          child.removeAttribute(hiddenAttr);
        }
        const childWidth = child.offsetWidth;
        childWidthSum += childWidth;
        childWidths[i] = childWidth;
        if (childWidthSum > containerWidth) {
          const { updateCounter } = props;
          for (let j = i; j >= 0; --j) {
            const restCount = len - 1 - j;
            if (updateCounter !== void 0) {
              updateCounter(restCount);
            } else {
              counter.textContent = `${restCount}`;
            }
            const counterWidth = counter.offsetWidth;
            childWidthSum -= childWidths[j];
            if (childWidthSum + counterWidth <= containerWidth || j === 0) {
              overflow = true;
              i = j - 1;
              if (tail) {
                if (i === -1) {
                  tail.style.maxWidth = `${containerWidth - counterWidth}px`;
                  tail.style.boxSizing = "border-box";
                } else {
                  tail.style.maxWidth = "";
                }
              }
              break;
            }
          }
        }
      }
      const { onUpdateOverflow } = props;
      if (!overflow) {
        if (onUpdateOverflow !== void 0) {
          onUpdateOverflow(false);
        }
        counter.setAttribute(hiddenAttr, "");
      } else {
        if (onUpdateOverflow !== void 0) {
          onUpdateOverflow(true);
        }
      }
    }
    const ssrAdapter = useSsrAdapter();
    style$8.mount({
      id: "vueuc/overflow",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    onMounted(deriveCounter);
    return {
      selfRef,
      counterRef,
      sync: deriveCounter
    };
  },
  render() {
    const { $slots } = this;
    nextTick(this.sync);
    return h("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      renderSlot($slots, "default"),
      // $slots.counter should only has 1 element
      $slots.counter ? $slots.counter() : h("span", {
        style: {
          display: "inline-block"
        },
        ref: "counterRef"
      }),
      // $slots.tail should only has 1 element
      $slots.tail ? $slots.tail() : null
    ]);
  }
});
function useOnResize(elRef, onResize) {
  if (onResize) {
    onMounted(() => {
      const { value: el } = elRef;
      if (el) {
        resizeObserverManager.registerHandler(el, onResize);
      }
    });
    onBeforeUnmount(() => {
      const { value: el } = elRef;
      if (el) {
        resizeObserverManager.unregisterHandler(el);
      }
    });
  }
}
const ArrowDownIcon = defineComponent({
  name: "ArrowDown",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
      h(
        "g",
        { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" },
        h(
          "g",
          { "fill-rule": "nonzero" },
          h("path", { d: "M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z" })
        )
      )
    );
  }
});
const BackwardIcon = defineComponent({
  name: "Backward",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z", fill: "currentColor" })
    );
  }
});
const FinishedIcon = defineComponent({
  name: "Checkmark",
  render() {
    return h(
      "svg",
      { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
      h(
        "g",
        { fill: "none" },
        h("path", { d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z", fill: "currentColor" })
      )
    );
  }
});
const FastBackwardIcon = defineComponent({
  name: "FastBackward",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
      h(
        "g",
        { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        h(
          "g",
          { fill: "currentColor", "fill-rule": "nonzero" },
          h("path", { d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z" })
        )
      )
    );
  }
});
const FastForwardIcon = defineComponent({
  name: "FastForward",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
      h(
        "g",
        { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        h(
          "g",
          { fill: "currentColor", "fill-rule": "nonzero" },
          h("path", { d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z" })
        )
      )
    );
  }
});
const FilterIcon = defineComponent({
  name: "Filter",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 28 28", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
      h(
        "g",
        { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" },
        h(
          "g",
          { "fill-rule": "nonzero" },
          h("path", { d: "M17,19 C17.5522847,19 18,19.4477153 18,20 C18,20.5522847 17.5522847,21 17,21 L11,21 C10.4477153,21 10,20.5522847 10,20 C10,19.4477153 10.4477153,19 11,19 L17,19 Z M21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5522847 21.5522847,15 21,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L21,13 Z M24,7 C24.5522847,7 25,7.44771525 25,8 C25,8.55228475 24.5522847,9 24,9 L4,9 C3.44771525,9 3,8.55228475 3,8 C3,7.44771525 3.44771525,7 4,7 L24,7 Z" })
        )
      )
    );
  }
});
const ForwardIcon = defineComponent({
  name: "Forward",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      h("path", { d: "M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z", fill: "currentColor" })
    );
  }
});
const MoreIcon = defineComponent({
  name: "More",
  render() {
    return h(
      "svg",
      { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
      h(
        "g",
        { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        h(
          "g",
          { fill: "currentColor", "fill-rule": "nonzero" },
          h("path", { d: "M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z" })
        )
      )
    );
  }
});
const FocusDetector = defineComponent({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(props) {
    return () => h("div", { style: "width: 0; height: 0", tabindex: 0, onFocus: props.onFocus, onBlur: props.onBlur });
  }
});
const commonVariables$4 = {
  height: "calc(var(--n-option-height) * 7.6)",
  paddingSmall: "4px 0",
  paddingMedium: "4px 0",
  paddingLarge: "4px 0",
  paddingHuge: "4px 0",
  optionPaddingSmall: "0 12px",
  optionPaddingMedium: "0 12px",
  optionPaddingLarge: "0 12px",
  optionPaddingHuge: "0 12px",
  loadingSize: "18px"
};
const self$7 = (vars) => {
  const { borderRadius, popoverColor, textColor3, dividerColor, textColor2, primaryColorPressed, textColorDisabled, primaryColor, opacityDisabled, hoverColor, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge, heightSmall, heightMedium, heightLarge, heightHuge } = vars;
  return Object.assign(Object.assign({}, commonVariables$4), { optionFontSizeSmall: fontSizeSmall, optionFontSizeMedium: fontSizeMedium, optionFontSizeLarge: fontSizeLarge, optionFontSizeHuge: fontSizeHuge, optionHeightSmall: heightSmall, optionHeightMedium: heightMedium, optionHeightLarge: heightLarge, optionHeightHuge: heightHuge, borderRadius, color: popoverColor, groupHeaderTextColor: textColor3, actionDividerColor: dividerColor, optionTextColor: textColor2, optionTextColorPressed: primaryColorPressed, optionTextColorDisabled: textColorDisabled, optionTextColorActive: primaryColor, optionOpacityDisabled: opacityDisabled, optionCheckColor: primaryColor, optionColorPending: hoverColor, optionColorActive: "rgba(0, 0, 0, 0)", optionColorActivePending: hoverColor, actionTextColor: textColor2, loadingColor: primaryColor });
};
const internalSelectMenuLight = createTheme({
  name: "InternalSelectMenu",
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self: self$7
});
const internalSelectMenuLight$1 = internalSelectMenuLight;
function renderCheckMark(show, clsPrefix) {
  return h(Transition, { name: "fade-in-scale-up-transition" }, {
    default: () => show ? h(NBaseIcon, { clsPrefix, class: `${clsPrefix}-base-select-option__check` }, {
      default: () => h(FinishedIcon)
    }) : null
  });
}
const NSelectOption = defineComponent({
  name: "NBaseSelectOption",
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
    const {
      valueRef,
      pendingTmNodeRef,
      multipleRef,
      valueSetRef,
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      valueFieldRef,
      showCheckmarkRef,
      nodePropsRef,
      handleOptionClick,
      handleOptionMouseEnter
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(internalSelectionMenuInjectionKey);
    const isPendingRef = useMemo(() => {
      const { value: pendingTmNode } = pendingTmNodeRef;
      if (!pendingTmNode)
        return false;
      return props.tmNode.key === pendingTmNode.key;
    });
    function handleClick(e) {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      handleOptionClick(e, tmNode);
    }
    function handleMouseEnter(e) {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      handleOptionMouseEnter(e, tmNode);
    }
    function handleMouseMove(e) {
      const { tmNode } = props;
      const { value: isPending } = isPendingRef;
      if (tmNode.disabled || isPending)
        return;
      handleOptionMouseEnter(e, tmNode);
    }
    return {
      multiple: multipleRef,
      isGrouped: useMemo(() => {
        const { tmNode } = props;
        const { parent } = tmNode;
        return parent && parent.rawNode.type === "group";
      }),
      showCheckmark: showCheckmarkRef,
      nodeProps: nodePropsRef,
      isPending: isPendingRef,
      isSelected: useMemo(() => {
        const { value } = valueRef;
        const { value: multiple } = multipleRef;
        if (value === null)
          return false;
        const optionValue = props.tmNode.rawNode[valueFieldRef.value];
        if (multiple) {
          const { value: valueSet } = valueSetRef;
          return valueSet.has(optionValue);
        } else {
          return value === optionValue;
        }
      }),
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef,
      handleMouseMove,
      handleMouseEnter,
      handleClick
    };
  },
  render() {
    const { clsPrefix, tmNode: { rawNode }, isSelected, isPending, isGrouped, showCheckmark, nodeProps, renderOption, renderLabel, handleClick, handleMouseEnter, handleMouseMove } = this;
    const checkmark = renderCheckMark(isSelected, clsPrefix);
    const children = renderLabel ? [renderLabel(rawNode, isSelected), showCheckmark && checkmark] : [
      render(rawNode[this.labelField], rawNode, isSelected),
      showCheckmark && checkmark
    ];
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h(
      "div",
      Object.assign({}, attrs, { class: [
        `${clsPrefix}-base-select-option`,
        rawNode.class,
        attrs === null || attrs === void 0 ? void 0 : attrs.class,
        {
          [`${clsPrefix}-base-select-option--disabled`]: rawNode.disabled,
          [`${clsPrefix}-base-select-option--selected`]: isSelected,
          [`${clsPrefix}-base-select-option--grouped`]: isGrouped,
          [`${clsPrefix}-base-select-option--pending`]: isPending,
          [`${clsPrefix}-base-select-option--show-checkmark`]: showCheckmark
        }
      ], style: [(attrs === null || attrs === void 0 ? void 0 : attrs.style) || "", rawNode.style || ""], onClick: mergeEventHandlers([handleClick, attrs === null || attrs === void 0 ? void 0 : attrs.onClick]), onMouseenter: mergeEventHandlers([
        handleMouseEnter,
        attrs === null || attrs === void 0 ? void 0 : attrs.onMouseenter
      ]), onMousemove: mergeEventHandlers([handleMouseMove, attrs === null || attrs === void 0 ? void 0 : attrs.onMousemove]) }),
      h("div", { class: `${clsPrefix}-base-select-option__content` }, children)
    );
    return rawNode.render ? rawNode.render({ node, option: rawNode, selected: isSelected }) : renderOption ? renderOption({ node, option: rawNode, selected: isSelected }) : node;
  }
});
const NSelectGroupHeader = defineComponent({
  name: "NBaseSelectGroupHeader",
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
  setup() {
    const {
      renderLabelRef,
      renderOptionRef,
      labelFieldRef,
      nodePropsRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(internalSelectionMenuInjectionKey);
    return {
      labelField: labelFieldRef,
      nodeProps: nodePropsRef,
      renderLabel: renderLabelRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    const { clsPrefix, renderLabel, renderOption, nodeProps, tmNode: { rawNode } } = this;
    const attrs = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const children = renderLabel ? renderLabel(rawNode, false) : render(rawNode[this.labelField], rawNode, false);
    const node = h("div", Object.assign({}, attrs, { class: [`${clsPrefix}-base-select-group-header`, attrs === null || attrs === void 0 ? void 0 : attrs.class] }), children);
    return rawNode.render ? rawNode.render({ node, option: rawNode }) : renderOption ? renderOption({ node, option: rawNode, selected: false }) : node;
  }
});
const style$7 = cB("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [cB("scrollbar", `
 max-height: var(--n-height);
 `), cB("virtual-list", `
 max-height: var(--n-height);
 `), cB("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [cE("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), cB("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), cB("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), cE("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), cE("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), cE("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cB("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), cB("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [cM("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), c$1("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), c$1("&:active", `
 color: var(--n-option-text-color-pressed);
 `), cM("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), cM("selected", `
 color: var(--n-option-text-color-active);
 `, [c$1("&::before", `
 background-color: var(--n-option-color-active);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `, [cNotM("selected", `
 color: var(--n-option-text-color-disabled);
 `), cM("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), cE("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [fadeInScaleUpTransition({
  enterScale: "0.5"
})])])]);
const NInternalSelectMenu = defineComponent({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, useTheme.props), {
    clsPrefix: {
      type: String,
      required: true
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    treeMate: {
      type: Object,
      required: true
    },
    multiple: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: true
    },
    // show is used to toggle pending state initialization
    show: {
      type: Boolean,
      default: true
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    nodeProps: Function,
    showCheckmark: { type: Boolean, default: true },
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onResize: Function,
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: true
    },
    inlineThemeDisabled: Boolean,
    // deprecated
    onToggle: Function
  }),
  setup(props) {
    const themeRef = useTheme("InternalSelectMenu", "-internal-select-menu", style$7, internalSelectMenuLight$1, props, toRef(props, "clsPrefix"));
    const selfRef = ref(null);
    const virtualListRef = ref(null);
    const scrollbarRef = ref(null);
    const flattenedNodesRef = computed(() => props.treeMate.getFlattenedNodes());
    const fIndexGetterRef = computed(() => createIndexGetter(flattenedNodesRef.value));
    const pendingNodeRef = ref(null);
    function initPendingNode() {
      const { treeMate } = props;
      let defaultPendingNode = null;
      const { value } = props;
      if (value === null) {
        defaultPendingNode = treeMate.getFirstAvailableNode();
      } else {
        if (props.multiple) {
          defaultPendingNode = treeMate.getNode((value || [])[(value || []).length - 1]);
        } else {
          defaultPendingNode = treeMate.getNode(value);
        }
        if (!defaultPendingNode || defaultPendingNode.disabled) {
          defaultPendingNode = treeMate.getFirstAvailableNode();
        }
      }
      if (defaultPendingNode) {
        setPendingTmNode(defaultPendingNode);
      } else {
        setPendingTmNode(null);
      }
    }
    function clearPendingNodeIfInvalid() {
      const { value: pendingNode } = pendingNodeRef;
      if (pendingNode && !props.treeMate.getNode(pendingNode.key)) {
        pendingNodeRef.value = null;
      }
    }
    let initPendingNodeWatchStopHandle;
    watch(() => props.show, (show) => {
      if (show) {
        initPendingNodeWatchStopHandle = watch(() => props.treeMate, () => {
          if (props.resetMenuOnOptionsChange) {
            if (props.autoPending) {
              initPendingNode();
            } else {
              clearPendingNodeIfInvalid();
            }
            void nextTick(scrollToPendingNode);
          } else {
            clearPendingNodeIfInvalid();
          }
        }, {
          immediate: true
        });
      } else {
        initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
      }
    }, {
      immediate: true
    });
    onBeforeUnmount(() => {
      initPendingNodeWatchStopHandle === null || initPendingNodeWatchStopHandle === void 0 ? void 0 : initPendingNodeWatchStopHandle();
    });
    const itemSizeRef = computed(() => {
      return depx(themeRef.value.self[createKey("optionHeight", props.size)]);
    });
    const paddingRef = computed(() => {
      return getMargin(themeRef.value.self[createKey("padding", props.size)]);
    });
    const valueSetRef = computed(() => {
      if (props.multiple && Array.isArray(props.value)) {
        return new Set(props.value);
      }
      return /* @__PURE__ */ new Set();
    });
    const emptyRef = computed(() => {
      const tmNodes = flattenedNodesRef.value;
      return tmNodes && tmNodes.length === 0;
    });
    function doToggle(tmNode) {
      const { onToggle } = props;
      if (onToggle)
        onToggle(tmNode);
    }
    function doScroll(e) {
      const { onScroll } = props;
      if (onScroll)
        onScroll(e);
    }
    function handleVirtualListScroll(e) {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
      doScroll(e);
    }
    function handleVirtualListResize() {
      var _a;
      (_a = scrollbarRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function getPendingTmNode() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode)
        return pendingTmNode;
      return null;
    }
    function handleOptionMouseEnter(e, tmNode) {
      if (tmNode.disabled)
        return;
      setPendingTmNode(tmNode, false);
    }
    function handleOptionClick(e, tmNode) {
      if (tmNode.disabled)
        return;
      doToggle(tmNode);
    }
    function handleKeyUp(e) {
      var _a;
      if (happensIn(e, "action"))
        return;
      (_a = props.onKeyup) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleKeyDown(e) {
      var _a;
      if (happensIn(e, "action"))
        return;
      (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handleMouseDown(e) {
      var _a;
      (_a = props.onMousedown) === null || _a === void 0 ? void 0 : _a.call(props, e);
      if (props.focusable)
        return;
      e.preventDefault();
    }
    function next() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getNext({ loop: true }), true);
      }
    }
    function prev() {
      const { value: pendingTmNode } = pendingNodeRef;
      if (pendingTmNode) {
        setPendingTmNode(pendingTmNode.getPrev({ loop: true }), true);
      }
    }
    function setPendingTmNode(tmNode, doScroll2 = false) {
      pendingNodeRef.value = tmNode;
      if (doScroll2)
        scrollToPendingNode();
    }
    function scrollToPendingNode() {
      var _a, _b;
      const tmNode = pendingNodeRef.value;
      if (!tmNode)
        return;
      const fIndex = fIndexGetterRef.value(tmNode.key);
      if (fIndex === null)
        return;
      if (props.virtualScroll) {
        (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo({ index: fIndex });
      } else {
        (_b = scrollbarRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo({
          index: fIndex,
          elSize: itemSizeRef.value
        });
      }
    }
    function handleFocusin(e) {
      var _a, _b;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        (_b = props.onFocus) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    function handleFocusout(e) {
      var _a, _b;
      if (!((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        (_b = props.onBlur) === null || _b === void 0 ? void 0 : _b.call(props, e);
      }
    }
    provide(internalSelectionMenuInjectionKey, {
      handleOptionMouseEnter,
      handleOptionClick,
      valueSetRef,
      pendingTmNodeRef: pendingNodeRef,
      nodePropsRef: toRef(props, "nodeProps"),
      showCheckmarkRef: toRef(props, "showCheckmark"),
      multipleRef: toRef(props, "multiple"),
      valueRef: toRef(props, "value"),
      renderLabelRef: toRef(props, "renderLabel"),
      renderOptionRef: toRef(props, "renderOption"),
      labelFieldRef: toRef(props, "labelField"),
      valueFieldRef: toRef(props, "valueField")
    });
    provide(internalSelectionMenuBodyInjectionKey, selfRef);
    onMounted(() => {
      const { value } = scrollbarRef;
      if (value)
        value.sync();
    });
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut }, self: { height, borderRadius, color, groupHeaderTextColor, actionDividerColor, optionTextColorPressed, optionTextColor, optionTextColorDisabled, optionTextColorActive, optionOpacityDisabled, optionCheckColor, actionTextColor, optionColorPending, optionColorActive, loadingColor, loadingSize, optionColorActivePending, [createKey("optionFontSize", size)]: fontSize, [createKey("optionHeight", size)]: optionHeight, [createKey("optionPadding", size)]: optionPadding } } = themeRef.value;
      return {
        "--n-height": height,
        "--n-action-divider-color": actionDividerColor,
        "--n-action-text-color": actionTextColor,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-color": color,
        "--n-option-font-size": fontSize,
        "--n-group-header-text-color": groupHeaderTextColor,
        "--n-option-check-color": optionCheckColor,
        "--n-option-color-pending": optionColorPending,
        "--n-option-color-active": optionColorActive,
        "--n-option-color-active-pending": optionColorActivePending,
        "--n-option-height": optionHeight,
        "--n-option-opacity-disabled": optionOpacityDisabled,
        "--n-option-text-color": optionTextColor,
        "--n-option-text-color-active": optionTextColorActive,
        "--n-option-text-color-disabled": optionTextColorDisabled,
        "--n-option-text-color-pressed": optionTextColorPressed,
        "--n-option-padding": optionPadding,
        "--n-option-padding-left": getMargin(optionPadding, "left"),
        "--n-option-padding-right": getMargin(optionPadding, "right"),
        "--n-loading-color": loadingColor,
        "--n-loading-size": loadingSize
      };
    });
    const { inlineThemeDisabled } = props;
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("internal-select-menu", computed(() => props.size[0]), cssVarsRef, props) : void 0;
    const exposedProps = {
      selfRef,
      next,
      prev,
      getPendingTmNode
    };
    useOnResize(selfRef, props.onResize);
    return Object.assign({
      mergedTheme: themeRef,
      virtualListRef,
      scrollbarRef,
      itemSize: itemSizeRef,
      padding: paddingRef,
      flattenedNodes: flattenedNodesRef,
      empty: emptyRef,
      virtualListContainer() {
        const { value } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.listElRef;
      },
      virtualListContent() {
        const { value } = virtualListRef;
        return value === null || value === void 0 ? void 0 : value.itemsElRef;
      },
      doScroll,
      handleFocusin,
      handleFocusout,
      handleKeyUp,
      handleKeyDown,
      handleMouseDown,
      handleVirtualListResize,
      handleVirtualListScroll,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    }, exposedProps);
  },
  render() {
    const { $slots, virtualScroll, clsPrefix, mergedTheme, themeClass, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { ref: "selfRef", tabindex: this.focusable ? 0 : -1, class: [
        `${clsPrefix}-base-select-menu`,
        themeClass,
        this.multiple && `${clsPrefix}-base-select-menu--multiple`
      ], style: this.cssVars, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onKeyup: this.handleKeyUp, onKeydown: this.handleKeyDown, onMousedown: this.handleMouseDown, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave },
      this.loading ? h(
        "div",
        { class: `${clsPrefix}-base-select-menu__loading` },
        h(NBaseLoading, { clsPrefix, strokeWidth: 20 })
      ) : !this.empty ? h(NScrollbar, { ref: "scrollbarRef", theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, scrollable: this.scrollable, container: virtualScroll ? this.virtualListContainer : void 0, content: virtualScroll ? this.virtualListContent : void 0, onScroll: virtualScroll ? void 0 : this.doScroll }, {
        default: () => {
          return virtualScroll ? h(VVirtualList, { ref: "virtualListRef", class: `${clsPrefix}-virtual-list`, items: this.flattenedNodes, itemSize: this.itemSize, showScrollbar: false, paddingTop: this.padding.top, paddingBottom: this.padding.bottom, onResize: this.handleVirtualListResize, onScroll: this.handleVirtualListScroll, itemResizable: true }, {
            default: ({ item: tmNode }) => {
              return tmNode.isGroup ? h(NSelectGroupHeader, { key: tmNode.key, clsPrefix, tmNode }) : tmNode.ignored ? null : h(NSelectOption, { clsPrefix, key: tmNode.key, tmNode });
            }
          }) : h("div", { class: `${clsPrefix}-base-select-menu-option-wrapper`, style: {
            paddingTop: this.padding.top,
            paddingBottom: this.padding.bottom
          } }, this.flattenedNodes.map((tmNode) => tmNode.isGroup ? h(NSelectGroupHeader, { key: tmNode.key, clsPrefix, tmNode }) : h(NSelectOption, { clsPrefix, key: tmNode.key, tmNode })));
        }
      }) : h("div", { class: `${clsPrefix}-base-select-menu__empty`, "data-empty": true, "data-action": true }, resolveSlot($slots.empty, () => [
        h(NEmpty, { theme: mergedTheme.peers.Empty, themeOverrides: mergedTheme.peerOverrides.Empty })
      ])),
      resolveWrappedSlot($slots.action, (children) => children && [
        h("div", { class: `${clsPrefix}-base-select-menu__action`, "data-action": true, key: "action" }, children),
        h(FocusDetector, { onFocus: this.onTabOut, key: "focus-detector" })
      ])
    );
  }
});
const commonVariables$3 = {
  closeIconSizeTiny: "12px",
  closeIconSizeSmall: "12px",
  closeIconSizeMedium: "14px",
  closeIconSizeLarge: "14px",
  closeSizeTiny: "16px",
  closeSizeSmall: "16px",
  closeSizeMedium: "18px",
  closeSizeLarge: "18px",
  padding: "0 7px",
  closeMargin: "0 0 0 4px",
  closeMarginRtl: "0 4px 0 0"
};
const self$6 = (vars) => {
  const { textColor2, primaryColorHover, primaryColorPressed, primaryColor, infoColor, successColor, warningColor, errorColor, baseColor, borderColor, opacityDisabled, tagColor, closeIconColor, closeIconColorHover, closeIconColorPressed, borderRadiusSmall: borderRadius, fontSizeMini, fontSizeTiny, fontSizeSmall, fontSizeMedium, heightMini, heightTiny, heightSmall, heightMedium, closeColorHover, closeColorPressed, buttonColor2Hover, buttonColor2Pressed, fontWeightStrong } = vars;
  return Object.assign(Object.assign({}, commonVariables$3), {
    closeBorderRadius: borderRadius,
    heightTiny: heightMini,
    heightSmall: heightTiny,
    heightMedium: heightSmall,
    heightLarge: heightMedium,
    borderRadius,
    opacityDisabled,
    fontSizeTiny: fontSizeMini,
    fontSizeSmall: fontSizeTiny,
    fontSizeMedium: fontSizeSmall,
    fontSizeLarge: fontSizeMedium,
    fontWeightStrong,
    // checked
    textColorCheckable: textColor2,
    textColorHoverCheckable: textColor2,
    textColorPressedCheckable: textColor2,
    textColorChecked: baseColor,
    colorCheckable: "#0000",
    colorHoverCheckable: buttonColor2Hover,
    colorPressedCheckable: buttonColor2Pressed,
    colorChecked: primaryColor,
    colorCheckedHover: primaryColorHover,
    colorCheckedPressed: primaryColorPressed,
    // default
    border: `1px solid ${borderColor}`,
    textColor: textColor2,
    color: tagColor,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    borderPrimary: `1px solid ${changeColor(primaryColor, { alpha: 0.3 })}`,
    textColorPrimary: primaryColor,
    colorPrimary: changeColor(primaryColor, { alpha: 0.12 }),
    colorBorderedPrimary: changeColor(primaryColor, { alpha: 0.1 }),
    closeIconColorPrimary: primaryColor,
    closeIconColorHoverPrimary: primaryColor,
    closeIconColorPressedPrimary: primaryColor,
    closeColorHoverPrimary: changeColor(primaryColor, { alpha: 0.12 }),
    closeColorPressedPrimary: changeColor(primaryColor, { alpha: 0.18 }),
    borderInfo: `1px solid ${changeColor(infoColor, { alpha: 0.3 })}`,
    textColorInfo: infoColor,
    colorInfo: changeColor(infoColor, { alpha: 0.12 }),
    colorBorderedInfo: changeColor(infoColor, { alpha: 0.1 }),
    closeIconColorInfo: infoColor,
    closeIconColorHoverInfo: infoColor,
    closeIconColorPressedInfo: infoColor,
    closeColorHoverInfo: changeColor(infoColor, { alpha: 0.12 }),
    closeColorPressedInfo: changeColor(infoColor, { alpha: 0.18 }),
    borderSuccess: `1px solid ${changeColor(successColor, { alpha: 0.3 })}`,
    textColorSuccess: successColor,
    colorSuccess: changeColor(successColor, { alpha: 0.12 }),
    colorBorderedSuccess: changeColor(successColor, { alpha: 0.1 }),
    closeIconColorSuccess: successColor,
    closeIconColorHoverSuccess: successColor,
    closeIconColorPressedSuccess: successColor,
    closeColorHoverSuccess: changeColor(successColor, { alpha: 0.12 }),
    closeColorPressedSuccess: changeColor(successColor, { alpha: 0.18 }),
    borderWarning: `1px solid ${changeColor(warningColor, { alpha: 0.35 })}`,
    textColorWarning: warningColor,
    colorWarning: changeColor(warningColor, { alpha: 0.15 }),
    colorBorderedWarning: changeColor(warningColor, { alpha: 0.12 }),
    closeIconColorWarning: warningColor,
    closeIconColorHoverWarning: warningColor,
    closeIconColorPressedWarning: warningColor,
    closeColorHoverWarning: changeColor(warningColor, { alpha: 0.12 }),
    closeColorPressedWarning: changeColor(warningColor, { alpha: 0.18 }),
    borderError: `1px solid ${changeColor(errorColor, { alpha: 0.23 })}`,
    textColorError: errorColor,
    colorError: changeColor(errorColor, { alpha: 0.1 }),
    colorBorderedError: changeColor(errorColor, { alpha: 0.08 }),
    closeIconColorError: errorColor,
    closeIconColorHoverError: errorColor,
    closeIconColorPressedError: errorColor,
    closeColorHoverError: changeColor(errorColor, { alpha: 0.12 }),
    closeColorPressedError: changeColor(errorColor, { alpha: 0.18 })
  });
};
const tagLight = {
  name: "Tag",
  common: commonLight,
  self: self$6
};
const tagLight$1 = tagLight;
const commonProps = {
  color: Object,
  type: {
    type: String,
    default: "default"
  },
  round: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  closable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  }
};
const style$6 = cB("tag", `
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cE("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), cE("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), cE("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), cE("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cM("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [cE("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), cE("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), cM("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), cM("icon, avatar", [cM("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), cM("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), cM("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-hover-checkable);", [cNotM("checked", "color: var(--n-text-color-hover-checkable);")]), c$1("&:active", "background-color: var(--n-color-pressed-checkable);", [cNotM("checked", "color: var(--n-text-color-pressed-checkable);")])]), cM("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-checked-hover);"), c$1("&:active", "background-color: var(--n-color-checked-pressed);")])])])]);
const tagProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), commonProps), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  checked: Boolean,
  checkable: Boolean,
  strong: Boolean,
  triggerClickOnClose: Boolean,
  onClose: [Array, Function],
  onMouseenter: Function,
  onMouseleave: Function,
  "onUpdate:checked": Function,
  onUpdateChecked: Function,
  // private
  internalCloseFocusable: {
    type: Boolean,
    default: true
  },
  internalCloseIsButtonTag: {
    type: Boolean,
    default: true
  },
  // deprecated
  onCheckedChange: Function
});
const tagInjectionKey = createInjectionKey("n-tag");
const NTag = defineComponent({
  name: "Tag",
  props: tagProps,
  setup(props) {
    const contentRef = ref(null);
    const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Tag", "-tag", style$6, tagLight$1, props, mergedClsPrefixRef);
    provide(tagInjectionKey, {
      roundRef: toRef(props, "round")
    });
    function handleClick(e) {
      if (!props.disabled) {
        if (props.checkable) {
          const { checked, onCheckedChange, onUpdateChecked, "onUpdate:checked": _onUpdateChecked } = props;
          if (onUpdateChecked)
            onUpdateChecked(!checked);
          if (_onUpdateChecked)
            _onUpdateChecked(!checked);
          if (onCheckedChange)
            onCheckedChange(!checked);
        }
      }
    }
    function handleCloseClick(e) {
      if (!props.triggerClickOnClose) {
        e.stopPropagation();
      }
      if (!props.disabled) {
        const { onClose } = props;
        if (onClose)
          call(onClose, e);
      }
    }
    const tagPublicMethods = {
      setTextContent(textContent) {
        const { value } = contentRef;
        if (value)
          value.textContent = textContent;
      }
    };
    const rtlEnabledRef = useRtl("Tag", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { type, size, color: { color, textColor } = {} } = props;
      const { common: { cubicBezierEaseInOut }, self: { padding, closeMargin, closeMarginRtl, borderRadius, opacityDisabled, textColorCheckable, textColorHoverCheckable, textColorPressedCheckable, textColorChecked, colorCheckable, colorHoverCheckable, colorPressedCheckable, colorChecked, colorCheckedHover, colorCheckedPressed, closeBorderRadius, fontWeightStrong, [createKey("colorBordered", type)]: colorBordered, [createKey("closeSize", size)]: closeSize, [createKey("closeIconSize", size)]: closeIconSize, [createKey("fontSize", size)]: fontSize, [createKey("height", size)]: height, [createKey("color", type)]: typedColor, [createKey("textColor", type)]: typeTextColor, [createKey("border", type)]: border, [createKey("closeIconColor", type)]: closeIconColor, [createKey("closeIconColorHover", type)]: closeIconColorHover, [createKey("closeIconColorPressed", type)]: closeIconColorPressed, [createKey("closeColorHover", type)]: closeColorHover, [createKey("closeColorPressed", type)]: closeColorPressed } } = themeRef.value;
      return {
        "--n-font-weight-strong": fontWeightStrong,
        "--n-avatar-size-override": `calc(${height} - 8px)`,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-border": border,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-icon-color-disabled": closeIconColor,
        "--n-close-margin": closeMargin,
        "--n-close-margin-rtl": closeMarginRtl,
        "--n-close-size": closeSize,
        "--n-color": color || (mergedBorderedRef.value ? colorBordered : typedColor),
        "--n-color-checkable": colorCheckable,
        "--n-color-checked": colorChecked,
        "--n-color-checked-hover": colorCheckedHover,
        "--n-color-checked-pressed": colorCheckedPressed,
        "--n-color-hover-checkable": colorHoverCheckable,
        "--n-color-pressed-checkable": colorPressedCheckable,
        "--n-font-size": fontSize,
        "--n-height": height,
        "--n-opacity-disabled": opacityDisabled,
        "--n-padding": padding,
        "--n-text-color": textColor || typeTextColor,
        "--n-text-color-checkable": textColorCheckable,
        "--n-text-color-checked": textColorChecked,
        "--n-text-color-hover-checkable": textColorHoverCheckable,
        "--n-text-color-pressed-checkable": textColorPressedCheckable
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tag", computed(() => {
      let hash = "";
      const { type, size, color: { color, textColor } = {} } = props;
      hash += type[0];
      hash += size[0];
      if (color) {
        hash += `a${color2Class(color)}`;
      }
      if (textColor) {
        hash += `b${color2Class(textColor)}`;
      }
      if (mergedBorderedRef.value) {
        hash += "c";
      }
      return hash;
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, tagPublicMethods), {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      contentRef,
      mergedBordered: mergedBorderedRef,
      handleClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b;
    const { mergedClsPrefix, rtlEnabled, closable, color: { borderColor } = {}, round, onRender, $slots } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const avatarNode = resolveWrappedSlot($slots.avatar, (children) => children && h("div", { class: `${mergedClsPrefix}-tag__avatar` }, children));
    const iconNode = resolveWrappedSlot($slots.icon, (children) => children && h("div", { class: `${mergedClsPrefix}-tag__icon` }, children));
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-tag`,
        this.themeClass,
        {
          [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
          [`${mergedClsPrefix}-tag--strong`]: this.strong,
          [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
          [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
          [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
          [`${mergedClsPrefix}-tag--round`]: round,
          [`${mergedClsPrefix}-tag--avatar`]: avatarNode,
          [`${mergedClsPrefix}-tag--icon`]: iconNode,
          [`${mergedClsPrefix}-tag--closable`]: closable
        }
      ], style: this.cssVars, onClick: this.handleClick, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave },
      iconNode || avatarNode,
      h("span", { class: `${mergedClsPrefix}-tag__content`, ref: "contentRef" }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)),
      !this.checkable && closable ? h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-tag__close`, disabled: this.disabled, onClick: this.handleCloseClick, focusable: this.internalCloseFocusable, round, isButtonTag: this.internalCloseIsButtonTag, absolute: true }) : null,
      !this.checkable && this.mergedBordered ? h("div", { class: `${mergedClsPrefix}-tag__border`, style: { borderColor } }) : null
    );
  }
});
const commonVars = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
const self$5 = (vars) => {
  const { borderRadius, textColor2, textColorDisabled, inputColor, inputColorDisabled, primaryColor, primaryColorHover, warningColor, warningColorHover, errorColor, errorColorHover, borderColor, iconColor, iconColorDisabled, clearColor, clearColorHover, clearColorPressed, placeholderColor, placeholderColorDisabled, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightTiny, heightSmall, heightMedium, heightLarge } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius,
    // default
    textColor: textColor2,
    textColorDisabled,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorActive: inputColor,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderActive: `1px solid ${primaryColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    caretColor: primaryColor,
    arrowColor: iconColor,
    arrowColorDisabled: iconColorDisabled,
    loadingColor: primaryColor,
    // warning
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    borderActiveWarning: `1px solid ${warningColor}`,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    colorActiveWarning: inputColor,
    caretColorWarning: warningColor,
    // error
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    borderActiveError: `1px solid ${errorColor}`,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    colorActiveError: inputColor,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed
  });
};
const internalSelectionLight = createTheme({
  name: "InternalSelection",
  common: commonLight,
  peers: {
    Popover: popoverLight
  },
  self: self$5
});
const internalSelectionLight$1 = internalSelectionLight;
const style$5 = c$1([cB("base-selection", `
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [cB("base-loading", `
 color: var(--n-loading-color);
 `), cB("base-selection-tags", "min-height: var(--n-height);"), cE("border, state-border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE("state-border", `
 z-index: 1;
 border-color: #0000;
 `), cB("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [cE("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), cB("base-selection-overlay", `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [cE("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cB("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [cE("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), cB("base-selection-tags", `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("base-selection-label", `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [cB("base-selection-input", `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [cE("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), cE("render-label", `
 color: var(--n-text-color);
 `)]), cNotM("disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), cM("focus", [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), cB("base-selection-label", "background-color: var(--n-color-active);"), cB("base-selection-tags", "background-color: var(--n-color-active);")])]), cM("disabled", "cursor: not-allowed;", [cE("arrow", `
 color: var(--n-arrow-color-disabled);
 `), cB("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cB("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), cE("render-label", `
 color: var(--n-text-color-disabled);
 `)]), cB("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), cB("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), cB("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [cE("input", `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), cE("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((status) => cM(`${status}-status`, [cE("state-border", `border: var(--n-border-${status});`), cNotM("disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover-${status});
 border: var(--n-border-hover-${status});
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active-${status});
 border: var(--n-border-active-${status});
 `), cB("base-selection-label", `background-color: var(--n-color-active-${status});`), cB("base-selection-tags", `background-color: var(--n-color-active-${status});`)]), cM("focus", [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]), cB("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), cB("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [c$1("&:last-child", "padding-right: 0;"), cB("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [cE("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]);
const NInternalSelection = defineComponent({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, useTheme.props), { clsPrefix: {
    type: String,
    required: true
  }, bordered: {
    type: Boolean,
    default: void 0
  }, active: Boolean, pattern: {
    type: String,
    default: ""
  }, placeholder: String, selectedOption: {
    type: Object,
    default: null
  }, selectedOptions: {
    type: Array,
    default: null
  }, labelField: { type: String, default: "label" }, valueField: {
    type: String,
    default: "value"
  }, multiple: Boolean, filterable: Boolean, clearable: Boolean, disabled: Boolean, size: {
    type: String,
    default: "medium"
  }, loading: Boolean, autofocus: Boolean, showArrow: {
    type: Boolean,
    default: true
  }, inputProps: Object, focused: Boolean, renderTag: Function, onKeydown: Function, onClick: Function, onBlur: Function, onFocus: Function, onDeleteOption: Function, maxTagCount: [String, Number], onClear: Function, onPatternInput: Function, onPatternFocus: Function, onPatternBlur: Function, renderLabel: Function, status: String, inlineThemeDisabled: Boolean, ignoreComposition: { type: Boolean, default: true }, onResize: Function }),
  setup(props) {
    const patternInputMirrorRef = ref(null);
    const patternInputRef = ref(null);
    const selfRef = ref(null);
    const multipleElRef = ref(null);
    const singleElRef = ref(null);
    const patternInputWrapperRef = ref(null);
    const counterRef = ref(null);
    const counterWrapperRef = ref(null);
    const overflowRef = ref(null);
    const inputTagElRef = ref(null);
    const showTagsPopoverRef = ref(false);
    const patternInputFocusedRef = ref(false);
    const hoverRef = ref(false);
    const themeRef = useTheme("InternalSelection", "-internal-selection", style$5, internalSelectionLight$1, props, toRef(props, "clsPrefix"));
    const mergedClearableRef = computed(() => {
      return props.clearable && !props.disabled && (hoverRef.value || props.active);
    });
    const filterablePlaceholderRef = computed(() => {
      return props.selectedOption ? props.renderTag ? props.renderTag({
        option: props.selectedOption,
        handleClose: () => {
        }
      }) : props.renderLabel ? props.renderLabel(props.selectedOption, true) : render(props.selectedOption[props.labelField], props.selectedOption, true) : props.placeholder;
    });
    const labelRef = computed(() => {
      const option = props.selectedOption;
      if (!option)
        return void 0;
      return option[props.labelField];
    });
    const selectedRef = computed(() => {
      if (props.multiple) {
        return !!(Array.isArray(props.selectedOptions) && props.selectedOptions.length);
      } else {
        return props.selectedOption !== null;
      }
    });
    function syncMirrorWidth() {
      var _a;
      const { value: patternInputMirrorEl } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const { value: patternInputEl } = patternInputRef;
        if (patternInputEl) {
          patternInputEl.style.width = `${patternInputMirrorEl.offsetWidth}px`;
          if (props.maxTagCount !== "responsive") {
            (_a = overflowRef.value) === null || _a === void 0 ? void 0 : _a.sync();
          }
        }
      }
    }
    function hideInputTag() {
      const { value: inputTagEl } = inputTagElRef;
      if (inputTagEl)
        inputTagEl.style.display = "none";
    }
    function showInputTag() {
      const { value: inputTagEl } = inputTagElRef;
      if (inputTagEl)
        inputTagEl.style.display = "inline-block";
    }
    watch(toRef(props, "active"), (value) => {
      if (!value)
        hideInputTag();
    });
    watch(toRef(props, "pattern"), () => {
      if (props.multiple) {
        void nextTick(syncMirrorWidth);
      }
    });
    function doFocus(e) {
      const { onFocus } = props;
      if (onFocus)
        onFocus(e);
    }
    function doBlur(e) {
      const { onBlur } = props;
      if (onBlur)
        onBlur(e);
    }
    function doDeleteOption(value) {
      const { onDeleteOption } = props;
      if (onDeleteOption)
        onDeleteOption(value);
    }
    function doClear(e) {
      const { onClear } = props;
      if (onClear)
        onClear(e);
    }
    function doPatternInput(value) {
      const { onPatternInput } = props;
      if (onPatternInput)
        onPatternInput(value);
    }
    function handleFocusin(e) {
      var _a;
      if (!e.relatedTarget || !((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))) {
        doFocus(e);
      }
    }
    function handleFocusout(e) {
      var _a;
      if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.relatedTarget))
        return;
      doBlur(e);
    }
    function handleClear(e) {
      doClear(e);
    }
    function handleMouseEnter() {
      hoverRef.value = true;
    }
    function handleMouseLeave() {
      hoverRef.value = false;
    }
    function handleMouseDown(e) {
      if (!props.active || !props.filterable)
        return;
      if (e.target === patternInputRef.value)
        return;
      e.preventDefault();
    }
    function handleDeleteOption(option) {
      doDeleteOption(option);
    }
    function handlePatternKeyDown(e) {
      if (e.key === "Backspace" && !isComposingRef.value) {
        if (!props.pattern.length) {
          const { selectedOptions } = props;
          if (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length) {
            handleDeleteOption(selectedOptions[selectedOptions.length - 1]);
          }
        }
      }
    }
    const isComposingRef = ref(false);
    let cachedInputEvent = null;
    function handlePatternInputInput(e) {
      const { value: patternInputMirrorEl } = patternInputMirrorRef;
      if (patternInputMirrorEl) {
        const inputText = e.target.value;
        patternInputMirrorEl.textContent = inputText;
        syncMirrorWidth();
      }
      if (props.ignoreComposition) {
        if (!isComposingRef.value) {
          doPatternInput(e);
        } else {
          cachedInputEvent = e;
        }
      } else {
        doPatternInput(e);
      }
    }
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd() {
      isComposingRef.value = false;
      if (props.ignoreComposition) {
        doPatternInput(cachedInputEvent);
      }
      cachedInputEvent = null;
    }
    function handlePatternInputFocus(e) {
      var _a;
      patternInputFocusedRef.value = true;
      (_a = props.onPatternFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function handlePatternInputBlur(e) {
      var _a;
      patternInputFocusedRef.value = false;
      (_a = props.onPatternBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }
    function blur() {
      var _a, _b;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.blur();
        (_b = patternInputRef.value) === null || _b === void 0 ? void 0 : _b.blur();
      } else if (props.multiple) {
        const { value: multipleEl } = multipleElRef;
        multipleEl === null || multipleEl === void 0 ? void 0 : multipleEl.blur();
      } else {
        const { value: singleEl } = singleElRef;
        singleEl === null || singleEl === void 0 ? void 0 : singleEl.blur();
      }
    }
    function focus() {
      var _a, _b, _c;
      if (props.filterable) {
        patternInputFocusedRef.value = false;
        (_a = patternInputWrapperRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else if (props.multiple) {
        (_b = multipleElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
      } else {
        (_c = singleElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function focusInput() {
      const { value: patternInputEl } = patternInputRef;
      if (patternInputEl) {
        showInputTag();
        patternInputEl.focus();
      }
    }
    function blurInput() {
      const { value: patternInputEl } = patternInputRef;
      if (patternInputEl) {
        patternInputEl.blur();
      }
    }
    function updateCounter(count) {
      const { value } = counterRef;
      if (value) {
        value.setTextContent(`+${count}`);
      }
    }
    function getCounter() {
      const { value } = counterWrapperRef;
      return value;
    }
    function getTail() {
      return patternInputRef.value;
    }
    let enterTimerId = null;
    function clearEnterTimer() {
      if (enterTimerId !== null)
        window.clearTimeout(enterTimerId);
    }
    function handleMouseEnterCounter() {
      if (props.active)
        return;
      clearEnterTimer();
      enterTimerId = window.setTimeout(() => {
        if (selectedRef.value) {
          showTagsPopoverRef.value = true;
        }
      }, 100);
    }
    function handleMouseLeaveCounter() {
      clearEnterTimer();
    }
    function onPopoverUpdateShow(show) {
      if (!show) {
        clearEnterTimer();
        showTagsPopoverRef.value = false;
      }
    }
    watch(selectedRef, (value) => {
      if (!value) {
        showTagsPopoverRef.value = false;
      }
    });
    onMounted(() => {
      watchEffect(() => {
        const patternInputWrapperEl = patternInputWrapperRef.value;
        if (!patternInputWrapperEl)
          return;
        if (props.disabled) {
          patternInputWrapperEl.removeAttribute("tabindex");
        } else {
          patternInputWrapperEl.tabIndex = patternInputFocusedRef.value ? -1 : 0;
        }
      });
    });
    useOnResize(selfRef, props.onResize);
    const { inlineThemeDisabled } = props;
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut }, self: {
        borderRadius,
        color,
        placeholderColor,
        textColor,
        paddingSingle,
        paddingMultiple,
        caretColor,
        colorDisabled,
        textColorDisabled,
        placeholderColorDisabled,
        colorActive,
        boxShadowFocus,
        boxShadowActive,
        boxShadowHover,
        border,
        borderFocus,
        borderHover,
        borderActive,
        arrowColor,
        arrowColorDisabled,
        loadingColor,
        // form warning
        colorActiveWarning,
        boxShadowFocusWarning,
        boxShadowActiveWarning,
        boxShadowHoverWarning,
        borderWarning,
        borderFocusWarning,
        borderHoverWarning,
        borderActiveWarning,
        // form error
        colorActiveError,
        boxShadowFocusError,
        boxShadowActiveError,
        boxShadowHoverError,
        borderError,
        borderFocusError,
        borderHoverError,
        borderActiveError,
        // clear
        clearColor,
        clearColorHover,
        clearColorPressed,
        clearSize,
        // arrow
        arrowSize,
        [createKey("height", size)]: height,
        [createKey("fontSize", size)]: fontSize
      } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border": border,
        "--n-border-active": borderActive,
        "--n-border-focus": borderFocus,
        "--n-border-hover": borderHover,
        "--n-border-radius": borderRadius,
        "--n-box-shadow-active": boxShadowActive,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-box-shadow-hover": boxShadowHover,
        "--n-caret-color": caretColor,
        "--n-color": color,
        "--n-color-active": colorActive,
        "--n-color-disabled": colorDisabled,
        "--n-font-size": fontSize,
        "--n-height": height,
        "--n-padding-single": paddingSingle,
        "--n-padding-multiple": paddingMultiple,
        "--n-placeholder-color": placeholderColor,
        "--n-placeholder-color-disabled": placeholderColorDisabled,
        "--n-text-color": textColor,
        "--n-text-color-disabled": textColorDisabled,
        "--n-arrow-color": arrowColor,
        "--n-arrow-color-disabled": arrowColorDisabled,
        "--n-loading-color": loadingColor,
        // form warning
        "--n-color-active-warning": colorActiveWarning,
        "--n-box-shadow-focus-warning": boxShadowFocusWarning,
        "--n-box-shadow-active-warning": boxShadowActiveWarning,
        "--n-box-shadow-hover-warning": boxShadowHoverWarning,
        "--n-border-warning": borderWarning,
        "--n-border-focus-warning": borderFocusWarning,
        "--n-border-hover-warning": borderHoverWarning,
        "--n-border-active-warning": borderActiveWarning,
        // form error
        "--n-color-active-error": colorActiveError,
        "--n-box-shadow-focus-error": boxShadowFocusError,
        "--n-box-shadow-active-error": boxShadowActiveError,
        "--n-box-shadow-hover-error": boxShadowHoverError,
        "--n-border-error": borderError,
        "--n-border-focus-error": borderFocusError,
        "--n-border-hover-error": borderHoverError,
        "--n-border-active-error": borderActiveError,
        // clear
        "--n-clear-size": clearSize,
        "--n-clear-color": clearColor,
        "--n-clear-color-hover": clearColorHover,
        "--n-clear-color-pressed": clearColorPressed,
        // arrow-size
        "--n-arrow-size": arrowSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("internal-selection", computed(() => {
      return props.size[0];
    }), cssVarsRef, props) : void 0;
    return {
      mergedTheme: themeRef,
      mergedClearable: mergedClearableRef,
      patternInputFocused: patternInputFocusedRef,
      filterablePlaceholder: filterablePlaceholderRef,
      label: labelRef,
      selected: selectedRef,
      showTagsPanel: showTagsPopoverRef,
      isComposing: isComposingRef,
      // dom ref
      counterRef,
      counterWrapperRef,
      patternInputMirrorRef,
      patternInputRef,
      selfRef,
      multipleElRef,
      singleElRef,
      patternInputWrapperRef,
      overflowRef,
      inputTagElRef,
      handleMouseDown,
      handleFocusin,
      handleClear,
      handleMouseEnter,
      handleMouseLeave,
      handleDeleteOption,
      handlePatternKeyDown,
      handlePatternInputInput,
      handlePatternInputBlur,
      handlePatternInputFocus,
      handleMouseEnterCounter,
      handleMouseLeaveCounter,
      handleFocusout,
      handleCompositionEnd,
      handleCompositionStart,
      onPopoverUpdateShow,
      focus,
      focusInput,
      blur,
      blurInput,
      updateCounter,
      getCounter,
      getTail,
      renderLabel: props.renderLabel,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { status, multiple, size, disabled, filterable, maxTagCount, bordered, clsPrefix, onRender, renderTag, renderLabel } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const maxTagCountResponsive = maxTagCount === "responsive";
    const maxTagCountNumeric = typeof maxTagCount === "number";
    const useMaxTagCount = maxTagCountResponsive || maxTagCountNumeric;
    const suffix = h(Wrapper, null, {
      default: () => h(NBaseSuffix, { clsPrefix, loading: this.loading, showArrow: this.showArrow, showClear: this.mergedClearable && this.selected, onClear: this.handleClear }, {
        default: () => {
          var _a, _b;
          return (_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
      })
    });
    let body;
    if (multiple) {
      const { labelField } = this;
      const createTag = (option) => h("div", { class: `${clsPrefix}-base-selection-tag-wrapper`, key: option.value }, renderTag ? renderTag({
        option,
        handleClose: () => {
          this.handleDeleteOption(option);
        }
      }) : h(NTag, { size, closable: !option.disabled, disabled, onClose: () => {
        this.handleDeleteOption(option);
      }, internalCloseIsButtonTag: false, internalCloseFocusable: false }, {
        default: () => renderLabel ? renderLabel(option, true) : render(option[labelField], option, true)
      }));
      const createOriginalTagNodes = () => (maxTagCountNumeric ? this.selectedOptions.slice(0, maxTagCount) : this.selectedOptions).map(createTag);
      const input = filterable ? h(
        "div",
        { class: `${clsPrefix}-base-selection-input-tag`, ref: "inputTagElRef", key: "__input-tag__" },
        h("input", Object.assign({}, this.inputProps, { ref: "patternInputRef", tabindex: -1, disabled, value: this.pattern, autofocus: this.autofocus, class: `${clsPrefix}-base-selection-input-tag__input`, onBlur: this.handlePatternInputBlur, onFocus: this.handlePatternInputFocus, onKeydown: this.handlePatternKeyDown, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })),
        h("span", { ref: "patternInputMirrorRef", class: `${clsPrefix}-base-selection-input-tag__mirror` }, this.pattern)
      ) : null;
      const renderCounter = maxTagCountResponsive ? () => h(
        "div",
        { class: `${clsPrefix}-base-selection-tag-wrapper`, ref: "counterWrapperRef" },
        h(NTag, { size, ref: "counterRef", onMouseenter: this.handleMouseEnterCounter, onMouseleave: this.handleMouseLeaveCounter, disabled })
      ) : void 0;
      let counter;
      if (maxTagCountNumeric) {
        const rest = this.selectedOptions.length - maxTagCount;
        if (rest > 0) {
          counter = h(
            "div",
            { class: `${clsPrefix}-base-selection-tag-wrapper`, key: "__counter__" },
            h(NTag, { size, ref: "counterRef", onMouseenter: this.handleMouseEnterCounter, disabled }, {
              default: () => `+${rest}`
            })
          );
        }
      }
      const tags = maxTagCountResponsive ? filterable ? h(VOverflow, { ref: "overflowRef", updateCounter: this.updateCounter, getCounter: this.getCounter, getTail: this.getTail, style: {
        width: "100%",
        display: "flex",
        overflow: "hidden"
      } }, {
        default: createOriginalTagNodes,
        counter: renderCounter,
        tail: () => input
      }) : h(VOverflow, { ref: "overflowRef", updateCounter: this.updateCounter, getCounter: this.getCounter, style: {
        width: "100%",
        display: "flex",
        overflow: "hidden"
      } }, {
        default: createOriginalTagNodes,
        counter: renderCounter
      }) : maxTagCountNumeric ? createOriginalTagNodes().concat(counter) : createOriginalTagNodes();
      const renderPopover = useMaxTagCount ? () => h("div", { class: `${clsPrefix}-base-selection-popover` }, maxTagCountResponsive ? createOriginalTagNodes() : this.selectedOptions.map(createTag)) : void 0;
      const popoverProps = useMaxTagCount ? {
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: true,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      } : null;
      const showPlaceholder = this.selected ? false : this.active ? !this.pattern && !this.isComposing : true;
      const placeholder = showPlaceholder ? h(
        "div",
        { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay` },
        h("div", { class: `${clsPrefix}-base-selection-placeholder__inner` }, this.placeholder)
      ) : null;
      const popoverTrigger = filterable ? h(
        "div",
        { ref: "patternInputWrapperRef", class: `${clsPrefix}-base-selection-tags` },
        tags,
        maxTagCountResponsive ? null : input,
        suffix
      ) : h(
        "div",
        { ref: "multipleElRef", class: `${clsPrefix}-base-selection-tags`, tabindex: disabled ? void 0 : 0 },
        tags,
        suffix
      );
      body = h(
        Fragment,
        null,
        useMaxTagCount ? h(NPopover, Object.assign({}, popoverProps, { scrollable: true, style: "max-height: calc(var(--v-target-height) * 6.6);" }), {
          trigger: () => popoverTrigger,
          default: renderPopover
        }) : popoverTrigger,
        placeholder
      );
    } else {
      if (filterable) {
        const hasInput = this.pattern || this.isComposing;
        const showPlaceholder = this.active ? !hasInput : !this.selected;
        const showSelectedLabel = this.active ? false : this.selected;
        body = h(
          "div",
          { ref: "patternInputWrapperRef", class: `${clsPrefix}-base-selection-label` },
          h("input", Object.assign({}, this.inputProps, { ref: "patternInputRef", class: `${clsPrefix}-base-selection-input`, value: this.active ? this.pattern : "", placeholder: "", readonly: disabled, disabled, tabindex: -1, autofocus: this.autofocus, onFocus: this.handlePatternInputFocus, onBlur: this.handlePatternInputBlur, onInput: this.handlePatternInputInput, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd })),
          showSelectedLabel ? h(
            "div",
            { class: `${clsPrefix}-base-selection-label__render-label ${clsPrefix}-base-selection-overlay`, key: "input" },
            h("div", { class: `${clsPrefix}-base-selection-overlay__wrapper` }, renderTag ? renderTag({
              option: this.selectedOption,
              handleClose: () => {
              }
            }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))
          ) : null,
          showPlaceholder ? h(
            "div",
            { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`, key: "placeholder" },
            h("div", { class: `${clsPrefix}-base-selection-overlay__wrapper` }, this.filterablePlaceholder)
          ) : null,
          suffix
        );
      } else {
        body = h(
          "div",
          { ref: "singleElRef", class: `${clsPrefix}-base-selection-label`, tabindex: this.disabled ? void 0 : 0 },
          this.label !== void 0 ? h(
            "div",
            { class: `${clsPrefix}-base-selection-input`, title: getTitleAttribute(this.label), key: "input" },
            h("div", { class: `${clsPrefix}-base-selection-input__content` }, renderTag ? renderTag({
              option: this.selectedOption,
              handleClose: () => {
              }
            }) : renderLabel ? renderLabel(this.selectedOption, true) : render(this.label, this.selectedOption, true))
          ) : h(
            "div",
            { class: `${clsPrefix}-base-selection-placeholder ${clsPrefix}-base-selection-overlay`, key: "placeholder" },
            h("div", { class: `${clsPrefix}-base-selection-placeholder__inner` }, this.placeholder)
          ),
          suffix
        );
      }
    }
    return h(
      "div",
      { ref: "selfRef", class: [
        `${clsPrefix}-base-selection`,
        this.themeClass,
        status && `${clsPrefix}-base-selection--${status}-status`,
        {
          [`${clsPrefix}-base-selection--active`]: this.active,
          [`${clsPrefix}-base-selection--selected`]: this.selected || this.active && this.pattern,
          [`${clsPrefix}-base-selection--disabled`]: this.disabled,
          [`${clsPrefix}-base-selection--multiple`]: this.multiple,
          // focus is not controlled by selection itself since it always need
          // to be managed together with menu. provide :focus style will cause
          // many redundant codes.
          [`${clsPrefix}-base-selection--focus`]: this.focused
        }
      ], style: this.cssVars, onClick: this.onClick, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onKeydown: this.onKeydown, onFocusin: this.handleFocusin, onFocusout: this.handleFocusout, onMousedown: this.handleMouseDown },
      body,
      bordered ? h("div", { class: `${clsPrefix}-base-selection__border` }) : null,
      bordered ? h("div", { class: `${clsPrefix}-base-selection__state-border` }) : null
    );
  }
});
function getIsGroup(option) {
  return option.type === "group";
}
function getIgnored(option) {
  return option.type === "ignored";
}
function patternMatched(pattern, value) {
  try {
    return !!(1 + value.toString().toLowerCase().indexOf(pattern.trim().toLowerCase()));
  } catch (err) {
    return false;
  }
}
function createTmOptions(valueField, childrenField) {
  const options = {
    getIsGroup,
    getIgnored,
    getKey(option) {
      if (getIsGroup(option)) {
        return option.name || option.key || "key-required";
      }
      return option[valueField];
    },
    getChildren(option) {
      return option[childrenField];
    }
  };
  return options;
}
function filterOptions(originalOpts, filter, pattern, childrenField) {
  if (!filter)
    return originalOpts;
  function traverse(options) {
    if (!Array.isArray(options))
      return [];
    const filteredOptions = [];
    for (const option of options) {
      if (getIsGroup(option)) {
        const children = traverse(option[childrenField]);
        if (children.length) {
          filteredOptions.push(Object.assign({}, option, {
            [childrenField]: children
          }));
        }
      } else if (getIgnored(option)) {
        continue;
      } else if (filter(pattern, option)) {
        filteredOptions.push(option);
      }
    }
    return filteredOptions;
  }
  return traverse(originalOpts);
}
function createValOptMap(options, valueField, childrenField) {
  const valOptMap = /* @__PURE__ */ new Map();
  options.forEach((option) => {
    if (getIsGroup(option)) {
      option[childrenField].forEach((selectGroupOption) => {
        valOptMap.set(selectGroupOption[valueField], selectGroupOption);
      });
    } else {
      valOptMap.set(option[valueField], option);
    }
  });
  return valOptMap;
}
function self$4(vars) {
  const { boxShadow2 } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const popselectLight = createTheme({
  name: "Popselect",
  common: commonLight,
  peers: {
    Popover: popoverLight,
    InternalSelectMenu: internalSelectMenuLight$1
  },
  self: self$4
});
const popselectLight$1 = popselectLight;
const popselectInjectionKey = createInjectionKey("n-popselect");
const style$4 = cB("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`);
const panelProps = {
  multiple: Boolean,
  value: {
    type: [String, Number, Array],
    default: null
  },
  cancelable: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: "medium"
  },
  scrollable: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onMouseenter: Function,
  onMouseleave: Function,
  renderLabel: Function,
  showCheckmark: {
    type: Boolean,
    default: void 0
  },
  nodeProps: Function,
  virtualScroll: Boolean,
  // deprecated
  onChange: [Function, Array]
};
const panelPropKeys = keysOf(panelProps);
const NPopselectPanel = defineComponent({
  name: "PopselectPanel",
  props: panelProps,
  setup(props) {
    const NPopselect2 = inject(popselectInjectionKey);
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Popselect", "-pop-select", style$4, popselectLight$1, NPopselect2.props, mergedClsPrefixRef);
    const treeMateRef = computed(() => {
      return createTreeMate(props.options, createTmOptions("value", "children"));
    });
    function doUpdateValue(value, option) {
      const { onUpdateValue, "onUpdate:value": _onUpdateValue, onChange } = props;
      if (onUpdateValue)
        call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      if (onChange)
        call(onChange, value, option);
    }
    function handleToggle(tmNode) {
      toggle(tmNode.key);
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action"))
        e.preventDefault();
    }
    function toggle(value) {
      const { value: { getNode } } = treeMateRef;
      if (props.multiple) {
        if (Array.isArray(props.value)) {
          const newValue = [];
          const newOptions = [];
          let shouldAddValue = true;
          props.value.forEach((v) => {
            if (v === value) {
              shouldAddValue = false;
              return;
            }
            const tmNode = getNode(v);
            if (tmNode) {
              newValue.push(tmNode.key);
              newOptions.push(tmNode.rawNode);
            }
          });
          if (shouldAddValue) {
            newValue.push(value);
            newOptions.push(getNode(value).rawNode);
          }
          doUpdateValue(newValue, newOptions);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue([value], [tmNode.rawNode]);
          }
        }
      } else {
        if (props.value === value && props.cancelable) {
          doUpdateValue(null, null);
        } else {
          const tmNode = getNode(value);
          if (tmNode) {
            doUpdateValue(value, tmNode.rawNode);
          }
          const { "onUpdate:show": _onUpdateShow, onUpdateShow } = NPopselect2.props;
          if (_onUpdateShow)
            call(_onUpdateShow, false);
          if (onUpdateShow)
            call(onUpdateShow, false);
          NPopselect2.setShow(false);
        }
      }
      void nextTick(() => {
        NPopselect2.syncPosition();
      });
    }
    watch(toRef(props, "options"), () => {
      void nextTick(() => {
        NPopselect2.syncPosition();
      });
    });
    const cssVarsRef = computed(() => {
      const { self: { menuBoxShadow } } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, NPopselect2.props) : void 0;
    return {
      mergedTheme: NPopselect2.mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      treeMate: treeMateRef,
      handleToggle,
      handleMenuMousedown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(NInternalSelectMenu, { clsPrefix: this.mergedClsPrefix, focusable: true, nodeProps: this.nodeProps, class: [`${this.mergedClsPrefix}-popselect-menu`, this.themeClass], style: this.cssVars, theme: this.mergedTheme.peers.InternalSelectMenu, themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu, multiple: this.multiple, treeMate: this.treeMate, size: this.size, value: this.value, virtualScroll: this.virtualScroll, scrollable: this.scrollable, renderLabel: this.renderLabel, onToggle: this.handleToggle, onMouseenter: this.onMouseenter, onMouseleave: this.onMouseenter, onMousedown: this.handleMenuMousedown, showCheckmark: this.showCheckmark }, {
      action: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      },
      empty: () => {
        var _a2, _b;
        return ((_b = (_a2 = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a2)) || [];
      }
    });
  }
});
const popselectProps = Object.assign(Object.assign(Object.assign(Object.assign({}, useTheme.props), omit(popoverBaseProps, ["showArrow", "arrow"])), { placement: Object.assign(Object.assign({}, popoverBaseProps.placement), { default: "bottom" }), trigger: {
  type: String,
  default: "hover"
} }), panelProps);
const NPopselect = defineComponent({
  name: "Popselect",
  props: popselectProps,
  inheritAttrs: false,
  __popover__: true,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const themeRef = useTheme("Popselect", "-popselect", void 0, popselectLight$1, props, mergedClsPrefixRef);
    const popoverInstRef = ref(null);
    function syncPosition() {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    function setShow(value) {
      var _a;
      (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(value);
    }
    provide(popselectInjectionKey, {
      props,
      mergedThemeRef: themeRef,
      syncPosition,
      setShow
    });
    const exposedMethods = {
      syncPosition,
      setShow
    };
    return Object.assign(Object.assign({}, exposedMethods), { popoverInstRef, mergedTheme: themeRef });
  },
  render() {
    const { mergedTheme } = this;
    const popoverProps = {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      builtinThemeOverrides: {
        padding: "0"
      },
      ref: "popoverInstRef",
      internalRenderBody: (className, ref2, style2, onMouseenter, onMouseleave) => {
        const { $attrs } = this;
        return h(NPopselectPanel, Object.assign({}, $attrs, { class: [$attrs.class, className], style: [$attrs.style, style2] }, keep(this.$props, panelPropKeys), { ref: createRefSetter(ref2), onMouseenter: mergeEventHandlers([
          onMouseenter,
          $attrs.onMouseenter
        ]), onMouseleave: mergeEventHandlers([
          onMouseleave,
          $attrs.onMouseleave
        ]) }), {
          action: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).action) === null || _b === void 0 ? void 0 : _b.call(_a);
          },
          empty: () => {
            var _a, _b;
            return (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a);
          }
        });
      }
    };
    return h(NPopover, Object.assign({}, omit(this.$props, panelPropKeys), popoverProps, { internalDeactivateImmediately: true }), {
      trigger: () => {
        var _a, _b;
        return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
  }
});
function self$3(vars) {
  const { boxShadow2 } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const selectLight = createTheme({
  name: "Select",
  common: commonLight,
  peers: {
    InternalSelection: internalSelectionLight$1,
    InternalSelectMenu: internalSelectMenuLight$1
  },
  self: self$3
});
const selectLight$1 = selectLight;
const style$3 = c$1([cB("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), cB("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
const selectProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  clearFilterAfterSelect: {
    type: Boolean,
    default: true
  },
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  value: [String, Number, Array],
  placeholder: String,
  menuProps: Object,
  multiple: Boolean,
  size: String,
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  remote: Boolean,
  loading: Boolean,
  filter: Function,
  placement: {
    type: String,
    default: "bottom-start"
  },
  widthMode: {
    type: String,
    default: "trigger"
  },
  tag: Boolean,
  onCreate: Function,
  fallbackOption: {
    type: [Function, Boolean],
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  maxTagCount: [Number, String],
  consistentMenuWidth: {
    type: Boolean,
    default: true
  },
  virtualScroll: {
    type: Boolean,
    default: true
  },
  labelField: {
    type: String,
    default: "label"
  },
  valueField: {
    type: String,
    default: "value"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  renderLabel: Function,
  renderOption: Function,
  renderTag: Function,
  "onUpdate:value": [Function, Array],
  inputProps: Object,
  nodeProps: Function,
  ignoreComposition: { type: Boolean, default: true },
  showOnFocus: Boolean,
  // for jsx
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  onFocus: [Function, Array],
  onScroll: [Function, Array],
  onSearch: [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:show": [Function, Array],
  displayDirective: {
    type: String,
    default: "show"
  },
  resetMenuOnOptionsChange: {
    type: Boolean,
    default: true
  },
  status: String,
  showCheckmark: {
    type: Boolean,
    default: true
  },
  /** deprecated */
  onChange: [Function, Array],
  items: Array
});
const NSelect = defineComponent({
  name: "Select",
  props: selectProps,
  setup(props) {
    const { mergedClsPrefixRef, mergedBorderedRef, namespaceRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Select", "-select", style$3, selectLight$1, props, mergedClsPrefixRef);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const focusedRef = ref(false);
    const patternRef = ref("");
    const treeMateRef = computed(() => {
      const { valueField, childrenField } = props;
      const options = createTmOptions(valueField, childrenField);
      return createTreeMate(filteredOptionsRef.value, options);
    });
    const valOptMapRef = computed(() => createValOptMap(localOptionsRef.value, props.valueField, props.childrenField));
    const uncontrolledShowRef = ref(false);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    const triggerRef = ref(null);
    const followerRef = ref(null);
    const menuRef = ref(null);
    const { localeRef } = useLocale("Select");
    const localizedPlaceholderRef = computed(() => {
      var _a;
      return (_a = props.placeholder) !== null && _a !== void 0 ? _a : localeRef.value.placeholder;
    });
    const compitableOptionsRef = useCompitable(props, ["items", "options"]);
    const emptyArray = [];
    const createdOptionsRef = ref([]);
    const beingCreatedOptionsRef = ref([]);
    const memoValOptMapRef = ref(/* @__PURE__ */ new Map());
    const wrappedFallbackOptionRef = computed(() => {
      const { fallbackOption } = props;
      if (fallbackOption === void 0) {
        const { labelField, valueField } = props;
        return (value) => ({
          [labelField]: String(value),
          [valueField]: value
        });
      }
      if (fallbackOption === false)
        return false;
      return (value) => {
        return Object.assign(fallbackOption(value), {
          value
        });
      };
    });
    const localOptionsRef = computed(() => {
      return beingCreatedOptionsRef.value.concat(createdOptionsRef.value).concat(compitableOptionsRef.value);
    });
    const resolvedFilterRef = computed(() => {
      const { filter } = props;
      if (filter)
        return filter;
      const { labelField, valueField } = props;
      return (pattern, option) => {
        if (!option)
          return false;
        const label = option[labelField];
        if (typeof label === "string") {
          return patternMatched(pattern, label);
        }
        const value = option[valueField];
        if (typeof value === "string") {
          return patternMatched(pattern, value);
        }
        if (typeof value === "number") {
          return patternMatched(pattern, String(value));
        }
        return false;
      };
    });
    const filteredOptionsRef = computed(() => {
      if (props.remote) {
        return compitableOptionsRef.value;
      } else {
        const { value: localOptions } = localOptionsRef;
        const { value: pattern } = patternRef;
        if (!pattern.length || !props.filterable) {
          return localOptions;
        } else {
          return filterOptions(localOptions, resolvedFilterRef.value, pattern, props.childrenField);
        }
      }
    });
    function getMergedOptions(values) {
      const remote = props.remote;
      const { value: memoValOptMap } = memoValOptMapRef;
      const { value: valOptMap } = valOptMapRef;
      const { value: wrappedFallbackOption } = wrappedFallbackOptionRef;
      const options = [];
      values.forEach((value) => {
        if (valOptMap.has(value)) {
          options.push(valOptMap.get(value));
        } else if (remote && memoValOptMap.has(value)) {
          options.push(memoValOptMap.get(value));
        } else if (wrappedFallbackOption) {
          const option = wrappedFallbackOption(value);
          if (option) {
            options.push(option);
          }
        }
      });
      return options;
    }
    const selectedOptionsRef = computed(() => {
      if (props.multiple) {
        const { value: values } = mergedValueRef;
        if (!Array.isArray(values))
          return [];
        return getMergedOptions(values);
      }
      return null;
    });
    const selectedOptionRef = computed(() => {
      const { value: mergedValue } = mergedValueRef;
      if (!props.multiple && !Array.isArray(mergedValue)) {
        if (mergedValue === null)
          return null;
        return getMergedOptions([mergedValue])[0] || null;
      }
      return null;
    });
    const formItem = useFormItem(props);
    const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
    function doUpdateValue(value, option) {
      const { onChange, "onUpdate:value": _onUpdateValue, onUpdateValue } = props;
      const { nTriggerFormChange, nTriggerFormInput } = formItem;
      if (onChange)
        call(onChange, value, option);
      if (onUpdateValue)
        call(onUpdateValue, value, option);
      if (_onUpdateValue) {
        call(_onUpdateValue, value, option);
      }
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doBlur(e) {
      const { onBlur } = props;
      const { nTriggerFormBlur } = formItem;
      if (onBlur)
        call(onBlur, e);
      nTriggerFormBlur();
    }
    function doClear() {
      const { onClear } = props;
      if (onClear)
        call(onClear);
    }
    function doFocus(e) {
      const { onFocus, showOnFocus } = props;
      const { nTriggerFormFocus } = formItem;
      if (onFocus)
        call(onFocus, e);
      nTriggerFormFocus();
      if (showOnFocus) {
        openMenu();
      }
    }
    function doSearch(value) {
      const { onSearch } = props;
      if (onSearch)
        call(onSearch, value);
    }
    function doScroll(e) {
      const { onScroll } = props;
      if (onScroll)
        call(onScroll, e);
    }
    function updateMemorizedOptions() {
      var _a;
      const { remote, multiple } = props;
      if (remote) {
        const { value: memoValOptMap } = memoValOptMapRef;
        if (multiple) {
          const { valueField } = props;
          (_a = selectedOptionsRef.value) === null || _a === void 0 ? void 0 : _a.forEach((option) => {
            memoValOptMap.set(option[valueField], option);
          });
        } else {
          const option = selectedOptionRef.value;
          if (option) {
            memoValOptMap.set(option[props.valueField], option);
          }
        }
      }
    }
    function doUpdateShow(value) {
      const { onUpdateShow, "onUpdate:show": _onUpdateShow } = props;
      if (onUpdateShow)
        call(onUpdateShow, value);
      if (_onUpdateShow)
        call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    function openMenu() {
      if (!mergedDisabledRef.value) {
        doUpdateShow(true);
        uncontrolledShowRef.value = true;
        if (props.filterable) {
          focusSelectionInput();
        }
      }
    }
    function closeMenu() {
      doUpdateShow(false);
    }
    function handleMenuAfterLeave() {
      patternRef.value = "";
      beingCreatedOptionsRef.value = emptyArray;
    }
    const activeWithoutMenuOpenRef = ref(false);
    function onTriggerInputFocus() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = true;
      }
    }
    function onTriggerInputBlur() {
      if (props.filterable) {
        activeWithoutMenuOpenRef.value = false;
        if (!mergedShowRef.value) {
          handleMenuAfterLeave();
        }
      }
    }
    function handleTriggerClick() {
      if (mergedDisabledRef.value)
        return;
      if (!mergedShowRef.value) {
        openMenu();
      } else {
        if (!props.filterable) {
          closeMenu();
        } else {
          focusSelectionInput();
        }
      }
    }
    function handleTriggerBlur(e) {
      var _a, _b;
      if ((_b = (_a = menuRef.value) === null || _a === void 0 ? void 0 : _a.selfRef) === null || _b === void 0 ? void 0 : _b.contains(e.relatedTarget)) {
        return;
      }
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleTriggerFocus(e) {
      doFocus(e);
      focusedRef.value = true;
    }
    function handleMenuFocus(e) {
      focusedRef.value = true;
    }
    function handleMenuBlur(e) {
      var _a;
      if ((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e.relatedTarget))
        return;
      focusedRef.value = false;
      doBlur(e);
      closeMenu();
    }
    function handleMenuTabOut() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      closeMenu();
    }
    function handleMenuClickOutside(e) {
      var _a;
      if (mergedShowRef.value) {
        if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(getPreciseEventTarget(e)))) {
          closeMenu();
        }
      }
    }
    function createClearedMultipleSelectValue(value) {
      if (!Array.isArray(value))
        return [];
      if (wrappedFallbackOptionRef.value) {
        return Array.from(value);
      } else {
        const { remote } = props;
        const { value: valOptMap } = valOptMapRef;
        if (remote) {
          const { value: memoValOptMap } = memoValOptMapRef;
          return value.filter((v) => valOptMap.has(v) || memoValOptMap.has(v));
        } else {
          return value.filter((v) => valOptMap.has(v));
        }
      }
    }
    function handleToggleByTmNode(tmNode) {
      handleToggleByOption(tmNode.rawNode);
    }
    function handleToggleByOption(option) {
      if (mergedDisabledRef.value)
        return;
      const { tag, remote, clearFilterAfterSelect, valueField } = props;
      if (tag && !remote) {
        const { value: beingCreatedOptions } = beingCreatedOptionsRef;
        const beingCreatedOption = beingCreatedOptions[0] || null;
        if (beingCreatedOption) {
          const createdOptions = createdOptionsRef.value;
          if (!createdOptions.length) {
            createdOptionsRef.value = [beingCreatedOption];
          } else {
            createdOptions.push(beingCreatedOption);
          }
          beingCreatedOptionsRef.value = emptyArray;
        }
      }
      if (remote) {
        memoValOptMapRef.value.set(option[valueField], option);
      }
      if (props.multiple) {
        const changedValue = createClearedMultipleSelectValue(mergedValueRef.value);
        const index = changedValue.findIndex((value) => value === option[valueField]);
        if (~index) {
          changedValue.splice(index, 1);
          if (tag && !remote) {
            const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
            if (~createdOptionIndex) {
              createdOptionsRef.value.splice(createdOptionIndex, 1);
              if (clearFilterAfterSelect)
                patternRef.value = "";
            }
          }
        } else {
          changedValue.push(option[valueField]);
          if (clearFilterAfterSelect)
            patternRef.value = "";
        }
        doUpdateValue(changedValue, getMergedOptions(changedValue));
      } else {
        if (tag && !remote) {
          const createdOptionIndex = getCreatedOptionIndex(option[valueField]);
          if (~createdOptionIndex) {
            createdOptionsRef.value = [
              createdOptionsRef.value[createdOptionIndex]
            ];
          } else {
            createdOptionsRef.value = emptyArray;
          }
        }
        focusSelection();
        closeMenu();
        doUpdateValue(option[valueField], option);
      }
    }
    function getCreatedOptionIndex(optionValue) {
      const createdOptions = createdOptionsRef.value;
      return createdOptions.findIndex((createdOption) => createdOption[props.valueField] === optionValue);
    }
    function handlePatternInput(e) {
      if (!mergedShowRef.value) {
        openMenu();
      }
      const { value } = e.target;
      patternRef.value = value;
      const { tag, remote } = props;
      doSearch(value);
      if (tag && !remote) {
        if (!value) {
          beingCreatedOptionsRef.value = emptyArray;
          return;
        }
        const { onCreate } = props;
        const optionBeingCreated = onCreate ? onCreate(value) : { [props.labelField]: value, [props.valueField]: value };
        const { valueField, labelField } = props;
        if (compitableOptionsRef.value.some((option) => {
          return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
        }) || createdOptionsRef.value.some((option) => {
          return option[valueField] === optionBeingCreated[valueField] || option[labelField] === optionBeingCreated[labelField];
        })) {
          beingCreatedOptionsRef.value = emptyArray;
        } else {
          beingCreatedOptionsRef.value = [optionBeingCreated];
        }
      }
    }
    function handleClear(e) {
      e.stopPropagation();
      const { multiple } = props;
      if (!multiple && props.filterable) {
        closeMenu();
      }
      doClear();
      if (multiple) {
        doUpdateValue([], []);
      } else {
        doUpdateValue(null, null);
      }
    }
    function handleMenuMousedown(e) {
      if (!happensIn(e, "action") && !happensIn(e, "empty"))
        e.preventDefault();
    }
    function handleMenuScroll(e) {
      doScroll(e);
    }
    function handleKeydown(e) {
      var _a, _b, _c, _d, _e;
      if (!props.keyboard) {
        e.preventDefault();
        return;
      }
      switch (e.key) {
        case " ":
          if (props.filterable)
            break;
          else {
            e.preventDefault();
          }
        case "Enter":
          if (!((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.isComposing)) {
            if (mergedShowRef.value) {
              const pendingTmNode = (_b = menuRef.value) === null || _b === void 0 ? void 0 : _b.getPendingTmNode();
              if (pendingTmNode) {
                handleToggleByTmNode(pendingTmNode);
              } else if (!props.filterable) {
                closeMenu();
                focusSelection();
              }
            } else {
              openMenu();
              if (props.tag && activeWithoutMenuOpenRef.value) {
                const beingCreatedOption = beingCreatedOptionsRef.value[0];
                if (beingCreatedOption) {
                  const optionValue = beingCreatedOption[props.valueField];
                  const { value: mergedValue } = mergedValueRef;
                  if (props.multiple) {
                    if (Array.isArray(mergedValue) && mergedValue.some((value) => value === optionValue))
                      ;
                    else {
                      handleToggleByOption(beingCreatedOption);
                    }
                  } else {
                    handleToggleByOption(beingCreatedOption);
                  }
                }
              }
            }
          }
          e.preventDefault();
          break;
        case "ArrowUp":
          e.preventDefault();
          if (props.loading)
            return;
          if (mergedShowRef.value) {
            (_c = menuRef.value) === null || _c === void 0 ? void 0 : _c.prev();
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (props.loading)
            return;
          if (mergedShowRef.value) {
            (_d = menuRef.value) === null || _d === void 0 ? void 0 : _d.next();
          } else {
            openMenu();
          }
          break;
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e);
            closeMenu();
          }
          (_e = triggerRef.value) === null || _e === void 0 ? void 0 : _e.focus();
          break;
      }
    }
    function focusSelection() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    }
    function focusSelectionInput() {
      var _a;
      (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
    }
    function handleTriggerOrMenuResize() {
      var _a;
      if (!mergedShowRef.value)
        return;
      (_a = followerRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
    }
    updateMemorizedOptions();
    watch(toRef(props, "options"), updateMemorizedOptions);
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      focusInput: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.focusInput();
      },
      blur: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      blurInput: () => {
        var _a;
        (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.blurInput();
      }
    };
    const cssVarsRef = computed(() => {
      const { self: { menuBoxShadow } } = themeRef.value;
      return {
        "--n-menu-box-shadow": menuBoxShadow
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("select", void 0, cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedStatus: mergedStatusRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      treeMate: treeMateRef,
      isMounted: isMounted(),
      triggerRef,
      menuRef,
      pattern: patternRef,
      uncontrolledShow: uncontrolledShowRef,
      mergedShow: mergedShowRef,
      adjustedTo: useAdjustedTo(props),
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      followerRef,
      localizedPlaceholder: localizedPlaceholderRef,
      selectedOption: selectedOptionRef,
      selectedOptions: selectedOptionsRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      focused: focusedRef,
      activeWithoutMenuOpen: activeWithoutMenuOpenRef,
      inlineThemeDisabled,
      onTriggerInputFocus,
      onTriggerInputBlur,
      handleTriggerOrMenuResize,
      handleMenuFocus,
      handleMenuBlur,
      handleMenuTabOut,
      handleTriggerClick,
      handleToggle: handleToggleByTmNode,
      handleDeleteOption: handleToggleByOption,
      handlePatternInput,
      handleClear,
      handleTriggerBlur,
      handleTriggerFocus,
      handleKeydown,
      handleMenuAfterLeave,
      handleMenuClickOutside,
      handleMenuScroll,
      handleMenuKeydown: handleKeydown,
      handleMenuMousedown,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    return h(
      "div",
      { class: `${this.mergedClsPrefix}-select` },
      h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () => h(NInternalSelection, { ref: "triggerRef", inlineThemeDisabled: this.inlineThemeDisabled, status: this.mergedStatus, inputProps: this.inputProps, clsPrefix: this.mergedClsPrefix, showArrow: this.showArrow, maxTagCount: this.maxTagCount, bordered: this.mergedBordered, active: this.activeWithoutMenuOpen || this.mergedShow, pattern: this.pattern, placeholder: this.localizedPlaceholder, selectedOption: this.selectedOption, selectedOptions: this.selectedOptions, multiple: this.multiple, renderTag: this.renderTag, renderLabel: this.renderLabel, filterable: this.filterable, clearable: this.clearable, disabled: this.mergedDisabled, size: this.mergedSize, theme: this.mergedTheme.peers.InternalSelection, labelField: this.labelField, valueField: this.valueField, themeOverrides: this.mergedTheme.peerOverrides.InternalSelection, loading: this.loading, focused: this.focused, onClick: this.handleTriggerClick, onDeleteOption: this.handleDeleteOption, onPatternInput: this.handlePatternInput, onClear: this.handleClear, onBlur: this.handleTriggerBlur, onFocus: this.handleTriggerFocus, onKeydown: this.handleKeydown, onPatternBlur: this.onTriggerInputBlur, onPatternFocus: this.onTriggerInputFocus, onResize: this.handleTriggerOrMenuResize, ignoreComposition: this.ignoreComposition }, {
              arrow: () => {
                var _a, _b;
                return [(_b = (_a = this.$slots).arrow) === null || _b === void 0 ? void 0 : _b.call(_a)];
              }
            })
          }),
          h(VFollower, { ref: "followerRef", show: this.mergedShow, to: this.adjustedTo, teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey, containerClass: this.namespace, width: this.consistentMenuWidth ? "target" : void 0, minWidth: "target", placement: this.placement }, {
            default: () => h(Transition, { name: "fade-in-scale-up-transition", appear: this.isMounted, onAfterLeave: this.handleMenuAfterLeave }, {
              default: () => {
                var _a, _b, _c;
                if (!(this.mergedShow || this.displayDirective === "show")) {
                  return null;
                }
                (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
                return withDirectives(h(NInternalSelectMenu, Object.assign({}, this.menuProps, { ref: "menuRef", onResize: this.handleTriggerOrMenuResize, inlineThemeDisabled: this.inlineThemeDisabled, virtualScroll: this.consistentMenuWidth && this.virtualScroll, class: [
                  `${this.mergedClsPrefix}-select-menu`,
                  this.themeClass,
                  (_b = this.menuProps) === null || _b === void 0 ? void 0 : _b.class
                ], clsPrefix: this.mergedClsPrefix, focusable: true, labelField: this.labelField, valueField: this.valueField, autoPending: true, nodeProps: this.nodeProps, theme: this.mergedTheme.peers.InternalSelectMenu, themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu, treeMate: this.treeMate, multiple: this.multiple, size: "medium", renderOption: this.renderOption, renderLabel: this.renderLabel, value: this.mergedValue, style: [(_c = this.menuProps) === null || _c === void 0 ? void 0 : _c.style, this.cssVars], onToggle: this.handleToggle, onScroll: this.handleMenuScroll, onFocus: this.handleMenuFocus, onBlur: this.handleMenuBlur, onKeydown: this.handleMenuKeydown, onTabOut: this.handleMenuTabOut, onMousedown: this.handleMenuMousedown, show: this.mergedShow, showCheckmark: this.showCheckmark, resetMenuOnOptionsChange: this.resetMenuOnOptionsChange }), {
                  empty: () => {
                    var _a2, _b2;
                    return [(_b2 = (_a2 = this.$slots).empty) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
                  },
                  action: () => {
                    var _a2, _b2;
                    return [(_b2 = (_a2 = this.$slots).action) === null || _b2 === void 0 ? void 0 : _b2.call(_a2)];
                  }
                }), this.displayDirective === "show" ? [
                  [vShow, this.mergedShow],
                  [
                    clickoutside,
                    this.handleMenuClickOutside,
                    void 0,
                    { capture: true }
                  ]
                ] : [
                  [
                    clickoutside,
                    this.handleMenuClickOutside,
                    void 0,
                    { capture: true }
                  ]
                ]);
              }
            })
          })
        ]
      })
    );
  }
});
const commonVariables$2 = {
  itemPaddingSmall: "0 4px",
  itemMarginSmall: "0 0 0 8px",
  itemMarginSmallRtl: "0 8px 0 0",
  itemPaddingMedium: "0 4px",
  itemMarginMedium: "0 0 0 8px",
  itemMarginMediumRtl: "0 8px 0 0",
  itemPaddingLarge: "0 4px",
  itemMarginLarge: "0 0 0 8px",
  itemMarginLargeRtl: "0 8px 0 0",
  buttonIconSizeSmall: "14px",
  buttonIconSizeMedium: "16px",
  buttonIconSizeLarge: "18px",
  inputWidthSmall: "60px",
  selectWidthSmall: "unset",
  inputMarginSmall: "0 0 0 8px",
  inputMarginSmallRtl: "0 8px 0 0",
  selectMarginSmall: "0 0 0 8px",
  prefixMarginSmall: "0 8px 0 0",
  suffixMarginSmall: "0 0 0 8px",
  inputWidthMedium: "60px",
  selectWidthMedium: "unset",
  inputMarginMedium: "0 0 0 8px",
  inputMarginMediumRtl: "0 8px 0 0",
  selectMarginMedium: "0 0 0 8px",
  prefixMarginMedium: "0 8px 0 0",
  suffixMarginMedium: "0 0 0 8px",
  inputWidthLarge: "60px",
  selectWidthLarge: "unset",
  inputMarginLarge: "0 0 0 8px",
  inputMarginLargeRtl: "0 8px 0 0",
  selectMarginLarge: "0 0 0 8px",
  prefixMarginLarge: "0 8px 0 0",
  suffixMarginLarge: "0 0 0 8px"
};
const self$2 = (vars) => {
  const {
    textColor2,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    inputColorDisabled,
    textColorDisabled,
    borderColor,
    borderRadius,
    // item font size
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    // item size
    heightTiny,
    heightSmall,
    heightMedium
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$2), { buttonColor: "#0000", buttonColorHover: "#0000", buttonColorPressed: "#0000", buttonBorder: `1px solid ${borderColor}`, buttonBorderHover: `1px solid ${borderColor}`, buttonBorderPressed: `1px solid ${borderColor}`, buttonIconColor: textColor2, buttonIconColorHover: textColor2, buttonIconColorPressed: textColor2, itemTextColor: textColor2, itemTextColorHover: primaryColorHover, itemTextColorPressed: primaryColorPressed, itemTextColorActive: primaryColor, itemTextColorDisabled: textColorDisabled, itemColor: "#0000", itemColorHover: "#0000", itemColorPressed: "#0000", itemColorActive: "#0000", itemColorActiveHover: "#0000", itemColorDisabled: inputColorDisabled, itemBorder: "1px solid #0000", itemBorderHover: "1px solid #0000", itemBorderPressed: "1px solid #0000", itemBorderActive: `1px solid ${primaryColor}`, itemBorderDisabled: `1px solid ${borderColor}`, itemBorderRadius: borderRadius, itemSizeSmall: heightTiny, itemSizeMedium: heightSmall, itemSizeLarge: heightMedium, itemFontSizeSmall: fontSizeTiny, itemFontSizeMedium: fontSizeSmall, itemFontSizeLarge: fontSizeMedium, jumperFontSizeSmall: fontSizeTiny, jumperFontSizeMedium: fontSizeSmall, jumperFontSizeLarge: fontSizeMedium, jumperTextColor: textColor2, jumperTextColorDisabled: textColorDisabled });
};
const paginationLight = createTheme({
  name: "Pagination",
  common: commonLight,
  peers: {
    Select: selectLight$1,
    Input: inputLight,
    Popselect: popselectLight$1
  },
  self: self$2
});
const paginationLight$1 = paginationLight;
function createPageItemsInfo(currentPage, pageCount, pageSlot) {
  let hasFastBackward = false;
  let hasFastForward = false;
  let fastBackwardTo = 1;
  let fastForwardTo = pageCount;
  if (pageCount === 1) {
    return {
      hasFastBackward: false,
      hasFastForward: false,
      fastForwardTo,
      fastBackwardTo,
      items: [
        {
          type: "page",
          label: 1,
          active: currentPage === 1,
          mayBeFastBackward: false,
          mayBeFastForward: false
        }
      ]
    };
  }
  if (pageCount === 2) {
    return {
      hasFastBackward: false,
      hasFastForward: false,
      fastForwardTo,
      fastBackwardTo,
      items: [
        {
          type: "page",
          label: 1,
          active: currentPage === 1,
          mayBeFastBackward: false,
          mayBeFastForward: false
        },
        {
          type: "page",
          label: 2,
          active: currentPage === 2,
          mayBeFastBackward: true,
          mayBeFastForward: false
        }
      ]
    };
  }
  const firstPage = 1;
  const lastPage = pageCount;
  let middleStart = currentPage;
  let middleEnd = currentPage;
  const middleDelta = (pageSlot - 5) / 2;
  middleEnd += Math.ceil(middleDelta);
  middleEnd = Math.min(Math.max(middleEnd, firstPage + pageSlot - 3), lastPage - 2);
  middleStart -= Math.floor(middleDelta);
  middleStart = Math.max(Math.min(middleStart, lastPage - pageSlot + 3), firstPage + 2);
  let leftSplit = false;
  let rightSplit = false;
  if (middleStart > firstPage + 2)
    leftSplit = true;
  if (middleEnd < lastPage - 2)
    rightSplit = true;
  const items = [];
  items.push({
    type: "page",
    label: 1,
    active: currentPage === 1,
    mayBeFastBackward: false,
    mayBeFastForward: false
  });
  if (leftSplit) {
    hasFastBackward = true;
    fastBackwardTo = middleStart - 1;
    items.push({
      type: "fast-backward",
      active: false,
      label: void 0,
      options: createRange(firstPage + 1, middleStart - 1)
    });
  } else if (lastPage >= firstPage + 1) {
    items.push({
      type: "page",
      label: firstPage + 1,
      mayBeFastBackward: true,
      mayBeFastForward: false,
      active: currentPage === firstPage + 1
    });
  }
  for (let i = middleStart; i <= middleEnd; ++i) {
    items.push({
      type: "page",
      label: i,
      mayBeFastBackward: false,
      mayBeFastForward: false,
      active: currentPage === i
    });
  }
  if (rightSplit) {
    hasFastForward = true;
    fastForwardTo = middleEnd + 1;
    items.push({
      type: "fast-forward",
      active: false,
      label: void 0,
      options: createRange(middleEnd + 1, lastPage - 1)
    });
  } else if (middleEnd === lastPage - 2 && items[items.length - 1].label !== lastPage - 1) {
    items.push({
      type: "page",
      mayBeFastForward: true,
      mayBeFastBackward: false,
      label: lastPage - 1,
      active: currentPage === lastPage - 1
    });
  }
  if (items[items.length - 1].label !== lastPage) {
    items.push({
      type: "page",
      mayBeFastForward: false,
      mayBeFastBackward: false,
      label: lastPage,
      active: currentPage === lastPage
    });
  }
  return {
    hasFastBackward,
    hasFastForward,
    fastBackwardTo,
    fastForwardTo,
    items
  };
}
function createRange(from, to) {
  const range = [];
  for (let i = from; i <= to; ++i) {
    range.push({
      label: `${i}`,
      value: i
    });
  }
  return range;
}
const hoverStyleProps = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`;
const hoverStyleChildren = [cM("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)];
const style$2 = cB("pagination", `
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`, [cB("pagination-prefix", `
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `), cB("pagination-suffix", `
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `), c$1("> *:not(:first-child)", `
 margin: var(--n-item-margin);
 `), cB("select", `
 width: var(--n-select-width);
 `), c$1("&.transition-disabled", [cB("pagination-item", "transition: none!important;")]), cB("pagination-quick-jumper", `
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `, [cB("input", `
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]), cB("pagination-item", `
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `, [cM("button", `
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `, [cB("base-icon", `
 font-size: var(--n-button-icon-size);
 `)]), cNotM("disabled", [cM("hover", hoverStyleProps, hoverStyleChildren), c$1("&:hover", hoverStyleProps, hoverStyleChildren), c$1("&:active", `
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `, [cM("button", `
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]), cM("active", `
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `, [c$1("&:hover", `
 background: var(--n-item-color-active-hover);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `, [cM("active, button", `
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `, [cB("pagination-quick-jumper", `
 color: var(--n-jumper-text-color-disabled);
 `)]), cM("simple", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [cB("pagination-quick-jumper", [cB("input", `
 margin: 0;
 `)])])]);
const paginationProps = Object.assign(Object.assign({}, useTheme.props), {
  simple: Boolean,
  page: Number,
  defaultPage: {
    type: Number,
    default: 1
  },
  itemCount: Number,
  pageCount: Number,
  defaultPageCount: {
    type: Number,
    default: 1
  },
  showSizePicker: Boolean,
  pageSize: Number,
  defaultPageSize: Number,
  pageSizes: {
    type: Array,
    default() {
      return [10];
    }
  },
  showQuickJumper: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  disabled: Boolean,
  pageSlot: {
    type: Number,
    default: 9
  },
  selectProps: Object,
  prev: Function,
  next: Function,
  goto: Function,
  prefix: Function,
  suffix: Function,
  label: Function,
  displayOrder: {
    type: Array,
    default: ["pages", "size-picker", "quick-jumper"]
  },
  to: useAdjustedTo.propTo,
  "onUpdate:page": [Function, Array],
  onUpdatePage: [Function, Array],
  "onUpdate:pageSize": [Function, Array],
  onUpdatePageSize: [Function, Array],
  /** @deprecated */
  onPageSizeChange: [Function, Array],
  /** @deprecated */
  onChange: [Function, Array]
});
const NPagination = defineComponent({
  name: "Pagination",
  props: paginationProps,
  setup(props) {
    const { mergedComponentPropsRef, mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const themeRef = useTheme("Pagination", "-pagination", style$2, paginationLight$1, props, mergedClsPrefixRef);
    const { localeRef } = useLocale("Pagination");
    const selfRef = ref(null);
    const uncontrolledPageRef = ref(props.defaultPage);
    const getDefaultPageSize = () => {
      const { defaultPageSize } = props;
      if (defaultPageSize !== void 0)
        return defaultPageSize;
      const pageSizeOption = props.pageSizes[0];
      if (typeof pageSizeOption === "number")
        return pageSizeOption;
      return pageSizeOption.value || 10;
    };
    const uncontrolledPageSizeRef = ref(getDefaultPageSize());
    const mergedPageRef = useMergedState(toRef(props, "page"), uncontrolledPageRef);
    const mergedPageSizeRef = useMergedState(toRef(props, "pageSize"), uncontrolledPageSizeRef);
    const mergedPageCountRef = computed(() => {
      const { itemCount } = props;
      if (itemCount !== void 0) {
        return Math.max(1, Math.ceil(itemCount / mergedPageSizeRef.value));
      }
      const { pageCount } = props;
      if (pageCount !== void 0)
        return Math.max(pageCount, 1);
      return 1;
    });
    const jumperValueRef = ref("");
    watchEffect(() => {
      void props.simple;
      jumperValueRef.value = String(mergedPageRef.value);
    });
    const fastForwardActiveRef = ref(false);
    const fastBackwardActiveRef = ref(false);
    const showFastForwardMenuRef = ref(false);
    const showFastBackwardMenuRef = ref(false);
    const handleFastForwardMouseenter = () => {
      if (props.disabled)
        return;
      fastForwardActiveRef.value = true;
      disableTransitionOneTick();
    };
    const handleFastForwardMouseleave = () => {
      if (props.disabled)
        return;
      fastForwardActiveRef.value = false;
      disableTransitionOneTick();
    };
    const handleFastBackwardMouseenter = () => {
      fastBackwardActiveRef.value = true;
      disableTransitionOneTick();
    };
    const handleFastBackwardMouseleave = () => {
      fastBackwardActiveRef.value = false;
      disableTransitionOneTick();
    };
    const handleMenuSelect = (value) => {
      doUpdatePage(value);
    };
    const pageItemsInfo = computed(() => createPageItemsInfo(mergedPageRef.value, mergedPageCountRef.value, props.pageSlot));
    watchEffect(() => {
      if (!pageItemsInfo.value.hasFastBackward) {
        fastBackwardActiveRef.value = false;
        showFastBackwardMenuRef.value = false;
      } else if (!pageItemsInfo.value.hasFastForward) {
        fastForwardActiveRef.value = false;
        showFastForwardMenuRef.value = false;
      }
    });
    const pageSizeOptionsRef = computed(() => {
      const suffix = localeRef.value.selectionSuffix;
      return props.pageSizes.map((size) => {
        if (typeof size === "number") {
          return {
            label: `${size} / ${suffix}`,
            value: size
          };
        } else {
          return size;
        }
      });
    });
    const inputSizeRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.inputSize) || smallerSize(props.size);
    });
    const selectSizeRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Pagination) === null || _b === void 0 ? void 0 : _b.selectSize) || smallerSize(props.size);
    });
    const startIndexRef = computed(() => {
      return (mergedPageRef.value - 1) * mergedPageSizeRef.value;
    });
    const endIndexRef = computed(() => {
      const endIndex = mergedPageRef.value * mergedPageSizeRef.value - 1;
      const { itemCount } = props;
      if (itemCount !== void 0) {
        return endIndex > itemCount - 1 ? itemCount - 1 : endIndex;
      }
      return endIndex;
    });
    const mergedItemCountRef = computed(() => {
      const { itemCount } = props;
      if (itemCount !== void 0)
        return itemCount;
      return (props.pageCount || 1) * mergedPageSizeRef.value;
    });
    const rtlEnabledRef = useRtl("Pagination", mergedRtlRef, mergedClsPrefixRef);
    const disableTransitionOneTick = () => {
      void nextTick(() => {
        var _a;
        const { value: selfEl } = selfRef;
        if (!selfEl)
          return;
        selfEl.classList.add("transition-disabled");
        void ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth);
        selfEl.classList.remove("transition-disabled");
      });
    };
    function doUpdatePage(page) {
      if (page === mergedPageRef.value)
        return;
      const { "onUpdate:page": _onUpdatePage, onUpdatePage, onChange, simple } = props;
      if (_onUpdatePage)
        call(_onUpdatePage, page);
      if (onUpdatePage)
        call(onUpdatePage, page);
      if (onChange)
        call(onChange, page);
      uncontrolledPageRef.value = page;
      if (simple) {
        jumperValueRef.value = String(page);
      }
    }
    function doUpdatePageSize(pageSize) {
      if (pageSize === mergedPageSizeRef.value)
        return;
      const { "onUpdate:pageSize": _onUpdatePageSize, onUpdatePageSize, onPageSizeChange } = props;
      if (_onUpdatePageSize)
        call(_onUpdatePageSize, pageSize);
      if (onUpdatePageSize)
        call(onUpdatePageSize, pageSize);
      if (onPageSizeChange)
        call(onPageSizeChange, pageSize);
      uncontrolledPageSizeRef.value = pageSize;
      if (mergedPageCountRef.value < mergedPageRef.value) {
        doUpdatePage(mergedPageCountRef.value);
      }
    }
    function forward() {
      if (props.disabled)
        return;
      const page = Math.min(mergedPageRef.value + 1, mergedPageCountRef.value);
      doUpdatePage(page);
    }
    function backward() {
      if (props.disabled)
        return;
      const page = Math.max(mergedPageRef.value - 1, 1);
      doUpdatePage(page);
    }
    function fastForward() {
      if (props.disabled)
        return;
      const page = Math.min(pageItemsInfo.value.fastForwardTo, mergedPageCountRef.value);
      doUpdatePage(page);
    }
    function fastBackward() {
      if (props.disabled)
        return;
      const page = Math.max(pageItemsInfo.value.fastBackwardTo, 1);
      doUpdatePage(page);
    }
    function handleSizePickerChange(value) {
      doUpdatePageSize(value);
    }
    function doQuickJump() {
      const page = parseInt(jumperValueRef.value);
      if (Number.isNaN(page))
        return;
      doUpdatePage(Math.max(1, Math.min(page, mergedPageCountRef.value)));
      if (!props.simple) {
        jumperValueRef.value = "";
      }
    }
    function handleQuickJumperChange() {
      doQuickJump();
    }
    function handlePageItemClick(pageItem) {
      if (props.disabled)
        return;
      switch (pageItem.type) {
        case "page":
          doUpdatePage(pageItem.label);
          break;
        case "fast-backward":
          fastBackward();
          break;
        case "fast-forward":
          fastForward();
          break;
      }
    }
    function handleJumperInput(value) {
      jumperValueRef.value = value.replace(/\D+/g, "");
    }
    watchEffect(() => {
      void mergedPageRef.value;
      void mergedPageSizeRef.value;
      disableTransitionOneTick();
    });
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { self: { buttonBorder, buttonBorderHover, buttonBorderPressed, buttonIconColor, buttonIconColorHover, buttonIconColorPressed, itemTextColor, itemTextColorHover, itemTextColorPressed, itemTextColorActive, itemTextColorDisabled, itemColor, itemColorHover, itemColorPressed, itemColorActive, itemColorActiveHover, itemColorDisabled, itemBorder, itemBorderHover, itemBorderPressed, itemBorderActive, itemBorderDisabled, itemBorderRadius, jumperTextColor, jumperTextColorDisabled, buttonColor, buttonColorHover, buttonColorPressed, [createKey("itemPadding", size)]: itemPadding, [createKey("itemMargin", size)]: itemMargin, [createKey("inputWidth", size)]: inputWidth, [createKey("selectWidth", size)]: selectWidth, [createKey("inputMargin", size)]: inputMargin, [createKey("selectMargin", size)]: selectMargin, [createKey("jumperFontSize", size)]: jumperFontSize, [createKey("prefixMargin", size)]: prefixMargin, [createKey("suffixMargin", size)]: suffixMargin, [createKey("itemSize", size)]: itemSize, [createKey("buttonIconSize", size)]: buttonIconSize, [createKey("itemFontSize", size)]: itemFontSize, [`${createKey("itemMargin", size)}Rtl`]: itemMarginRtl, [`${createKey("inputMargin", size)}Rtl`]: inputMarginRtl }, common: { cubicBezierEaseInOut } } = themeRef.value;
      return {
        "--n-prefix-margin": prefixMargin,
        "--n-suffix-margin": suffixMargin,
        "--n-item-font-size": itemFontSize,
        "--n-select-width": selectWidth,
        "--n-select-margin": selectMargin,
        "--n-input-width": inputWidth,
        "--n-input-margin": inputMargin,
        "--n-input-margin-rtl": inputMarginRtl,
        "--n-item-size": itemSize,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-disabled": itemTextColorDisabled,
        "--n-item-text-color-hover": itemTextColorHover,
        "--n-item-text-color-active": itemTextColorActive,
        "--n-item-text-color-pressed": itemTextColorPressed,
        "--n-item-color": itemColor,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-disabled": itemColorDisabled,
        "--n-item-color-active": itemColorActive,
        "--n-item-color-active-hover": itemColorActiveHover,
        "--n-item-color-pressed": itemColorPressed,
        "--n-item-border": itemBorder,
        "--n-item-border-hover": itemBorderHover,
        "--n-item-border-disabled": itemBorderDisabled,
        "--n-item-border-active": itemBorderActive,
        "--n-item-border-pressed": itemBorderPressed,
        "--n-item-padding": itemPadding,
        "--n-item-border-radius": itemBorderRadius,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-jumper-font-size": jumperFontSize,
        "--n-jumper-text-color": jumperTextColor,
        "--n-jumper-text-color-disabled": jumperTextColorDisabled,
        "--n-item-margin": itemMargin,
        "--n-item-margin-rtl": itemMarginRtl,
        "--n-button-icon-size": buttonIconSize,
        "--n-button-icon-color": buttonIconColor,
        "--n-button-icon-color-hover": buttonIconColorHover,
        "--n-button-icon-color-pressed": buttonIconColorPressed,
        "--n-button-color-hover": buttonColorHover,
        "--n-button-color": buttonColor,
        "--n-button-color-pressed": buttonColorPressed,
        "--n-button-border": buttonBorder,
        "--n-button-border-hover": buttonBorderHover,
        "--n-button-border-pressed": buttonBorderPressed
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("pagination", computed(() => {
      let hash = "";
      const { size } = props;
      hash += size[0];
      return hash;
    }), cssVarsRef, props) : void 0;
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      locale: localeRef,
      selfRef,
      mergedPage: mergedPageRef,
      pageItems: computed(() => {
        return pageItemsInfo.value.items;
      }),
      mergedItemCount: mergedItemCountRef,
      jumperValue: jumperValueRef,
      pageSizeOptions: pageSizeOptionsRef,
      mergedPageSize: mergedPageSizeRef,
      inputSize: inputSizeRef,
      selectSize: selectSizeRef,
      mergedTheme: themeRef,
      mergedPageCount: mergedPageCountRef,
      startIndex: startIndexRef,
      endIndex: endIndexRef,
      showFastForwardMenu: showFastForwardMenuRef,
      showFastBackwardMenu: showFastBackwardMenuRef,
      fastForwardActive: fastForwardActiveRef,
      fastBackwardActive: fastBackwardActiveRef,
      handleMenuSelect,
      handleFastForwardMouseenter,
      handleFastForwardMouseleave,
      handleFastBackwardMouseenter,
      handleFastBackwardMouseleave,
      handleJumperInput,
      handleBackwardClick: backward,
      handleForwardClick: forward,
      handlePageItemClick,
      handleSizePickerChange,
      handleQuickJumperChange,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const { $slots, mergedClsPrefix, disabled, cssVars, mergedPage, mergedPageCount, pageItems, showSizePicker, showQuickJumper, mergedTheme, locale, inputSize, selectSize, mergedPageSize, pageSizeOptions, jumperValue, simple, prev, next, prefix, suffix, label, goto, handleJumperInput, handleSizePickerChange, handleBackwardClick, handlePageItemClick, handleForwardClick, handleQuickJumperChange, onRender } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const renderPrefix = $slots.prefix || prefix;
    const renderSuffix = $slots.suffix || suffix;
    const renderPrev = prev || $slots.prev;
    const renderNext = next || $slots.next;
    const renderLabel = label || $slots.label;
    return h(
      "div",
      { ref: "selfRef", class: [
        `${mergedClsPrefix}-pagination`,
        this.themeClass,
        this.rtlEnabled && `${mergedClsPrefix}-pagination--rtl`,
        disabled && `${mergedClsPrefix}-pagination--disabled`,
        simple && `${mergedClsPrefix}-pagination--simple`
      ], style: cssVars },
      renderPrefix ? h("div", { class: `${mergedClsPrefix}-pagination-prefix` }, renderPrefix({
        page: mergedPage,
        pageSize: mergedPageSize,
        pageCount: mergedPageCount,
        startIndex: this.startIndex,
        endIndex: this.endIndex,
        itemCount: this.mergedItemCount
      })) : null,
      this.displayOrder.map((part) => {
        switch (part) {
          case "pages":
            return h(
              Fragment,
              null,
              h("div", { class: [
                `${mergedClsPrefix}-pagination-item`,
                !renderPrev && `${mergedClsPrefix}-pagination-item--button`,
                (mergedPage <= 1 || mergedPage > mergedPageCount || disabled) && `${mergedClsPrefix}-pagination-item--disabled`
              ], onClick: handleBackwardClick }, renderPrev ? renderPrev({
                page: mergedPage,
                pageSize: mergedPageSize,
                pageCount: mergedPageCount,
                startIndex: this.startIndex,
                endIndex: this.endIndex,
                itemCount: this.mergedItemCount
              }) : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                default: () => this.rtlEnabled ? h(ForwardIcon, null) : h(BackwardIcon, null)
              })),
              simple ? h(
                Fragment,
                null,
                h(
                  "div",
                  { class: `${mergedClsPrefix}-pagination-quick-jumper` },
                  h(NInput, { value: jumperValue, onUpdateValue: handleJumperInput, size: inputSize, placeholder: "", disabled, theme: mergedTheme.peers.Input, themeOverrides: mergedTheme.peerOverrides.Input, onChange: handleQuickJumperChange })
                ),
                " / ",
                mergedPageCount
              ) : pageItems.map((pageItem, index) => {
                let contentNode;
                let onMouseenter;
                let onMouseleave;
                const { type } = pageItem;
                switch (type) {
                  case "page":
                    const pageNode = pageItem.label;
                    if (renderLabel) {
                      contentNode = renderLabel({
                        type: "page",
                        node: pageNode,
                        active: pageItem.active
                      });
                    } else {
                      contentNode = pageNode;
                    }
                    break;
                  case "fast-forward":
                    const fastForwardNode = this.fastForwardActive ? h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                      default: () => this.rtlEnabled ? h(FastBackwardIcon, null) : h(FastForwardIcon, null)
                    }) : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(MoreIcon, null) });
                    if (renderLabel) {
                      contentNode = renderLabel({
                        type: "fast-forward",
                        node: fastForwardNode,
                        active: this.fastForwardActive || this.showFastForwardMenu
                      });
                    } else {
                      contentNode = fastForwardNode;
                    }
                    onMouseenter = this.handleFastForwardMouseenter;
                    onMouseleave = this.handleFastForwardMouseleave;
                    break;
                  case "fast-backward":
                    const fastBackwardNode = this.fastBackwardActive ? h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                      default: () => this.rtlEnabled ? h(FastForwardIcon, null) : h(FastBackwardIcon, null)
                    }) : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(MoreIcon, null) });
                    if (renderLabel) {
                      contentNode = renderLabel({
                        type: "fast-backward",
                        node: fastBackwardNode,
                        active: this.fastBackwardActive || this.showFastBackwardMenu
                      });
                    } else {
                      contentNode = fastBackwardNode;
                    }
                    onMouseenter = this.handleFastBackwardMouseenter;
                    onMouseleave = this.handleFastBackwardMouseleave;
                    break;
                }
                const itemNode = h("div", { key: index, class: [
                  `${mergedClsPrefix}-pagination-item`,
                  pageItem.active && `${mergedClsPrefix}-pagination-item--active`,
                  type !== "page" && (type === "fast-backward" && this.showFastBackwardMenu || type === "fast-forward" && this.showFastForwardMenu) && `${mergedClsPrefix}-pagination-item--hover`,
                  disabled && `${mergedClsPrefix}-pagination-item--disabled`,
                  type === "page" && `${mergedClsPrefix}-pagination-item--clickable`
                ], onClick: () => {
                  handlePageItemClick(pageItem);
                }, onMouseenter, onMouseleave }, contentNode);
                if (type === "page" && !pageItem.mayBeFastBackward && !pageItem.mayBeFastForward) {
                  return itemNode;
                } else {
                  const key = pageItem.type === "page" ? pageItem.mayBeFastBackward ? "fast-backward" : "fast-forward" : pageItem.type;
                  return h(NPopselect, { to: this.to, key, disabled, trigger: "hover", virtualScroll: true, style: { width: "60px" }, theme: mergedTheme.peers.Popselect, themeOverrides: mergedTheme.peerOverrides.Popselect, builtinThemeOverrides: {
                    peers: {
                      InternalSelectMenu: {
                        height: "calc(var(--n-option-height) * 4.6)"
                      }
                    }
                  }, nodeProps: () => ({
                    style: {
                      justifyContent: "center"
                    }
                  }), show: type === "page" ? false : type === "fast-backward" ? this.showFastBackwardMenu : this.showFastForwardMenu, onUpdateShow: (value) => {
                    if (type === "page")
                      return;
                    if (value) {
                      if (type === "fast-backward") {
                        this.showFastBackwardMenu = value;
                      } else {
                        this.showFastForwardMenu = value;
                      }
                    } else {
                      this.showFastBackwardMenu = false;
                      this.showFastForwardMenu = false;
                    }
                  }, options: pageItem.type !== "page" ? pageItem.options : [], onUpdateValue: this.handleMenuSelect, scrollable: true, showCheckmark: false }, { default: () => itemNode });
                }
              }),
              h("div", { class: [
                `${mergedClsPrefix}-pagination-item`,
                !renderNext && `${mergedClsPrefix}-pagination-item--button`,
                {
                  [`${mergedClsPrefix}-pagination-item--disabled`]: mergedPage < 1 || mergedPage >= mergedPageCount || disabled
                }
              ], onClick: handleForwardClick }, renderNext ? renderNext({
                page: mergedPage,
                pageSize: mergedPageSize,
                pageCount: mergedPageCount,
                itemCount: this.mergedItemCount,
                startIndex: this.startIndex,
                endIndex: this.endIndex
              }) : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, {
                default: () => this.rtlEnabled ? h(BackwardIcon, null) : h(ForwardIcon, null)
              }))
            );
          case "size-picker": {
            return !simple && showSizePicker ? h(NSelect, Object.assign({ consistentMenuWidth: false, placeholder: "", showCheckmark: false, to: this.to }, this.selectProps, { size: selectSize, options: pageSizeOptions, value: mergedPageSize, disabled, theme: mergedTheme.peers.Select, themeOverrides: mergedTheme.peerOverrides.Select, onUpdateValue: handleSizePickerChange })) : null;
          }
          case "quick-jumper":
            return !simple && showQuickJumper ? h(
              "div",
              { class: `${mergedClsPrefix}-pagination-quick-jumper` },
              goto ? goto() : resolveSlot(this.$slots.goto, () => [locale.goto]),
              h(NInput, { value: jumperValue, onUpdateValue: handleJumperInput, size: inputSize, placeholder: "", disabled, theme: mergedTheme.peers.Input, themeOverrides: mergedTheme.peerOverrides.Input, onChange: handleQuickJumperChange })
            ) : null;
          default:
            return null;
        }
      }),
      renderSuffix ? h("div", { class: `${mergedClsPrefix}-pagination-suffix` }, renderSuffix({
        page: mergedPage,
        pageSize: mergedPageSize,
        pageCount: mergedPageCount,
        startIndex: this.startIndex,
        endIndex: this.endIndex,
        itemCount: this.mergedItemCount
      })) : null
    );
  }
});
const commonVariables$1 = {
  padding: "4px 0",
  optionIconSizeSmall: "14px",
  optionIconSizeMedium: "16px",
  optionIconSizeLarge: "16px",
  optionIconSizeHuge: "18px",
  optionSuffixWidthSmall: "14px",
  optionSuffixWidthMedium: "14px",
  optionSuffixWidthLarge: "16px",
  optionSuffixWidthHuge: "16px",
  optionIconSuffixWidthSmall: "32px",
  optionIconSuffixWidthMedium: "32px",
  optionIconSuffixWidthLarge: "36px",
  optionIconSuffixWidthHuge: "36px",
  optionPrefixWidthSmall: "14px",
  optionPrefixWidthMedium: "14px",
  optionPrefixWidthLarge: "16px",
  optionPrefixWidthHuge: "16px",
  optionIconPrefixWidthSmall: "36px",
  optionIconPrefixWidthMedium: "36px",
  optionIconPrefixWidthLarge: "40px",
  optionIconPrefixWidthHuge: "40px"
};
const self$1 = (vars) => {
  const { primaryColor, textColor2, dividerColor, hoverColor, popoverColor, invertedColor, borderRadius, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeHuge, heightSmall, heightMedium, heightLarge, heightHuge, textColor3, opacityDisabled } = vars;
  return Object.assign(Object.assign({}, commonVariables$1), {
    optionHeightSmall: heightSmall,
    optionHeightMedium: heightMedium,
    optionHeightLarge: heightLarge,
    optionHeightHuge: heightHuge,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    // non-inverted
    optionTextColor: textColor2,
    optionTextColorHover: textColor2,
    optionTextColorActive: primaryColor,
    optionTextColorChildActive: primaryColor,
    color: popoverColor,
    dividerColor,
    suffixColor: textColor2,
    prefixColor: textColor2,
    optionColorHover: hoverColor,
    optionColorActive: changeColor(primaryColor, { alpha: 0.1 }),
    groupHeaderTextColor: textColor3,
    // inverted
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: invertedColor,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: primaryColor,
    optionColorActiveInverted: primaryColor,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: opacityDisabled
  });
};
const dropdownLight = createTheme({
  name: "Dropdown",
  common: commonLight,
  peers: {
    Popover: popoverLight
  },
  self: self$1
});
const dropdownLight$1 = dropdownLight;
const commonVariables = {
  thPaddingSmall: "8px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "8px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px",
  sorterSize: "15px",
  resizableContainerSize: "8px",
  resizableSize: "2px",
  filterSize: "15px",
  paginationMargin: "12px 0 0 0",
  emptyPadding: "48px 0",
  actionPadding: "8px 12px",
  actionButtonMargin: "0 8px 0 0"
};
const self = (vars) => {
  const { cardColor, modalColor, popoverColor, textColor2, textColor1, tableHeaderColor, tableColorHover, iconColor, primaryColor, fontWeightStrong, borderRadius, lineHeight, fontSizeSmall, fontSizeMedium, fontSizeLarge, dividerColor, heightSmall, opacityDisabled, tableColorStriped } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    actionDividerColor: dividerColor,
    lineHeight,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderColor: composite(cardColor, dividerColor),
    tdColorHover: composite(cardColor, tableColorHover),
    tdColorStriped: composite(cardColor, tableColorStriped),
    thColor: composite(cardColor, tableHeaderColor),
    thColorHover: composite(composite(cardColor, tableHeaderColor), tableColorHover),
    tdColor: cardColor,
    tdTextColor: textColor2,
    thTextColor: textColor1,
    thFontWeight: fontWeightStrong,
    thButtonColorHover: tableColorHover,
    thIconColor: iconColor,
    thIconColorActive: primaryColor,
    // modal
    borderColorModal: composite(modalColor, dividerColor),
    tdColorHoverModal: composite(modalColor, tableColorHover),
    tdColorStripedModal: composite(modalColor, tableColorStriped),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorHoverModal: composite(composite(modalColor, tableHeaderColor), tableColorHover),
    tdColorModal: modalColor,
    // popover
    borderColorPopover: composite(popoverColor, dividerColor),
    tdColorHoverPopover: composite(popoverColor, tableColorHover),
    tdColorStripedPopover: composite(popoverColor, tableColorStriped),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thColorHoverPopover: composite(composite(popoverColor, tableHeaderColor), tableColorHover),
    tdColorPopover: popoverColor,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: primaryColor,
    loadingSize: heightSmall,
    opacityLoading: opacityDisabled
  });
};
const dataTableLight = createTheme({
  name: "DataTable",
  common: commonLight,
  peers: {
    Button: buttonLight,
    Checkbox: checkboxLight,
    Radio: radioLight,
    Pagination: paginationLight$1,
    Scrollbar: scrollbarLight,
    Empty: emptyLight,
    Popover: popoverLight,
    Ellipsis: ellipsisLight,
    Dropdown: dropdownLight$1
  },
  self
});
const dataTableLight$1 = dataTableLight;
const NPerformantEllipsis = defineComponent({
  name: "PerformantEllipsis",
  props: ellipsisProps,
  inheritAttrs: false,
  setup(props, { attrs, slots }) {
    const mouseEnteredRef = ref(false);
    const mergedClsPrefixRef = useMergedClsPrefix();
    useStyle("-ellipsis", style$9, mergedClsPrefixRef);
    const renderTrigger = () => {
      const { lineClamp } = props;
      const mergedClsPrefix = mergedClsPrefixRef.value;
      return h("span", Object.assign({}, mergeProps(attrs, {
        class: [
          `${mergedClsPrefix}-ellipsis`,
          lineClamp !== void 0 ? createLineClampClass(mergedClsPrefix) : void 0,
          props.expandTrigger === "click" ? createCursorClass(mergedClsPrefix, "pointer") : void 0
        ],
        style: lineClamp === void 0 ? {
          textOverflow: "ellipsis"
        } : {
          "-webkit-line-clamp": lineClamp
        }
      }), { onMouseenter: () => {
        mouseEnteredRef.value = true;
      } }), lineClamp ? slots : h("span", null, slots));
    };
    return {
      mouseEntered: mouseEnteredRef,
      renderTrigger
    };
  },
  render() {
    if (this.mouseEntered) {
      return h(NEllipsis, mergeProps({}, this.$attrs, this.$props), this.$slots);
    } else {
      return this.renderTrigger();
    }
  }
});
const RenderSorter = defineComponent({
  name: "DataTableRenderSorter",
  props: {
    render: {
      type: Function,
      required: true
    },
    order: {
      // asc, desc
      type: [String, Boolean],
      default: false
    }
  },
  render() {
    const { render: render2, order } = this;
    return render2({
      order
    });
  }
});
const dataTableProps = Object.assign(Object.assign({}, useTheme.props), {
  onUnstableColumnResize: Function,
  pagination: {
    type: [Object, Boolean],
    default: false
  },
  paginateSinglePage: {
    type: Boolean,
    default: true
  },
  minHeight: [Number, String],
  maxHeight: [Number, String],
  // Use any type as row data to make prop data acceptable
  columns: {
    type: Array,
    default: () => []
  },
  rowClassName: [String, Function],
  rowProps: Function,
  rowKey: Function,
  summary: [Function],
  data: {
    type: Array,
    default: () => []
  },
  loading: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  bottomBordered: {
    type: Boolean,
    default: void 0
  },
  striped: Boolean,
  scrollX: [Number, String],
  defaultCheckedRowKeys: {
    type: Array,
    default: () => []
  },
  checkedRowKeys: Array,
  singleLine: {
    type: Boolean,
    default: true
  },
  singleColumn: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  remote: Boolean,
  defaultExpandedRowKeys: {
    type: Array,
    default: []
  },
  defaultExpandAll: Boolean,
  expandedRowKeys: Array,
  stickyExpandedRows: Boolean,
  virtualScroll: Boolean,
  tableLayout: {
    type: String,
    default: "auto"
  },
  allowCheckingNotLoaded: Boolean,
  cascade: {
    type: Boolean,
    default: true
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  indent: {
    type: Number,
    default: 16
  },
  flexHeight: Boolean,
  summaryPlacement: {
    type: String,
    default: "bottom"
  },
  paginationBehaviorOnFilter: {
    type: String,
    default: "current"
  },
  scrollbarProps: Object,
  renderCell: Function,
  renderExpandIcon: Function,
  spinProps: { type: Object, default: {} },
  onLoad: Function,
  "onUpdate:page": [Function, Array],
  onUpdatePage: [Function, Array],
  "onUpdate:pageSize": [Function, Array],
  onUpdatePageSize: [Function, Array],
  "onUpdate:sorter": [Function, Array],
  onUpdateSorter: [Function, Array],
  "onUpdate:filters": [Function, Array],
  onUpdateFilters: [Function, Array],
  "onUpdate:checkedRowKeys": [Function, Array],
  onUpdateCheckedRowKeys: [Function, Array],
  "onUpdate:expandedRowKeys": [Function, Array],
  onUpdateExpandedRowKeys: [Function, Array],
  onScroll: Function,
  // deprecated
  onPageChange: [Function, Array],
  onPageSizeChange: [Function, Array],
  onSorterChange: [Function, Array],
  onFiltersChange: [Function, Array],
  onCheckedRowKeysChange: [Function, Array]
});
const dataTableInjectionKey = createInjectionKey("n-data-table");
const SortButton = defineComponent({
  name: "SortIcon",
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { mergedComponentPropsRef } = useConfig();
    const { mergedSortStateRef, mergedClsPrefixRef } = inject(dataTableInjectionKey);
    const sortStateRef = computed(() => mergedSortStateRef.value.find((state) => state.columnKey === props.column.key));
    const activeRef = computed(() => {
      return sortStateRef.value !== void 0;
    });
    const mergedSortOrderRef = computed(() => {
      const { value: sortState } = sortStateRef;
      if (sortState && activeRef.value) {
        return sortState.order;
      }
      return false;
    });
    const mergedRenderSorterRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.DataTable) === null || _b === void 0 ? void 0 : _b.renderSorter) || props.column.renderSorter;
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      mergedSortOrder: mergedSortOrderRef,
      mergedRenderSorter: mergedRenderSorterRef
    };
  },
  render() {
    const { mergedRenderSorter, mergedSortOrder, mergedClsPrefix } = this;
    const { renderSorterIcon } = this.column;
    return mergedRenderSorter ? h(RenderSorter, { render: mergedRenderSorter, order: mergedSortOrder }) : h("span", { class: [
      `${mergedClsPrefix}-data-table-sorter`,
      mergedSortOrder === "ascend" && `${mergedClsPrefix}-data-table-sorter--asc`,
      mergedSortOrder === "descend" && `${mergedClsPrefix}-data-table-sorter--desc`
    ] }, renderSorterIcon ? renderSorterIcon({ order: mergedSortOrder }) : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(ArrowDownIcon, null) }));
  }
});
const RenderFilter = defineComponent({
  name: "DataTableRenderFilter",
  props: {
    render: {
      type: Function,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const { render: render2, active, show } = this;
    return render2({
      active,
      show
    });
  }
});
const SELECTION_COL_WIDTH = 40;
const EXPAND_COL_WIDTH = 40;
function getNumberColWidth(col) {
  if (col.type === "selection") {
    return col.width === void 0 ? SELECTION_COL_WIDTH : depx(col.width);
  }
  if (col.type === "expand") {
    return col.width === void 0 ? EXPAND_COL_WIDTH : depx(col.width);
  }
  if ("children" in col)
    return void 0;
  if (typeof col.width === "string") {
    return depx(col.width);
  }
  return col.width;
}
function getStringColWidth(col) {
  var _a, _b;
  if (col.type === "selection") {
    return formatLength((_a = col.width) !== null && _a !== void 0 ? _a : SELECTION_COL_WIDTH);
  }
  if (col.type === "expand") {
    return formatLength((_b = col.width) !== null && _b !== void 0 ? _b : EXPAND_COL_WIDTH);
  }
  if ("children" in col) {
    return void 0;
  }
  return formatLength(col.width);
}
function getColKey(col) {
  if (col.type === "selection")
    return "__n_selection__";
  if (col.type === "expand")
    return "__n_expand__";
  return col.key;
}
function createShallowClonedObject(object) {
  if (!object)
    return object;
  if (typeof object === "object") {
    return Object.assign({}, object);
  }
  return object;
}
function getFlagOfOrder(order) {
  if (order === "ascend")
    return 1;
  else if (order === "descend")
    return -1;
  return 0;
}
function clampValueFollowCSSRules(value, min, max) {
  if (max !== void 0) {
    value = Math.min(value, typeof max === "number" ? max : parseFloat(max));
  }
  if (min !== void 0) {
    value = Math.max(value, typeof min === "number" ? min : parseFloat(min));
  }
  return value;
}
function createCustomWidthStyle(column, resizedWidth) {
  if (resizedWidth !== void 0) {
    return {
      width: resizedWidth,
      minWidth: resizedWidth,
      maxWidth: resizedWidth
    };
  }
  const width = getStringColWidth(column);
  const { minWidth, maxWidth } = column;
  return {
    width,
    minWidth: formatLength(minWidth) || width,
    maxWidth: formatLength(maxWidth)
  };
}
function createRowClassName(row, index, rowClassName) {
  if (typeof rowClassName === "function")
    return rowClassName(row, index);
  return rowClassName || "";
}
function shouldUseArrayInSingleMode(column) {
  return column.filterOptionValues !== void 0 || column.filterOptionValue === void 0 && column.defaultFilterOptionValues !== void 0;
}
function isColumnSortable(column) {
  if ("children" in column)
    return false;
  return !!column.sorter;
}
function isColumnResizable(column) {
  if ("children" in column && !!column.children.length)
    return false;
  return !!column.resizable;
}
function isColumnFilterable(column) {
  if ("children" in column)
    return false;
  return !!column.filter && (!!column.filterOptions || !!column.renderFilterMenu);
}
function getNextOrderOf(order) {
  if (!order)
    return "descend";
  else if (order === "descend")
    return "ascend";
  return false;
}
function createNextSorter(column, currentSortState) {
  if (column.sorter === void 0)
    return null;
  if (currentSortState === null || currentSortState.columnKey !== column.key) {
    return {
      columnKey: column.key,
      sorter: column.sorter,
      order: getNextOrderOf(false)
    };
  } else {
    return Object.assign(Object.assign({}, currentSortState), { order: getNextOrderOf(currentSortState.order) });
  }
}
function isColumnSorting(column, mergedSortState) {
  return mergedSortState.find((state) => state.columnKey === column.key && state.order) !== void 0;
}
const NDataTableFilterMenu = defineComponent({
  name: "DataTableFilterMenu",
  props: {
    column: {
      type: Object,
      required: true
    },
    radioGroupName: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    },
    value: {
      type: [Array, String, Number],
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    },
    onClear: {
      type: Function,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedThemeRef,
      localeRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    const temporalValueRef = ref(props.value);
    const checkboxGroupValueRef = computed(() => {
      const { value: temporalValue } = temporalValueRef;
      if (!Array.isArray(temporalValue))
        return null;
      return temporalValue;
    });
    const radioGroupValueRef = computed(() => {
      const { value: temporalValue } = temporalValueRef;
      if (shouldUseArrayInSingleMode(props.column)) {
        return Array.isArray(temporalValue) && temporalValue.length && temporalValue[0] || null;
      }
      if (!Array.isArray(temporalValue))
        return temporalValue;
      return null;
    });
    function doChange(value) {
      props.onChange(value);
    }
    function handleChange(value) {
      if (props.multiple && Array.isArray(value)) {
        temporalValueRef.value = value;
      } else if (shouldUseArrayInSingleMode(props.column) && !Array.isArray(value)) {
        temporalValueRef.value = [value];
      } else {
        temporalValueRef.value = value;
      }
    }
    function handleConfirmClick() {
      doChange(temporalValueRef.value);
      props.onConfirm();
    }
    function handleClearClick() {
      if (props.multiple || shouldUseArrayInSingleMode(props.column)) {
        doChange([]);
      } else {
        doChange(null);
      }
      props.onClear();
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: mergedThemeRef,
      locale: localeRef,
      checkboxGroupValue: checkboxGroupValueRef,
      radioGroupValue: radioGroupValueRef,
      handleChange,
      handleConfirmClick,
      handleClearClick
    };
  },
  render() {
    const { mergedTheme, locale, mergedClsPrefix } = this;
    return h(
      "div",
      { class: `${mergedClsPrefix}-data-table-filter-menu` },
      h(NScrollbar, null, {
        default: () => {
          const { checkboxGroupValue, handleChange } = this;
          return this.multiple ? h(NCheckboxGroup, { value: checkboxGroupValue, class: `${mergedClsPrefix}-data-table-filter-menu__group`, onUpdateValue: handleChange }, {
            default: () => this.options.map((option) => {
              return h(NCheckbox, { key: option.value, theme: mergedTheme.peers.Checkbox, themeOverrides: mergedTheme.peerOverrides.Checkbox, value: option.value }, { default: () => option.label });
            })
          }) : h(NRadioGroup, { name: this.radioGroupName, class: `${mergedClsPrefix}-data-table-filter-menu__group`, value: this.radioGroupValue, onUpdateValue: this.handleChange }, {
            default: () => this.options.map((option) => h(NRadio, { key: option.value, value: option.value, theme: mergedTheme.peers.Radio, themeOverrides: mergedTheme.peerOverrides.Radio }, { default: () => option.label }))
          });
        }
      }),
      h(
        "div",
        { class: `${mergedClsPrefix}-data-table-filter-menu__action` },
        h(NButton, { size: "tiny", theme: mergedTheme.peers.Button, themeOverrides: mergedTheme.peerOverrides.Button, onClick: this.handleClearClick }, { default: () => locale.clear }),
        h(NButton, { theme: mergedTheme.peers.Button, themeOverrides: mergedTheme.peerOverrides.Button, type: "primary", size: "tiny", onClick: this.handleConfirmClick }, { default: () => locale.confirm })
      )
    );
  }
});
function createFilterState(currentFilterState, columnKey, mergedFilterValue) {
  const nextFilterState = Object.assign({}, currentFilterState);
  nextFilterState[columnKey] = mergedFilterValue;
  return nextFilterState;
}
const FilterButton = defineComponent({
  name: "DataTableFilterButton",
  props: {
    column: {
      type: Object,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { mergedComponentPropsRef } = useConfig();
    const {
      mergedThemeRef,
      mergedClsPrefixRef,
      mergedFilterStateRef,
      filterMenuCssVarsRef,
      paginationBehaviorOnFilterRef,
      doUpdatePage,
      doUpdateFilters
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    const showPopoverRef = ref(false);
    const filterStateRef = mergedFilterStateRef;
    const filterMultipleRef = computed(() => {
      return props.column.filterMultiple !== false;
    });
    const mergedFilterValueRef = computed(() => {
      const filterValue = filterStateRef.value[props.column.key];
      if (filterValue === void 0) {
        const { value: multiple } = filterMultipleRef;
        if (multiple)
          return [];
        else
          return null;
      }
      return filterValue;
    });
    const activeRef = computed(() => {
      const { value: filterValue } = mergedFilterValueRef;
      if (Array.isArray(filterValue)) {
        return filterValue.length > 0;
      }
      return filterValue !== null;
    });
    const mergedRenderFilterRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.DataTable) === null || _b === void 0 ? void 0 : _b.renderFilter) || props.column.renderFilter;
    });
    function handleFilterChange(mergedFilterValue) {
      const nextFilterState = createFilterState(filterStateRef.value, props.column.key, mergedFilterValue);
      doUpdateFilters(nextFilterState, props.column);
      if (paginationBehaviorOnFilterRef.value === "first") {
        doUpdatePage(1);
      }
    }
    function handleFilterMenuCancel() {
      showPopoverRef.value = false;
    }
    function handleFilterMenuConfirm() {
      showPopoverRef.value = false;
    }
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      showPopover: showPopoverRef,
      mergedRenderFilter: mergedRenderFilterRef,
      filterMultiple: filterMultipleRef,
      mergedFilterValue: mergedFilterValueRef,
      filterMenuCssVars: filterMenuCssVarsRef,
      handleFilterChange,
      handleFilterMenuConfirm,
      handleFilterMenuCancel
    };
  },
  render() {
    const { mergedTheme, mergedClsPrefix, handleFilterMenuCancel } = this;
    return h(NPopover, { show: this.showPopover, onUpdateShow: (v) => this.showPopover = v, trigger: "click", theme: mergedTheme.peers.Popover, themeOverrides: mergedTheme.peerOverrides.Popover, placement: "bottom", style: { padding: 0 } }, {
      trigger: () => {
        const { mergedRenderFilter } = this;
        if (mergedRenderFilter) {
          return h(RenderFilter, { "data-data-table-filter": true, render: mergedRenderFilter, active: this.active, show: this.showPopover });
        }
        const { renderFilterIcon } = this.column;
        return h("div", { "data-data-table-filter": true, class: [
          `${mergedClsPrefix}-data-table-filter`,
          {
            [`${mergedClsPrefix}-data-table-filter--active`]: this.active,
            [`${mergedClsPrefix}-data-table-filter--show`]: this.showPopover
          }
        ] }, renderFilterIcon ? renderFilterIcon({
          active: this.active,
          show: this.showPopover
        }) : h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(FilterIcon, null) }));
      },
      default: () => {
        const { renderFilterMenu } = this.column;
        return renderFilterMenu ? renderFilterMenu({ hide: handleFilterMenuCancel }) : h(NDataTableFilterMenu, { style: this.filterMenuCssVars, radioGroupName: String(this.column.key), multiple: this.filterMultiple, value: this.mergedFilterValue, options: this.options, column: this.column, onChange: this.handleFilterChange, onClear: this.handleFilterMenuCancel, onConfirm: this.handleFilterMenuConfirm });
      }
    });
  }
});
const ResizeButton = defineComponent({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(props) {
    const { mergedClsPrefixRef } = inject(dataTableInjectionKey);
    const activeRef = ref(false);
    let startX = 0;
    function getMouseX(e) {
      return e.clientX;
    }
    function handleMousedown(e) {
      var _a;
      e.preventDefault();
      const alreadyStarted = activeRef.value;
      startX = getMouseX(e);
      activeRef.value = true;
      if (!alreadyStarted) {
        on("mousemove", window, handleMousemove);
        on("mouseup", window, handleMouseup);
        (_a = props.onResizeStart) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    }
    function handleMousemove(e) {
      var _a;
      (_a = props.onResize) === null || _a === void 0 ? void 0 : _a.call(props, getMouseX(e) - startX);
    }
    function handleMouseup() {
      var _a;
      activeRef.value = false;
      (_a = props.onResizeEnd) === null || _a === void 0 ? void 0 : _a.call(props);
      off("mousemove", window, handleMousemove);
      off("mouseup", window, handleMouseup);
    }
    onBeforeUnmount(() => {
      off("mousemove", window, handleMousemove);
      off("mouseup", window, handleMouseup);
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      active: activeRef,
      handleMousedown
    };
  },
  render() {
    const { mergedClsPrefix } = this;
    return h("span", { "data-data-table-resizable": true, class: [
      `${mergedClsPrefix}-data-table-resize-button`,
      this.active && `${mergedClsPrefix}-data-table-resize-button--active`
    ], onMousedown: this.handleMousedown });
  }
});
const NDropdownDivider = defineComponent({
  name: "DropdownDivider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  render() {
    return h("div", { class: `${this.clsPrefix}-dropdown-divider` });
  }
});
const dropdownMenuInjectionKey = createInjectionKey("n-dropdown-menu");
const dropdownInjectionKey = createInjectionKey("n-dropdown");
const dropdownOptionInjectionKey = createInjectionKey("n-dropdown-option");
function isSubmenuNode(rawNode, childrenField) {
  return rawNode.type === "submenu" || rawNode.type === void 0 && rawNode[childrenField] !== void 0;
}
function isGroupNode(rawNode) {
  return rawNode.type === "group";
}
function isDividerNode(rawNode) {
  return rawNode.type === "divider";
}
function isRenderNode(rawNode) {
  return rawNode.type === "render";
}
const NDropdownOption = defineComponent({
  name: "DropdownOption",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    },
    parentKey: {
      type: [String, Number],
      default: null
    },
    placement: {
      type: String,
      default: "right-start"
    },
    props: Object,
    scrollable: Boolean
  },
  setup(props) {
    const NDropdown2 = inject(dropdownInjectionKey);
    const { hoverKeyRef, keyboardKeyRef, lastToggledSubmenuKeyRef, pendingKeyPathRef, activeKeyPathRef, animatedRef, mergedShowRef, renderLabelRef, renderIconRef, labelFieldRef, childrenFieldRef, renderOptionRef, nodePropsRef, menuPropsRef } = NDropdown2;
    const NDropdownOption2 = inject(dropdownOptionInjectionKey, null);
    const NDropdownMenu2 = inject(dropdownMenuInjectionKey);
    const NPopoverBody = inject(popoverBodyInjectionKey);
    const rawNodeRef = computed(() => props.tmNode.rawNode);
    const hasSubmenuRef = computed(() => {
      const { value: childrenField } = childrenFieldRef;
      return isSubmenuNode(props.tmNode.rawNode, childrenField);
    });
    const mergedDisabledRef = computed(() => {
      const { disabled } = props.tmNode;
      return disabled;
    });
    const showSubmenuRef = computed(() => {
      if (!hasSubmenuRef.value)
        return false;
      const { key, disabled } = props.tmNode;
      if (disabled)
        return false;
      const { value: hoverKey } = hoverKeyRef;
      const { value: keyboardKey } = keyboardKeyRef;
      const { value: lastToggledSubmenuKey } = lastToggledSubmenuKeyRef;
      const { value: pendingKeyPath } = pendingKeyPathRef;
      if (hoverKey !== null)
        return pendingKeyPath.includes(key);
      if (keyboardKey !== null) {
        return pendingKeyPath.includes(key) && pendingKeyPath[pendingKeyPath.length - 1] !== key;
      }
      if (lastToggledSubmenuKey !== null)
        return pendingKeyPath.includes(key);
      return false;
    });
    const shouldDelayRef = computed(() => {
      return keyboardKeyRef.value === null && !animatedRef.value;
    });
    const deferredShowSubmenuRef = useDeferredTrue(showSubmenuRef, 300, shouldDelayRef);
    const parentEnteringSubmenuRef = computed(() => {
      return !!(NDropdownOption2 === null || NDropdownOption2 === void 0 ? void 0 : NDropdownOption2.enteringSubmenuRef.value);
    });
    const enteringSubmenuRef = ref(false);
    provide(dropdownOptionInjectionKey, {
      enteringSubmenuRef
    });
    function handleSubmenuBeforeEnter() {
      enteringSubmenuRef.value = true;
    }
    function handleSubmenuAfterEnter() {
      enteringSubmenuRef.value = false;
    }
    function handleMouseEnter() {
      const { parentKey, tmNode } = props;
      if (tmNode.disabled)
        return;
      if (!mergedShowRef.value)
        return;
      lastToggledSubmenuKeyRef.value = parentKey;
      keyboardKeyRef.value = null;
      hoverKeyRef.value = tmNode.key;
    }
    function handleMouseMove() {
      const { tmNode } = props;
      if (tmNode.disabled)
        return;
      if (!mergedShowRef.value)
        return;
      if (hoverKeyRef.value === tmNode.key)
        return;
      handleMouseEnter();
    }
    function handleMouseLeave(e) {
      if (props.tmNode.disabled)
        return;
      if (!mergedShowRef.value)
        return;
      const { relatedTarget } = e;
      if (relatedTarget && !happensIn({ target: relatedTarget }, "dropdownOption") && !happensIn({ target: relatedTarget }, "scrollbarRail")) {
        hoverKeyRef.value = null;
      }
    }
    function handleClick() {
      const { value: hasSubmenu } = hasSubmenuRef;
      const { tmNode } = props;
      if (!mergedShowRef.value)
        return;
      if (!hasSubmenu && !tmNode.disabled) {
        NDropdown2.doSelect(tmNode.key, tmNode.rawNode);
        NDropdown2.doUpdateShow(false);
      }
    }
    return {
      labelField: labelFieldRef,
      renderLabel: renderLabelRef,
      renderIcon: renderIconRef,
      siblingHasIcon: NDropdownMenu2.showIconRef,
      siblingHasSubmenu: NDropdownMenu2.hasSubmenuRef,
      menuProps: menuPropsRef,
      popoverBody: NPopoverBody,
      animated: animatedRef,
      mergedShowSubmenu: computed(() => {
        return deferredShowSubmenuRef.value && !parentEnteringSubmenuRef.value;
      }),
      rawNode: rawNodeRef,
      hasSubmenu: hasSubmenuRef,
      pending: useMemo(() => {
        const { value: pendingKeyPath } = pendingKeyPathRef;
        const { key } = props.tmNode;
        return pendingKeyPath.includes(key);
      }),
      childActive: useMemo(() => {
        const { value: activeKeyPath } = activeKeyPathRef;
        const { key } = props.tmNode;
        const index = activeKeyPath.findIndex((k) => key === k);
        if (index === -1)
          return false;
        return index < activeKeyPath.length - 1;
      }),
      active: useMemo(() => {
        const { value: activeKeyPath } = activeKeyPathRef;
        const { key } = props.tmNode;
        const index = activeKeyPath.findIndex((k) => key === k);
        if (index === -1)
          return false;
        return index === activeKeyPath.length - 1;
      }),
      mergedDisabled: mergedDisabledRef,
      renderOption: renderOptionRef,
      nodeProps: nodePropsRef,
      handleClick,
      handleMouseMove,
      handleMouseEnter,
      handleMouseLeave,
      handleSubmenuBeforeEnter,
      handleSubmenuAfterEnter
    };
  },
  render() {
    var _a, _b;
    const { animated, rawNode, mergedShowSubmenu, clsPrefix, siblingHasIcon, siblingHasSubmenu, renderLabel, renderIcon, renderOption, nodeProps, props, scrollable } = this;
    let submenuVNode = null;
    if (mergedShowSubmenu) {
      const submenuNodeProps = (_a = this.menuProps) === null || _a === void 0 ? void 0 : _a.call(
        this,
        rawNode,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        rawNode.children
      );
      submenuVNode = h(NDropdownMenu, Object.assign({}, submenuNodeProps, { clsPrefix, scrollable: this.scrollable, tmNodes: this.tmNode.children, parentKey: this.tmNode.key }));
    }
    const builtinProps = {
      class: [
        `${clsPrefix}-dropdown-option-body`,
        this.pending && `${clsPrefix}-dropdown-option-body--pending`,
        this.active && `${clsPrefix}-dropdown-option-body--active`,
        this.childActive && `${clsPrefix}-dropdown-option-body--child-active`,
        this.mergedDisabled && `${clsPrefix}-dropdown-option-body--disabled`
      ],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    };
    const optionNodeProps = nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode);
    const node = h(
      "div",
      Object.assign({ class: [`${clsPrefix}-dropdown-option`, optionNodeProps === null || optionNodeProps === void 0 ? void 0 : optionNodeProps.class], "data-dropdown-option": true }, optionNodeProps),
      h("div", mergeProps(builtinProps, props), [
        h("div", { class: [
          `${clsPrefix}-dropdown-option-body__prefix`,
          siblingHasIcon && `${clsPrefix}-dropdown-option-body__prefix--show-icon`
        ] }, [renderIcon ? renderIcon(rawNode) : render(rawNode.icon)]),
        h("div", { "data-dropdown-option": true, class: `${clsPrefix}-dropdown-option-body__label` }, renderLabel ? renderLabel(rawNode) : render((_b = rawNode[this.labelField]) !== null && _b !== void 0 ? _b : rawNode.title)),
        h("div", { "data-dropdown-option": true, class: [
          `${clsPrefix}-dropdown-option-body__suffix`,
          siblingHasSubmenu && `${clsPrefix}-dropdown-option-body__suffix--has-submenu`
        ] }, this.hasSubmenu ? h(NIcon, null, {
          default: () => h(ChevronRightIcon, null)
        }) : null)
      ]),
      this.hasSubmenu ? h(VBinder, null, {
        default: () => [
          h(VTarget, null, {
            default: () => h(
              "div",
              { class: `${clsPrefix}-dropdown-offset-container` },
              h(VFollower, { show: this.mergedShowSubmenu, placement: this.placement, to: scrollable ? this.popoverBody || void 0 : void 0, teleportDisabled: !scrollable }, {
                default: () => {
                  return h("div", { class: `${clsPrefix}-dropdown-menu-wrapper` }, animated ? h(Transition, { onBeforeEnter: this.handleSubmenuBeforeEnter, onAfterEnter: this.handleSubmenuAfterEnter, name: "fade-in-scale-up-transition", appear: true }, {
                    default: () => submenuVNode
                  }) : submenuVNode);
                }
              })
            )
          })
        ]
      }) : null
    );
    if (renderOption) {
      return renderOption({ node, option: rawNode });
    }
    return node;
  }
});
const NDropdownGroupHeader = defineComponent({
  name: "DropdownGroupHeader",
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
  setup() {
    const {
      showIconRef,
      hasSubmenuRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dropdownMenuInjectionKey);
    const { renderLabelRef, labelFieldRef, nodePropsRef, renderOptionRef } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inject(dropdownInjectionKey)
    );
    return {
      labelField: labelFieldRef,
      showIcon: showIconRef,
      hasSubmenu: hasSubmenuRef,
      renderLabel: renderLabelRef,
      nodeProps: nodePropsRef,
      renderOption: renderOptionRef
    };
  },
  render() {
    var _a;
    const { clsPrefix, hasSubmenu, showIcon, nodeProps, renderLabel, renderOption } = this;
    const { rawNode } = this.tmNode;
    const node = h(
      "div",
      Object.assign({ class: `${clsPrefix}-dropdown-option` }, nodeProps === null || nodeProps === void 0 ? void 0 : nodeProps(rawNode)),
      h(
        "div",
        { class: `${clsPrefix}-dropdown-option-body ${clsPrefix}-dropdown-option-body--group` },
        h("div", { "data-dropdown-option": true, class: [
          `${clsPrefix}-dropdown-option-body__prefix`,
          showIcon && `${clsPrefix}-dropdown-option-body__prefix--show-icon`
        ] }, render(rawNode.icon)),
        h("div", { class: `${clsPrefix}-dropdown-option-body__label`, "data-dropdown-option": true }, renderLabel ? renderLabel(rawNode) : render((_a = rawNode.title) !== null && _a !== void 0 ? _a : rawNode[this.labelField])),
        h("div", { class: [
          `${clsPrefix}-dropdown-option-body__suffix`,
          hasSubmenu && `${clsPrefix}-dropdown-option-body__suffix--has-submenu`
        ], "data-dropdown-option": true })
      )
    );
    if (renderOption) {
      return renderOption({ node, option: rawNode });
    }
    return node;
  }
});
const NDropdownGroup = defineComponent({
  name: "NDropdownGroup",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    tmNode: {
      type: Object,
      required: true
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  render() {
    const { tmNode, parentKey, clsPrefix } = this;
    const { children } = tmNode;
    return h(
      Fragment,
      null,
      h(NDropdownGroupHeader, { clsPrefix, tmNode, key: tmNode.key }),
      children === null || children === void 0 ? void 0 : children.map((child) => {
        const { rawNode } = child;
        if (rawNode.show === false)
          return null;
        if (isDividerNode(rawNode)) {
          return h(NDropdownDivider, {
            clsPrefix,
            key: child.key
          });
        }
        if (child.isGroup) {
          warn("dropdown", "`group` node is not allowed to be put in `group` node.");
          return null;
        }
        return h(NDropdownOption, { clsPrefix, tmNode: child, parentKey, key: child.key });
      })
    );
  }
});
const NDropdownRenderOption = defineComponent({
  name: "DropdownRenderOption",
  props: {
    tmNode: {
      type: Object,
      required: true
    }
  },
  render() {
    const { rawNode: { render: render2, props } } = this.tmNode;
    return h("div", props, [render2 === null || render2 === void 0 ? void 0 : render2()]);
  }
});
const NDropdownMenu = defineComponent({
  name: "DropdownMenu",
  props: {
    scrollable: Boolean,
    showArrow: Boolean,
    arrowStyle: [String, Object],
    clsPrefix: {
      type: String,
      required: true
    },
    tmNodes: {
      type: Array,
      default: () => []
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  setup(props) {
    const { renderIconRef, childrenFieldRef } = inject(dropdownInjectionKey);
    provide(dropdownMenuInjectionKey, {
      showIconRef: computed(() => {
        const renderIcon = renderIconRef.value;
        return props.tmNodes.some((tmNode) => {
          var _a;
          if (tmNode.isGroup) {
            return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({ rawNode: rawChild }) => renderIcon ? renderIcon(rawChild) : rawChild.icon);
          }
          const { rawNode } = tmNode;
          return renderIcon ? renderIcon(rawNode) : rawNode.icon;
        });
      }),
      hasSubmenuRef: computed(() => {
        const { value: childrenField } = childrenFieldRef;
        return props.tmNodes.some((tmNode) => {
          var _a;
          if (tmNode.isGroup) {
            return (_a = tmNode.children) === null || _a === void 0 ? void 0 : _a.some(({ rawNode: rawChild }) => isSubmenuNode(rawChild, childrenField));
          }
          const { rawNode } = tmNode;
          return isSubmenuNode(rawNode, childrenField);
        });
      })
    });
    const bodyRef = ref(null);
    provide(modalBodyInjectionKey, null);
    provide(drawerBodyInjectionKey, null);
    provide(popoverBodyInjectionKey, bodyRef);
    return {
      bodyRef
    };
  },
  render() {
    const { parentKey, clsPrefix, scrollable } = this;
    const menuOptionsNode = this.tmNodes.map((tmNode) => {
      const { rawNode } = tmNode;
      if (rawNode.show === false)
        return null;
      if (isRenderNode(rawNode)) {
        return h(NDropdownRenderOption, { tmNode, key: tmNode.key });
      }
      if (isDividerNode(rawNode)) {
        return h(NDropdownDivider, { clsPrefix, key: tmNode.key });
      }
      if (isGroupNode(rawNode)) {
        return h(NDropdownGroup, { clsPrefix, tmNode, parentKey, key: tmNode.key });
      }
      return h(NDropdownOption, { clsPrefix, tmNode, parentKey, key: tmNode.key, props: rawNode.props, scrollable });
    });
    return h(
      "div",
      { class: [
        `${clsPrefix}-dropdown-menu`,
        scrollable && `${clsPrefix}-dropdown-menu--scrollable`
      ], ref: "bodyRef" },
      scrollable ? h(XScrollbar, { contentClass: `${clsPrefix}-dropdown-menu__content` }, {
        default: () => menuOptionsNode
      }) : menuOptionsNode,
      this.showArrow ? renderArrow({
        clsPrefix,
        arrowStyle: this.arrowStyle
      }) : null
    );
  }
});
const style$1 = cB("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [fadeInScaleUpTransition(), cB("dropdown-option", `
 position: relative;
 `, [c$1("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [c$1("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [c$1("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), cNotM("disabled", [cM("pending", `
 color: var(--n-option-text-color-hover);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), c$1("&::before", "background-color: var(--n-option-color-hover);")]), cM("active", `
 color: var(--n-option-text-color-active);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), c$1("&::before", "background-color: var(--n-option-color-active);")]), cM("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), cM("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [cE("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [cM("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), cE("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [cM("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), cB("icon", `
 font-size: var(--n-option-icon-size);
 `)]), cE("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), cE("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [cM("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), cB("icon", `
 font-size: var(--n-option-icon-size);
 `)]), cB("dropdown-menu", "pointer-events: all;")]), cB("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), cB("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), cB("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("scrollable", `
 padding: var(--n-padding);
 `), cM("scrollable", [cE("content", `
 padding: var(--n-padding);
 `)])]);
const dropdownBaseProps = {
  animated: {
    type: Boolean,
    default: true
  },
  keyboard: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: "medium"
  },
  inverted: Boolean,
  placement: {
    type: String,
    default: "bottom"
  },
  onSelect: [Function, Array],
  options: {
    type: Array,
    default: () => []
  },
  menuProps: Function,
  showArrow: Boolean,
  renderLabel: Function,
  renderIcon: Function,
  renderOption: Function,
  nodeProps: Function,
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  // for menu, not documented
  value: [String, Number]
};
const popoverPropKeys = Object.keys(popoverBaseProps);
const dropdownProps = Object.assign(Object.assign(Object.assign({}, popoverBaseProps), dropdownBaseProps), useTheme.props);
const NDropdown = defineComponent({
  name: "Dropdown",
  inheritAttrs: false,
  props: dropdownProps,
  setup(props) {
    const uncontrolledShowRef = ref(false);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    const treemateRef = computed(() => {
      const { keyField, childrenField } = props;
      return createTreeMate(props.options, {
        getKey(node) {
          return node[keyField];
        },
        getDisabled(node) {
          return node.disabled === true;
        },
        getIgnored(node) {
          return node.type === "divider" || node.type === "render";
        },
        getChildren(node) {
          return node[childrenField];
        }
      });
    });
    const tmNodesRef = computed(() => {
      return treemateRef.value.treeNodes;
    });
    const hoverKeyRef = ref(null);
    const keyboardKeyRef = ref(null);
    const lastToggledSubmenuKeyRef = ref(null);
    const pendingKeyRef = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = hoverKeyRef.value) !== null && _a !== void 0 ? _a : keyboardKeyRef.value) !== null && _b !== void 0 ? _b : lastToggledSubmenuKeyRef.value) !== null && _c !== void 0 ? _c : null;
    });
    const pendingKeyPathRef = computed(() => treemateRef.value.getPath(pendingKeyRef.value).keyPath);
    const activeKeyPathRef = computed(() => treemateRef.value.getPath(props.value).keyPath);
    const keyboardEnabledRef = useMemo(() => {
      return props.keyboard && mergedShowRef.value;
    });
    useKeyboard({
      keydown: {
        ArrowUp: {
          prevent: true,
          handler: handleKeydownUp
        },
        ArrowRight: {
          prevent: true,
          handler: handleKeydownRight
        },
        ArrowDown: {
          prevent: true,
          handler: handleKeydownDown
        },
        ArrowLeft: {
          prevent: true,
          handler: handleKeydownLeft
        },
        Enter: {
          prevent: true,
          handler: handleKeydownEnter
        },
        Escape: handleKeydownEsc
      }
    }, keyboardEnabledRef);
    const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const themeRef = useTheme("Dropdown", "-dropdown", style$1, dropdownLight$1, props, mergedClsPrefixRef);
    provide(dropdownInjectionKey, {
      labelFieldRef: toRef(props, "labelField"),
      childrenFieldRef: toRef(props, "childrenField"),
      renderLabelRef: toRef(props, "renderLabel"),
      renderIconRef: toRef(props, "renderIcon"),
      hoverKeyRef,
      keyboardKeyRef,
      lastToggledSubmenuKeyRef,
      pendingKeyPathRef,
      activeKeyPathRef,
      animatedRef: toRef(props, "animated"),
      mergedShowRef,
      nodePropsRef: toRef(props, "nodeProps"),
      renderOptionRef: toRef(props, "renderOption"),
      menuPropsRef: toRef(props, "menuProps"),
      doSelect,
      doUpdateShow
    });
    watch(mergedShowRef, (value) => {
      if (!props.animated && !value) {
        clearPendingState();
      }
    });
    function doSelect(key, node) {
      const { onSelect } = props;
      if (onSelect)
        call(onSelect, key, node);
    }
    function doUpdateShow(value) {
      const { "onUpdate:show": _onUpdateShow, onUpdateShow } = props;
      if (_onUpdateShow)
        call(_onUpdateShow, value);
      if (onUpdateShow)
        call(onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    function clearPendingState() {
      hoverKeyRef.value = null;
      keyboardKeyRef.value = null;
      lastToggledSubmenuKeyRef.value = null;
    }
    function handleKeydownEsc() {
      doUpdateShow(false);
    }
    function handleKeydownLeft() {
      handleKeydown("left");
    }
    function handleKeydownRight() {
      handleKeydown("right");
    }
    function handleKeydownUp() {
      handleKeydown("up");
    }
    function handleKeydownDown() {
      handleKeydown("down");
    }
    function handleKeydownEnter() {
      const pendingNode = getPendingNode();
      if ((pendingNode === null || pendingNode === void 0 ? void 0 : pendingNode.isLeaf) && mergedShowRef.value) {
        doSelect(pendingNode.key, pendingNode.rawNode);
        doUpdateShow(false);
      }
    }
    function getPendingNode() {
      var _a;
      const { value: treeMate } = treemateRef;
      const { value: pendingKey } = pendingKeyRef;
      if (!treeMate || pendingKey === null)
        return null;
      return (_a = treeMate.getNode(pendingKey)) !== null && _a !== void 0 ? _a : null;
    }
    function handleKeydown(direction) {
      const { value: pendingKey } = pendingKeyRef;
      const { value: { getFirstAvailableNode } } = treemateRef;
      let nextKeyboardKey = null;
      if (pendingKey === null) {
        const firstNode = getFirstAvailableNode();
        if (firstNode !== null) {
          nextKeyboardKey = firstNode.key;
        }
      } else {
        const currentNode = getPendingNode();
        if (currentNode) {
          let nextNode;
          switch (direction) {
            case "down":
              nextNode = currentNode.getNext();
              break;
            case "up":
              nextNode = currentNode.getPrev();
              break;
            case "right":
              nextNode = currentNode.getChild();
              break;
            case "left":
              nextNode = currentNode.getParent();
              break;
          }
          if (nextNode)
            nextKeyboardKey = nextNode.key;
        }
      }
      if (nextKeyboardKey !== null) {
        hoverKeyRef.value = null;
        keyboardKeyRef.value = nextKeyboardKey;
      }
    }
    const cssVarsRef = computed(() => {
      const { size, inverted } = props;
      const { common: { cubicBezierEaseInOut }, self: self2 } = themeRef.value;
      const { padding, dividerColor, borderRadius, optionOpacityDisabled, [createKey("optionIconSuffixWidth", size)]: optionIconSuffixWidth, [createKey("optionSuffixWidth", size)]: optionSuffixWidth, [createKey("optionIconPrefixWidth", size)]: optionIconPrefixWidth, [createKey("optionPrefixWidth", size)]: optionPrefixWidth, [createKey("fontSize", size)]: fontSize, [createKey("optionHeight", size)]: optionHeight, [createKey("optionIconSize", size)]: optionIconSize } = self2;
      const vars = {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-padding": padding,
        "--n-border-radius": borderRadius,
        "--n-option-height": optionHeight,
        "--n-option-prefix-width": optionPrefixWidth,
        "--n-option-icon-prefix-width": optionIconPrefixWidth,
        "--n-option-suffix-width": optionSuffixWidth,
        "--n-option-icon-suffix-width": optionIconSuffixWidth,
        "--n-option-icon-size": optionIconSize,
        "--n-divider-color": dividerColor,
        "--n-option-opacity-disabled": optionOpacityDisabled
      };
      if (inverted) {
        vars["--n-color"] = self2.colorInverted;
        vars["--n-option-color-hover"] = self2.optionColorHoverInverted;
        vars["--n-option-color-active"] = self2.optionColorActiveInverted;
        vars["--n-option-text-color"] = self2.optionTextColorInverted;
        vars["--n-option-text-color-hover"] = self2.optionTextColorHoverInverted;
        vars["--n-option-text-color-active"] = self2.optionTextColorActiveInverted;
        vars["--n-option-text-color-child-active"] = self2.optionTextColorChildActiveInverted;
        vars["--n-prefix-color"] = self2.prefixColorInverted;
        vars["--n-suffix-color"] = self2.suffixColorInverted;
        vars["--n-group-header-text-color"] = self2.groupHeaderTextColorInverted;
      } else {
        vars["--n-color"] = self2.color;
        vars["--n-option-color-hover"] = self2.optionColorHover;
        vars["--n-option-color-active"] = self2.optionColorActive;
        vars["--n-option-text-color"] = self2.optionTextColor;
        vars["--n-option-text-color-hover"] = self2.optionTextColorHover;
        vars["--n-option-text-color-active"] = self2.optionTextColorActive;
        vars["--n-option-text-color-child-active"] = self2.optionTextColorChildActive;
        vars["--n-prefix-color"] = self2.prefixColor;
        vars["--n-suffix-color"] = self2.suffixColor;
        vars["--n-group-header-text-color"] = self2.groupHeaderTextColor;
      }
      return vars;
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dropdown", computed(() => `${props.size[0]}${props.inverted ? "i" : ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: themeRef,
      // data
      tmNodes: tmNodesRef,
      // show
      mergedShow: mergedShowRef,
      // methods
      handleAfterLeave: () => {
        if (!props.animated)
          return;
        clearPendingState();
      },
      doUpdateShow,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const renderPopoverBody = (className, ref2, style2, onMouseenter, onMouseleave) => {
      var _a;
      const { mergedClsPrefix, menuProps } = this;
      (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
      const menuNodeProps = (menuProps === null || menuProps === void 0 ? void 0 : menuProps(void 0, this.tmNodes.map((v) => v.rawNode))) || {};
      const dropdownProps2 = {
        ref: createRefSetter(ref2),
        class: [className, `${mergedClsPrefix}-dropdown`, this.themeClass],
        clsPrefix: mergedClsPrefix,
        tmNodes: this.tmNodes,
        style: [style2, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        scrollable: this.scrollable,
        onMouseenter,
        onMouseleave
      };
      return h(NDropdownMenu, mergeProps(this.$attrs, dropdownProps2, menuNodeProps));
    };
    const { mergedTheme } = this;
    const popoverProps = {
      show: this.mergedShow,
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalOnAfterLeave: this.handleAfterLeave,
      internalRenderBody: renderPopoverBody,
      onUpdateShow: this.doUpdateShow,
      "onUpdate:show": void 0
    };
    return h(NPopover, Object.assign({}, keep(this.$props, popoverPropKeys), popoverProps), {
      trigger: () => {
        var _a, _b;
        return (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    });
  }
});
const allKey = "_n_all__";
const noneKey = "_n_none__";
function createSelectHandler(options, rawPaginatedDataRef, doCheckAll, doUncheckAll) {
  if (!options)
    return () => {
    };
  return (key) => {
    for (const option of options) {
      switch (key) {
        case allKey:
          doCheckAll(true);
          return;
        case noneKey:
          doUncheckAll(true);
          return;
        default:
          if (typeof option === "object" && option.key === key) {
            option.onSelect(rawPaginatedDataRef.value);
            return;
          }
      }
    }
  };
}
function createDropdownOptions(options, localeRef) {
  if (!options)
    return [];
  return options.map((option) => {
    switch (option) {
      case "all":
        return {
          label: localeRef.checkTableAll,
          key: allKey
        };
      case "none":
        return {
          label: localeRef.uncheckTableAll,
          key: noneKey
        };
      default:
        return option;
    }
  });
}
const SelectionMenu = defineComponent({
  name: "DataTableSelectionMenu",
  props: {
    clsPrefix: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {
      props: dataTableProps2,
      localeRef,
      checkOptionsRef,
      rawPaginatedDataRef,
      doCheckAll,
      doUncheckAll
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    const handleSelectRef = computed(() => createSelectHandler(checkOptionsRef.value, rawPaginatedDataRef, doCheckAll, doUncheckAll));
    const optionsRef = computed(() => createDropdownOptions(checkOptionsRef.value, localeRef.value));
    return () => {
      var _a, _b, _c, _d;
      const { clsPrefix } = props;
      return h(NDropdown, { theme: (_b = (_a = dataTableProps2.theme) === null || _a === void 0 ? void 0 : _a.peers) === null || _b === void 0 ? void 0 : _b.Dropdown, themeOverrides: (_d = (_c = dataTableProps2.themeOverrides) === null || _c === void 0 ? void 0 : _c.peers) === null || _d === void 0 ? void 0 : _d.Dropdown, options: optionsRef.value, onSelect: handleSelectRef.value }, {
        default: () => h(NBaseIcon, { clsPrefix, class: `${clsPrefix}-data-table-check-extra` }, {
          default: () => h(ChevronDownIcon, null)
        })
      });
    };
  }
});
function renderTitle(column) {
  return typeof column.title === "function" ? column.title(column) : column.title;
}
const TableHeader = defineComponent({
  name: "DataTableHeader",
  props: {
    discrete: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const {
      mergedClsPrefixRef,
      scrollXRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      allRowsCheckedRef,
      someRowsCheckedRef,
      rowsRef,
      colsRef,
      mergedThemeRef,
      checkOptionsRef,
      mergedSortStateRef,
      componentId,
      mergedTableLayoutRef,
      headerCheckboxDisabledRef,
      onUnstableColumnResize,
      doUpdateResizableWidth,
      handleTableHeaderScroll,
      deriveNextSorter,
      doUncheckAll,
      doCheckAll
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    const cellElsRef = ref({});
    function getCellActualWidth(key) {
      const element = cellElsRef.value[key];
      return element === null || element === void 0 ? void 0 : element.getBoundingClientRect().width;
    }
    function handleCheckboxUpdateChecked() {
      if (allRowsCheckedRef.value) {
        doUncheckAll();
      } else {
        doCheckAll();
      }
    }
    function handleColHeaderClick(e, column) {
      if (happensIn(e, "dataTableFilter") || happensIn(e, "dataTableResizable")) {
        return;
      }
      if (!isColumnSortable(column))
        return;
      const activeSorter = mergedSortStateRef.value.find((state) => state.columnKey === column.key) || null;
      const nextSorter = createNextSorter(column, activeSorter);
      deriveNextSorter(nextSorter);
    }
    const resizeStartWidthMap = /* @__PURE__ */ new Map();
    function handleColumnResizeStart(column) {
      resizeStartWidthMap.set(column.key, getCellActualWidth(column.key));
    }
    function handleColumnResize(column, displacementX) {
      const startWidth = resizeStartWidthMap.get(column.key);
      if (startWidth === void 0) {
        return;
      }
      const widthAfterResize = startWidth + displacementX;
      const limitWidth = clampValueFollowCSSRules(widthAfterResize, column.minWidth, column.maxWidth);
      onUnstableColumnResize(widthAfterResize, limitWidth, column, getCellActualWidth);
      doUpdateResizableWidth(column, limitWidth);
    }
    return {
      cellElsRef,
      componentId,
      mergedSortState: mergedSortStateRef,
      mergedClsPrefix: mergedClsPrefixRef,
      scrollX: scrollXRef,
      fixedColumnLeftMap: fixedColumnLeftMapRef,
      fixedColumnRightMap: fixedColumnRightMapRef,
      currentPage: mergedCurrentPageRef,
      allRowsChecked: allRowsCheckedRef,
      someRowsChecked: someRowsCheckedRef,
      rows: rowsRef,
      cols: colsRef,
      mergedTheme: mergedThemeRef,
      checkOptions: checkOptionsRef,
      mergedTableLayout: mergedTableLayoutRef,
      headerCheckboxDisabled: headerCheckboxDisabledRef,
      handleCheckboxUpdateChecked,
      handleColHeaderClick,
      handleTableHeaderScroll,
      handleColumnResizeStart,
      handleColumnResize
    };
  },
  render() {
    const { cellElsRef, mergedClsPrefix, fixedColumnLeftMap, fixedColumnRightMap, currentPage, allRowsChecked, someRowsChecked, rows, cols, mergedTheme, checkOptions, componentId, discrete, mergedTableLayout, headerCheckboxDisabled, mergedSortState, handleColHeaderClick, handleCheckboxUpdateChecked, handleColumnResizeStart, handleColumnResize } = this;
    const theadVNode = h("thead", { class: `${mergedClsPrefix}-data-table-thead`, "data-n-id": componentId }, rows.map((row) => {
      return h("tr", { class: `${mergedClsPrefix}-data-table-tr` }, row.map(({ column, colSpan, rowSpan, isLast }) => {
        var _a, _b;
        const key = getColKey(column);
        const { ellipsis } = column;
        const createColumnVNode = () => {
          if (column.type === "selection") {
            return column.multiple !== false ? h(
              Fragment,
              null,
              h(NCheckbox, { key: currentPage, privateInsideTable: true, checked: allRowsChecked, indeterminate: someRowsChecked, disabled: headerCheckboxDisabled, onUpdateChecked: handleCheckboxUpdateChecked }),
              checkOptions ? h(SelectionMenu, { clsPrefix: mergedClsPrefix }) : null
            ) : null;
          }
          return h(
            Fragment,
            null,
            h(
              "div",
              { class: `${mergedClsPrefix}-data-table-th__title-wrapper` },
              h("div", { class: `${mergedClsPrefix}-data-table-th__title` }, ellipsis === true || ellipsis && !ellipsis.tooltip ? h("div", { class: `${mergedClsPrefix}-data-table-th__ellipsis` }, renderTitle(column)) : ellipsis && typeof ellipsis === "object" ? h(NEllipsis, Object.assign({}, ellipsis, { theme: mergedTheme.peers.Ellipsis, themeOverrides: mergedTheme.peerOverrides.Ellipsis }), {
                default: () => renderTitle(column)
              }) : renderTitle(column)),
              isColumnSortable(column) ? h(SortButton, { column }) : null
            ),
            isColumnFilterable(column) ? h(FilterButton, { column, options: column.filterOptions }) : null,
            isColumnResizable(column) ? h(ResizeButton, { onResizeStart: () => {
              handleColumnResizeStart(column);
            }, onResize: (displacementX) => {
              handleColumnResize(column, displacementX);
            } }) : null
          );
        };
        const leftFixed = key in fixedColumnLeftMap;
        const rightFixed = key in fixedColumnRightMap;
        return h("th", { ref: (el) => cellElsRef[key] = el, key, style: {
          textAlign: column.titleAlign || column.align,
          left: pxfy((_a = fixedColumnLeftMap[key]) === null || _a === void 0 ? void 0 : _a.start),
          right: pxfy((_b = fixedColumnRightMap[key]) === null || _b === void 0 ? void 0 : _b.start)
        }, colspan: colSpan, rowspan: rowSpan, "data-col-key": key, class: [
          `${mergedClsPrefix}-data-table-th`,
          (leftFixed || rightFixed) && `${mergedClsPrefix}-data-table-th--fixed-${leftFixed ? "left" : "right"}`,
          {
            [`${mergedClsPrefix}-data-table-th--hover`]: isColumnSorting(column, mergedSortState),
            [`${mergedClsPrefix}-data-table-th--filterable`]: isColumnFilterable(column),
            [`${mergedClsPrefix}-data-table-th--sortable`]: isColumnSortable(column),
            [`${mergedClsPrefix}-data-table-th--selection`]: column.type === "selection",
            [`${mergedClsPrefix}-data-table-th--last`]: isLast
          },
          column.className
        ], onClick: column.type !== "selection" && column.type !== "expand" && !("children" in column) ? (e) => {
          handleColHeaderClick(e, column);
        } : void 0 }, createColumnVNode());
      }));
    }));
    if (!discrete) {
      return theadVNode;
    }
    const { handleTableHeaderScroll, scrollX } = this;
    return h(
      "div",
      { class: `${mergedClsPrefix}-data-table-base-table-header`, onScroll: handleTableHeaderScroll },
      h(
        "table",
        { ref: "body", class: `${mergedClsPrefix}-data-table-table`, style: {
          minWidth: formatLength(scrollX),
          tableLayout: mergedTableLayout
        } },
        h("colgroup", null, cols.map((col) => h("col", { key: col.key, style: col.style }))),
        theadVNode
      )
    );
  }
});
const Cell = defineComponent({
  name: "DataTableCell",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    row: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    isSummary: Boolean,
    mergedTheme: {
      type: Object,
      required: true
    },
    renderCell: Function
  },
  render() {
    const { isSummary, column, row, renderCell } = this;
    let cell;
    const { render: render2, key, ellipsis } = column;
    if (render2 && !isSummary) {
      cell = render2(row, this.index);
    } else {
      if (isSummary) {
        cell = row[key].value;
      } else {
        cell = renderCell ? renderCell(get(row, key), row, column) : get(row, key);
      }
    }
    if (ellipsis) {
      if (typeof ellipsis === "object") {
        const { mergedTheme } = this;
        if (column.ellipsisComponent === "performant-ellipsis") {
          return h(NPerformantEllipsis, Object.assign({}, ellipsis, { theme: mergedTheme.peers.Ellipsis, themeOverrides: mergedTheme.peerOverrides.Ellipsis }), { default: () => cell });
        }
        return h(NEllipsis, Object.assign({}, ellipsis, { theme: mergedTheme.peers.Ellipsis, themeOverrides: mergedTheme.peerOverrides.Ellipsis }), { default: () => cell });
      } else {
        return h("span", { class: `${this.clsPrefix}-data-table-td__ellipsis` }, cell);
      }
    }
    return cell;
  }
});
const ExpandTrigger = defineComponent({
  name: "DataTableExpandTrigger",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    expanded: Boolean,
    loading: Boolean,
    onClick: {
      type: Function,
      required: true
    },
    renderExpandIcon: {
      type: Function
    }
  },
  render() {
    const { clsPrefix } = this;
    return h(
      "div",
      { class: [
        `${clsPrefix}-data-table-expand-trigger`,
        this.expanded && `${clsPrefix}-data-table-expand-trigger--expanded`
      ], onClick: this.onClick, onMousedown: (e) => {
        e.preventDefault();
      } },
      h(NIconSwitchTransition, null, {
        default: () => {
          return this.loading ? h(NBaseLoading, { key: "loading", clsPrefix: this.clsPrefix, radius: 85, strokeWidth: 15, scale: 0.88 }) : this.renderExpandIcon ? this.renderExpandIcon({
            expanded: this.expanded
          }) : h(NBaseIcon, { clsPrefix, key: "base-icon" }, {
            default: () => h(ChevronRightIcon, null)
          });
        }
      })
    );
  }
});
const RenderSafeCheckbox = defineComponent({
  name: "DataTableBodyCheckbox",
  props: {
    rowKey: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    onUpdateChecked: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedCheckedRowKeySetRef,
      mergedInderminateRowKeySetRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    return () => {
      const { rowKey } = props;
      return h(NCheckbox, { privateInsideTable: true, disabled: props.disabled, indeterminate: mergedInderminateRowKeySetRef.value.has(rowKey), checked: mergedCheckedRowKeySetRef.value.has(rowKey), onUpdateChecked: props.onUpdateChecked });
    };
  }
});
const RenderSafeRadio = defineComponent({
  name: "DataTableBodyRadio",
  props: {
    rowKey: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    onUpdateChecked: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedCheckedRowKeySetRef,
      componentId
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    return () => {
      const { rowKey } = props;
      return h(NRadio, { name: componentId, disabled: props.disabled, checked: mergedCheckedRowKeySetRef.value.has(rowKey), onUpdateChecked: props.onUpdateChecked });
    };
  }
});
function flatten(rowInfos, expandedRowKeys) {
  const fRows = [];
  function traverse(rs, rootIndex) {
    rs.forEach((r) => {
      if (r.children && expandedRowKeys.has(r.key)) {
        fRows.push({
          tmNode: r,
          striped: false,
          key: r.key,
          index: rootIndex
        });
        traverse(r.children, rootIndex);
      } else {
        fRows.push({
          key: r.key,
          tmNode: r,
          striped: false,
          index: rootIndex
        });
      }
    });
  }
  rowInfos.forEach((rowInfo) => {
    fRows.push(rowInfo);
    const { children } = rowInfo.tmNode;
    if (children && expandedRowKeys.has(rowInfo.key)) {
      traverse(children, rowInfo.index);
    }
  });
  return fRows;
}
const VirtualListItemWrapper = defineComponent({
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    cols: {
      type: Array,
      required: true
    },
    onMouseenter: Function,
    onMouseleave: Function
  },
  render() {
    const { clsPrefix, id, cols, onMouseenter, onMouseleave } = this;
    return h(
      "table",
      { style: { tableLayout: "fixed" }, class: `${clsPrefix}-data-table-table`, onMouseenter, onMouseleave },
      h("colgroup", null, cols.map((col) => h("col", { key: col.key, style: col.style }))),
      h("tbody", { "data-n-id": id, class: `${clsPrefix}-data-table-tbody` }, this.$slots)
    );
  }
});
const TableBody = defineComponent({
  name: "DataTableBody",
  props: {
    onResize: Function,
    showHeader: Boolean,
    flexHeight: Boolean,
    bodyStyle: Object
  },
  setup(props) {
    const {
      slots: dataTableSlots,
      bodyWidthRef,
      mergedExpandedRowKeysRef,
      mergedClsPrefixRef,
      mergedThemeRef,
      scrollXRef,
      colsRef,
      paginatedDataRef,
      rawPaginatedDataRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      rowClassNameRef,
      leftActiveFixedColKeyRef,
      leftActiveFixedChildrenColKeysRef,
      rightActiveFixedColKeyRef,
      rightActiveFixedChildrenColKeysRef,
      renderExpandRef,
      hoverKeyRef,
      summaryRef,
      mergedSortStateRef,
      virtualScrollRef,
      componentId,
      mergedTableLayoutRef,
      childTriggerColIndexRef,
      indentRef,
      rowPropsRef,
      maxHeightRef,
      stripedRef,
      loadingRef,
      onLoadRef,
      loadingKeySetRef,
      expandableRef,
      stickyExpandedRowsRef,
      renderExpandIconRef,
      summaryPlacementRef,
      treeMateRef,
      scrollbarPropsRef,
      setHeaderScrollLeft,
      doUpdateExpandedRowKeys,
      handleTableBodyScroll,
      doCheck,
      doUncheck,
      renderCell
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    const scrollbarInstRef = ref(null);
    const virtualListRef = ref(null);
    const emptyElRef = ref(null);
    const emptyRef = useMemo(() => paginatedDataRef.value.length === 0);
    const shouldDisplaySomeTablePartRef = useMemo(() => props.showHeader || !emptyRef.value);
    const bodyShowHeaderOnlyRef = useMemo(() => {
      return props.showHeader || emptyRef.value;
    });
    let lastSelectedKey = "";
    const mergedExpandedRowKeySetRef = computed(() => {
      return new Set(mergedExpandedRowKeysRef.value);
    });
    function getRowInfo(key) {
      var _a;
      return (_a = treeMateRef.value.getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode;
    }
    function handleCheckboxUpdateChecked(tmNode, checked, shiftKey) {
      const rowInfo = getRowInfo(tmNode.key);
      if (!rowInfo) {
        warn("data-table", `fail to get row data with key ${tmNode.key}`);
        return;
      }
      if (shiftKey) {
        const lastIndex = paginatedDataRef.value.findIndex((item) => item.key === lastSelectedKey);
        if (lastIndex !== -1) {
          const currentIndex = paginatedDataRef.value.findIndex((item) => item.key === tmNode.key);
          const start = Math.min(lastIndex, currentIndex);
          const end = Math.max(lastIndex, currentIndex);
          const rowKeysToCheck = [];
          paginatedDataRef.value.slice(start, end + 1).forEach((r) => {
            if (!r.disabled) {
              rowKeysToCheck.push(r.key);
            }
          });
          if (checked) {
            doCheck(rowKeysToCheck, false, rowInfo);
          } else {
            doUncheck(rowKeysToCheck, rowInfo);
          }
          lastSelectedKey = tmNode.key;
          return;
        }
      }
      if (checked) {
        doCheck(tmNode.key, false, rowInfo);
      } else {
        doUncheck(tmNode.key, rowInfo);
      }
      lastSelectedKey = tmNode.key;
    }
    function handleRadioUpdateChecked(tmNode) {
      const rowInfo = getRowInfo(tmNode.key);
      if (!rowInfo) {
        warn("data-table", `fail to get row data with key ${tmNode.key}`);
        return;
      }
      doCheck(tmNode.key, true, rowInfo);
    }
    function getScrollContainer() {
      if (!shouldDisplaySomeTablePartRef.value) {
        const { value: emptyEl } = emptyElRef;
        if (emptyEl) {
          return emptyEl;
        } else {
          return null;
        }
      }
      if (virtualScrollRef.value) {
        return virtualListContainer();
      }
      const { value } = scrollbarInstRef;
      if (value)
        return value.containerRef;
      return null;
    }
    function handleUpdateExpanded(key, tmNode) {
      var _a;
      if (loadingKeySetRef.value.has(key))
        return;
      const { value: mergedExpandedRowKeys } = mergedExpandedRowKeysRef;
      const index = mergedExpandedRowKeys.indexOf(key);
      const nextExpandedKeys = Array.from(mergedExpandedRowKeys);
      if (~index) {
        nextExpandedKeys.splice(index, 1);
        doUpdateExpandedRowKeys(nextExpandedKeys);
      } else {
        if (tmNode && !tmNode.isLeaf && !tmNode.shallowLoaded) {
          loadingKeySetRef.value.add(key);
          void ((_a = onLoadRef.value) === null || _a === void 0 ? void 0 : _a.call(onLoadRef, tmNode.rawNode).then(() => {
            const { value: futureMergedExpandedRowKeys } = mergedExpandedRowKeysRef;
            const futureNextExpandedKeys = Array.from(futureMergedExpandedRowKeys);
            const index2 = futureNextExpandedKeys.indexOf(key);
            if (!~index2) {
              futureNextExpandedKeys.push(key);
            }
            doUpdateExpandedRowKeys(futureNextExpandedKeys);
          }).finally(() => {
            loadingKeySetRef.value.delete(key);
          }));
        } else {
          nextExpandedKeys.push(key);
          doUpdateExpandedRowKeys(nextExpandedKeys);
        }
      }
    }
    function handleMouseleaveTable() {
      hoverKeyRef.value = null;
    }
    function virtualListContainer() {
      const { value } = virtualListRef;
      return value === null || value === void 0 ? void 0 : value.listElRef;
    }
    function virtualListContent() {
      const { value } = virtualListRef;
      return value === null || value === void 0 ? void 0 : value.itemsElRef;
    }
    function handleVirtualListScroll(e) {
      var _a;
      handleTableBodyScroll(e);
      (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    function handleVirtualListResize(e) {
      var _a;
      const { onResize } = props;
      if (onResize)
        onResize(e);
      (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
    }
    const exposedMethods = {
      getScrollContainer,
      scrollTo(arg0, arg1) {
        var _a, _b;
        if (virtualScrollRef.value) {
          (_a = virtualListRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg0, arg1);
        } else {
          (_b = scrollbarInstRef.value) === null || _b === void 0 ? void 0 : _b.scrollTo(arg0, arg1);
        }
      }
    };
    const style2 = c$1([
      ({ props: cProps }) => {
        const createActiveLeftFixedStyle = (leftActiveFixedColKey) => {
          if (leftActiveFixedColKey === null)
            return null;
          return c$1(`[data-n-id="${cProps.componentId}"] [data-col-key="${leftActiveFixedColKey}"]::after`, { boxShadow: "var(--n-box-shadow-after)" });
        };
        const createActiveRightFixedStyle = (rightActiveFixedColKey) => {
          if (rightActiveFixedColKey === null)
            return null;
          return c$1(`[data-n-id="${cProps.componentId}"] [data-col-key="${rightActiveFixedColKey}"]::before`, { boxShadow: "var(--n-box-shadow-before)" });
        };
        return c$1([
          createActiveLeftFixedStyle(cProps.leftActiveFixedColKey),
          createActiveRightFixedStyle(cProps.rightActiveFixedColKey),
          cProps.leftActiveFixedChildrenColKeys.map((leftActiveFixedColKey) => createActiveLeftFixedStyle(leftActiveFixedColKey)),
          cProps.rightActiveFixedChildrenColKeys.map((rightActiveFixedColKey) => createActiveRightFixedStyle(rightActiveFixedColKey))
        ]);
      }
    ]);
    let fixedStyleMounted = false;
    watchEffect(() => {
      const { value: leftActiveFixedColKey } = leftActiveFixedColKeyRef;
      const { value: leftActiveFixedChildrenColKeys } = leftActiveFixedChildrenColKeysRef;
      const { value: rightActiveFixedColKey } = rightActiveFixedColKeyRef;
      const { value: rightActiveFixedChildrenColKeys } = rightActiveFixedChildrenColKeysRef;
      if (!fixedStyleMounted && leftActiveFixedColKey === null && rightActiveFixedColKey === null) {
        return;
      }
      const cProps = {
        leftActiveFixedColKey,
        leftActiveFixedChildrenColKeys,
        rightActiveFixedColKey,
        rightActiveFixedChildrenColKeys,
        componentId
      };
      style2.mount({
        id: `n-${componentId}`,
        force: true,
        props: cProps,
        anchorMetaName: cssrAnchorMetaName$1
      });
      fixedStyleMounted = true;
    });
    onUnmounted(() => {
      style2.unmount({
        id: `n-${componentId}`
      });
    });
    return Object.assign({
      bodyWidth: bodyWidthRef,
      summaryPlacement: summaryPlacementRef,
      dataTableSlots,
      componentId,
      scrollbarInstRef,
      virtualListRef,
      emptyElRef,
      summary: summaryRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedTheme: mergedThemeRef,
      scrollX: scrollXRef,
      cols: colsRef,
      loading: loadingRef,
      bodyShowHeaderOnly: bodyShowHeaderOnlyRef,
      shouldDisplaySomeTablePart: shouldDisplaySomeTablePartRef,
      empty: emptyRef,
      paginatedDataAndInfo: computed(() => {
        const { value: striped } = stripedRef;
        let hasChildren = false;
        const data = paginatedDataRef.value.map(striped ? (tmNode, index) => {
          if (!tmNode.isLeaf)
            hasChildren = true;
          return {
            tmNode,
            key: tmNode.key,
            striped: index % 2 === 1,
            index
          };
        } : (tmNode, index) => {
          if (!tmNode.isLeaf)
            hasChildren = true;
          return {
            tmNode,
            key: tmNode.key,
            striped: false,
            index
          };
        });
        return {
          data,
          hasChildren
        };
      }),
      rawPaginatedData: rawPaginatedDataRef,
      fixedColumnLeftMap: fixedColumnLeftMapRef,
      fixedColumnRightMap: fixedColumnRightMapRef,
      currentPage: mergedCurrentPageRef,
      rowClassName: rowClassNameRef,
      renderExpand: renderExpandRef,
      mergedExpandedRowKeySet: mergedExpandedRowKeySetRef,
      hoverKey: hoverKeyRef,
      mergedSortState: mergedSortStateRef,
      virtualScroll: virtualScrollRef,
      mergedTableLayout: mergedTableLayoutRef,
      childTriggerColIndex: childTriggerColIndexRef,
      indent: indentRef,
      rowProps: rowPropsRef,
      maxHeight: maxHeightRef,
      loadingKeySet: loadingKeySetRef,
      expandable: expandableRef,
      stickyExpandedRows: stickyExpandedRowsRef,
      renderExpandIcon: renderExpandIconRef,
      scrollbarProps: scrollbarPropsRef,
      setHeaderScrollLeft,
      handleVirtualListScroll,
      handleVirtualListResize,
      handleMouseleaveTable,
      virtualListContainer,
      virtualListContent,
      handleTableBodyScroll,
      handleCheckboxUpdateChecked,
      handleRadioUpdateChecked,
      handleUpdateExpanded,
      renderCell
    }, exposedMethods);
  },
  render() {
    const { mergedTheme, scrollX, mergedClsPrefix, virtualScroll, maxHeight, mergedTableLayout, flexHeight, loadingKeySet, onResize, setHeaderScrollLeft } = this;
    const scrollable = scrollX !== void 0 || maxHeight !== void 0 || flexHeight;
    const isBasicAutoLayout = !scrollable && mergedTableLayout === "auto";
    const xScrollable = scrollX !== void 0 || isBasicAutoLayout;
    const contentStyle = {
      minWidth: formatLength(scrollX) || "100%"
    };
    if (scrollX)
      contentStyle.width = "100%";
    const tableNode = h(NScrollbar, Object.assign({}, this.scrollbarProps, { ref: "scrollbarInstRef", scrollable: scrollable || isBasicAutoLayout, class: `${mergedClsPrefix}-data-table-base-table-body`, style: this.bodyStyle, theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, contentStyle, container: virtualScroll ? this.virtualListContainer : void 0, content: virtualScroll ? this.virtualListContent : void 0, horizontalRailStyle: { zIndex: 3 }, verticalRailStyle: { zIndex: 3 }, xScrollable, onScroll: virtualScroll ? void 0 : this.handleTableBodyScroll, internalOnUpdateScrollLeft: setHeaderScrollLeft, onResize }), {
      default: () => {
        const cordToPass = {};
        const cordKey = {};
        const { cols, paginatedDataAndInfo, mergedTheme: mergedTheme2, fixedColumnLeftMap, fixedColumnRightMap, currentPage, rowClassName, mergedSortState, mergedExpandedRowKeySet, stickyExpandedRows, componentId, childTriggerColIndex, expandable, rowProps, handleMouseleaveTable, renderExpand, summary, handleCheckboxUpdateChecked, handleRadioUpdateChecked, handleUpdateExpanded } = this;
        const { length: colCount } = cols;
        let mergedData;
        const { data: paginatedData, hasChildren } = paginatedDataAndInfo;
        const mergedPaginationData = hasChildren ? flatten(paginatedData, mergedExpandedRowKeySet) : paginatedData;
        if (summary) {
          const summaryRows = summary(this.rawPaginatedData);
          if (Array.isArray(summaryRows)) {
            const summaryRowData = summaryRows.map((row, i) => ({
              isSummaryRow: true,
              key: `__n_summary__${i}`,
              tmNode: {
                rawNode: row,
                disabled: true
              },
              index: -1
            }));
            mergedData = this.summaryPlacement === "top" ? [...summaryRowData, ...mergedPaginationData] : [...mergedPaginationData, ...summaryRowData];
          } else {
            const summaryRowData = {
              isSummaryRow: true,
              key: "__n_summary__",
              tmNode: {
                rawNode: summaryRows,
                disabled: true
              },
              index: -1
            };
            mergedData = this.summaryPlacement === "top" ? [summaryRowData, ...mergedPaginationData] : [...mergedPaginationData, summaryRowData];
          }
        } else {
          mergedData = mergedPaginationData;
        }
        const indentStyle = hasChildren ? { width: pxfy(this.indent) } : void 0;
        const displayedData = [];
        mergedData.forEach((rowInfo) => {
          if (renderExpand && mergedExpandedRowKeySet.has(rowInfo.key) && (!expandable || expandable(rowInfo.tmNode.rawNode))) {
            displayedData.push(rowInfo, {
              isExpandedRow: true,
              key: `${rowInfo.key}-expand`,
              tmNode: rowInfo.tmNode,
              index: rowInfo.index
            });
          } else {
            displayedData.push(rowInfo);
          }
        });
        const { length: rowCount } = displayedData;
        const rowIndexToKey = {};
        paginatedData.forEach(({ tmNode }, rowIndex) => {
          rowIndexToKey[rowIndex] = tmNode.key;
        });
        const bodyWidth = stickyExpandedRows ? this.bodyWidth : null;
        const bodyWidthPx = bodyWidth === null ? void 0 : `${bodyWidth}px`;
        const renderRow = (rowInfo, displayedRowIndex, isVirtual) => {
          const { index: actualRowIndex } = rowInfo;
          if ("isExpandedRow" in rowInfo) {
            const { tmNode: { key, rawNode } } = rowInfo;
            return h(
              "tr",
              { class: `${mergedClsPrefix}-data-table-tr ${mergedClsPrefix}-data-table-tr--expanded`, key: `${key}__expand` },
              h("td", { class: [
                `${mergedClsPrefix}-data-table-td`,
                `${mergedClsPrefix}-data-table-td--last-col`,
                displayedRowIndex + 1 === rowCount && `${mergedClsPrefix}-data-table-td--last-row`
              ], colspan: colCount }, stickyExpandedRows ? h("div", { class: `${mergedClsPrefix}-data-table-expand`, style: {
                width: bodyWidthPx
              } }, renderExpand(rawNode, actualRowIndex)) : renderExpand(rawNode, actualRowIndex))
            );
          }
          const isSummary = "isSummaryRow" in rowInfo;
          const striped = !isSummary && rowInfo.striped;
          const { tmNode, key: rowKey } = rowInfo;
          const { rawNode: rowData } = tmNode;
          const expanded = mergedExpandedRowKeySet.has(rowKey);
          const props = rowProps ? rowProps(rowData, actualRowIndex) : void 0;
          const mergedRowClassName = typeof rowClassName === "string" ? rowClassName : createRowClassName(rowData, actualRowIndex, rowClassName);
          const row = h("tr", Object.assign({ onMouseenter: () => {
            this.hoverKey = rowKey;
          }, key: rowKey, class: [
            `${mergedClsPrefix}-data-table-tr`,
            isSummary && `${mergedClsPrefix}-data-table-tr--summary`,
            striped && `${mergedClsPrefix}-data-table-tr--striped`,
            expanded && `${mergedClsPrefix}-data-table-tr--expanded`,
            mergedRowClassName
          ] }, props), cols.map((col, colIndex) => {
            var _a, _b, _c, _d, _e;
            if (displayedRowIndex in cordToPass) {
              const cordOfRowToPass = cordToPass[displayedRowIndex];
              const indexInCordOfRowToPass = cordOfRowToPass.indexOf(colIndex);
              if (~indexInCordOfRowToPass) {
                cordOfRowToPass.splice(indexInCordOfRowToPass, 1);
                return null;
              }
            }
            const { column } = col;
            const colKey = getColKey(col);
            const { rowSpan, colSpan } = column;
            const mergedColSpan = isSummary ? ((_a = rowInfo.tmNode.rawNode[colKey]) === null || _a === void 0 ? void 0 : _a.colSpan) || 1 : colSpan ? colSpan(rowData, actualRowIndex) : 1;
            const mergedRowSpan = isSummary ? ((_b = rowInfo.tmNode.rawNode[colKey]) === null || _b === void 0 ? void 0 : _b.rowSpan) || 1 : rowSpan ? rowSpan(rowData, actualRowIndex) : 1;
            const isLastCol = colIndex + mergedColSpan === colCount;
            const isLastRow = displayedRowIndex + mergedRowSpan === rowCount;
            const isCrossRowTd = mergedRowSpan > 1;
            if (isCrossRowTd) {
              cordKey[displayedRowIndex] = {
                [colIndex]: []
              };
            }
            if (mergedColSpan > 1 || isCrossRowTd) {
              for (let i = displayedRowIndex; i < displayedRowIndex + mergedRowSpan; ++i) {
                if (isCrossRowTd) {
                  cordKey[displayedRowIndex][colIndex].push(rowIndexToKey[i]);
                }
                for (let j = colIndex; j < colIndex + mergedColSpan; ++j) {
                  if (i === displayedRowIndex && j === colIndex) {
                    continue;
                  }
                  if (!(i in cordToPass)) {
                    cordToPass[i] = [j];
                  } else {
                    cordToPass[i].push(j);
                  }
                }
              }
            }
            const hoverKey = isCrossRowTd ? this.hoverKey : null;
            const { cellProps } = column;
            const resolvedCellProps = cellProps === null || cellProps === void 0 ? void 0 : cellProps(rowData, actualRowIndex);
            const indentOffsetStyle = {
              "--indent-offset": ""
            };
            return h(
              "td",
              Object.assign({}, resolvedCellProps, { key: colKey, style: [
                {
                  textAlign: column.align || void 0,
                  left: pxfy((_c = fixedColumnLeftMap[colKey]) === null || _c === void 0 ? void 0 : _c.start),
                  right: pxfy((_d = fixedColumnRightMap[colKey]) === null || _d === void 0 ? void 0 : _d.start)
                },
                indentOffsetStyle,
                (resolvedCellProps === null || resolvedCellProps === void 0 ? void 0 : resolvedCellProps.style) || ""
              ], colspan: mergedColSpan, rowspan: isVirtual ? void 0 : mergedRowSpan, "data-col-key": colKey, class: [
                `${mergedClsPrefix}-data-table-td`,
                column.className,
                resolvedCellProps === null || resolvedCellProps === void 0 ? void 0 : resolvedCellProps.class,
                isSummary && `${mergedClsPrefix}-data-table-td--summary`,
                (hoverKey !== null && cordKey[displayedRowIndex][colIndex].includes(hoverKey) || isColumnSorting(column, mergedSortState)) && `${mergedClsPrefix}-data-table-td--hover`,
                column.fixed && `${mergedClsPrefix}-data-table-td--fixed-${column.fixed}`,
                column.align && `${mergedClsPrefix}-data-table-td--${column.align}-align`,
                column.type === "selection" && `${mergedClsPrefix}-data-table-td--selection`,
                column.type === "expand" && `${mergedClsPrefix}-data-table-td--expand`,
                isLastCol && `${mergedClsPrefix}-data-table-td--last-col`,
                isLastRow && `${mergedClsPrefix}-data-table-td--last-row`
              ] }),
              hasChildren && colIndex === childTriggerColIndex ? [
                repeat(indentOffsetStyle["--indent-offset"] = isSummary ? 0 : rowInfo.tmNode.level, h("div", { class: `${mergedClsPrefix}-data-table-indent`, style: indentStyle })),
                isSummary || rowInfo.tmNode.isLeaf ? h("div", { class: `${mergedClsPrefix}-data-table-expand-placeholder` }) : h(ExpandTrigger, { class: `${mergedClsPrefix}-data-table-expand-trigger`, clsPrefix: mergedClsPrefix, expanded, renderExpandIcon: this.renderExpandIcon, loading: loadingKeySet.has(rowInfo.key), onClick: () => {
                  handleUpdateExpanded(rowKey, rowInfo.tmNode);
                } })
              ] : null,
              column.type === "selection" ? !isSummary ? column.multiple === false ? h(RenderSafeRadio, { key: currentPage, rowKey, disabled: rowInfo.tmNode.disabled, onUpdateChecked: () => {
                handleRadioUpdateChecked(rowInfo.tmNode);
              } }) : h(RenderSafeCheckbox, { key: currentPage, rowKey, disabled: rowInfo.tmNode.disabled, onUpdateChecked: (checked, e) => {
                handleCheckboxUpdateChecked(rowInfo.tmNode, checked, e.shiftKey);
              } }) : null : column.type === "expand" ? !isSummary ? !column.expandable || ((_e = column.expandable) === null || _e === void 0 ? void 0 : _e.call(column, rowData)) ? h(ExpandTrigger, { clsPrefix: mergedClsPrefix, expanded, renderExpandIcon: this.renderExpandIcon, onClick: () => {
                handleUpdateExpanded(rowKey, null);
              } }) : null : null : h(Cell, { clsPrefix: mergedClsPrefix, index: actualRowIndex, row: rowData, column, isSummary, mergedTheme: mergedTheme2, renderCell: this.renderCell })
            );
          }));
          return row;
        };
        if (!virtualScroll) {
          return h(
            "table",
            { class: `${mergedClsPrefix}-data-table-table`, onMouseleave: handleMouseleaveTable, style: {
              tableLayout: this.mergedTableLayout
            } },
            h("colgroup", null, cols.map((col) => h("col", { key: col.key, style: col.style }))),
            this.showHeader ? h(TableHeader, { discrete: false }) : null,
            !this.empty ? h("tbody", { "data-n-id": componentId, class: `${mergedClsPrefix}-data-table-tbody` }, displayedData.map((rowInfo, displayedRowIndex) => {
              return renderRow(rowInfo, displayedRowIndex, false);
            })) : null
          );
        } else {
          return h(VVirtualList, { ref: "virtualListRef", items: displayedData, itemSize: 28, visibleItemsTag: VirtualListItemWrapper, visibleItemsProps: {
            clsPrefix: mergedClsPrefix,
            id: componentId,
            cols,
            onMouseleave: handleMouseleaveTable
          }, showScrollbar: false, onResize: this.handleVirtualListResize, onScroll: this.handleVirtualListScroll, itemsStyle: contentStyle, itemResizable: true }, {
            default: ({ item, index }) => renderRow(item, index, true)
          });
        }
      }
    });
    if (this.empty) {
      const createEmptyNode = () => h("div", { class: [
        `${mergedClsPrefix}-data-table-empty`,
        this.loading && `${mergedClsPrefix}-data-table-empty--hide`
      ], style: this.bodyStyle, ref: "emptyElRef" }, resolveSlot(this.dataTableSlots.empty, () => [
        h(NEmpty, { theme: this.mergedTheme.peers.Empty, themeOverrides: this.mergedTheme.peerOverrides.Empty })
      ]));
      if (this.shouldDisplaySomeTablePart) {
        return h(
          Fragment,
          null,
          tableNode,
          createEmptyNode()
        );
      } else {
        return h(VResizeObserver, { onResize: this.onResize }, { default: createEmptyNode });
      }
    }
    return tableNode;
  }
});
const MainTable = defineComponent({
  setup() {
    const {
      mergedClsPrefixRef,
      rightFixedColumnsRef,
      leftFixedColumnsRef,
      bodyWidthRef,
      maxHeightRef,
      minHeightRef,
      flexHeightRef,
      syncScrollState
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dataTableInjectionKey);
    const headerInstRef = ref(null);
    const bodyInstRef = ref(null);
    const selfElRef = ref(null);
    const fixedStateInitializedRef = ref(!(leftFixedColumnsRef.value.length || rightFixedColumnsRef.value.length));
    const bodyStyleRef = computed(() => {
      return {
        maxHeight: formatLength(maxHeightRef.value),
        minHeight: formatLength(minHeightRef.value)
      };
    });
    function handleBodyResize(entry) {
      bodyWidthRef.value = entry.contentRect.width;
      syncScrollState();
      if (!fixedStateInitializedRef.value) {
        fixedStateInitializedRef.value = true;
      }
    }
    function getHeaderElement() {
      const { value } = headerInstRef;
      if (value) {
        return value.$el;
      }
      return null;
    }
    function getBodyElement() {
      const { value } = bodyInstRef;
      if (value) {
        return value.getScrollContainer();
      }
      return null;
    }
    const exposedMethods = {
      getBodyElement,
      getHeaderElement,
      scrollTo(arg0, arg1) {
        var _a;
        (_a = bodyInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg0, arg1);
      }
    };
    watchEffect(() => {
      const { value: selfEl } = selfElRef;
      if (!selfEl)
        return;
      const transitionDisabledClass = `${mergedClsPrefixRef.value}-data-table-base-table--transition-disabled`;
      if (fixedStateInitializedRef.value) {
        setTimeout(() => {
          selfEl.classList.remove(transitionDisabledClass);
        }, 0);
      } else {
        selfEl.classList.add(transitionDisabledClass);
      }
    });
    return Object.assign({
      maxHeight: maxHeightRef,
      mergedClsPrefix: mergedClsPrefixRef,
      selfElRef,
      headerInstRef,
      bodyInstRef,
      bodyStyle: bodyStyleRef,
      flexHeight: flexHeightRef,
      handleBodyResize
    }, exposedMethods);
  },
  render() {
    const { mergedClsPrefix, maxHeight, flexHeight } = this;
    const headerInBody = maxHeight === void 0 && !flexHeight;
    return h(
      "div",
      { class: `${mergedClsPrefix}-data-table-base-table`, ref: "selfElRef" },
      headerInBody ? null : h(TableHeader, { ref: "headerInstRef" }),
      h(TableBody, { ref: "bodyInstRef", bodyStyle: this.bodyStyle, showHeader: headerInBody, flexHeight, onResize: this.handleBodyResize })
    );
  }
});
function useCheck(props, data) {
  const { paginatedDataRef, treeMateRef, selectionColumnRef } = data;
  const uncontrolledCheckedRowKeysRef = ref(props.defaultCheckedRowKeys);
  const mergedCheckState = computed(() => {
    var _a;
    const { checkedRowKeys } = props;
    const sourceKeys = checkedRowKeys === void 0 ? uncontrolledCheckedRowKeysRef.value : checkedRowKeys;
    if (((_a = selectionColumnRef.value) === null || _a === void 0 ? void 0 : _a.multiple) === false) {
      return {
        checkedKeys: sourceKeys.slice(0, 1),
        indeterminateKeys: []
      };
    }
    return treeMateRef.value.getCheckedKeys(sourceKeys, {
      cascade: props.cascade,
      allowNotLoaded: props.allowCheckingNotLoaded
    });
  });
  const mergedCheckedRowKeysRef = computed(() => mergedCheckState.value.checkedKeys);
  const mergedInderminateRowKeysRef = computed(() => mergedCheckState.value.indeterminateKeys);
  const mergedCheckedRowKeySetRef = computed(() => {
    return new Set(mergedCheckedRowKeysRef.value);
  });
  const mergedInderminateRowKeySetRef = computed(() => {
    return new Set(mergedInderminateRowKeysRef.value);
  });
  const countOfCurrentPageCheckedRowsRef = computed(() => {
    const { value: mergedCheckedRowKeySet } = mergedCheckedRowKeySetRef;
    return paginatedDataRef.value.reduce((total, tmNode) => {
      const { key, disabled } = tmNode;
      return total + (!disabled && mergedCheckedRowKeySet.has(key) ? 1 : 0);
    }, 0);
  });
  const countOfCurrentPageDisabledRowsRef = computed(() => {
    return paginatedDataRef.value.filter((item) => item.disabled).length;
  });
  const someRowsCheckedRef = computed(() => {
    const { length } = paginatedDataRef.value;
    const { value: mergedInderminateRowKeySet } = mergedInderminateRowKeySetRef;
    return countOfCurrentPageCheckedRowsRef.value > 0 && countOfCurrentPageCheckedRowsRef.value < length - countOfCurrentPageDisabledRowsRef.value || paginatedDataRef.value.some((rowData) => mergedInderminateRowKeySet.has(rowData.key));
  });
  const allRowsCheckedRef = computed(() => {
    const { length } = paginatedDataRef.value;
    return countOfCurrentPageCheckedRowsRef.value !== 0 && countOfCurrentPageCheckedRowsRef.value === length - countOfCurrentPageDisabledRowsRef.value;
  });
  const headerCheckboxDisabledRef = computed(() => {
    return paginatedDataRef.value.length === 0;
  });
  function doUpdateCheckedRowKeys(keys, row, action) {
    const { "onUpdate:checkedRowKeys": _onUpdateCheckedRowKeys, onUpdateCheckedRowKeys, onCheckedRowKeysChange } = props;
    const rows = [];
    const { value: { getNode } } = treeMateRef;
    keys.forEach((key) => {
      var _a;
      const row2 = (_a = getNode(key)) === null || _a === void 0 ? void 0 : _a.rawNode;
      rows.push(row2);
    });
    if (_onUpdateCheckedRowKeys) {
      call(_onUpdateCheckedRowKeys, keys, rows, { row, action });
    }
    if (onUpdateCheckedRowKeys) {
      call(onUpdateCheckedRowKeys, keys, rows, { row, action });
    }
    if (onCheckedRowKeysChange) {
      call(onCheckedRowKeysChange, keys, rows, { row, action });
    }
    uncontrolledCheckedRowKeysRef.value = keys;
  }
  function doCheck(rowKey, single = false, rowInfo) {
    if (props.loading)
      return;
    if (single) {
      doUpdateCheckedRowKeys(Array.isArray(rowKey) ? rowKey.slice(0, 1) : [rowKey], rowInfo, "check");
      return;
    }
    doUpdateCheckedRowKeys(treeMateRef.value.check(rowKey, mergedCheckedRowKeysRef.value, {
      cascade: props.cascade,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, rowInfo, "check");
  }
  function doUncheck(rowKey, rowInfo) {
    if (props.loading)
      return;
    doUpdateCheckedRowKeys(treeMateRef.value.uncheck(rowKey, mergedCheckedRowKeysRef.value, {
      cascade: props.cascade,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, rowInfo, "uncheck");
  }
  function doCheckAll(checkWholeTable = false) {
    const { value: column } = selectionColumnRef;
    if (!column || props.loading)
      return;
    const rowKeysToCheck = [];
    (checkWholeTable ? treeMateRef.value.treeNodes : paginatedDataRef.value).forEach((tmNode) => {
      if (!tmNode.disabled) {
        rowKeysToCheck.push(tmNode.key);
      }
    });
    doUpdateCheckedRowKeys(treeMateRef.value.check(rowKeysToCheck, mergedCheckedRowKeysRef.value, {
      cascade: true,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function doUncheckAll(checkWholeTable = false) {
    const { value: column } = selectionColumnRef;
    if (!column || props.loading)
      return;
    const rowKeysToUncheck = [];
    (checkWholeTable ? treeMateRef.value.treeNodes : paginatedDataRef.value).forEach((tmNode) => {
      if (!tmNode.disabled) {
        rowKeysToUncheck.push(tmNode.key);
      }
    });
    doUpdateCheckedRowKeys(treeMateRef.value.uncheck(rowKeysToUncheck, mergedCheckedRowKeysRef.value, {
      cascade: true,
      allowNotLoaded: props.allowCheckingNotLoaded
    }).checkedKeys, void 0, "uncheckAll");
  }
  return {
    mergedCheckedRowKeySetRef,
    mergedCheckedRowKeysRef,
    mergedInderminateRowKeySetRef,
    someRowsCheckedRef,
    allRowsCheckedRef,
    headerCheckboxDisabledRef,
    doUpdateCheckedRowKeys,
    doCheckAll,
    doUncheckAll,
    doCheck,
    doUncheck
  };
}
function getMultiplePriority(sorter) {
  if (typeof sorter === "object" && typeof sorter.multiple === "number") {
    return sorter.multiple;
  }
  return false;
}
function getSortFunction(sorter, columnKey) {
  if (columnKey && (sorter === void 0 || sorter === "default" || typeof sorter === "object" && sorter.compare === "default")) {
    return getDefaultSorterFn(columnKey);
  }
  if (typeof sorter === "function") {
    return sorter;
  }
  if (sorter && typeof sorter === "object" && sorter.compare && sorter.compare !== "default") {
    return sorter.compare;
  }
  return false;
}
function getDefaultSorterFn(columnKey) {
  return (row1, row2) => {
    const value1 = row1[columnKey];
    const value2 = row2[columnKey];
    if (typeof value1 === "number" && typeof value2 === "number") {
      return value1 - value2;
    } else if (typeof value1 === "string" && typeof value2 === "string") {
      return value1.localeCompare(value2);
    }
    return 0;
  };
}
function useSorter(props, { dataRelatedColsRef, filteredDataRef }) {
  const defaultSortState = [];
  dataRelatedColsRef.value.forEach((column) => {
    var _a;
    if (column.sorter !== void 0) {
      updateSortStatesByNewSortState(defaultSortState, {
        columnKey: column.key,
        sorter: column.sorter,
        order: (_a = column.defaultSortOrder) !== null && _a !== void 0 ? _a : false
      });
    }
  });
  const uncontrolledSortStateRef = ref(defaultSortState);
  const mergedSortStateRef = computed(() => {
    const columnsWithControlledSortOrder = dataRelatedColsRef.value.filter((column) => column.type !== "selection" && column.sorter !== void 0 && (column.sortOrder === "ascend" || column.sortOrder === "descend" || column.sortOrder === false));
    const columnToSort = columnsWithControlledSortOrder.filter((col) => col.sortOrder !== false);
    if (columnToSort.length) {
      return columnToSort.map((column) => {
        return {
          columnKey: column.key,
          // column to sort has controlled sorter
          // sorter && sort order won't be undefined
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          order: column.sortOrder,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          sorter: column.sorter
        };
      });
    }
    if (columnsWithControlledSortOrder.length)
      return [];
    const { value: uncontrolledSortState } = uncontrolledSortStateRef;
    if (Array.isArray(uncontrolledSortState)) {
      return uncontrolledSortState;
    } else if (uncontrolledSortState) {
      return [uncontrolledSortState];
    } else {
      return [];
    }
  });
  const sortedDataRef = computed(() => {
    const activeSorters = mergedSortStateRef.value.slice().sort((a, b) => {
      const item1Priority = getMultiplePriority(a.sorter) || 0;
      const item2Priority = getMultiplePriority(b.sorter) || 0;
      return item2Priority - item1Priority;
    });
    if (activeSorters.length) {
      const filteredData = filteredDataRef.value.slice();
      return filteredData.sort((tmNode1, tmNode2) => {
        let compareResult = 0;
        activeSorters.some((sorterState) => {
          const { columnKey, sorter, order } = sorterState;
          const compareFn = getSortFunction(sorter, columnKey);
          if (compareFn && order) {
            compareResult = compareFn(tmNode1.rawNode, tmNode2.rawNode);
            if (compareResult !== 0) {
              compareResult = compareResult * getFlagOfOrder(order);
              return true;
            }
          }
          return false;
        });
        return compareResult;
      });
    }
    return filteredDataRef.value;
  });
  function getUpdatedSorterState(sortState) {
    let currentSortState = mergedSortStateRef.value.slice();
    if (sortState && getMultiplePriority(sortState.sorter) !== false) {
      currentSortState = currentSortState.filter((sortState2) => getMultiplePriority(sortState2.sorter) !== false);
      updateSortStatesByNewSortState(currentSortState, sortState);
      return currentSortState;
    } else if (sortState) {
      return sortState;
    }
    return null;
  }
  function deriveNextSorter(sortState) {
    const nextSorterState = getUpdatedSorterState(sortState);
    doUpdateSorter(nextSorterState);
  }
  function doUpdateSorter(sortState) {
    const { "onUpdate:sorter": _onUpdateSorter, onUpdateSorter, onSorterChange } = props;
    if (_onUpdateSorter) {
      call(_onUpdateSorter, sortState);
    }
    if (onUpdateSorter) {
      call(onUpdateSorter, sortState);
    }
    if (onSorterChange) {
      call(onSorterChange, sortState);
    }
    uncontrolledSortStateRef.value = sortState;
  }
  function sort(columnKey, order = "ascend") {
    if (!columnKey) {
      clearSorter();
    } else {
      const columnToSort = dataRelatedColsRef.value.find((column) => column.type !== "selection" && column.type !== "expand" && column.key === columnKey);
      if (!(columnToSort === null || columnToSort === void 0 ? void 0 : columnToSort.sorter))
        return;
      const sorter = columnToSort.sorter;
      deriveNextSorter({
        columnKey,
        sorter,
        order
      });
    }
  }
  function clearSorter() {
    doUpdateSorter(null);
  }
  function updateSortStatesByNewSortState(sortStates, sortState) {
    const index = sortStates.findIndex((state) => (sortState === null || sortState === void 0 ? void 0 : sortState.columnKey) && state.columnKey === sortState.columnKey);
    if (index !== void 0 && index >= 0) {
      sortStates[index] = sortState;
    } else {
      sortStates.push(sortState);
    }
  }
  return {
    clearSorter,
    sort,
    sortedDataRef,
    mergedSortStateRef,
    deriveNextSorter
  };
}
function useTableData(props, { dataRelatedColsRef }) {
  const selectionColumnRef = computed(() => {
    const getSelectionColumn = (cols) => {
      for (let i = 0; i < cols.length; ++i) {
        const col = cols[i];
        if ("children" in col) {
          return getSelectionColumn(col.children);
        } else if (col.type === "selection") {
          return col;
        }
      }
      return null;
    };
    return getSelectionColumn(props.columns);
  });
  const treeMateRef = computed(() => {
    const { childrenKey } = props;
    return createTreeMate(props.data, {
      ignoreEmptyChildren: true,
      getKey: props.rowKey,
      getChildren: (rowData) => rowData[childrenKey],
      getDisabled: (rowData) => {
        var _a, _b;
        if ((_b = (_a = selectionColumnRef.value) === null || _a === void 0 ? void 0 : _a.disabled) === null || _b === void 0 ? void 0 : _b.call(_a, rowData)) {
          return true;
        }
        return false;
      }
    });
  });
  const childTriggerColIndexRef = useMemo(() => {
    const { columns } = props;
    const { length } = columns;
    let firstContentfulColIndex = null;
    for (let i = 0; i < length; ++i) {
      const col = columns[i];
      if (!col.type && firstContentfulColIndex === null) {
        firstContentfulColIndex = i;
      }
      if ("tree" in col && col.tree) {
        return i;
      }
    }
    return firstContentfulColIndex || 0;
  });
  const uncontrolledFilterStateRef = ref({});
  const uncontrolledCurrentPageRef = ref(1);
  const uncontrolledPageSizeRef = ref(10);
  const mergedFilterStateRef = computed(() => {
    const columnsWithControlledFilter = dataRelatedColsRef.value.filter((column) => {
      return column.filterOptionValues !== void 0 || column.filterOptionValue !== void 0;
    });
    const controlledFilterState = {};
    columnsWithControlledFilter.forEach((column) => {
      var _a;
      if (column.type === "selection" || column.type === "expand")
        return;
      if (column.filterOptionValues === void 0) {
        controlledFilterState[column.key] = (_a = column.filterOptionValue) !== null && _a !== void 0 ? _a : null;
      } else {
        controlledFilterState[column.key] = column.filterOptionValues;
      }
    });
    const activeFilters = Object.assign(createShallowClonedObject(uncontrolledFilterStateRef.value), controlledFilterState);
    return activeFilters;
  });
  const filteredDataRef = computed(() => {
    const mergedFilterState = mergedFilterStateRef.value;
    const { columns } = props;
    function createDefaultFilter(columnKey) {
      return (filterOptionValue, row) => !!~String(row[columnKey]).indexOf(String(filterOptionValue));
    }
    const { value: { treeNodes: data } } = treeMateRef;
    const columnEntries = [];
    columns.forEach((column) => {
      if (column.type === "selection" || column.type === "expand" || "children" in column) {
        return;
      }
      columnEntries.push([column.key, column]);
    });
    return data ? data.filter((tmNode) => {
      const { rawNode: row } = tmNode;
      for (const [columnKey, column] of columnEntries) {
        let activeFilterOptionValues = mergedFilterState[columnKey];
        if (activeFilterOptionValues == null)
          continue;
        if (!Array.isArray(activeFilterOptionValues)) {
          activeFilterOptionValues = [activeFilterOptionValues];
        }
        if (!activeFilterOptionValues.length)
          continue;
        const filter2 = column.filter === "default" ? createDefaultFilter(columnKey) : column.filter;
        if (column && typeof filter2 === "function") {
          if (column.filterMode === "and") {
            if (activeFilterOptionValues.some((filterOptionValue) => !filter2(filterOptionValue, row))) {
              return false;
            }
          } else {
            if (activeFilterOptionValues.some((filterOptionValue) => filter2(filterOptionValue, row))) {
              continue;
            } else {
              return false;
            }
          }
        }
      }
      return true;
    }) : [];
  });
  const { sortedDataRef, deriveNextSorter, mergedSortStateRef, sort, clearSorter } = useSorter(props, {
    dataRelatedColsRef,
    filteredDataRef
  });
  dataRelatedColsRef.value.forEach((column) => {
    var _a;
    if (column.filter) {
      const defaultFilterOptionValues = column.defaultFilterOptionValues;
      if (column.filterMultiple) {
        uncontrolledFilterStateRef.value[column.key] = defaultFilterOptionValues || [];
      } else if (defaultFilterOptionValues !== void 0) {
        uncontrolledFilterStateRef.value[column.key] = defaultFilterOptionValues === null ? [] : defaultFilterOptionValues;
      } else {
        uncontrolledFilterStateRef.value[column.key] = (_a = column.defaultFilterOptionValue) !== null && _a !== void 0 ? _a : null;
      }
    }
  });
  const controlledCurrentPageRef = computed(() => {
    const { pagination } = props;
    if (pagination === false)
      return void 0;
    return pagination.page;
  });
  const controlledPageSizeRef = computed(() => {
    const { pagination } = props;
    if (pagination === false)
      return void 0;
    return pagination.pageSize;
  });
  const _mergedCurrentPageRef = useMergedState(controlledCurrentPageRef, uncontrolledCurrentPageRef);
  const mergedPageSizeRef = useMergedState(controlledPageSizeRef, uncontrolledPageSizeRef);
  const boundedMergedCurrentPageRef = useMemo(() => {
    const page2 = _mergedCurrentPageRef.value;
    return props.remote ? page2 : Math.max(1, Math.min(Math.ceil(filteredDataRef.value.length / mergedPageSizeRef.value), page2));
  });
  const mergedPageCountRef = computed(() => {
    const { pagination } = props;
    if (pagination) {
      const { pageCount } = pagination;
      if (pageCount !== void 0)
        return pageCount;
    }
    return void 0;
  });
  const paginatedDataRef = computed(() => {
    if (props.remote)
      return treeMateRef.value.treeNodes;
    if (!props.pagination)
      return sortedDataRef.value;
    const pageSize = mergedPageSizeRef.value;
    const startIndex = (boundedMergedCurrentPageRef.value - 1) * pageSize;
    return sortedDataRef.value.slice(startIndex, startIndex + pageSize);
  });
  const rawPaginatedDataRef = computed(() => {
    return paginatedDataRef.value.map((tmNode) => tmNode.rawNode);
  });
  function mergedOnUpdatePage(page2) {
    const { pagination } = props;
    if (pagination) {
      const { onChange, "onUpdate:page": _onUpdatePage, onUpdatePage } = pagination;
      if (onChange)
        call(onChange, page2);
      if (onUpdatePage)
        call(onUpdatePage, page2);
      if (_onUpdatePage)
        call(_onUpdatePage, page2);
      doUpdatePage(page2);
    }
  }
  function mergedOnUpdatePageSize(pageSize) {
    const { pagination } = props;
    if (pagination) {
      const { onPageSizeChange, "onUpdate:pageSize": _onUpdatePageSize, onUpdatePageSize } = pagination;
      if (onPageSizeChange)
        call(onPageSizeChange, pageSize);
      if (onUpdatePageSize)
        call(onUpdatePageSize, pageSize);
      if (_onUpdatePageSize)
        call(_onUpdatePageSize, pageSize);
      doUpdatePageSize(pageSize);
    }
  }
  const mergedItemCountRef = computed(() => {
    if (props.remote) {
      const { pagination } = props;
      if (pagination) {
        const { itemCount } = pagination;
        if (itemCount !== void 0)
          return itemCount;
      }
      return void 0;
    }
    return filteredDataRef.value.length;
  });
  const mergedPaginationRef = computed(() => {
    return Object.assign(Object.assign({}, props.pagination), {
      // reset deprecated methods
      onChange: void 0,
      onUpdatePage: void 0,
      onUpdatePageSize: void 0,
      onPageSizeChange: void 0,
      "onUpdate:page": mergedOnUpdatePage,
      "onUpdate:pageSize": mergedOnUpdatePageSize,
      // writing merged props after pagination to avoid
      // pagination[key] === undefined
      // key still exists but value is undefined
      page: boundedMergedCurrentPageRef.value,
      pageSize: mergedPageSizeRef.value,
      pageCount: mergedItemCountRef.value === void 0 ? mergedPageCountRef.value : void 0,
      itemCount: mergedItemCountRef.value
    });
  });
  function doUpdatePage(page2) {
    const { "onUpdate:page": _onUpdatePage, onPageChange, onUpdatePage } = props;
    if (onUpdatePage)
      call(onUpdatePage, page2);
    if (_onUpdatePage)
      call(_onUpdatePage, page2);
    if (onPageChange)
      call(onPageChange, page2);
    uncontrolledCurrentPageRef.value = page2;
  }
  function doUpdatePageSize(pageSize) {
    const { "onUpdate:pageSize": _onUpdatePageSize, onPageSizeChange, onUpdatePageSize } = props;
    if (onPageSizeChange)
      call(onPageSizeChange, pageSize);
    if (onUpdatePageSize)
      call(onUpdatePageSize, pageSize);
    if (_onUpdatePageSize)
      call(_onUpdatePageSize, pageSize);
    uncontrolledPageSizeRef.value = pageSize;
  }
  function doUpdateFilters(filters2, sourceColumn) {
    const { onUpdateFilters, "onUpdate:filters": _onUpdateFilters, onFiltersChange } = props;
    if (onUpdateFilters)
      call(onUpdateFilters, filters2, sourceColumn);
    if (_onUpdateFilters)
      call(_onUpdateFilters, filters2, sourceColumn);
    if (onFiltersChange)
      call(onFiltersChange, filters2, sourceColumn);
    uncontrolledFilterStateRef.value = filters2;
  }
  function onUnstableColumnResize(resizedWidth, limitedWidth, column, getColumnWidth) {
    var _a;
    (_a = props.onUnstableColumnResize) === null || _a === void 0 ? void 0 : _a.call(props, resizedWidth, limitedWidth, column, getColumnWidth);
  }
  function page(page2) {
    doUpdatePage(page2);
  }
  function clearFilter() {
    clearFilters();
  }
  function clearFilters() {
    filters({});
  }
  function filters(filters2) {
    filter(filters2);
  }
  function filter(filters2) {
    if (!filters2) {
      uncontrolledFilterStateRef.value = {};
    } else if (filters2) {
      uncontrolledFilterStateRef.value = createShallowClonedObject(filters2);
    } else
      ;
  }
  return {
    treeMateRef,
    mergedCurrentPageRef: boundedMergedCurrentPageRef,
    mergedPaginationRef,
    paginatedDataRef,
    rawPaginatedDataRef,
    mergedFilterStateRef,
    mergedSortStateRef,
    hoverKeyRef: ref(null),
    selectionColumnRef,
    childTriggerColIndexRef,
    doUpdateFilters,
    deriveNextSorter,
    doUpdatePageSize,
    doUpdatePage,
    onUnstableColumnResize,
    // exported methods
    filter,
    filters,
    clearFilter,
    clearFilters,
    clearSorter,
    page,
    sort
  };
}
function useScroll(props, { mainTableInstRef, mergedCurrentPageRef, bodyWidthRef }) {
  let lastScrollLeft = 0;
  const scrollPartRef = ref();
  const leftActiveFixedColKeyRef = ref(null);
  const leftActiveFixedChildrenColKeysRef = ref([]);
  const rightActiveFixedColKeyRef = ref(null);
  const rightActiveFixedChildrenColKeysRef = ref([]);
  const styleScrollXRef = computed(() => {
    return formatLength(props.scrollX);
  });
  const leftFixedColumnsRef = computed(() => {
    return props.columns.filter((column) => column.fixed === "left");
  });
  const rightFixedColumnsRef = computed(() => {
    return props.columns.filter((column) => column.fixed === "right");
  });
  const fixedColumnLeftMapRef = computed(() => {
    const columns = {};
    let left = 0;
    function traverse(cols) {
      cols.forEach((col) => {
        const positionInfo = { start: left, end: 0 };
        columns[getColKey(col)] = positionInfo;
        if ("children" in col) {
          traverse(col.children);
          positionInfo.end = left;
        } else {
          left += getNumberColWidth(col) || 0;
          positionInfo.end = left;
        }
      });
    }
    traverse(leftFixedColumnsRef.value);
    return columns;
  });
  const fixedColumnRightMapRef = computed(() => {
    const columns = {};
    let right = 0;
    function traverse(cols) {
      for (let i = cols.length - 1; i >= 0; --i) {
        const col = cols[i];
        const positionInfo = { start: right, end: 0 };
        columns[getColKey(col)] = positionInfo;
        if ("children" in col) {
          traverse(col.children);
          positionInfo.end = right;
        } else {
          right += getNumberColWidth(col) || 0;
          positionInfo.end = right;
        }
      }
    }
    traverse(rightFixedColumnsRef.value);
    return columns;
  });
  function deriveActiveLeftFixedColumn() {
    var _a, _b;
    const { value: leftFixedColumns } = leftFixedColumnsRef;
    let leftWidth = 0;
    const { value: fixedColumnLeftMap } = fixedColumnLeftMapRef;
    let leftActiveFixedColKey = null;
    for (let i = 0; i < leftFixedColumns.length; ++i) {
      const key = getColKey(leftFixedColumns[i]);
      if (lastScrollLeft > (((_a = fixedColumnLeftMap[key]) === null || _a === void 0 ? void 0 : _a.start) || 0) - leftWidth) {
        leftActiveFixedColKey = key;
        leftWidth = ((_b = fixedColumnLeftMap[key]) === null || _b === void 0 ? void 0 : _b.end) || 0;
      } else {
        break;
      }
    }
    leftActiveFixedColKeyRef.value = leftActiveFixedColKey;
  }
  function deriveActiveLeftFixedChildrenColumns() {
    leftActiveFixedChildrenColKeysRef.value = [];
    let activeLeftFixedColumn = props.columns.find((col) => getColKey(col) === leftActiveFixedColKeyRef.value);
    while (activeLeftFixedColumn && "children" in activeLeftFixedColumn) {
      const length = activeLeftFixedColumn.children.length;
      if (length === 0)
        break;
      const nextActiveLeftFixedColumn = activeLeftFixedColumn.children[length - 1];
      leftActiveFixedChildrenColKeysRef.value.push(getColKey(nextActiveLeftFixedColumn));
      activeLeftFixedColumn = nextActiveLeftFixedColumn;
    }
  }
  function deriveActiveRightFixedColumn() {
    var _a, _b;
    const { value: rightFixedColumns } = rightFixedColumnsRef;
    const scrollWidth = Number(props.scrollX);
    const { value: tableWidth } = bodyWidthRef;
    if (tableWidth === null)
      return;
    let rightWidth = 0;
    let rightActiveFixedColKey = null;
    const { value: fixedColumnRightMap } = fixedColumnRightMapRef;
    for (let i = rightFixedColumns.length - 1; i >= 0; --i) {
      const key = getColKey(rightFixedColumns[i]);
      if (Math.round(lastScrollLeft + (((_a = fixedColumnRightMap[key]) === null || _a === void 0 ? void 0 : _a.start) || 0) + tableWidth - rightWidth) < scrollWidth) {
        rightActiveFixedColKey = key;
        rightWidth = ((_b = fixedColumnRightMap[key]) === null || _b === void 0 ? void 0 : _b.end) || 0;
      } else {
        break;
      }
    }
    rightActiveFixedColKeyRef.value = rightActiveFixedColKey;
  }
  function deriveActiveRightFixedChildrenColumns() {
    rightActiveFixedChildrenColKeysRef.value = [];
    let activeRightFixedColumn = props.columns.find((col) => getColKey(col) === rightActiveFixedColKeyRef.value);
    while (activeRightFixedColumn && "children" in activeRightFixedColumn && activeRightFixedColumn.children.length) {
      const nextActiveRightFixedColumn = activeRightFixedColumn.children[0];
      rightActiveFixedChildrenColKeysRef.value.push(getColKey(nextActiveRightFixedColumn));
      activeRightFixedColumn = nextActiveRightFixedColumn;
    }
  }
  function getScrollElements() {
    const header = mainTableInstRef.value ? mainTableInstRef.value.getHeaderElement() : null;
    const body = mainTableInstRef.value ? mainTableInstRef.value.getBodyElement() : null;
    return {
      header,
      body
    };
  }
  function scrollMainTableBodyToTop() {
    const { body } = getScrollElements();
    if (body) {
      body.scrollTop = 0;
    }
  }
  function handleTableHeaderScroll() {
    if (scrollPartRef.value !== "body") {
      beforeNextFrameOnce(syncScrollState);
    } else {
      scrollPartRef.value = void 0;
    }
  }
  function handleTableBodyScroll(e) {
    var _a;
    (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e);
    if (scrollPartRef.value !== "head") {
      beforeNextFrameOnce(syncScrollState);
    } else {
      scrollPartRef.value = void 0;
    }
  }
  function syncScrollState() {
    const { header, body } = getScrollElements();
    if (!body)
      return;
    const { value: tableWidth } = bodyWidthRef;
    if (tableWidth === null)
      return;
    if (props.maxHeight || props.flexHeight) {
      if (!header)
        return;
      const directionHead = lastScrollLeft - header.scrollLeft;
      scrollPartRef.value = directionHead !== 0 ? "head" : "body";
      if (scrollPartRef.value === "head") {
        lastScrollLeft = header.scrollLeft;
        body.scrollLeft = lastScrollLeft;
      } else {
        lastScrollLeft = body.scrollLeft;
        header.scrollLeft = lastScrollLeft;
      }
    } else {
      lastScrollLeft = body.scrollLeft;
    }
    deriveActiveLeftFixedColumn();
    deriveActiveLeftFixedChildrenColumns();
    deriveActiveRightFixedColumn();
    deriveActiveRightFixedChildrenColumns();
  }
  function setHeaderScrollLeft(left) {
    const { header } = getScrollElements();
    if (!header)
      return;
    header.scrollLeft = left;
    syncScrollState();
  }
  watch(mergedCurrentPageRef, () => {
    scrollMainTableBodyToTop();
  });
  return {
    styleScrollXRef,
    fixedColumnLeftMapRef,
    fixedColumnRightMapRef,
    leftFixedColumnsRef,
    rightFixedColumnsRef,
    leftActiveFixedColKeyRef,
    leftActiveFixedChildrenColKeysRef,
    rightActiveFixedColKeyRef,
    rightActiveFixedChildrenColKeysRef,
    syncScrollState,
    handleTableBodyScroll,
    handleTableHeaderScroll,
    setHeaderScrollLeft
  };
}
function useResizable() {
  const resizableWidthsRef = ref({});
  function getResizableWidth(key) {
    return resizableWidthsRef.value[key];
  }
  function doUpdateResizableWidth(column, width) {
    if (isColumnResizable(column) && "key" in column) {
      resizableWidthsRef.value[column.key] = width;
    }
  }
  function clearResizableWidth() {
    resizableWidthsRef.value = {};
  }
  return {
    getResizableWidth,
    doUpdateResizableWidth,
    clearResizableWidth
  };
}
function getRowsAndCols(columns, getResizableWidth) {
  const rows = [];
  const cols = [];
  const dataRelatedCols = [];
  const rowItemMap = /* @__PURE__ */ new WeakMap();
  let maxDepth = -1;
  let totalRowSpan = 0;
  let hasEllipsis = false;
  function ensureMaxDepth(columns2, currentDepth) {
    if (currentDepth > maxDepth) {
      rows[currentDepth] = [];
      maxDepth = currentDepth;
    }
    for (const column of columns2) {
      if ("children" in column) {
        ensureMaxDepth(column.children, currentDepth + 1);
      } else {
        const key = "key" in column ? column.key : void 0;
        cols.push({
          key: getColKey(column),
          style: createCustomWidthStyle(column, key !== void 0 ? formatLength(getResizableWidth(key)) : void 0),
          column
        });
        totalRowSpan += 1;
        if (!hasEllipsis) {
          hasEllipsis = !!column.ellipsis;
        }
        dataRelatedCols.push(column);
      }
    }
  }
  ensureMaxDepth(columns, 0);
  let currentLeafIndex = 0;
  function ensureColLayout(columns2, currentDepth) {
    let hideUntilIndex = 0;
    columns2.forEach((column, index) => {
      var _a;
      if ("children" in column) {
        const cachedCurrentLeafIndex = currentLeafIndex;
        const rowItem = {
          column,
          colSpan: 0,
          rowSpan: 1,
          isLast: false
        };
        ensureColLayout(column.children, currentDepth + 1);
        column.children.forEach((childColumn) => {
          var _a2, _b;
          rowItem.colSpan += (_b = (_a2 = rowItemMap.get(childColumn)) === null || _a2 === void 0 ? void 0 : _a2.colSpan) !== null && _b !== void 0 ? _b : 0;
        });
        if (cachedCurrentLeafIndex + rowItem.colSpan === totalRowSpan) {
          rowItem.isLast = true;
        }
        rowItemMap.set(column, rowItem);
        rows[currentDepth].push(rowItem);
      } else {
        if (currentLeafIndex < hideUntilIndex) {
          currentLeafIndex += 1;
          return;
        }
        let colSpan = 1;
        if ("titleColSpan" in column) {
          colSpan = (_a = column.titleColSpan) !== null && _a !== void 0 ? _a : 1;
        }
        if (colSpan > 1) {
          hideUntilIndex = currentLeafIndex + colSpan;
        }
        const isLast = currentLeafIndex + colSpan === totalRowSpan;
        const rowItem = {
          column,
          colSpan,
          rowSpan: maxDepth - currentDepth + 1,
          isLast
        };
        rowItemMap.set(column, rowItem);
        rows[currentDepth].push(rowItem);
        currentLeafIndex += 1;
      }
    });
  }
  ensureColLayout(columns, 0);
  return {
    hasEllipsis,
    rows,
    cols,
    dataRelatedCols
  };
}
function useGroupHeader(props, getResizableWidth) {
  const rowsAndCols = computed(() => getRowsAndCols(props.columns, getResizableWidth));
  return {
    rowsRef: computed(() => rowsAndCols.value.rows),
    colsRef: computed(() => rowsAndCols.value.cols),
    hasEllipsisRef: computed(() => rowsAndCols.value.hasEllipsis),
    dataRelatedColsRef: computed(() => rowsAndCols.value.dataRelatedCols)
  };
}
function useExpand(props, treeMateRef) {
  const renderExpandRef = useMemo(() => {
    for (const col of props.columns) {
      if (col.type === "expand") {
        return col.renderExpand;
      }
    }
  });
  const expandableRef = useMemo(() => {
    let expandable;
    for (const col of props.columns) {
      if (col.type === "expand") {
        expandable = col.expandable;
        break;
      }
    }
    return expandable;
  });
  const uncontrolledExpandedRowKeysRef = ref(props.defaultExpandAll ? (renderExpandRef === null || renderExpandRef === void 0 ? void 0 : renderExpandRef.value) ? (() => {
    const expandedKeys = [];
    treeMateRef.value.treeNodes.forEach((tmNode) => {
      var _a;
      if ((_a = expandableRef.value) === null || _a === void 0 ? void 0 : _a.call(expandableRef, tmNode.rawNode)) {
        expandedKeys.push(tmNode.key);
      }
    });
    return expandedKeys;
  })() : treeMateRef.value.getNonLeafKeys() : props.defaultExpandedRowKeys);
  const controlledExpandedRowKeysRef = toRef(props, "expandedRowKeys");
  const stickyExpandedRowsRef = toRef(props, "stickyExpandedRows");
  const mergedExpandedRowKeysRef = useMergedState(controlledExpandedRowKeysRef, uncontrolledExpandedRowKeysRef);
  function doUpdateExpandedRowKeys(expandedKeys) {
    const { onUpdateExpandedRowKeys, "onUpdate:expandedRowKeys": _onUpdateExpandedRowKeys } = props;
    if (onUpdateExpandedRowKeys) {
      call(onUpdateExpandedRowKeys, expandedKeys);
    }
    if (_onUpdateExpandedRowKeys) {
      call(_onUpdateExpandedRowKeys, expandedKeys);
    }
    uncontrolledExpandedRowKeysRef.value = expandedKeys;
  }
  return {
    stickyExpandedRowsRef,
    mergedExpandedRowKeysRef,
    renderExpandRef,
    expandableRef,
    doUpdateExpandedRowKeys
  };
}
const fixedColumnStyle = createFixedColumnStyle();
const style = c$1([cB("data-table", `
 width: 100%;
 font-size: var(--n-font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 --n-merged-th-color-hover: var(--n-th-color-hover);
 --n-merged-td-color-hover: var(--n-td-color-hover);
 --n-merged-td-color-striped: var(--n-td-color-striped);
 `, [cB("data-table-wrapper", `
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `), cM("flex-height", [c$1(">", [cB("data-table-wrapper", [c$1(">", [cB("data-table-base-table", `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [c$1(">", [cB("data-table-base-table-body", "flex-basis: 0;", [
  // last-child means there is no empty icon
  // body is a scrollbar, we need to override height 100%
  c$1("&:last-child", "flex-grow: 1;")
])])])])])])]), c$1(">", [cB("data-table-loading-wrapper", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [fadeInScaleUpTransition({
  originalTransform: "translateX(-50%) translateY(-50%)"
})])]), cB("data-table-expand-placeholder", `
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `), cB("data-table-indent", `
 display: inline-block;
 height: 1px;
 `), cB("data-table-expand-trigger", `
 display: inline-flex;
 margin-right: 8px;
 cursor: pointer;
 font-size: 16px;
 vertical-align: -0.2em;
 position: relative;
 width: 16px;
 height: 16px;
 color: var(--n-td-text-color);
 transition: color .3s var(--n-bezier);
 `, [cM("expanded", [cB("icon", "transform: rotate(90deg);", [iconSwitchTransition({
  originalTransform: "rotate(90deg)"
})]), cB("base-icon", "transform: rotate(90deg);", [iconSwitchTransition({
  originalTransform: "rotate(90deg)"
})])]), cB("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [iconSwitchTransition()]), cB("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [iconSwitchTransition()]), cB("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [iconSwitchTransition()])]), cB("data-table-thead", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `), cB("data-table-tr", `
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `, [cB("data-table-expand", `
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `), cM("striped", "background-color: var(--n-merged-td-color-striped);", [cB("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), cNotM("summary", [c$1("&:hover", "background-color: var(--n-merged-td-color-hover);", [c$1(">", [cB("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), cB("data-table-th", `
 padding: var(--n-th-padding);
 position: relative;
 text-align: start;
 box-sizing: border-box;
 background-color: var(--n-merged-th-color);
 border-color: var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 color: var(--n-th-text-color);
 transition:
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 font-weight: var(--n-th-font-weight);
 `, [cM("filterable", `
 padding-right: 36px;
 `, [cM("sortable", `
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]), fixedColumnStyle, cM("selection", `
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `), cE("title-wrapper", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `, [cE("title", `
 flex: 1;
 min-width: 0;
 `)]), cE("ellipsis", `
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `), cM("hover", `
 background-color: var(--n-merged-th-color-hover);
 `), cM("sortable", `
 cursor: pointer;
 `, [cE("ellipsis", `
 max-width: calc(100% - 18px);
 `), c$1("&:hover", `
 background-color: var(--n-merged-th-color-hover);
 `)]), cB("data-table-sorter", `
 height: var(--n-sorter-size);
 width: var(--n-sorter-size);
 margin-left: 4px;
 position: relative;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 vertical-align: -0.2em;
 color: var(--n-th-icon-color);
 transition: color .3s var(--n-bezier);
 `, [cB("base-icon", "transition: transform .3s var(--n-bezier)"), cM("desc", [cB("base-icon", `
 transform: rotate(0deg);
 `)]), cM("asc", [cB("base-icon", `
 transform: rotate(-180deg);
 `)]), cM("asc, desc", `
 color: var(--n-th-icon-color-active);
 `)]), cB("data-table-resize-button", `
 width: var(--n-resizable-container-size);
 position: absolute;
 top: 0;
 right: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 cursor: col-resize;
 user-select: none;
 `, [c$1("&::after", `
 width: var(--n-resizable-size);
 height: 50%;
 position: absolute;
 top: 50%;
 left: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 background-color: var(--n-merged-border-color);
 transform: translateY(-50%);
 transition: background-color .3s var(--n-bezier);
 z-index: 1;
 content: '';
 `), cM("active", [c$1("&::after", ` 
 background-color: var(--n-th-icon-color-active);
 `)]), c$1("&:hover::after", `
 background-color: var(--n-th-icon-color-active);
 `)]), cB("data-table-filter", `
 position: absolute;
 z-index: auto;
 right: 0;
 width: 36px;
 top: 0;
 bottom: 0;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: var(--n-filter-size);
 color: var(--n-th-icon-color);
 `, [c$1("&:hover", `
 background-color: var(--n-th-button-color-hover);
 `), cM("show", `
 background-color: var(--n-th-button-color-hover);
 `), cM("active", `
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]), cB("data-table-td", `
 padding: var(--n-td-padding);
 text-align: start;
 box-sizing: border-box;
 border: none;
 background-color: var(--n-merged-td-color);
 color: var(--n-td-text-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [cM("expand", [cB("data-table-expand-trigger", `
 margin-right: 0;
 `)]), cM("last-row", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [
  // make sure there is no overlap between bottom border and
  // fixed column box shadow
  c$1("&::after", `
 bottom: 0 !important;
 `),
  c$1("&::before", `
 bottom: 0 !important;
 `)
]), cM("summary", `
 background-color: var(--n-merged-th-color);
 `), cM("hover", `
 background-color: var(--n-merged-td-color-hover);
 `), cE("ellipsis", `
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `), cM("selection, expand", `
 text-align: center;
 padding: 0;
 line-height: 0;
 `), fixedColumnStyle]), cB("data-table-empty", `
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `, [cM("hide", `
 opacity: 0;
 `)]), cE("pagination", `
 margin: var(--n-pagination-margin);
 display: flex;
 justify-content: flex-end;
 `), cB("data-table-wrapper", `
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `), cM("loading", [cB("data-table-wrapper", `
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]), cM("single-column", [cB("data-table-td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [c$1("&::after, &::before", `
 bottom: 0 !important;
 `)])]), cNotM("single-line", [cB("data-table-th", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [cM("last", `
 border-right: 0 solid var(--n-merged-border-color);
 `)]), cB("data-table-td", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [cM("last-col", `
 border-right: 0 solid var(--n-merged-border-color);
 `)])]), cM("bordered", [cB("data-table-wrapper", `
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]), cB("data-table-base-table", [cM("transition-disabled", [cB("data-table-th", [c$1("&::after, &::before", "transition: none;")]), cB("data-table-td", [c$1("&::after, &::before", "transition: none;")])])]), cM("bottom-bordered", [cB("data-table-td", [cM("last-row", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]), cB("data-table-table", `
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `), cB("data-table-base-table-header", `
 border-top-left-radius: calc(var(--n-border-radius) - 1px);
 border-top-right-radius: calc(var(--n-border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--n-bezier);
 scrollbar-width: none;
 `, [c$1("&::-webkit-scrollbar", `
 width: 0;
 height: 0;
 `)]), cB("data-table-check-extra", `
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]), cB("data-table-filter-menu", [cB("scrollbar", `
 max-height: 240px;
 `), cE("group", `
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `, [cB("checkbox", `
 margin-bottom: 12px;
 margin-right: 0;
 `), cB("radio", `
 margin-bottom: 12px;
 margin-right: 0;
 `)]), cE("action", `
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `, [cB("button", [c$1("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), c$1("&:last-child", `
 margin-right: 0;
 `)])]), cB("divider", `
 margin: 0 !important;
 `)]), insideModal(cB("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), insidePopover(cB("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function createFixedColumnStyle() {
  return [cM("fixed-left", `
 left: 0;
 position: sticky;
 z-index: 2;
 `, [c$1("&::after", `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 right: -36px;
 `)]), cM("fixed-right", `
 right: 0;
 position: sticky;
 z-index: 1;
 `, [c$1("&::before", `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 left: -36px;
 `)])];
}
const NDataTable = defineComponent({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: dataTableProps,
  setup(props, { slots }) {
    const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
    const mergedBottomBorderedRef = computed(() => {
      const { bottomBordered } = props;
      if (mergedBorderedRef.value)
        return false;
      if (bottomBordered !== void 0)
        return bottomBordered;
      return true;
    });
    const themeRef = useTheme("DataTable", "-data-table", style, dataTableLight$1, props, mergedClsPrefixRef);
    const bodyWidthRef = ref(null);
    const mainTableInstRef = ref(null);
    const { getResizableWidth, clearResizableWidth, doUpdateResizableWidth } = useResizable();
    const { rowsRef, colsRef, dataRelatedColsRef, hasEllipsisRef } = useGroupHeader(props, getResizableWidth);
    const { treeMateRef, mergedCurrentPageRef, paginatedDataRef, rawPaginatedDataRef, selectionColumnRef, hoverKeyRef, mergedPaginationRef, mergedFilterStateRef, mergedSortStateRef, childTriggerColIndexRef, doUpdatePage, doUpdateFilters, onUnstableColumnResize, deriveNextSorter, filter, filters, clearFilter, clearFilters, clearSorter, page, sort } = useTableData(props, { dataRelatedColsRef });
    const { doCheckAll, doUncheckAll, doCheck, doUncheck, headerCheckboxDisabledRef, someRowsCheckedRef, allRowsCheckedRef, mergedCheckedRowKeySetRef, mergedInderminateRowKeySetRef } = useCheck(props, {
      selectionColumnRef,
      treeMateRef,
      paginatedDataRef
    });
    const { stickyExpandedRowsRef, mergedExpandedRowKeysRef, renderExpandRef, expandableRef, doUpdateExpandedRowKeys } = useExpand(props, treeMateRef);
    const { handleTableBodyScroll, handleTableHeaderScroll, syncScrollState, setHeaderScrollLeft, leftActiveFixedColKeyRef, leftActiveFixedChildrenColKeysRef, rightActiveFixedColKeyRef, rightActiveFixedChildrenColKeysRef, leftFixedColumnsRef, rightFixedColumnsRef, fixedColumnLeftMapRef, fixedColumnRightMapRef } = useScroll(props, {
      bodyWidthRef,
      mainTableInstRef,
      mergedCurrentPageRef
    });
    const { localeRef } = useLocale("DataTable");
    const mergedTableLayoutRef = computed(() => {
      if (props.virtualScroll || props.flexHeight || props.maxHeight !== void 0 || hasEllipsisRef.value) {
        return "fixed";
      }
      return props.tableLayout;
    });
    provide(dataTableInjectionKey, {
      props,
      treeMateRef,
      renderExpandIconRef: toRef(props, "renderExpandIcon"),
      loadingKeySetRef: ref(/* @__PURE__ */ new Set()),
      slots,
      indentRef: toRef(props, "indent"),
      childTriggerColIndexRef,
      bodyWidthRef,
      componentId: createId(),
      hoverKeyRef,
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      scrollXRef: computed(() => props.scrollX),
      rowsRef,
      colsRef,
      paginatedDataRef,
      leftActiveFixedColKeyRef,
      leftActiveFixedChildrenColKeysRef,
      rightActiveFixedColKeyRef,
      rightActiveFixedChildrenColKeysRef,
      leftFixedColumnsRef,
      rightFixedColumnsRef,
      fixedColumnLeftMapRef,
      fixedColumnRightMapRef,
      mergedCurrentPageRef,
      someRowsCheckedRef,
      allRowsCheckedRef,
      mergedSortStateRef,
      mergedFilterStateRef,
      loadingRef: toRef(props, "loading"),
      rowClassNameRef: toRef(props, "rowClassName"),
      mergedCheckedRowKeySetRef,
      mergedExpandedRowKeysRef,
      mergedInderminateRowKeySetRef,
      localeRef,
      expandableRef,
      stickyExpandedRowsRef,
      rowKeyRef: toRef(props, "rowKey"),
      renderExpandRef,
      summaryRef: toRef(props, "summary"),
      virtualScrollRef: toRef(props, "virtualScroll"),
      rowPropsRef: toRef(props, "rowProps"),
      stripedRef: toRef(props, "striped"),
      checkOptionsRef: computed(() => {
        const { value: selectionColumn } = selectionColumnRef;
        return selectionColumn === null || selectionColumn === void 0 ? void 0 : selectionColumn.options;
      }),
      rawPaginatedDataRef,
      filterMenuCssVarsRef: computed(() => {
        const { self: { actionDividerColor, actionPadding, actionButtonMargin } } = themeRef.value;
        return {
          "--n-action-padding": actionPadding,
          "--n-action-button-margin": actionButtonMargin,
          "--n-action-divider-color": actionDividerColor
        };
      }),
      onLoadRef: toRef(props, "onLoad"),
      mergedTableLayoutRef,
      maxHeightRef: toRef(props, "maxHeight"),
      minHeightRef: toRef(props, "minHeight"),
      flexHeightRef: toRef(props, "flexHeight"),
      headerCheckboxDisabledRef,
      paginationBehaviorOnFilterRef: toRef(props, "paginationBehaviorOnFilter"),
      summaryPlacementRef: toRef(props, "summaryPlacement"),
      scrollbarPropsRef: toRef(props, "scrollbarProps"),
      syncScrollState,
      doUpdatePage,
      doUpdateFilters,
      getResizableWidth,
      onUnstableColumnResize,
      clearResizableWidth,
      doUpdateResizableWidth,
      deriveNextSorter,
      doCheck,
      doUncheck,
      doCheckAll,
      doUncheckAll,
      doUpdateExpandedRowKeys,
      handleTableHeaderScroll,
      handleTableBodyScroll,
      setHeaderScrollLeft,
      renderCell: toRef(props, "renderCell")
    });
    const exposedMethods = {
      filter,
      filters,
      clearFilters,
      clearSorter,
      page,
      sort,
      clearFilter,
      scrollTo: (arg0, arg1) => {
        var _a;
        (_a = mainTableInstRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg0, arg1);
      }
    };
    const cssVarsRef = computed(() => {
      const { size } = props;
      const { common: { cubicBezierEaseInOut }, self: { borderColor, tdColorHover, thColor, thColorHover, tdColor, tdTextColor, thTextColor, thFontWeight, thButtonColorHover, thIconColor, thIconColorActive, filterSize, borderRadius, lineHeight, tdColorModal, thColorModal, borderColorModal, thColorHoverModal, tdColorHoverModal, borderColorPopover, thColorPopover, tdColorPopover, tdColorHoverPopover, thColorHoverPopover, paginationMargin, emptyPadding, boxShadowAfter, boxShadowBefore, sorterSize, resizableContainerSize, resizableSize, loadingColor, loadingSize, opacityLoading, tdColorStriped, tdColorStripedModal, tdColorStripedPopover, [createKey("fontSize", size)]: fontSize, [createKey("thPadding", size)]: thPadding, [createKey("tdPadding", size)]: tdPadding } } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-th-padding": thPadding,
        "--n-td-padding": tdPadding,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-line-height": lineHeight,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-th-color": thColor,
        "--n-th-color-hover": thColorHover,
        "--n-th-color-modal": thColorModal,
        "--n-th-color-hover-modal": thColorHoverModal,
        "--n-th-color-popover": thColorPopover,
        "--n-th-color-hover-popover": thColorHoverPopover,
        "--n-td-color": tdColor,
        "--n-td-color-hover": tdColorHover,
        "--n-td-color-modal": tdColorModal,
        "--n-td-color-hover-modal": tdColorHoverModal,
        "--n-td-color-popover": tdColorPopover,
        "--n-td-color-hover-popover": tdColorHoverPopover,
        "--n-th-text-color": thTextColor,
        "--n-td-text-color": tdTextColor,
        "--n-th-font-weight": thFontWeight,
        "--n-th-button-color-hover": thButtonColorHover,
        "--n-th-icon-color": thIconColor,
        "--n-th-icon-color-active": thIconColorActive,
        "--n-filter-size": filterSize,
        "--n-pagination-margin": paginationMargin,
        "--n-empty-padding": emptyPadding,
        "--n-box-shadow-before": boxShadowBefore,
        "--n-box-shadow-after": boxShadowAfter,
        "--n-sorter-size": sorterSize,
        "--n-resizable-container-size": resizableContainerSize,
        "--n-resizable-size": resizableSize,
        "--n-loading-size": loadingSize,
        "--n-loading-color": loadingColor,
        "--n-opacity-loading": opacityLoading,
        "--n-td-color-striped": tdColorStriped,
        "--n-td-color-striped-modal": tdColorStripedModal,
        "--n-td-color-striped-popover": tdColorStripedPopover
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("data-table", computed(() => props.size[0]), cssVarsRef, props) : void 0;
    const mergedShowPaginationRef = computed(() => {
      if (!props.pagination)
        return false;
      if (props.paginateSinglePage)
        return true;
      const mergedPagination = mergedPaginationRef.value;
      const { pageCount } = mergedPagination;
      if (pageCount !== void 0)
        return pageCount > 1;
      return mergedPagination.itemCount && mergedPagination.pageSize && mergedPagination.itemCount > mergedPagination.pageSize;
    });
    return Object.assign({ mainTableInstRef, mergedClsPrefix: mergedClsPrefixRef, mergedTheme: themeRef, paginatedData: paginatedDataRef, mergedBordered: mergedBorderedRef, mergedBottomBordered: mergedBottomBorderedRef, mergedPagination: mergedPaginationRef, mergedShowPagination: mergedShowPaginationRef, cssVars: inlineThemeDisabled ? void 0 : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender }, exposedMethods);
  },
  render() {
    const { mergedClsPrefix, themeClass, onRender, $slots, spinProps } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(
      "div",
      { class: [
        `${mergedClsPrefix}-data-table`,
        themeClass,
        {
          [`${mergedClsPrefix}-data-table--bordered`]: this.mergedBordered,
          [`${mergedClsPrefix}-data-table--bottom-bordered`]: this.mergedBottomBordered,
          [`${mergedClsPrefix}-data-table--single-line`]: this.singleLine,
          [`${mergedClsPrefix}-data-table--single-column`]: this.singleColumn,
          [`${mergedClsPrefix}-data-table--loading`]: this.loading,
          [`${mergedClsPrefix}-data-table--flex-height`]: this.flexHeight
        }
      ], style: this.cssVars },
      h(
        "div",
        { class: `${mergedClsPrefix}-data-table-wrapper` },
        h(MainTable, { ref: "mainTableInstRef" })
      ),
      this.mergedShowPagination ? h(
        "div",
        { class: `${mergedClsPrefix}-data-table__pagination` },
        h(NPagination, Object.assign({ theme: this.mergedTheme.peers.Pagination, themeOverrides: this.mergedTheme.peerOverrides.Pagination, disabled: this.loading }, this.mergedPagination))
      ) : null,
      h(Transition, { name: "fade-in-scale-up-transition" }, {
        default: () => {
          return this.loading ? h("div", { class: `${mergedClsPrefix}-data-table-loading-wrapper` }, resolveSlot($slots.loading, () => [
            h(NBaseLoading, Object.assign({ clsPrefix: mergedClsPrefix, strokeWidth: 20 }, spinProps))
          ])) : null;
        }
      })
    );
  }
});
const rect = {
  async mounted(el, binding) {
    await nextTick();
    binding.value(el.getClientRects()[0]);
  },
  async updated(el, binding) {
    await nextTick();
    binding.value(el.getClientRects()[0]);
  }
};
const useAutoWrapWidthColumn = (data) => {
  const currentCol = shallowReactive({
    ...data,
    render(rowData, rowIndex) {
      var _a;
      return withDirectives(createVNode("span", {
        "class": "whitespace-nowrap"
      }, [(_a = data.render) == null ? void 0 : _a.call(data, rowData, rowIndex)]), [[rect, (size) => {
        currentCol.width = Math.max(
          Math.ceil(size.width + 16),
          // 16 是 n-data-table-td 的 左右内边距
          currentCol.width || 0,
          Number(currentCol.minWidth || 0)
        );
      }]]);
    }
  });
  return currentCol;
};
const renderDveice = (row) => {
  return `${getDevice(row).manufacturer} Android${getDevice(row).release || `13`}`;
};
const useSnapshotColumns = () => {
  const ctimeCol = shallowReactive({
    key: `id`,
    title: `创建时间`,
    fixed: "left",
    width: `130px`,
    sortOrder: false,
    sorter(rowA, rowB) {
      return rowA.id - rowB.id;
    },
    render(row) {
      return dayjs(row.id).format("MM-DD HH:mm:ss");
    }
  });
  const deviceCol = useAutoWrapWidthColumn({
    key: `versionRelease`,
    title: `设备`,
    filterMultiple: true,
    minWidth: 100,
    filter(value, row) {
      return renderDveice(row).includes(value.toString());
    },
    render(row) {
      return renderDveice(row);
    }
  });
  const appNameCol = useAutoWrapWidthColumn({
    key: `appName`,
    minWidth: 100,
    title: `APP名称`,
    filterMultiple: true,
    filter(value, row) {
      return value.toString() == row.appName;
    },
    render(row) {
      return row.appName;
    }
  });
  const appIdCol = useAutoWrapWidthColumn({
    key: `appId`,
    title: `ID`,
    minWidth: 100,
    render(row) {
      return row.appId;
    }
  });
  const appVersionCodeCol = useAutoWrapWidthColumn({
    key: `appVersionCode`,
    title: `版本代码`,
    minWidth: 150,
    render(row) {
      return row.appVersionCode;
    }
  });
  const appVersionNameCol = useAutoWrapWidthColumn({
    key: `appVersionName`,
    title: `版本号`,
    minWidth: 150,
    render(row) {
      return row.appVersionName;
    }
  });
  const activityIdCol = shallowReactive({
    key: `activityId`,
    title: `界面ID`,
    filterMultiple: true,
    filter(value, row) {
      return value.toString() == row.activityId;
    },
    render(row) {
      return row.activityId;
    }
  });
  const reseColWidth = () => {
    deviceCol.width = void 0;
    appNameCol.width = void 0;
    appIdCol.width = void 0;
    appVersionCodeCol.width = void 0;
    appVersionNameCol.width = void 0;
  };
  return {
    ctimeCol,
    deviceCol,
    appNameCol,
    appIdCol,
    appVersionCodeCol,
    appVersionNameCol,
    activityIdCol,
    reseColWidth
  };
};
export {
  NDataTable as N,
  NSelect as a,
  renderDveice as r,
  useSnapshotColumns as u
};
