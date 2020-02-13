module.exports = {
  title: '前端知识体系搭建',
  description: 'web前端，跨终端，小程序，node，devops',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico'}]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: '基础', link: '/base/' },
      { text: '进阶', link: '/advanced/' },
      { text: '技术体系', link: '/technology-system/' },
      { text: '实践', link: '/practice/' },
      { text: '职业规划', link: '/career-planing/'},
      { text: 'Github', link: 'https://github.com/haitaodesign/blog'}
    ],
    sidebar: {
      '/base/': [
        '',
        'html-meta-tag'
      ]
    }
  },
  port: 8081,
  base: '/blog/',
  dest: 'docs'
}
