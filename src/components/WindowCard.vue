<script setup lang="tsx">
import {
  getAppInfo,
  getDevice,
  getGkdAppInfo,
  getNodeLabel,
} from '@/utils/node';
import { buildEmptyFn, copy, delay } from '@/utils/others';
import type { RawNode, Snapshot } from '@/utils/types';
import {
  NEllipsis,
  NTable,
  NTbody,
  NTd,
  NTh,
  NThead,
  NTr,
  NTree,
} from 'naive-ui';
import type { TreeInst } from 'naive-ui';
import { nextTick, shallowRef, watch } from 'vue';
import type { HTMLAttributes } from 'vue';

const props = withDefaults(
  defineProps<{
    snapshot: Snapshot;
    rootNode: RawNode;
    focusNode?: RawNode;
    focusCount: number;
    onUpdateFocusNode?: (data: RawNode) => void;
  }>(),
  {
    onUpdateFocusNode: buildEmptyFn,
  },
);

const expandedKeys = shallowRef<number[]>([]);
watch([() => props.focusNode, () => props.focusCount], async () => {
  if (!props.focusNode) return;
  const key = props.focusNode.id;
  nextTick().then(async () => {
    await delay(100);
    if (key === props.focusNode?.id) {
      treeRef.value?.scrollTo({ key, behavior: 'smooth', debounce: true });
    }
  });
  let parent = props.focusNode.parent;
  if (!parent) {
    return;
  }
  const s = new Set(expandedKeys.value);
  while (parent) {
    s.add(parent.id);
    parent = parent.parent;
  }
  if (
    s.size == expandedKeys.value.length &&
    expandedKeys.value.every((v) => s.has(v))
  ) {
    return;
  }
  expandedKeys.value = [...s];
});

const treeRef = shallowRef<TreeInst>();

const treeFilter = (pattern: string, node: RawNode) => {
  return node.id === props.focusNode?.id;
};
const treeNodeProps = (info: {
  option: RawNode;
}): HTMLAttributes & Record<string, unknown> => {
  const qf = info.option.idQf || info.option.textQf || info.option.quickFind;
  return {
    onClick: () => {
      props.onUpdateFocusNode(info.option);
    },
    style: {
      color: info.option.id == props.focusNode?.id ? `#00F` : undefined,
      fontWeight: qf ? `bold` : undefined,
    },
  };
};

const renderLabel = (info: {
  option: RawNode;
  checked: boolean;
  selected: boolean;
}) => {
  return getNodeLabel(info.option);
};
</script>

<template>
  <div flex flex-col>
    <NTable
      size="small"
      striped
      :singleLine="false"
      :themeOverrides="{
        thPaddingSmall: '2px 6px',
        tdPaddingSmall: '2px 6px',
      }"
    >
      <NThead>
        <NTr>
          <NTh> 设备 </NTh>
          <NTh> GKD </NTh>
          <NTh> 应用名称 </NTh>
          <NTh> 版本名称 </NTh>
          <NTh> 版本代码 </NTh>
          <NTh> 系统应用 </NTh>
          <NTh> 应用ID </NTh>
          <NTh> 界面ID </NTh>
          <NTh> 操作 </NTh>
        </NTr>
      </NThead>
      <NTbody>
        <NTr>
          <NTd class="whitespace-nowrap w-0">
            {{
              `${getDevice(snapshot).manufacturer} Android ${
                getDevice(snapshot).release || ``
              }`
            }}
          </NTd>
          <NTd class="whitespace-nowrap">
            {{ getGkdAppInfo(snapshot).versionName }}
          </NTd>
          <NTd
            class="whitespace-nowrap"
            @click="copy(getAppInfo(snapshot).name)"
          >
            <NEllipsis>
              {{ getAppInfo(snapshot).name }}
            </NEllipsis>
          </NTd>
          <NTd
            class="whitespace-nowrap"
            @click="copy(getAppInfo(snapshot).versionName)"
          >
            <NEllipsis>
              {{ getAppInfo(snapshot).versionName }}
            </NEllipsis>
          </NTd>
          <NTd
            class="whitespace-nowrap"
            @click="copy(getAppInfo(snapshot).versionCode.toString())"
          >
            <NEllipsis>
              {{ getAppInfo(snapshot).versionCode }}
            </NEllipsis>
          </NTd>
          <NTd class="whitespace-nowrap">
            {{ getAppInfo(snapshot).isSystem ? `是` : `否` }}
          </NTd>
          <NTd
            class="whitespace-nowrap max-w-[max(12vw,180px)]"
            @click="copy(snapshot.appId)"
          >
            <NEllipsis>
              {{ snapshot.appId }}
            </NEllipsis>
          </NTd>
          <NTd
            @click="copy(snapshot.activityId)"
            class="break-words max-w-[max(15vw,200px)] text-left direction-rtl"
          >
            <NEllipsis>
              {{ snapshot.activityId }}
            </NEllipsis>
          </NTd>
          <NTd>
            <slot></slot>
          </NTd>
        </NTr>
      </NTbody>
    </NTable>
    <NTree
      ref="treeRef"
      virtualScroll
      showLine
      keyField="id"
      v-model:expandedKeys="expandedKeys"
      :data="[rootNode as any]"
      :filter="(treeFilter as any)"
      :nodeProps="(treeNodeProps as any)"
      :renderLabel="(renderLabel as any)"
    />
  </div>
</template>
