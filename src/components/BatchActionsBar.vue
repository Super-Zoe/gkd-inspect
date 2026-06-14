<script setup lang="tsx">
defineProps<{
  checkedCount: number;
  batchDelete: { loading: boolean; invoke: () => void };
  batchDownloadImage: { loading: boolean; invoke: () => void };
  batchDownloadZip: { loading: boolean; invoke: () => void };
  batchShareImageUrl: { loading: boolean; invoke: () => void };
  batchShareZipUrl: { loading: boolean; invoke: () => void };
}>();
</script>
<template>
  <template v-if="checkedCount">
    <NPopover>
      <template #trigger>
        <NButton> 批量下载 </NButton>
      </template>
      <NSpace vertical>
        <NButton
          :loading="batchDownloadZip.loading"
          @click="batchDownloadZip.invoke"
        >
          批量下载-快照
        </NButton>
        <NButton
          :loading="batchDownloadImage.loading"
          @click="batchDownloadImage.invoke"
        >
          批量下载-图片
        </NButton>
      </NSpace>
    </NPopover>
    <NPopover>
      <template #trigger>
        <NButton> 批量分享 </NButton>
      </template>
      <NSpace vertical>
        <NButton
          :loading="batchShareZipUrl.loading"
          @click="batchShareZipUrl.invoke"
        >
          批量生成链接-快照
        </NButton>
        <NButton
          :loading="batchShareImageUrl.loading"
          @click="batchShareImageUrl.invoke"
        >
          批量生成链接-图片
        </NButton>
      </NSpace>
    </NPopover>
    <NButton
      :loading="batchDelete.loading"
      :theme-overrides="{ color: '#D03050', textColor: 'white' }"
      @click="batchDelete.invoke"
    >
      批量删除
    </NButton>
    <div h-full flex flex-items-center>
      {{ `选中快照x${checkedCount}` }}
    </div>
  </template>
</template>
