import { ScullyConfig } from '@scullyio/scully';


export const config: ScullyConfig = {
  projectRoot: "./projects/demo/src",
  projectName: "demo",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blogFiles"
      }
    },
  }
};