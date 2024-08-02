import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { join } from 'path';
import {releaseDistPath, srcPath} from '../common/paths';
import CommonConfig from '../common/rsbuild.common';


const Config = defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: join(srcPath, './index.tsx'),
    },
  },
  output: {
    assetPrefix: './',
    cleanDistPath: process.env.NODE_ENV === 'production',
    distPath: {
      root: join(releaseDistPath),
    },
  },
});

module.exports = Object.assign(CommonConfig, Config);
