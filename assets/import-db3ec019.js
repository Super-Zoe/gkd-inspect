import { j as jszip_minExports } from "./jszip.min-9024b065.js";
import { p as pLimit, u as urlStorage, a as snapshotStorage, l as enhanceFetch, m as message, t as setSnapshot } from "./storage-71d9086d.js";
const e = (() => {
  if ("undefined" == typeof self)
    return false;
  if ("top" in self && self !== top)
    try {
      top.window.document._ = 0;
    } catch (e2) {
      return false;
    }
  return "showOpenFilePicker" in self;
})(), t = e ? Promise.resolve().then(function() {
  return l;
}) : Promise.resolve().then(function() {
  return v;
});
async function n(...e2) {
  return (await t).default(...e2);
}
e ? Promise.resolve().then(function() {
  return y;
}) : Promise.resolve().then(function() {
  return b;
});
e ? Promise.resolve().then(function() {
  return m;
}) : Promise.resolve().then(function() {
  return k;
});
const s = async (e2) => {
  const t2 = await e2.getFile();
  return t2.handle = e2, t2;
};
var c = async (e2 = [{}]) => {
  Array.isArray(e2) || (e2 = [e2]);
  const t2 = [];
  e2.forEach((e3, n3) => {
    t2[n3] = { description: e3.description || "Files", accept: {} }, e3.mimeTypes ? e3.mimeTypes.map((r2) => {
      t2[n3].accept[r2] = e3.extensions || [];
    }) : t2[n3].accept["*/*"] = e3.extensions || [];
  });
  const n2 = await window.showOpenFilePicker({ id: e2[0].id, startIn: e2[0].startIn, types: t2, multiple: e2[0].multiple || false, excludeAcceptAllOption: e2[0].excludeAcceptAllOption || false }), r = await Promise.all(n2.map(s));
  return e2[0].multiple ? r : r[0];
}, l = { __proto__: null, default: c };
function u(e2) {
  function t2(e3) {
    if (Object(e3) !== e3)
      return Promise.reject(new TypeError(e3 + " is not an object."));
    var t3 = e3.done;
    return Promise.resolve(e3.value).then(function(e4) {
      return { value: e4, done: t3 };
    });
  }
  return u = function(e3) {
    this.s = e3, this.n = e3.next;
  }, u.prototype = { s: null, n: null, next: function() {
    return t2(this.n.apply(this.s, arguments));
  }, return: function(e3) {
    var n2 = this.s.return;
    return void 0 === n2 ? Promise.resolve({ value: e3, done: true }) : t2(n2.apply(this.s, arguments));
  }, throw: function(e3) {
    var n2 = this.s.return;
    return void 0 === n2 ? Promise.reject(e3) : t2(n2.apply(this.s, arguments));
  } }, new u(e2);
}
const p = async (e2, t2, n2 = e2.name, r) => {
  const i = [], a = [];
  var o, s2 = false, c2 = false;
  try {
    for (var l2, d2 = function(e3) {
      var t3, n3, r2, i2 = 2;
      for ("undefined" != typeof Symbol && (n3 = Symbol.asyncIterator, r2 = Symbol.iterator); i2--; ) {
        if (n3 && null != (t3 = e3[n3]))
          return t3.call(e3);
        if (r2 && null != (t3 = e3[r2]))
          return new u(t3.call(e3));
        n3 = "@@asyncIterator", r2 = "@@iterator";
      }
      throw new TypeError("Object is not async iterable");
    }(e2.values()); s2 = !(l2 = await d2.next()).done; s2 = false) {
      const o2 = l2.value, s3 = `${n2}/${o2.name}`;
      "file" === o2.kind ? a.push(o2.getFile().then((t3) => (t3.directoryHandle = e2, t3.handle = o2, Object.defineProperty(t3, "webkitRelativePath", { configurable: true, enumerable: true, get: () => s3 })))) : "directory" !== o2.kind || !t2 || r && r(o2) || i.push(p(o2, t2, s3, r));
    }
  } catch (e3) {
    c2 = true, o = e3;
  } finally {
    try {
      s2 && null != d2.return && await d2.return();
    } finally {
      if (c2)
        throw o;
    }
  }
  return [...(await Promise.all(i)).flat(), ...await Promise.all(a)];
};
var d = async (e2 = {}) => {
  e2.recursive = e2.recursive || false, e2.mode = e2.mode || "read";
  const t2 = await window.showDirectoryPicker({ id: e2.id, startIn: e2.startIn, mode: e2.mode });
  return (await (await t2.values()).next()).done ? [t2] : p(t2, e2.recursive, void 0, e2.skipDirectory);
}, y = { __proto__: null, default: d }, f = async (e2, t2 = [{}], n2 = null, r = false, i = null) => {
  Array.isArray(t2) || (t2 = [t2]), t2[0].fileName = t2[0].fileName || "Untitled";
  const a = [];
  let o = null;
  if (e2 instanceof Blob && e2.type ? o = e2.type : e2.headers && e2.headers.get("content-type") && (o = e2.headers.get("content-type")), t2.forEach((e3, t3) => {
    a[t3] = { description: e3.description || "Files", accept: {} }, e3.mimeTypes ? (0 === t3 && o && e3.mimeTypes.push(o), e3.mimeTypes.map((n3) => {
      a[t3].accept[n3] = e3.extensions || [];
    })) : o ? a[t3].accept[o] = e3.extensions || [] : a[t3].accept["*/*"] = e3.extensions || [];
  }), n2)
    try {
      await n2.getFile();
    } catch (e3) {
      if (n2 = null, r)
        throw e3;
    }
  const s2 = n2 || await window.showSaveFilePicker({ suggestedName: t2[0].fileName, id: t2[0].id, startIn: t2[0].startIn, types: a, excludeAcceptAllOption: t2[0].excludeAcceptAllOption || false });
  !n2 && i && i(s2);
  const c2 = await s2.createWritable();
  if ("stream" in e2) {
    const t3 = e2.stream();
    return await t3.pipeTo(c2), s2;
  }
  return "body" in e2 ? (await e2.body.pipeTo(c2), s2) : (await c2.write(await e2), await c2.close(), s2);
}, m = { __proto__: null, default: f }, w = async (e2 = [{}]) => (Array.isArray(e2) || (e2 = [e2]), new Promise((t2, n2) => {
  const r = document.createElement("input");
  r.type = "file";
  const i = [...e2.map((e3) => e3.mimeTypes || []), ...e2.map((e3) => e3.extensions || [])].join();
  r.multiple = e2[0].multiple || false, r.accept = i || "", r.style.display = "none", document.body.append(r);
  const a = (e3) => {
    "function" == typeof o && o(), t2(e3);
  }, o = e2[0].legacySetup && e2[0].legacySetup(a, () => o(n2), r), s2 = () => {
    window.removeEventListener("focus", s2), r.remove();
  };
  r.addEventListener("click", () => {
    window.addEventListener("focus", s2);
  }), r.addEventListener("change", () => {
    window.removeEventListener("focus", s2), r.remove(), a(r.multiple ? Array.from(r.files) : r.files[0]);
  }), "showPicker" in HTMLInputElement.prototype ? r.showPicker() : r.click();
})), v = { __proto__: null, default: w }, h = async (e2 = [{}]) => (Array.isArray(e2) || (e2 = [e2]), e2[0].recursive = e2[0].recursive || false, new Promise((t2, n2) => {
  const r = document.createElement("input");
  r.type = "file", r.webkitdirectory = true;
  const i = (e3) => {
    "function" == typeof a && a(), t2(e3);
  }, a = e2[0].legacySetup && e2[0].legacySetup(i, () => a(n2), r);
  r.addEventListener("change", () => {
    let t3 = Array.from(r.files);
    e2[0].recursive ? e2[0].recursive && e2[0].skipDirectory && (t3 = t3.filter((t4) => t4.webkitRelativePath.split("/").every((t5) => !e2[0].skipDirectory({ name: t5, kind: "directory" })))) : t3 = t3.filter((e3) => 2 === e3.webkitRelativePath.split("/").length), i(t3);
  }), "showPicker" in HTMLInputElement.prototype ? r.showPicker() : r.click();
})), b = { __proto__: null, default: h }, P = async (e2, t2 = {}) => {
  Array.isArray(t2) && (t2 = t2[0]);
  const n2 = document.createElement("a");
  let r = e2;
  "body" in e2 && (r = await async function(e3, t3) {
    const n3 = e3.getReader(), r2 = new ReadableStream({ start: (e4) => async function t4() {
      return n3.read().then(({ done: n4, value: r3 }) => {
        if (!n4)
          return e4.enqueue(r3), t4();
        e4.close();
      });
    }() }), i2 = new Response(r2), a2 = await i2.blob();
    return n3.releaseLock(), new Blob([a2], { type: t3 });
  }(e2.body, e2.headers.get("content-type"))), n2.download = t2.fileName || "Untitled", n2.href = URL.createObjectURL(await r);
  const i = () => {
    "function" == typeof a && a();
  }, a = t2.legacySetup && t2.legacySetup(i, () => a(), n2);
  return n2.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(n2.href), 3e4), i();
  }), n2.click(), null;
}, k = { __proto__: null, default: P };
const eqU8 = (a, b2) => {
  return a.length == b2.length && a.every((v2, i) => v2 == b2[i]);
};
const startWith = (a, b2) => {
  return eqU8(new Uint8Array(a.slice(0, b2.length)), b2);
};
const zipHeader = new Uint8Array([80, 75, 3, 4]);
const isZipBf = (bf) => startWith(bf, zipHeader);
const parseZip = async (zip) => {
  const snapshotFile = zip.filter((s2) => s2.endsWith(`.json`))[0];
  const screenshotFile = zip.filter((s2) => s2.endsWith(`.png`))[0];
  if (!snapshotFile || !screenshotFile) {
    return false;
  }
  const snapshot = JSON.parse(await snapshotFile.async("string"));
  const screenshotBf = await screenshotFile.async("arraybuffer");
  await setSnapshot(snapshot, screenshotBf);
  return true;
};
const importFromLocal = async () => {
  const files = await n({
    multiple: true,
    mimeTypes: [`application/zip`]
  });
  const zipfiles = files.filter((f2) => f2.name.endsWith(`.zip`));
  if (zipfiles.length == 0) {
    message.warning(`没有发现可导入文件`);
    return;
  }
  let importNum = 0;
  if (zipfiles.length > 0) {
    await Promise.any(
      zipfiles.map(async (file) => {
        const zip = await jszip_minExports.loadAsync(file);
        if (await parseZip(zip)) {
          importNum++;
        }
        const subZips = zip.filter((s2) => s2.endsWith(".zip"));
        if (subZips.length > 0) {
          await Promise.any(
            subZips.map(async (subZip) => {
              const subFile = await jszip_minExports.loadAsync(subZip.async("blob"));
              if (await parseZip(subFile)) {
                importNum++;
              }
            })
          );
        }
      })
    );
  }
  if (importNum > 0) {
    message.success(`导入${importNum}条记录`);
  } else {
    message.warning(`没有发现可导入记录`);
  }
};
const importFromNetwork = async (urls = []) => {
  if (typeof urls == "string") {
    urls = [urls];
  }
  if (urls.length == 0) {
    return;
  }
  urls = [...new Set(urls)];
  const limit = pLimit(2);
  let importNum = 0;
  const result = await Promise.allSettled(
    urls.map((url) => {
      return limit(async () => {
        const snapshotId = urlStorage[url];
        if (snapshotId) {
          const snapshot2 = await snapshotStorage.getItem(snapshotId);
          if (snapshot2) {
            importNum++;
            return snapshot2;
          }
        }
        const resp = await enhanceFetch(url, void 0, { proxy: true }).catch(
          (e2) => {
            message.error(`网络异常: ${new URL(url).host}/${e2.message || ""}`);
            console.warn([`download failed`, url, e2]);
            throw e2;
          }
        );
        const bf = await resp.arrayBuffer();
        let snapshot;
        let screenshotBf;
        if (isZipBf(bf)) {
          const zip = await jszip_minExports.loadAsync(bf);
          const [snapshotFile] = zip.filter((p2) => p2.endsWith(`.json`));
          const [screenshotFile] = zip.filter((p2) => p2.endsWith(`.png`));
          if (!snapshotFile || !screenshotFile) {
            return;
          }
          screenshotBf = await screenshotFile.async("arraybuffer");
          snapshot = JSON.parse(await snapshotFile.async("string"));
        } else {
          throw new Error(`file must be png or zip`);
        }
        await setSnapshot(snapshot, screenshotBf);
        importNum++;
        return snapshot;
      });
    })
  );
  if (importNum == 0) {
    message.warning(`没有发现可导入记录`);
  } else if (importNum == urls.length) {
    message.success(`导入${importNum}条快照`);
  } else if (importNum < urls.length) {
    message.success(`导入${importNum}条快照，失败${urls.length - importNum}`);
  }
  return result;
};
export {
  importFromNetwork as a,
  importFromLocal as i
};
