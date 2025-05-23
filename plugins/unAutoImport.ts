import autoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import components from 'unplugin-vue-components/vite';
import type { Plugin } from 'vite';
import naiveComponents from './naive-components.json';
import process from 'node:process';

export const unAutoImport = (): Plugin[] => {
  return [
    autoImport({
      dts: 'auto-import.d.ts',
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'pinia',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
            ...naiveComponents,
          ],
          json5: [['default', 'JSON5']],
        },
      ],
      eslintrc: {
        enabled: true,
        globalsPropValue: 'readonly',
        filepath: '.eslintrc-auto-import.json',
      },
      dirs: [process.cwd() + '/src/store'],
    }),
    components({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      dts: 'auto-import-components.d.ts',
      resolvers: [NaiveUiResolver()],
      dirs: [],
    }),
  ];
};
