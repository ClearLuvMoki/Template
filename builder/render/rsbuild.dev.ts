import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { join } from 'path';
import { srcPath } from '../common/paths';
import CommonConfig from '../common/rsbuild.common';


const Config = defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: join(srcPath, './index.tsx'),
    },
  },
  server: {
    port: Number(process.env.PORT || 8088),
  }
});

module.exports = Object.assign(CommonConfig, Config);
