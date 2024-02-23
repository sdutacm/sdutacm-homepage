const newsItems = [
  {
    title: '第十五届 SDUTACM 校赛',
    date: '2023-05-28',
    imgSrc: '../../src/assets/img/sdutacm-homepage-news-4.png',
    link: 'https://mp.weixin.qq.com/s/QZiaCEux-yAhlRo4adSg6A'
  },
  {
    title: 'SDUTACM 十五周年庆典',
    summary: '15 载时光荏苒',
    date: '2023-10-15',
    imgSrc: '../../src/assets/img/sdutacm-homepage-news-5.png',
    link: 'https://mp.weixin.qq.com/s/Qe6mxR_qBC1l7gA2XzVjOg'
  },
  {
    title: 'ICPC济南站 双铜牌',
    summary: '恭喜「开发9G」&「清纯白毛小萝莉」!',
    date: '2023-12-03',
    imgSrc: '../../src/assets/img/sdutacm-homepage-news-3.png'
  },
  {
    title: 'ICPC杭州站 银牌',
    summary: '恭喜「张鱼小丸子」!',
    date: '2023-12-10',
    imgSrc: '../../src/assets/img/sdutacm-homepage-news-2.png',
    link: '#'
  },
  {
    title: '蔚蓝系列赛',
    summary: 'OJ3 作者 bLue 同学用爱赞助，火热报名中！',
    date: '2023-12-01',
    imgSrc: '../../src/assets/img/sdutacm-homepage-news-1.png',
    link: 'https://acm.sdut.edu.cn/onlinejudge3/posts/35'
  },
  // todo add more news here
]

const last5News = newsItems.slice(-5).reverse()

export { newsItems, last5News }
