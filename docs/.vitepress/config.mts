import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "凛冬将至-掘地者之神个人博客",
  description: "个人所思所想所做、优秀开源项目归类整理、好玩有趣的AI产品归类整理、个人AI项目展示的平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: '个人网站', link: '/' },
      { text: '开源项目', link: '/markdown-examples' },
      { text: '有趣的AI产品', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yintiankuaile/diggers-god-blog' }
    ]
  },
  srcDir: "./src"
})
