module.exports = {
    title: '徐肖洁的博客',
    head: [
      ['link', { rel: 'icon', href: '/imgs/logo.ico' }],
      ["link", { rel: "stylesheet", href: "/styles/style.css" }]
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig : {
      logo:'/imgs/logo.jpeg',
      nav : [
          { text: '首页', link: '/' },
          { text: '我的笔记', link: '/note' },
          { text: '简历', link: '/resume' },
      ],
      yuu: {
        disableDarkTheme: true,
      }
    },
    serviceWorker: true // 是否开启pwr


  };