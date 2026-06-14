import { showTextDLg, waitShareAgree } from '@/utils/dialog';
import { dialog, message } from '@/utils/discrete';
import {
  batchCreateImageId,
  batchCreateZipUrl,
  batchImageDownloadZip,
  batchZipDownloadZip,
} from '@/utils/export';
import { snapshotStorage } from '@/utils/snapshot';
import { useTask } from '@/utils/task';
import { getImagUrl } from '@/utils/url';

export const useBatchActions = (
  checkedRowKeys: Ref<number[]>,
  options: {
    onAfterDelete?: () => void;
    beforeDeleteItem?: (id: number) => Promise<unknown>;
  } = {},
) => {
  const checkedSnapshots = () => {
    return Promise.all(
      checkedRowKeys.value.map(
        (id) => snapshotStorage.getItem(id) as Promise<Snapshot>,
      ),
    );
  };

  const batchDelete = useTask(async () => {
    await new Promise((res, rej) => {
      dialog.error({
        title: `删除`,
        content: `是否批量删除 ${checkedRowKeys.value.length} 个快照`,
        negativeText: `取消`,
        positiveText: `确认`,
        onClose: rej,
        onEsc: rej,
        onMaskClick: rej,
        onNegativeClick: rej,
        onPositiveClick: res,
      });
    });
    if (options.beforeDeleteItem) {
      const results = await Promise.allSettled(
        checkedRowKeys.value.map((k) => options.beforeDeleteItem!(k)),
      );
      const failed = results.filter((r) => r.status === 'rejected').length;
      if (failed) {
        message.warning(`删除失败 ${failed} 个快照`);
      }
    }
    await Promise.allSettled(
      checkedRowKeys.value.map((k) => snapshotStorage.removeItem(k)),
    );
    checkedRowKeys.value = [];
    options.onAfterDelete?.();
  });

  const batchDownloadImage = useTask(async () => {
    await batchImageDownloadZip(await checkedSnapshots());
  });

  const batchDownloadZip = useTask(async () => {
    await batchZipDownloadZip(await checkedSnapshots());
  });

  const batchShareImageUrl = useTask(async () => {
    await waitShareAgree();
    const imageIds = await batchCreateImageId(await checkedSnapshots());
    showTextDLg({
      content: imageIds.map((s) => getImagUrl(s)).join(`\n`) + `\n`,
    });
  });

  const batchShareZipUrl = useTask(async () => {
    await waitShareAgree();
    const zipUrls = await batchCreateZipUrl(await checkedSnapshots());
    showTextDLg({
      content:
        zipUrls.map((s) => location.origin + '/i/' + s).join(`\n`) + `\n`,
    });
  });

  return {
    batchDelete,
    batchDownloadImage,
    batchDownloadZip,
    batchShareImageUrl,
    batchShareZipUrl,
  };
};
