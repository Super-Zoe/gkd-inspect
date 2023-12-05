var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var _head, _tail, _size;
import { y as c, bP as commonVariables$1, bQ as dialogProps, d as defineComponent, A as ref, n as h, bR as NDialog, aI as keep, bS as dialogPropKeys, N as NModal, C as provide, bT as dialogApiInjectionKey, bU as useClicked, bV as useClickPosition, bW as dialogProviderInjectionKey, bX as dialogReactiveListInjectionKey, F as Fragment, O as createId, r as reactive, Q as inject, S as throwError, X as createTheme, p as commonLight, Y as scrollbarLight, G as createInjectionKey, q as cB, bY as fadeInTransition, v as cM, z as useConfig, c as computed, B as useTheme, E as useThemeClass, K as withDirectives, L as vShow, aA as Transition, ae as nextTick, aK as isMounted, ak as Teleport, x as cE, a9 as iconSwitchTransition, D as useRtl, a2 as NIconSwitchTransition, a4 as render, aE as NBaseClose, a1 as createKey, a3 as NBaseLoading, U as NBaseIcon, bZ as InfoIcon, b_ as SuccessIcon, b$ as WarningIcon, c0 as ErrorIcon, a6 as onMounted, M as NFadeInExpandTransition, w as watchEffect, aD as NScrollbar, aH as keysOf, aa as getMargin, c1 as createApp, a5 as isBrowser, u as unref, c2 as NConfigProvider, aT as warn, c3 as router, ap as store, e as watch, bO as toRaw } from "./index-df0b30b5.js";
function omit(object, keys = [], rest) {
  const omitedObject = {};
  const originalKeys = Object.getOwnPropertyNames(object);
  originalKeys.forEach((originalKey) => {
    if (!keys.includes(originalKey)) {
      omitedObject[originalKey] = object[originalKey];
    }
  });
  return Object.assign(omitedObject, rest);
}
const {
  cubicBezierEaseInOut,
  cubicBezierEaseOut,
  cubicBezierEaseIn
} = commonVariables$1;
function fadeInHeightExpandTransition({
  overflow = "hidden",
  duration = ".3s",
  originalTransition = "",
  leavingDelay = "0s",
  foldPadding = false,
  enterToProps = void 0,
  leaveToProps = void 0,
  reverse = false
} = {}) {
  const enterClass = reverse ? "leave" : "enter";
  const leaveClass = reverse ? "enter" : "leave";
  return [c(`&.fade-in-height-expand-transition-${leaveClass}-from,
 &.fade-in-height-expand-transition-${enterClass}-to`, Object.assign(Object.assign({}, enterToProps), {
    opacity: 1
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-to,
 &.fade-in-height-expand-transition-${enterClass}-from`, Object.assign(Object.assign({}, leaveToProps), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: foldPadding ? "0 !important" : void 0,
    paddingBottom: foldPadding ? "0 !important" : void 0
  })), c(`&.fade-in-height-expand-transition-${leaveClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 opacity ${duration} ${cubicBezierEaseOut} ${leavingDelay},
 margin-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 margin-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-top ${duration} ${cubicBezierEaseInOut} ${leavingDelay},
 padding-bottom ${duration} ${cubicBezierEaseInOut} ${leavingDelay}
 ${originalTransition ? "," + originalTransition : ""}
 `), c(`&.fade-in-height-expand-transition-${enterClass}-active`, `
 overflow: ${overflow};
 transition:
 max-height ${duration} ${cubicBezierEaseInOut},
 opacity ${duration} ${cubicBezierEaseIn},
 margin-top ${duration} ${cubicBezierEaseInOut},
 margin-bottom ${duration} ${cubicBezierEaseInOut},
 padding-top ${duration} ${cubicBezierEaseInOut},
 padding-bottom ${duration} ${cubicBezierEaseInOut}
 ${originalTransition ? "," + originalTransition : ""}
 `)];
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const exposedDialogEnvProps = Object.assign(Object.assign({}, dialogProps), { onAfterEnter: Function, onAfterLeave: Function, transformOrigin: String, blockScroll: { type: Boolean, default: true }, closeOnEsc: { type: Boolean, default: true }, onEsc: Function, autoFocus: {
  type: Boolean,
  default: true
}, internalStyle: [String, Object], maskClosable: {
  type: Boolean,
  default: true
}, onPositiveClick: Function, onNegativeClick: Function, onClose: Function, onMaskClick: Function });
const NDialogEnvironment = defineComponent({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, exposedDialogEnvProps), {
    internalKey: {
      type: String,
      required: true
    },
    to: [String, Object],
    // private
    onInternalAfterLeave: {
      type: Function,
      required: true
    }
  }),
  setup(props) {
    const showRef = ref(true);
    function handleAfterLeave() {
      const { onInternalAfterLeave, internalKey, onAfterLeave } = props;
      if (onInternalAfterLeave)
        onInternalAfterLeave(internalKey);
      if (onAfterLeave)
        onAfterLeave();
    }
    function handlePositiveClick(e) {
      const { onPositiveClick } = props;
      if (onPositiveClick) {
        void Promise.resolve(onPositiveClick(e)).then((result) => {
          if (result === false)
            return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleNegativeClick(e) {
      const { onNegativeClick } = props;
      if (onNegativeClick) {
        void Promise.resolve(onNegativeClick(e)).then((result) => {
          if (result === false)
            return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleCloseClick() {
      const { onClose } = props;
      if (onClose) {
        void Promise.resolve(onClose()).then((result) => {
          if (result === false)
            return;
          hide();
        });
      } else {
        hide();
      }
    }
    function handleMaskClick(e) {
      const { onMaskClick, maskClosable } = props;
      if (onMaskClick) {
        onMaskClick(e);
        maskClosable && hide();
      }
    }
    function handleEsc() {
      const { onEsc } = props;
      if (onEsc) {
        onEsc();
      }
    }
    function hide() {
      showRef.value = false;
    }
    function handleUpdateShow(value) {
      showRef.value = value;
    }
    return {
      show: showRef,
      hide,
      handleUpdateShow,
      handleAfterLeave,
      handleCloseClick,
      handleNegativeClick,
      handlePositiveClick,
      handleMaskClick,
      handleEsc
    };
  },
  render() {
    const { handlePositiveClick, handleUpdateShow, handleNegativeClick, handleCloseClick, handleAfterLeave, handleMaskClick, handleEsc, to, maskClosable, show } = this;
    return h(NModal, { show, onUpdateShow: handleUpdateShow, onMaskClick: handleMaskClick, onEsc: handleEsc, to, maskClosable, onAfterEnter: this.onAfterEnter, onAfterLeave: handleAfterLeave, closeOnEsc: this.closeOnEsc, blockScroll: this.blockScroll, autoFocus: this.autoFocus, transformOrigin: this.transformOrigin, internalAppear: true, internalDialog: true }, {
      default: () => h(NDialog, Object.assign({}, keep(this.$props, dialogPropKeys), { style: this.internalStyle, onClose: handleCloseClick, onNegativeClick: handleNegativeClick, onPositiveClick: handlePositiveClick }))
    });
  }
});
const dialogProviderProps = {
  injectionKey: String,
  to: [String, Object]
};
const NDialogProvider = defineComponent({
  name: "DialogProvider",
  props: dialogProviderProps,
  setup() {
    const dialogListRef = ref([]);
    const dialogInstRefs = {};
    function create(options = {}) {
      const key = createId();
      const dialogReactive = reactive(Object.assign(Object.assign({}, options), { key, destroy: () => {
        dialogInstRefs[`n-dialog-${key}`].hide();
      } }));
      dialogListRef.value.push(dialogReactive);
      return dialogReactive;
    }
    const typedApi = ["info", "success", "warning", "error"].map((type) => (options) => {
      return create(Object.assign(Object.assign({}, options), { type }));
    });
    function handleAfterLeave(key) {
      const { value: dialogList } = dialogListRef;
      dialogList.splice(dialogList.findIndex((dialog2) => dialog2.key === key), 1);
    }
    function destroyAll() {
      Object.values(dialogInstRefs).forEach((dialogInstRef) => {
        dialogInstRef.hide();
      });
    }
    const api = {
      create,
      destroyAll,
      info: typedApi[0],
      success: typedApi[1],
      warning: typedApi[2],
      error: typedApi[3]
    };
    provide(dialogApiInjectionKey, api);
    provide(dialogProviderInjectionKey, {
      clickedRef: useClicked(64),
      clickPositionRef: useClickPosition()
    });
    provide(dialogReactiveListInjectionKey, dialogListRef);
    return Object.assign(Object.assign({}, api), {
      dialogList: dialogListRef,
      dialogInstRefs,
      handleAfterLeave
    });
  },
  render() {
    var _a, _b;
    return h(Fragment, null, [
      this.dialogList.map((dialog2) => h(NDialogEnvironment, omit(dialog2, ["destroy", "style"], {
        internalStyle: dialog2.style,
        to: this.to,
        ref: (inst) => {
          if (inst === null) {
            delete this.dialogInstRefs[`n-dialog-${dialog2.key}`];
          } else {
            this.dialogInstRefs[`n-dialog-${dialog2.key}`] = inst;
          }
        },
        internalKey: dialog2.key,
        onInternalAfterLeave: this.handleAfterLeave
      }))),
      (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)
    ]);
  }
});
function useDialog() {
  const dialog2 = inject(dialogApiInjectionKey, null);
  if (dialog2 === null) {
    throwError("use-dialog", "No outer <n-dialog-provider /> founded.");
  }
  return dialog2;
}
const commonVars = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
const self$3 = (vars) => {
  const { textColor2, successColor, infoColor, warningColor, errorColor, popoverColor, closeIconColor, closeIconColorHover, closeIconColorPressed, closeColorHover, closeColorPressed, textColor1, textColor3, borderRadius, fontWeightStrong, boxShadow2, lineHeight, fontSize } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    borderRadius,
    lineHeight,
    fontSize,
    headerFontWeight: fontWeightStrong,
    iconColor: textColor2,
    iconColorSuccess: successColor,
    iconColorInfo: infoColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    color: popoverColor,
    textColor: textColor2,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeBorderRadius: borderRadius,
    closeColorHover,
    closeColorPressed,
    headerTextColor: textColor1,
    descriptionTextColor: textColor3,
    actionTextColor: textColor2,
    boxShadow: boxShadow2
  });
};
const notificationLight = createTheme({
  name: "Notification",
  common: commonLight,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$3
});
const notificationLight$1 = notificationLight;
const commonVariables = {
  margin: "0 0 8px 0",
  padding: "10px 20px",
  maxWidth: "720px",
  minWidth: "420px",
  iconMargin: "0 10px 0 0",
  closeMargin: "0 0 0 10px",
  closeSize: "20px",
  closeIconSize: "16px",
  iconSize: "20px",
  fontSize: "14px"
};
const self$2 = (vars) => {
  const { textColor2, closeIconColor, closeIconColorHover, closeIconColorPressed, infoColor, successColor, errorColor, warningColor, popoverColor, boxShadow2, primaryColor, lineHeight, borderRadius, closeColorHover, closeColorPressed } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    closeBorderRadius: borderRadius,
    textColor: textColor2,
    textColorInfo: textColor2,
    textColorSuccess: textColor2,
    textColorError: textColor2,
    textColorWarning: textColor2,
    textColorLoading: textColor2,
    color: popoverColor,
    colorInfo: popoverColor,
    colorSuccess: popoverColor,
    colorError: popoverColor,
    colorWarning: popoverColor,
    colorLoading: popoverColor,
    boxShadow: boxShadow2,
    boxShadowInfo: boxShadow2,
    boxShadowSuccess: boxShadow2,
    boxShadowError: boxShadow2,
    boxShadowWarning: boxShadow2,
    boxShadowLoading: boxShadow2,
    iconColor: textColor2,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    iconColorLoading: primaryColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    closeColorHoverLoading: closeColorHover,
    closeColorPressedLoading: closeColorPressed,
    closeIconColorLoading: closeIconColor,
    closeIconColorHoverLoading: closeIconColorHover,
    closeIconColorPressedLoading: closeIconColorPressed,
    loadingColor: primaryColor,
    lineHeight,
    borderRadius
  });
};
const messageLight = {
  name: "Message",
  common: commonLight,
  self: self$2
};
const messageLight$1 = messageLight;
const self$1 = (vars) => {
  const { primaryColor, errorColor } = vars;
  return {
    colorError: errorColor,
    colorLoading: primaryColor,
    height: "2px"
  };
};
const loadingBarLight = {
  name: "LoadingBar",
  common: commonLight,
  self: self$1
};
const loadingBarLight$1 = loadingBarLight;
const loadingBarProviderInjectionKey = createInjectionKey("n-loading-bar");
const loadingBarApiInjectionKey = createInjectionKey("n-loading-bar-api");
const style$2 = cB("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [fadeInTransition({
  enterDuration: "0.3s",
  leaveDuration: "0.8s"
}), cB("loading-bar", `
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `, [cM("starting", `
 background: var(--n-color-loading);
 `), cM("finishing", `
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `), cM("error", `
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);
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
function createClassName(status, clsPrefix) {
  return `${clsPrefix}-loading-bar ${clsPrefix}-loading-bar--${status}`;
}
const NLoadingBar = defineComponent({
  name: "LoadingBar",
  props: {
    containerStyle: [String, Object]
  },
  setup() {
    const { inlineThemeDisabled } = useConfig();
    const {
      props: providerProps,
      mergedClsPrefixRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(loadingBarProviderInjectionKey);
    const loadingBarRef = ref(null);
    const enteringRef = ref(false);
    const startedRef = ref(false);
    const loadingRef = ref(false);
    const transitionDisabledRef = ref(false);
    let finishing = false;
    const erroringRef = ref(false);
    const mergedLoadingBarStyle = computed(() => {
      const { loadingBarStyle } = providerProps;
      if (!loadingBarStyle)
        return "";
      return loadingBarStyle[erroringRef.value ? "error" : "loading"];
    });
    function init() {
      return __awaiter(this, void 0, void 0, function* () {
        enteringRef.value = false;
        loadingRef.value = false;
        finishing = false;
        erroringRef.value = false;
        transitionDisabledRef.value = true;
        yield nextTick();
        transitionDisabledRef.value = false;
      });
    }
    function start(fromProgress = 0, toProgress = 80, status = "starting") {
      return __awaiter(this, void 0, void 0, function* () {
        startedRef.value = true;
        yield init();
        if (finishing)
          return;
        loadingRef.value = true;
        yield nextTick();
        const el = loadingBarRef.value;
        if (!el)
          return;
        el.style.maxWidth = `${fromProgress}%`;
        el.style.transition = "none";
        void el.offsetWidth;
        el.className = createClassName(status, mergedClsPrefixRef.value);
        el.style.transition = "";
        el.style.maxWidth = `${toProgress}%`;
      });
    }
    function finish() {
      return __awaiter(this, void 0, void 0, function* () {
        if (finishing || erroringRef.value)
          return;
        if (startedRef.value) {
          yield nextTick();
        }
        finishing = true;
        const el = loadingBarRef.value;
        if (!el)
          return;
        el.className = createClassName("finishing", mergedClsPrefixRef.value);
        el.style.maxWidth = "100%";
        void el.offsetWidth;
        loadingRef.value = false;
      });
    }
    function error() {
      if (finishing || erroringRef.value)
        return;
      if (!loadingRef.value) {
        void start(100, 100, "error").then(() => {
          erroringRef.value = true;
          const el = loadingBarRef.value;
          if (!el)
            return;
          el.className = createClassName("error", mergedClsPrefixRef.value);
          void el.offsetWidth;
          loadingRef.value = false;
        });
      } else {
        erroringRef.value = true;
        const el = loadingBarRef.value;
        if (!el)
          return;
        el.className = createClassName("error", mergedClsPrefixRef.value);
        el.style.maxWidth = "100%";
        void el.offsetWidth;
        loadingRef.value = false;
      }
    }
    function handleEnter() {
      enteringRef.value = true;
    }
    function handleAfterEnter() {
      enteringRef.value = false;
    }
    function handleAfterLeave() {
      return __awaiter(this, void 0, void 0, function* () {
        yield init();
      });
    }
    const themeRef = useTheme("LoadingBar", "-loading-bar", style$2, loadingBarLight$1, providerProps, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { self: { height, colorError, colorLoading } } = themeRef.value;
      return {
        "--n-height": height,
        "--n-color-loading": colorLoading,
        "--n-color-error": colorError
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("loading-bar", void 0, cssVarsRef, providerProps) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      loadingBarRef,
      started: startedRef,
      loading: loadingRef,
      entering: enteringRef,
      transitionDisabled: transitionDisabledRef,
      start,
      error,
      finish,
      handleEnter,
      handleAfterEnter,
      handleAfterLeave,
      mergedLoadingBarStyle,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    if (!this.started)
      return null;
    const { mergedClsPrefix } = this;
    return h(Transition, {
      name: "fade-in-transition",
      appear: true,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onAfterLeave: this.handleAfterLeave,
      css: !this.transitionDisabled
    }, {
      default: () => {
        var _a;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return withDirectives(h(
          "div",
          { class: [
            `${mergedClsPrefix}-loading-bar-container`,
            this.themeClass
          ], style: this.containerStyle },
          h("div", { ref: "loadingBarRef", class: [`${mergedClsPrefix}-loading-bar`], style: [
            this.cssVars,
            this.mergedLoadingBarStyle
          ] })
        ), [[vShow, this.loading || !this.loading && this.entering]]);
      }
    });
  }
});
const loadingBarProviderProps = Object.assign(Object.assign({}, useTheme.props), { to: {
  type: [String, Object, Boolean],
  default: void 0
}, containerStyle: [String, Object], loadingBarStyle: {
  type: Object
} });
const NLoadingBarProvider = defineComponent({
  name: "LoadingBarProvider",
  props: loadingBarProviderProps,
  setup(props) {
    const isMountedRef = isMounted();
    const loadingBarRef = ref(null);
    const methods = {
      start() {
        var _a;
        if (isMountedRef.value) {
          (_a = loadingBarRef.value) === null || _a === void 0 ? void 0 : _a.start();
        } else {
          void nextTick(() => {
            var _a2;
            (_a2 = loadingBarRef.value) === null || _a2 === void 0 ? void 0 : _a2.start();
          });
        }
      },
      error() {
        var _a;
        if (isMountedRef.value) {
          (_a = loadingBarRef.value) === null || _a === void 0 ? void 0 : _a.error();
        } else {
          void nextTick(() => {
            var _a2;
            (_a2 = loadingBarRef.value) === null || _a2 === void 0 ? void 0 : _a2.error();
          });
        }
      },
      finish() {
        var _a;
        if (isMountedRef.value) {
          (_a = loadingBarRef.value) === null || _a === void 0 ? void 0 : _a.finish();
        } else {
          void nextTick(() => {
            var _a2;
            (_a2 = loadingBarRef.value) === null || _a2 === void 0 ? void 0 : _a2.finish();
          });
        }
      }
    };
    const { mergedClsPrefixRef } = useConfig(props);
    provide(loadingBarApiInjectionKey, methods);
    provide(loadingBarProviderInjectionKey, {
      props,
      mergedClsPrefixRef
    });
    return Object.assign(methods, {
      loadingBarRef
    });
  },
  render() {
    var _a, _b;
    return h(
      Fragment,
      null,
      h(
        Teleport,
        { disabled: this.to === false, to: this.to || "body" },
        h(NLoadingBar, { ref: "loadingBarRef", containerStyle: this.containerStyle })
      ),
      (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)
    );
  }
});
function useLoadingBar() {
  const loadingBar2 = inject(loadingBarApiInjectionKey, null);
  if (loadingBar2 === null) {
    throwError("use-loading-bar", "No outer <n-loading-bar-provider /> founded.");
  }
  return loadingBar2;
}
const messageProps = {
  icon: Function,
  type: {
    type: String,
    default: "info"
  },
  content: [String, Number, Function],
  showIcon: {
    type: Boolean,
    default: true
  },
  closable: Boolean,
  keepAliveOnHover: Boolean,
  onClose: Function,
  onMouseenter: Function,
  onMouseleave: Function
};
const messageApiInjectionKey = createInjectionKey("n-message-api");
const messageProviderInjectionKey = createInjectionKey("n-message-provider");
const style$1 = c([cB("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [fadeInHeightExpandTransition({
  overflow: "visible",
  originalTransition: "transform .3s var(--n-bezier)",
  enterToProps: {
    transform: "scale(1)"
  },
  leaveToProps: {
    transform: "scale(0.85)"
  }
})]), cB("message", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `, [cE("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), cE("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [["default", "info", "success", "warning", "error", "loading"].map((type) => cM(`${type}-type`, [c("> *", `
 color: var(--n-icon-color-${type});
 transition: color .3s var(--n-bezier);
 `)])), c("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [iconSwitchTransition()])]), cE("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [c("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), c("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), cB("message-container", `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [cM("top", `
 top: 12px;
 left: 0;
 right: 0;
 `), cM("top-left", `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), cM("top-right", `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), cM("bottom", `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), cM("bottom-left", `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), cM("bottom-right", `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]);
const iconRenderMap$1 = {
  info: () => h(InfoIcon, null),
  success: () => h(SuccessIcon, null),
  warning: () => h(WarningIcon, null),
  error: () => h(ErrorIcon, null),
  default: () => null
};
const NMessage = defineComponent({
  name: "Message",
  props: Object.assign(Object.assign({}, messageProps), { render: Function }),
  setup(props) {
    const { inlineThemeDisabled, mergedRtlRef } = useConfig(props);
    const {
      props: messageProviderProps2,
      mergedClsPrefixRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(messageProviderInjectionKey);
    const rtlEnabledRef = useRtl("Message", mergedRtlRef, mergedClsPrefixRef);
    const themeRef = useTheme("Message", "-message", style$1, messageLight$1, messageProviderProps2, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { type } = props;
      const { common: { cubicBezierEaseInOut: cubicBezierEaseInOut2 }, self: { padding, margin, maxWidth, iconMargin, closeMargin, closeSize, iconSize, fontSize, lineHeight, borderRadius, iconColorInfo, iconColorSuccess, iconColorWarning, iconColorError, iconColorLoading, closeIconSize, closeBorderRadius, [createKey("textColor", type)]: textColor, [createKey("boxShadow", type)]: boxShadow, [createKey("color", type)]: color, [createKey("closeColorHover", type)]: closeColorHover, [createKey("closeColorPressed", type)]: closeColorPressed, [createKey("closeIconColor", type)]: closeIconColor, [createKey("closeIconColorPressed", type)]: closeIconColorPressed, [createKey("closeIconColorHover", type)]: closeIconColorHover } } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-margin": margin,
        "--n-padding": padding,
        "--n-max-width": maxWidth,
        "--n-font-size": fontSize,
        "--n-icon-margin": iconMargin,
        "--n-icon-size": iconSize,
        "--n-close-icon-size": closeIconSize,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-size": closeSize,
        "--n-close-margin": closeMargin,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-box-shadow": boxShadow,
        "--n-icon-color-info": iconColorInfo,
        "--n-icon-color-success": iconColorSuccess,
        "--n-icon-color-warning": iconColorWarning,
        "--n-icon-color-error": iconColorError,
        "--n-icon-color-loading": iconColorLoading,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-line-height": lineHeight,
        "--n-border-radius": borderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("message", computed(() => props.type[0]), cssVarsRef, {}) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      rtlEnabled: rtlEnabledRef,
      messageProviderProps: messageProviderProps2,
      handleClose() {
        var _a;
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      },
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      placement: messageProviderProps2.placement
    };
  },
  render() {
    const { render: renderMessage, type, closable, content, mergedClsPrefix, cssVars, themeClass, onRender, icon, handleClose, showIcon } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    let iconNode;
    return h("div", { class: [`${mergedClsPrefix}-message-wrapper`, themeClass], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: [
      {
        alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end"
      },
      cssVars
    ] }, renderMessage ? renderMessage(this.$props) : h(
      "div",
      { class: [
        `${mergedClsPrefix}-message ${mergedClsPrefix}-message--${type}-type`,
        this.rtlEnabled && `${mergedClsPrefix}-message--rtl`
      ] },
      (iconNode = createIconVNode(icon, type, mergedClsPrefix)) && showIcon ? h(
        "div",
        { class: `${mergedClsPrefix}-message__icon ${mergedClsPrefix}-message__icon--${type}-type` },
        h(NIconSwitchTransition, null, {
          default: () => iconNode
        })
      ) : null,
      h("div", { class: `${mergedClsPrefix}-message__content` }, render(content)),
      closable ? h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-message__close`, onClick: handleClose, absolute: true }) : null
    ));
  }
});
function createIconVNode(icon, type, clsPrefix) {
  if (typeof icon === "function") {
    return icon();
  } else {
    const innerIcon = type === "loading" ? h(NBaseLoading, { clsPrefix, strokeWidth: 24, scale: 0.85 }) : iconRenderMap$1[type]();
    if (!innerIcon)
      return null;
    return h(NBaseIcon, { clsPrefix, key: type }, {
      default: () => innerIcon
    });
  }
}
const MessageEnvironment = defineComponent({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, messageProps), {
    duration: {
      type: Number,
      default: 3e3
    },
    onAfterLeave: Function,
    onLeave: Function,
    internalKey: {
      type: String,
      required: true
    },
    // private
    onInternalAfterLeave: Function,
    // deprecated
    onHide: Function,
    onAfterHide: Function
  }),
  setup(props) {
    let timerId = null;
    const showRef = ref(true);
    onMounted(() => {
      setHideTimeout();
    });
    function setHideTimeout() {
      const { duration } = props;
      if (duration) {
        timerId = window.setTimeout(hide, duration);
      }
    }
    function handleMouseenter(e) {
      if (e.currentTarget !== e.target)
        return;
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    }
    function handleMouseleave(e) {
      if (e.currentTarget !== e.target)
        return;
      setHideTimeout();
    }
    function hide() {
      const { onHide } = props;
      showRef.value = false;
      if (timerId) {
        window.clearTimeout(timerId);
        timerId = null;
      }
      if (onHide)
        onHide();
    }
    function handleClose() {
      const { onClose } = props;
      if (onClose)
        onClose();
      hide();
    }
    function handleAfterLeave() {
      const { onAfterLeave, onInternalAfterLeave, onAfterHide, internalKey } = props;
      if (onAfterLeave)
        onAfterLeave();
      if (onInternalAfterLeave)
        onInternalAfterLeave(internalKey);
      if (onAfterHide)
        onAfterHide();
    }
    function deactivate() {
      hide();
    }
    return {
      show: showRef,
      hide,
      handleClose,
      handleAfterLeave,
      handleMouseleave,
      handleMouseenter,
      deactivate
    };
  },
  render() {
    return h(NFadeInExpandTransition, { appear: true, onAfterLeave: this.handleAfterLeave, onLeave: this.onLeave }, {
      default: () => [
        this.show ? h(NMessage, { content: this.content, type: this.type, icon: this.icon, showIcon: this.showIcon, closable: this.closable, onClose: this.handleClose, onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0 }) : null
      ]
    });
  }
});
const messageProviderProps = Object.assign(Object.assign({}, useTheme.props), { to: [String, Object], duration: {
  type: Number,
  default: 3e3
}, keepAliveOnHover: Boolean, max: Number, placement: {
  type: String,
  default: "top"
}, closable: Boolean, containerStyle: [String, Object] });
const NMessageProvider = defineComponent({
  name: "MessageProvider",
  props: messageProviderProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const messageListRef = ref([]);
    const messageRefs = ref({});
    const api = {
      create(content, options) {
        return create(content, Object.assign({ type: "default" }, options));
      },
      info(content, options) {
        return create(content, Object.assign(Object.assign({}, options), { type: "info" }));
      },
      success(content, options) {
        return create(content, Object.assign(Object.assign({}, options), { type: "success" }));
      },
      warning(content, options) {
        return create(content, Object.assign(Object.assign({}, options), { type: "warning" }));
      },
      error(content, options) {
        return create(content, Object.assign(Object.assign({}, options), { type: "error" }));
      },
      loading(content, options) {
        return create(content, Object.assign(Object.assign({}, options), { type: "loading" }));
      },
      destroyAll
    };
    provide(messageProviderInjectionKey, {
      props,
      mergedClsPrefixRef
    });
    provide(messageApiInjectionKey, api);
    function create(content, options) {
      const key = createId();
      const messageReactive = reactive(Object.assign(Object.assign({}, options), {
        content,
        key,
        destroy: () => {
          var _a;
          (_a = messageRefs.value[key]) === null || _a === void 0 ? void 0 : _a.hide();
        }
      }));
      const { max } = props;
      if (max && messageListRef.value.length >= max) {
        messageListRef.value.shift();
      }
      messageListRef.value.push(messageReactive);
      return messageReactive;
    }
    function handleAfterLeave(key) {
      messageListRef.value.splice(messageListRef.value.findIndex((message2) => message2.key === key), 1);
      delete messageRefs.value[key];
    }
    function destroyAll() {
      Object.values(messageRefs.value).forEach((messageInstRef) => {
        messageInstRef.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      messageRefs,
      messageList: messageListRef,
      handleAfterLeave
    }, api);
  },
  render() {
    var _a, _b, _c;
    return h(
      Fragment,
      null,
      (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a),
      this.messageList.length ? h(
        Teleport,
        { to: (_c = this.to) !== null && _c !== void 0 ? _c : "body" },
        h("div", { class: [
          `${this.mergedClsPrefix}-message-container`,
          `${this.mergedClsPrefix}-message-container--${this.placement}`
        ], key: "message-container", style: this.containerStyle }, this.messageList.map((message2) => {
          return h(MessageEnvironment, Object.assign({ ref: (inst) => {
            if (inst) {
              this.messageRefs[message2.key] = inst;
            }
          }, internalKey: message2.key, onInternalAfterLeave: this.handleAfterLeave }, omit(message2, ["destroy"], void 0), { duration: message2.duration === void 0 ? this.duration : message2.duration, keepAliveOnHover: message2.keepAliveOnHover === void 0 ? this.keepAliveOnHover : message2.keepAliveOnHover, closable: message2.closable === void 0 ? this.closable : message2.closable }));
        }))
      ) : null
    );
  }
});
function useMessage() {
  const api = inject(messageApiInjectionKey, null);
  if (api === null) {
    throwError("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A.");
  }
  return api;
}
const notificationProviderInjectionKey = createInjectionKey("n-notification-provider");
const NotificationContainer = defineComponent({
  name: "NotificationContainer",
  props: {
    scrollable: {
      type: Boolean,
      required: true
    },
    placement: {
      type: String,
      required: true
    }
  },
  setup() {
    const { mergedThemeRef, mergedClsPrefixRef, wipTransitionCountRef } = inject(notificationProviderInjectionKey);
    const selfRef = ref(null);
    watchEffect(() => {
      var _a, _b;
      if (wipTransitionCountRef.value > 0) {
        (_a = selfRef === null || selfRef === void 0 ? void 0 : selfRef.value) === null || _a === void 0 ? void 0 : _a.classList.add("transitioning");
      } else {
        (_b = selfRef === null || selfRef === void 0 ? void 0 : selfRef.value) === null || _b === void 0 ? void 0 : _b.classList.remove("transitioning");
      }
    });
    return {
      selfRef,
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      transitioning: wipTransitionCountRef
    };
  },
  render() {
    const { $slots, scrollable, mergedClsPrefix, mergedTheme, placement } = this;
    return h("div", { ref: "selfRef", class: [
      `${mergedClsPrefix}-notification-container`,
      scrollable && `${mergedClsPrefix}-notification-container--scrollable`,
      `${mergedClsPrefix}-notification-container--${placement}`
    ] }, scrollable ? h(NScrollbar, { theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, contentStyle: { overflow: "hidden" } }, $slots) : $slots);
  }
});
const iconRenderMap = {
  info: () => h(InfoIcon, null),
  success: () => h(SuccessIcon, null),
  warning: () => h(WarningIcon, null),
  error: () => h(ErrorIcon, null),
  default: () => null
};
const notificationProps = {
  closable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: "default"
  },
  avatar: Function,
  title: [String, Function],
  description: [String, Function],
  content: [String, Function],
  meta: [String, Function],
  action: [String, Function],
  onClose: {
    type: Function,
    required: true
  },
  keepAliveOnHover: Boolean,
  onMouseenter: Function,
  onMouseleave: Function
};
const notificationPropKeys = keysOf(notificationProps);
const Notification = defineComponent({
  name: "Notification",
  props: notificationProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedThemeRef,
      props: providerProps
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(notificationProviderInjectionKey);
    const { inlineThemeDisabled, mergedRtlRef } = useConfig();
    const rtlEnabledRef = useRtl("Notification", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const { type } = props;
      const { self: { color, textColor, closeIconColor, closeIconColorHover, closeIconColorPressed, headerTextColor, descriptionTextColor, actionTextColor, borderRadius, headerFontWeight, boxShadow, lineHeight, fontSize, closeMargin, closeSize, width, padding, closeIconSize, closeBorderRadius, closeColorHover, closeColorPressed, titleFontSize, metaFontSize, descriptionFontSize, [createKey("iconColor", type)]: iconColor }, common: { cubicBezierEaseOut: cubicBezierEaseOut2, cubicBezierEaseIn: cubicBezierEaseIn2, cubicBezierEaseInOut: cubicBezierEaseInOut2 } } = mergedThemeRef.value;
      const { left, right, top, bottom } = getMargin(padding);
      return {
        "--n-color": color,
        "--n-font-size": fontSize,
        "--n-text-color": textColor,
        "--n-description-text-color": descriptionTextColor,
        "--n-action-text-color": actionTextColor,
        "--n-title-text-color": headerTextColor,
        "--n-title-font-weight": headerFontWeight,
        "--n-bezier": cubicBezierEaseInOut2,
        "--n-bezier-ease-out": cubicBezierEaseOut2,
        "--n-bezier-ease-in": cubicBezierEaseIn2,
        "--n-border-radius": borderRadius,
        "--n-box-shadow": boxShadow,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-color-hover": closeColorHover,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-line-height": lineHeight,
        "--n-icon-color": iconColor,
        "--n-close-margin": closeMargin,
        "--n-close-size": closeSize,
        "--n-close-icon-size": closeIconSize,
        "--n-width": width,
        "--n-padding-left": left,
        "--n-padding-right": right,
        "--n-padding-top": top,
        "--n-padding-bottom": bottom,
        "--n-title-font-size": titleFontSize,
        "--n-meta-font-size": metaFontSize,
        "--n-description-font-size": descriptionFontSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("notification", computed(() => props.type[0]), cssVarsRef, providerProps) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      showAvatar: computed(() => {
        return props.avatar || props.type !== "default";
      }),
      handleCloseClick() {
        props.onClose();
      },
      rtlEnabled: rtlEnabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const { mergedClsPrefix } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(
      "div",
      { class: [`${mergedClsPrefix}-notification-wrapper`, this.themeClass], onMouseenter: this.onMouseenter, onMouseleave: this.onMouseleave, style: this.cssVars },
      h(
        "div",
        { class: [
          `${mergedClsPrefix}-notification`,
          this.rtlEnabled && `${mergedClsPrefix}-notification--rtl`,
          this.themeClass,
          {
            [`${mergedClsPrefix}-notification--closable`]: this.closable,
            [`${mergedClsPrefix}-notification--show-avatar`]: this.showAvatar
          }
        ], style: this.cssVars },
        this.showAvatar ? h("div", { class: `${mergedClsPrefix}-notification__avatar` }, this.avatar ? render(this.avatar) : this.type !== "default" ? h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => iconRenderMap[this.type]() }) : null) : null,
        this.closable ? h(NBaseClose, { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-notification__close`, onClick: this.handleCloseClick }) : null,
        h(
          "div",
          { ref: "bodyRef", class: `${mergedClsPrefix}-notification-main` },
          this.title ? h("div", { class: `${mergedClsPrefix}-notification-main__header` }, render(this.title)) : null,
          this.description ? h("div", { class: `${mergedClsPrefix}-notification-main__description` }, render(this.description)) : null,
          this.content ? h("pre", { class: `${mergedClsPrefix}-notification-main__content` }, render(this.content)) : null,
          this.meta || this.action ? h(
            "div",
            { class: `${mergedClsPrefix}-notification-main-footer` },
            this.meta ? h("div", { class: `${mergedClsPrefix}-notification-main-footer__meta` }, render(this.meta)) : null,
            this.action ? h("div", { class: `${mergedClsPrefix}-notification-main-footer__action` }, render(this.action)) : null
          ) : null
        )
      )
    );
  }
});
const notificationEnvOptions = Object.assign(Object.assign({}, notificationProps), {
  duration: Number,
  onClose: Function,
  onLeave: Function,
  onAfterEnter: Function,
  onAfterLeave: Function,
  /** @deprecated */
  onHide: Function,
  /** @deprecated */
  onAfterShow: Function,
  /** @deprecated */
  onAfterHide: Function
});
const NotificationEnvironment = defineComponent({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, notificationEnvOptions), {
    // private
    internalKey: {
      type: String,
      required: true
    },
    onInternalAfterLeave: {
      type: Function,
      required: true
    }
  }),
  setup(props) {
    const {
      wipTransitionCountRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(notificationProviderInjectionKey);
    const showRef = ref(true);
    let timerId = null;
    function hide() {
      showRef.value = false;
      if (timerId) {
        window.clearTimeout(timerId);
      }
    }
    function handleBeforeEnter(el) {
      wipTransitionCountRef.value++;
      void nextTick(() => {
        el.style.height = `${el.offsetHeight}px`;
        el.style.maxHeight = "0";
        el.style.transition = "none";
        void el.offsetHeight;
        el.style.transition = "";
        el.style.maxHeight = el.style.height;
      });
    }
    function handleAfterEnter(el) {
      wipTransitionCountRef.value--;
      el.style.height = "";
      el.style.maxHeight = "";
      const { onAfterEnter, onAfterShow } = props;
      if (onAfterEnter)
        onAfterEnter();
      if (onAfterShow)
        onAfterShow();
    }
    function handleBeforeLeave(el) {
      wipTransitionCountRef.value++;
      el.style.maxHeight = `${el.offsetHeight}px`;
      el.style.height = `${el.offsetHeight}px`;
      void el.offsetHeight;
    }
    function handleLeave(el) {
      const { onHide } = props;
      if (onHide)
        onHide();
      el.style.maxHeight = "0";
      void el.offsetHeight;
    }
    function handleAfterLeave() {
      wipTransitionCountRef.value--;
      const { onAfterLeave, onInternalAfterLeave, onAfterHide, internalKey } = props;
      if (onAfterLeave)
        onAfterLeave();
      onInternalAfterLeave(internalKey);
      if (onAfterHide)
        onAfterHide();
    }
    function setHideTimeout() {
      const { duration } = props;
      if (duration) {
        timerId = window.setTimeout(hide, duration);
      }
    }
    function handleMouseenter(e) {
      if (e.currentTarget !== e.target)
        return;
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    }
    function handleMouseleave(e) {
      if (e.currentTarget !== e.target)
        return;
      setHideTimeout();
    }
    function handleClose() {
      const { onClose } = props;
      if (onClose) {
        void Promise.resolve(onClose()).then((feedback) => {
          if (feedback === false)
            return;
          hide();
        });
      } else {
        hide();
      }
    }
    onMounted(() => {
      if (props.duration) {
        timerId = window.setTimeout(hide, props.duration);
      }
    });
    return {
      show: showRef,
      hide,
      handleClose,
      handleAfterLeave,
      handleLeave,
      handleBeforeLeave,
      handleAfterEnter,
      handleBeforeEnter,
      handleMouseenter,
      handleMouseleave
    };
  },
  render() {
    return h(Transition, {
      name: "notification-transition",
      appear: true,
      // convert to any since Element is not compitable with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => {
        return this.show ? h(Notification, Object.assign({}, keep(this.$props, notificationPropKeys), { onClose: this.handleClose, onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0, onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0 })) : null;
      }
    });
  }
});
const style = c([cB("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [c(">", [cB("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [c(">", [cB("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [cB("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), cM("top, top-right, top-left", `
 top: 12px;
 `, [c("&.transitioning >", [cB("scrollbar", [c(">", [cB("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), cM("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [c(">", [cB("scrollbar", [c(">", [cB("scrollbar-container", [cB("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), cB("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), cM("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [cB("notification-wrapper", [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]), cM("top", [cB("notification-wrapper", `
 transform-origin: top center;
 `)]), cM("bottom", [cB("notification-wrapper", `
 transform-origin: bottom center;
 `)]), cM("top-right, bottom-right", [cB("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]), cM("top-left, bottom-left", [cB("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]), cM("top-right", `
 right: 0;
 `, [placementTransformStyle("top-right")]), cM("top-left", `
 left: 0;
 `, [placementTransformStyle("top-left")]), cM("bottom-right", `
 right: 0;
 `, [placementTransformStyle("bottom-right")]), cM("bottom-left", `
 left: 0;
 `, [placementTransformStyle("bottom-left")]), cM("scrollable", [cM("top-right", `
 top: 0;
 `), cM("top-left", `
 top: 0;
 `), cM("bottom-right", `
 bottom: 0;
 `), cM("bottom-left", `
 bottom: 0;
 `)]), cB("notification-wrapper", `
 margin-bottom: 12px;
 `, [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 opacity: 1;
 `), c("&.notification-transition-leave-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `), c("&.notification-transition-enter-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]), cB("notification", `
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `, [cE("avatar", [cB("icon", {
  color: "var(--n-icon-color)"
}), cB("base-icon", {
  color: "var(--n-icon-color)"
})]), cM("show-avatar", [cB("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), cM("closable", [cB("notification-main", [c("> *:first-child", {
  paddingRight: "20px"
})]), cE("close", `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), cE("avatar", `
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [cB("icon", "transition: color .3s var(--n-bezier);")]), cB("notification-main", `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [cB("notification-main-footer", `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `, [cE("meta", `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), cE("action", `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]), cE("header", `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `), cE("description", `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), cE("content", `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `, [c("&:first-child", {
  margin: 0
})])])])])]);
function placementTransformStyle(placement) {
  const direction = placement.split("-")[1];
  const transformXEnter = direction === "left" ? "calc(-100%)" : "calc(100%)";
  const transformXLeave = "0";
  return cB("notification-wrapper", [c("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${transformXEnter}, 0);
 `), c("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(${transformXLeave}, 0);
 `)]);
}
const notificationApiInjectionKey = createInjectionKey("n-notification-api");
const notificationProviderProps = Object.assign(Object.assign({}, useTheme.props), { containerStyle: [String, Object], to: [String, Object], scrollable: {
  type: Boolean,
  default: true
}, max: Number, placement: {
  type: String,
  default: "top-right"
}, keepAliveOnHover: Boolean });
const NNotificationProvider = defineComponent({
  name: "NotificationProvider",
  props: notificationProviderProps,
  setup(props) {
    const { mergedClsPrefixRef } = useConfig(props);
    const notificationListRef = ref([]);
    const notificationRefs = {};
    const leavingKeySet = /* @__PURE__ */ new Set();
    function create(options) {
      const key = createId();
      const destroy = () => {
        leavingKeySet.add(key);
        if (notificationRefs[key]) {
          notificationRefs[key].hide();
        }
      };
      const notificationReactive = reactive(Object.assign(Object.assign({}, options), {
        key,
        destroy,
        hide: destroy,
        deactivate: destroy
      }));
      const { max } = props;
      if (max && notificationListRef.value.length - leavingKeySet.size >= max) {
        let someoneMountedRemoved = false;
        let index = 0;
        for (const notification of notificationListRef.value) {
          if (!leavingKeySet.has(notification.key)) {
            if (notificationRefs[notification.key]) {
              notification.destroy();
              someoneMountedRemoved = true;
            }
            break;
          }
          index++;
        }
        if (!someoneMountedRemoved) {
          notificationListRef.value.splice(index, 1);
        }
      }
      notificationListRef.value.push(notificationReactive);
      return notificationReactive;
    }
    const apis = ["info", "success", "warning", "error"].map((type) => {
      return (options) => create(Object.assign(Object.assign({}, options), { type }));
    });
    function handleAfterLeave(key) {
      leavingKeySet.delete(key);
      notificationListRef.value.splice(notificationListRef.value.findIndex((notification) => notification.key === key), 1);
    }
    const themeRef = useTheme("Notification", "-notification", style, notificationLight$1, props, mergedClsPrefixRef);
    const api = {
      create,
      info: apis[0],
      success: apis[1],
      warning: apis[2],
      error: apis[3],
      open,
      destroyAll
    };
    const wipTransitionCountRef = ref(0);
    provide(notificationApiInjectionKey, api);
    provide(notificationProviderInjectionKey, {
      props,
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      wipTransitionCountRef
    });
    function open(options) {
      return create(options);
    }
    function destroyAll() {
      Object.values(notificationListRef.value).forEach((notification) => {
        notification.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: mergedClsPrefixRef,
      notificationList: notificationListRef,
      notificationRefs,
      handleAfterLeave
    }, api);
  },
  render() {
    var _a, _b, _c;
    const { placement } = this;
    return h(
      Fragment,
      null,
      (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a),
      this.notificationList.length ? h(
        Teleport,
        { to: (_c = this.to) !== null && _c !== void 0 ? _c : "body" },
        h(NotificationContainer, { style: this.containerStyle, scrollable: this.scrollable && placement !== "top" && placement !== "bottom", placement }, {
          default: () => {
            return this.notificationList.map((notification) => {
              return h(NotificationEnvironment, Object.assign({ ref: (inst) => {
                const refKey = notification.key;
                if (inst === null) {
                  delete this.notificationRefs[refKey];
                } else
                  this.notificationRefs[refKey] = inst;
              } }, omit(notification, [
                "destroy",
                "hide",
                "deactivate"
              ]), { internalKey: notification.key, onInternalAfterLeave: this.handleAfterLeave, keepAliveOnHover: notification.keepAliveOnHover === void 0 ? this.keepAliveOnHover : notification.keepAliveOnHover }));
            });
          }
        })
      ) : null
    );
  }
});
function useNotification() {
  const api = inject(notificationApiInjectionKey, null);
  if (api === null) {
    throwError("use-notification", "No outer `n-notification-provider` found.");
  }
  return api;
}
const NInjectionExtractor = defineComponent({
  name: "InjectionExtractor",
  props: {
    onSetup: Function
  },
  setup(props, { slots }) {
    var _a;
    (_a = props.onSetup) === null || _a === void 0 ? void 0 : _a.call(props);
    return () => {
      var _a2;
      return (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
    };
  }
});
const injectionFactoryMap = {
  message: useMessage,
  notification: useNotification,
  loadingBar: useLoadingBar,
  dialog: useDialog
};
function createDiscreteApp({ providersAndProps, configProviderProps }) {
  const App = () => {
    return h(NConfigProvider, unref(configProviderProps), {
      default: () => providersAndProps.map(({ type, Provider, props }) => {
        return h(Provider, unref(props), {
          default: () => h(NInjectionExtractor, {
            onSetup: () => extractedApi[type] = injectionFactoryMap[type]()
          })
        });
      })
    });
  };
  let app = createApp(App);
  const extractedApi = {
    app
  };
  let hostEl;
  if (isBrowser) {
    hostEl = document.createElement("div");
    document.body.appendChild(hostEl);
    app.mount(hostEl);
  }
  const unmount = () => {
    var _a;
    if (app === null || hostEl === null) {
      warn("discrete", "unmount call no need because discrete app has been unmounted");
      return;
    }
    app.unmount();
    (_a = hostEl.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(hostEl);
    hostEl = null;
    app = null;
  };
  return Object.assign({ unmount }, extractedApi);
}
function createDiscreteApi(includes, { configProviderProps, messageProviderProps: messageProviderProps2, dialogProviderProps: dialogProviderProps2, notificationProviderProps: notificationProviderProps2, loadingBarProviderProps: loadingBarProviderProps2 } = {}) {
  const providersAndProps = [];
  includes.forEach((type) => {
    switch (type) {
      case "message":
        providersAndProps.push({
          type,
          Provider: NMessageProvider,
          props: messageProviderProps2
        });
        break;
      case "notification":
        providersAndProps.push({
          type,
          Provider: NNotificationProvider,
          props: notificationProviderProps2
        });
        break;
      case "dialog":
        providersAndProps.push({
          type,
          Provider: NDialogProvider,
          props: dialogProviderProps2
        });
        break;
      case "loadingBar":
        providersAndProps.push({
          type,
          Provider: NLoadingBarProvider,
          props: loadingBarProviderProps2
        });
        break;
    }
  });
  const discreteApp = createDiscreteApp({
    providersAndProps,
    configProviderProps
  });
  return discreteApp;
}
const { message, dialog, loadingBar } = createDiscreteApi([
  "message",
  "dialog",
  "loadingBar"
]);
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
}
class Queue {
  constructor() {
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _size, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (__privateGet(this, _head)) {
      __privateGet(this, _tail).next = node;
      __privateSet(this, _tail, node);
    } else {
      __privateSet(this, _head, node);
      __privateSet(this, _tail, node);
    }
    __privateWrapper(this, _size)._++;
  }
  dequeue() {
    const current = __privateGet(this, _head);
    if (!current) {
      return;
    }
    __privateSet(this, _head, __privateGet(this, _head).next);
    __privateWrapper(this, _size)._--;
    return current.value;
  }
  clear() {
    __privateSet(this, _head, void 0);
    __privateSet(this, _tail, void 0);
    __privateSet(this, _size, 0);
  }
  get size() {
    return __privateGet(this, _size);
  }
  *[Symbol.iterator]() {
    let current = __privateGet(this, _head);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}
_head = new WeakMap();
_tail = new WeakMap();
_size = new WeakMap();
const AsyncResource = {
  bind(fn, _type, thisArg) {
    return fn.bind(thisArg);
  }
};
function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
  const queue = new Queue();
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.size > 0) {
      queue.dequeue()();
    }
  };
  const run = async (function_, resolve, arguments_) => {
    activeCount++;
    const result = (async () => function_(...arguments_))();
    resolve(result);
    try {
      await result;
    } catch {
    }
    next();
  };
  const enqueue = (function_, resolve, arguments_) => {
    queue.enqueue(
      AsyncResource.bind(run.bind(void 0, function_, resolve, arguments_))
    );
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency && queue.size > 0) {
        queue.dequeue()();
      }
    })();
  };
  const generator = (function_, ...arguments_) => new Promise((resolve) => {
    enqueue(function_, resolve, arguments_);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value() {
        queue.clear();
      }
    }
  });
  return generator;
}
const obj2form = (...objs) => {
  const fd = new FormData();
  objs.forEach((obj) => {
    for (const k in obj) {
      const v = obj[k];
      if (v === void 0)
        continue;
      if (v instanceof Blob) {
        fd.append(k, v, v.name);
      } else {
        fd.append(k, String(v));
      }
    }
  });
  return fd;
};
const headers2obj = (headers) => {
  const h2 = {};
  headers.forEach((v, k) => {
    h2[k] = v;
  });
  return h2;
};
const delay = async (n = 0) => {
  return new Promise((res) => {
    setTimeout(res, n);
  });
};
const copy = (() => {
  let lastText = void 0;
  return async (text = ``) => {
    if (lastText === text)
      return;
    lastText = text;
    delay(1e4).then(() => {
      lastText = void 0;
    });
    await navigator.clipboard.writeText(text);
    message.success(`复制成功`);
  };
})();
const proxyFc = (getFc) => {
  return (...args) => getFc()(...args);
};
const GM_xmlhttpRequest = proxyFc(
  () => {
    var _a;
    return (_a = window.__NetworkExtension__) == null ? void 0 : _a.GM_xmlhttpRequest;
  }
);
const gmOk = () => {
  var _a;
  return !!((_a = window.__NetworkExtension__) == null ? void 0 : _a.GM_xmlhttpRequest);
};
const parseHeaders = (rawHeaders = "") => {
  const headers = new Headers();
  const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
  preProcessedHeaders.split("\r").map(function(header) {
    return header.startsWith(`
`) ? header.substring(1) : header;
  }).forEach(function(line) {
    var _a;
    let parts = line.split(":");
    let key = (_a = parts.shift()) == null ? void 0 : _a.trim();
    if (key) {
      let value = parts.join(":").trim();
      try {
        headers.append(key, value);
      } catch {
      }
    }
  });
  return headers;
};
const fixUrl = (url = "") => {
  try {
    return url === "" && location.href ? location.href : url;
  } catch {
    return url;
  }
};
const GM_fetch = async (input, init = {}, xhrDetails = {}) => {
  var _a;
  const request = new Request(input, init).clone();
  if ((_a = request.signal) == null ? void 0 : _a.aborted) {
    throw new DOMException("Aborted", "AbortError");
  }
  const method = request.method.toUpperCase();
  const url = fixUrl(request.url);
  const sendHeaders = new Headers(request.headers);
  new Headers(init.headers).forEach((value, key) => {
    sendHeaders.set(key, value);
  });
  let binary = false;
  let data = void 0;
  if (method != "GET") {
    if (init.body) {
      if (typeof init.body == "string" || init.body instanceof URLSearchParams) {
        data = init.body;
      } else if (init.body instanceof FormData) {
        data = init.body;
        sendHeaders.delete(`content-type`);
      } else {
        binary = true;
        data = await request.blob();
      }
    }
  }
  return new Promise((resolve, reject) => {
    var _a2;
    let initXhrDetails = {
      method,
      url,
      headers: headers2obj(sendHeaders),
      data,
      binary,
      responseType: "blob",
      async onload(e) {
        let body = void 0;
        if (!(e.response instanceof Blob && e.response.size == 0)) {
          body = e.response ?? e.responseText;
        }
        await delay();
        const resp = new Response(body, {
          status: e.status,
          statusText: e.statusText,
          headers: parseHeaders(e.responseHeaders)
        });
        Object.defineProperty(resp, "url", { value: e.finalUrl });
        resolve(resp);
      },
      async onerror() {
        await delay();
        reject(new TypeError("Network request onerror failed"));
      },
      async ontimeout() {
        await delay();
        reject(new TypeError("Network request ontimeout failed"));
      },
      async onabort() {
        await delay();
        reject(new DOMException("Aborted", "AbortError"));
      },
      async onreadystatechange(response) {
        var _a3;
        if (response.readyState === 4) {
          (_a3 = request.signal) == null ? void 0 : _a3.removeEventListener("abort", abortXhr);
        }
      }
    };
    if (typeof xhrDetails == "function") {
      initXhrDetails = xhrDetails(initXhrDetails);
    } else {
      initXhrDetails = { ...initXhrDetails, ...xhrDetails };
    }
    const handle = GM_xmlhttpRequest(initXhrDetails);
    function abortXhr() {
      handle.abort();
    }
    (_a2 = request.signal) == null ? void 0 : _a2.addEventListener("abort", abortXhr);
  });
};
const corsOkOrigins = /* @__PURE__ */ new Set([
  location.origin,
  `https://cdn.jsdelivr.net`,
  `https://fastly.jsdelivr.net`,
  `https://raw.githubusercontent.com`,
  `https://raw.githubusercontents.com`,
  `https://raw.gitmirror.com`
]);
const isAllowCorsUrl = (targetUrl) => {
  targetUrl = new URL(targetUrl);
  if (targetUrl.hostname == `127.0.0.1` || targetUrl.hostname == `localhost`) {
    return true;
  }
  if (location.protocol == `http:` && targetUrl.protocol == `http:` && targetUrl.hostname.split(`.`).every((s) => Number.isSafeInteger(parseInt(s)))) {
    return true;
  }
  return corsOkOrigins.has(targetUrl.origin);
};
const githubZipUrlReg = /^https:\/\/github\.com\/gkd-kit\/inspect\/files\/([0-9]+)\/file\.zip$/;
const githubImageUrlReg = /^https:\/\/github\.com\/gkd-kit\/inspect\/assets\/([0-9]+)\/([0-9a-z\-]+)$/;
const githubUrlToSelfUrl = (u) => {
  u = u.toString();
  const { 1: zipAssetId } = u.match(githubZipUrlReg) || [];
  const { 1: userId, 2: imgAssetId } = u.match(githubImageUrlReg) || [];
  if (zipAssetId) {
    return location.origin + router.resolve({
      path: `/import/${zipAssetId}`
    }).href;
  } else if (userId && imgAssetId) {
    return `https://m.gkd.li/${userId}/${imgAssetId}`;
  } else {
    throw new Error(
      `github url ${u} should come from gkd-kit/inspect files/assets`
    );
  }
};
const enhanceFetch = async (input, init, options) => {
  const req = new Request(input);
  const u = new URL(req.url);
  if (isAllowCorsUrl(u))
    return fetch(input, { ...init, mode: "cors" });
  if (gmOk()) {
    return GM_fetch(input, init);
  } else if (options == null ? void 0 : options.proxy) {
    const proxyUrl = new URL(`https://proxy-workers.lisonge.workers.dev/`);
    proxyUrl.searchParams.set(`proxyUrl`, u.href);
    const request = new Request(input, init);
    return fetch(proxyUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  } else {
    store.networkErrorDlgVisible = true;
    throw new Error(`gm is not supported`);
  }
};
var localforage$1 = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(module, exports) {
  (function(f) {
    {
      module.exports = f();
    }
  })(function() {
    return function e(t, n, r) {
      function s(o2, u) {
        if (!n[o2]) {
          if (!t[o2]) {
            var a = typeof commonjsRequire == "function" && commonjsRequire;
            if (!u && a)
              return a(o2, true);
            if (i)
              return i(o2, true);
            var f = new Error("Cannot find module '" + o2 + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o2] = { exports: {} };
          t[o2][0].call(l.exports, function(e2) {
            var n2 = t[o2][1][e2];
            return s(n2 ? n2 : e2);
          }, l, l.exports, e, t, n, r);
        }
        return n[o2].exports;
      }
      var i = typeof commonjsRequire == "function" && commonjsRequire;
      for (var o = 0; o < r.length; o++)
        s(r[o]);
      return s;
    }({ 1: [function(_dereq_, module2, exports2) {
      (function(global2) {
        var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
        var scheduleDrain;
        {
          if (Mutation) {
            var called = 0;
            var observer = new Mutation(nextTick2);
            var element = global2.document.createTextNode("");
            observer.observe(element, {
              characterData: true
            });
            scheduleDrain = function() {
              element.data = called = ++called % 2;
            };
          } else if (!global2.setImmediate && typeof global2.MessageChannel !== "undefined") {
            var channel = new global2.MessageChannel();
            channel.port1.onmessage = nextTick2;
            scheduleDrain = function() {
              channel.port2.postMessage(0);
            };
          } else if ("document" in global2 && "onreadystatechange" in global2.document.createElement("script")) {
            scheduleDrain = function() {
              var scriptEl = global2.document.createElement("script");
              scriptEl.onreadystatechange = function() {
                nextTick2();
                scriptEl.onreadystatechange = null;
                scriptEl.parentNode.removeChild(scriptEl);
                scriptEl = null;
              };
              global2.document.documentElement.appendChild(scriptEl);
            };
          } else {
            scheduleDrain = function() {
              setTimeout(nextTick2, 0);
            };
          }
        }
        var draining;
        var queue = [];
        function nextTick2() {
          draining = true;
          var i, oldQueue;
          var len = queue.length;
          while (len) {
            oldQueue = queue;
            queue = [];
            i = -1;
            while (++i < len) {
              oldQueue[i]();
            }
            len = queue.length;
          }
          draining = false;
        }
        module2.exports = immediate;
        function immediate(task) {
          if (queue.push(task) === 1 && !draining) {
            scheduleDrain();
          }
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}], 2: [function(_dereq_, module2, exports2) {
      var immediate = _dereq_(1);
      function INTERNAL() {
      }
      var handlers = {};
      var REJECTED = ["REJECTED"];
      var FULFILLED = ["FULFILLED"];
      var PENDING = ["PENDING"];
      module2.exports = Promise2;
      function Promise2(resolver) {
        if (typeof resolver !== "function") {
          throw new TypeError("resolver must be a function");
        }
        this.state = PENDING;
        this.queue = [];
        this.outcome = void 0;
        if (resolver !== INTERNAL) {
          safelyResolveThenable(this, resolver);
        }
      }
      Promise2.prototype["catch"] = function(onRejected) {
        return this.then(null, onRejected);
      };
      Promise2.prototype.then = function(onFulfilled, onRejected) {
        if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
          return this;
        }
        var promise = new this.constructor(INTERNAL);
        if (this.state !== PENDING) {
          var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
          unwrap(promise, resolver, this.outcome);
        } else {
          this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
        }
        return promise;
      };
      function QueueItem(promise, onFulfilled, onRejected) {
        this.promise = promise;
        if (typeof onFulfilled === "function") {
          this.onFulfilled = onFulfilled;
          this.callFulfilled = this.otherCallFulfilled;
        }
        if (typeof onRejected === "function") {
          this.onRejected = onRejected;
          this.callRejected = this.otherCallRejected;
        }
      }
      QueueItem.prototype.callFulfilled = function(value) {
        handlers.resolve(this.promise, value);
      };
      QueueItem.prototype.otherCallFulfilled = function(value) {
        unwrap(this.promise, this.onFulfilled, value);
      };
      QueueItem.prototype.callRejected = function(value) {
        handlers.reject(this.promise, value);
      };
      QueueItem.prototype.otherCallRejected = function(value) {
        unwrap(this.promise, this.onRejected, value);
      };
      function unwrap(promise, func, value) {
        immediate(function() {
          var returnValue;
          try {
            returnValue = func(value);
          } catch (e) {
            return handlers.reject(promise, e);
          }
          if (returnValue === promise) {
            handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
          } else {
            handlers.resolve(promise, returnValue);
          }
        });
      }
      handlers.resolve = function(self2, value) {
        var result = tryCatch(getThen, value);
        if (result.status === "error") {
          return handlers.reject(self2, result.value);
        }
        var thenable = result.value;
        if (thenable) {
          safelyResolveThenable(self2, thenable);
        } else {
          self2.state = FULFILLED;
          self2.outcome = value;
          var i = -1;
          var len = self2.queue.length;
          while (++i < len) {
            self2.queue[i].callFulfilled(value);
          }
        }
        return self2;
      };
      handlers.reject = function(self2, error) {
        self2.state = REJECTED;
        self2.outcome = error;
        var i = -1;
        var len = self2.queue.length;
        while (++i < len) {
          self2.queue[i].callRejected(error);
        }
        return self2;
      };
      function getThen(obj) {
        var then = obj && obj.then;
        if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
          return function appyThen() {
            then.apply(obj, arguments);
          };
        }
      }
      function safelyResolveThenable(self2, thenable) {
        var called = false;
        function onError(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.reject(self2, value);
        }
        function onSuccess(value) {
          if (called) {
            return;
          }
          called = true;
          handlers.resolve(self2, value);
        }
        function tryToUnwrap() {
          thenable(onSuccess, onError);
        }
        var result = tryCatch(tryToUnwrap);
        if (result.status === "error") {
          onError(result.value);
        }
      }
      function tryCatch(func, value) {
        var out = {};
        try {
          out.value = func(value);
          out.status = "success";
        } catch (e) {
          out.status = "error";
          out.value = e;
        }
        return out;
      }
      Promise2.resolve = resolve;
      function resolve(value) {
        if (value instanceof this) {
          return value;
        }
        return handlers.resolve(new this(INTERNAL), value);
      }
      Promise2.reject = reject;
      function reject(reason) {
        var promise = new this(INTERNAL);
        return handlers.reject(promise, reason);
      }
      Promise2.all = all;
      function all(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var values = new Array(len);
        var resolved = 0;
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          allResolver(iterable[i], i);
        }
        return promise;
        function allResolver(value, i2) {
          self2.resolve(value).then(resolveFromAll, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
          function resolveFromAll(outValue) {
            values[i2] = outValue;
            if (++resolved === len && !called) {
              called = true;
              handlers.resolve(promise, values);
            }
          }
        }
      }
      Promise2.race = race;
      function race(iterable) {
        var self2 = this;
        if (Object.prototype.toString.call(iterable) !== "[object Array]") {
          return this.reject(new TypeError("must be an array"));
        }
        var len = iterable.length;
        var called = false;
        if (!len) {
          return this.resolve([]);
        }
        var i = -1;
        var promise = new this(INTERNAL);
        while (++i < len) {
          resolver(iterable[i]);
        }
        return promise;
        function resolver(value) {
          self2.resolve(value).then(function(response) {
            if (!called) {
              called = true;
              handlers.resolve(promise, response);
            }
          }, function(error) {
            if (!called) {
              called = true;
              handlers.reject(promise, error);
            }
          });
        }
      }
    }, { "1": 1 }], 3: [function(_dereq_, module2, exports2) {
      (function(global2) {
        if (typeof global2.Promise !== "function") {
          global2.Promise = _dereq_(2);
        }
      }).call(this, typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "2": 2 }], 4: [function(_dereq_, module2, exports2) {
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function getIDB() {
        try {
          if (typeof indexedDB !== "undefined") {
            return indexedDB;
          }
          if (typeof webkitIndexedDB !== "undefined") {
            return webkitIndexedDB;
          }
          if (typeof mozIndexedDB !== "undefined") {
            return mozIndexedDB;
          }
          if (typeof OIndexedDB !== "undefined") {
            return OIndexedDB;
          }
          if (typeof msIndexedDB !== "undefined") {
            return msIndexedDB;
          }
        } catch (e) {
          return;
        }
      }
      var idb = getIDB();
      function isIndexedDBValid() {
        try {
          if (!idb || !idb.open) {
            return false;
          }
          var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange !== "undefined";
        } catch (e) {
          return false;
        }
      }
      function createBlob(parts, properties) {
        parts = parts || [];
        properties = properties || {};
        try {
          return new Blob(parts, properties);
        } catch (e) {
          if (e.name !== "TypeError") {
            throw e;
          }
          var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
          var builder = new Builder();
          for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
          }
          return builder.getBlob(properties.type);
        }
      }
      if (typeof Promise === "undefined") {
        _dereq_(3);
      }
      var Promise$1 = Promise;
      function executeCallback(promise, callback) {
        if (callback) {
          promise.then(function(result) {
            callback(null, result);
          }, function(error) {
            callback(error);
          });
        }
      }
      function executeTwoCallbacks(promise, callback, errorCallback) {
        if (typeof callback === "function") {
          promise.then(callback);
        }
        if (typeof errorCallback === "function") {
          promise["catch"](errorCallback);
        }
      }
      function normalizeKey(key2) {
        if (typeof key2 !== "string") {
          console.warn(key2 + " used as a key, but it is not a string.");
          key2 = String(key2);
        }
        return key2;
      }
      function getCallback() {
        if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
          return arguments[arguments.length - 1];
        }
      }
      var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
      var supportsBlobs = void 0;
      var dbContexts = {};
      var toString = Object.prototype.toString;
      var READ_ONLY = "readonly";
      var READ_WRITE = "readwrite";
      function _binStringToArrayBuffer(bin) {
        var length2 = bin.length;
        var buf = new ArrayBuffer(length2);
        var arr = new Uint8Array(buf);
        for (var i = 0; i < length2; i++) {
          arr[i] = bin.charCodeAt(i);
        }
        return buf;
      }
      function _checkBlobSupportWithoutCaching(idb2) {
        return new Promise$1(function(resolve) {
          var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
          var blob = createBlob([""]);
          txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
          txn.onabort = function(e) {
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
          };
          txn.oncomplete = function() {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
          };
        })["catch"](function() {
          return false;
        });
      }
      function _checkBlobSupport(idb2) {
        if (typeof supportsBlobs === "boolean") {
          return Promise$1.resolve(supportsBlobs);
        }
        return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
          supportsBlobs = value;
          return supportsBlobs;
        });
      }
      function _deferReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = {};
        deferredOperation.promise = new Promise$1(function(resolve, reject) {
          deferredOperation.resolve = resolve;
          deferredOperation.reject = reject;
        });
        dbContext.deferredOperations.push(deferredOperation);
        if (!dbContext.dbReady) {
          dbContext.dbReady = deferredOperation.promise;
        } else {
          dbContext.dbReady = dbContext.dbReady.then(function() {
            return deferredOperation.promise;
          });
        }
      }
      function _advanceReadiness(dbInfo) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.resolve();
          return deferredOperation.promise;
        }
      }
      function _rejectReadiness(dbInfo, err) {
        var dbContext = dbContexts[dbInfo.name];
        var deferredOperation = dbContext.deferredOperations.pop();
        if (deferredOperation) {
          deferredOperation.reject(err);
          return deferredOperation.promise;
        }
      }
      function _getConnection(dbInfo, upgradeNeeded) {
        return new Promise$1(function(resolve, reject) {
          dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
          if (dbInfo.db) {
            if (upgradeNeeded) {
              _deferReadiness(dbInfo);
              dbInfo.db.close();
            } else {
              return resolve(dbInfo.db);
            }
          }
          var dbArgs = [dbInfo.name];
          if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
          }
          var openreq = idb.open.apply(idb, dbArgs);
          if (upgradeNeeded) {
            openreq.onupgradeneeded = function(e) {
              var db = openreq.result;
              try {
                db.createObjectStore(dbInfo.storeName);
                if (e.oldVersion <= 1) {
                  db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                }
              } catch (ex) {
                if (ex.name === "ConstraintError") {
                  console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                } else {
                  throw ex;
                }
              }
            };
          }
          openreq.onerror = function(e) {
            e.preventDefault();
            reject(openreq.error);
          };
          openreq.onsuccess = function() {
            var db = openreq.result;
            db.onversionchange = function(e) {
              e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
          };
        });
      }
      function _getOriginalConnection(dbInfo) {
        return _getConnection(dbInfo, false);
      }
      function _getUpgradedConnection(dbInfo) {
        return _getConnection(dbInfo, true);
      }
      function _isUpgradeNeeded(dbInfo, defaultVersion) {
        if (!dbInfo.db) {
          return true;
        }
        var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
        var isDowngrade = dbInfo.version < dbInfo.db.version;
        var isUpgrade = dbInfo.version > dbInfo.db.version;
        if (isDowngrade) {
          if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
          }
          dbInfo.version = dbInfo.db.version;
        }
        if (isUpgrade || isNewStore) {
          if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
              dbInfo.version = incVersion;
            }
          }
          return true;
        }
        return false;
      }
      function _encodeBlob(blob) {
        return new Promise$1(function(resolve, reject) {
          var reader = new FileReader();
          reader.onerror = reject;
          reader.onloadend = function(e) {
            var base64 = btoa(e.target.result || "");
            resolve({
              __local_forage_encoded_blob: true,
              data: base64,
              type: blob.type
            });
          };
          reader.readAsBinaryString(blob);
        });
      }
      function _decodeBlob(encodedBlob) {
        var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
        return createBlob([arrayBuff], { type: encodedBlob.type });
      }
      function _isEncodedBlob(value) {
        return value && value.__local_forage_encoded_blob;
      }
      function _fullyReady(callback) {
        var self2 = this;
        var promise = self2._initReady().then(function() {
          var dbContext = dbContexts[self2._dbInfo.name];
          if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
          }
        });
        executeTwoCallbacks(promise, callback, callback);
        return promise;
      }
      function _tryReconnect(dbInfo) {
        _deferReadiness(dbInfo);
        var dbContext = dbContexts[dbInfo.name];
        var forages = dbContext.forages;
        for (var i = 0; i < forages.length; i++) {
          var forage = forages[i];
          if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
          }
        }
        dbInfo.db = null;
        return _getOriginalConnection(dbInfo).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          for (var i2 = 0; i2 < forages.length; i2++) {
            forages[i2]._dbInfo.db = db;
          }
        })["catch"](function(err) {
          _rejectReadiness(dbInfo, err);
          throw err;
        });
      }
      function createTransaction(dbInfo, mode, callback, retries) {
        if (retries === void 0) {
          retries = 1;
        }
        try {
          var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
          callback(null, tx);
        } catch (err) {
          if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
            return Promise$1.resolve().then(function() {
              if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                if (dbInfo.db) {
                  dbInfo.version = dbInfo.db.version + 1;
                }
                return _getUpgradedConnection(dbInfo);
              }
            }).then(function() {
              return _tryReconnect(dbInfo).then(function() {
                createTransaction(dbInfo, mode, callback, retries - 1);
              });
            })["catch"](callback);
          }
          callback(err);
        }
      }
      function createDbContext() {
        return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
        };
      }
      function _initStorage(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        var dbContext = dbContexts[dbInfo.name];
        if (!dbContext) {
          dbContext = createDbContext();
          dbContexts[dbInfo.name] = dbContext;
        }
        dbContext.forages.push(self2);
        if (!self2._initReady) {
          self2._initReady = self2.ready;
          self2.ready = _fullyReady;
        }
        var initPromises = [];
        function ignoreErrors() {
          return Promise$1.resolve();
        }
        for (var j = 0; j < dbContext.forages.length; j++) {
          var forage = dbContext.forages[j];
          if (forage !== self2) {
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
          }
        }
        var forages = dbContext.forages.slice(0);
        return Promise$1.all(initPromises).then(function() {
          dbInfo.db = dbContext.db;
          return _getOriginalConnection(dbInfo);
        }).then(function(db) {
          dbInfo.db = db;
          if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
            return _getUpgradedConnection(dbInfo);
          }
          return db;
        }).then(function(db) {
          dbInfo.db = dbContext.db = db;
          self2._dbInfo = dbInfo;
          for (var k = 0; k < forages.length; k++) {
            var forage2 = forages[k];
            if (forage2 !== self2) {
              forage2._dbInfo.db = dbInfo.db;
              forage2._dbInfo.version = dbInfo.version;
            }
          }
        });
      }
      function getItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.get(key2);
                req.onsuccess = function() {
                  var value = req.result;
                  if (value === void 0) {
                    value = null;
                  }
                  if (_isEncodedBlob(value)) {
                    value = _decodeBlob(value);
                  }
                  resolve(value);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.openCursor();
                var iterationNumber = 1;
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (cursor) {
                    var value = cursor.value;
                    if (_isEncodedBlob(value)) {
                      value = _decodeBlob(value);
                    }
                    var result = iterator(value, cursor.key, iterationNumber++);
                    if (result !== void 0) {
                      resolve(result);
                    } else {
                      cursor["continue"]();
                    }
                  } else {
                    resolve();
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          var dbInfo;
          self2.ready().then(function() {
            dbInfo = self2._dbInfo;
            if (toString.call(value) === "[object Blob]") {
              return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                if (blobSupport) {
                  return value;
                }
                return _encodeBlob(value);
              });
            }
            return value;
          }).then(function(value2) {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                if (value2 === null) {
                  value2 = void 0;
                }
                var req = store2.put(value2, key2);
                transaction.oncomplete = function() {
                  if (value2 === void 0) {
                    value2 = null;
                  }
                  resolve(value2);
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2["delete"](key2);
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onerror = function() {
                  reject(req.error);
                };
                transaction.onabort = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.clear();
                transaction.oncomplete = function() {
                  resolve();
                };
                transaction.onabort = transaction.onerror = function() {
                  var err2 = req.error ? req.error : req.transaction.error;
                  reject(err2);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.count();
                req.onsuccess = function() {
                  resolve(req.result);
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key(n, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          if (n < 0) {
            resolve(null);
            return;
          }
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var advanced = false;
                var req = store2.openKeyCursor();
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(null);
                    return;
                  }
                  if (n === 0) {
                    resolve(cursor.key);
                  } else {
                    if (!advanced) {
                      advanced = true;
                      cursor.advance(n);
                    } else {
                      resolve(cursor.key);
                    }
                  }
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
              if (err) {
                return reject(err);
              }
              try {
                var store2 = transaction.objectStore(self2._dbInfo.storeName);
                var req = store2.openKeyCursor();
                var keys2 = [];
                req.onsuccess = function() {
                  var cursor = req.result;
                  if (!cursor) {
                    resolve(keys2);
                    return;
                  }
                  keys2.push(cursor.key);
                  cursor["continue"]();
                };
                req.onerror = function() {
                  reject(req.error);
                };
              } catch (e) {
                reject(e);
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
          var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
              forages[i]._dbInfo.db = db;
            }
            return db;
          });
          if (!options.storeName) {
            promise = dbPromise.then(function(db) {
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
              }
              var dropDBPromise = new Promise$1(function(resolve, reject) {
                var req = idb.deleteDatabase(options.name);
                req.onerror = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  reject(req.error);
                };
                req.onblocked = function() {
                  console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  if (db2) {
                    db2.close();
                  }
                  resolve(db2);
                };
              });
              return dropDBPromise.then(function(db2) {
                dbContext.db = db2;
                for (var i2 = 0; i2 < forages.length; i2++) {
                  var _forage = forages[i2];
                  _advanceReadiness(_forage._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          } else {
            promise = dbPromise.then(function(db) {
              if (!db.objectStoreNames.contains(options.storeName)) {
                return;
              }
              var newVersion = db.version + 1;
              _deferReadiness(options);
              var dbContext = dbContexts[options.name];
              var forages = dbContext.forages;
              db.close();
              for (var i = 0; i < forages.length; i++) {
                var forage = forages[i];
                forage._dbInfo.db = null;
                forage._dbInfo.version = newVersion;
              }
              var dropObjectPromise = new Promise$1(function(resolve, reject) {
                var req = idb.open(options.name, newVersion);
                req.onerror = function(err) {
                  var db2 = req.result;
                  db2.close();
                  reject(err);
                };
                req.onupgradeneeded = function() {
                  var db2 = req.result;
                  db2.deleteObjectStore(options.storeName);
                };
                req.onsuccess = function() {
                  var db2 = req.result;
                  db2.close();
                  resolve(db2);
                };
              });
              return dropObjectPromise.then(function(db2) {
                dbContext.db = db2;
                for (var j = 0; j < forages.length; j++) {
                  var _forage2 = forages[j];
                  _forage2._dbInfo.db = db2;
                  _advanceReadiness(_forage2._dbInfo);
                }
              })["catch"](function(err) {
                (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                });
                throw err;
              });
            });
          }
        }
        executeCallback(promise, callback);
        return promise;
      }
      var asyncStorage = {
        _driver: "asyncStorage",
        _initStorage,
        _support: isIndexedDBValid(),
        iterate,
        getItem,
        setItem,
        removeItem,
        clear,
        length,
        key,
        keys,
        dropInstance
      };
      function isWebSQLValid() {
        return typeof openDatabase === "function";
      }
      var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var BLOB_TYPE_PREFIX = "~~local_forage_type~";
      var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
      var SERIALIZED_MARKER = "__lfsc__:";
      var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
      var TYPE_ARRAYBUFFER = "arbf";
      var TYPE_BLOB = "blob";
      var TYPE_INT8ARRAY = "si08";
      var TYPE_UINT8ARRAY = "ui08";
      var TYPE_UINT8CLAMPEDARRAY = "uic8";
      var TYPE_INT16ARRAY = "si16";
      var TYPE_INT32ARRAY = "si32";
      var TYPE_UINT16ARRAY = "ur16";
      var TYPE_UINT32ARRAY = "ui32";
      var TYPE_FLOAT32ARRAY = "fl32";
      var TYPE_FLOAT64ARRAY = "fl64";
      var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
      var toString$1 = Object.prototype.toString;
      function stringToBuffer(serializedString) {
        var bufferLength = serializedString.length * 0.75;
        var len = serializedString.length;
        var i;
        var p = 0;
        var encoded1, encoded2, encoded3, encoded4;
        if (serializedString[serializedString.length - 1] === "=") {
          bufferLength--;
          if (serializedString[serializedString.length - 2] === "=") {
            bufferLength--;
          }
        }
        var buffer = new ArrayBuffer(bufferLength);
        var bytes = new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
          encoded1 = BASE_CHARS.indexOf(serializedString[i]);
          encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
          encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
          encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
          bytes[p++] = encoded1 << 2 | encoded2 >> 4;
          bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
          bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
        }
        return buffer;
      }
      function bufferToString(buffer) {
        var bytes = new Uint8Array(buffer);
        var base64String = "";
        var i;
        for (i = 0; i < bytes.length; i += 3) {
          base64String += BASE_CHARS[bytes[i] >> 2];
          base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
          base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
          base64String += BASE_CHARS[bytes[i + 2] & 63];
        }
        if (bytes.length % 3 === 2) {
          base64String = base64String.substring(0, base64String.length - 1) + "=";
        } else if (bytes.length % 3 === 1) {
          base64String = base64String.substring(0, base64String.length - 2) + "==";
        }
        return base64String;
      }
      function serialize(value, callback) {
        var valueType = "";
        if (value) {
          valueType = toString$1.call(value);
        }
        if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
          var buffer;
          var marker = SERIALIZED_MARKER;
          if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
          } else {
            buffer = value.buffer;
            if (valueType === "[object Int8Array]") {
              marker += TYPE_INT8ARRAY;
            } else if (valueType === "[object Uint8Array]") {
              marker += TYPE_UINT8ARRAY;
            } else if (valueType === "[object Uint8ClampedArray]") {
              marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === "[object Int16Array]") {
              marker += TYPE_INT16ARRAY;
            } else if (valueType === "[object Uint16Array]") {
              marker += TYPE_UINT16ARRAY;
            } else if (valueType === "[object Int32Array]") {
              marker += TYPE_INT32ARRAY;
            } else if (valueType === "[object Uint32Array]") {
              marker += TYPE_UINT32ARRAY;
            } else if (valueType === "[object Float32Array]") {
              marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === "[object Float64Array]") {
              marker += TYPE_FLOAT64ARRAY;
            } else {
              callback(new Error("Failed to get type for BinaryArray"));
            }
          }
          callback(marker + bufferToString(buffer));
        } else if (valueType === "[object Blob]") {
          var fileReader = new FileReader();
          fileReader.onload = function() {
            var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
          };
          fileReader.readAsArrayBuffer(value);
        } else {
          try {
            callback(JSON.stringify(value));
          } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);
            callback(null, e);
          }
        }
      }
      function deserialize(value) {
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
          return JSON.parse(value);
        }
        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        var blobType;
        if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
          var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
          blobType = matcher[1];
          serializedString = serializedString.substring(matcher[0].length);
        }
        var buffer = stringToBuffer(serializedString);
        switch (type) {
          case TYPE_ARRAYBUFFER:
            return buffer;
          case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
          case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
          case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
          case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
          case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
          case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
          case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
          case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
          case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
          case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
          default:
            throw new Error("Unkown type: " + type);
        }
      }
      var localforageSerializer = {
        serialize,
        deserialize,
        stringToBuffer,
        bufferToString
      };
      function createDbTable(t, dbInfo, callback, errorCallback) {
        t.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
      }
      function _initStorage$1(options) {
        var self2 = this;
        var dbInfo = {
          db: null
        };
        if (options) {
          for (var i in options) {
            dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
          }
        }
        var dbInfoPromise = new Promise$1(function(resolve, reject) {
          try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
          } catch (e) {
            return reject(e);
          }
          dbInfo.db.transaction(function(t) {
            createDbTable(t, dbInfo, function() {
              self2._dbInfo = dbInfo;
              resolve();
            }, function(t2, error) {
              reject(error);
            });
          }, reject);
        });
        dbInfo.serializer = localforageSerializer;
        return dbInfoPromise;
      }
      function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
        t.executeSql(sqlStatement, args, callback, function(t2, error) {
          if (error.code === error.SYNTAX_ERR) {
            t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t3, results) {
              if (!results.rows.length) {
                createDbTable(t3, dbInfo, function() {
                  t3.executeSql(sqlStatement, args, callback, errorCallback);
                }, errorCallback);
              } else {
                errorCallback(t3, error);
              }
            }, errorCallback);
          } else {
            errorCallback(t2, error);
          }
        }, errorCallback);
      }
      function getItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t2, results) {
                var result = results.rows.length ? results.rows.item(0).value : null;
                if (result) {
                  result = dbInfo.serializer.deserialize(result);
                }
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$1(iterator, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t2, results) {
                var rows = results.rows;
                var length2 = rows.length;
                for (var i = 0; i < length2; i++) {
                  var item = rows.item(i);
                  var result = item.value;
                  if (result) {
                    result = dbInfo.serializer.deserialize(result);
                  }
                  result = iterator(result, item.key, i + 1);
                  if (result !== void 0) {
                    resolve(result);
                    return;
                  }
                }
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function _setItem(key2, value, callback, retriesLeft) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            if (value === void 0) {
              value = null;
            }
            var originalValue = value;
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                    resolve(originalValue);
                  }, function(t2, error2) {
                    reject(error2);
                  });
                }, function(sqlError) {
                  if (sqlError.code === sqlError.QUOTA_ERR) {
                    if (retriesLeft > 0) {
                      resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                      return;
                    }
                    reject(sqlError);
                  }
                });
              }
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$1(key2, value, callback) {
        return _setItem.apply(this, [key2, value, callback, 1]);
      }
      function removeItem$1(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function clear$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                resolve();
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t2, results) {
                var result = results.rows.item(0).c;
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$1(n, callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(t2, results) {
                var result = results.rows.length ? results.rows.item(0).key : null;
                resolve(result);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$1(callback) {
        var self2 = this;
        var promise = new Promise$1(function(resolve, reject) {
          self2.ready().then(function() {
            var dbInfo = self2._dbInfo;
            dbInfo.db.transaction(function(t) {
              tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t2, results) {
                var keys2 = [];
                for (var i = 0; i < results.rows.length; i++) {
                  keys2.push(results.rows.item(i).key);
                }
                resolve(keys2);
              }, function(t2, error) {
                reject(error);
              });
            });
          })["catch"](reject);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getAllStoreNames(db) {
        return new Promise$1(function(resolve, reject) {
          db.transaction(function(t) {
            t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t2, results) {
              var storeNames = [];
              for (var i = 0; i < results.rows.length; i++) {
                storeNames.push(results.rows.item(i).name);
              }
              resolve({
                db,
                storeNames
              });
            }, function(t2, error) {
              reject(error);
            });
          }, function(sqlError) {
            reject(sqlError);
          });
        });
      }
      function dropInstance$1(options, callback) {
        callback = getCallback.apply(this, arguments);
        var currentConfig = this.config();
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            var db;
            if (options.name === currentConfig.name) {
              db = self2._dbInfo.db;
            } else {
              db = openDatabase(options.name, "", "", 0);
            }
            if (!options.storeName) {
              resolve(getAllStoreNames(db));
            } else {
              resolve({
                db,
                storeNames: [options.storeName]
              });
            }
          }).then(function(operationInfo) {
            return new Promise$1(function(resolve, reject) {
              operationInfo.db.transaction(function(t) {
                function dropTable(storeName) {
                  return new Promise$1(function(resolve2, reject2) {
                    t.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                      resolve2();
                    }, function(t2, error) {
                      reject2(error);
                    });
                  });
                }
                var operations = [];
                for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                  operations.push(dropTable(operationInfo.storeNames[i]));
                }
                Promise$1.all(operations).then(function() {
                  resolve();
                })["catch"](function(e) {
                  reject(e);
                });
              }, function(sqlError) {
                reject(sqlError);
              });
            });
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var webSQLStorage = {
        _driver: "webSQLStorage",
        _initStorage: _initStorage$1,
        _support: isWebSQLValid(),
        iterate: iterate$1,
        getItem: getItem$1,
        setItem: setItem$1,
        removeItem: removeItem$1,
        clear: clear$1,
        length: length$1,
        key: key$1,
        keys: keys$1,
        dropInstance: dropInstance$1
      };
      function isLocalStorageValid() {
        try {
          return typeof localStorage !== "undefined" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch (e) {
          return false;
        }
      }
      function _getKeyPrefix(options, defaultConfig) {
        var keyPrefix = options.name + "/";
        if (options.storeName !== defaultConfig.storeName) {
          keyPrefix += options.storeName + "/";
        }
        return keyPrefix;
      }
      function checkIfLocalStorageThrows() {
        var localStorageTestKey = "_localforage_support_test";
        try {
          localStorage.setItem(localStorageTestKey, true);
          localStorage.removeItem(localStorageTestKey);
          return false;
        } catch (e) {
          return true;
        }
      }
      function _isLocalStorageUsable() {
        return !checkIfLocalStorageThrows() || localStorage.length > 0;
      }
      function _initStorage$2(options) {
        var self2 = this;
        var dbInfo = {};
        if (options) {
          for (var i in options) {
            dbInfo[i] = options[i];
          }
        }
        dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
        if (!_isLocalStorageUsable()) {
          return Promise$1.reject();
        }
        self2._dbInfo = dbInfo;
        dbInfo.serializer = localforageSerializer;
        return Promise$1.resolve();
      }
      function clear$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var keyPrefix = self2._dbInfo.keyPrefix;
          for (var i = localStorage.length - 1; i >= 0; i--) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) === 0) {
              localStorage.removeItem(key2);
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function getItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result = localStorage.getItem(dbInfo.keyPrefix + key2);
          if (result) {
            result = dbInfo.serializer.deserialize(result);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function iterate$2(iterator, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var keyPrefix = dbInfo.keyPrefix;
          var keyPrefixLength = keyPrefix.length;
          var length2 = localStorage.length;
          var iterationNumber = 1;
          for (var i = 0; i < length2; i++) {
            var key2 = localStorage.key(i);
            if (key2.indexOf(keyPrefix) !== 0) {
              continue;
            }
            var value = localStorage.getItem(key2);
            if (value) {
              value = dbInfo.serializer.deserialize(value);
            }
            value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
            if (value !== void 0) {
              return value;
            }
          }
        });
        executeCallback(promise, callback);
        return promise;
      }
      function key$2(n, callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var result;
          try {
            result = localStorage.key(n);
          } catch (error) {
            result = null;
          }
          if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
          }
          return result;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function keys$2(callback) {
        var self2 = this;
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          var length2 = localStorage.length;
          var keys2 = [];
          for (var i = 0; i < length2; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
              keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
          }
          return keys2;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function length$2(callback) {
        var self2 = this;
        var promise = self2.keys().then(function(keys2) {
          return keys2.length;
        });
        executeCallback(promise, callback);
        return promise;
      }
      function removeItem$2(key2, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          var dbInfo = self2._dbInfo;
          localStorage.removeItem(dbInfo.keyPrefix + key2);
        });
        executeCallback(promise, callback);
        return promise;
      }
      function setItem$2(key2, value, callback) {
        var self2 = this;
        key2 = normalizeKey(key2);
        var promise = self2.ready().then(function() {
          if (value === void 0) {
            value = null;
          }
          var originalValue = value;
          return new Promise$1(function(resolve, reject) {
            var dbInfo = self2._dbInfo;
            dbInfo.serializer.serialize(value, function(value2, error) {
              if (error) {
                reject(error);
              } else {
                try {
                  localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                  resolve(originalValue);
                } catch (e) {
                  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                    reject(e);
                  }
                  reject(e);
                }
              }
            });
          });
        });
        executeCallback(promise, callback);
        return promise;
      }
      function dropInstance$2(options, callback) {
        callback = getCallback.apply(this, arguments);
        options = typeof options !== "function" && options || {};
        if (!options.name) {
          var currentConfig = this.config();
          options.name = options.name || currentConfig.name;
          options.storeName = options.storeName || currentConfig.storeName;
        }
        var self2 = this;
        var promise;
        if (!options.name) {
          promise = Promise$1.reject("Invalid arguments");
        } else {
          promise = new Promise$1(function(resolve) {
            if (!options.storeName) {
              resolve(options.name + "/");
            } else {
              resolve(_getKeyPrefix(options, self2._defaultConfig));
            }
          }).then(function(keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
              var key2 = localStorage.key(i);
              if (key2.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key2);
              }
            }
          });
        }
        executeCallback(promise, callback);
        return promise;
      }
      var localStorageWrapper = {
        _driver: "localStorageWrapper",
        _initStorage: _initStorage$2,
        _support: isLocalStorageValid(),
        iterate: iterate$2,
        getItem: getItem$2,
        setItem: setItem$2,
        removeItem: removeItem$2,
        clear: clear$2,
        length: length$2,
        key: key$2,
        keys: keys$2,
        dropInstance: dropInstance$2
      };
      var sameValue = function sameValue2(x, y) {
        return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
      };
      var includes = function includes2(array, searchElement) {
        var len = array.length;
        var i = 0;
        while (i < len) {
          if (sameValue(array[i], searchElement)) {
            return true;
          }
          i++;
        }
        return false;
      };
      var isArray = Array.isArray || function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
      var DefinedDrivers = {};
      var DriverSupport = {};
      var DefaultDrivers = {
        INDEXEDDB: asyncStorage,
        WEBSQL: webSQLStorage,
        LOCALSTORAGE: localStorageWrapper
      };
      var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
      var OptionalDriverMethods = ["dropInstance"];
      var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
      var DefaultConfig = {
        description: "",
        driver: DefaultDriverOrder.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function callWhenReady(localForageInstance, libraryMethod) {
        localForageInstance[libraryMethod] = function() {
          var _args = arguments;
          return localForageInstance.ready().then(function() {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
          });
        };
      }
      function extend() {
        for (var i = 1; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            for (var _key in arg) {
              if (arg.hasOwnProperty(_key)) {
                if (isArray(arg[_key])) {
                  arguments[0][_key] = arg[_key].slice();
                } else {
                  arguments[0][_key] = arg[_key];
                }
              }
            }
          }
        }
        return arguments[0];
      }
      var LocalForage = function() {
        function LocalForage2(options) {
          _classCallCheck(this, LocalForage2);
          for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
              var driver = DefaultDrivers[driverTypeKey];
              var driverName = driver._driver;
              this[driverTypeKey] = driverName;
              if (!DefinedDrivers[driverName]) {
                this.defineDriver(driver);
              }
            }
          }
          this._defaultConfig = extend({}, DefaultConfig);
          this._config = extend({}, this._defaultConfig, options);
          this._driverSet = null;
          this._initDriver = null;
          this._ready = false;
          this._dbInfo = null;
          this._wrapLibraryMethodsWithReady();
          this.setDriver(this._config.driver)["catch"](function() {
          });
        }
        LocalForage2.prototype.config = function config(options) {
          if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
            if (this._ready) {
              return new Error("Can't call config() after localforage has been used.");
            }
            for (var i in options) {
              if (i === "storeName") {
                options[i] = options[i].replace(/\W/g, "_");
              }
              if (i === "version" && typeof options[i] !== "number") {
                return new Error("Database version must be a number.");
              }
              this._config[i] = options[i];
            }
            if ("driver" in options && options.driver) {
              return this.setDriver(this._config.driver);
            }
            return true;
          } else if (typeof options === "string") {
            return this._config[options];
          } else {
            return this._config;
          }
        };
        LocalForage2.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
          var promise = new Promise$1(function(resolve, reject) {
            try {
              var driverName = driverObject._driver;
              var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!driverObject._driver) {
                reject(complianceError);
                return;
              }
              var driverMethods = LibraryMethods.concat("_initStorage");
              for (var i = 0, len = driverMethods.length; i < len; i++) {
                var driverMethodName = driverMethods[i];
                var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                  reject(complianceError);
                  return;
                }
              }
              var configureMissingMethods = function configureMissingMethods2() {
                var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                  return function() {
                    var error = new Error("Method " + methodName + " is not implemented by the current driver");
                    var promise2 = Promise$1.reject(error);
                    executeCallback(promise2, arguments[arguments.length - 1]);
                    return promise2;
                  };
                };
                for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                  var optionalDriverMethod = OptionalDriverMethods[_i];
                  if (!driverObject[optionalDriverMethod]) {
                    driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                  }
                }
              };
              configureMissingMethods();
              var setDriverSupport = function setDriverSupport2(support) {
                if (DefinedDrivers[driverName]) {
                  console.info("Redefining LocalForage driver: " + driverName);
                }
                DefinedDrivers[driverName] = driverObject;
                DriverSupport[driverName] = support;
                resolve();
              };
              if ("_support" in driverObject) {
                if (driverObject._support && typeof driverObject._support === "function") {
                  driverObject._support().then(setDriverSupport, reject);
                } else {
                  setDriverSupport(!!driverObject._support);
                }
              } else {
                setDriverSupport(true);
              }
            } catch (e) {
              reject(e);
            }
          });
          executeTwoCallbacks(promise, callback, errorCallback);
          return promise;
        };
        LocalForage2.prototype.driver = function driver() {
          return this._driver || null;
        };
        LocalForage2.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
          var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
          executeTwoCallbacks(getDriverPromise, callback, errorCallback);
          return getDriverPromise;
        };
        LocalForage2.prototype.getSerializer = function getSerializer(callback) {
          var serializerPromise = Promise$1.resolve(localforageSerializer);
          executeTwoCallbacks(serializerPromise, callback);
          return serializerPromise;
        };
        LocalForage2.prototype.ready = function ready(callback) {
          var self2 = this;
          var promise = self2._driverSet.then(function() {
            if (self2._ready === null) {
              self2._ready = self2._initDriver();
            }
            return self2._ready;
          });
          executeTwoCallbacks(promise, callback, callback);
          return promise;
        };
        LocalForage2.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
          var self2 = this;
          if (!isArray(drivers)) {
            drivers = [drivers];
          }
          var supportedDrivers = this._getSupportedDrivers(drivers);
          function setDriverToConfig() {
            self2._config.driver = self2.driver();
          }
          function extendSelfWithDriver(driver) {
            self2._extend(driver);
            setDriverToConfig();
            self2._ready = self2._initStorage(self2._config);
            return self2._ready;
          }
          function initDriver(supportedDrivers2) {
            return function() {
              var currentDriverIndex = 0;
              function driverPromiseLoop() {
                while (currentDriverIndex < supportedDrivers2.length) {
                  var driverName = supportedDrivers2[currentDriverIndex];
                  currentDriverIndex++;
                  self2._dbInfo = null;
                  self2._ready = null;
                  return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                }
                setDriverToConfig();
                var error = new Error("No available storage method found.");
                self2._driverSet = Promise$1.reject(error);
                return self2._driverSet;
              }
              return driverPromiseLoop();
            };
          }
          var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
            return Promise$1.resolve();
          }) : Promise$1.resolve();
          this._driverSet = oldDriverSetDone.then(function() {
            var driverName = supportedDrivers[0];
            self2._dbInfo = null;
            self2._ready = null;
            return self2.getDriver(driverName).then(function(driver) {
              self2._driver = driver._driver;
              setDriverToConfig();
              self2._wrapLibraryMethodsWithReady();
              self2._initDriver = initDriver(supportedDrivers);
            });
          })["catch"](function() {
            setDriverToConfig();
            var error = new Error("No available storage method found.");
            self2._driverSet = Promise$1.reject(error);
            return self2._driverSet;
          });
          executeTwoCallbacks(this._driverSet, callback, errorCallback);
          return this._driverSet;
        };
        LocalForage2.prototype.supports = function supports(driverName) {
          return !!DriverSupport[driverName];
        };
        LocalForage2.prototype._extend = function _extend(libraryMethodsAndProperties) {
          extend(this, libraryMethodsAndProperties);
        };
        LocalForage2.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
          var supportedDrivers = [];
          for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
              supportedDrivers.push(driverName);
            }
          }
          return supportedDrivers;
        };
        LocalForage2.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
          for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
          }
        };
        LocalForage2.prototype.createInstance = function createInstance(options) {
          return new LocalForage2(options);
        };
        return LocalForage2;
      }();
      var localforage_js = new LocalForage();
      module2.exports = localforage_js;
    }, { "3": 3 }] }, {}, [4])(4);
  });
})(localforage$1);
var localforageExports = localforage$1.exports;
const localforage = /* @__PURE__ */ getDefaultExportFromCjs(localforageExports);
const useStorage = (options = {}) => {
  options.driver ?? (options.driver = localforage.INDEXEDDB);
  const storage = localforage.createInstance(options);
  const setItem = async (key, value) => {
    return storage.setItem(key.toString(), value);
  };
  const getItem = async (key) => {
    return storage.getItem(key.toString());
  };
  const getAllItems = async () => {
    return Promise.all(
      (await storage.keys()).map((k) => storage.getItem(k))
    );
  };
  const removeItem = async (key) => {
    return storage.removeItem(key.toString());
  };
  const hasItem = async (key) => {
    const keyStr = key.toString();
    return storage.keys().then((r) => r.includes(keyStr));
  };
  const keys = async () => {
    return storage.keys();
  };
  return {
    keys,
    hasItem,
    getItem,
    setItem,
    removeItem,
    getAllItems
  };
};
const useReactiveStorage = (key, initialValue) => {
  const store2 = reactive(
    typeof initialValue == "function" ? initialValue() : initialValue
  );
  let storeInited = false;
  watch(store2, async () => {
    if (!storeInited)
      return;
    await localforage.setItem(key, toRaw(store2));
  });
  localforage.getItem(key).then((r) => {
    r && Object.assign(store2, r);
    storeInited = true;
  });
  return store2;
};
const snapshotStorage = useStorage({
  name: `snapshot`,
  version: 1
});
const snapshotSetItem = snapshotStorage.setItem;
snapshotStorage.setItem = async (key, value) => {
  const shallowValue = { ...value, nodes: [] };
  await shallowSnapshotStorage.setItem(key, shallowValue);
  return snapshotSetItem(key, value);
};
const snapshotRemoveItem = snapshotStorage.removeItem;
snapshotStorage.removeItem = async (key) => {
  await Promise.all([
    snapshotRemoveItem(key),
    shallowSnapshotStorage.removeItem(key),
    screenshotStorage.removeItem(key)
  ]);
};
const shallowSnapshotStorage = useStorage({
  name: `shallowSnapshot`,
  version: 1
});
const screenshotStorage = useStorage({
  name: `screenshot`,
  version: 1
});
const setSnapshot = async (snapshot, bf) => {
  Object.entries(urlStorage).forEach(([k, v]) => {
    if (v == snapshot.id) {
      delete urlStorage[k];
    }
  });
  if (githubJpgStorage[snapshot.id]) {
    delete githubJpgStorage[snapshot.id];
  }
  if (githubZipStorage[snapshot.id]) {
    delete githubZipStorage[snapshot.id];
  }
  await snapshotStorage.setItem(snapshot.id, snapshot);
  await screenshotStorage.setItem(snapshot.id, bf);
};
useStorage({
  name: `cache`,
  version: 1
});
const urlStorage = useReactiveStorage(`url`, {});
const githubJpgStorage = useReactiveStorage(
  `githubJpg`,
  {}
);
const githubZipStorage = useReactiveStorage(
  `githubZip`,
  {}
);
export {
  snapshotStorage as a,
  githubJpgStorage as b,
  copy as c,
  dialog as d,
  githubZipStorage as e,
  fadeInHeightExpandTransition as f,
  githubUrlToSelfUrl as g,
  gmOk as h,
  screenshotStorage as i,
  delay as j,
  commonjsGlobal as k,
  enhanceFetch as l,
  message as m,
  loadingBar as n,
  obj2form as o,
  pLimit as p,
  githubZipUrlReg as q,
  githubImageUrlReg as r,
  shallowSnapshotStorage as s,
  setSnapshot as t,
  urlStorage as u,
  commonjsRequire as v,
  getDefaultExportFromCjs as w,
  omit as x
};
