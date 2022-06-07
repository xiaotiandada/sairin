// theme
import { SairinConfig } from './@sairinjs/core/src';
import BlogTheme from './@sairinjs/sairin-theme-minimal/src';

export default {
  siteConfig: {
    title: 'xiaoTian Blog',
    author: 'xiaotiandada',
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Blog(issues)`,
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/xiaotiandada/blog',
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/XiaoTianIsMe',
      },
    ],
  },
} as SairinConfig;
