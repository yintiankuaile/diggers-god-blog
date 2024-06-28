import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "凛冬将至-掘地者之神",
  description: "个人所思所想所做、优秀开源项目归类整理、好玩有趣的AI产品归类整理、个人AI项目展示的平台",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '个人网站', link: '/blog/reflections-of-an-8-year-programmer' },
      { text: '开源项目', link: '/open-source/react-project' },
      { text: '有趣的AI产品', link: '/ai-show/Ali-frontend-billion-valuation' }
    ],

    sidebar: {
      "blog": [
        {
          text: "掘地者",
          items: [
            { text: "8年程序员的思考", link: "/blog/reflections-of-an-8-year-programmer" },
            { text: "我需要行动，试试吧", link: "/blog/reflections-of-an-8-year-programmer" },
          ]
        }
      ],
      "open-source": [
        {
          text: "开源项目",
          items: [
            { text: "React 项目", link: "/open-source/react-project" },
            { text: "Vue2 项目", link: "/open-source/vue2-project" },
            { text: "Vue3 项目", link: "/open-source/vue3-project" },
            { text: "GO 项目", link: "/open-source/go-project" },
            { text: "Rust 项目", link: "/open-source/rust-project" },
            { text: "Node.js 项目", link: "/open-source/node.js-project" },
            { text: "Next 项目", link: "/open-source/next-project" },
            { text: "Nuxt 项目", link: "/open-source/nuxt-project" },
          ]
        }
      ],
      "ai-show": [
        {
          text: "AI秀",
          items: [
            { text: "阿里前端第一人，瞄准中国版Notion，2个月估值过亿", link: "/ai-show/Ali-frontend-billion-valuation" },
            { text: "字节跳动发布“豆包MarsCode”智能开发工具", link: "/ai-show/ByteDance-releases-MarsCode" },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yintiankuaile/diggers-god-blog' }
    ]
  },
  srcDir: "./src"
})
