// theme
import { SairinConfig } from '@sairinjs/core';
import BlogTheme from '@sairinjs/sairin-theme-minimal';

export default {
  siteConfig: {
    title: 'xiaoTian Blog',
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
