import { m as message } from "./storage-71d9086d.js";
import { u as unref, J as toRef$1, aw as readonly, aY as customRef, A as ref, aZ as getCurrentInstance, a6 as onMounted, ae as nextTick, a_ as getCurrentScope, a$ as onScopeDispose, e as watch, s as shallowRef, c as computed } from "./index-df0b30b5.js";
const errorWrap = (getter, catchHandler, finallyHandler) => {
  try {
    return getter();
  } catch (e) {
    if (typeof catchHandler == "string") {
      message.error(catchHandler);
    } else {
      const error = (catchHandler == null ? void 0 : catchHandler(e)) ?? e;
      if (typeof error == "string") {
        message.error(error);
      } else if (error instanceof Error) {
        message.error(error.message);
      }
    }
    throw e;
  } finally {
    finallyHandler == null ? void 0 : finallyHandler();
  }
};
const errorTry = (fn) => {
  return (...args) => {
    try {
      fn(...args);
    } catch (e) {
      console.error(e);
    }
  };
};
if (typeof ArrayBuffer.isView === "undefined") {
  ArrayBuffer.isView = function(a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === "undefined") {
  Object.defineProperty(Array.prototype, "fill", { value: function(value) {
    if (this == null) {
      throw new TypeError("this is null or not defined");
    }
    var O = Object(this);
    var len = O.length >>> 0;
    var start = arguments[1];
    var relativeStart = start >> 0;
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
    var end = arguments[2];
    var relativeEnd = end === void 0 ? len : end >> 0;
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    return O;
  } });
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function(TypedArray) {
  if (typeof TypedArray.prototype.fill === "undefined") {
    Object.defineProperty(TypedArray.prototype, "fill", { value: Array.prototype.fill });
  }
});
if (typeof Math.clz32 === "undefined") {
  Math.clz32 = function(log, LN2) {
    return function(x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0;
    };
  }(Math.log, Math.LN2);
}
if (typeof String.prototype.startsWith === "undefined") {
  Object.defineProperty(String.prototype, "startsWith", { value: function(searchString, position) {
    position = position || 0;
    return this.lastIndexOf(searchString, position) === position;
  } });
}
if (typeof String.prototype.endsWith === "undefined") {
  Object.defineProperty(String.prototype, "endsWith", { value: function(searchString, position) {
    var subjectString = this.toString();
    if (position === void 0 || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  } });
}
if (typeof Math.imul === "undefined") {
  Math.imul = function imul2(a, b) {
    return (a & 4294901760) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
var clz32 = Math.clz32;
var imul_0 = Math.imul;
var isView = ArrayBuffer.isView;
setMetadataFor(CharSequence, "CharSequence", interfaceMeta);
setMetadataFor(Comparable, "Comparable", interfaceMeta);
setMetadataFor(Number_0, "Number", classMeta);
setMetadataFor(Unit, "Unit", objectMeta);
setMetadataFor(IntCompanionObject, "IntCompanionObject", objectMeta);
setMetadataFor(Comparator, "Comparator", interfaceMeta);
setMetadataFor(Collection, "Collection", interfaceMeta);
setMetadataFor(AbstractCollection, "AbstractCollection", classMeta, VOID, [Collection]);
setMetadataFor(AbstractMutableCollection, "AbstractMutableCollection", classMeta, AbstractCollection, [AbstractCollection, Collection]);
setMetadataFor(IteratorImpl, "IteratorImpl", classMeta);
setMetadataFor(ListIteratorImpl, "ListIteratorImpl", classMeta, IteratorImpl);
setMetadataFor(List, "List", interfaceMeta, VOID, [Collection]);
setMetadataFor(AbstractMutableList, "AbstractMutableList", classMeta, AbstractMutableCollection, [AbstractMutableCollection, List, Collection]);
setMetadataFor(Map_0, "Map", interfaceMeta);
setMetadataFor(AbstractMap, "AbstractMap", classMeta, VOID, [Map_0]);
setMetadataFor(AbstractMutableMap, "AbstractMutableMap", classMeta, AbstractMap, [AbstractMap, Map_0]);
setMetadataFor(Set$1, "Set", interfaceMeta, VOID, [Collection]);
setMetadataFor(AbstractMutableSet, "AbstractMutableSet", classMeta, AbstractMutableCollection, [AbstractMutableCollection, Set$1, Collection]);
setMetadataFor(Companion$1, "Companion", objectMeta);
setMetadataFor(ArrayList, "ArrayList", classMeta, AbstractMutableList, [AbstractMutableList, List, Collection], ArrayList_init_$Create$);
setMetadataFor(HashMap, "HashMap", classMeta, AbstractMutableMap, [AbstractMutableMap, Map_0], HashMap_init_$Create$);
setMetadataFor(HashMapEntrySetBase, "HashMapEntrySetBase", classMeta, AbstractMutableSet, [Set$1, Collection, AbstractMutableSet]);
setMetadataFor(HashMapEntrySet, "HashMapEntrySet", classMeta, HashMapEntrySetBase);
setMetadataFor(HashSet, "HashSet", classMeta, AbstractMutableSet, [AbstractMutableSet, Set$1, Collection], HashSet_init_$Create$);
setMetadataFor(Companion_0$1, "Companion", objectMeta);
setMetadataFor(Itr, "Itr", classMeta);
setMetadataFor(KeysItr, "KeysItr", classMeta, Itr);
setMetadataFor(EntriesItr, "EntriesItr", classMeta, Itr);
setMetadataFor(Entry, "Entry", interfaceMeta);
setMetadataFor(EntryRef, "EntryRef", classMeta, VOID, [Entry]);
function containsAllEntries(m) {
  var tmp$ret$0;
  $l$block_0: {
    var tmp;
    if (isInterface(m, Collection)) {
      tmp = m.p();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var tmp0_iterator = m.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      var entry = element;
      var tmp_0;
      if (!(entry == null) ? isInterface(entry, Entry) : false) {
        tmp_0 = this.i4(entry);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
}
setMetadataFor(InternalMap, "InternalMap", interfaceMeta);
setMetadataFor(InternalHashMap, "InternalHashMap", classMeta, VOID, [InternalMap], InternalHashMap_init_$Create$);
setMetadataFor(LinkedHashMap, "LinkedHashMap", classMeta, HashMap, [HashMap, Map_0], LinkedHashMap_init_$Create$);
setMetadataFor(LinkedHashSet, "LinkedHashSet", classMeta, HashSet, [HashSet, Set$1, Collection], LinkedHashSet_init_$Create$);
setMetadataFor(KProperty1, "KProperty1", interfaceMeta);
setMetadataFor(StringBuilder, "StringBuilder", classMeta, VOID, [CharSequence], StringBuilder_init_$Create$_0);
setMetadataFor(Companion_1$1, "Companion", objectMeta);
setMetadataFor(Regex, "Regex", classMeta);
setMetadataFor(sam$kotlin_Comparator$0$1, "sam$kotlin_Comparator$0", classMeta, VOID, [Comparator]);
setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
setMetadataFor(Companion_2$1, "Companion", objectMeta);
setMetadataFor(Char, "Char", classMeta, VOID, [Comparable]);
setMetadataFor(Companion_3$1, "Companion", objectMeta);
setMetadataFor(Enum, "Enum", classMeta, VOID, [Comparable]);
setMetadataFor(arrayIterator$1, VOID, classMeta);
setMetadataFor(Companion_4$1, "Companion", objectMeta);
setMetadataFor(Long, "Long", classMeta, Number_0, [Number_0, Comparable]);
setMetadataFor(Digit, "Digit", objectMeta);
setMetadataFor(Continuation, "Continuation", interfaceMeta);
setMetadataFor(CoroutineImpl, "CoroutineImpl", classMeta, VOID, [Continuation]);
setMetadataFor(CompletedContinuation, "CompletedContinuation", objectMeta, VOID, [Continuation]);
setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, CoroutineImpl);
setMetadataFor(Exception, "Exception", classMeta, Error, VOID, Exception_init_$Create$);
setMetadataFor(RuntimeException, "RuntimeException", classMeta, Exception, VOID, RuntimeException_init_$Create$);
setMetadataFor(IllegalArgumentException, "IllegalArgumentException", classMeta, RuntimeException, VOID, IllegalArgumentException_init_$Create$);
setMetadataFor(IndexOutOfBoundsException, "IndexOutOfBoundsException", classMeta, RuntimeException, VOID, IndexOutOfBoundsException_init_$Create$);
setMetadataFor(IllegalStateException, "IllegalStateException", classMeta, RuntimeException, VOID, IllegalStateException_init_$Create$);
setMetadataFor(UnsupportedOperationException, "UnsupportedOperationException", classMeta, RuntimeException, VOID, UnsupportedOperationException_init_$Create$);
setMetadataFor(NoSuchElementException, "NoSuchElementException", classMeta, RuntimeException, VOID, NoSuchElementException_init_$Create$);
setMetadataFor(Error_0, "Error", classMeta, Error, VOID, Error_init_$Create$);
setMetadataFor(NumberFormatException, "NumberFormatException", classMeta, IllegalArgumentException, VOID, NumberFormatException_init_$Create$);
setMetadataFor(ArithmeticException, "ArithmeticException", classMeta, RuntimeException, VOID, ArithmeticException_init_$Create$);
setMetadataFor(ConcurrentModificationException, "ConcurrentModificationException", classMeta, RuntimeException, VOID, ConcurrentModificationException_init_$Create$);
setMetadataFor(NullPointerException, "NullPointerException", classMeta, RuntimeException, VOID, NullPointerException_init_$Create$);
setMetadataFor(ClassCastException, "ClassCastException", classMeta, RuntimeException, VOID, ClassCastException_init_$Create$);
setMetadataFor(Companion_5, "Companion", objectMeta);
setMetadataFor(Companion_6, "Companion", objectMeta);
setMetadataFor(Companion_7, "Companion", objectMeta);
setMetadataFor(EmptyIterator, "EmptyIterator", objectMeta);
setMetadataFor(ArrayAsCollection, "ArrayAsCollection", classMeta, VOID, [Collection]);
setMetadataFor(EmptyList, "EmptyList", objectMeta, VOID, [List]);
setMetadataFor(IndexedValue, "IndexedValue", classMeta);
setMetadataFor(IntIterator, "IntIterator", classMeta);
setMetadataFor(CharIterator, "CharIterator", classMeta);
setMetadataFor(SequenceScope, "SequenceScope", classMeta, VOID, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(SequenceBuilderIterator, "SequenceBuilderIterator", classMeta, SequenceScope, [SequenceScope, Continuation], SequenceBuilderIterator, VOID, VOID, [1]);
setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
setMetadataFor(TransformingSequence$iterator$1, VOID, classMeta);
setMetadataFor(TransformingSequence, "TransformingSequence", classMeta);
setMetadataFor(TakeWhileSequence$iterator$1, VOID, classMeta);
setMetadataFor(TakeWhileSequence, "TakeWhileSequence", classMeta);
setMetadataFor(DropTakeSequence, "DropTakeSequence", interfaceMeta);
setMetadataFor(DropSequence$iterator$1, VOID, classMeta);
setMetadataFor(DropSequence, "DropSequence", classMeta, VOID, [DropTakeSequence]);
setMetadataFor(DropWhileSequence$iterator$1, VOID, classMeta);
setMetadataFor(DropWhileSequence, "DropWhileSequence", classMeta);
setMetadataFor(FilteringSequence$iterator$1, VOID, classMeta);
setMetadataFor(FilteringSequence, "FilteringSequence", classMeta);
setMetadataFor(IndexingSequence$iterator$1, VOID, classMeta);
setMetadataFor(IndexingSequence, "IndexingSequence", classMeta);
setMetadataFor(TakeSequence$iterator$1, VOID, classMeta);
setMetadataFor(TakeSequence, "TakeSequence", classMeta, VOID, [DropTakeSequence]);
setMetadataFor(EmptySequence, "EmptySequence", objectMeta, VOID, [DropTakeSequence]);
setMetadataFor(SubSequence$iterator$1, VOID, classMeta);
setMetadataFor(SubSequence, "SubSequence", classMeta, VOID, [DropTakeSequence]);
setMetadataFor(EmptySet, "EmptySet", objectMeta, VOID, [Set$1]);
setMetadataFor(NaturalOrderComparator, "NaturalOrderComparator", objectMeta, VOID, [Comparator]);
setMetadataFor(Key, "Key", objectMeta);
setMetadataFor(ContinuationInterceptor, "ContinuationInterceptor", interfaceMeta);
setMetadataFor(EmptyCoroutineContext, "EmptyCoroutineContext", objectMeta);
setMetadataFor(CoroutineSingletons, "CoroutineSingletons", classMeta, Enum);
setMetadataFor(Companion_8, "Companion", objectMeta);
setMetadataFor(IntProgression, "IntProgression", classMeta);
setMetadataFor(IntRange, "IntRange", classMeta, IntProgression);
setMetadataFor(Companion_9, "Companion", objectMeta);
setMetadataFor(CharProgression, "CharProgression", classMeta);
setMetadataFor(CharRange, "CharRange", classMeta, CharProgression);
setMetadataFor(IntProgressionIterator, "IntProgressionIterator", classMeta, IntIterator);
setMetadataFor(CharProgressionIterator, "CharProgressionIterator", classMeta, CharIterator);
setMetadataFor(Companion_10, "Companion", objectMeta);
setMetadataFor(Companion_11, "Companion", objectMeta);
setMetadataFor(UnsafeLazyImpl, "UnsafeLazyImpl", classMeta);
setMetadataFor(UNINITIALIZED_VALUE, "UNINITIALIZED_VALUE", objectMeta);
setMetadataFor(Companion_12, "Companion", objectMeta);
setMetadataFor(Failure, "Failure", classMeta);
setMetadataFor(NotImplementedError, "NotImplementedError", classMeta, Error_0, VOID, NotImplementedError);
setMetadataFor(Pair, "Pair", classMeta);
function CharSequence() {
}
function Comparable() {
}
function Number_0() {
}
function Unit() {
}
protoOf(Unit).toString = function() {
  return "kotlin.Unit";
};
var Unit_instance;
function IntCompanionObject() {
  this.MIN_VALUE = -2147483648;
  this.MAX_VALUE = 2147483647;
  this.SIZE_BYTES = 4;
  this.SIZE_BITS = 32;
}
protoOf(IntCompanionObject).e = function() {
  return this.MIN_VALUE;
};
protoOf(IntCompanionObject).f = function() {
  return this.MAX_VALUE;
};
protoOf(IntCompanionObject).g = function() {
  return this.SIZE_BYTES;
};
protoOf(IntCompanionObject).h = function() {
  return this.SIZE_BITS;
};
var IntCompanionObject_instance;
function Comparator() {
}
function isNaN_0(_this__u8e3s4) {
  return !(_this__u8e3s4 === _this__u8e3s4);
}
function takeHighestOneBit(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 === 0) {
    tmp = 0;
  } else {
    var tmp_0 = 32 - 1 | 0;
    tmp = 1 << (tmp_0 - clz32(_this__u8e3s4) | 0);
  }
  return tmp;
}
function collectionToArray(collection) {
  return collectionToArrayCommonImpl(collection);
}
function listOf(element) {
  return arrayListOf([element]);
}
function copyToArray(collection) {
  var tmp;
  if (collection.toArray !== void 0) {
    tmp = collection.toArray();
  } else {
    tmp = collectionToArray(collection);
  }
  return tmp;
}
function checkIndexOverflow(index) {
  if (index < 0) {
    throwIndexOverflow();
  }
  return index;
}
function sort(_this__u8e3s4) {
  collectionsSort(_this__u8e3s4, naturalOrder());
}
function sortWith(_this__u8e3s4, comparator) {
  collectionsSort(_this__u8e3s4, comparator);
}
function mapCapacity(expectedSize) {
  return expectedSize;
}
function setOf(element) {
  return hashSetOf([element]);
}
function collectionsSort(list, comparator) {
  if (list.i() <= 1)
    return Unit_instance;
  var array = copyToArray(list);
  sortArrayWith(array, comparator);
  var inductionVariable = 0;
  var last2 = array.length;
  if (inductionVariable < last2)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      list.j(i, array[i]);
    } while (inductionVariable < last2);
}
function AbstractMutableCollection() {
  AbstractCollection.call(this);
}
protoOf(AbstractMutableCollection).toJSON = function() {
  return this.toArray();
};
protoOf(AbstractMutableCollection).l = function() {
};
function IteratorImpl($outer) {
  this.s_1 = $outer;
  this.q_1 = 0;
  this.r_1 = -1;
}
protoOf(IteratorImpl).t = function() {
  return this.q_1 < this.s_1.i();
};
protoOf(IteratorImpl).u = function() {
  if (!this.t())
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var tmp1 = this.q_1;
  this.q_1 = tmp1 + 1 | 0;
  tmp.r_1 = tmp1;
  return this.s_1.v(this.r_1);
};
protoOf(IteratorImpl).w = function() {
  if (!!(this.r_1 === -1)) {
    var message2 = "Call next() or previous() before removing element from the iterator.";
    throw IllegalStateException_init_$Create$_0(toString_2(message2));
  }
  this.s_1.y(this.r_1);
  this.q_1 = this.r_1;
  this.r_1 = -1;
};
function ListIteratorImpl($outer, index) {
  this.c1_1 = $outer;
  IteratorImpl.call(this, $outer);
  Companion_instance_5.e1(index, this.c1_1.i());
  this.q_1 = index;
}
function AbstractMutableList() {
  AbstractMutableCollection.call(this);
  this.x_1 = 0;
}
protoOf(AbstractMutableList).k = function(element) {
  this.l();
  this.f1(this.i(), element);
  return true;
};
protoOf(AbstractMutableList).g1 = function() {
  this.l();
  this.h1(0, this.i());
};
protoOf(AbstractMutableList).m = function() {
  return new IteratorImpl(this);
};
protoOf(AbstractMutableList).n = function(element) {
  return this.i1(element) >= 0;
};
protoOf(AbstractMutableList).i1 = function(element) {
  var tmp$ret$1;
  $l$block: {
    var index = 0;
    var tmp0_iterator = this.m();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      if (equals(item, element)) {
        tmp$ret$1 = index;
        break $l$block;
      }
      index = index + 1 | 0;
    }
    tmp$ret$1 = -1;
  }
  return tmp$ret$1;
};
protoOf(AbstractMutableList).j1 = function(index) {
  return new ListIteratorImpl(this, index);
};
protoOf(AbstractMutableList).h1 = function(fromIndex, toIndex) {
  var iterator2 = this.j1(fromIndex);
  var times = toIndex - fromIndex | 0;
  var inductionVariable = 0;
  if (inductionVariable < times)
    do {
      inductionVariable = inductionVariable + 1 | 0;
      iterator2.u();
      iterator2.w();
    } while (inductionVariable < times);
};
protoOf(AbstractMutableList).equals = function(other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, List) : false))
    return false;
  return Companion_instance_5.k1(this, other);
};
protoOf(AbstractMutableList).hashCode = function() {
  return Companion_instance_5.l1(this);
};
function AbstractMutableMap() {
  AbstractMap.call(this);
  this.o1_1 = null;
  this.p1_1 = null;
}
function AbstractMutableSet() {
  AbstractMutableCollection.call(this);
}
protoOf(AbstractMutableSet).equals = function(other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, Set$1) : false))
    return false;
  return Companion_instance_7.x1(this, other);
};
protoOf(AbstractMutableSet).hashCode = function() {
  return Companion_instance_7.y1(this);
};
function arrayOfUninitializedElements(capacity) {
  if (!(capacity >= 0)) {
    var message2 = "capacity must be non-negative.";
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  return fillArrayVal(Array(capacity), null);
}
function resetRange(_this__u8e3s4, fromIndex, toIndex) {
  _this__u8e3s4.fill(null, fromIndex, toIndex);
}
function copyOfUninitializedElements(_this__u8e3s4, newSize) {
  return copyOf_0(_this__u8e3s4, newSize);
}
function Companion$1() {
  Companion_instance$1 = this;
  var tmp = this;
  var this_0 = ArrayList_init_$Create$_0(0);
  this_0.b2_1 = true;
  tmp.c2_1 = this_0;
}
var Companion_instance$1;
function Companion_getInstance$1() {
  if (Companion_instance$1 == null)
    new Companion$1();
  return Companion_instance$1;
}
function ArrayList_init_$Init$($this) {
  var tmp$ret$0 = [];
  ArrayList.call($this, tmp$ret$0);
  return $this;
}
function ArrayList_init_$Create$() {
  return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
}
function ArrayList_init_$Init$_0(initialCapacity, $this) {
  var tmp$ret$0 = [];
  ArrayList.call($this, tmp$ret$0);
  if (!(initialCapacity >= 0)) {
    var message2 = "Negative initial capacity: " + initialCapacity;
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  return $this;
}
function ArrayList_init_$Create$_0(initialCapacity) {
  return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
}
function ArrayList_init_$Init$_1(elements, $this) {
  var tmp$ret$0 = copyToArray(elements);
  ArrayList.call($this, tmp$ret$0);
  return $this;
}
function ArrayList_init_$Create$_1(elements) {
  return ArrayList_init_$Init$_1(elements, objectCreate(protoOf(ArrayList)));
}
function rangeCheck($this, index) {
  Companion_instance_5.d2(index, $this.i());
  return index;
}
function insertionRangeCheck($this, index) {
  Companion_instance_5.e1(index, $this.i());
  return index;
}
function ArrayList(array) {
  Companion_getInstance$1();
  AbstractMutableList.call(this);
  this.a2_1 = array;
  this.b2_1 = false;
}
protoOf(ArrayList).i = function() {
  return this.a2_1.length;
};
protoOf(ArrayList).v = function(index) {
  var tmp = this.a2_1[rangeCheck(this, index)];
  return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
};
protoOf(ArrayList).j = function(index, element) {
  this.l();
  rangeCheck(this, index);
  var this_0 = this.a2_1[index];
  this.a2_1[index] = element;
  var tmp = this_0;
  return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
};
protoOf(ArrayList).k = function(element) {
  this.l();
  this.a2_1.push(element);
  this.x_1 = this.x_1 + 1 | 0;
  return true;
};
protoOf(ArrayList).f1 = function(index, element) {
  this.l();
  this.a2_1.splice(insertionRangeCheck(this, index), 0, element);
  this.x_1 = this.x_1 + 1 | 0;
};
protoOf(ArrayList).y = function(index) {
  this.l();
  rangeCheck(this, index);
  this.x_1 = this.x_1 + 1 | 0;
  var tmp;
  if (index === get_lastIndex_0(this)) {
    tmp = this.a2_1.pop();
  } else {
    tmp = this.a2_1.splice(index, 1)[0];
  }
  return tmp;
};
protoOf(ArrayList).h1 = function(fromIndex, toIndex) {
  this.l();
  this.x_1 = this.x_1 + 1 | 0;
  this.a2_1.splice(fromIndex, toIndex - fromIndex | 0);
};
protoOf(ArrayList).g1 = function() {
  this.l();
  var tmp = this;
  tmp.a2_1 = [];
  this.x_1 = this.x_1 + 1 | 0;
};
protoOf(ArrayList).i1 = function(element) {
  return indexOf(this.a2_1, element);
};
protoOf(ArrayList).toString = function() {
  return arrayToString(this.a2_1);
};
protoOf(ArrayList).e2 = function() {
  return [].slice.call(this.a2_1);
};
protoOf(ArrayList).toArray = function() {
  return this.e2();
};
protoOf(ArrayList).l = function() {
  if (this.b2_1)
    throw UnsupportedOperationException_init_$Create$();
};
var _stableSortingIsSupported;
function sortArrayWith(array, comparator) {
  if (getStableSortingIsSupported()) {
    var comparison = sortArrayWith$lambda(comparator);
    array.sort(comparison);
  } else {
    mergeSort(array, 0, get_lastIndex(array), comparator);
  }
}
function sortArray(array) {
  if (getStableSortingIsSupported()) {
    var comparison = sortArray$lambda;
    array.sort(comparison);
  } else {
    mergeSort(array, 0, get_lastIndex(array), naturalOrder());
  }
}
function getStableSortingIsSupported() {
  var tmp0_safe_receiver = _stableSortingIsSupported;
  if (tmp0_safe_receiver == null)
    ;
  else {
    return tmp0_safe_receiver;
  }
  _stableSortingIsSupported = false;
  var array = [];
  var inductionVariable = 0;
  if (inductionVariable < 600)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      array.push(index);
    } while (inductionVariable < 600);
  var comparison = getStableSortingIsSupported$lambda;
  array.sort(comparison);
  var inductionVariable_0 = 1;
  var last2 = array.length;
  if (inductionVariable_0 < last2)
    do {
      var index_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var a = array[index_0 - 1 | 0];
      var b = array[index_0];
      if ((a & 3) === (b & 3) ? a >= b : false)
        return false;
    } while (inductionVariable_0 < last2);
  _stableSortingIsSupported = true;
  return true;
}
function mergeSort(array, start, endInclusive, comparator) {
  var size = array.length;
  var buffer2 = fillArrayVal(Array(size), null);
  var result = mergeSort_0(array, buffer2, start, endInclusive, comparator);
  if (!(result === array)) {
    var inductionVariable = start;
    if (inductionVariable <= endInclusive)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = result[i];
      } while (!(i === endInclusive));
  }
}
function mergeSort_0(array, buffer2, start, end, comparator) {
  if (start === end) {
    return array;
  }
  var median = (start + end | 0) / 2 | 0;
  var left = mergeSort_0(array, buffer2, start, median, comparator);
  var right = mergeSort_0(array, buffer2, median + 1 | 0, end, comparator);
  var target = left === buffer2 ? array : buffer2;
  var leftIndex = start;
  var rightIndex = median + 1 | 0;
  var inductionVariable = start;
  if (inductionVariable <= end)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (leftIndex <= median ? rightIndex <= end : false) {
        var leftValue = left[leftIndex];
        var rightValue = right[rightIndex];
        if (comparator.compare(leftValue, rightValue) <= 0) {
          target[i] = leftValue;
          leftIndex = leftIndex + 1 | 0;
        } else {
          target[i] = rightValue;
          rightIndex = rightIndex + 1 | 0;
        }
      } else if (leftIndex <= median) {
        target[i] = left[leftIndex];
        leftIndex = leftIndex + 1 | 0;
      } else {
        target[i] = right[rightIndex];
        rightIndex = rightIndex + 1 | 0;
      }
    } while (!(i === end));
  return target;
}
function sortArrayWith$lambda($comparator) {
  return function(a, b) {
    return $comparator.compare(a, b);
  };
}
function sortArray$lambda(a, b) {
  return compareTo_0(a, b);
}
function getStableSortingIsSupported$lambda(a, b) {
  return (a & 3) - (b & 3) | 0;
}
function HashMap_init_$Init$(internalMap, $this) {
  AbstractMutableMap.call($this);
  HashMap.call($this);
  $this.j2_1 = internalMap;
  return $this;
}
function HashMap_init_$Init$_0($this) {
  HashMap_init_$Init$(InternalHashMap_init_$Create$(), $this);
  return $this;
}
function HashMap_init_$Create$() {
  return HashMap_init_$Init$_0(objectCreate(protoOf(HashMap)));
}
function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
  HashMap_init_$Init$(InternalHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
  return $this;
}
function HashMap_init_$Init$_2(initialCapacity, $this) {
  HashMap_init_$Init$_1(initialCapacity, 1, $this);
  return $this;
}
protoOf(HashMap).t1 = function(key2) {
  return this.j2_1.l2(key2);
};
protoOf(HashMap).w1 = function() {
  var tmp0_elvis_lhs = this.k2_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var this_0 = new HashMapEntrySet(this.j2_1);
    this.k2_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
};
protoOf(HashMap).v1 = function(key2) {
  return this.j2_1.v1(key2);
};
protoOf(HashMap).q1 = function(key2, value) {
  return this.j2_1.q1(key2, value);
};
protoOf(HashMap).i = function() {
  return this.j2_1.i();
};
function HashMap() {
  this.k2_1 = null;
}
function HashMapEntrySet(backing) {
  HashMapEntrySetBase.call(this, backing);
}
protoOf(HashMapEntrySet).m = function() {
  return this.n2_1.o2();
};
function HashMapEntrySetBase(backing) {
  AbstractMutableSet.call(this);
  this.n2_1 = backing;
}
protoOf(HashMapEntrySetBase).i = function() {
  return this.n2_1.i();
};
protoOf(HashMapEntrySetBase).p = function() {
  return this.n2_1.i() === 0;
};
protoOf(HashMapEntrySetBase).p2 = function(element) {
  return this.n2_1.r2(element);
};
protoOf(HashMapEntrySetBase).n = function(element) {
  if (!(!(element == null) ? isInterface(element, Entry) : false))
    return false;
  return this.p2((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
};
protoOf(HashMapEntrySetBase).q2 = function(element) {
  throw UnsupportedOperationException_init_$Create$();
};
protoOf(HashMapEntrySetBase).k = function(element) {
  return this.q2((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
};
protoOf(HashMapEntrySetBase).o = function(elements) {
  return this.n2_1.s2(elements);
};
function HashSet_init_$Init$(map2, $this) {
  AbstractMutableSet.call($this);
  HashSet.call($this);
  $this.t2_1 = map2;
  return $this;
}
function HashSet_init_$Init$_0($this) {
  HashSet_init_$Init$(InternalHashMap_init_$Create$(), $this);
  return $this;
}
function HashSet_init_$Create$() {
  return HashSet_init_$Init$_0(objectCreate(protoOf(HashSet)));
}
function HashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
  HashSet_init_$Init$(InternalHashMap_init_$Create$_0(initialCapacity, loadFactor), $this);
  return $this;
}
function HashSet_init_$Init$_2(initialCapacity, $this) {
  HashSet_init_$Init$_1(initialCapacity, 1, $this);
  return $this;
}
function HashSet_init_$Create$_0(initialCapacity) {
  return HashSet_init_$Init$_2(initialCapacity, objectCreate(protoOf(HashSet)));
}
protoOf(HashSet).k = function(element) {
  return this.t2_1.q1(element, true) == null;
};
protoOf(HashSet).n = function(element) {
  return this.t2_1.l2(element);
};
protoOf(HashSet).p = function() {
  return this.t2_1.i() === 0;
};
protoOf(HashSet).m = function() {
  return this.t2_1.u2();
};
protoOf(HashSet).i = function() {
  return this.t2_1.i();
};
function HashSet() {
}
function computeHashSize($this, capacity) {
  return takeHighestOneBit(imul_0(coerceAtLeast(capacity, 1), 3));
}
function computeShift($this, hashSize) {
  return clz32(hashSize) + 1 | 0;
}
function InternalHashMap_init_$Init$($this) {
  InternalHashMap_init_$Init$_0(8, $this);
  return $this;
}
function InternalHashMap_init_$Create$() {
  return InternalHashMap_init_$Init$(objectCreate(protoOf(InternalHashMap)));
}
function InternalHashMap_init_$Init$_0(initialCapacity, $this) {
  InternalHashMap.call($this, arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_0$1, initialCapacity)), 2, 0);
  return $this;
}
function InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
  InternalHashMap_init_$Init$_0(initialCapacity, $this);
  if (!(loadFactor > 0)) {
    var message2 = "Non-positive load factor: " + loadFactor;
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  return $this;
}
function InternalHashMap_init_$Create$_0(initialCapacity, loadFactor) {
  return InternalHashMap_init_$Init$_1(initialCapacity, loadFactor, objectCreate(protoOf(InternalHashMap)));
}
function _get_capacity__a9k9f3($this) {
  return $this.v2_1.length;
}
function _get_hashSize__tftcho($this) {
  return $this.y2_1.length;
}
function registerModification($this) {
  $this.c3_1 = $this.c3_1 + 1 | 0;
}
function ensureExtraCapacity($this, n) {
  if (shouldCompact($this, n)) {
    rehash($this, _get_hashSize__tftcho($this));
  } else {
    ensureCapacity($this, $this.a3_1 + n | 0);
  }
}
function shouldCompact($this, extraCapacity) {
  var spareCapacity = _get_capacity__a9k9f3($this) - $this.a3_1 | 0;
  var gaps = $this.a3_1 - $this.i() | 0;
  return (spareCapacity < extraCapacity ? (gaps + spareCapacity | 0) >= extraCapacity : false) ? gaps >= (_get_capacity__a9k9f3($this) / 4 | 0) : false;
}
function ensureCapacity($this, minCapacity) {
  if (minCapacity < 0)
    throw RuntimeException_init_$Create$_0("too many elements");
  if (minCapacity > _get_capacity__a9k9f3($this)) {
    var newSize = Companion_instance_5.f3(_get_capacity__a9k9f3($this), minCapacity);
    $this.v2_1 = copyOfUninitializedElements($this.v2_1, newSize);
    var tmp = $this;
    var tmp0_safe_receiver = $this.w2_1;
    tmp.w2_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
    $this.x2_1 = copyOf($this.x2_1, newSize);
    var newHashSize = computeHashSize(Companion_instance_0$1, newSize);
    if (newHashSize > _get_hashSize__tftcho($this)) {
      rehash($this, newHashSize);
    }
  }
}
function allocateValuesArray($this) {
  var curValuesArray = $this.w2_1;
  if (!(curValuesArray == null))
    return curValuesArray;
  var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
  $this.w2_1 = newValuesArray;
  return newValuesArray;
}
function hash($this, key2) {
  return key2 == null ? 0 : imul_0(hashCode(key2), -1640531527) >>> $this.b3_1 | 0;
}
function compact($this) {
  var i = 0;
  var j = 0;
  var valuesArray = $this.w2_1;
  while (i < $this.a3_1) {
    if ($this.x2_1[i] >= 0) {
      $this.v2_1[j] = $this.v2_1[i];
      if (!(valuesArray == null)) {
        valuesArray[j] = valuesArray[i];
      }
      j = j + 1 | 0;
    }
    i = i + 1 | 0;
  }
  resetRange($this.v2_1, j, $this.a3_1);
  if (valuesArray == null)
    ;
  else {
    resetRange(valuesArray, j, $this.a3_1);
  }
  $this.a3_1 = j;
}
function rehash($this, newHashSize) {
  registerModification($this);
  if ($this.a3_1 > $this.d3_1) {
    compact($this);
  }
  if (!(newHashSize === _get_hashSize__tftcho($this))) {
    $this.y2_1 = new Int32Array(newHashSize);
    $this.b3_1 = computeShift(Companion_instance_0$1, newHashSize);
  } else {
    fill($this.y2_1, 0, 0, _get_hashSize__tftcho($this));
  }
  var i = 0;
  while (i < $this.a3_1) {
    var tmp0 = i;
    i = tmp0 + 1 | 0;
    if (!putRehash($this, tmp0)) {
      throw IllegalStateException_init_$Create$_0("This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?");
    }
  }
}
function putRehash($this, i) {
  var hash_0 = hash($this, $this.v2_1[i]);
  var probesLeft = $this.z2_1;
  while (true) {
    var index = $this.y2_1[hash_0];
    if (index === 0) {
      $this.y2_1[hash_0] = i + 1 | 0;
      $this.x2_1[i] = hash_0;
      return true;
    }
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return false;
    var tmp0 = hash_0;
    hash_0 = tmp0 - 1 | 0;
    if (tmp0 === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function findKey($this, key2) {
  var hash_0 = hash($this, key2);
  var probesLeft = $this.z2_1;
  while (true) {
    var index = $this.y2_1[hash_0];
    if (index === 0)
      return -1;
    if (index > 0 ? equals($this.v2_1[index - 1 | 0], key2) : false)
      return index - 1 | 0;
    probesLeft = probesLeft - 1 | 0;
    if (probesLeft < 0)
      return -1;
    var tmp0 = hash_0;
    hash_0 = tmp0 - 1 | 0;
    if (tmp0 === 0)
      hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
  }
}
function addKey($this, key2) {
  $this.l();
  retry:
    while (true) {
      var hash_0 = hash($this, key2);
      var tentativeMaxProbeDistance = coerceAtMost(imul_0($this.z2_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
      var probeDistance = 0;
      while (true) {
        var index = $this.y2_1[hash_0];
        if (index <= 0) {
          if ($this.a3_1 >= _get_capacity__a9k9f3($this)) {
            ensureExtraCapacity($this, 1);
            continue retry;
          }
          var tmp1 = $this.a3_1;
          $this.a3_1 = tmp1 + 1 | 0;
          var putIndex = tmp1;
          $this.v2_1[putIndex] = key2;
          $this.x2_1[putIndex] = hash_0;
          $this.y2_1[hash_0] = putIndex + 1 | 0;
          $this.d3_1 = $this.d3_1 + 1 | 0;
          registerModification($this);
          if (probeDistance > $this.z2_1)
            $this.z2_1 = probeDistance;
          return putIndex;
        }
        if (equals($this.v2_1[index - 1 | 0], key2)) {
          return -index | 0;
        }
        probeDistance = probeDistance + 1 | 0;
        if (probeDistance > tentativeMaxProbeDistance) {
          rehash($this, imul_0(_get_hashSize__tftcho($this), 2));
          continue retry;
        }
        var tmp4 = hash_0;
        hash_0 = tmp4 - 1 | 0;
        if (tmp4 === 0)
          hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      }
    }
}
function contentEquals($this, other) {
  return $this.d3_1 === other.i() ? $this.s2(other.w1()) : false;
}
function Companion_0$1() {
  this.g3_1 = -1640531527;
  this.h3_1 = 8;
  this.i3_1 = 2;
  this.j3_1 = -1;
}
var Companion_instance_0$1;
function Itr(map2) {
  this.k3_1 = map2;
  this.l3_1 = 0;
  this.m3_1 = -1;
  this.n3_1 = this.k3_1.c3_1;
  this.o3();
}
protoOf(Itr).o3 = function() {
  while (this.l3_1 < this.k3_1.a3_1 ? this.k3_1.x2_1[this.l3_1] < 0 : false) {
    this.l3_1 = this.l3_1 + 1 | 0;
  }
};
protoOf(Itr).t = function() {
  return this.l3_1 < this.k3_1.a3_1;
};
protoOf(Itr).p3 = function() {
  if (!(this.k3_1.c3_1 === this.n3_1))
    throw ConcurrentModificationException_init_$Create$();
};
function KeysItr(map2) {
  Itr.call(this, map2);
}
protoOf(KeysItr).u = function() {
  this.p3();
  if (this.l3_1 >= this.k3_1.a3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var tmp1 = this.l3_1;
  this.l3_1 = tmp1 + 1 | 0;
  tmp.m3_1 = tmp1;
  var result = this.k3_1.v2_1[this.m3_1];
  this.o3();
  return result;
};
function EntriesItr(map2) {
  Itr.call(this, map2);
}
protoOf(EntriesItr).u = function() {
  this.p3();
  if (this.l3_1 >= this.k3_1.a3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var tmp1 = this.l3_1;
  this.l3_1 = tmp1 + 1 | 0;
  tmp.m3_1 = tmp1;
  var result = new EntryRef(this.k3_1, this.m3_1);
  this.o3();
  return result;
};
protoOf(EntriesItr).y3 = function() {
  if (this.l3_1 >= this.k3_1.a3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var tmp1 = this.l3_1;
  this.l3_1 = tmp1 + 1 | 0;
  tmp.m3_1 = tmp1;
  var tmp0_safe_receiver = this.k3_1.v2_1[this.m3_1];
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  var tmp0_safe_receiver_0 = ensureNotNull(this.k3_1.w2_1)[this.m3_1];
  var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
  var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  this.o3();
  return result;
};
protoOf(EntriesItr).z3 = function(sb) {
  if (this.l3_1 >= this.k3_1.a3_1)
    throw NoSuchElementException_init_$Create$();
  var tmp = this;
  var tmp1 = this.l3_1;
  this.l3_1 = tmp1 + 1 | 0;
  tmp.m3_1 = tmp1;
  var key2 = this.k3_1.v2_1[this.m3_1];
  if (equals(key2, this.k3_1)) {
    sb.c4("(this Map)");
  } else {
    sb.b4(key2);
  }
  sb.d4(_Char___init__impl__6a9atx(61));
  var value = ensureNotNull(this.k3_1.w2_1)[this.m3_1];
  if (equals(value, this.k3_1)) {
    sb.c4("(this Map)");
  } else {
    sb.b4(value);
  }
  this.o3();
};
function EntryRef(map2, index) {
  this.e4_1 = map2;
  this.f4_1 = index;
}
protoOf(EntryRef).g4 = function() {
  return this.e4_1.v2_1[this.f4_1];
};
protoOf(EntryRef).h4 = function() {
  return ensureNotNull(this.e4_1.w2_1)[this.f4_1];
};
protoOf(EntryRef).equals = function(other) {
  var tmp;
  var tmp_0;
  if (!(other == null) ? isInterface(other, Entry) : false) {
    tmp_0 = equals(other.g4(), this.g4());
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = equals(other.h4(), this.h4());
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EntryRef).hashCode = function() {
  var tmp0_safe_receiver = this.g4();
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
  var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  var tmp0_safe_receiver_0 = this.h4();
  var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
  return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
};
protoOf(EntryRef).toString = function() {
  return "" + this.g4() + "=" + this.h4();
};
function InternalHashMap(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
  this.v2_1 = keysArray;
  this.w2_1 = valuesArray;
  this.x2_1 = presenceArray;
  this.y2_1 = hashArray;
  this.z2_1 = maxProbeDistance;
  this.a3_1 = length;
  this.b3_1 = computeShift(Companion_instance_0$1, _get_hashSize__tftcho(this));
  this.c3_1 = 0;
  this.d3_1 = 0;
  this.e3_1 = false;
}
protoOf(InternalHashMap).i = function() {
  return this.d3_1;
};
protoOf(InternalHashMap).v1 = function(key2) {
  var index = findKey(this, key2);
  if (index < 0)
    return null;
  return ensureNotNull(this.w2_1)[index];
};
protoOf(InternalHashMap).l2 = function(key2) {
  return findKey(this, key2) >= 0;
};
protoOf(InternalHashMap).q1 = function(key2, value) {
  var index = addKey(this, key2);
  var valuesArray = allocateValuesArray(this);
  if (index < 0) {
    var oldValue = valuesArray[(-index | 0) - 1 | 0];
    valuesArray[(-index | 0) - 1 | 0] = value;
    return oldValue;
  } else {
    valuesArray[index] = value;
    return null;
  }
};
protoOf(InternalHashMap).equals = function(other) {
  var tmp;
  if (other === this) {
    tmp = true;
  } else {
    var tmp_0;
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp_0 = contentEquals(this, other);
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  return tmp;
};
protoOf(InternalHashMap).hashCode = function() {
  var result = 0;
  var it = this.o2();
  while (it.t()) {
    result = result + it.y3() | 0;
  }
  return result;
};
protoOf(InternalHashMap).toString = function() {
  var sb = StringBuilder_init_$Create$(2 + imul_0(this.d3_1, 3) | 0);
  sb.c4("{");
  var i = 0;
  var it = this.o2();
  while (it.t()) {
    if (i > 0) {
      sb.c4(", ");
    }
    it.z3(sb);
    i = i + 1 | 0;
  }
  sb.c4("}");
  return sb.toString();
};
protoOf(InternalHashMap).l = function() {
  if (this.e3_1)
    throw UnsupportedOperationException_init_$Create$();
};
protoOf(InternalHashMap).r2 = function(entry) {
  var index = findKey(this, entry.g4());
  if (index < 0)
    return false;
  return equals(ensureNotNull(this.w2_1)[index], entry.h4());
};
protoOf(InternalHashMap).i4 = function(entry) {
  return this.r2(isInterface(entry, Entry) ? entry : THROW_CCE());
};
protoOf(InternalHashMap).u2 = function() {
  return new KeysItr(this);
};
protoOf(InternalHashMap).o2 = function() {
  return new EntriesItr(this);
};
function InternalMap() {
}
function LinkedHashMap_init_$Init$($this) {
  HashMap_init_$Init$_0($this);
  LinkedHashMap.call($this);
  return $this;
}
function LinkedHashMap_init_$Create$() {
  return LinkedHashMap_init_$Init$(objectCreate(protoOf(LinkedHashMap)));
}
function LinkedHashMap_init_$Init$_0(initialCapacity, $this) {
  HashMap_init_$Init$_2(initialCapacity, $this);
  LinkedHashMap.call($this);
  return $this;
}
function LinkedHashMap_init_$Create$_0(initialCapacity) {
  return LinkedHashMap_init_$Init$_0(initialCapacity, objectCreate(protoOf(LinkedHashMap)));
}
function LinkedHashMap() {
}
function LinkedHashSet_init_$Init$($this) {
  HashSet_init_$Init$_0($this);
  LinkedHashSet.call($this);
  return $this;
}
function LinkedHashSet_init_$Create$() {
  return LinkedHashSet_init_$Init$(objectCreate(protoOf(LinkedHashSet)));
}
function LinkedHashSet_init_$Init$_0(initialCapacity, loadFactor, $this) {
  HashSet_init_$Init$_1(initialCapacity, loadFactor, $this);
  LinkedHashSet.call($this);
  return $this;
}
function LinkedHashSet_init_$Init$_1(initialCapacity, $this) {
  LinkedHashSet_init_$Init$_0(initialCapacity, 1, $this);
  return $this;
}
function LinkedHashSet_init_$Create$_0(initialCapacity) {
  return LinkedHashSet_init_$Init$_1(initialCapacity, objectCreate(protoOf(LinkedHashSet)));
}
function LinkedHashSet() {
}
function KProperty1() {
}
function reset(_this__u8e3s4) {
  _this__u8e3s4.lastIndex = 0;
}
function StringBuilder_init_$Init$(capacity, $this) {
  StringBuilder_init_$Init$_0($this);
  return $this;
}
function StringBuilder_init_$Create$(capacity) {
  return StringBuilder_init_$Init$(capacity, objectCreate(protoOf(StringBuilder)));
}
function StringBuilder_init_$Init$_0($this) {
  StringBuilder.call($this, "");
  return $this;
}
function StringBuilder_init_$Create$_0() {
  return StringBuilder_init_$Init$_0(objectCreate(protoOf(StringBuilder)));
}
function StringBuilder(content) {
  this.a4_1 = !(content === void 0) ? content : "";
}
protoOf(StringBuilder).a = function() {
  return this.a4_1.length;
};
protoOf(StringBuilder).b = function(index) {
  var this_0 = this.a4_1;
  var tmp;
  if (index >= 0 ? index <= get_lastIndex_1(this_0) : false) {
    tmp = charSequenceGet(this_0, index);
  } else {
    throw IndexOutOfBoundsException_init_$Create$_0("index: " + index + ", length: " + this.a() + "}");
  }
  return tmp;
};
protoOf(StringBuilder).c = function(startIndex, endIndex) {
  return this.a4_1.substring(startIndex, endIndex);
};
protoOf(StringBuilder).d4 = function(value) {
  this.a4_1 = this.a4_1 + toString_0(value);
  return this;
};
protoOf(StringBuilder).j4 = function(value) {
  this.a4_1 = this.a4_1 + toString_1(value);
  return this;
};
protoOf(StringBuilder).b4 = function(value) {
  this.a4_1 = this.a4_1 + toString_1(value);
  return this;
};
protoOf(StringBuilder).c4 = function(value) {
  var tmp = this;
  var tmp_0 = this.a4_1;
  tmp.a4_1 = tmp_0 + (value == null ? "null" : value);
  return this;
};
protoOf(StringBuilder).toString = function() {
  return this.a4_1;
};
function uppercaseChar(_this__u8e3s4) {
  var uppercase = toString_0(_this__u8e3s4).toUpperCase();
  return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
}
function isWhitespace(_this__u8e3s4) {
  return isWhitespaceImpl(_this__u8e3s4);
}
function toString$1(_this__u8e3s4, radix) {
  return _this__u8e3s4.toString(checkRadix(radix));
}
function checkRadix(radix) {
  if (!(2 <= radix ? radix <= 36 : false)) {
    throw IllegalArgumentException_init_$Create$_0("radix " + radix + " was not in valid range 2..36");
  }
  return radix;
}
function toInt(_this__u8e3s4) {
  var tmp0_elvis_lhs = toIntOrNull(_this__u8e3s4);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    numberFormatError(_this__u8e3s4);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function toInt_0(_this__u8e3s4, radix) {
  var tmp0_elvis_lhs = toIntOrNull_0(_this__u8e3s4, radix);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    numberFormatError(_this__u8e3s4);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function digitOf(char, radix) {
  var it = (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 ? Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 : false) ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
  return it >= radix ? -1 : it;
}
function Regex_init_$Init$(pattern, $this) {
  Regex.call($this, pattern, emptySet());
  return $this;
}
function Regex_init_$Create$(pattern) {
  return Regex_init_$Init$(pattern, objectCreate(protoOf(Regex)));
}
function Companion_1$1() {
  Companion_instance_1$1 = this;
  this.k4_1 = new RegExp("[\\\\^$*+?.()|[\\]{}]", "g");
  this.l4_1 = new RegExp("[\\\\$]", "g");
  this.m4_1 = new RegExp("\\$", "g");
}
var Companion_instance_1$1;
function Companion_getInstance_1() {
  if (Companion_instance_1$1 == null)
    new Companion_1$1();
  return Companion_instance_1$1;
}
function Regex(pattern, options) {
  Companion_getInstance_1();
  this.n4_1 = pattern;
  this.o4_1 = toSet(options);
  this.p4_1 = new RegExp(pattern, toFlags(options, "gu"));
  this.q4_1 = null;
  this.r4_1 = null;
}
protoOf(Regex).s4 = function(input) {
  reset(this.p4_1);
  var match = this.p4_1.exec(toString_2(input));
  return (!(match == null) ? match.index === 0 : false) ? this.p4_1.lastIndex === charSequenceLength(input) : false;
};
protoOf(Regex).toString = function() {
  return this.p4_1.toString();
};
function toFlags(_this__u8e3s4, prepend) {
  return joinToString_0(_this__u8e3s4, "", prepend, VOID, VOID, VOID, toFlags$lambda);
}
function toFlags$lambda(it) {
  return it.v4_1;
}
function contentEquals_0(_this__u8e3s4, other) {
  return contentEqualsImpl(_this__u8e3s4, other);
}
function sam$kotlin_Comparator$0$1(function_0) {
  this.w4_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0$1).x4 = function(a, b) {
  return this.w4_1(a, b);
};
protoOf(sam$kotlin_Comparator$0$1).compare = function(a, b) {
  return this.x4(a, b);
};
function isBlank(_this__u8e3s4) {
  var tmp;
  if (charSequenceLength(_this__u8e3s4) === 0) {
    tmp = true;
  } else {
    var tmp$ret$0;
    $l$block_0: {
      var this_0 = get_indices(_this__u8e3s4);
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.p();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        if (!isWhitespace(charSequenceGet(_this__u8e3s4, element))) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    tmp = tmp$ret$0;
  }
  return tmp;
}
function startsWith(_this__u8e3s4, prefix, startIndex, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (!ignoreCase) {
    return _this__u8e3s4.startsWith(prefix, startIndex);
  } else
    return regionMatches(_this__u8e3s4, startIndex, prefix, 0, prefix.length, ignoreCase);
}
function startsWith_0(_this__u8e3s4, prefix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (!ignoreCase) {
    return _this__u8e3s4.startsWith(prefix, 0);
  } else
    return regionMatches(_this__u8e3s4, 0, prefix, 0, prefix.length, ignoreCase);
}
function endsWith(_this__u8e3s4, suffix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (!ignoreCase) {
    return _this__u8e3s4.endsWith(suffix);
  } else
    return regionMatches(_this__u8e3s4, _this__u8e3s4.length - suffix.length | 0, suffix, 0, suffix.length, ignoreCase);
}
function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
}
function asSequence(_this__u8e3s4) {
  if (_this__u8e3s4.length === 0)
    return emptySequence();
  return new _no_name_provided__qut3iv(_this__u8e3s4);
}
function get_lastIndex(_this__u8e3s4) {
  return _this__u8e3s4.length - 1 | 0;
}
function single(_this__u8e3s4) {
  var tmp;
  switch (_this__u8e3s4.length) {
    case 0:
      throw NoSuchElementException_init_$Create$_0("Array is empty.");
    case 1:
      tmp = _this__u8e3s4[0];
      break;
    default:
      throw IllegalArgumentException_init_$Create$_0("Array has more than one element.");
  }
  return tmp;
}
function contains(_this__u8e3s4, element) {
  return indexOf(_this__u8e3s4, element) >= 0;
}
function indexOf(_this__u8e3s4, element) {
  if (element == null) {
    var inductionVariable = 0;
    var last2 = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable <= last2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4[index] == null) {
          return index;
        }
      } while (inductionVariable <= last2);
  } else {
    var inductionVariable_0 = 0;
    var last_0 = _this__u8e3s4.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (equals(element, _this__u8e3s4[index_0])) {
          return index_0;
        }
      } while (inductionVariable_0 <= last_0);
  }
  return -1;
}
function toCollection(_this__u8e3s4, destination) {
  var inductionVariable = 0;
  var last2 = _this__u8e3s4.length;
  while (inductionVariable < last2) {
    var item = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    destination.k(item);
  }
  return destination;
}
function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform2) {
  separator = separator === VOID ? ", " : separator;
  prefix = prefix === VOID ? "" : prefix;
  postfix = postfix === VOID ? "" : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? "..." : truncated;
  transform2 = transform2 === VOID ? null : transform2;
  return joinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform2).toString();
}
function joinTo(_this__u8e3s4, buffer2, separator, prefix, postfix, limit, truncated, transform2) {
  separator = separator === VOID ? ", " : separator;
  prefix = prefix === VOID ? "" : prefix;
  postfix = postfix === VOID ? "" : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? "..." : truncated;
  transform2 = transform2 === VOID ? null : transform2;
  buffer2.j4(prefix);
  var count = 0;
  var inductionVariable = 0;
  var last2 = _this__u8e3s4.length;
  $l$loop:
    while (inductionVariable < last2) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer2.j4(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer2, element, transform2);
      } else
        break $l$loop;
    }
  if (limit >= 0 ? count > limit : false) {
    buffer2.j4(truncated);
  }
  buffer2.j4(postfix);
  return buffer2;
}
function _no_name_provided__qut3iv($this_asSequence) {
  this.y4_1 = $this_asSequence;
}
protoOf(_no_name_provided__qut3iv).m = function() {
  return arrayIterator(this.y4_1);
};
function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform2) {
  separator = separator === VOID ? ", " : separator;
  prefix = prefix === VOID ? "" : prefix;
  postfix = postfix === VOID ? "" : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? "..." : truncated;
  transform2 = transform2 === VOID ? null : transform2;
  return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform2).toString();
}
function joinTo_0(_this__u8e3s4, buffer2, separator, prefix, postfix, limit, truncated, transform2) {
  separator = separator === VOID ? ", " : separator;
  prefix = prefix === VOID ? "" : prefix;
  postfix = postfix === VOID ? "" : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? "..." : truncated;
  transform2 = transform2 === VOID ? null : transform2;
  buffer2.j4(prefix);
  var count = 0;
  var tmp0_iterator = _this__u8e3s4.m();
  $l$loop:
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      count = count + 1 | 0;
      if (count > 1) {
        buffer2.j4(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer2, element, transform2);
      } else
        break $l$loop;
    }
  if (limit >= 0 ? count > limit : false) {
    buffer2.j4(truncated);
  }
  buffer2.j4(postfix);
  return buffer2;
}
function last(_this__u8e3s4) {
  if (_this__u8e3s4.p())
    throw NoSuchElementException_init_$Create$_0("List is empty.");
  return _this__u8e3s4.v(get_lastIndex_0(_this__u8e3s4));
}
function firstOrNull(_this__u8e3s4) {
  return _this__u8e3s4.p() ? null : _this__u8e3s4.v(0);
}
function sorted(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    if (_this__u8e3s4.i() <= 1)
      return toList(_this__u8e3s4);
    var tmp = copyToArray(_this__u8e3s4);
    var this_0 = isArray(tmp) ? tmp : THROW_CCE();
    sort_0(this_0);
    return asList(this_0);
  }
  var this_1 = toMutableList_0(_this__u8e3s4);
  sort(this_1);
  return this_1;
}
function first(_this__u8e3s4) {
  if (_this__u8e3s4.p())
    throw NoSuchElementException_init_$Create$_0("List is empty.");
  return _this__u8e3s4.v(0);
}
function toMutableList(_this__u8e3s4) {
  return ArrayList_init_$Create$_1(_this__u8e3s4);
}
function sortedWith(_this__u8e3s4, comparator) {
  if (isInterface(_this__u8e3s4, Collection)) {
    if (_this__u8e3s4.i() <= 1)
      return toList(_this__u8e3s4);
    var tmp = copyToArray(_this__u8e3s4);
    var this_0 = isArray(tmp) ? tmp : THROW_CCE();
    sortWith_0(this_0, comparator);
    return asList(this_0);
  }
  var this_1 = toMutableList_0(_this__u8e3s4);
  sortWith(this_1, comparator);
  return this_1;
}
function toList(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    var tmp;
    switch (_this__u8e3s4.i()) {
      case 0:
        tmp = emptyList();
        break;
      case 1:
        var tmp_0;
        if (isInterface(_this__u8e3s4, List)) {
          tmp_0 = _this__u8e3s4.v(0);
        } else {
          tmp_0 = _this__u8e3s4.m().u();
        }
        tmp = listOf(tmp_0);
        break;
      default:
        tmp = toMutableList(_this__u8e3s4);
        break;
    }
    return tmp;
  }
  return optimizeReadOnlyList(toMutableList_0(_this__u8e3s4));
}
function toMutableList_0(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection))
    return toMutableList(_this__u8e3s4);
  return toCollection_0(_this__u8e3s4, ArrayList_init_$Create$());
}
function toCollection_0(_this__u8e3s4, destination) {
  var tmp0_iterator = _this__u8e3s4.m();
  while (tmp0_iterator.t()) {
    var item = tmp0_iterator.u();
    destination.k(item);
  }
  return destination;
}
function toSet(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection)) {
    var tmp;
    switch (_this__u8e3s4.i()) {
      case 0:
        tmp = emptySet();
        break;
      case 1:
        var tmp_0;
        if (isInterface(_this__u8e3s4, List)) {
          tmp_0 = _this__u8e3s4.v(0);
        } else {
          tmp_0 = _this__u8e3s4.m().u();
        }
        tmp = setOf(tmp_0);
        break;
      default:
        tmp = toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$_0(mapCapacity(_this__u8e3s4.i())));
        break;
    }
    return tmp;
  }
  return optimizeReadOnlySet(toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$()));
}
function downTo(_this__u8e3s4, to2) {
  return Companion_instance_10.z4(_this__u8e3s4, to2, -1);
}
function coerceAtMost(_this__u8e3s4, maximumValue) {
  return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
}
function coerceAtLeast(_this__u8e3s4, minimumValue) {
  return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
}
function toList_0(_this__u8e3s4) {
  var it = _this__u8e3s4.m();
  if (!it.t())
    return emptyList();
  var element = it.u();
  if (!it.t())
    return listOf(element);
  var dst = ArrayList_init_$Create$();
  dst.k(element);
  while (it.t()) {
    dst.k(it.u());
  }
  return dst;
}
function firstOrNull_0(_this__u8e3s4) {
  var iterator2 = _this__u8e3s4.m();
  if (!iterator2.t())
    return null;
  return iterator2.u();
}
function map(_this__u8e3s4, transform2) {
  return new TransformingSequence(_this__u8e3s4, transform2);
}
function elementAtOrNull(_this__u8e3s4, index) {
  if (index < 0)
    return null;
  var iterator2 = _this__u8e3s4.m();
  var count = 0;
  while (iterator2.t()) {
    var element = iterator2.u();
    var tmp0 = count;
    count = tmp0 + 1 | 0;
    if (index === tmp0)
      return element;
  }
  return null;
}
function toMutableList_1(_this__u8e3s4) {
  return toCollection_1(_this__u8e3s4, ArrayList_init_$Create$());
}
function takeWhile(_this__u8e3s4, predicate) {
  return new TakeWhileSequence(_this__u8e3s4, predicate);
}
function drop(_this__u8e3s4, n) {
  if (!(n >= 0)) {
    var message2 = "Requested element count " + n + " is less than zero.";
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  var tmp;
  if (n === 0) {
    tmp = _this__u8e3s4;
  } else {
    if (isInterface(_this__u8e3s4, DropTakeSequence)) {
      tmp = _this__u8e3s4.a5(n);
    } else {
      tmp = new DropSequence(_this__u8e3s4, n);
    }
  }
  return tmp;
}
function dropWhile(_this__u8e3s4, predicate) {
  return new DropWhileSequence(_this__u8e3s4, predicate);
}
function filterIndexed(_this__u8e3s4, predicate) {
  var tmp = new IndexingSequence(_this__u8e3s4);
  var tmp_0 = new FilteringSequence(tmp, true, filterIndexed$lambda(predicate));
  return new TransformingSequence(tmp_0, filterIndexed$lambda_0);
}
function take(_this__u8e3s4, n) {
  if (!(n >= 0)) {
    var message2 = "Requested element count " + n + " is less than zero.";
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  var tmp;
  if (n === 0) {
    tmp = emptySequence();
  } else {
    if (isInterface(_this__u8e3s4, DropTakeSequence)) {
      tmp = _this__u8e3s4.b5(n);
    } else {
      tmp = new TakeSequence(_this__u8e3s4, n);
    }
  }
  return tmp;
}
function toCollection_1(_this__u8e3s4, destination) {
  var tmp0_iterator = _this__u8e3s4.m();
  while (tmp0_iterator.t()) {
    var item = tmp0_iterator.u();
    destination.k(item);
  }
  return destination;
}
function filterIndexed$lambda($predicate) {
  return function(it) {
    return $predicate(it.c5_1, it.d5_1);
  };
}
function filterIndexed$lambda_0(it) {
  return it.d5_1;
}
function getOrNull(_this__u8e3s4, index) {
  return (index >= 0 ? index <= get_lastIndex_1(_this__u8e3s4) : false) ? charSequenceGet(_this__u8e3s4, index) : null;
}
function _Char___init__impl__6a9atx(value) {
  return value;
}
function _get_value__a43j40($this) {
  return $this;
}
function _Char___init__impl__6a9atx_0(code) {
  var tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
  return _Char___init__impl__6a9atx(tmp$ret$0);
}
function Char__compareTo_impl_ypi4mb($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__compareTo_impl_ypi4mb_0($this, other) {
  return Char__compareTo_impl_ypi4mb($this.e5_1, other instanceof Char ? other.e5_1 : THROW_CCE());
}
function Char__minus_impl_a2frrh($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__rangeTo_impl_tkncvp($this, other) {
  return new CharRange($this, other);
}
function Char__toInt_impl_vasixd($this) {
  return _get_value__a43j40($this);
}
function Char__equals_impl_x6719k($this, other) {
  if (!(other instanceof Char))
    return false;
  return _get_value__a43j40($this) === _get_value__a43j40(other.e5_1);
}
function Char__hashCode_impl_otmys($this) {
  return _get_value__a43j40($this);
}
function toString_0($this) {
  return String.fromCharCode(_get_value__a43j40($this));
}
function Companion_2$1() {
  Companion_instance_2$1 = this;
  this.f5_1 = _Char___init__impl__6a9atx(0);
  this.g5_1 = _Char___init__impl__6a9atx(65535);
  this.h5_1 = _Char___init__impl__6a9atx(55296);
  this.i5_1 = _Char___init__impl__6a9atx(56319);
  this.j5_1 = _Char___init__impl__6a9atx(56320);
  this.k5_1 = _Char___init__impl__6a9atx(57343);
  this.l5_1 = _Char___init__impl__6a9atx(55296);
  this.m5_1 = _Char___init__impl__6a9atx(57343);
  this.n5_1 = 2;
  this.o5_1 = 16;
}
var Companion_instance_2$1;
function Companion_getInstance_2$1() {
  if (Companion_instance_2$1 == null)
    new Companion_2$1();
  return Companion_instance_2$1;
}
function Char(value) {
  Companion_getInstance_2$1();
  this.e5_1 = value;
}
protoOf(Char).p5 = function(other) {
  return Char__compareTo_impl_ypi4mb(this.e5_1, other);
};
protoOf(Char).d = function(other) {
  return Char__compareTo_impl_ypi4mb_0(this, other);
};
protoOf(Char).equals = function(other) {
  return Char__equals_impl_x6719k(this.e5_1, other);
};
protoOf(Char).hashCode = function() {
  return Char__hashCode_impl_otmys(this.e5_1);
};
protoOf(Char).toString = function() {
  return toString_0(this.e5_1);
};
function List() {
}
function Collection() {
}
function Entry() {
}
function Map_0() {
}
function Set$1() {
}
function Companion_3$1() {
}
function Enum(name, ordinal) {
  this.q5_1 = name;
  this.r5_1 = ordinal;
}
protoOf(Enum).s5 = function(other) {
  return compareTo_0(this.r5_1, other.r5_1);
};
protoOf(Enum).d = function(other) {
  return this.s5(other instanceof Enum ? other : THROW_CCE());
};
protoOf(Enum).equals = function(other) {
  return this === other;
};
protoOf(Enum).hashCode = function() {
  return identityHashCode(this);
};
protoOf(Enum).toString = function() {
  return this.q5_1;
};
function toString_1(_this__u8e3s4) {
  var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_2(_this__u8e3s4);
  return tmp1_elvis_lhs == null ? "null" : tmp1_elvis_lhs;
}
function implement(interfaces) {
  var maxSize = 1;
  var masks = [];
  var inductionVariable = 0;
  var last2 = interfaces.length;
  while (inductionVariable < last2) {
    var i = interfaces[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var currentSize = maxSize;
    var tmp1_elvis_lhs = i.prototype.$imask$;
    var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
    if (!(imask == null)) {
      masks.push(imask);
      currentSize = imask.length;
    }
    var iid2 = i.$metadata$.iid;
    var tmp;
    if (iid2 == null) {
      tmp = null;
    } else {
      tmp = bitMaskWith(iid2);
    }
    var iidImask = tmp;
    if (!(iidImask == null)) {
      masks.push(iidImask);
      currentSize = Math.max(currentSize, iidImask.length);
    }
    if (currentSize > maxSize) {
      maxSize = currentSize;
    }
  }
  return compositeBitMask(maxSize, masks);
}
function bitMaskWith(activeBit) {
  var numberIndex = activeBit >> 5;
  var intArray = new Int32Array(numberIndex + 1 | 0);
  var positionInNumber = activeBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
  return intArray;
}
function compositeBitMask(capacity, masks) {
  var tmp = 0;
  var tmp_0 = new Int32Array(capacity);
  while (tmp < capacity) {
    var tmp_1 = tmp;
    var result = 0;
    var inductionVariable = 0;
    var last2 = masks.length;
    while (inductionVariable < last2) {
      var mask = masks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (tmp_1 < mask.length) {
        result = result | mask[tmp_1];
      }
    }
    tmp_0[tmp_1] = result;
    tmp = tmp + 1 | 0;
  }
  return tmp_0;
}
function isBitSet(_this__u8e3s4, possibleActiveBit) {
  var numberIndex = possibleActiveBit >> 5;
  if (numberIndex > _this__u8e3s4.length)
    return false;
  var positionInNumber = possibleActiveBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
}
function fillArrayVal(array, initValue) {
  var inductionVariable = 0;
  var last2 = array.length - 1 | 0;
  if (inductionVariable <= last2)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      array[i] = initValue;
    } while (!(i === last2));
  return array;
}
function arrayIterator(array) {
  return new arrayIterator$1(array);
}
function charArrayOf(arr) {
  var type = "CharArray";
  var array = new Uint16Array(arr);
  array.$type$ = type;
  return array;
}
function arrayIterator$1($array) {
  this.u5_1 = $array;
  this.t5_1 = 0;
}
protoOf(arrayIterator$1).t = function() {
  return !(this.t5_1 === this.u5_1.length);
};
protoOf(arrayIterator$1).u = function() {
  var tmp;
  if (!(this.t5_1 === this.u5_1.length)) {
    var tmp1 = this.t5_1;
    this.t5_1 = tmp1 + 1 | 0;
    tmp = this.u5_1[tmp1];
  } else {
    throw NoSuchElementException_init_$Create$_0("" + this.t5_1);
  }
  return tmp;
};
function get_buf() {
  _init_properties_bitUtils_kt__nfcg4k();
  return buf;
}
var buf;
function get_bufFloat64() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufFloat64;
}
var bufFloat64;
function get_bufInt32() {
  _init_properties_bitUtils_kt__nfcg4k();
  return bufInt32;
}
var bufInt32;
function get_lowIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return lowIndex;
}
var lowIndex;
function get_highIndex() {
  _init_properties_bitUtils_kt__nfcg4k();
  return highIndex;
}
var highIndex;
function getNumberHashCode(obj) {
  _init_properties_bitUtils_kt__nfcg4k();
  if ((obj | 0) === obj) {
    return numberToInt(obj);
  }
  get_bufFloat64()[0] = obj;
  return imul_0(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
}
var properties_initialized_bitUtils_kt_i2bo3e;
function _init_properties_bitUtils_kt__nfcg4k() {
  if (!properties_initialized_bitUtils_kt_i2bo3e) {
    properties_initialized_bitUtils_kt_i2bo3e = true;
    buf = new ArrayBuffer(8);
    bufFloat64 = new Float64Array(get_buf());
    new Float32Array(get_buf());
    bufInt32 = new Int32Array(get_buf());
    get_bufFloat64()[0] = -1;
    lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
    highIndex = 1 - get_lowIndex() | 0;
  }
}
function charSequenceGet(a, index) {
  var tmp;
  if (isString(a)) {
    var code = a.charCodeAt(index);
    var tmp_0;
    Companion_getInstance_2$1();
    var this_0 = _Char___init__impl__6a9atx(0);
    if (code < Char__toInt_impl_vasixd(this_0)) {
      tmp_0 = true;
    } else {
      Companion_getInstance_2$1();
      var this_1 = _Char___init__impl__6a9atx(65535);
      tmp_0 = code > Char__toInt_impl_vasixd(this_1);
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$_0("Invalid Char code: " + code);
    }
    tmp = numberToChar(code);
  } else {
    tmp = a.b(index);
  }
  return tmp;
}
function isString(a) {
  return typeof a === "string";
}
function charSequenceLength(a) {
  var tmp;
  if (isString(a)) {
    tmp = a.length;
  } else {
    tmp = a.a();
  }
  return tmp;
}
function charSequenceSubSequence(a, startIndex, endIndex) {
  var tmp;
  if (isString(a)) {
    tmp = a.substring(startIndex, endIndex);
  } else {
    tmp = a.c(startIndex, endIndex);
  }
  return tmp;
}
function arrayToString(array) {
  return joinToString(array, ", ", "[", "]", VOID, VOID, arrayToString$lambda);
}
function arrayToString$lambda(it) {
  return toString_2(it);
}
function compareTo_0(a, b) {
  var tmp;
  switch (typeof a) {
    case "number":
      var tmp_0;
      if (typeof b === "number") {
        tmp_0 = doubleCompareTo(a, b);
      } else {
        if (b instanceof Long) {
          tmp_0 = doubleCompareTo(a, b.x5());
        } else {
          tmp_0 = primitiveCompareTo(a, b);
        }
      }
      tmp = tmp_0;
      break;
    case "string":
    case "boolean":
      tmp = primitiveCompareTo(a, b);
      break;
    default:
      tmp = compareToDoNotIntrinsicify(a, b);
      break;
  }
  return tmp;
}
function doubleCompareTo(a, b) {
  var tmp;
  if (a < b) {
    tmp = -1;
  } else if (a > b) {
    tmp = 1;
  } else if (a === b) {
    var tmp_0;
    if (a !== 0) {
      tmp_0 = 0;
    } else {
      var ia = 1 / a;
      var tmp_1;
      if (ia === 1 / b) {
        tmp_1 = 0;
      } else {
        if (ia < 0) {
          tmp_1 = -1;
        } else {
          tmp_1 = 1;
        }
      }
      tmp_0 = tmp_1;
    }
    tmp = tmp_0;
  } else if (a !== a) {
    tmp = b !== b ? 0 : 1;
  } else {
    tmp = -1;
  }
  return tmp;
}
function primitiveCompareTo(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function compareToDoNotIntrinsicify(a, b) {
  return a.d(b);
}
function identityHashCode(obj) {
  return getObjectHashCode(obj);
}
function getObjectHashCode(obj) {
  if (!("kotlinHashCodeValue$" in obj)) {
    var hash2 = calculateRandomHash();
    var descriptor = new Object();
    descriptor.value = hash2;
    descriptor.enumerable = false;
    Object.defineProperty(obj, "kotlinHashCodeValue$", descriptor);
  }
  return obj["kotlinHashCodeValue$"];
}
function calculateRandomHash() {
  return Math.random() * 4294967296 | 0;
}
function toString_2(o) {
  var tmp;
  if (o == null) {
    tmp = "null";
  } else if (isArrayish(o)) {
    tmp = "[...]";
  } else if (!(typeof o.toString === "function")) {
    tmp = anyToString(o);
  } else {
    tmp = o.toString();
  }
  return tmp;
}
function anyToString(o) {
  return Object.prototype.toString.call(o);
}
function hashCode(obj) {
  if (obj == null)
    return 0;
  var typeOf = typeof obj;
  var tmp;
  switch (typeOf) {
    case "object":
      tmp = "function" === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
      break;
    case "function":
      tmp = getObjectHashCode(obj);
      break;
    case "number":
      tmp = getNumberHashCode(obj);
      break;
    case "boolean":
      tmp = getBooleanHashCode(obj);
      break;
    case "string":
      tmp = getStringHashCode(String(obj));
      break;
    case "bigint":
      tmp = getBigIntHashCode(obj);
      break;
    case "symbol":
      tmp = getSymbolHashCode(obj);
      break;
    default:
      tmp = function() {
        throw new Error("Unexpected typeof `" + typeOf + "`");
      }();
      break;
  }
  return tmp;
}
function getBooleanHashCode(value) {
  return value ? 1231 : 1237;
}
function getStringHashCode(str) {
  var hash2 = 0;
  var length = str.length;
  var inductionVariable = 0;
  var last2 = length - 1 | 0;
  if (inductionVariable <= last2)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var code = str.charCodeAt(i);
      hash2 = imul_0(hash2, 31) + code | 0;
    } while (!(i === last2));
  return hash2;
}
function getBigIntHashCode(value) {
  var shiftNumber = BigInt(32);
  var MASK = BigInt(4294967295);
  var bigNumber = value < 0 ? -value : value;
  var hashCode2 = 0;
  var signum = value < 0 ? -1 : 1;
  while (bigNumber != 0) {
    var chunk = Number(bigNumber & MASK);
    hashCode2 = imul_0(31, hashCode2) + chunk | 0;
    bigNumber = bigNumber >> shiftNumber;
  }
  return imul_0(hashCode2, signum);
}
function getSymbolHashCode(value) {
  var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
  var cachedHashCode = hashCodeMap.get(value);
  if (cachedHashCode !== VOID)
    return cachedHashCode;
  var hash2 = calculateRandomHash();
  hashCodeMap.set(value, hash2);
  return hash2;
}
function symbolIsSharable(symbol) {
  return Symbol.keyFor(symbol) != VOID;
}
function getSymbolMap() {
  if (symbolMap === VOID) {
    symbolMap = /* @__PURE__ */ new Map();
  }
  return symbolMap;
}
function getSymbolWeakMap() {
  if (symbolWeakMap === VOID) {
    symbolWeakMap = /* @__PURE__ */ new WeakMap();
  }
  return symbolWeakMap;
}
var symbolMap;
var symbolWeakMap;
function equals(obj1, obj2) {
  if (obj1 == null) {
    return obj2 == null;
  }
  if (obj2 == null) {
    return false;
  }
  if (typeof obj1 === "object" ? typeof obj1.equals === "function" : false) {
    return obj1.equals(obj2);
  }
  if (obj1 !== obj1) {
    return obj2 !== obj2;
  }
  if (typeof obj1 === "number" ? typeof obj2 === "number" : false) {
    var tmp;
    if (obj1 === obj2) {
      var tmp_0;
      if (obj1 !== 0) {
        tmp_0 = true;
      } else {
        var tmp_1 = 1 / obj1;
        tmp_0 = tmp_1 === 1 / obj2;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  return obj1 === obj2;
}
function captureStack(instance, constructorFunction) {
  if (Error.captureStackTrace != null) {
    Error.captureStackTrace(instance, constructorFunction);
  } else {
    instance.stack = new Error().stack;
  }
}
function protoOf(constructor) {
  return constructor.prototype;
}
function defineProp(obj, name, getter, setter) {
  return Object.defineProperty(obj, name, { configurable: true, get: getter, set: setter });
}
function objectCreate(proto) {
  return Object.create(proto);
}
function extendThrowable(this_, message2, cause) {
  Error.call(this_);
  setPropertiesToThrowableInstance(this_, message2, cause);
}
function setPropertiesToThrowableInstance(this_, message2, cause) {
  var errorInfo = calculateErrorInfo(Object.getPrototypeOf(this_));
  if ((errorInfo & 1) === 0) {
    var tmp;
    if (message2 == null) {
      var tmp_0;
      if (!(message2 === null)) {
        var tmp1_elvis_lhs = cause == null ? null : cause.toString();
        tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
      } else {
        tmp_0 = VOID;
      }
      tmp = tmp_0;
    } else {
      tmp = message2;
    }
    this_.message = tmp;
  }
  if ((errorInfo & 2) === 0) {
    this_.cause = cause;
  }
  this_.name = Object.getPrototypeOf(this_).constructor.name;
}
function ensureNotNull(v) {
  var tmp;
  if (v == null) {
    THROW_NPE();
  } else {
    tmp = v;
  }
  return tmp;
}
function THROW_NPE() {
  throw NullPointerException_init_$Create$();
}
function THROW_CCE() {
  throw ClassCastException_init_$Create$();
}
function lazy(initializer) {
  return new UnsafeLazyImpl(initializer);
}
function fillFrom(src, dst) {
  var srcLen = src.length;
  var dstLen = dst.length;
  var index = 0;
  var arr = dst;
  while (index < srcLen ? index < dstLen : false) {
    var tmp = index;
    var tmp0 = index;
    index = tmp0 + 1 | 0;
    arr[tmp] = src[tmp0];
  }
  return dst;
}
function arrayCopyResize(source2, newSize, defaultValue) {
  var result = source2.slice(0, newSize);
  if (source2.$type$ !== void 0) {
    result.$type$ = source2.$type$;
  }
  var index = source2.length;
  if (newSize > index) {
    result.length = newSize;
    while (index < newSize) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      result[tmp0] = defaultValue;
    }
  }
  return result;
}
function Companion_4$1() {
  Companion_instance_4$1 = this;
  this.y5_1 = new Long(0, -2147483648);
  this.z5_1 = new Long(-1, 2147483647);
  this.a6_1 = 8;
  this.b6_1 = 64;
}
var Companion_instance_4$1;
function Companion_getInstance_4$1() {
  if (Companion_instance_4$1 == null)
    new Companion_4$1();
  return Companion_instance_4$1;
}
function Long(low, high) {
  Companion_getInstance_4$1();
  Number_0.call(this);
  this.v5_1 = low;
  this.w5_1 = high;
}
protoOf(Long).c6 = function(other) {
  return compare(this, other);
};
protoOf(Long).d = function(other) {
  return this.c6(other instanceof Long ? other : THROW_CCE());
};
protoOf(Long).d6 = function(other) {
  return add(this, other);
};
protoOf(Long).e6 = function(other) {
  return divide(this, other);
};
protoOf(Long).f6 = function() {
  return this.g6().d6(new Long(1, 0));
};
protoOf(Long).g6 = function() {
  return new Long(~this.v5_1, ~this.w5_1);
};
protoOf(Long).h6 = function() {
  return this.v5_1;
};
protoOf(Long).x5 = function() {
  return toNumber(this);
};
protoOf(Long).valueOf = function() {
  return this.x5();
};
protoOf(Long).equals = function(other) {
  var tmp;
  if (other instanceof Long) {
    tmp = equalsLong(this, other);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Long).hashCode = function() {
  return hashCode_0(this);
};
protoOf(Long).toString = function() {
  return toStringImpl(this, 10);
};
function get_ZERO() {
  _init_properties_longjs_kt__tqrzid();
  return ZERO;
}
var ZERO;
function get_ONE() {
  _init_properties_longjs_kt__tqrzid();
  return ONE;
}
var ONE;
function get_NEG_ONE() {
  _init_properties_longjs_kt__tqrzid();
  return NEG_ONE;
}
var NEG_ONE;
function get_MAX_VALUE() {
  _init_properties_longjs_kt__tqrzid();
  return MAX_VALUE;
}
var MAX_VALUE;
function get_MIN_VALUE() {
  _init_properties_longjs_kt__tqrzid();
  return MIN_VALUE;
}
var MIN_VALUE;
function get_TWO_PWR_24_() {
  _init_properties_longjs_kt__tqrzid();
  return TWO_PWR_24_;
}
var TWO_PWR_24_;
function compare(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  if (equalsLong(_this__u8e3s4, other)) {
    return 0;
  }
  var thisNeg = isNegative(_this__u8e3s4);
  var otherNeg = isNegative(other);
  return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
}
function add(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  var a48 = _this__u8e3s4.w5_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.w5_1 & 65535;
  var a16 = _this__u8e3s4.v5_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.v5_1 & 65535;
  var b48 = other.w5_1 >>> 16 | 0;
  var b32 = other.w5_1 & 65535;
  var b16 = other.v5_1 >>> 16 | 0;
  var b00 = other.v5_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + (a00 + b00 | 0) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + (a16 + b16 | 0) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + (a32 + b32 | 0) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (a48 + b48 | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function subtract(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return add(_this__u8e3s4, other.f6());
}
function multiply(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  } else if (isZero(other)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = multiply(negate(_this__u8e3s4), negate(other));
    } else {
      tmp = negate(multiply(negate(_this__u8e3s4), other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(multiply(_this__u8e3s4, negate(other)));
  }
  if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
    return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
  }
  var a48 = _this__u8e3s4.w5_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.w5_1 & 65535;
  var a16 = _this__u8e3s4.v5_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.v5_1 & 65535;
  var b48 = other.w5_1 >>> 16 | 0;
  var b32 = other.w5_1 & 65535;
  var b16 = other.v5_1 >>> 16 | 0;
  var b00 = other.v5_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + imul_0(a00, b00) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + imul_0(a16, b00) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c16 = c16 + imul_0(a00, b16) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + imul_0(a32, b00) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a16, b16) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a00, b32) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (((imul_0(a48, b00) + imul_0(a32, b16) | 0) + imul_0(a16, b32) | 0) + imul_0(a00, b48) | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function divide(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  if (isZero(other)) {
    throw Exception_init_$Create$_0("division by zero");
  } else if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
      return get_MIN_VALUE();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ONE();
    } else {
      var halfThis = shiftRight(_this__u8e3s4, 1);
      var approx = shiftLeft(halfThis.e6(other), 1);
      if (equalsLong(approx, get_ZERO())) {
        return isNegative(other) ? get_ONE() : get_NEG_ONE();
      } else {
        var rem = subtract(_this__u8e3s4, multiply(other, approx));
        return add(approx, rem.e6(other));
      }
    }
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = negate(_this__u8e3s4).e6(negate(other));
    } else {
      tmp = negate(negate(_this__u8e3s4).e6(other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(_this__u8e3s4.e6(negate(other)));
  }
  var res = get_ZERO();
  var rem_0 = _this__u8e3s4;
  while (greaterThanOrEqual(rem_0, other)) {
    var approxDouble = toNumber(rem_0) / toNumber(other);
    var approx2 = Math.max(1, Math.floor(approxDouble));
    var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
    var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
    var approxRes = fromNumber(approx2);
    var approxRem = multiply(approxRes, other);
    while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
      approx2 = approx2 - delta;
      approxRes = fromNumber(approx2);
      approxRem = multiply(approxRes, other);
    }
    if (isZero(approxRes)) {
      approxRes = get_ONE();
    }
    res = add(res, approxRes);
    rem_0 = subtract(rem_0, approxRem);
  }
  return res;
}
function shiftLeft(_this__u8e3s4, numBits) {
  _init_properties_longjs_kt__tqrzid();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.v5_1 << numBits_0, _this__u8e3s4.w5_1 << numBits_0 | (_this__u8e3s4.v5_1 >>> (32 - numBits_0 | 0) | 0));
    } else {
      return new Long(0, _this__u8e3s4.v5_1 << (numBits_0 - 32 | 0));
    }
  }
}
function shiftRight(_this__u8e3s4, numBits) {
  _init_properties_longjs_kt__tqrzid();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.v5_1 >>> numBits_0 | 0 | _this__u8e3s4.w5_1 << (32 - numBits_0 | 0), _this__u8e3s4.w5_1 >> numBits_0);
    } else {
      return new Long(_this__u8e3s4.w5_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.w5_1 >= 0 ? 0 : -1);
    }
  }
}
function toNumber(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.w5_1 * 4294967296 + getLowBitsUnsigned(_this__u8e3s4);
}
function equalsLong(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.w5_1 === other.w5_1 ? _this__u8e3s4.v5_1 === other.v5_1 : false;
}
function hashCode_0(l) {
  _init_properties_longjs_kt__tqrzid();
  return l.v5_1 ^ l.w5_1;
}
function toStringImpl(_this__u8e3s4, radix) {
  _init_properties_longjs_kt__tqrzid();
  if (radix < 2 ? true : 36 < radix) {
    throw Exception_init_$Create$_0("radix out of range: " + radix);
  }
  if (isZero(_this__u8e3s4)) {
    return "0";
  }
  if (isNegative(_this__u8e3s4)) {
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      var radixLong = fromInt(radix);
      var div = _this__u8e3s4.e6(radixLong);
      var rem = subtract(multiply(div, radixLong), _this__u8e3s4).h6();
      var tmp = toStringImpl(div, radix);
      return tmp + rem.toString(radix);
    } else {
      return "-" + toStringImpl(negate(_this__u8e3s4), radix);
    }
  }
  var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
  var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
  var rem_0 = _this__u8e3s4;
  var result = "";
  while (true) {
    var remDiv = rem_0.e6(radixToPower);
    var intval = subtract(rem_0, multiply(remDiv, radixToPower)).h6();
    var digits = intval.toString(radix);
    rem_0 = remDiv;
    if (isZero(rem_0)) {
      return digits + result;
    } else {
      while (digits.length < digitsPerTime) {
        digits = "0" + digits;
      }
      result = digits + result;
    }
  }
}
function fromInt(value) {
  _init_properties_longjs_kt__tqrzid();
  return new Long(value, value < 0 ? -1 : 0);
}
function isNegative(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.w5_1 < 0;
}
function isZero(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.w5_1 === 0 ? _this__u8e3s4.v5_1 === 0 : false;
}
function isOdd(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return (_this__u8e3s4.v5_1 & 1) === 1;
}
function negate(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.f6();
}
function lessThan(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return compare(_this__u8e3s4, other) < 0;
}
function fromNumber(value) {
  _init_properties_longjs_kt__tqrzid();
  if (isNaN_0(value)) {
    return get_ZERO();
  } else if (value <= -9223372036854776e3) {
    return get_MIN_VALUE();
  } else if (value + 1 >= 9223372036854776e3) {
    return get_MAX_VALUE();
  } else if (value < 0) {
    return negate(fromNumber(-value));
  } else {
    var twoPwr32 = 4294967296;
    var tmp = value % twoPwr32 | 0;
    var tmp$ret$1 = value / twoPwr32 | 0;
    return new Long(tmp, tmp$ret$1);
  }
}
function greaterThan(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return compare(_this__u8e3s4, other) > 0;
}
function greaterThanOrEqual(_this__u8e3s4, other) {
  _init_properties_longjs_kt__tqrzid();
  return compare(_this__u8e3s4, other) >= 0;
}
function getLowBitsUnsigned(_this__u8e3s4) {
  _init_properties_longjs_kt__tqrzid();
  return _this__u8e3s4.v5_1 >= 0 ? _this__u8e3s4.v5_1 : 4294967296 + _this__u8e3s4.v5_1;
}
var properties_initialized_longjs_kt_5aju7t;
function _init_properties_longjs_kt__tqrzid() {
  if (!properties_initialized_longjs_kt_5aju7t) {
    properties_initialized_longjs_kt_5aju7t = true;
    ZERO = fromInt(0);
    ONE = fromInt(1);
    NEG_ONE = fromInt(-1);
    MAX_VALUE = new Long(-1, 2147483647);
    MIN_VALUE = new Long(0, -2147483648);
    TWO_PWR_24_ = fromInt(16777216);
  }
}
function classMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata("class", name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
}
function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, iid2) {
  var undef = VOID;
  return { kind, simpleName: name, associatedObjectKey, associatedObjects, suspendArity, $kClass$: undef, defaultConstructor, iid: iid2 };
}
function setMetadataFor(ctor, name, metadataConstructor, parent, interfaces, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  if (!(parent == null)) {
    ctor.prototype = Object.create(parent.prototype);
    ctor.prototype.constructor = ctor;
  }
  var metadata = metadataConstructor(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity == null ? [] : suspendArity);
  ctor.$metadata$ = metadata;
  if (!(interfaces == null)) {
    var receiver = !(metadata.iid == null) ? ctor : ctor.prototype;
    receiver.$imask$ = implement(interfaces);
  }
}
function interfaceMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata("interface", name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, generateInterfaceId());
}
function generateInterfaceId() {
  if (iid === VOID) {
    iid = 0;
  }
  iid = iid + 1 | 0;
  return iid;
}
var iid;
function objectMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  return createMetadata("object", name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity, null);
}
function numberToInt(a) {
  var tmp;
  if (a instanceof Long) {
    tmp = a.h6();
  } else {
    tmp = doubleToInt(a);
  }
  return tmp;
}
function doubleToInt(a) {
  var tmp;
  if (a > 2147483647) {
    tmp = 2147483647;
  } else if (a < -2147483648) {
    tmp = -2147483648;
  } else {
    tmp = a | 0;
  }
  return tmp;
}
function toShort(a) {
  return a << 16 >> 16;
}
function numberToChar(a) {
  var this_0 = numberToInt(a);
  var tmp$ret$0 = _UShort___init__impl__jigrne(toShort(this_0));
  return _Char___init__impl__6a9atx_0(tmp$ret$0);
}
function numberRangeToNumber(start, endInclusive) {
  return new IntRange(start, endInclusive);
}
function get_propertyRefClassMetadataCache() {
  _init_properties_reflectRuntime_kt__5r4uu3();
  return propertyRefClassMetadataCache;
}
var propertyRefClassMetadataCache;
function metadataObject() {
  _init_properties_reflectRuntime_kt__5r4uu3();
  return classMeta(VOID, VOID, VOID, VOID, VOID);
}
function getPropertyCallableRef(name, paramCount, superType, getter, setter) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  getter.get = getter;
  getter.set = setter;
  getter.callableName = name;
  return getPropertyRefClass(getter, getKPropMetadata(paramCount, setter), getInterfaceMaskFor(getter, superType));
}
function getPropertyRefClass(obj, metadata, imask) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  obj.$metadata$ = metadata;
  obj.constructor = obj;
  obj.$imask$ = imask;
  return obj;
}
function getKPropMetadata(paramCount, setter) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  return get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
}
function getInterfaceMaskFor(obj, superType) {
  _init_properties_reflectRuntime_kt__5r4uu3();
  var tmp0_elvis_lhs = obj.$imask$;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    var tmp$ret$2 = [superType];
    tmp = implement(tmp$ret$2);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
var properties_initialized_reflectRuntime_kt_inkhwd;
function _init_properties_reflectRuntime_kt__5r4uu3() {
  if (!properties_initialized_reflectRuntime_kt_inkhwd) {
    properties_initialized_reflectRuntime_kt_inkhwd = true;
    var tmp = [metadataObject(), metadataObject()];
    var tmp_0 = [metadataObject(), metadataObject()];
    propertyRefClassMetadataCache = [tmp, tmp_0, [metadataObject(), metadataObject()]];
  }
}
function isArrayish(o) {
  return isJsArray(o) ? true : isView(o);
}
function isJsArray(obj) {
  return Array.isArray(obj);
}
function isInterface(obj, iface) {
  return isInterfaceImpl(obj, iface.$metadata$.iid);
}
function isInterfaceImpl(obj, iface) {
  var tmp0_elvis_lhs = obj.$imask$;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var mask = tmp;
  return isBitSet(mask, iface);
}
function isArray(obj) {
  var tmp;
  if (isJsArray(obj)) {
    tmp = !obj.$type$;
  } else {
    tmp = false;
  }
  return tmp;
}
function isNumber(a) {
  var tmp;
  if (typeof a === "number") {
    tmp = true;
  } else {
    tmp = a instanceof Long;
  }
  return tmp;
}
function isComparable(value) {
  var type = typeof value;
  return ((type === "string" ? true : type === "boolean") ? true : isNumber(value)) ? true : isInterface(value, Comparable);
}
function isCharSequence(value) {
  return typeof value === "string" ? true : isInterface(value, CharSequence);
}
function calculateErrorInfo(proto) {
  var tmp0_safe_receiver = proto.constructor;
  var metadata = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.$metadata$;
  var tmp2_safe_receiver = metadata == null ? null : metadata.errorInfo;
  if (tmp2_safe_receiver == null)
    ;
  else {
    return tmp2_safe_receiver;
  }
  var result = 0;
  if (hasProp(proto, "message"))
    result = result | 1;
  if (hasProp(proto, "cause"))
    result = result | 2;
  if (!(result === 3)) {
    var parentProto = getPrototypeOf(proto);
    if (parentProto != Error.prototype) {
      result = result | calculateErrorInfo(parentProto);
    }
  }
  if (!(metadata == null)) {
    metadata.errorInfo = result;
  }
  return result;
}
function hasProp(proto, propName) {
  return proto.hasOwnProperty(propName);
}
function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
}
var VOID;
function fill(_this__u8e3s4, element, fromIndex, toIndex) {
  fromIndex = fromIndex === VOID ? 0 : fromIndex;
  toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
  Companion_instance_5.i6(fromIndex, toIndex, _this__u8e3s4.length);
  _this__u8e3s4.fill(element, fromIndex, toIndex);
}
function asList(_this__u8e3s4) {
  return new ArrayList(_this__u8e3s4);
}
function sort_0(_this__u8e3s4) {
  if (_this__u8e3s4.length > 1) {
    sortArray(_this__u8e3s4);
  }
}
function sortWith_0(_this__u8e3s4, comparator) {
  if (_this__u8e3s4.length > 1) {
    sortArrayWith(_this__u8e3s4, comparator);
  }
}
function copyOf(_this__u8e3s4, newSize) {
  if (!(newSize >= 0)) {
    var message2 = "Invalid new array size: " + newSize + ".";
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  return fillFrom(_this__u8e3s4, new Int32Array(newSize));
}
function copyOf_0(_this__u8e3s4, newSize) {
  if (!(newSize >= 0)) {
    var message2 = "Invalid new array size: " + newSize + ".";
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  return arrayCopyResize(_this__u8e3s4, newSize, null);
}
function reverse(_this__u8e3s4) {
  var midPoint = (_this__u8e3s4.i() / 2 | 0) - 1 | 0;
  if (midPoint < 0)
    return Unit_instance;
  var reverseIndex = get_lastIndex_0(_this__u8e3s4);
  var inductionVariable = 0;
  if (inductionVariable <= midPoint)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = _this__u8e3s4.v(index);
      _this__u8e3s4.j(index, _this__u8e3s4.v(reverseIndex));
      _this__u8e3s4.j(reverseIndex, tmp);
      reverseIndex = reverseIndex - 1 | 0;
    } while (!(index === midPoint));
}
function digitToIntImpl(_this__u8e3s4) {
  var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
  var index = binarySearchRange(Digit_getInstance().j6_1, ch);
  var diff = ch - Digit_getInstance().j6_1[index] | 0;
  return diff < 10 ? diff : -1;
}
function binarySearchRange(array, needle) {
  var bottom = 0;
  var top = array.length - 1 | 0;
  var middle = -1;
  var value = 0;
  while (bottom <= top) {
    middle = (bottom + top | 0) / 2 | 0;
    value = array[middle];
    if (needle > value)
      bottom = middle + 1 | 0;
    else if (needle === value)
      return middle;
    else
      top = middle - 1 | 0;
  }
  return middle - (needle < value ? 1 : 0) | 0;
}
function Digit() {
  Digit_instance = this;
  var tmp = this;
  tmp.j6_1 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
}
var Digit_instance;
function Digit_getInstance() {
  if (Digit_instance == null)
    new Digit();
  return Digit_instance;
}
function isWhitespaceImpl(_this__u8e3s4) {
  var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
  return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
}
function releaseIntercepted($this) {
  var intercepted = $this.r6_1;
  if (!(intercepted == null) ? !(intercepted === $this) : false) {
    ensureNotNull($this.s6().t6(Key_instance)).u6(intercepted);
  }
  $this.r6_1 = CompletedContinuation_instance;
}
function CoroutineImpl(resultContinuation) {
  this.k6_1 = resultContinuation;
  this.l6_1 = 0;
  this.m6_1 = 0;
  this.n6_1 = null;
  this.o6_1 = null;
  this.p6_1 = null;
  var tmp = this;
  var tmp0_safe_receiver = this.k6_1;
  tmp.q6_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s6();
  this.r6_1 = null;
}
protoOf(CoroutineImpl).s6 = function() {
  return ensureNotNull(this.q6_1);
};
protoOf(CoroutineImpl).v6 = function(result) {
  var current = this;
  var tmp;
  if (_Result___get_isFailure__impl__jpiriv(result)) {
    tmp = null;
  } else {
    var tmp_0 = _Result___get_value__impl__bjfvqg(result);
    tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  }
  var currentResult = tmp;
  var currentException = Result__exceptionOrNull_impl_p6xea9(result);
  while (true) {
    var $this$with = current;
    if (currentException == null) {
      $this$with.n6_1 = currentResult;
    } else {
      $this$with.l6_1 = $this$with.m6_1;
      $this$with.o6_1 = currentException;
    }
    try {
      var outcome = $this$with.w6();
      if (outcome === get_COROUTINE_SUSPENDED())
        return Unit_instance;
      currentResult = outcome;
      currentException = null;
    } catch ($p) {
      var exception = $p;
      currentResult = null;
      currentException = exception;
    }
    releaseIntercepted($this$with);
    var completion = ensureNotNull($this$with.k6_1);
    if (completion instanceof CoroutineImpl) {
      current = completion;
    } else {
      if (!(currentException == null)) {
        var exception_0 = ensureNotNull(currentException);
        var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        completion.x6(tmp$ret$2);
      } else {
        var value = currentResult;
        var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
        completion.x6(tmp$ret$4);
      }
      return Unit_instance;
    }
  }
};
protoOf(CoroutineImpl).x6 = function(result) {
  return this.v6(result);
};
function CompletedContinuation() {
}
protoOf(CompletedContinuation).s6 = function() {
  var message2 = "This continuation is already complete";
  throw IllegalStateException_init_$Create$_0(toString_2(message2));
};
protoOf(CompletedContinuation).v6 = function(result) {
  var message2 = "This continuation is already complete";
  throw IllegalStateException_init_$Create$_0(toString_2(message2));
};
protoOf(CompletedContinuation).x6 = function(result) {
  return this.v6(result);
};
protoOf(CompletedContinuation).toString = function() {
  return "This continuation is already complete";
};
var CompletedContinuation_instance;
function createCoroutineUnintercepted(_this__u8e3s4, receiver, completion) {
  return new _no_name_provided__qut3iv_0(completion, _this__u8e3s4, receiver, completion);
}
function _no_name_provided__qut3iv_0($completion, $this_createCoroutineUnintercepted, $receiver, $completion$1) {
  this.g7_1 = $this_createCoroutineUnintercepted;
  this.h7_1 = $receiver;
  this.i7_1 = $completion$1;
  CoroutineImpl.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
}
protoOf(_no_name_provided__qut3iv_0).w6 = function() {
  if (this.o6_1 != null)
    throw this.o6_1;
  var a = this.g7_1;
  return typeof a === "function" ? a(this.h7_1, this.i7_1) : this.g7_1.j7(this.h7_1, this.i7_1);
};
function Exception_init_$Init$($this) {
  extendThrowable($this);
  Exception.call($this);
  return $this;
}
function Exception_init_$Create$() {
  var tmp = Exception_init_$Init$(objectCreate(protoOf(Exception)));
  captureStack(tmp, Exception_init_$Create$);
  return tmp;
}
function Exception_init_$Init$_0(message2, $this) {
  extendThrowable($this, message2);
  Exception.call($this);
  return $this;
}
function Exception_init_$Create$_0(message2) {
  var tmp = Exception_init_$Init$_0(message2, objectCreate(protoOf(Exception)));
  captureStack(tmp, Exception_init_$Create$_0);
  return tmp;
}
function Exception() {
  captureStack(this, Exception);
}
function IllegalArgumentException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IllegalArgumentException.call($this);
  return $this;
}
function IllegalArgumentException_init_$Create$() {
  var tmp = IllegalArgumentException_init_$Init$(objectCreate(protoOf(IllegalArgumentException)));
  captureStack(tmp, IllegalArgumentException_init_$Create$);
  return tmp;
}
function IllegalArgumentException_init_$Init$_0(message2, $this) {
  RuntimeException_init_$Init$_0(message2, $this);
  IllegalArgumentException.call($this);
  return $this;
}
function IllegalArgumentException_init_$Create$_0(message2) {
  var tmp = IllegalArgumentException_init_$Init$_0(message2, objectCreate(protoOf(IllegalArgumentException)));
  captureStack(tmp, IllegalArgumentException_init_$Create$_0);
  return tmp;
}
function IllegalArgumentException() {
  captureStack(this, IllegalArgumentException);
}
function IndexOutOfBoundsException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IndexOutOfBoundsException.call($this);
  return $this;
}
function IndexOutOfBoundsException_init_$Create$() {
  var tmp = IndexOutOfBoundsException_init_$Init$(objectCreate(protoOf(IndexOutOfBoundsException)));
  captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
  return tmp;
}
function IndexOutOfBoundsException_init_$Init$_0(message2, $this) {
  RuntimeException_init_$Init$_0(message2, $this);
  IndexOutOfBoundsException.call($this);
  return $this;
}
function IndexOutOfBoundsException_init_$Create$_0(message2) {
  var tmp = IndexOutOfBoundsException_init_$Init$_0(message2, objectCreate(protoOf(IndexOutOfBoundsException)));
  captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
  return tmp;
}
function IndexOutOfBoundsException() {
  captureStack(this, IndexOutOfBoundsException);
}
function IllegalStateException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  IllegalStateException.call($this);
  return $this;
}
function IllegalStateException_init_$Create$() {
  var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
  captureStack(tmp, IllegalStateException_init_$Create$);
  return tmp;
}
function IllegalStateException_init_$Init$_0(message2, $this) {
  RuntimeException_init_$Init$_0(message2, $this);
  IllegalStateException.call($this);
  return $this;
}
function IllegalStateException_init_$Create$_0(message2) {
  var tmp = IllegalStateException_init_$Init$_0(message2, objectCreate(protoOf(IllegalStateException)));
  captureStack(tmp, IllegalStateException_init_$Create$_0);
  return tmp;
}
function IllegalStateException() {
  captureStack(this, IllegalStateException);
}
function UnsupportedOperationException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  UnsupportedOperationException.call($this);
  return $this;
}
function UnsupportedOperationException_init_$Create$() {
  var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
  captureStack(tmp, UnsupportedOperationException_init_$Create$);
  return tmp;
}
function UnsupportedOperationException() {
  captureStack(this, UnsupportedOperationException);
}
function RuntimeException_init_$Init$($this) {
  Exception_init_$Init$($this);
  RuntimeException.call($this);
  return $this;
}
function RuntimeException_init_$Create$() {
  var tmp = RuntimeException_init_$Init$(objectCreate(protoOf(RuntimeException)));
  captureStack(tmp, RuntimeException_init_$Create$);
  return tmp;
}
function RuntimeException_init_$Init$_0(message2, $this) {
  Exception_init_$Init$_0(message2, $this);
  RuntimeException.call($this);
  return $this;
}
function RuntimeException_init_$Create$_0(message2) {
  var tmp = RuntimeException_init_$Init$_0(message2, objectCreate(protoOf(RuntimeException)));
  captureStack(tmp, RuntimeException_init_$Create$_0);
  return tmp;
}
function RuntimeException() {
  captureStack(this, RuntimeException);
}
function NoSuchElementException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NoSuchElementException.call($this);
  return $this;
}
function NoSuchElementException_init_$Create$() {
  var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
  captureStack(tmp, NoSuchElementException_init_$Create$);
  return tmp;
}
function NoSuchElementException_init_$Init$_0(message2, $this) {
  RuntimeException_init_$Init$_0(message2, $this);
  NoSuchElementException.call($this);
  return $this;
}
function NoSuchElementException_init_$Create$_0(message2) {
  var tmp = NoSuchElementException_init_$Init$_0(message2, objectCreate(protoOf(NoSuchElementException)));
  captureStack(tmp, NoSuchElementException_init_$Create$_0);
  return tmp;
}
function NoSuchElementException() {
  captureStack(this, NoSuchElementException);
}
function Error_init_$Init$($this) {
  extendThrowable($this);
  Error_0.call($this);
  return $this;
}
function Error_init_$Create$() {
  var tmp = Error_init_$Init$(objectCreate(protoOf(Error_0)));
  captureStack(tmp, Error_init_$Create$);
  return tmp;
}
function Error_init_$Init$_0(message2, $this) {
  extendThrowable($this, message2);
  Error_0.call($this);
  return $this;
}
function Error_0() {
  captureStack(this, Error_0);
}
function NumberFormatException_init_$Init$($this) {
  IllegalArgumentException_init_$Init$($this);
  NumberFormatException.call($this);
  return $this;
}
function NumberFormatException_init_$Create$() {
  var tmp = NumberFormatException_init_$Init$(objectCreate(protoOf(NumberFormatException)));
  captureStack(tmp, NumberFormatException_init_$Create$);
  return tmp;
}
function NumberFormatException_init_$Init$_0(message2, $this) {
  IllegalArgumentException_init_$Init$_0(message2, $this);
  NumberFormatException.call($this);
  return $this;
}
function NumberFormatException_init_$Create$_0(message2) {
  var tmp = NumberFormatException_init_$Init$_0(message2, objectCreate(protoOf(NumberFormatException)));
  captureStack(tmp, NumberFormatException_init_$Create$_0);
  return tmp;
}
function NumberFormatException() {
  captureStack(this, NumberFormatException);
}
function ArithmeticException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ArithmeticException.call($this);
  return $this;
}
function ArithmeticException_init_$Create$() {
  var tmp = ArithmeticException_init_$Init$(objectCreate(protoOf(ArithmeticException)));
  captureStack(tmp, ArithmeticException_init_$Create$);
  return tmp;
}
function ArithmeticException_init_$Init$_0(message2, $this) {
  RuntimeException_init_$Init$_0(message2, $this);
  ArithmeticException.call($this);
  return $this;
}
function ArithmeticException_init_$Create$_0(message2) {
  var tmp = ArithmeticException_init_$Init$_0(message2, objectCreate(protoOf(ArithmeticException)));
  captureStack(tmp, ArithmeticException_init_$Create$_0);
  return tmp;
}
function ArithmeticException() {
  captureStack(this, ArithmeticException);
}
function ConcurrentModificationException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ConcurrentModificationException.call($this);
  return $this;
}
function ConcurrentModificationException_init_$Create$() {
  var tmp = ConcurrentModificationException_init_$Init$(objectCreate(protoOf(ConcurrentModificationException)));
  captureStack(tmp, ConcurrentModificationException_init_$Create$);
  return tmp;
}
function ConcurrentModificationException() {
  captureStack(this, ConcurrentModificationException);
}
function NullPointerException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  NullPointerException.call($this);
  return $this;
}
function NullPointerException_init_$Create$() {
  var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
  captureStack(tmp, NullPointerException_init_$Create$);
  return tmp;
}
function NullPointerException() {
  captureStack(this, NullPointerException);
}
function ClassCastException_init_$Init$($this) {
  RuntimeException_init_$Init$($this);
  ClassCastException.call($this);
  return $this;
}
function ClassCastException_init_$Create$() {
  var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
  captureStack(tmp, ClassCastException_init_$Create$);
  return tmp;
}
function ClassCastException() {
  captureStack(this, ClassCastException);
}
function AbstractCollection$toString$lambda(this$0) {
  return function(it) {
    return it === this$0 ? "(this Collection)" : toString_1(it);
  };
}
function AbstractCollection() {
}
protoOf(AbstractCollection).n = function(element) {
  var tmp$ret$0;
  $l$block_0: {
    var tmp;
    if (isInterface(this, Collection)) {
      tmp = this.p();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = false;
      break $l$block_0;
    }
    var tmp0_iterator = this.m();
    while (tmp0_iterator.t()) {
      var element_0 = tmp0_iterator.u();
      if (equals(element_0, element)) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
    }
    tmp$ret$0 = false;
  }
  return tmp$ret$0;
};
protoOf(AbstractCollection).o = function(elements) {
  var tmp$ret$0;
  $l$block_0: {
    var tmp;
    if (isInterface(elements, Collection)) {
      tmp = elements.p();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var tmp0_iterator = elements.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      if (!this.n(element)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
};
protoOf(AbstractCollection).p = function() {
  return this.i() === 0;
};
protoOf(AbstractCollection).toString = function() {
  return joinToString_0(this, ", ", "[", "]", VOID, VOID, AbstractCollection$toString$lambda(this));
};
protoOf(AbstractCollection).toArray = function() {
  return collectionToArray(this);
};
function Companion_5() {
  this.d1_1 = 2147483639;
}
protoOf(Companion_5).d2 = function(index, size) {
  if (index < 0 ? true : index >= size) {
    throw IndexOutOfBoundsException_init_$Create$_0("index: " + index + ", size: " + size);
  }
};
protoOf(Companion_5).e1 = function(index, size) {
  if (index < 0 ? true : index > size) {
    throw IndexOutOfBoundsException_init_$Create$_0("index: " + index + ", size: " + size);
  }
};
protoOf(Companion_5).i6 = function(fromIndex, toIndex, size) {
  if (fromIndex < 0 ? true : toIndex > size) {
    throw IndexOutOfBoundsException_init_$Create$_0("fromIndex: " + fromIndex + ", toIndex: " + toIndex + ", size: " + size);
  }
  if (fromIndex > toIndex) {
    throw IllegalArgumentException_init_$Create$_0("fromIndex: " + fromIndex + " > toIndex: " + toIndex);
  }
};
protoOf(Companion_5).f3 = function(oldCapacity, minCapacity) {
  var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
  if ((newCapacity - minCapacity | 0) < 0)
    newCapacity = minCapacity;
  if ((newCapacity - 2147483639 | 0) > 0)
    newCapacity = minCapacity > 2147483639 ? IntCompanionObject_instance.MAX_VALUE : 2147483639;
  return newCapacity;
};
protoOf(Companion_5).l1 = function(c2) {
  var hashCode_02 = 1;
  var tmp0_iterator = c2.m();
  while (tmp0_iterator.t()) {
    var e = tmp0_iterator.u();
    var tmp = imul_0(31, hashCode_02);
    var tmp2_elvis_lhs = e == null ? null : hashCode(e);
    hashCode_02 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  return hashCode_02;
};
protoOf(Companion_5).k1 = function(c2, other) {
  if (!(c2.i() === other.i()))
    return false;
  var otherIterator = other.m();
  var tmp0_iterator = c2.m();
  while (tmp0_iterator.t()) {
    var elem = tmp0_iterator.u();
    var elemOther = otherIterator.u();
    if (!equals(elem, elemOther)) {
      return false;
    }
  }
  return true;
};
var Companion_instance_5;
function toString_3($this, o) {
  return o === $this ? "(this Map)" : toString_1(o);
}
function implFindEntry($this, key2) {
  var tmp$ret$1;
  $l$block: {
    var tmp0_iterator = $this.w1().m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      if (equals(element.g4(), key2)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  return tmp$ret$1;
}
function Companion_6() {
}
function AbstractMap$toString$lambda(this$0) {
  return function(it) {
    return this$0.m7(it);
  };
}
function AbstractMap() {
  this.r1_1 = null;
  this.s1_1 = null;
}
protoOf(AbstractMap).t1 = function(key2) {
  return !(implFindEntry(this, key2) == null);
};
protoOf(AbstractMap).u1 = function(entry) {
  if (!(!(entry == null) ? isInterface(entry, Entry) : false))
    return false;
  var key2 = entry.g4();
  var value = entry.h4();
  var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).v1(key2);
  if (!equals(value, ourValue)) {
    return false;
  }
  var tmp;
  if (ourValue == null) {
    tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).t1(key2);
  } else {
    tmp = false;
  }
  if (tmp) {
    return false;
  }
  return true;
};
protoOf(AbstractMap).equals = function(other) {
  if (other === this)
    return true;
  if (!(!(other == null) ? isInterface(other, Map_0) : false))
    return false;
  if (!(this.i() === other.i()))
    return false;
  var tmp$ret$0;
  $l$block_0: {
    var this_0 = other.w1();
    var tmp;
    if (isInterface(this_0, Collection)) {
      tmp = this_0.p();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      if (!this.u1(element)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
};
protoOf(AbstractMap).v1 = function(key2) {
  var tmp0_safe_receiver = implFindEntry(this, key2);
  return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h4();
};
protoOf(AbstractMap).hashCode = function() {
  return hashCode(this.w1());
};
protoOf(AbstractMap).i = function() {
  return this.w1().i();
};
protoOf(AbstractMap).toString = function() {
  var tmp = this.w1();
  return joinToString_0(tmp, ", ", "{", "}", VOID, VOID, AbstractMap$toString$lambda(this));
};
protoOf(AbstractMap).m7 = function(entry) {
  return toString_3(this, entry.g4()) + "=" + toString_3(this, entry.h4());
};
function Companion_7() {
}
protoOf(Companion_7).y1 = function(c2) {
  var hashCode_02 = 0;
  var tmp0_iterator = c2.m();
  while (tmp0_iterator.t()) {
    var element = tmp0_iterator.u();
    var tmp = hashCode_02;
    var tmp2_elvis_lhs = element == null ? null : hashCode(element);
    hashCode_02 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
  }
  return hashCode_02;
};
protoOf(Companion_7).x1 = function(c2, other) {
  if (!(c2.i() === other.i()))
    return false;
  return c2.o(other);
};
var Companion_instance_7;
function collectionToArrayCommonImpl(collection) {
  if (collection.p()) {
    return [];
  }
  var size = collection.i();
  var destination = fillArrayVal(Array(size), null);
  var iterator2 = collection.m();
  var index = 0;
  while (iterator2.t()) {
    var tmp0 = index;
    index = tmp0 + 1 | 0;
    destination[tmp0] = iterator2.u();
  }
  return destination;
}
function mutableListOf(elements) {
  return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
}
function listOf_0(elements) {
  return elements.length > 0 ? asList(elements) : emptyList();
}
function emptyList() {
  return EmptyList_getInstance();
}
function arrayListOf(elements) {
  return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
}
function EmptyIterator() {
}
protoOf(EmptyIterator).t = function() {
  return false;
};
protoOf(EmptyIterator).u = function() {
  throw NoSuchElementException_init_$Create$();
};
var EmptyIterator_instance;
function ArrayAsCollection(values, isVarargs) {
  this.n7_1 = values;
  this.o7_1 = isVarargs;
}
protoOf(ArrayAsCollection).i = function() {
  return this.n7_1.length;
};
protoOf(ArrayAsCollection).p = function() {
  return this.n7_1.length === 0;
};
protoOf(ArrayAsCollection).p7 = function(element) {
  return contains(this.n7_1, element);
};
protoOf(ArrayAsCollection).q7 = function(elements) {
  var tmp$ret$0;
  $l$block_0: {
    var tmp;
    if (isInterface(elements, Collection)) {
      tmp = elements.p();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$0 = true;
      break $l$block_0;
    }
    var tmp0_iterator = elements.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      if (!this.p7(element)) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    tmp$ret$0 = true;
  }
  return tmp$ret$0;
};
protoOf(ArrayAsCollection).o = function(elements) {
  return this.q7(elements);
};
protoOf(ArrayAsCollection).m = function() {
  return arrayIterator(this.n7_1);
};
function EmptyList() {
  EmptyList_instance = this;
  this.r7_1 = new Long(-1478467534, -1720727600);
}
protoOf(EmptyList).equals = function(other) {
  var tmp;
  if (!(other == null) ? isInterface(other, List) : false) {
    tmp = other.p();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EmptyList).hashCode = function() {
  return 1;
};
protoOf(EmptyList).toString = function() {
  return "[]";
};
protoOf(EmptyList).i = function() {
  return 0;
};
protoOf(EmptyList).p = function() {
  return true;
};
protoOf(EmptyList).s7 = function(elements) {
  return elements.p();
};
protoOf(EmptyList).o = function(elements) {
  return this.s7(elements);
};
protoOf(EmptyList).v = function(index) {
  throw IndexOutOfBoundsException_init_$Create$_0("Empty list doesn't contain element at index " + index + ".");
};
protoOf(EmptyList).m = function() {
  return EmptyIterator_instance;
};
var EmptyList_instance;
function EmptyList_getInstance() {
  if (EmptyList_instance == null)
    new EmptyList();
  return EmptyList_instance;
}
function get_lastIndex_0(_this__u8e3s4) {
  return _this__u8e3s4.i() - 1 | 0;
}
function optimizeReadOnlyList(_this__u8e3s4) {
  switch (_this__u8e3s4.i()) {
    case 0:
      return emptyList();
    case 1:
      return listOf(_this__u8e3s4.v(0));
    default:
      return _this__u8e3s4;
  }
}
function throwIndexOverflow() {
  throw ArithmeticException_init_$Create$_0("Index overflow has happened.");
}
function IndexedValue(index, value) {
  this.c5_1 = index;
  this.d5_1 = value;
}
protoOf(IndexedValue).toString = function() {
  return "IndexedValue(index=" + this.c5_1 + ", value=" + this.d5_1 + ")";
};
protoOf(IndexedValue).hashCode = function() {
  var result = this.c5_1;
  result = imul_0(result, 31) + (this.d5_1 == null ? 0 : hashCode(this.d5_1)) | 0;
  return result;
};
protoOf(IndexedValue).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof IndexedValue))
    return false;
  var tmp0_other_with_cast = other instanceof IndexedValue ? other : THROW_CCE();
  if (!(this.c5_1 === tmp0_other_with_cast.c5_1))
    return false;
  if (!equals(this.d5_1, tmp0_other_with_cast.d5_1))
    return false;
  return true;
};
function collectionSizeOrDefault(_this__u8e3s4, default_0) {
  var tmp;
  if (isInterface(_this__u8e3s4, Collection)) {
    tmp = _this__u8e3s4.i();
  } else {
    tmp = default_0;
  }
  return tmp;
}
function removeLast(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4.p()) {
    throw NoSuchElementException_init_$Create$_0("List is empty.");
  } else {
    tmp = _this__u8e3s4.y(get_lastIndex_0(_this__u8e3s4));
  }
  return tmp;
}
function IntIterator() {
}
protoOf(IntIterator).u = function() {
  return this.t7();
};
function CharIterator() {
}
protoOf(CharIterator).u7 = function() {
  return this.v7();
};
protoOf(CharIterator).u = function() {
  return new Char(this.u7());
};
function sequence(block) {
  return new _no_name_provided__qut3iv_1(block);
}
function SequenceScope() {
}
protoOf(SequenceScope).y7 = function(elements, $completion) {
  var tmp;
  if (isInterface(elements, Collection)) {
    tmp = elements.p();
  } else {
    tmp = false;
  }
  if (tmp)
    return Unit_instance;
  return this.x7(elements.m(), $completion);
};
protoOf(SequenceScope).z7 = function(sequence2, $completion) {
  return this.x7(sequence2.m(), $completion);
};
function iterator(block) {
  var iterator2 = new SequenceBuilderIterator();
  iterator2.d8_1 = createCoroutineUnintercepted(block, iterator2, iterator2);
  return iterator2;
}
function nextNotReady($this) {
  if (!$this.t())
    throw NoSuchElementException_init_$Create$();
  else
    return $this.u();
}
function exceptionalState($this) {
  switch ($this.a8_1) {
    case 4:
      return NoSuchElementException_init_$Create$();
    case 5:
      return IllegalStateException_init_$Create$_0("Iterator has failed.");
    default:
      return IllegalStateException_init_$Create$_0("Unexpected state of the iterator: " + $this.a8_1);
  }
}
function SequenceBuilderIterator() {
  SequenceScope.call(this);
  this.a8_1 = 0;
  this.b8_1 = null;
  this.c8_1 = null;
  this.d8_1 = null;
}
protoOf(SequenceBuilderIterator).t = function() {
  while (true) {
    switch (this.a8_1) {
      case 0:
        break;
      case 1:
        if (ensureNotNull(this.c8_1).t()) {
          this.a8_1 = 2;
          return true;
        } else {
          this.c8_1 = null;
        }
        break;
      case 4:
        return false;
      case 3:
      case 2:
        return true;
      default:
        throw exceptionalState(this);
    }
    this.a8_1 = 5;
    var step = ensureNotNull(this.d8_1);
    this.d8_1 = null;
    var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
    step.x6(tmp$ret$0);
  }
};
protoOf(SequenceBuilderIterator).u = function() {
  switch (this.a8_1) {
    case 0:
    case 1:
      return nextNotReady(this);
    case 2:
      this.a8_1 = 1;
      return ensureNotNull(this.c8_1).u();
    case 3:
      this.a8_1 = 0;
      var tmp = this.b8_1;
      var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.b8_1 = null;
      return result;
    default:
      throw exceptionalState(this);
  }
};
protoOf(SequenceBuilderIterator).w7 = function(value, $completion) {
  this.b8_1 = value;
  this.a8_1 = 3;
  this.d8_1 = $completion;
  return get_COROUTINE_SUSPENDED();
};
protoOf(SequenceBuilderIterator).x7 = function(iterator2, $completion) {
  if (!iterator2.t())
    return Unit_instance;
  this.c8_1 = iterator2;
  this.a8_1 = 2;
  this.d8_1 = $completion;
  return get_COROUTINE_SUSPENDED();
};
protoOf(SequenceBuilderIterator).e8 = function(result) {
  throwOnFailure(result);
  var tmp = _Result___get_value__impl__bjfvqg(result);
  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
  this.a8_1 = 4;
};
protoOf(SequenceBuilderIterator).x6 = function(result) {
  return this.e8(result);
};
protoOf(SequenceBuilderIterator).s6 = function() {
  return EmptyCoroutineContext_getInstance();
};
function _no_name_provided__qut3iv_1($block) {
  this.f8_1 = $block;
}
protoOf(_no_name_provided__qut3iv_1).m = function() {
  return iterator(this.f8_1);
};
function emptySequence() {
  return EmptySequence_instance;
}
function TransformingSequence$iterator$1(this$0) {
  this.h8_1 = this$0;
  this.g8_1 = this$0.i8_1.m();
}
protoOf(TransformingSequence$iterator$1).u = function() {
  return this.h8_1.j8_1(this.g8_1.u());
};
protoOf(TransformingSequence$iterator$1).t = function() {
  return this.g8_1.t();
};
function TransformingSequence(sequence2, transformer) {
  this.i8_1 = sequence2;
  this.j8_1 = transformer;
}
protoOf(TransformingSequence).m = function() {
  return new TransformingSequence$iterator$1(this);
};
function calcNext($this) {
  if ($this.k8_1.t()) {
    var item = $this.k8_1.u();
    if ($this.n8_1.p8_1(item)) {
      $this.l8_1 = 1;
      $this.m8_1 = item;
      return Unit_instance;
    }
  }
  $this.l8_1 = 0;
}
function TakeWhileSequence$iterator$1(this$0) {
  this.n8_1 = this$0;
  this.k8_1 = this$0.o8_1.m();
  this.l8_1 = -1;
  this.m8_1 = null;
}
protoOf(TakeWhileSequence$iterator$1).u = function() {
  if (this.l8_1 === -1) {
    calcNext(this);
  }
  if (this.l8_1 === 0)
    throw NoSuchElementException_init_$Create$();
  var tmp = this.m8_1;
  var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  this.m8_1 = null;
  this.l8_1 = -1;
  return result;
};
protoOf(TakeWhileSequence$iterator$1).t = function() {
  if (this.l8_1 === -1) {
    calcNext(this);
  }
  return this.l8_1 === 1;
};
function TakeWhileSequence(sequence2, predicate) {
  this.o8_1 = sequence2;
  this.p8_1 = predicate;
}
protoOf(TakeWhileSequence).m = function() {
  return new TakeWhileSequence$iterator$1(this);
};
function DropTakeSequence() {
}
function drop_0($this) {
  while ($this.r8_1 > 0 ? $this.q8_1.t() : false) {
    $this.q8_1.u();
    $this.r8_1 = $this.r8_1 - 1 | 0;
  }
}
function DropSequence$iterator$1(this$0) {
  this.q8_1 = this$0.s8_1.m();
  this.r8_1 = this$0.t8_1;
}
protoOf(DropSequence$iterator$1).u = function() {
  drop_0(this);
  return this.q8_1.u();
};
protoOf(DropSequence$iterator$1).t = function() {
  drop_0(this);
  return this.q8_1.t();
};
function DropSequence(sequence2, count) {
  this.s8_1 = sequence2;
  this.t8_1 = count;
  if (!(this.t8_1 >= 0)) {
    var message2 = "count must be non-negative, but was " + this.t8_1 + ".";
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
}
protoOf(DropSequence).a5 = function(n) {
  var n1 = this.t8_1 + n | 0;
  return n1 < 0 ? new DropSequence(this, n) : new DropSequence(this.s8_1, n1);
};
protoOf(DropSequence).b5 = function(n) {
  var n1 = this.t8_1 + n | 0;
  return n1 < 0 ? new TakeSequence(this, n) : new SubSequence(this.s8_1, this.t8_1, n1);
};
protoOf(DropSequence).m = function() {
  return new DropSequence$iterator$1(this);
};
function drop_1($this) {
  while ($this.u8_1.t()) {
    var item = $this.u8_1.u();
    if (!$this.x8_1.z8_1(item)) {
      $this.w8_1 = item;
      $this.v8_1 = 1;
      return Unit_instance;
    }
  }
  $this.v8_1 = 0;
}
function DropWhileSequence$iterator$1(this$0) {
  this.x8_1 = this$0;
  this.u8_1 = this$0.y8_1.m();
  this.v8_1 = -1;
  this.w8_1 = null;
}
protoOf(DropWhileSequence$iterator$1).u = function() {
  if (this.v8_1 === -1) {
    drop_1(this);
  }
  if (this.v8_1 === 1) {
    var tmp = this.w8_1;
    var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.w8_1 = null;
    this.v8_1 = 0;
    return result;
  }
  return this.u8_1.u();
};
protoOf(DropWhileSequence$iterator$1).t = function() {
  if (this.v8_1 === -1) {
    drop_1(this);
  }
  return this.v8_1 === 1 ? true : this.u8_1.t();
};
function DropWhileSequence(sequence2, predicate) {
  this.y8_1 = sequence2;
  this.z8_1 = predicate;
}
protoOf(DropWhileSequence).m = function() {
  return new DropWhileSequence$iterator$1(this);
};
function calcNext_0($this) {
  while ($this.a9_1.t()) {
    var item = $this.a9_1.u();
    if ($this.d9_1.g9_1(item) === $this.d9_1.f9_1) {
      $this.c9_1 = item;
      $this.b9_1 = 1;
      return Unit_instance;
    }
  }
  $this.b9_1 = 0;
}
function FilteringSequence$iterator$1(this$0) {
  this.d9_1 = this$0;
  this.a9_1 = this$0.e9_1.m();
  this.b9_1 = -1;
  this.c9_1 = null;
}
protoOf(FilteringSequence$iterator$1).u = function() {
  if (this.b9_1 === -1) {
    calcNext_0(this);
  }
  if (this.b9_1 === 0)
    throw NoSuchElementException_init_$Create$();
  var result = this.c9_1;
  this.c9_1 = null;
  this.b9_1 = -1;
  return (result == null ? true : !(result == null)) ? result : THROW_CCE();
};
protoOf(FilteringSequence$iterator$1).t = function() {
  if (this.b9_1 === -1) {
    calcNext_0(this);
  }
  return this.b9_1 === 1;
};
function FilteringSequence(sequence2, sendWhen, predicate) {
  sendWhen = sendWhen === VOID ? true : sendWhen;
  this.e9_1 = sequence2;
  this.f9_1 = sendWhen;
  this.g9_1 = predicate;
}
protoOf(FilteringSequence).m = function() {
  return new FilteringSequence$iterator$1(this);
};
function IndexingSequence$iterator$1(this$0) {
  this.h9_1 = this$0.j9_1.m();
  this.i9_1 = 0;
}
protoOf(IndexingSequence$iterator$1).u = function() {
  var tmp1 = this.i9_1;
  this.i9_1 = tmp1 + 1 | 0;
  return new IndexedValue(checkIndexOverflow(tmp1), this.h9_1.u());
};
protoOf(IndexingSequence$iterator$1).t = function() {
  return this.h9_1.t();
};
function IndexingSequence(sequence2) {
  this.j9_1 = sequence2;
}
protoOf(IndexingSequence).m = function() {
  return new IndexingSequence$iterator$1(this);
};
function TakeSequence$iterator$1(this$0) {
  this.k9_1 = this$0.n9_1;
  this.l9_1 = this$0.m9_1.m();
}
protoOf(TakeSequence$iterator$1).u = function() {
  if (this.k9_1 === 0)
    throw NoSuchElementException_init_$Create$();
  this.k9_1 = this.k9_1 - 1 | 0;
  return this.l9_1.u();
};
protoOf(TakeSequence$iterator$1).t = function() {
  return this.k9_1 > 0 ? this.l9_1.t() : false;
};
function TakeSequence(sequence2, count) {
  this.m9_1 = sequence2;
  this.n9_1 = count;
  if (!(this.n9_1 >= 0)) {
    var message2 = "count must be non-negative, but was " + this.n9_1 + ".";
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
}
protoOf(TakeSequence).a5 = function(n) {
  return n >= this.n9_1 ? emptySequence() : new SubSequence(this.m9_1, n, this.n9_1);
};
protoOf(TakeSequence).b5 = function(n) {
  return n >= this.n9_1 ? this : new TakeSequence(this.m9_1, n);
};
protoOf(TakeSequence).m = function() {
  return new TakeSequence$iterator$1(this);
};
function EmptySequence() {
}
protoOf(EmptySequence).m = function() {
  return EmptyIterator_instance;
};
protoOf(EmptySequence).a5 = function(n) {
  return EmptySequence_instance;
};
protoOf(EmptySequence).b5 = function(n) {
  return EmptySequence_instance;
};
var EmptySequence_instance;
function drop_2($this) {
  while ($this.p9_1 < $this.q9_1.s9_1 ? $this.o9_1.t() : false) {
    $this.o9_1.u();
    $this.p9_1 = $this.p9_1 + 1 | 0;
  }
}
function _get_count__iw3m8u($this) {
  return $this.t9_1 - $this.s9_1 | 0;
}
function SubSequence$iterator$1(this$0) {
  this.q9_1 = this$0;
  this.o9_1 = this$0.r9_1.m();
  this.p9_1 = 0;
}
protoOf(SubSequence$iterator$1).t = function() {
  drop_2(this);
  return this.p9_1 < this.q9_1.t9_1 ? this.o9_1.t() : false;
};
protoOf(SubSequence$iterator$1).u = function() {
  drop_2(this);
  if (this.p9_1 >= this.q9_1.t9_1)
    throw NoSuchElementException_init_$Create$();
  this.p9_1 = this.p9_1 + 1 | 0;
  return this.o9_1.u();
};
function SubSequence(sequence2, startIndex, endIndex) {
  this.r9_1 = sequence2;
  this.s9_1 = startIndex;
  this.t9_1 = endIndex;
  if (!(this.s9_1 >= 0)) {
    var message2 = "startIndex should be non-negative, but is " + this.s9_1;
    throw IllegalArgumentException_init_$Create$_0(toString_2(message2));
  }
  if (!(this.t9_1 >= 0)) {
    var message_0 = "endIndex should be non-negative, but is " + this.t9_1;
    throw IllegalArgumentException_init_$Create$_0(toString_2(message_0));
  }
  if (!(this.t9_1 >= this.s9_1)) {
    var message_1 = "endIndex should be not less than startIndex, but was " + this.t9_1 + " < " + this.s9_1;
    throw IllegalArgumentException_init_$Create$_0(toString_2(message_1));
  }
}
protoOf(SubSequence).a5 = function(n) {
  return n >= _get_count__iw3m8u(this) ? emptySequence() : new SubSequence(this.r9_1, this.s9_1 + n | 0, this.t9_1);
};
protoOf(SubSequence).b5 = function(n) {
  return n >= _get_count__iw3m8u(this) ? this : new SubSequence(this.r9_1, this.s9_1, this.s9_1 + n | 0);
};
protoOf(SubSequence).m = function() {
  return new SubSequence$iterator$1(this);
};
function emptySet() {
  return EmptySet_getInstance();
}
function hashSetOf(elements) {
  return toCollection(elements, HashSet_init_$Create$_0(mapCapacity(elements.length)));
}
function optimizeReadOnlySet(_this__u8e3s4) {
  switch (_this__u8e3s4.i()) {
    case 0:
      return emptySet();
    case 1:
      return setOf(_this__u8e3s4.m().u());
    default:
      return _this__u8e3s4;
  }
}
function EmptySet() {
  EmptySet_instance = this;
  this.u9_1 = new Long(1993859828, 793161749);
}
protoOf(EmptySet).equals = function(other) {
  var tmp;
  if (!(other == null) ? isInterface(other, Set$1) : false) {
    tmp = other.p();
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(EmptySet).hashCode = function() {
  return 0;
};
protoOf(EmptySet).toString = function() {
  return "[]";
};
protoOf(EmptySet).i = function() {
  return 0;
};
protoOf(EmptySet).p = function() {
  return true;
};
protoOf(EmptySet).s7 = function(elements) {
  return elements.p();
};
protoOf(EmptySet).o = function(elements) {
  return this.s7(elements);
};
protoOf(EmptySet).m = function() {
  return EmptyIterator_instance;
};
var EmptySet_instance;
function EmptySet_getInstance() {
  if (EmptySet_instance == null)
    new EmptySet();
  return EmptySet_instance;
}
function naturalOrder() {
  var tmp = NaturalOrderComparator_instance;
  return isInterface(tmp, Comparator) ? tmp : THROW_CCE();
}
function NaturalOrderComparator() {
}
protoOf(NaturalOrderComparator).v9 = function(a, b) {
  return compareTo_0(a, b);
};
protoOf(NaturalOrderComparator).compare = function(a, b) {
  var tmp = (!(a == null) ? isComparable(a) : false) ? a : THROW_CCE();
  return this.v9(tmp, (!(b == null) ? isComparable(b) : false) ? b : THROW_CCE());
};
var NaturalOrderComparator_instance;
function compareValues(a, b) {
  if (a === b)
    return 0;
  if (a == null)
    return -1;
  if (b == null)
    return 1;
  return compareTo_0((!(a == null) ? isComparable(a) : false) ? a : THROW_CCE(), b);
}
function Continuation() {
}
function Key() {
}
var Key_instance;
function ContinuationInterceptor() {
}
function EmptyCoroutineContext() {
  EmptyCoroutineContext_instance = this;
  this.w9_1 = new Long(0, 0);
}
protoOf(EmptyCoroutineContext).t6 = function(key2) {
  return null;
};
protoOf(EmptyCoroutineContext).hashCode = function() {
  return 0;
};
protoOf(EmptyCoroutineContext).toString = function() {
  return "EmptyCoroutineContext";
};
var EmptyCoroutineContext_instance;
function EmptyCoroutineContext_getInstance() {
  if (EmptyCoroutineContext_instance == null)
    new EmptyCoroutineContext();
  return EmptyCoroutineContext_instance;
}
function get_COROUTINE_SUSPENDED() {
  return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
}
var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
var CoroutineSingletons_entriesInitialized;
function CoroutineSingletons_initEntries() {
  if (CoroutineSingletons_entriesInitialized)
    return Unit_instance;
  CoroutineSingletons_entriesInitialized = true;
  CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons("COROUTINE_SUSPENDED", 0);
  new CoroutineSingletons("UNDECIDED", 1);
  new CoroutineSingletons("RESUMED", 2);
}
function CoroutineSingletons(name, ordinal) {
  Enum.call(this, name, ordinal);
}
function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
  CoroutineSingletons_initEntries();
  return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
}
function getProgressionLastElement(start, end, step) {
  var tmp;
  if (step > 0) {
    tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
  } else if (step < 0) {
    tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
  } else {
    throw IllegalArgumentException_init_$Create$_0("Step is zero.");
  }
  return tmp;
}
function differenceModulo(a, b, c2) {
  return mod(mod(a, c2) - mod(b, c2) | 0, c2);
}
function mod(a, b) {
  var mod2 = a % b | 0;
  return mod2 >= 0 ? mod2 : mod2 + b | 0;
}
function Companion_8() {
  Companion_instance_8 = this;
  this.x9_1 = new IntRange(1, 0);
}
var Companion_instance_8;
function Companion_getInstance_8() {
  if (Companion_instance_8 == null)
    new Companion_8();
  return Companion_instance_8;
}
function IntRange(start, endInclusive) {
  Companion_getInstance_8();
  IntProgression.call(this, start, endInclusive, 1);
}
protoOf(IntRange).p = function() {
  return this.ba_1 > this.ca_1;
};
protoOf(IntRange).equals = function(other) {
  var tmp;
  if (other instanceof IntRange) {
    tmp = (this.p() ? other.p() : false) ? true : this.ba_1 === other.ba_1 ? this.ca_1 === other.ca_1 : false;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(IntRange).hashCode = function() {
  return this.p() ? -1 : imul_0(31, this.ba_1) + this.ca_1 | 0;
};
protoOf(IntRange).toString = function() {
  return "" + this.ba_1 + ".." + this.ca_1;
};
function Companion_9() {
  Companion_instance_9 = this;
  this.ea_1 = new CharRange(_Char___init__impl__6a9atx(1), _Char___init__impl__6a9atx(0));
}
var Companion_instance_9;
function Companion_getInstance_9() {
  if (Companion_instance_9 == null)
    new Companion_9();
  return Companion_instance_9;
}
function CharRange(start, endInclusive) {
  Companion_getInstance_9();
  CharProgression.call(this, start, endInclusive, 1);
}
protoOf(CharRange).p = function() {
  return Char__compareTo_impl_ypi4mb(this.ia_1, this.ja_1) > 0;
};
protoOf(CharRange).equals = function(other) {
  var tmp;
  if (other instanceof CharRange) {
    tmp = (this.p() ? other.p() : false) ? true : this.ia_1 === other.ia_1 ? this.ja_1 === other.ja_1 : false;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(CharRange).hashCode = function() {
  var tmp;
  if (this.p()) {
    tmp = -1;
  } else {
    var this_0 = this.ia_1;
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    var tmp_0 = imul_0(31, tmp$ret$0);
    var this_1 = this.ja_1;
    tmp = tmp_0 + Char__toInt_impl_vasixd(this_1) | 0;
  }
  return tmp;
};
protoOf(CharRange).toString = function() {
  return toString_0(this.ia_1) + ".." + toString_0(this.ja_1);
};
function IntProgressionIterator(first2, last2, step) {
  IntIterator.call(this);
  this.la_1 = step;
  this.ma_1 = last2;
  this.na_1 = this.la_1 > 0 ? first2 <= last2 : first2 >= last2;
  this.oa_1 = this.na_1 ? first2 : this.ma_1;
}
protoOf(IntProgressionIterator).t = function() {
  return this.na_1;
};
protoOf(IntProgressionIterator).t7 = function() {
  var value = this.oa_1;
  if (value === this.ma_1) {
    if (!this.na_1)
      throw NoSuchElementException_init_$Create$();
    this.na_1 = false;
  } else {
    this.oa_1 = this.oa_1 + this.la_1 | 0;
  }
  return value;
};
function CharProgressionIterator(first2, last2, step) {
  CharIterator.call(this);
  this.pa_1 = step;
  var tmp = this;
  tmp.qa_1 = Char__toInt_impl_vasixd(last2);
  this.ra_1 = this.pa_1 > 0 ? Char__compareTo_impl_ypi4mb(first2, last2) <= 0 : Char__compareTo_impl_ypi4mb(first2, last2) >= 0;
  var tmp_0 = this;
  var tmp_1;
  if (this.ra_1) {
    tmp_1 = Char__toInt_impl_vasixd(first2);
  } else {
    tmp_1 = this.qa_1;
  }
  tmp_0.sa_1 = tmp_1;
}
protoOf(CharProgressionIterator).t = function() {
  return this.ra_1;
};
protoOf(CharProgressionIterator).v7 = function() {
  var value = this.sa_1;
  if (value === this.qa_1) {
    if (!this.ra_1)
      throw NoSuchElementException_init_$Create$();
    this.ra_1 = false;
  } else {
    this.sa_1 = this.sa_1 + this.pa_1 | 0;
  }
  return numberToChar(value);
};
function Companion_10() {
}
protoOf(Companion_10).z4 = function(rangeStart, rangeEnd, step) {
  return new IntProgression(rangeStart, rangeEnd, step);
};
var Companion_instance_10;
function IntProgression(start, endInclusive, step) {
  if (step === 0)
    throw IllegalArgumentException_init_$Create$_0("Step must be non-zero.");
  if (step === IntCompanionObject_instance.MIN_VALUE)
    throw IllegalArgumentException_init_$Create$_0("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
  this.ba_1 = start;
  this.ca_1 = getProgressionLastElement(start, endInclusive, step);
  this.da_1 = step;
}
protoOf(IntProgression).m = function() {
  return new IntProgressionIterator(this.ba_1, this.ca_1, this.da_1);
};
protoOf(IntProgression).p = function() {
  return this.da_1 > 0 ? this.ba_1 > this.ca_1 : this.ba_1 < this.ca_1;
};
protoOf(IntProgression).equals = function(other) {
  var tmp;
  if (other instanceof IntProgression) {
    tmp = (this.p() ? other.p() : false) ? true : (this.ba_1 === other.ba_1 ? this.ca_1 === other.ca_1 : false) ? this.da_1 === other.da_1 : false;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(IntProgression).hashCode = function() {
  return this.p() ? -1 : imul_0(31, imul_0(31, this.ba_1) + this.ca_1 | 0) + this.da_1 | 0;
};
protoOf(IntProgression).toString = function() {
  return this.da_1 > 0 ? "" + this.ba_1 + ".." + this.ca_1 + " step " + this.da_1 : "" + this.ba_1 + " downTo " + this.ca_1 + " step " + (-this.da_1 | 0);
};
function Companion_11() {
}
function CharProgression(start, endInclusive, step) {
  if (step === 0)
    throw IllegalArgumentException_init_$Create$_0("Step must be non-zero.");
  if (step === IntCompanionObject_instance.MIN_VALUE)
    throw IllegalArgumentException_init_$Create$_0("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
  this.ia_1 = start;
  var tmp = this;
  var tmp_0 = Char__toInt_impl_vasixd(start);
  var tmp$ret$1 = Char__toInt_impl_vasixd(endInclusive);
  tmp.ja_1 = numberToChar(getProgressionLastElement(tmp_0, tmp$ret$1, step));
  this.ka_1 = step;
}
protoOf(CharProgression).m = function() {
  return new CharProgressionIterator(this.ia_1, this.ja_1, this.ka_1);
};
protoOf(CharProgression).p = function() {
  return this.ka_1 > 0 ? Char__compareTo_impl_ypi4mb(this.ia_1, this.ja_1) > 0 : Char__compareTo_impl_ypi4mb(this.ia_1, this.ja_1) < 0;
};
protoOf(CharProgression).equals = function(other) {
  var tmp;
  if (other instanceof CharProgression) {
    tmp = (this.p() ? other.p() : false) ? true : (this.ia_1 === other.ia_1 ? this.ja_1 === other.ja_1 : false) ? this.ka_1 === other.ka_1 : false;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(CharProgression).hashCode = function() {
  var tmp;
  if (this.p()) {
    tmp = -1;
  } else {
    var this_0 = this.ia_1;
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    var tmp_0 = imul_0(31, tmp$ret$0);
    var this_1 = this.ja_1;
    var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
    tmp = imul_0(31, tmp_0 + tmp$ret$1 | 0) + this.ka_1 | 0;
  }
  return tmp;
};
protoOf(CharProgression).toString = function() {
  return this.ka_1 > 0 ? toString_0(this.ia_1) + ".." + toString_0(this.ja_1) + " step " + this.ka_1 : toString_0(this.ia_1) + " downTo " + toString_0(this.ja_1) + " step " + (-this.ka_1 | 0);
};
function appendElement(_this__u8e3s4, element, transform2) {
  if (!(transform2 == null)) {
    _this__u8e3s4.j4(transform2(element));
  } else {
    if (element == null ? true : isCharSequence(element)) {
      _this__u8e3s4.j4(element);
    } else {
      if (element instanceof Char) {
        _this__u8e3s4.d4(element.e5_1);
      } else {
        _this__u8e3s4.j4(toString_1(element));
      }
    }
  }
}
function equals_0(_this__u8e3s4, other, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  if (_this__u8e3s4 === other)
    return true;
  if (!ignoreCase)
    return false;
  var thisUpper = uppercaseChar(_this__u8e3s4);
  var otherUpper = uppercaseChar(other);
  var tmp;
  if (thisUpper === otherUpper) {
    tmp = true;
  } else {
    var tmp$ret$2 = toString_0(thisUpper).toLowerCase();
    var tmp_0 = charSequenceGet(tmp$ret$2, 0);
    var tmp$ret$6 = toString_0(otherUpper).toLowerCase();
    tmp = tmp_0 === charSequenceGet(tmp$ret$6, 0);
  }
  return tmp;
}
function toIntOrNull(_this__u8e3s4) {
  return toIntOrNull_0(_this__u8e3s4, 10);
}
function numberFormatError(input) {
  throw NumberFormatException_init_$Create$_0("Invalid number format: '" + input + "'");
}
function toIntOrNull_0(_this__u8e3s4, radix) {
  checkRadix(radix);
  var length = _this__u8e3s4.length;
  if (length === 0)
    return null;
  var start;
  var isNegative2;
  var limit;
  var firstChar = charSequenceGet(_this__u8e3s4, 0);
  if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
    if (length === 1)
      return null;
    start = 1;
    if (firstChar === _Char___init__impl__6a9atx(45)) {
      isNegative2 = true;
      limit = IntCompanionObject_instance.MIN_VALUE;
    } else if (firstChar === _Char___init__impl__6a9atx(43)) {
      isNegative2 = false;
      limit = -IntCompanionObject_instance.MAX_VALUE | 0;
    } else
      return null;
  } else {
    start = 0;
    isNegative2 = false;
    limit = -IntCompanionObject_instance.MAX_VALUE | 0;
  }
  var limitForMaxRadix = (-IntCompanionObject_instance.MAX_VALUE | 0) / 36 | 0;
  var limitBeforeMul = limitForMaxRadix;
  var result = 0;
  var inductionVariable = start;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var digit = digitOf(charSequenceGet(_this__u8e3s4, i), radix);
      if (digit < 0)
        return null;
      if (result < limitBeforeMul) {
        if (limitBeforeMul === limitForMaxRadix) {
          limitBeforeMul = limit / radix | 0;
          if (result < limitBeforeMul) {
            return null;
          }
        } else {
          return null;
        }
      }
      result = imul_0(result, radix);
      if (result < (limit + digit | 0))
        return null;
      result = result - digit | 0;
    } while (inductionVariable < length);
  return isNegative2 ? result : -result | 0;
}
function get_lastIndex_1(_this__u8e3s4) {
  return charSequenceLength(_this__u8e3s4) - 1 | 0;
}
function contains_0(_this__u8e3s4, char, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  return indexOf_0(_this__u8e3s4, char, VOID, ignoreCase) >= 0;
}
function startsWith_1(_this__u8e3s4, prefix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (!ignoreCase) {
    tmp_0 = typeof _this__u8e3s4 === "string";
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = typeof prefix === "string";
  } else {
    tmp = false;
  }
  if (tmp)
    return startsWith_0(_this__u8e3s4, prefix);
  else {
    return regionMatchesImpl(_this__u8e3s4, 0, prefix, 0, charSequenceLength(prefix), ignoreCase);
  }
}
function contains_1(_this__u8e3s4, other, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  if (typeof other === "string") {
    tmp = indexOf_1(_this__u8e3s4, other, VOID, ignoreCase) >= 0;
  } else {
    tmp = indexOf_2(_this__u8e3s4, other, 0, charSequenceLength(_this__u8e3s4), ignoreCase) >= 0;
  }
  return tmp;
}
function endsWith_0(_this__u8e3s4, suffix, ignoreCase) {
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (!ignoreCase) {
    tmp_0 = typeof _this__u8e3s4 === "string";
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = typeof suffix === "string";
  } else {
    tmp = false;
  }
  if (tmp)
    return endsWith(_this__u8e3s4, suffix);
  else {
    return regionMatchesImpl(_this__u8e3s4, charSequenceLength(_this__u8e3s4) - charSequenceLength(suffix) | 0, suffix, 0, charSequenceLength(suffix), ignoreCase);
  }
}
function indexOf_0(_this__u8e3s4, char, startIndex, ignoreCase) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (ignoreCase) {
    tmp_0 = true;
  } else {
    tmp_0 = !(typeof _this__u8e3s4 === "string");
  }
  if (tmp_0) {
    var tmp$ret$0 = charArrayOf([char]);
    tmp = indexOfAny(_this__u8e3s4, tmp$ret$0, startIndex, ignoreCase);
  } else {
    var str = toString_0(char);
    tmp = _this__u8e3s4.indexOf(str, startIndex);
  }
  return tmp;
}
function regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
  if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this__u8e3s4) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
    return false;
  }
  var inductionVariable = 0;
  if (inductionVariable < length)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!equals_0(charSequenceGet(_this__u8e3s4, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
        return false;
    } while (inductionVariable < length);
  return true;
}
function indexOf_1(_this__u8e3s4, string, startIndex, ignoreCase) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  var tmp_0;
  if (ignoreCase) {
    tmp_0 = true;
  } else {
    tmp_0 = !(typeof _this__u8e3s4 === "string");
  }
  if (tmp_0) {
    tmp = indexOf_2(_this__u8e3s4, string, startIndex, charSequenceLength(_this__u8e3s4), ignoreCase);
  } else {
    tmp = _this__u8e3s4.indexOf(string, startIndex);
  }
  return tmp;
}
function indexOf_2(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last2) {
  last2 = last2 === VOID ? false : last2;
  var indices = !last2 ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__u8e3s4))) : downTo(coerceAtMost(startIndex, get_lastIndex_1(_this__u8e3s4)), coerceAtLeast(endIndex, 0));
  var tmp;
  if (typeof _this__u8e3s4 === "string") {
    tmp = typeof other === "string";
  } else {
    tmp = false;
  }
  if (tmp) {
    var inductionVariable = indices.ba_1;
    var last_0 = indices.ca_1;
    var step = indices.da_1;
    if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step | 0;
        if (regionMatches(other, 0, _this__u8e3s4, index, charSequenceLength(other), ignoreCase))
          return index;
      } while (!(index === last_0));
  } else {
    var inductionVariable_0 = indices.ba_1;
    var last_1 = indices.ca_1;
    var step_0 = indices.da_1;
    if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + step_0 | 0;
        if (regionMatchesImpl(other, 0, _this__u8e3s4, index_0, charSequenceLength(other), ignoreCase))
          return index_0;
      } while (!(index_0 === last_1));
  }
  return -1;
}
function trim(_this__u8e3s4) {
  var startIndex = 0;
  var endIndex = charSequenceLength(_this__u8e3s4) - 1 | 0;
  var startFound = false;
  $l$loop:
    while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var match = isWhitespace(charSequenceGet(_this__u8e3s4, index));
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break $l$loop;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
  return charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex + 1 | 0);
}
function indexOfAny(_this__u8e3s4, chars, startIndex, ignoreCase) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  ignoreCase = ignoreCase === VOID ? false : ignoreCase;
  var tmp;
  if (!ignoreCase ? chars.length === 1 : false) {
    tmp = typeof _this__u8e3s4 === "string";
  } else {
    tmp = false;
  }
  if (tmp) {
    var char = single(chars);
    var str = toString_0(char);
    return _this__u8e3s4.indexOf(str, startIndex);
  }
  var inductionVariable = coerceAtLeast(startIndex, 0);
  var last2 = get_lastIndex_1(_this__u8e3s4);
  if (inductionVariable <= last2)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var charAtIndex = charSequenceGet(_this__u8e3s4, index);
      var tmp$ret$4;
      $l$block: {
        var inductionVariable_0 = 0;
        var last_0 = chars.length;
        while (inductionVariable_0 < last_0) {
          var element = chars[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, charAtIndex, ignoreCase)) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      if (tmp$ret$4)
        return index;
    } while (!(index === last2));
  return -1;
}
function get_indices(_this__u8e3s4) {
  return numberRangeToNumber(0, charSequenceLength(_this__u8e3s4) - 1 | 0);
}
function contentEqualsImpl(_this__u8e3s4, other) {
  var tmp;
  if (!(_this__u8e3s4 == null) ? typeof _this__u8e3s4 === "string" : false) {
    tmp = !(other == null) ? typeof other === "string" : false;
  } else {
    tmp = false;
  }
  if (tmp) {
    return equals(_this__u8e3s4, other);
  }
  if (_this__u8e3s4 === other)
    return true;
  if ((_this__u8e3s4 == null ? true : other == null) ? true : !(charSequenceLength(_this__u8e3s4) === charSequenceLength(other)))
    return false;
  var inductionVariable = 0;
  var last2 = charSequenceLength(_this__u8e3s4);
  if (inductionVariable < last2)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      if (!(charSequenceGet(_this__u8e3s4, i) === charSequenceGet(other, i))) {
        return false;
      }
    } while (inductionVariable < last2);
  return true;
}
function UnsafeLazyImpl(initializer) {
  this.ta_1 = initializer;
  this.ua_1 = UNINITIALIZED_VALUE_instance;
}
protoOf(UnsafeLazyImpl).h4 = function() {
  if (this.ua_1 === UNINITIALIZED_VALUE_instance) {
    this.ua_1 = ensureNotNull(this.ta_1)();
    this.ta_1 = null;
  }
  var tmp = this.ua_1;
  return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
};
protoOf(UnsafeLazyImpl).va = function() {
  return !(this.ua_1 === UNINITIALIZED_VALUE_instance);
};
protoOf(UnsafeLazyImpl).toString = function() {
  return this.va() ? toString_1(this.h4()) : "Lazy value not initialized yet.";
};
function UNINITIALIZED_VALUE() {
}
var UNINITIALIZED_VALUE_instance;
function _Result___init__impl__xyqfz8(value) {
  return value;
}
function _Result___get_value__impl__bjfvqg($this) {
  return $this;
}
function _Result___get_isFailure__impl__jpiriv($this) {
  var tmp = _Result___get_value__impl__bjfvqg($this);
  return tmp instanceof Failure;
}
function Result__exceptionOrNull_impl_p6xea9($this) {
  var tmp;
  if (_Result___get_value__impl__bjfvqg($this) instanceof Failure) {
    tmp = _Result___get_value__impl__bjfvqg($this).wa_1;
  } else {
    tmp = null;
  }
  return tmp;
}
function Companion_12() {
}
function Failure(exception) {
  this.wa_1 = exception;
}
protoOf(Failure).equals = function(other) {
  var tmp;
  if (other instanceof Failure) {
    tmp = equals(this.wa_1, other.wa_1);
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(Failure).hashCode = function() {
  return hashCode(this.wa_1);
};
protoOf(Failure).toString = function() {
  return "Failure(" + this.wa_1 + ")";
};
function createFailure(exception) {
  return new Failure(exception);
}
function throwOnFailure(_this__u8e3s4) {
  var tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
  if (tmp instanceof Failure)
    throw _Result___get_value__impl__bjfvqg(_this__u8e3s4).wa_1;
}
function NotImplementedError(message2) {
  message2 = message2 === VOID ? "An operation is not implemented." : message2;
  Error_init_$Init$_0(message2, this);
  captureStack(this, NotImplementedError);
}
function Pair(first2, second) {
  this.xa_1 = first2;
  this.ya_1 = second;
}
protoOf(Pair).toString = function() {
  return "(" + this.xa_1 + ", " + this.ya_1 + ")";
};
protoOf(Pair).za = function() {
  return this.xa_1;
};
protoOf(Pair).ab = function() {
  return this.ya_1;
};
protoOf(Pair).hashCode = function() {
  var result = this.xa_1 == null ? 0 : hashCode(this.xa_1);
  result = imul_0(result, 31) + (this.ya_1 == null ? 0 : hashCode(this.ya_1)) | 0;
  return result;
};
protoOf(Pair).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof Pair))
    return false;
  var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
  if (!equals(this.xa_1, tmp0_other_with_cast.xa_1))
    return false;
  if (!equals(this.ya_1, tmp0_other_with_cast.ya_1))
    return false;
  return true;
};
function to(_this__u8e3s4, that) {
  return new Pair(_this__u8e3s4, that);
}
function _UShort___init__impl__jigrne(data) {
  return data;
}
function _UShort___get_data__impl__g0245($this) {
  return $this;
}
protoOf(InternalHashMap).s2 = containsAllEntries;
Unit_instance = new Unit();
IntCompanionObject_instance = new IntCompanionObject();
_stableSortingIsSupported = null;
Companion_instance_0$1 = new Companion_0$1();
CompletedContinuation_instance = new CompletedContinuation();
Companion_instance_5 = new Companion_5();
Companion_instance_7 = new Companion_7();
EmptyIterator_instance = new EmptyIterator();
EmptySequence_instance = new EmptySequence();
NaturalOrderComparator_instance = new NaturalOrderComparator();
Key_instance = new Key();
Companion_instance_10 = new Companion_10();
UNINITIALIZED_VALUE_instance = new UNINITIALIZED_VALUE();
var imul = Math.imul;
setMetadataFor(Companion, "Companion", objectMeta);
setMetadataFor(CommonSelector, "CommonSelector", classMeta);
setMetadataFor(CommonTransform, "CommonTransform", classMeta);
setMetadataFor(Companion_0, "Companion", objectMeta);
setMetadataFor(ExtSyntaxError, "ExtSyntaxError", classMeta, Exception);
setMetadataFor(Companion_1, "Companion", objectMeta);
setMetadataFor(Selector, "Selector", classMeta);
setMetadataFor(Transform$_init_$lambda$slambda_haa4hj, "Transform$<init>$lambda$slambda", classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(Transform$_init_$lambda$slambda_haa4hj_1, "Transform$<init>$lambda$slambda", classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(Transform$_init_$lambda$slambda_haa4hj_3, "Transform$<init>$lambda$slambda", classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(Transform$_init_$lambda$slambda_haa4hj_5, "Transform$<init>$lambda$slambda", classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(Transform$querySelectorAll$lambda$slambda, "Transform$querySelectorAll$lambda$slambda", classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(Transform$querySelectorTrackAll$lambda$slambda, "Transform$querySelectorTrackAll$lambda$slambda", classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(Transform, "Transform", classMeta);
setMetadataFor(Expression, "Expression", classMeta);
setMetadataFor(BinaryExpression, "BinaryExpression", classMeta, Expression);
setMetadataFor(sam$kotlin_Comparator$0, "sam$kotlin_Comparator$0", classMeta, VOID, [Comparator]);
setMetadataFor(Companion_2, "Companion", objectMeta);
setMetadataFor(CompareOperator, "CompareOperator", classMeta);
setMetadataFor(Equal, "Equal", objectMeta, CompareOperator);
setMetadataFor(NotEqual, "NotEqual", objectMeta, CompareOperator);
setMetadataFor(Start, "Start", objectMeta, CompareOperator);
setMetadataFor(NotStart, "NotStart", objectMeta, CompareOperator);
setMetadataFor(Include, "Include", objectMeta, CompareOperator);
setMetadataFor(NotInclude, "NotInclude", objectMeta, CompareOperator);
setMetadataFor(End, "End", objectMeta, CompareOperator);
setMetadataFor(NotEnd, "NotEnd", objectMeta, CompareOperator);
setMetadataFor(Less, "Less", objectMeta, CompareOperator);
setMetadataFor(LessEqual, "LessEqual", objectMeta, CompareOperator);
setMetadataFor(More, "More", objectMeta, CompareOperator);
setMetadataFor(MoreEqual, "MoreEqual", objectMeta, CompareOperator);
setMetadataFor(ConnectExpression, "ConnectExpression", classMeta);
setMetadataFor(sam$kotlin_Comparator$0_0, "sam$kotlin_Comparator$0", classMeta, VOID, [Comparator]);
setMetadataFor(Companion_3, "Companion", objectMeta);
setMetadataFor(ConnectOperator, "ConnectOperator", classMeta);
setMetadataFor(BeforeBrother, "BeforeBrother", objectMeta, ConnectOperator);
setMetadataFor(AfterBrother, "AfterBrother", objectMeta, ConnectOperator);
setMetadataFor(Ancestor, "Ancestor", objectMeta, ConnectOperator);
setMetadataFor(Child, "Child", objectMeta, ConnectOperator);
setMetadataFor(Descendant, "Descendant", objectMeta, ConnectOperator);
setMetadataFor(ConnectSegment$traversal$o$invoke$slambda, "ConnectSegment$traversal$o$invoke$slambda", classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
setMetadataFor(ConnectSegment$traversal$1, VOID, classMeta);
setMetadataFor(ConnectSegment$traversal$2, VOID, classMeta);
setMetadataFor(ConnectSegment, "ConnectSegment", classMeta, VOID, VOID, ConnectSegment);
setMetadataFor(ConnectWrapper, "ConnectWrapper", classMeta);
setMetadataFor(LogicalExpression, "LogicalExpression", classMeta, Expression);
setMetadataFor(sam$kotlin_Comparator$0_1, "sam$kotlin_Comparator$0", classMeta, VOID, [Comparator]);
setMetadataFor(Companion_4, "Companion", objectMeta);
setMetadataFor(LogicalOperator, "LogicalOperator", classMeta);
setMetadataFor(AndOperator, "AndOperator", objectMeta, LogicalOperator);
setMetadataFor(OrOperator, "OrOperator", objectMeta, LogicalOperator);
setMetadataFor(PolynomialExpression$traversal$1, VOID, classMeta);
setMetadataFor(PolynomialExpression, "PolynomialExpression", classMeta, ConnectExpression, VOID, PolynomialExpression);
setMetadataFor(PropertySegment$matchName$1, VOID, classMeta);
setMetadataFor(PropertySegment$matchName$2, VOID, classMeta);
setMetadataFor(PropertySegment, "PropertySegment", classMeta);
setMetadataFor(PropertyWrapper, "PropertyWrapper", classMeta);
setMetadataFor(TupleExpression$traversal$1, VOID, classMeta);
setMetadataFor(TupleExpression, "TupleExpression", classMeta, ConnectExpression);
setMetadataFor(Parser, "Parser", classMeta);
setMetadataFor(ParserResult, "ParserResult", classMeta);
setMetadataFor(ParserSet, "ParserSet", objectMeta);
setMetadataFor(FilterIndexesSequence$iterator$1, VOID, classMeta);
setMetadataFor(FilterIndexesSequence, "FilterIndexesSequence", classMeta);
function Companion() {
}
protoOf(Companion).parse = function(source2) {
  return new CommonSelector(Companion_instance_1.bb(source2));
};
protoOf(Companion).check = function(source2) {
  return Companion_instance_1.cb(source2);
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
function CommonSelector(selector) {
  this.db_1 = selector;
  this.tracks = this.db_1.jb();
  this.trackIndex = this.db_1.gb_1;
}
protoOf(CommonSelector).kb = function() {
  return this.db_1;
};
protoOf(CommonSelector).jb = function() {
  return this.tracks;
};
protoOf(CommonSelector).lb = function() {
  return this.trackIndex;
};
protoOf(CommonSelector).match = function(node, transform2) {
  return this.db_1.nb(node, transform2.mb_1);
};
protoOf(CommonSelector).matchTrack = function(node, transform2) {
  var tmp0_safe_receiver = this.db_1.ob(node, transform2.mb_1);
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    tmp = copyToArray(tmp0_safe_receiver);
  }
  var tmp_0 = tmp;
  return (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE();
};
protoOf(CommonSelector).toString = function() {
  return this.db_1.toString();
};
function CommonTransform$transform$lambda($getChildren) {
  return function(node) {
    return asSequence($getChildren(node));
  };
}
function CommonTransform$querySelectorAll$lambda(this$0) {
  return function(node, selector) {
    var this_0 = toList_0(this$0.mb_1.bc_1(node, selector.db_1));
    var result = copyToArray(this_0);
    return isArray(result) ? result : THROW_CCE();
  };
}
function CommonTransform$querySelector$lambda(this$0) {
  return function(node, selector) {
    return firstOrNull_0(this$0.mb_1.bc_1(node, selector.db_1));
  };
}
function CommonTransform$querySelectorTrackAll$lambda$lambda(it) {
  var tmp = copyToArray(it);
  return isArray(tmp) ? tmp : THROW_CCE();
}
function CommonTransform$querySelectorTrackAll$lambda(this$0) {
  return function(node, selector) {
    var tmp = this$0.mb_1.dc_1(node, selector.db_1);
    var this_0 = toList_0(map(tmp, CommonTransform$querySelectorTrackAll$lambda$lambda));
    var result = copyToArray(this_0);
    return isArray(result) ? result : THROW_CCE();
  };
}
function CommonTransform$querySelectorTrack$lambda(this$0) {
  return function(node, selector) {
    var tmp0_safe_receiver = firstOrNull_0(this$0.mb_1.dc_1(node, selector.db_1));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = copyToArray(tmp0_safe_receiver);
    }
    var tmp_0 = tmp;
    return (tmp_0 == null ? true : isArray(tmp_0)) ? tmp_0 : THROW_CCE();
  };
}
function CommonTransform(getAttr, getName, getChildren, getParent) {
  var tmp = this;
  tmp.mb_1 = new Transform(getAttr, getName, CommonTransform$transform$lambda(getChildren), VOID, getParent);
  var tmp_0 = this;
  tmp_0.querySelectorAll = CommonTransform$querySelectorAll$lambda(this);
  var tmp_1 = this;
  tmp_1.querySelector = CommonTransform$querySelector$lambda(this);
  var tmp_2 = this;
  tmp_2.querySelectorTrackAll = CommonTransform$querySelectorTrackAll$lambda(this);
  var tmp_3 = this;
  tmp_3.querySelectorTrack = CommonTransform$querySelectorTrack$lambda(this);
}
protoOf(CommonTransform).fc = function() {
  return this.mb_1;
};
protoOf(CommonTransform).gc = function() {
  return this.querySelectorAll;
};
protoOf(CommonTransform).hc = function() {
  return this.querySelector;
};
protoOf(CommonTransform).ic = function() {
  return this.querySelectorTrackAll;
};
protoOf(CommonTransform).jc = function() {
  return this.querySelectorTrack;
};
function Companion_0() {
}
protoOf(Companion_0).kc = function(source2, offset, value, expectedValue) {
  var tmp;
  if (offset >= source2.length) {
    tmp = true;
  } else {
    var tmp_0;
    if (charSequenceLength(value) > 0) {
      tmp_0 = !contains_0(value, charSequenceGet(source2, offset));
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  }
  if (tmp) {
    throw new ExtSyntaxError(expectedValue == null ? value : expectedValue, offset, source2);
  }
};
protoOf(Companion_0).assert = function(source2, offset, value, expectedValue, $super) {
  value = value === VOID ? "" : value;
  expectedValue = expectedValue === VOID ? null : expectedValue;
  return this.kc(source2, offset, value, expectedValue);
};
protoOf(Companion_0).lc = function(source2, offset, expectedValue) {
  throw new ExtSyntaxError(expectedValue, offset, source2);
};
protoOf(Companion_0).throwError = function(source2, offset, expectedValue, $super) {
  expectedValue = expectedValue === VOID ? "" : expectedValue;
  return this.lc(source2, offset, expectedValue);
};
var Companion_instance_0;
function ExtSyntaxError(expectedValue, position, source2) {
  var tmp = getOrNull(source2, position);
  Exception_init_$Init$_0("expected " + expectedValue + " in selector at position " + position + ", but got " + toString_1(tmp == null ? null : new Char(tmp)), this);
  captureStack(this, ExtSyntaxError);
  this.expectedValue = expectedValue;
  this.position = position;
  this.source = source2;
}
protoOf(ExtSyntaxError).mc = function() {
  return this.expectedValue;
};
protoOf(ExtSyntaxError).nc = function() {
  return this.position;
};
protoOf(ExtSyntaxError).oc = function() {
  return this.source;
};
protoOf(ExtSyntaxError).za = function() {
  return this.expectedValue;
};
protoOf(ExtSyntaxError).ab = function() {
  return this.position;
};
protoOf(ExtSyntaxError).pc = function() {
  return this.source;
};
protoOf(ExtSyntaxError).qc = function(expectedValue, position, source2) {
  return new ExtSyntaxError(expectedValue, position, source2);
};
protoOf(ExtSyntaxError).copy = function(expectedValue, position, source2, $super) {
  expectedValue = expectedValue === VOID ? this.expectedValue : expectedValue;
  position = position === VOID ? this.position : position;
  source2 = source2 === VOID ? this.source : source2;
  return this.qc(expectedValue, position, source2);
};
protoOf(ExtSyntaxError).toString = function() {
  return "ExtSyntaxError(expectedValue=" + this.expectedValue + ", position=" + this.position + ", source=" + this.source + ")";
};
protoOf(ExtSyntaxError).hashCode = function() {
  var result = getStringHashCode(this.expectedValue);
  result = imul(result, 31) + this.position | 0;
  result = imul(result, 31) + getStringHashCode(this.source) | 0;
  return result;
};
protoOf(ExtSyntaxError).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof ExtSyntaxError))
    return false;
  var tmp0_other_with_cast = other instanceof ExtSyntaxError ? other : THROW_CCE();
  if (!(this.expectedValue === tmp0_other_with_cast.expectedValue))
    return false;
  if (!(this.position === tmp0_other_with_cast.position))
    return false;
  if (!(this.source === tmp0_other_with_cast.source))
    return false;
  return true;
};
function Companion_1() {
}
protoOf(Companion_1).bb = function(source2) {
  return ParserSet_getInstance().od_1(source2);
};
protoOf(Companion_1).cb = function(source2) {
  var tmp;
  try {
    ParserSet_getInstance().od_1(source2);
    tmp = true;
  } catch ($p) {
    var tmp_0;
    if ($p instanceof Exception) {
      tmp_0 = false;
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return tmp;
};
var Companion_instance_1;
function Selector$tracks$delegate$lambda(this$0) {
  return function() {
    var list = mutableListOf([this$0.eb_1]);
    $l$loop:
      while (true) {
        var tmp0_safe_receiver = last(list).qd_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd_1;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break $l$loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        list.k(tmp);
      }
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(list, 10));
    var tmp0_iterator = list.m();
    while (tmp0_iterator.t()) {
      var item = tmp0_iterator.u();
      var tmp$ret$0 = item.pd_1.td_1;
      destination.k(tmp$ret$0);
    }
    return copyToArray(destination);
  };
}
function Selector(propertyWrapper) {
  this.eb_1 = propertyWrapper;
  var tmp = this;
  tmp.fb_1 = lazy(Selector$tracks$delegate$lambda(this));
  var tmp_0 = this;
  var tmp$ret$1;
  $l$block: {
    var this_0 = this.jb();
    var inductionVariable = 0;
    var last2 = this_0.length - 1 | 0;
    if (inductionVariable <= last2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this_0[index]) {
          tmp$ret$1 = index;
          break $l$block;
        }
      } while (inductionVariable <= last2);
    tmp$ret$1 = -1;
  }
  var i = tmp$ret$1;
  tmp_0.gb_1 = i < 0 ? 0 : i;
  var tmp_1 = this;
  var e = firstOrNull(this.eb_1.pd_1.vd_1);
  var tmp_2;
  var tmp_3;
  if (e instanceof BinaryExpression) {
    var tmp_4 = e.zd_1;
    tmp_3 = !(tmp_4 == null) ? typeof tmp_4 === "string" : false;
  } else {
    tmp_3 = false;
  }
  if (tmp_3) {
    var tmp_5;
    if (e.xd_1 === "id" ? equals(e.yd_1, Equal_getInstance()) : false) {
      tmp_5 = to(true, e.zd_1);
    } else if (e.xd_1 === "text" ? ((equals(e.yd_1, Equal_getInstance()) ? true : equals(e.yd_1, Start_getInstance())) ? true : equals(e.yd_1, Include_getInstance())) ? true : equals(e.yd_1, End_getInstance()) : false) {
      tmp_5 = to(false, e.zd_1);
    } else {
      tmp_5 = null;
    }
    tmp_2 = tmp_5;
  } else {
    tmp_2 = null;
  }
  tmp_1.hb_1 = tmp_2;
  var tmp_6 = this;
  var e_0 = firstOrNull(this.eb_1.pd_1.vd_1);
  var tmp_7;
  var tmp_8;
  var tmp_9;
  if (e_0 instanceof BinaryExpression) {
    tmp_9 = e_0.xd_1 === "depth";
  } else {
    tmp_9 = false;
  }
  if (tmp_9) {
    tmp_8 = equals(e_0.yd_1, Equal_getInstance());
  } else {
    tmp_8 = false;
  }
  if (tmp_8) {
    tmp_7 = equals(e_0.zd_1, 0);
  } else {
    tmp_7 = false;
  }
  tmp_6.ib_1 = tmp_7;
}
protoOf(Selector).toString = function() {
  return this.eb_1.toString();
};
protoOf(Selector).jb = function() {
  var this_0 = this.fb_1;
  tracks$factory();
  return this_0.h4();
};
protoOf(Selector).ae = function(node, transform2, trackNodes) {
  var tmp0_elvis_lhs = this.be(node, transform2, trackNodes);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return null;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var trackTempNodes = tmp;
  return trackTempNodes.v(this.gb_1);
};
protoOf(Selector).nb = function(node, transform2, trackNodes, $super) {
  var tmp;
  if (trackNodes === VOID) {
    tmp = ArrayList_init_$Create$();
  } else {
    tmp = trackNodes;
  }
  trackNodes = tmp;
  return $super === VOID ? this.ae(node, transform2, trackNodes) : $super.ae.call(this, node, transform2, trackNodes);
};
protoOf(Selector).be = function(node, transform2, trackNodes) {
  return this.eb_1.be(node, transform2, trackNodes);
};
protoOf(Selector).ob = function(node, transform2, trackNodes, $super) {
  var tmp;
  if (trackNodes === VOID) {
    tmp = ArrayList_init_$Create$();
  } else {
    tmp = trackNodes;
  }
  trackNodes = tmp;
  return $super === VOID ? this.be(node, transform2, trackNodes) : $super.be.call(this, node, transform2, trackNodes);
};
function tracks$factory() {
  return getPropertyCallableRef("tracks", 1, KProperty1, function(receiver) {
    return receiver.jb();
  }, null);
}
function Transform$_init_$lambda$slambda$lambda_6maxik($node) {
  return function(it) {
    return !equals(it, $node);
  };
}
function Transform$_init_$lambda$slambda$lambda_6maxik_0($node) {
  return function(it) {
    return !equals(it, $node);
  };
}
function Transform$_init_$lambda_wpwstd($getChildren) {
  return function(node, offset) {
    return elementAtOrNull($getChildren(node), offset);
  };
}
function Transform$_init_$lambda$slambda_haa4hj($getParent, $node, resultContinuation) {
  this.ke_1 = $getParent;
  this.le_1 = $node;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Transform$_init_$lambda$slambda_haa4hj).se = function($this$sequence, $completion) {
  var tmp = this.te($this$sequence, $completion);
  tmp.n6_1 = Unit_instance;
  tmp.o6_1 = null;
  return tmp.w6();
};
protoOf(Transform$_init_$lambda$slambda_haa4hj).j7 = function(p1, $completion) {
  return this.se(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj).w6 = function() {
  var suspendResult = this.n6_1;
  $sm:
    do
      try {
        var tmp = this.l6_1;
        switch (tmp) {
          case 0:
            this.m6_1 = 5;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.ke_1(this.le_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }
            tmp_0.ne_1 = tmp_1;
            this.l6_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.ne_1 == null)) {
              this.l6_1 = 4;
              continue $sm;
            }
            this.oe_1 = this.ne_1;
            if (this.oe_1 == null) {
              this.pe_1 = null;
              this.l6_1 = 3;
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.qe_1 = this.oe_1;
              var tmp_3 = this;
              tmp_3.re_1 = this.qe_1;
              this.l6_1 = 2;
              suspendResult = this.me_1.w7(this.re_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }
          case 2:
            var tmp_4 = this;
            this.ne_1 = this.ke_1(this.re_1);
            tmp_4.pe_1 = Unit_instance;
            this.l6_1 = 3;
            continue $sm;
          case 3:
            this.l6_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.o6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m6_1 === 5) {
          throw e;
        } else {
          this.l6_1 = this.m6_1;
          this.o6_1 = e;
        }
      }
    while (true);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj).te = function($this$sequence, completion) {
  var i = new Transform$_init_$lambda$slambda_haa4hj(this.ke_1, this.le_1, completion);
  i.me_1 = $this$sequence;
  return i;
};
function Transform$_init_$lambda$slambda_haa4hj_0($getParent, $node, resultContinuation) {
  var i = new Transform$_init_$lambda$slambda_haa4hj($getParent, $node, resultContinuation);
  var l = function($this$sequence, $completion) {
    return i.se($this$sequence, $completion);
  };
  l.$arity = 1;
  return l;
}
function Transform$_init_$lambda_wpwstd_0($getParent) {
  return function(node) {
    return sequence(Transform$_init_$lambda$slambda_haa4hj_0($getParent, node, null));
  };
}
function Transform$_init_$lambda_wpwstd_1($getAncestors) {
  return function(node, offset) {
    return elementAtOrNull($getAncestors(node), offset);
  };
}
function Transform$_init_$lambda$slambda_haa4hj_1($getParent, $node, $getChildren, resultContinuation) {
  this.cf_1 = $getParent;
  this.df_1 = $node;
  this.ef_1 = $getChildren;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Transform$_init_$lambda$slambda_haa4hj_1).if = function($this$sequence, $completion) {
  var tmp = this.jf($this$sequence, $completion);
  tmp.n6_1 = Unit_instance;
  tmp.o6_1 = null;
  return tmp.w6();
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_1).j7 = function(p1, $completion) {
  return this.if(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_1).w6 = function() {
  var suspendResult = this.n6_1;
  $sm:
    do
      try {
        var tmp = this.l6_1;
        switch (tmp) {
          case 0:
            this.m6_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.cf_1(this.df_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }
            tmp_0.gf_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.ef_1(this.gf_1);
            tmp_2.hf_1 = toMutableList_1(takeWhile(tmp_3, Transform$_init_$lambda$slambda$lambda_6maxik(this.df_1)));
            reverse(this.hf_1);
            this.l6_1 = 1;
            suspendResult = this.ff_1.y7(this.hf_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m6_1 === 2) {
          throw e;
        } else {
          this.l6_1 = this.m6_1;
          this.o6_1 = e;
        }
      }
    while (true);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_1).jf = function($this$sequence, completion) {
  var i = new Transform$_init_$lambda$slambda_haa4hj_1(this.cf_1, this.df_1, this.ef_1, completion);
  i.ff_1 = $this$sequence;
  return i;
};
function Transform$_init_$lambda$slambda_haa4hj_2($getParent, $node, $getChildren, resultContinuation) {
  var i = new Transform$_init_$lambda$slambda_haa4hj_1($getParent, $node, $getChildren, resultContinuation);
  var l = function($this$sequence, $completion) {
    return i.if($this$sequence, $completion);
  };
  l.$arity = 1;
  return l;
}
function Transform$_init_$lambda_wpwstd_2($getParent, $getChildren) {
  return function(node) {
    return sequence(Transform$_init_$lambda$slambda_haa4hj_2($getParent, node, $getChildren, null));
  };
}
function Transform$_init_$lambda_wpwstd_3($getBeforeBrothers) {
  return function(node, offset) {
    return elementAtOrNull($getBeforeBrothers(node), offset);
  };
}
function Transform$_init_$lambda$slambda_haa4hj_3($getParent, $node, $getChildren, resultContinuation) {
  this.sf_1 = $getParent;
  this.tf_1 = $node;
  this.uf_1 = $getChildren;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Transform$_init_$lambda$slambda_haa4hj_3).if = function($this$sequence, $completion) {
  var tmp = this.jf($this$sequence, $completion);
  tmp.n6_1 = Unit_instance;
  tmp.o6_1 = null;
  return tmp.w6();
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_3).j7 = function(p1, $completion) {
  return this.if(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_3).w6 = function() {
  var suspendResult = this.n6_1;
  $sm:
    do
      try {
        var tmp = this.l6_1;
        switch (tmp) {
          case 0:
            this.m6_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.sf_1(this.tf_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_instance;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }
            tmp_0.wf_1 = tmp_1;
            this.l6_1 = 1;
            var tmp_2 = this.uf_1(this.wf_1);
            suspendResult = this.vf_1.z7(drop(dropWhile(tmp_2, Transform$_init_$lambda$slambda$lambda_6maxik_0(this.tf_1)), 1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m6_1 === 2) {
          throw e;
        } else {
          this.l6_1 = this.m6_1;
          this.o6_1 = e;
        }
      }
    while (true);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_3).jf = function($this$sequence, completion) {
  var i = new Transform$_init_$lambda$slambda_haa4hj_3(this.sf_1, this.tf_1, this.uf_1, completion);
  i.vf_1 = $this$sequence;
  return i;
};
function Transform$_init_$lambda$slambda_haa4hj_4($getParent, $node, $getChildren, resultContinuation) {
  var i = new Transform$_init_$lambda$slambda_haa4hj_3($getParent, $node, $getChildren, resultContinuation);
  var l = function($this$sequence, $completion) {
    return i.if($this$sequence, $completion);
  };
  l.$arity = 1;
  return l;
}
function Transform$_init_$lambda_wpwstd_4($getParent, $getChildren) {
  return function(node) {
    return sequence(Transform$_init_$lambda$slambda_haa4hj_4($getParent, node, $getChildren, null));
  };
}
function Transform$_init_$lambda_wpwstd_5($getAfterBrothers) {
  return function(node, offset) {
    return elementAtOrNull($getAfterBrothers(node), offset);
  };
}
function Transform$_init_$lambda$slambda_haa4hj_5($getChildren, $node, resultContinuation) {
  this.fg_1 = $getChildren;
  this.gg_1 = $node;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Transform$_init_$lambda$slambda_haa4hj_5).se = function($this$sequence, $completion) {
  var tmp = this.te($this$sequence, $completion);
  tmp.n6_1 = Unit_instance;
  tmp.o6_1 = null;
  return tmp.w6();
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_5).j7 = function(p1, $completion) {
  return this.se(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_5).w6 = function() {
  var suspendResult = this.n6_1;
  $sm:
    do
      try {
        var tmp = this.l6_1;
        switch (tmp) {
          case 0:
            this.m6_1 = 4;
            this.ig_1 = toMutableList_1(this.fg_1(this.gg_1));
            if (this.ig_1.p())
              return Unit_instance;
            reverse(this.ig_1);
            var tmp_0 = this;
            tmp_0.jg_1 = ArrayList_init_$Create$();
            this.l6_1 = 1;
            continue $sm;
          case 1:
            this.kg_1 = removeLast(this.ig_1);
            this.l6_1 = 2;
            suspendResult = this.hg_1.w7(this.kg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            var tmp0_iterator = this.fg_1(this.kg_1).m();
            while (tmp0_iterator.t()) {
              var childNode = tmp0_iterator.u();
              this.jg_1.k(childNode);
            }
            if (!this.jg_1.p()) {
              var inductionVariable = this.jg_1.i() - 1 | 0;
              if (0 <= inductionVariable)
                do {
                  var i = inductionVariable;
                  inductionVariable = inductionVariable + -1 | 0;
                  this.ig_1.k(this.jg_1.v(i));
                } while (0 <= inductionVariable);
              this.jg_1.g1();
            }
            if (!this.ig_1.p()) {
              this.l6_1 = 1;
              continue $sm;
            }
            this.l6_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.o6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m6_1 === 4) {
          throw e;
        } else {
          this.l6_1 = this.m6_1;
          this.o6_1 = e;
        }
      }
    while (true);
};
protoOf(Transform$_init_$lambda$slambda_haa4hj_5).te = function($this$sequence, completion) {
  var i = new Transform$_init_$lambda$slambda_haa4hj_5(this.fg_1, this.gg_1, completion);
  i.hg_1 = $this$sequence;
  return i;
};
function Transform$_init_$lambda$slambda_haa4hj_6($getChildren, $node, resultContinuation) {
  var i = new Transform$_init_$lambda$slambda_haa4hj_5($getChildren, $node, resultContinuation);
  var l = function($this$sequence, $completion) {
    return i.se($this$sequence, $completion);
  };
  l.$arity = 1;
  return l;
}
function Transform$_init_$lambda_wpwstd_6($getChildren) {
  return function(node) {
    return sequence(Transform$_init_$lambda$slambda_haa4hj_6($getChildren, node, null));
  };
}
function Transform$querySelectorAll$lambda$slambda($selector, $node, this$0, resultContinuation) {
  this.tg_1 = $selector;
  this.ug_1 = $node;
  this.vg_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Transform$querySelectorAll$lambda$slambda).se = function($this$sequence, $completion) {
  var tmp = this.te($this$sequence, $completion);
  tmp.n6_1 = Unit_instance;
  tmp.o6_1 = null;
  return tmp.w6();
};
protoOf(Transform$querySelectorAll$lambda$slambda).j7 = function(p1, $completion) {
  return this.se(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(Transform$querySelectorAll$lambda$slambda).w6 = function() {
  var suspendResult = this.n6_1;
  $sm:
    do
      try {
        var tmp = this.l6_1;
        switch (tmp) {
          case 0:
            this.m6_1 = 7;
            var tmp_0 = this;
            tmp_0.xg_1 = ArrayList_init_$Create$();
            this.yg_1 = this.tg_1.ae(this.ug_1, this.vg_1, this.xg_1);
            if (!(this.yg_1 == null)) {
              this.l6_1 = 1;
              suspendResult = this.wg_1.w7(this.yg_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l6_1 = 2;
              continue $sm;
            }
          case 1:
            this.l6_1 = 2;
            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.zg_1 = this.vg_1.ac_1(this.ug_1);
            this.ah_1 = this.zg_1.m();
            this.l6_1 = 3;
            continue $sm;
          case 3:
            if (!this.ah_1.t()) {
              this.l6_1 = 6;
              continue $sm;
            }
            this.bh_1 = this.ah_1.u();
            var tmp_2 = this;
            tmp_2.ch_1 = this.bh_1;
            this.xg_1.g1();
            this.dh_1 = this.tg_1.ae(this.ch_1, this.vg_1, this.xg_1);
            if (!(this.dh_1 == null)) {
              this.l6_1 = 4;
              suspendResult = this.wg_1.w7(this.dh_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l6_1 = 5;
              continue $sm;
            }
          case 4:
            this.l6_1 = 5;
            continue $sm;
          case 5:
            this.l6_1 = 3;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.o6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m6_1 === 7) {
          throw e;
        } else {
          this.l6_1 = this.m6_1;
          this.o6_1 = e;
        }
      }
    while (true);
};
protoOf(Transform$querySelectorAll$lambda$slambda).te = function($this$sequence, completion) {
  var i = new Transform$querySelectorAll$lambda$slambda(this.tg_1, this.ug_1, this.vg_1, completion);
  i.wg_1 = $this$sequence;
  return i;
};
function Transform$querySelectorAll$lambda$slambda_0($selector, $node, this$0, resultContinuation) {
  var i = new Transform$querySelectorAll$lambda$slambda($selector, $node, this$0, resultContinuation);
  var l = function($this$sequence, $completion) {
    return i.se($this$sequence, $completion);
  };
  l.$arity = 1;
  return l;
}
function Transform$querySelectorAll$lambda(this$0) {
  return function(node, selector) {
    return sequence(Transform$querySelectorAll$lambda$slambda_0(selector, node, this$0, null));
  };
}
function Transform$querySelector$lambda(this$0) {
  return function(node, selector) {
    return firstOrNull_0(this$0.bc_1(node, selector));
  };
}
function Transform$querySelectorTrackAll$lambda$slambda($selector, $node, this$0, resultContinuation) {
  this.mh_1 = $selector;
  this.nh_1 = $node;
  this.oh_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(Transform$querySelectorTrackAll$lambda$slambda).wh = function($this$sequence, $completion) {
  var tmp = this.xh($this$sequence, $completion);
  tmp.n6_1 = Unit_instance;
  tmp.o6_1 = null;
  return tmp.w6();
};
protoOf(Transform$querySelectorTrackAll$lambda$slambda).j7 = function(p1, $completion) {
  return this.wh(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(Transform$querySelectorTrackAll$lambda$slambda).w6 = function() {
  var suspendResult = this.n6_1;
  $sm:
    do
      try {
        var tmp = this.l6_1;
        switch (tmp) {
          case 0:
            this.m6_1 = 7;
            this.qh_1 = this.mh_1.ob(this.nh_1, this.oh_1);
            if (!(this.qh_1 == null)) {
              this.l6_1 = 1;
              suspendResult = this.ph_1.w7(this.qh_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l6_1 = 2;
              continue $sm;
            }
          case 1:
            this.l6_1 = 2;
            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.rh_1 = this.oh_1.ac_1(this.nh_1);
            this.sh_1 = this.rh_1.m();
            this.l6_1 = 3;
            continue $sm;
          case 3:
            if (!this.sh_1.t()) {
              this.l6_1 = 6;
              continue $sm;
            }
            this.th_1 = this.sh_1.u();
            var tmp_1 = this;
            tmp_1.uh_1 = this.th_1;
            this.vh_1 = this.mh_1.ob(this.uh_1, this.oh_1);
            if (!(this.vh_1 == null)) {
              this.l6_1 = 4;
              suspendResult = this.ph_1.w7(this.vh_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l6_1 = 5;
              continue $sm;
            }
          case 4:
            this.l6_1 = 5;
            continue $sm;
          case 5:
            this.l6_1 = 3;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.o6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m6_1 === 7) {
          throw e;
        } else {
          this.l6_1 = this.m6_1;
          this.o6_1 = e;
        }
      }
    while (true);
};
protoOf(Transform$querySelectorTrackAll$lambda$slambda).xh = function($this$sequence, completion) {
  var i = new Transform$querySelectorTrackAll$lambda$slambda(this.mh_1, this.nh_1, this.oh_1, completion);
  i.ph_1 = $this$sequence;
  return i;
};
function Transform$querySelectorTrackAll$lambda$slambda_0($selector, $node, this$0, resultContinuation) {
  var i = new Transform$querySelectorTrackAll$lambda$slambda($selector, $node, this$0, resultContinuation);
  var l = function($this$sequence, $completion) {
    return i.wh($this$sequence, $completion);
  };
  l.$arity = 1;
  return l;
}
function Transform$querySelectorTrackAll$lambda(this$0) {
  return function(node, selector) {
    return sequence(Transform$querySelectorTrackAll$lambda$slambda_0(selector, node, this$0, null));
  };
}
function Transform$querySelectorTrack$lambda(this$0) {
  return function(node, selector) {
    return firstOrNull_0(this$0.dc_1(node, selector));
  };
}
function Transform(getAttr, getName, getChildren, getChild, getParent, getAncestors, getAncestor, getBeforeBrothers, getBeforeBrother, getAfterBrothers, getAfterBrother, getDescendants) {
  var tmp;
  if (getChild === VOID) {
    tmp = Transform$_init_$lambda_wpwstd(getChildren);
  } else {
    tmp = getChild;
  }
  getChild = tmp;
  var tmp_0;
  if (getAncestors === VOID) {
    tmp_0 = Transform$_init_$lambda_wpwstd_0(getParent);
  } else {
    tmp_0 = getAncestors;
  }
  getAncestors = tmp_0;
  var tmp_1;
  if (getAncestor === VOID) {
    tmp_1 = Transform$_init_$lambda_wpwstd_1(getAncestors);
  } else {
    tmp_1 = getAncestor;
  }
  getAncestor = tmp_1;
  var tmp_2;
  if (getBeforeBrothers === VOID) {
    tmp_2 = Transform$_init_$lambda_wpwstd_2(getParent, getChildren);
  } else {
    tmp_2 = getBeforeBrothers;
  }
  getBeforeBrothers = tmp_2;
  var tmp_3;
  if (getBeforeBrother === VOID) {
    tmp_3 = Transform$_init_$lambda_wpwstd_3(getBeforeBrothers);
  } else {
    tmp_3 = getBeforeBrother;
  }
  getBeforeBrother = tmp_3;
  var tmp_4;
  if (getAfterBrothers === VOID) {
    tmp_4 = Transform$_init_$lambda_wpwstd_4(getParent, getChildren);
  } else {
    tmp_4 = getAfterBrothers;
  }
  getAfterBrothers = tmp_4;
  var tmp_5;
  if (getAfterBrother === VOID) {
    tmp_5 = Transform$_init_$lambda_wpwstd_5(getAfterBrothers);
  } else {
    tmp_5 = getAfterBrother;
  }
  getAfterBrother = tmp_5;
  var tmp_6;
  if (getDescendants === VOID) {
    tmp_6 = Transform$_init_$lambda_wpwstd_6(getChildren);
  } else {
    tmp_6 = getDescendants;
  }
  getDescendants = tmp_6;
  this.pb_1 = getAttr;
  this.qb_1 = getName;
  this.rb_1 = getChildren;
  this.sb_1 = getChild;
  this.tb_1 = getParent;
  this.ub_1 = getAncestors;
  this.vb_1 = getAncestor;
  this.wb_1 = getBeforeBrothers;
  this.xb_1 = getBeforeBrother;
  this.yb_1 = getAfterBrothers;
  this.zb_1 = getAfterBrother;
  this.ac_1 = getDescendants;
  var tmp_7 = this;
  tmp_7.bc_1 = Transform$querySelectorAll$lambda(this);
  var tmp_8 = this;
  tmp_8.cc_1 = Transform$querySelector$lambda(this);
  var tmp_9 = this;
  tmp_9.dc_1 = Transform$querySelectorTrackAll$lambda(this);
  var tmp_10 = this;
  tmp_10.ec_1 = Transform$querySelectorTrack$lambda(this);
}
function BinaryExpression(name, operator, value) {
  Expression.call(this);
  this.xd_1 = name;
  this.yd_1 = operator;
  this.zd_1 = value;
}
protoOf(BinaryExpression).yh = function(node, transform2) {
  return this.yd_1.ai(transform2.pb_1(node, this.xd_1), this.zd_1);
};
protoOf(BinaryExpression).toString = function() {
  var tmp;
  var tmp_0 = this.zd_1;
  if (!(tmp_0 == null) ? typeof tmp_0 === "string" : false) {
    var wrapChar = _Char___init__impl__6a9atx(34);
    var sb = StringBuilder_init_$Create$_0();
    sb.d4(wrapChar);
    var indexedObject = this.zd_1;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(indexedObject)) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var escapeChar = element === wrapChar ? wrapChar : element === _Char___init__impl__6a9atx(10) ? _Char___init__impl__6a9atx(110) : element === _Char___init__impl__6a9atx(13) ? _Char___init__impl__6a9atx(114) : element === _Char___init__impl__6a9atx(9) ? _Char___init__impl__6a9atx(116) : element === _Char___init__impl__6a9atx(8) ? _Char___init__impl__6a9atx(98) : null;
      var tmp_1 = escapeChar;
      if (!((tmp_1 == null ? null : new Char(tmp_1)) == null)) {
        var tmp_2 = escapeChar;
        sb.c4("\\" + toString_1(tmp_2 == null ? null : new Char(tmp_2)));
      } else {
        var tmp1_subject = Char__toInt_impl_vasixd(element);
        if (0 <= tmp1_subject ? tmp1_subject <= 9 : false) {
          var tmp$ret$1 = Char__toInt_impl_vasixd(element);
          sb.c4("\\x0" + toString$1(tmp$ret$1, 16));
        } else if (10 <= tmp1_subject ? tmp1_subject <= 31 : false) {
          var tmp$ret$2 = Char__toInt_impl_vasixd(element);
          sb.c4("\\x" + toString$1(tmp$ret$2, 16));
        } else {
          sb.d4(element);
        }
      }
    }
    sb.d4(wrapChar);
    tmp = sb.toString();
  } else {
    tmp = this.zd_1;
  }
  return this.xd_1 + this.yd_1 + toString_1(tmp);
};
protoOf(BinaryExpression).hashCode = function() {
  var result = getStringHashCode(this.xd_1);
  result = imul(result, 31) + hashCode(this.yd_1) | 0;
  result = imul(result, 31) + (this.zd_1 == null ? 0 : hashCode(this.zd_1)) | 0;
  return result;
};
protoOf(BinaryExpression).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof BinaryExpression))
    return false;
  var tmp0_other_with_cast = other instanceof BinaryExpression ? other : THROW_CCE();
  if (!(this.xd_1 === tmp0_other_with_cast.xd_1))
    return false;
  if (!equals(this.yd_1, tmp0_other_with_cast.yd_1))
    return false;
  if (!equals(this.zd_1, tmp0_other_with_cast.zd_1))
    return false;
  return true;
};
function contentReversedEquals(_this__u8e3s4, $this, other) {
  if (_this__u8e3s4 === other)
    return true;
  if (!(charSequenceLength(_this__u8e3s4) === charSequenceLength(other)))
    return false;
  var inductionVariable = charSequenceLength(_this__u8e3s4) - 1 | 0;
  if (0 <= inductionVariable)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      if (!(charSequenceGet(_this__u8e3s4, i) === charSequenceGet(other, i)))
        return false;
    } while (0 <= inductionVariable);
  return true;
}
function sam$kotlin_Comparator$0(function_0) {
  this.bi_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0).x4 = function(a, b) {
  return this.bi_1(a, b);
};
protoOf(sam$kotlin_Comparator$0).compare = function(a, b) {
  return this.x4(a, b);
};
function CompareOperator$Companion$allSubClasses$lambda(a, b) {
  var tmp = -a.zh_1.length | 0;
  var tmp$ret$1 = -b.zh_1.length | 0;
  return compareValues(tmp, tmp$ret$1);
}
function Companion_2() {
  Companion_instance_2 = this;
  var tmp = this;
  var this_0 = listOf_0([Equal_getInstance(), NotEqual_getInstance(), Start_getInstance(), NotStart_getInstance(), Include_getInstance(), NotInclude_getInstance(), End_getInstance(), NotEnd_getInstance(), Less_getInstance(), LessEqual_getInstance(), More_getInstance(), MoreEqual_getInstance()]);
  var tmp_0 = CompareOperator$Companion$allSubClasses$lambda;
  var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
  tmp.ci_1 = sortedWith(this_0, tmp$ret$0);
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 == null)
    new Companion_2();
  return Companion_instance_2;
}
function Equal() {
  Equal_instance = this;
  CompareOperator.call(this, "=");
}
protoOf(Equal).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? isCharSequence(left) : false) {
    tmp_0 = !(right == null) ? isCharSequence(right) : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = contentReversedEquals(left, Companion_getInstance_2(), right);
  } else {
    tmp = equals(left, right);
  }
  return tmp;
};
var Equal_instance;
function Equal_getInstance() {
  if (Equal_instance == null)
    new Equal();
  return Equal_instance;
}
function NotEqual() {
  NotEqual_instance = this;
  CompareOperator.call(this, "!=");
}
protoOf(NotEqual).ai = function(left, right) {
  return !Equal_getInstance().ai(left, right);
};
var NotEqual_instance;
function NotEqual_getInstance() {
  if (NotEqual_instance == null)
    new NotEqual();
  return NotEqual_instance;
}
function Start() {
  Start_instance = this;
  CompareOperator.call(this, "^=");
}
protoOf(Start).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? isCharSequence(left) : false) {
    tmp_0 = !(right == null) ? isCharSequence(right) : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = startsWith_1(left, right);
  } else {
    tmp = false;
  }
  return tmp;
};
var Start_instance;
function Start_getInstance() {
  if (Start_instance == null)
    new Start();
  return Start_instance;
}
function NotStart() {
  NotStart_instance = this;
  CompareOperator.call(this, "!^=");
}
protoOf(NotStart).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? isCharSequence(left) : false) {
    tmp_0 = !(right == null) ? isCharSequence(right) : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = !startsWith_1(left, right);
  } else {
    tmp = false;
  }
  return tmp;
};
var NotStart_instance;
function NotStart_getInstance() {
  if (NotStart_instance == null)
    new NotStart();
  return NotStart_instance;
}
function Include() {
  Include_instance = this;
  CompareOperator.call(this, "*=");
}
protoOf(Include).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? isCharSequence(left) : false) {
    tmp_0 = !(right == null) ? isCharSequence(right) : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = contains_1(left, right);
  } else {
    tmp = false;
  }
  return tmp;
};
var Include_instance;
function Include_getInstance() {
  if (Include_instance == null)
    new Include();
  return Include_instance;
}
function NotInclude() {
  NotInclude_instance = this;
  CompareOperator.call(this, "!*=");
}
protoOf(NotInclude).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? isCharSequence(left) : false) {
    tmp_0 = !(right == null) ? isCharSequence(right) : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = !contains_1(left, right);
  } else {
    tmp = false;
  }
  return tmp;
};
var NotInclude_instance;
function NotInclude_getInstance() {
  if (NotInclude_instance == null)
    new NotInclude();
  return NotInclude_instance;
}
function End() {
  End_instance = this;
  CompareOperator.call(this, "$=");
}
protoOf(End).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? isCharSequence(left) : false) {
    tmp_0 = !(right == null) ? isCharSequence(right) : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = endsWith_0(left, right);
  } else {
    tmp = false;
  }
  return tmp;
};
var End_instance;
function End_getInstance() {
  if (End_instance == null)
    new End();
  return End_instance;
}
function NotEnd() {
  NotEnd_instance = this;
  CompareOperator.call(this, "!$=");
}
protoOf(NotEnd).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? isCharSequence(left) : false) {
    tmp_0 = !(right == null) ? isCharSequence(right) : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = !endsWith_0(left, right);
  } else {
    tmp = false;
  }
  return tmp;
};
var NotEnd_instance;
function NotEnd_getInstance() {
  if (NotEnd_instance == null)
    new NotEnd();
  return NotEnd_instance;
}
function Less() {
  Less_instance = this;
  CompareOperator.call(this, "<");
}
protoOf(Less).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? typeof left === "number" : false) {
    tmp_0 = !(right == null) ? typeof right === "number" : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = left < right;
  } else {
    tmp = false;
  }
  return tmp;
};
var Less_instance;
function Less_getInstance() {
  if (Less_instance == null)
    new Less();
  return Less_instance;
}
function LessEqual() {
  LessEqual_instance = this;
  CompareOperator.call(this, "<=");
}
protoOf(LessEqual).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? typeof left === "number" : false) {
    tmp_0 = !(right == null) ? typeof right === "number" : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = left <= right;
  } else {
    tmp = false;
  }
  return tmp;
};
var LessEqual_instance;
function LessEqual_getInstance() {
  if (LessEqual_instance == null)
    new LessEqual();
  return LessEqual_instance;
}
function More() {
  More_instance = this;
  CompareOperator.call(this, ">");
}
protoOf(More).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? typeof left === "number" : false) {
    tmp_0 = !(right == null) ? typeof right === "number" : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = left > right;
  } else {
    tmp = false;
  }
  return tmp;
};
var More_instance;
function More_getInstance() {
  if (More_instance == null)
    new More();
  return More_instance;
}
function MoreEqual() {
  MoreEqual_instance = this;
  CompareOperator.call(this, ">=");
}
protoOf(MoreEqual).ai = function(left, right) {
  var tmp;
  var tmp_0;
  if (!(left == null) ? typeof left === "number" : false) {
    tmp_0 = !(right == null) ? typeof right === "number" : false;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = left >= right;
  } else {
    tmp = false;
  }
  return tmp;
};
var MoreEqual_instance;
function MoreEqual_getInstance() {
  if (MoreEqual_instance == null)
    new MoreEqual();
  return MoreEqual_instance;
}
function CompareOperator(key2) {
  Companion_getInstance_2();
  this.zh_1 = key2;
}
protoOf(CompareOperator).toString = function() {
  return this.zh_1;
};
function ConnectExpression() {
}
function sam$kotlin_Comparator$0_0(function_0) {
  this.si_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_0).x4 = function(a, b) {
  return this.si_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_0).compare = function(a, b) {
  return this.x4(a, b);
};
function ConnectOperator$Companion$allSubClasses$lambda(a, b) {
  var tmp = -a.ti_1.length | 0;
  var tmp$ret$1 = -b.ti_1.length | 0;
  return compareValues(tmp, tmp$ret$1);
}
function Companion_3() {
  Companion_instance_3 = this;
  var tmp = this;
  var this_0 = listOf_0([BeforeBrother_getInstance(), AfterBrother_getInstance(), Ancestor_getInstance(), Child_getInstance(), Descendant_getInstance()]);
  var tmp_0 = ConnectOperator$Companion$allSubClasses$lambda;
  var tmp$ret$0 = new sam$kotlin_Comparator$0_0(tmp_0);
  tmp.ui_1 = sortedWith(this_0, tmp$ret$0);
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 == null)
    new Companion_3();
  return Companion_instance_3;
}
function BeforeBrother() {
  BeforeBrother_instance = this;
  ConnectOperator.call(this, "+");
}
protoOf(BeforeBrother).wi = function(node, transform2) {
  return transform2.wb_1(node);
};
protoOf(BeforeBrother).xi = function(node, transform2, offset) {
  return transform2.xb_1(node, offset);
};
var BeforeBrother_instance;
function BeforeBrother_getInstance() {
  if (BeforeBrother_instance == null)
    new BeforeBrother();
  return BeforeBrother_instance;
}
function AfterBrother() {
  AfterBrother_instance = this;
  ConnectOperator.call(this, "-");
}
protoOf(AfterBrother).wi = function(node, transform2) {
  return transform2.yb_1(node);
};
protoOf(AfterBrother).xi = function(node, transform2, offset) {
  return transform2.zb_1(node, offset);
};
var AfterBrother_instance;
function AfterBrother_getInstance() {
  if (AfterBrother_instance == null)
    new AfterBrother();
  return AfterBrother_instance;
}
function Ancestor() {
  Ancestor_instance = this;
  ConnectOperator.call(this, ">");
}
protoOf(Ancestor).wi = function(node, transform2) {
  return transform2.ub_1(node);
};
protoOf(Ancestor).xi = function(node, transform2, offset) {
  return transform2.vb_1(node, offset);
};
var Ancestor_instance;
function Ancestor_getInstance() {
  if (Ancestor_instance == null)
    new Ancestor();
  return Ancestor_instance;
}
function Child() {
  Child_instance = this;
  ConnectOperator.call(this, "<");
}
protoOf(Child).wi = function(node, transform2) {
  return transform2.rb_1(node);
};
protoOf(Child).xi = function(node, transform2, offset) {
  return transform2.sb_1(node, offset);
};
var Child_instance;
function Child_getInstance() {
  if (Child_instance == null)
    new Child();
  return Child_instance;
}
function Descendant() {
  Descendant_instance = this;
  ConnectOperator.call(this, "<<");
}
protoOf(Descendant).wi = function(node, transform2) {
  return transform2.ac_1(node);
};
protoOf(Descendant).xi = function(node, transform2, offset) {
  return elementAtOrNull(transform2.ac_1(node), offset);
};
var Descendant_instance;
function Descendant_getInstance() {
  if (Descendant_instance == null)
    new Descendant();
  return Descendant_instance;
}
function ConnectOperator(key2) {
  Companion_getInstance_3();
  this.ti_1 = key2;
}
protoOf(ConnectOperator).toString = function() {
  return this.ti_1;
};
function ConnectSegment$traversal$o$invoke$slambda(this$0, $node, $transform, resultContinuation) {
  this.kj_1 = this$0;
  this.lj_1 = $node;
  this.mj_1 = $transform;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ConnectSegment$traversal$o$invoke$slambda).if = function($this$sequence, $completion) {
  var tmp = this.jf($this$sequence, $completion);
  tmp.n6_1 = Unit_instance;
  tmp.o6_1 = null;
  return tmp.w6();
};
protoOf(ConnectSegment$traversal$o$invoke$slambda).j7 = function(p1, $completion) {
  return this.if(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
};
protoOf(ConnectSegment$traversal$o$invoke$slambda).w6 = function() {
  var suspendResult = this.n6_1;
  $sm:
    do
      try {
        var tmp = this.l6_1;
        switch (tmp) {
          case 0:
            this.m6_1 = 3;
            this.oj_1 = this.kj_1.pj_1.xi(this.lj_1, this.mj_1, this.kj_1.qj_1.qi());
            if (!(this.oj_1 == null)) {
              this.l6_1 = 1;
              suspendResult = this.nj_1.w7(this.oj_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l6_1 = 2;
              continue $sm;
            }
          case 1:
            this.l6_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m6_1 === 3) {
          throw e;
        } else {
          this.l6_1 = this.m6_1;
          this.o6_1 = e;
        }
      }
    while (true);
};
protoOf(ConnectSegment$traversal$o$invoke$slambda).jf = function($this$sequence, completion) {
  var i = new ConnectSegment$traversal$o$invoke$slambda(this.kj_1, this.lj_1, this.mj_1, completion);
  i.nj_1 = $this$sequence;
  return i;
};
function ConnectSegment$traversal$o$invoke$slambda_0(this$0, $node, $transform, resultContinuation) {
  var i = new ConnectSegment$traversal$o$invoke$slambda(this$0, $node, $transform, resultContinuation);
  var l = function($this$sequence, $completion) {
    return i.if($this$sequence, $completion);
  };
  l.$arity = 1;
  return l;
}
function ConnectSegment$traversal$1(this$0) {
  this.sj_1 = this$0;
}
protoOf(ConnectSegment$traversal$1).tj = function(node, transform2) {
  return sequence(ConnectSegment$traversal$o$invoke$slambda_0(this.sj_1, node, transform2, null));
};
function ConnectSegment$traversal$2(this$0) {
  this.uj_1 = this$0;
}
protoOf(ConnectSegment$traversal$2).tj = function(node, transform2) {
  return this.uj_1.qj_1.ri().vj(this.uj_1.pj_1.wi(node, transform2));
};
function ConnectSegment(operator, connectExpression) {
  operator = operator === VOID ? Ancestor_getInstance() : operator;
  connectExpression = connectExpression === VOID ? new PolynomialExpression() : connectExpression;
  this.pj_1 = operator;
  this.qj_1 = connectExpression;
  var tmp = this;
  var tmp_0;
  if (this.qj_1.pi()) {
    tmp_0 = new ConnectSegment$traversal$1(this);
  } else {
    tmp_0 = new ConnectSegment$traversal$2(this);
  }
  tmp.rj_1 = tmp_0;
}
protoOf(ConnectSegment).toString = function() {
  var tmp;
  var tmp_0;
  var tmp_1;
  if (equals(this.pj_1, Ancestor_getInstance())) {
    var tmp_2 = this.qj_1;
    tmp_1 = tmp_2 instanceof PolynomialExpression;
  } else {
    tmp_1 = false;
  }
  if (tmp_1) {
    tmp_0 = this.qj_1.wj_1 === 1;
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = this.qj_1.xj_1 === 0;
  } else {
    tmp = false;
  }
  if (tmp) {
    return "";
  }
  return this.pj_1.toString() + toString_2(this.qj_1);
};
protoOf(ConnectSegment).hashCode = function() {
  var result = hashCode(this.pj_1);
  result = imul(result, 31) + hashCode(this.qj_1) | 0;
  return result;
};
protoOf(ConnectSegment).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof ConnectSegment))
    return false;
  var tmp0_other_with_cast = other instanceof ConnectSegment ? other : THROW_CCE();
  if (!equals(this.pj_1, tmp0_other_with_cast.pj_1))
    return false;
  if (!equals(this.qj_1, tmp0_other_with_cast.qj_1))
    return false;
  return true;
};
function ConnectWrapper(connectSegment, to2) {
  this.rd_1 = connectSegment;
  this.sd_1 = to2;
}
protoOf(ConnectWrapper).toString = function() {
  var this_0 = this.sd_1.toString() + " " + this.rd_1.toString();
  return toString_2(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
};
protoOf(ConnectWrapper).be = function(node, transform2, trackNodes) {
  var tmp0_iterator = this.rd_1.rj_1.tj(node, transform2).m();
  while (tmp0_iterator.t()) {
    var element = tmp0_iterator.u();
    $l$block: {
      if (element == null) {
        break $l$block;
      }
      var r = this.sd_1.be(element, transform2, trackNodes);
      if (!(r == null))
        return r;
    }
  }
  return null;
};
protoOf(ConnectWrapper).hashCode = function() {
  var result = this.rd_1.hashCode();
  result = imul(result, 31) + this.sd_1.hashCode() | 0;
  return result;
};
protoOf(ConnectWrapper).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof ConnectWrapper))
    return false;
  var tmp0_other_with_cast = other instanceof ConnectWrapper ? other : THROW_CCE();
  if (!this.rd_1.equals(tmp0_other_with_cast.rd_1))
    return false;
  if (!this.sd_1.equals(tmp0_other_with_cast.sd_1))
    return false;
  return true;
};
function Expression() {
}
function LogicalExpression(left, operator, right) {
  Expression.call(this);
  this.ek_1 = left;
  this.fk_1 = operator;
  this.gk_1 = right;
}
protoOf(LogicalExpression).yh = function(node, transform2) {
  return this.fk_1.ik(node, transform2, this.ek_1, this.gk_1);
};
protoOf(LogicalExpression).toString = function() {
  var tmp;
  var tmp_0;
  var tmp_1 = this.ek_1;
  if (tmp_1 instanceof LogicalExpression) {
    tmp_0 = !equals(this.ek_1.fk_1, this.fk_1);
  } else {
    tmp_0 = false;
  }
  if (tmp_0) {
    tmp = "(" + this.ek_1 + ")";
  } else {
    tmp = toString_2(this.ek_1);
  }
  var leftStr = tmp;
  var tmp_2;
  var tmp_3;
  var tmp_4 = this.gk_1;
  if (tmp_4 instanceof LogicalExpression) {
    tmp_3 = !equals(this.gk_1.fk_1, this.fk_1);
  } else {
    tmp_3 = false;
  }
  if (tmp_3) {
    tmp_2 = "(" + this.gk_1 + ")";
  } else {
    tmp_2 = toString_2(this.gk_1);
  }
  var rightStr = tmp_2;
  return leftStr + " " + this.fk_1 + " " + rightStr;
};
protoOf(LogicalExpression).hashCode = function() {
  var result = hashCode(this.ek_1);
  result = imul(result, 31) + hashCode(this.fk_1) | 0;
  result = imul(result, 31) + hashCode(this.gk_1) | 0;
  return result;
};
protoOf(LogicalExpression).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof LogicalExpression))
    return false;
  var tmp0_other_with_cast = other instanceof LogicalExpression ? other : THROW_CCE();
  if (!equals(this.ek_1, tmp0_other_with_cast.ek_1))
    return false;
  if (!equals(this.fk_1, tmp0_other_with_cast.fk_1))
    return false;
  if (!equals(this.gk_1, tmp0_other_with_cast.gk_1))
    return false;
  return true;
};
function sam$kotlin_Comparator$0_1(function_0) {
  this.jk_1 = function_0;
}
protoOf(sam$kotlin_Comparator$0_1).x4 = function(a, b) {
  return this.jk_1(a, b);
};
protoOf(sam$kotlin_Comparator$0_1).compare = function(a, b) {
  return this.x4(a, b);
};
function LogicalOperator$Companion$allSubClasses$lambda(a, b) {
  var tmp = -a.hk_1.length | 0;
  var tmp$ret$1 = -b.hk_1.length | 0;
  return compareValues(tmp, tmp$ret$1);
}
function Companion_4() {
  Companion_instance_4 = this;
  var tmp = this;
  var this_0 = listOf_0([AndOperator_getInstance(), OrOperator_getInstance()]);
  var tmp_0 = LogicalOperator$Companion$allSubClasses$lambda;
  var tmp$ret$0 = new sam$kotlin_Comparator$0_1(tmp_0);
  tmp.kk_1 = sortedWith(this_0, tmp$ret$0);
}
var Companion_instance_4;
function Companion_getInstance_4() {
  if (Companion_instance_4 == null)
    new Companion_4();
  return Companion_instance_4;
}
function AndOperator() {
  AndOperator_instance = this;
  LogicalOperator.call(this, "&&");
}
protoOf(AndOperator).ik = function(node, transform2, left, right) {
  return left.yh(node, transform2) ? right.yh(node, transform2) : false;
};
var AndOperator_instance;
function AndOperator_getInstance() {
  if (AndOperator_instance == null)
    new AndOperator();
  return AndOperator_instance;
}
function OrOperator() {
  OrOperator_instance = this;
  LogicalOperator.call(this, "||");
}
protoOf(OrOperator).ik = function(node, transform2, left, right) {
  return left.yh(node, transform2) ? true : right.yh(node, transform2);
};
var OrOperator_instance;
function OrOperator_getInstance() {
  if (OrOperator_instance == null)
    new OrOperator();
  return OrOperator_instance;
}
function LogicalOperator(key2) {
  Companion_getInstance_4();
  this.hk_1 = key2;
}
protoOf(LogicalOperator).toString = function() {
  return this.hk_1;
};
function PolynomialExpression$traversal$o$invoke$lambda(this$0) {
  return function(x, _anonymous_parameter_1__qggqgd) {
    return ((x - this$0.bk_1 | 0) % this$0.wj_1 | 0) === 0 ? ((x - this$0.bk_1 | 0) / this$0.wj_1 | 0) > 0 : false;
  };
}
function PolynomialExpression$traversal$1(this$0) {
  this.nk_1 = this$0;
}
protoOf(PolynomialExpression$traversal$1).vj = function(sq) {
  var tmp;
  if (this.nk_1.wj_1 > 0) {
    tmp = sq;
  } else {
    tmp = take(sq, this.nk_1.ck_1);
  }
  var tmp_0 = tmp;
  return filterIndexed(tmp_0, PolynomialExpression$traversal$o$invoke$lambda(this.nk_1));
};
function PolynomialExpression(a, b) {
  a = a === VOID ? 0 : a;
  b = b === VOID ? 1 : b;
  ConnectExpression.call(this);
  this.wj_1 = a;
  this.xj_1 = b;
  var tmp = this;
  var tmp_0;
  if (this.wj_1 < 0) {
    var tmp_1;
    if (this.xj_1 < 0) {
      tmp_1 = emptyList();
    } else if (this.xj_1 > 0) {
      var tmp_2;
      if (this.xj_1 <= (-this.wj_1 | 0)) {
        tmp_2 = emptyList();
      } else {
        var list = ArrayList_init_$Create$();
        var n = 1;
        while ((imul(this.wj_1, n) + this.xj_1 | 0) > 0) {
          list.k(imul(this.wj_1, n) + this.xj_1 | 0);
          n = n + 1 | 0;
        }
        tmp_2 = sorted(list);
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = emptyList();
    }
    tmp_0 = tmp_1;
  } else if (this.wj_1 > 0) {
    tmp_0 = emptyList();
  } else {
    var tmp_3;
    if (this.xj_1 < 0) {
      tmp_3 = emptyList();
    } else if (this.xj_1 > 0) {
      tmp_3 = listOf(this.xj_1);
    } else {
      tmp_3 = emptyList();
    }
    tmp_0 = tmp_3;
  }
  tmp.yj_1 = tmp_0;
  this.zj_1 = this.yj_1.i() === 1;
  var tmp_4 = this;
  var tmp0_elvis_lhs = firstOrNull(this.yj_1);
  tmp_4.ak_1 = (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) - 1 | 0;
  this.bk_1 = this.xj_1 - 1 | 0;
  this.ck_1 = this.wj_1 + this.xj_1 | 0;
  var tmp_5 = this;
  tmp_5.dk_1 = new PolynomialExpression$traversal$1(this);
}
protoOf(PolynomialExpression).toString = function() {
  if (this.wj_1 === 0 ? this.xj_1 === 0 : false)
    return "0";
  if (this.wj_1 === 1 ? this.xj_1 === 1 : false)
    return "(n+1)";
  if (this.xj_1 === 0) {
    if (this.wj_1 === 1)
      return "n";
    var tmp;
    if (this.wj_1 > 0) {
      tmp = "" + this.wj_1 + "n";
    } else {
      tmp = "(" + this.wj_1 + "n)";
    }
    return tmp;
  }
  if (this.wj_1 === 0) {
    if (this.xj_1 === 1)
      return "";
    var tmp_0;
    if (this.xj_1 > 0) {
      tmp_0 = this.xj_1.toString();
    } else {
      tmp_0 = "(" + this.xj_1 + ")";
    }
    return tmp_0;
  }
  var bOp = this.xj_1 >= 0 ? "+" : "";
  return "(" + this.wj_1 + "n" + bOp + this.xj_1 + ")";
};
protoOf(PolynomialExpression).pi = function() {
  return this.zj_1;
};
protoOf(PolynomialExpression).qi = function() {
  return this.ak_1;
};
protoOf(PolynomialExpression).ri = function() {
  return this.dk_1;
};
protoOf(PolynomialExpression).hashCode = function() {
  var result = this.wj_1;
  result = imul(result, 31) + this.xj_1 | 0;
  return result;
};
protoOf(PolynomialExpression).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof PolynomialExpression))
    return false;
  var tmp0_other_with_cast = other instanceof PolynomialExpression ? other : THROW_CCE();
  if (!(this.wj_1 === tmp0_other_with_cast.wj_1))
    return false;
  if (!(this.xj_1 === tmp0_other_with_cast.xj_1))
    return false;
  return true;
};
function PropertySegment$toString$lambda(it) {
  return "[" + it + "]";
}
function PropertySegment$matchName$1() {
}
protoOf(PropertySegment$matchName$1).tj = function(node, transform2) {
  return true;
};
function PropertySegment$matchName$2(this$0) {
  this.ok_1 = this$0;
}
protoOf(PropertySegment$matchName$2).tj = function(node, transform2) {
  var tmp0_elvis_lhs = transform2.qb_1(node);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var str = tmp;
  if (charSequenceLength(str) === this.ok_1.ud_1.length) {
    return contentEquals_0(str, this.ok_1.ud_1);
  } else if (charSequenceLength(str) > this.ok_1.ud_1.length) {
    return charSequenceGet(str, (charSequenceLength(str) - this.ok_1.ud_1.length | 0) - 1 | 0) === _Char___init__impl__6a9atx(46) ? endsWith_0(str, this.ok_1.ud_1) : false;
  }
  return false;
};
function PropertySegment(tracked, name, expressions) {
  this.td_1 = tracked;
  this.ud_1 = name;
  this.vd_1 = expressions;
  var tmp = this;
  var tmp_0;
  if (isBlank(this.ud_1) ? true : this.ud_1 === "*") {
    tmp_0 = new PropertySegment$matchName$1();
  } else {
    tmp_0 = new PropertySegment$matchName$2(this);
  }
  tmp.wd_1 = tmp_0;
}
protoOf(PropertySegment).toString = function() {
  var matchTag = this.td_1 ? "@" : "";
  var tmp = matchTag + this.ud_1;
  return tmp + joinToString_0(this.vd_1, "", VOID, VOID, VOID, VOID, PropertySegment$toString$lambda);
};
protoOf(PropertySegment).yh = function(node, transform2) {
  var tmp;
  if (this.wd_1.tj(node, transform2)) {
    var tmp$ret$0;
    $l$block_0: {
      var this_0 = this.vd_1;
      var tmp_0;
      if (isInterface(this_0, Collection)) {
        tmp_0 = this_0.p();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.m();
      while (tmp0_iterator.t()) {
        var element = tmp0_iterator.u();
        if (!element.yh(node, transform2)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    tmp = tmp$ret$0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(PropertySegment).hashCode = function() {
  var result = getBooleanHashCode(this.td_1);
  result = imul(result, 31) + getStringHashCode(this.ud_1) | 0;
  result = imul(result, 31) + hashCode(this.vd_1) | 0;
  return result;
};
protoOf(PropertySegment).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof PropertySegment))
    return false;
  var tmp0_other_with_cast = other instanceof PropertySegment ? other : THROW_CCE();
  if (!(this.td_1 === tmp0_other_with_cast.td_1))
    return false;
  if (!(this.ud_1 === tmp0_other_with_cast.ud_1))
    return false;
  if (!equals(this.vd_1, tmp0_other_with_cast.vd_1))
    return false;
  return true;
};
function PropertyWrapper(propertySegment, to2) {
  to2 = to2 === VOID ? null : to2;
  this.pd_1 = propertySegment;
  this.qd_1 = to2;
}
protoOf(PropertyWrapper).toString = function() {
  var tmp;
  if (!(this.qd_1 == null)) {
    tmp = this.qd_1.toString() + " ";
  } else {
    tmp = "";
  }
  return tmp + this.pd_1.toString();
};
protoOf(PropertyWrapper).be = function(node, transform2, trackNodes) {
  if (!this.pd_1.yh(node, transform2)) {
    return null;
  }
  trackNodes.k(node);
  if (this.qd_1 == null) {
    return trackNodes;
  }
  var r = this.qd_1.be(node, transform2, trackNodes);
  if (r == null) {
    removeLast(trackNodes);
  }
  return r;
};
protoOf(PropertyWrapper).hashCode = function() {
  var result = this.pd_1.hashCode();
  result = imul(result, 31) + (this.qd_1 == null ? 0 : this.qd_1.hashCode()) | 0;
  return result;
};
protoOf(PropertyWrapper).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof PropertyWrapper))
    return false;
  var tmp0_other_with_cast = other instanceof PropertyWrapper ? other : THROW_CCE();
  if (!this.pd_1.equals(tmp0_other_with_cast.pd_1))
    return false;
  if (!equals(this.qd_1, tmp0_other_with_cast.qd_1))
    return false;
  return true;
};
function TupleExpression$traversal$1(this$0) {
  this.pk_1 = this$0;
}
protoOf(TupleExpression$traversal$1).vj = function(sq) {
  return filterIndexes(sq, this.pk_1.tk_1);
};
function TupleExpression(numbers) {
  ConnectExpression.call(this);
  this.qk_1 = numbers;
  this.rk_1 = this.qk_1.i() === 1;
  var tmp = this;
  var tmp0_elvis_lhs = firstOrNull(this.qk_1);
  tmp.sk_1 = (tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs) - 1 | 0;
  var tmp_0 = this;
  var this_0 = this.qk_1;
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var tmp0_iterator = this_0.m();
  while (tmp0_iterator.t()) {
    var item = tmp0_iterator.u();
    var tmp$ret$0 = item - 1 | 0;
    destination.k(tmp$ret$0);
  }
  tmp_0.tk_1 = destination;
  var tmp_1 = this;
  tmp_1.uk_1 = new TupleExpression$traversal$1(this);
}
protoOf(TupleExpression).pi = function() {
  return this.rk_1;
};
protoOf(TupleExpression).qi = function() {
  return this.sk_1;
};
protoOf(TupleExpression).ri = function() {
  return this.uk_1;
};
protoOf(TupleExpression).toString = function() {
  if (this.qk_1.i() === 1) {
    var tmp;
    if (first(this.qk_1) === 1) {
      tmp = "";
    } else {
      tmp = first(this.qk_1).toString();
    }
    return tmp;
  }
  return "(" + joinToString_0(this.qk_1, ",") + ")";
};
protoOf(TupleExpression).hashCode = function() {
  return hashCode(this.qk_1);
};
protoOf(TupleExpression).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof TupleExpression))
    return false;
  var tmp0_other_with_cast = other instanceof TupleExpression ? other : THROW_CCE();
  if (!equals(this.qk_1, tmp0_other_with_cast.qk_1))
    return false;
  return true;
};
function Parser(prefix, temp) {
  prefix = prefix === VOID ? "" : prefix;
  this.vk_1 = prefix;
  this.wk_1 = temp;
}
protoOf(Parser).xk = function(source2, offset) {
  return this.wk_1(source2, offset, this.vk_1);
};
protoOf(Parser).toString = function() {
  return "Parser(prefix=" + this.vk_1 + ", temp=" + this.wk_1 + ")";
};
protoOf(Parser).hashCode = function() {
  var result = getStringHashCode(this.vk_1);
  result = imul(result, 31) + hashCode(this.wk_1) | 0;
  return result;
};
protoOf(Parser).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof Parser))
    return false;
  var tmp0_other_with_cast = other instanceof Parser ? other : THROW_CCE();
  if (!(this.vk_1 === tmp0_other_with_cast.vk_1))
    return false;
  if (!equals(this.wk_1, tmp0_other_with_cast.wk_1))
    return false;
  return true;
};
function ParserResult(data, length) {
  length = length === VOID ? 0 : length;
  this.yk_1 = data;
  this.zk_1 = length;
}
protoOf(ParserResult).toString = function() {
  return "ParserResult(data=" + this.yk_1 + ", length=" + this.zk_1 + ")";
};
protoOf(ParserResult).hashCode = function() {
  var result = this.yk_1 == null ? 0 : hashCode(this.yk_1);
  result = imul(result, 31) + this.zk_1 | 0;
  return result;
};
protoOf(ParserResult).equals = function(other) {
  if (this === other)
    return true;
  if (!(other instanceof ParserResult))
    return false;
  var tmp0_other_with_cast = other instanceof ParserResult ? other : THROW_CCE();
  if (!equals(this.yk_1, tmp0_other_with_cast.yk_1))
    return false;
  if (!(this.zk_1 === tmp0_other_with_cast.zk_1))
    return false;
  return true;
};
function ParserSet$whiteCharParser$lambda(source2, offset, prefix) {
  var i = offset;
  var data = "";
  while (i < source2.length ? contains_0(prefix, charSequenceGet(source2, i)) : false) {
    data = data + toString_0(charSequenceGet(source2, i));
    i = i + 1 | 0;
  }
  return new ParserResult(data, i - offset | 0);
}
function ParserSet$whiteCharStrictParser$lambda(source2, offset, prefix) {
  Companion_instance_0.assert(source2, offset, prefix, "whitespace");
  return ParserSet_getInstance().rc_1.xk(source2, offset);
}
function ParserSet$nameParser$lambda(source2, offset, prefix) {
  var i = offset;
  var s0 = getOrNull(source2, i);
  var tmp;
  var tmp_0 = s0;
  if (!((tmp_0 == null ? null : new Char(tmp_0)) == null)) {
    tmp = !contains_0(prefix, s0);
  } else {
    tmp = false;
  }
  if (tmp) {
    return new ParserResult("");
  }
  Companion_instance_0.assert(source2, i, prefix, "*0-9a-zA-Z_");
  var data = toString_0(charSequenceGet(source2, i));
  i = i + 1 | 0;
  if (data === "*") {
    return new ParserResult(data, i - offset | 0);
  }
  var center = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_.";
  $l$loop:
    while (i < source2.length) {
      if (charSequenceGet(data, (i - offset | 0) - 1 | 0) === _Char___init__impl__6a9atx(46)) {
        Companion_instance_0.assert(source2, i, prefix, "[0-9a-zA-Z_]");
      }
      if (contains_0(center, charSequenceGet(source2, i))) {
        data = data + toString_0(charSequenceGet(source2, i));
      } else {
        break $l$loop;
      }
      i = i + 1 | 0;
    }
  return new ParserResult(data, i - offset | 0);
}
function ParserSet$combinatorOperatorParser$lambda(it) {
  return it.ti_1;
}
function ParserSet$combinatorOperatorParser$lambda_0(source2, offset, _anonymous_parameter_2__qggqfi) {
  var this_0 = Companion_getInstance_3().ui_1;
  var tmp$ret$1;
  $l$block: {
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      if (startsWith(source2, element.ti_1, offset)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_elvis_lhs = tmp$ret$1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    Companion_instance_0.throwError(source2, offset, "ConnectOperator");
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var operator = tmp;
  return new ParserResult(operator, operator.ti_1.length);
}
function ParserSet$integerParser$lambda(source2, offset, prefix) {
  var i = offset;
  Companion_instance_0.assert(source2, i, prefix, "number");
  var s = "";
  while (i < source2.length ? contains_0(prefix, charSequenceGet(source2, i)) : false) {
    s = s + toString_0(charSequenceGet(source2, i));
    i = i + 1 | 0;
  }
  var tmp;
  try {
    tmp = toInt(s);
  } catch ($p) {
    var tmp_0;
    if ($p instanceof NumberFormatException) {
      Companion_instance_0.throwError(source2, offset, "valid format number");
    } else {
      throw $p;
    }
    tmp = tmp_0;
  }
  return new ParserResult(tmp, i - offset | 0);
}
function ParserSet$monomialParser$lambda(source2, offset, prefix) {
  var i = offset;
  Companion_instance_0.assert(source2, i, prefix);
  var tmp0_subject = charSequenceGet(source2, i);
  var tmp;
  if (tmp0_subject === _Char___init__impl__6a9atx(43)) {
    i = i + 1 | 0;
    tmp = 1;
  } else if (tmp0_subject === _Char___init__impl__6a9atx(45)) {
    i = i + 1 | 0;
    tmp = -1;
  } else {
    tmp = 1;
  }
  var signal = tmp;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  Companion_instance_0.assert(source2, i, ParserSet_getInstance().vc_1.vk_1 + "n");
  var tmp_0;
  if (contains_0(ParserSet_getInstance().vc_1.vk_1, charSequenceGet(source2, i))) {
    var coefficientResult = ParserSet_getInstance().vc_1.xk(source2, i);
    i = i + coefficientResult.zk_1 | 0;
    tmp_0 = coefficientResult.yk_1;
  } else {
    tmp_0 = 1;
  }
  var coefficient = imul(tmp_0, signal);
  if (i < source2.length ? charSequenceGet(source2, i) === _Char___init__impl__6a9atx(110) : false) {
    i = i + 1 | 0;
    return new ParserResult(new Pair(1, coefficient), i - offset | 0);
  } else {
    return new ParserResult(new Pair(0, coefficient), i - offset | 0);
  }
}
function ParserSet$polynomialExpressionParser$lambda(source2, offset, prefix) {
  var i = offset;
  Companion_instance_0.assert(source2, i, prefix);
  var monomialResultList = ArrayList_init_$Create$();
  if (charSequenceGet(source2, i) === _Char___init__impl__6a9atx(40)) {
    i = i + 1 | 0;
    i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
    Companion_instance_0.assert(source2, i, ParserSet_getInstance().wc_1.vk_1);
    while (!(charSequenceGet(source2, i) === _Char___init__impl__6a9atx(41))) {
      if (monomialResultList.i() > 0) {
        Companion_instance_0.assert(source2, i, "+-");
      }
      var monomialResult = ParserSet_getInstance().wc_1.xk(source2, i);
      monomialResultList.k(monomialResult);
      i = i + monomialResult.zk_1 | 0;
      i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
      if (i >= source2.length) {
        Companion_instance_0.assert(source2, i, ")");
      }
    }
    i = i + 1 | 0;
  } else {
    var monomialResult_0 = ParserSet_getInstance().wc_1.xk(source2, i);
    monomialResultList.k(monomialResult_0);
    i = i + monomialResult_0.zk_1 | 0;
  }
  var map2 = LinkedHashMap_init_$Create$();
  var tmp0_iterator = monomialResultList.m();
  while (tmp0_iterator.t()) {
    var element = tmp0_iterator.u();
    var tmp0_container = element.yk_1;
    var power = tmp0_container.za();
    var coefficient = tmp0_container.ab();
    var tmp1_elvis_lhs = map2.v1(power);
    var value = (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) + coefficient | 0;
    map2.q1(power, value);
  }
  var destination = LinkedHashMap_init_$Create$_0(mapCapacity(map2.i()));
  var tmp0_iterator_0 = map2.w1().m();
  while (tmp0_iterator_0.t()) {
    var element_0 = tmp0_iterator_0.u();
    if (element_0.g4() > 1) {
      Companion_instance_0.throwError(source2, offset, "power must be 0 or 1");
    }
    var tmp$ret$2 = element_0.h4();
    destination.q1(Unit_instance, tmp$ret$2);
  }
  var tmp3_elvis_lhs = map2.v1(1);
  var tmp = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
  var tmp4_elvis_lhs = map2.v1(0);
  var polynomialExpression = new PolynomialExpression(tmp, tmp4_elvis_lhs == null ? 0 : tmp4_elvis_lhs);
  var tmp_0;
  if (polynomialExpression.wj_1 <= 0 ? polynomialExpression.yj_1.p() : false) {
    tmp_0 = true;
  } else {
    var tmp_1;
    if (!polynomialExpression.yj_1.p()) {
      tmp_1 = first(polynomialExpression.yj_1) <= 0;
    } else {
      tmp_1 = false;
    }
    tmp_0 = tmp_1;
  }
  if (tmp_0) {
    Companion_instance_0.throwError(source2, offset, "valid polynomialExpression");
  }
  return new ParserResult(polynomialExpression, i - offset | 0);
}
function ParserSet$tupleExpressionParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  var i = offset;
  Companion_instance_0.assert(source2, i, "(");
  i = i + 1 | 0;
  var numbers = ArrayList_init_$Create$();
  while (i < source2.length ? !(charSequenceGet(source2, i) === _Char___init__impl__6a9atx(41)) : false) {
    i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
    var intResult = ParserSet_getInstance().vc_1.xk(source2, i);
    if (numbers.p()) {
      if (intResult.yk_1 <= 0) {
        Companion_instance_0.throwError(source2, i, "positive integer");
      }
    } else {
      if (intResult.yk_1 <= last(numbers)) {
        Companion_instance_0.throwError(source2, i, ">" + last(numbers));
      }
    }
    i = i + intResult.zk_1 | 0;
    numbers.k(intResult.yk_1);
    i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
    var tmp = getOrNull(source2, i);
    if (equals(tmp == null ? null : new Char(tmp), new Char(_Char___init__impl__6a9atx(44)))) {
      i = i + 1 | 0;
      i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
      Companion_instance_0.assert(source2, i, ParserSet_getInstance().vc_1.vk_1 + ")");
    }
  }
  Companion_instance_0.assert(source2, i, ")");
  i = i + 1 | 0;
  return new ParserResult(new TupleExpression(numbers), i - offset | 0);
}
function ParserSet$connectExpressionParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  var i = offset;
  var tmp;
  if (ParserSet_getInstance().zc_1.s4(charSequenceSubSequence(source2, offset, source2.length))) {
    var tupleExpressionResult = ParserSet_getInstance().yc_1.xk(source2, i);
    i = i + tupleExpressionResult.zk_1 | 0;
    tmp = new ParserResult(tupleExpressionResult.yk_1, i - offset | 0);
  } else {
    var polynomialExpressionResult = ParserSet_getInstance().xc_1.xk(source2, offset);
    i = i + polynomialExpressionResult.zk_1 | 0;
    tmp = new ParserResult(polynomialExpressionResult.yk_1, i - offset | 0);
  }
  return tmp;
}
function ParserSet$combinatorParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  var i = offset;
  var operatorResult = ParserSet_getInstance().uc_1.xk(source2, i);
  i = i + operatorResult.zk_1 | 0;
  var expressionResult = null;
  if (i < source2.length ? contains_0(ParserSet_getInstance().ad_1.vk_1, charSequenceGet(source2, i)) : false) {
    expressionResult = ParserSet_getInstance().ad_1.xk(source2, i);
    i = i + expressionResult.zk_1 | 0;
  }
  var tmp0_safe_receiver = expressionResult;
  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yk_1;
  return new ParserResult(new ConnectSegment(operatorResult.yk_1, tmp1_elvis_lhs == null ? new PolynomialExpression() : tmp1_elvis_lhs), i - offset | 0);
}
function ParserSet$attrOperatorParser$lambda(it) {
  return it.zh_1;
}
function ParserSet$attrOperatorParser$lambda_0(source2, offset, _anonymous_parameter_2__qggqfi) {
  var this_0 = Companion_getInstance_2().ci_1;
  var tmp$ret$1;
  $l$block: {
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      if (startsWith(source2, element.zh_1, offset)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_elvis_lhs = tmp$ret$1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    Companion_instance_0.throwError(source2, offset, "CompareOperator");
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var operator = tmp;
  return new ParserResult(operator, operator.zh_1.length);
}
function ParserSet$stringParser$lambda(source2, offset, prefix) {
  var i = offset;
  Companion_instance_0.assert(source2, i, prefix);
  var startChar = charSequenceGet(source2, i);
  i = i + 1 | 0;
  if (i >= source2.length) {
    Companion_instance_0.throwError(source2, i, "any char");
  }
  var data = "";
  $l$loop:
    while (!(charSequenceGet(source2, i) === startChar)) {
      if (i >= (source2.length - 1 | 0)) {
        Companion_instance_0.assert(source2, i, toString_0(startChar));
        break $l$loop;
      }
      var this_0 = charSequenceGet(source2, i);
      var containsArg = Char__toInt_impl_vasixd(this_0);
      if (0 <= containsArg ? containsArg <= 31 : false) {
        Companion_instance_0.throwError(source2, i, "0-1f escape char");
      }
      if (charSequenceGet(source2, i) === _Char___init__impl__6a9atx(92)) {
        i = i + 1 | 0;
        Companion_instance_0.assert(source2, i);
        var tmp = data;
        var tmp2_subject = charSequenceGet(source2, i);
        var tmp_0;
        if (tmp2_subject === _Char___init__impl__6a9atx(92)) {
          tmp_0 = _Char___init__impl__6a9atx(92);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(39)) {
          tmp_0 = _Char___init__impl__6a9atx(39);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(34)) {
          tmp_0 = _Char___init__impl__6a9atx(34);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(96)) {
          tmp_0 = _Char___init__impl__6a9atx(96);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(110)) {
          tmp_0 = _Char___init__impl__6a9atx(10);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(114)) {
          tmp_0 = _Char___init__impl__6a9atx(13);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(116)) {
          tmp_0 = _Char___init__impl__6a9atx(9);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(98)) {
          tmp_0 = _Char___init__impl__6a9atx(8);
        } else if (tmp2_subject === _Char___init__impl__6a9atx(120)) {
          var inductionVariable = 0;
          if (inductionVariable < 2)
            do {
              inductionVariable = inductionVariable + 1 | 0;
              i = i + 1 | 0;
              Companion_instance_0.assert(source2, i, "0123456789abcdefABCDEF");
            } while (inductionVariable < 2);
          var startIndex = (i - 2 | 0) + 1 | 0;
          var endIndex = i + 1 | 0;
          var tmp$ret$2 = source2.substring(startIndex, endIndex);
          tmp_0 = numberToChar(toInt_0(tmp$ret$2, 16));
        } else if (tmp2_subject === _Char___init__impl__6a9atx(117)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < 4)
            do {
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              i = i + 1 | 0;
              Companion_instance_0.assert(source2, i, "0123456789abcdefABCDEF");
            } while (inductionVariable_0 < 4);
          var startIndex_0 = (i - 4 | 0) + 1 | 0;
          var endIndex_0 = i + 1 | 0;
          var tmp$ret$4 = source2.substring(startIndex_0, endIndex_0);
          tmp_0 = numberToChar(toInt_0(tmp$ret$4, 16));
        } else {
          Companion_instance_0.throwError(source2, i, "escape char");
        }
        data = tmp + toString_0(tmp_0);
      } else {
        data = data + toString_0(charSequenceGet(source2, i));
      }
      i = i + 1 | 0;
    }
  i = i + 1 | 0;
  return new ParserResult(data, i - offset | 0);
}
function ParserSet$propertyParser$lambda(source2, offset, prefix) {
  var i = offset;
  Companion_instance_0.assert(source2, i, prefix);
  var data = toString_0(charSequenceGet(source2, i));
  i = i + 1 | 0;
  while (i < source2.length ? contains_0(ParserSet_getInstance().fd_1, charSequenceGet(source2, i)) : false) {
    if (charSequenceGet(source2, i) === _Char___init__impl__6a9atx(46)) {
      Companion_instance_0.assert(source2, i + 1 | 0, prefix);
    }
    data = data + toString_0(charSequenceGet(source2, i));
    i = i + 1 | 0;
  }
  return new ParserResult(data, i - offset | 0);
}
function ParserSet$valueParser$lambda(source2, offset, prefix) {
  var i = offset;
  Companion_instance_0.assert(source2, i, prefix);
  var tmp0_subject = charSequenceGet(source2, i);
  var tmp;
  if (tmp0_subject === _Char___init__impl__6a9atx(116)) {
    i = i + 1 | 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength("rue")) {
      var element = charSequenceGet("rue", inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      Companion_instance_0.assert(source2, i, toString_0(element));
      i = i + 1 | 0;
    }
    tmp = true;
  } else if (tmp0_subject === _Char___init__impl__6a9atx(102)) {
    i = i + 1 | 0;
    var inductionVariable_0 = 0;
    while (inductionVariable_0 < charSequenceLength("alse")) {
      var element_0 = charSequenceGet("alse", inductionVariable_0);
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      Companion_instance_0.assert(source2, i, toString_0(element_0));
      i = i + 1 | 0;
    }
    tmp = false;
  } else if (tmp0_subject === _Char___init__impl__6a9atx(110)) {
    i = i + 1 | 0;
    var inductionVariable_1 = 0;
    while (inductionVariable_1 < charSequenceLength("ull")) {
      var element_1 = charSequenceGet("ull", inductionVariable_1);
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      Companion_instance_0.assert(source2, i, toString_0(element_1));
      i = i + 1 | 0;
    }
    tmp = null;
  } else if (contains_0(ParserSet_getInstance().dd_1.vk_1, tmp0_subject)) {
    var s = ParserSet_getInstance().dd_1.xk(source2, i);
    i = i + s.zk_1 | 0;
    tmp = s.yk_1;
  } else if (contains_0(ParserSet_getInstance().vc_1.vk_1, tmp0_subject)) {
    var n = ParserSet_getInstance().vc_1.xk(source2, i);
    i = i + n.zk_1 | 0;
    tmp = n.yk_1;
  } else {
    Companion_instance_0.throwError(source2, i, prefix);
  }
  var value = tmp;
  return new ParserResult(value, i - offset | 0);
}
function ParserSet$binaryExpressionParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  var i = offset;
  var parserResult = ParserSet_getInstance().gd_1.xk(source2, i);
  i = i + parserResult.zk_1 | 0;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  var operatorResult = ParserSet_getInstance().cd_1.xk(source2, i);
  i = i + operatorResult.zk_1 | 0;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  var valueResult = ParserSet_getInstance().hd_1.xk(source2, i);
  i = i + valueResult.zk_1 | 0;
  return new ParserResult(new BinaryExpression(parserResult.yk_1, operatorResult.yk_1, valueResult.yk_1), i - offset | 0);
}
function ParserSet$logicalOperatorParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  var i = offset;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  var this_0 = Companion_getInstance_4().kk_1;
  var tmp$ret$1;
  $l$block: {
    var tmp0_iterator = this_0.m();
    while (tmp0_iterator.t()) {
      var element = tmp0_iterator.u();
      if (startsWith(source2, element.hk_1, offset)) {
        tmp$ret$1 = element;
        break $l$block;
      }
    }
    tmp$ret$1 = null;
  }
  var tmp0_elvis_lhs = tmp$ret$1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    Companion_instance_0.throwError(source2, offset, "LogicalOperator");
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var operator = tmp;
  return new ParserResult(operator, operator.hk_1.length);
}
function ParserSet$attrParser$lambda(source2, offset, prefix) {
  var i = offset;
  Companion_instance_0.assert(source2, i, prefix);
  i = i + 1 | 0;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  var exp = ParserSet_getInstance().al(source2, i);
  i = i + exp.zk_1 | 0;
  Companion_instance_0.assert(source2, i, "]");
  i = i + 1 | 0;
  return new ParserResult(exp.yk_1, i - offset | 0);
}
function ParserSet$selectorUnitParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  var i = offset;
  var tracked = false;
  var tmp = getOrNull(source2, i);
  if (equals(tmp == null ? null : new Char(tmp), new Char(_Char___init__impl__6a9atx(64)))) {
    tracked = true;
    i = i + 1 | 0;
  }
  var nameResult = ParserSet_getInstance().tc_1.xk(source2, i);
  i = i + nameResult.zk_1 | 0;
  var expressions = ArrayList_init_$Create$();
  while (i < source2.length ? charSequenceGet(source2, i) === _Char___init__impl__6a9atx(91) : false) {
    var attrResult = ParserSet_getInstance().kd_1.xk(source2, i);
    i = i + attrResult.zk_1 | 0;
    expressions.k(attrResult.yk_1);
  }
  if (nameResult.zk_1 === 0 ? expressions.i() === 0 : false) {
    Companion_instance_0.throwError(source2, i, "[");
  }
  return new ParserResult(new PropertySegment(tracked, nameResult.yk_1, expressions), i - offset | 0);
}
function ParserSet$connectSelectorParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  var i = offset;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  var topSelector = ParserSet_getInstance().ld_1.xk(source2, i);
  i = i + topSelector.zk_1 | 0;
  var selectorList = ArrayList_init_$Create$();
  $l$loop:
    while (i < source2.length ? contains_0(ParserSet_getInstance().rc_1.vk_1, charSequenceGet(source2, i)) : false) {
      i = i + ParserSet_getInstance().sc_1.xk(source2, i).zk_1 | 0;
      if (i >= source2.length) {
        break $l$loop;
      }
      var tmp;
      if (contains_0(ParserSet_getInstance().bd_1.vk_1, charSequenceGet(source2, i))) {
        var combinatorResult = ParserSet_getInstance().bd_1.xk(source2, i);
        i = i + combinatorResult.zk_1 | 0;
        i = i + ParserSet_getInstance().sc_1.xk(source2, i).zk_1 | 0;
        tmp = combinatorResult.yk_1;
      } else {
        tmp = new ConnectSegment(VOID, new PolynomialExpression(1, 0));
      }
      var combinator = tmp;
      var selectorResult = ParserSet_getInstance().ld_1.xk(source2, i);
      i = i + selectorResult.zk_1 | 0;
      selectorList.k(to(combinator, selectorResult.yk_1));
    }
  return new ParserResult(to(topSelector.yk_1, selectorList), i - offset | 0);
}
function ParserSet$endParser$lambda(source2, offset, _anonymous_parameter_2__qggqfi) {
  if (!(offset === source2.length)) {
    Companion_instance_0.throwError(source2, offset, "EOF");
  }
  return new ParserResult(Unit_instance, 0);
}
function ParserSet$selectorParser$lambda(source2) {
  var i = 0;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  var combinatorSelectorResult = ParserSet_getInstance().md_1.xk(source2, i);
  i = i + combinatorSelectorResult.zk_1 | 0;
  i = i + ParserSet_getInstance().rc_1.xk(source2, i).zk_1 | 0;
  i = i + ParserSet_getInstance().nd_1.xk(source2, i).zk_1 | 0;
  var data = combinatorSelectorResult.yk_1;
  var propertySelectorList = ArrayList_init_$Create$();
  var combinatorSelectorList = ArrayList_init_$Create$();
  propertySelectorList.k(data.xa_1);
  var tmp0_iterator = data.ya_1.m();
  while (tmp0_iterator.t()) {
    var element = tmp0_iterator.u();
    propertySelectorList.k(element.ya_1);
    combinatorSelectorList.k(element.xa_1);
  }
  var wrapperList = mutableListOf([new PropertyWrapper(first(propertySelectorList))]);
  var index = 0;
  var tmp0_iterator_0 = combinatorSelectorList.m();
  while (tmp0_iterator_0.t()) {
    var item = tmp0_iterator_0.u();
    var tmp1 = index;
    index = tmp1 + 1 | 0;
    var index_0 = checkIndexOverflow(tmp1);
    var combinatorSelectorWrapper = new ConnectWrapper(item, last(wrapperList));
    var propertySelectorWrapper = new PropertyWrapper(propertySelectorList.v(index_0 + 1 | 0), combinatorSelectorWrapper);
    wrapperList.k(propertySelectorWrapper);
  }
  return new Selector(last(wrapperList));
}
function ParserSet() {
  ParserSet_instance = this;
  var tmp = this;
  tmp.rc_1 = new Parser(" 	\r\n", ParserSet$whiteCharParser$lambda);
  var tmp_0 = this;
  tmp_0.sc_1 = new Parser(" 	\r\n", ParserSet$whiteCharStrictParser$lambda);
  var tmp_1 = this;
  tmp_1.tc_1 = new Parser("*1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_", ParserSet$nameParser$lambda);
  var tmp_2 = this;
  var tmp_3 = Companion_getInstance_3().ui_1;
  var tmp_4 = joinToString_0(tmp_3, "", VOID, VOID, VOID, VOID, ParserSet$combinatorOperatorParser$lambda);
  tmp_2.uc_1 = new Parser(tmp_4, ParserSet$combinatorOperatorParser$lambda_0);
  var tmp_5 = this;
  tmp_5.vc_1 = new Parser("1234567890", ParserSet$integerParser$lambda);
  var tmp_6 = this;
  tmp_6.wc_1 = new Parser("+-1234567890n", ParserSet$monomialParser$lambda);
  var tmp_7 = this;
  tmp_7.xc_1 = new Parser("(0123456789n", ParserSet$polynomialExpressionParser$lambda);
  var tmp_8 = this;
  tmp_8.yc_1 = new Parser(VOID, ParserSet$tupleExpressionParser$lambda);
  this.zc_1 = Regex_init_$Create$("^\\(\\s*\\d+,.*$");
  var tmp_9 = this;
  tmp_9.ad_1 = new Parser(this.xc_1.vk_1, ParserSet$connectExpressionParser$lambda);
  var tmp_10 = this;
  tmp_10.bd_1 = new Parser(this.uc_1.vk_1, ParserSet$combinatorParser$lambda);
  var tmp_11 = this;
  var tmp_12 = Companion_getInstance_2().ci_1;
  var tmp_13 = joinToString_0(tmp_12, "", VOID, VOID, VOID, VOID, ParserSet$attrOperatorParser$lambda);
  tmp_11.cd_1 = new Parser(tmp_13, ParserSet$attrOperatorParser$lambda_0);
  var tmp_14 = this;
  tmp_14.dd_1 = new Parser("`'\"", ParserSet$stringParser$lambda);
  this.ed_1 = "_" + joinToString_0(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), "") + joinToString_0(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90)), "");
  this.fd_1 = this.ed_1 + toString_0(_Char___init__impl__6a9atx(46)) + joinToString_0(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57)), "");
  var tmp_15 = this;
  tmp_15.gd_1 = new Parser(this.ed_1, ParserSet$propertyParser$lambda);
  var tmp_16 = this;
  var tmp_17 = "tfn" + this.dd_1.vk_1 + this.vc_1.vk_1;
  tmp_16.hd_1 = new Parser(tmp_17, ParserSet$valueParser$lambda);
  var tmp_18 = this;
  tmp_18.id_1 = new Parser(VOID, ParserSet$binaryExpressionParser$lambda);
  var tmp_19 = this;
  tmp_19.jd_1 = new Parser(VOID, ParserSet$logicalOperatorParser$lambda);
  var tmp_20 = this;
  tmp_20.kd_1 = new Parser("[", ParserSet$attrParser$lambda);
  var tmp_21 = this;
  tmp_21.ld_1 = new Parser(VOID, ParserSet$selectorUnitParser$lambda);
  var tmp_22 = this;
  tmp_22.md_1 = new Parser(VOID, ParserSet$connectSelectorParser$lambda);
  var tmp_23 = this;
  tmp_23.nd_1 = new Parser(VOID, ParserSet$endParser$lambda);
  var tmp_24 = this;
  tmp_24.od_1 = ParserSet$selectorParser$lambda;
}
protoOf(ParserSet).al = function(source2, offset) {
  var i = offset;
  i = i + this.rc_1.xk(source2, i).zk_1 | 0;
  var parserResults = ArrayList_init_$Create$();
  while ((i < source2.length ? !(charSequenceGet(source2, i) === _Char___init__impl__6a9atx(93)) : false) ? !(charSequenceGet(source2, i) === _Char___init__impl__6a9atx(41)) : false) {
    var tmp0_subject = charSequenceGet(source2, i);
    if (tmp0_subject === _Char___init__impl__6a9atx(40)) {
      if (!parserResults.p()) {
        var lastToken = last(parserResults);
        var tmp = lastToken.yk_1;
        if (!(tmp instanceof LogicalOperator)) {
          var count = 0;
          while ((i - 1 | 0) >= count ? contains_0(this.rc_1.vk_1, charSequenceGet(source2, (i - 1 | 0) - count | 0)) : false) {
            count = count + 1 | 0;
          }
          Companion_instance_0.throwError(source2, (i - count | 0) - lastToken.zk_1 | 0, "LogicalOperator");
        }
      }
      i = i + 1 | 0;
      var this_0 = this.al(source2, i);
      i = i + this_0.zk_1 | 0;
      parserResults.k(this_0);
      Companion_instance_0.assert(source2, i, ")");
      i = i + 1 | 0;
    } else if (contains_0("|&", tmp0_subject)) {
      var this_1 = this.jd_1.xk(source2, i);
      i = i + this_1.zk_1 | 0;
      parserResults.k(this_1);
      i = i + this.rc_1.xk(source2, i).zk_1 | 0;
      Companion_instance_0.assert(source2, i, "(" + this.gd_1.vk_1);
    } else {
      var this_2 = this.id_1.xk(source2, i);
      i = i + this_2.zk_1 | 0;
      parserResults.k(this_2);
    }
    i = i + this.rc_1.xk(source2, i).zk_1 | 0;
  }
  if (parserResults.p()) {
    Companion_instance_0.throwError(source2, i - offset | 0, "Expression");
  }
  if (parserResults.i() === 1) {
    var tmp_0 = first(parserResults).yk_1;
    return new ParserResult(tmp_0 instanceof Expression ? tmp_0 : THROW_CCE(), i - offset | 0);
  }
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(parserResults, 10));
  var tmp0_iterator = parserResults.m();
  while (tmp0_iterator.t()) {
    var item = tmp0_iterator.u();
    var tmp$ret$5 = item.yk_1;
    destination.k(tmp$ret$5);
  }
  var tokens = toMutableList(destination);
  var index = 0;
  while (index < tokens.i()) {
    var token2 = tokens.v(index);
    if (equals(token2, AndOperator_getInstance())) {
      var tmp_1 = index;
      var tmp_2 = tokens.v(index - 1 | 0);
      var tmp_3 = tmp_2 instanceof Expression ? tmp_2 : THROW_CCE();
      var tmp_4 = AndOperator_getInstance();
      var tmp_5 = tokens.v(index + 1 | 0);
      tokens.j(tmp_1, new LogicalExpression(tmp_3, tmp_4, tmp_5 instanceof Expression ? tmp_5 : THROW_CCE()));
      tokens.y(index - 1 | 0);
      tokens.y((index + 1 | 0) - 1 | 0);
    } else {
      index = index + 1 | 0;
    }
  }
  while (tokens.i() > 1) {
    var tmp_6 = tokens.v(0);
    var tmp_7 = tmp_6 instanceof Expression ? tmp_6 : THROW_CCE();
    var tmp_8 = tokens.v(1);
    var tmp_9 = tmp_8 instanceof OrOperator ? tmp_8 : THROW_CCE();
    var tmp_10 = tokens.v(2);
    tokens.j(1, new LogicalExpression(tmp_7, tmp_9, tmp_10 instanceof Expression ? tmp_10 : THROW_CCE()));
    tokens.y(0);
    tokens.y(1);
  }
  var tmp_11 = first(tokens);
  return new ParserResult(tmp_11 instanceof Expression ? tmp_11 : THROW_CCE(), i - offset | 0);
};
var ParserSet_instance;
function ParserSet_getInstance() {
  if (ParserSet_instance == null)
    new ParserSet();
  return ParserSet_instance;
}
function FilterIndexesSequence$iterator$1(this$0) {
  this.fl_1 = this$0;
  this.bl_1 = this$0.gl_1.m();
  this.cl_1 = 0;
  this.dl_1 = 0;
  this.el_1 = null;
}
protoOf(FilterIndexesSequence$iterator$1).il = function() {
  if (this.cl_1 > last(this.fl_1.hl_1))
    return null;
  while (this.bl_1.t()) {
    var item = this.bl_1.u();
    if (this.fl_1.hl_1.v(this.dl_1) === this.cl_1) {
      this.dl_1 = this.dl_1 + 1 | 0;
      this.cl_1 = this.cl_1 + 1 | 0;
      return item;
    }
    this.cl_1 = this.cl_1 + 1 | 0;
  }
  return null;
};
protoOf(FilterIndexesSequence$iterator$1).u = function() {
  var result = this.el_1;
  this.el_1 = null;
  var tmp1_elvis_lhs = result == null ? this.il() : result;
  var tmp;
  if (tmp1_elvis_lhs == null) {
    throw NoSuchElementException_init_$Create$();
  } else {
    tmp = tmp1_elvis_lhs;
  }
  return tmp;
};
protoOf(FilterIndexesSequence$iterator$1).t = function() {
  var tmp = this;
  var tmp0_elvis_lhs = this.el_1;
  tmp.el_1 = tmp0_elvis_lhs == null ? this.il() : tmp0_elvis_lhs;
  return !(this.el_1 == null);
};
function FilterIndexesSequence(sequence2, indexes) {
  this.gl_1 = sequence2;
  this.hl_1 = indexes;
}
protoOf(FilterIndexesSequence).m = function() {
  return new FilterIndexesSequence$iterator$1(this);
};
function filterIndexes(_this__u8e3s4, indexes) {
  return new FilterIndexesSequence(_this__u8e3s4, indexes);
}
Companion_instance = new Companion();
Companion_instance_0 = new Companion_0();
Companion_instance_1 = new Companion_1();
defineProp(CommonSelector, "Companion", Companion_getInstance);
const transform = new CommonTransform(
  (node, name) => {
    var _a;
    const [key2, subKey] = name.split(".");
    if (subKey) {
      return (_a = node.attr[key2]) == null ? void 0 : _a[subKey];
    }
    return node.attr[key2];
  },
  (node) => node.attr.name,
  (node) => node.children,
  (node) => node.parent
);
const parseSelector = (source2) => {
  const cs = CommonSelector.Companion.parse(source2);
  const selector = {
    toString: () => cs.toString(),
    match: (node) => {
      return cs.match(node, transform) ?? void 0;
    },
    querySelectorAll: (node) => {
      return transform.querySelectorAll(node, cs);
    },
    querySelector: (node) => {
      return transform.querySelector(node, cs);
    }
  };
  return selector;
};
const checkSelector = (source2) => {
  try {
    return !!parseSelector(source2);
  } catch {
    return false;
  }
};
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
var unicode = {
  Space_Separator,
  ID_Start,
  ID_Continue
};
var util = {
  isSpaceSeparator(c2) {
    return typeof c2 === "string" && unicode.Space_Separator.test(c2);
  },
  isIdStartChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 === "$" || c2 === "_" || unicode.ID_Start.test(c2));
  },
  isIdContinueChar(c2) {
    return typeof c2 === "string" && (c2 >= "a" && c2 <= "z" || c2 >= "A" && c2 <= "Z" || c2 >= "0" && c2 <= "9" || c2 === "$" || c2 === "_" || c2 === "‌" || c2 === "‍" || unicode.ID_Continue.test(c2));
  },
  isDigit(c2) {
    return typeof c2 === "string" && /[0-9]/.test(c2);
  },
  isHexDigit(c2) {
    return typeof c2 === "string" && /[0-9A-Fa-f]/.test(c2);
  }
};
let source;
let parseState;
let stack;
let pos;
let line;
let column;
let token;
let key;
let root;
var parse = function parse2(text, reviver) {
  source = String(text);
  parseState = "start";
  stack = [];
  pos = 0;
  line = 1;
  column = 0;
  token = void 0;
  key = void 0;
  root = void 0;
  do {
    token = lex();
    parseStates[parseState]();
  } while (token.type !== "eof");
  if (typeof reviver === "function") {
    return internalize({ "": root }, "", reviver);
  }
  return root;
};
function internalize(holder, name, reviver) {
  const value = holder[name];
  if (value != null && typeof value === "object") {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const key2 = String(i);
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    } else {
      for (const key2 in value) {
        const replacement = internalize(value, key2, reviver);
        if (replacement === void 0) {
          delete value[key2];
        } else {
          Object.defineProperty(value, key2, {
            value: replacement,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    }
  }
  return reviver.call(holder, name, value);
}
let lexState;
let buffer;
let doubleQuote;
let sign;
let c;
function lex() {
  lexState = "default";
  buffer = "";
  doubleQuote = false;
  sign = 1;
  for (; ; ) {
    c = peek();
    const token2 = lexStates[lexState]();
    if (token2) {
      return token2;
    }
  }
}
function peek() {
  if (source[pos]) {
    return String.fromCodePoint(source.codePointAt(pos));
  }
}
function read() {
  const c2 = peek();
  if (c2 === "\n") {
    line++;
    column = 0;
  } else if (c2) {
    column += c2.length;
  } else {
    column++;
  }
  if (c2) {
    pos += c2.length;
  }
  return c2;
}
const lexStates = {
  default() {
    switch (c) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        return;
      case "/":
        read();
        lexState = "comment";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    if (util.isSpaceSeparator(c)) {
      read();
      return;
    }
    return lexStates[parseState]();
  },
  comment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineComment";
        return;
      case "/":
        read();
        lexState = "singleLineComment";
        return;
    }
    throw invalidChar(read());
  },
  multiLineComment() {
    switch (c) {
      case "*":
        read();
        lexState = "multiLineCommentAsterisk";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
  },
  multiLineCommentAsterisk() {
    switch (c) {
      case "*":
        read();
        return;
      case "/":
        read();
        lexState = "default";
        return;
      case void 0:
        throw invalidChar(read());
    }
    read();
    lexState = "multiLineComment";
  },
  singleLineComment() {
    switch (c) {
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        read();
        lexState = "default";
        return;
      case void 0:
        read();
        return newToken("eof");
    }
    read();
  },
  value() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
      case "n":
        read();
        literal("ull");
        return newToken("null", null);
      case "t":
        read();
        literal("rue");
        return newToken("boolean", true);
      case "f":
        read();
        literal("alse");
        return newToken("boolean", false);
      case "-":
      case "+":
        if (read() === "-") {
          sign = -1;
        }
        lexState = "sign";
        return;
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
      case '"':
      case "'":
        doubleQuote = read() === '"';
        buffer = "";
        lexState = "string";
        return;
    }
    throw invalidChar(read());
  },
  identifierNameStartEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
        break;
      default:
        if (!util.isIdStartChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  identifierName() {
    switch (c) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        buffer += read();
        return;
      case "\\":
        read();
        lexState = "identifierNameEscape";
        return;
    }
    if (util.isIdContinueChar(c)) {
      buffer += read();
      return;
    }
    return newToken("identifier", buffer);
  },
  identifierNameEscape() {
    if (c !== "u") {
      throw invalidChar(read());
    }
    read();
    const u = unicodeEscape();
    switch (u) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!util.isIdContinueChar(u)) {
          throw invalidIdentifier();
        }
        break;
    }
    buffer += u;
    lexState = "identifierName";
  },
  sign() {
    switch (c) {
      case ".":
        buffer = read();
        lexState = "decimalPointLeading";
        return;
      case "0":
        buffer = read();
        lexState = "zero";
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        buffer = read();
        lexState = "decimalInteger";
        return;
      case "I":
        read();
        literal("nfinity");
        return newToken("numeric", sign * Infinity);
      case "N":
        read();
        literal("aN");
        return newToken("numeric", NaN);
    }
    throw invalidChar(read());
  },
  zero() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
      case "x":
      case "X":
        buffer += read();
        lexState = "hexadecimal";
        return;
    }
    return newToken("numeric", sign * 0);
  },
  decimalInteger() {
    switch (c) {
      case ".":
        buffer += read();
        lexState = "decimalPoint";
        return;
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalPointLeading() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    throw invalidChar(read());
  },
  decimalPoint() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalFraction";
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalFraction() {
    switch (c) {
      case "e":
      case "E":
        buffer += read();
        lexState = "decimalExponent";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  decimalExponent() {
    switch (c) {
      case "+":
      case "-":
        buffer += read();
        lexState = "decimalExponentSign";
        return;
    }
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentSign() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = "decimalExponentInteger";
      return;
    }
    throw invalidChar(read());
  },
  decimalExponentInteger() {
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  hexadecimal() {
    if (util.isHexDigit(c)) {
      buffer += read();
      lexState = "hexadecimalInteger";
      return;
    }
    throw invalidChar(read());
  },
  hexadecimalInteger() {
    if (util.isHexDigit(c)) {
      buffer += read();
      return;
    }
    return newToken("numeric", sign * Number(buffer));
  },
  string() {
    switch (c) {
      case "\\":
        read();
        buffer += escape();
        return;
      case '"':
        if (doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "'":
        if (!doubleQuote) {
          read();
          return newToken("string", buffer);
        }
        buffer += read();
        return;
      case "\n":
      case "\r":
        throw invalidChar(read());
      case "\u2028":
      case "\u2029":
        separatorChar(c);
        break;
      case void 0:
        throw invalidChar(read());
    }
    buffer += read();
  },
  start() {
    switch (c) {
      case "{":
      case "[":
        return newToken("punctuator", read());
    }
    lexState = "value";
  },
  beforePropertyName() {
    switch (c) {
      case "$":
      case "_":
        buffer = read();
        lexState = "identifierName";
        return;
      case "\\":
        read();
        lexState = "identifierNameStartEscape";
        return;
      case "}":
        return newToken("punctuator", read());
      case '"':
      case "'":
        doubleQuote = read() === '"';
        lexState = "string";
        return;
    }
    if (util.isIdStartChar(c)) {
      buffer += read();
      lexState = "identifierName";
      return;
    }
    throw invalidChar(read());
  },
  afterPropertyName() {
    if (c === ":") {
      return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforePropertyValue() {
    lexState = "value";
  },
  afterPropertyValue() {
    switch (c) {
      case ",":
      case "}":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  beforeArrayValue() {
    if (c === "]") {
      return newToken("punctuator", read());
    }
    lexState = "value";
  },
  afterArrayValue() {
    switch (c) {
      case ",":
      case "]":
        return newToken("punctuator", read());
    }
    throw invalidChar(read());
  },
  end() {
    throw invalidChar(read());
  }
};
function newToken(type, value) {
  return {
    type,
    value,
    line,
    column
  };
}
function literal(s) {
  for (const c2 of s) {
    const p = peek();
    if (p !== c2) {
      throw invalidChar(read());
    }
    read();
  }
}
function escape() {
  const c2 = peek();
  switch (c2) {
    case "b":
      read();
      return "\b";
    case "f":
      read();
      return "\f";
    case "n":
      read();
      return "\n";
    case "r":
      read();
      return "\r";
    case "t":
      read();
      return "	";
    case "v":
      read();
      return "\v";
    case "0":
      read();
      if (util.isDigit(peek())) {
        throw invalidChar(read());
      }
      return "\0";
    case "x":
      read();
      return hexEscape();
    case "u":
      read();
      return unicodeEscape();
    case "\n":
    case "\u2028":
    case "\u2029":
      read();
      return "";
    case "\r":
      read();
      if (peek() === "\n") {
        read();
      }
      return "";
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw invalidChar(read());
    case void 0:
      throw invalidChar(read());
  }
  return read();
}
function hexEscape() {
  let buffer2 = "";
  let c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  c2 = peek();
  if (!util.isHexDigit(c2)) {
    throw invalidChar(read());
  }
  buffer2 += read();
  return String.fromCodePoint(parseInt(buffer2, 16));
}
function unicodeEscape() {
  let buffer2 = "";
  let count = 4;
  while (count-- > 0) {
    const c2 = peek();
    if (!util.isHexDigit(c2)) {
      throw invalidChar(read());
    }
    buffer2 += read();
  }
  return String.fromCodePoint(parseInt(buffer2, 16));
}
const parseStates = {
  start() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforePropertyName() {
    switch (token.type) {
      case "identifier":
      case "string":
        key = token.value;
        parseState = "afterPropertyName";
        return;
      case "punctuator":
        pop();
        return;
      case "eof":
        throw invalidEOF();
    }
  },
  afterPropertyName() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    parseState = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    push();
  },
  beforeArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    if (token.type === "punctuator" && token.value === "]") {
      pop();
      return;
    }
    push();
  },
  afterPropertyValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforePropertyName";
        return;
      case "}":
        pop();
    }
  },
  afterArrayValue() {
    if (token.type === "eof") {
      throw invalidEOF();
    }
    switch (token.value) {
      case ",":
        parseState = "beforeArrayValue";
        return;
      case "]":
        pop();
    }
  },
  end() {
  }
};
function push() {
  let value;
  switch (token.type) {
    case "punctuator":
      switch (token.value) {
        case "{":
          value = {};
          break;
        case "[":
          value = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      value = token.value;
      break;
  }
  if (root === void 0) {
    root = value;
  } else {
    const parent = stack[stack.length - 1];
    if (Array.isArray(parent)) {
      parent.push(value);
    } else {
      Object.defineProperty(parent, key, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }
  if (value !== null && typeof value === "object") {
    stack.push(value);
    if (Array.isArray(value)) {
      parseState = "beforeArrayValue";
    } else {
      parseState = "beforePropertyName";
    }
  } else {
    const current = stack[stack.length - 1];
    if (current == null) {
      parseState = "end";
    } else if (Array.isArray(current)) {
      parseState = "afterArrayValue";
    } else {
      parseState = "afterPropertyValue";
    }
  }
}
function pop() {
  stack.pop();
  const current = stack[stack.length - 1];
  if (current == null) {
    parseState = "end";
  } else if (Array.isArray(current)) {
    parseState = "afterArrayValue";
  } else {
    parseState = "afterPropertyValue";
  }
}
function invalidChar(c2) {
  if (c2 === void 0) {
    return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
  }
  return syntaxError(`JSON5: invalid character '${formatChar(c2)}' at ${line}:${column}`);
}
function invalidEOF() {
  return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
}
function invalidIdentifier() {
  column -= 5;
  return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`);
}
function separatorChar(c2) {
  console.warn(`JSON5: '${formatChar(c2)}' in strings is not valid ECMAScript; consider escaping`);
}
function formatChar(c2) {
  const replacements = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  if (replacements[c2]) {
    return replacements[c2];
  }
  if (c2 < " ") {
    const hexString = c2.charCodeAt(0).toString(16);
    return "\\x" + ("00" + hexString).substring(hexString.length);
  }
  return c2;
}
function syntaxError(message2) {
  const err = new SyntaxError(message2);
  err.lineNumber = line;
  err.columnNumber = column;
  return err;
}
var stringify = function stringify2(value, replacer, space) {
  const stack2 = [];
  let indent = "";
  let propertyList;
  let replacerFunc;
  let gap = "";
  let quote;
  if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
    space = replacer.space;
    quote = replacer.quote;
    replacer = replacer.replacer;
  }
  if (typeof replacer === "function") {
    replacerFunc = replacer;
  } else if (Array.isArray(replacer)) {
    propertyList = [];
    for (const v of replacer) {
      let item;
      if (typeof v === "string") {
        item = v;
      } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
        item = String(v);
      }
      if (item !== void 0 && propertyList.indexOf(item) < 0) {
        propertyList.push(item);
      }
    }
  }
  if (space instanceof Number) {
    space = Number(space);
  } else if (space instanceof String) {
    space = String(space);
  }
  if (typeof space === "number") {
    if (space > 0) {
      space = Math.min(10, Math.floor(space));
      gap = "          ".substr(0, space);
    }
  } else if (typeof space === "string") {
    gap = space.substr(0, 10);
  }
  return serializeProperty("", { "": value });
  function serializeProperty(key2, holder) {
    let value2 = holder[key2];
    if (value2 != null) {
      if (typeof value2.toJSON5 === "function") {
        value2 = value2.toJSON5(key2);
      } else if (typeof value2.toJSON === "function") {
        value2 = value2.toJSON(key2);
      }
    }
    if (replacerFunc) {
      value2 = replacerFunc.call(holder, key2, value2);
    }
    if (value2 instanceof Number) {
      value2 = Number(value2);
    } else if (value2 instanceof String) {
      value2 = String(value2);
    } else if (value2 instanceof Boolean) {
      value2 = value2.valueOf();
    }
    switch (value2) {
      case null:
        return "null";
      case true:
        return "true";
      case false:
        return "false";
    }
    if (typeof value2 === "string") {
      return quoteString(value2);
    }
    if (typeof value2 === "number") {
      return String(value2);
    }
    if (typeof value2 === "object") {
      return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2);
    }
    return void 0;
  }
  function quoteString(value2) {
    const quotes = {
      "'": 0.1,
      '"': 0.2
    };
    const replacements = {
      "'": "\\'",
      '"': '\\"',
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\v": "\\v",
      "\0": "\\0",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    let product = "";
    for (let i = 0; i < value2.length; i++) {
      const c2 = value2[i];
      switch (c2) {
        case "'":
        case '"':
          quotes[c2]++;
          product += c2;
          continue;
        case "\0":
          if (util.isDigit(value2[i + 1])) {
            product += "\\x00";
            continue;
          }
      }
      if (replacements[c2]) {
        product += replacements[c2];
        continue;
      }
      if (c2 < " ") {
        let hexString = c2.charCodeAt(0).toString(16);
        product += "\\x" + ("00" + hexString).substring(hexString.length);
        continue;
      }
      product += c2;
    }
    const quoteChar = quote || Object.keys(quotes).reduce((a, b) => quotes[a] < quotes[b] ? a : b);
    product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
    return quoteChar + product + quoteChar;
  }
  function serializeObject(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let keys = propertyList || Object.keys(value2);
    let partial = [];
    for (const key2 of keys) {
      const propertyString = serializeProperty(key2, value2);
      if (propertyString !== void 0) {
        let member = serializeKey(key2) + ":";
        if (gap !== "") {
          member += " ";
        }
        member += propertyString;
        partial.push(member);
      }
    }
    let final;
    if (partial.length === 0) {
      final = "{}";
    } else {
      let properties;
      if (gap === "") {
        properties = partial.join(",");
        final = "{" + properties + "}";
      } else {
        let separator = ",\n" + indent;
        properties = partial.join(separator);
        final = "{\n" + indent + properties + ",\n" + stepback + "}";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
  function serializeKey(key2) {
    if (key2.length === 0) {
      return quoteString(key2);
    }
    const firstChar = String.fromCodePoint(key2.codePointAt(0));
    if (!util.isIdStartChar(firstChar)) {
      return quoteString(key2);
    }
    for (let i = firstChar.length; i < key2.length; i++) {
      if (!util.isIdContinueChar(String.fromCodePoint(key2.codePointAt(i)))) {
        return quoteString(key2);
      }
    }
    return key2;
  }
  function serializeArray(value2) {
    if (stack2.indexOf(value2) >= 0) {
      throw TypeError("Converting circular structure to JSON5");
    }
    stack2.push(value2);
    let stepback = indent;
    indent = indent + gap;
    let partial = [];
    for (let i = 0; i < value2.length; i++) {
      const propertyString = serializeProperty(String(i), value2);
      partial.push(propertyString !== void 0 ? propertyString : "null");
    }
    let final;
    if (partial.length === 0) {
      final = "[]";
    } else {
      if (gap === "") {
        let properties = partial.join(",");
        final = "[" + properties + "]";
      } else {
        let separator = ",\n" + indent;
        let properties = partial.join(separator);
        final = "[\n" + indent + properties + ",\n" + stepback + "]";
      }
    }
    stack2.pop();
    indent = stepback;
    return final;
  }
};
const JSON5 = {
  parse,
  stringify
};
var lib = JSON5;
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined" && typeof document !== "undefined";
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const toString = Object.prototype.toString;
const isObject = (val) => toString.call(val) === "[object Object]";
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke());
      }, duration);
    });
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
function toRef(...args) {
  if (args.length !== 1)
    return toRef$1(...args);
  const r = args[0];
  return typeof r === "function" ? readonly(customRef(() => ({ get: r, set: noop }))) : ref(r);
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
function watchWithFilter(source2, cb, options = {}) {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options;
  return watch(
    source2,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
function watchPausable(source2, cb, options = {}) {
  const {
    eventFilter: filter,
    ...watchOptions
  } = options;
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source2,
    cb,
    {
      ...watchOptions,
      eventFilter
    }
  );
  return { stop, pause, resume, isActive };
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      const optionsClone = isObject(options2) ? { ...options2 } : options2;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, optionsClone));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key2, fallback) {
  return handlers[key2] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key2, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    },
    initOnMounted
  } = options;
  const data = (shallow ? shallowRef : ref)(typeof defaults === "function" ? defaults() : defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    tryOnMounted(() => {
      useEventListener(window2, "storage", update);
      useEventListener(window2, customStorageEventName, updateFromCustomEvent);
      if (initOnMounted)
        update();
    });
  }
  if (!initOnMounted)
    update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key2);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key2);
        if (oldValue !== serialized) {
          storage.setItem(key2, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key: key2,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read2(event) {
    const rawValue = event ? event.newValue : storage.getItem(key2);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key2, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return { ...rawInit, ...value };
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key2)
      return;
    pauseWatch();
    try {
      if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value))
        data.value = read2(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function useMutationObserver(target, callback, options = {}) {
  const { window: window2 = defaultWindow, ...mutationOptions } = options;
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(
    () => unrefElement(target),
    (el) => {
      cleanup();
      if (isSupported.value && window2 && el) {
        observer = new MutationObserver(callback);
        observer.observe(el, mutationOptions);
      }
    },
    { immediate: true }
  );
  const takeRecords = () => {
    return observer == null ? void 0 : observer.takeRecords();
  };
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop,
    takeRecords
  };
}
function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document: document2 = defaultDocument
  } = options;
  const title = toRef((_a = newTitle != null ? newTitle : document2 == null ? void 0 : document2.title) != null ? _a : null);
  const isReadonly = newTitle && typeof newTitle === "function";
  function format(t) {
    if (!("titleTemplate" in options))
      return t;
    const template = options.titleTemplate || "%s";
    return typeof template === "function" ? template(t) : toValue(template).replace(/%s/g, t);
  }
  watch(
    title,
    (t, o) => {
      if (t !== o && document2)
        document2.title = format(typeof t === "string" ? t : "");
    },
    { immediate: true }
  );
  if (options.observe && !options.titleTemplate && document2 && !isReadonly) {
    useMutationObserver(
      (_b = document2.head) == null ? void 0 : _b.querySelector("title"),
      () => {
        if (document2 && document2.title !== title.value)
          title.value = format(document2.title);
      },
      { childList: true }
    );
  }
  return title;
}
export {
  errorWrap as a,
  useStorage as b,
  useDebounceFn as c,
  checkSelector as d,
  errorTry as e,
  lib as l,
  parseSelector as p,
  useTitle as u
};
