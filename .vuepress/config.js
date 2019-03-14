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
      { text: '框架', link: '/framework/' },
      { text: 'Node', link: '/node/'},
      { text: '项目', link: '/project/' },
      { text: '面试', link: '/interview/' },
      { text: 'Github', link: 'https://github.com/haitaodesign/blog'}
    ]
  },
  port: 8081
}
