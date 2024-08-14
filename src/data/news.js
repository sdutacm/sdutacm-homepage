import img5Url from '../assets/img/sdutacm-homepage-news-5.png'
import img4Url from '../assets/img/sdutacm-homepage-news-4.png'
import img3Url from '../assets/img/sdutacm-homepage-news-3.png'
import img2Url from '../assets/img/sdutacm-homepage-news-2.png'
import img1Url from '../assets/img/sdutacm-homepage-news-1.png'
import imgUrl16th from '../assets/img/sdutacm-homepage-news-16th.jpg'
import imgUrl20240317 from '../assets/img/sdutacm-homepage-news-20240317.jpg'
import imgUrl20240526 from '../assets/img/sdutacm-homepage-news-20240526.jpg'
// import imgUrl20240630 from '../assets/img/sdutacm-homepage-news-20240630.png'
import imgUrl20240814 from '../assets/img/sdutacm-homepage-news-20240814.png'

const newsItems = [
  {
    title: '第十五届 SDUTACM 校赛',
    date: '2023-05-28',
    imgSrc: img5Url,
    link: 'https://mp.weixin.qq.com/s/QZiaCEux-yAhlRo4adSg6A'
  },
  {
    title: 'SDUTACM 十五周年庆典',
    summary: '15 载时光荏苒',
    date: '2023-10-15',
    imgSrc: img4Url,
    link: 'https://mp.weixin.qq.com/s/Qe6mxR_qBC1l7gA2XzVjOg'
  },
  {
    title: 'ICPC济南站 双铜牌',
    summary: '恭喜「开发9G」&「清纯白毛小萝莉」!',
    date: '2023-12-03',
    imgSrc: img3Url
  },
  {
    title: 'ICPC杭州站 银牌',
    summary: '恭喜「张鱼小丸子」!',
    date: '2023-12-10',
    imgSrc: img2Url
  },
  {
    title: '蔚蓝系列赛',
    summary: 'OJ3 作者 bLue 同学用爱赞助，火热报名中！',
    date: '2023-12-01',
    imgSrc: img1Url,
    link: 'https://acm.sdut.edu.cn/onlinejudge3/posts/35'
  },
  {
    title: '共同携手！SDUTACM 乌桕树种植',
    summary: '欢迎各位校友有空时回来除草、浇水、施肥。',
    date: '2024-03-17',
    imgSrc: imgUrl20240317,
    link: 'https://mp.weixin.qq.com/s/qVgPj0yMidf4WcSP3MCkFw'
  },
  {
    title: '捧杯！CCPC 山东省省赛亚军',
    summary: '恭喜「清纯白毛小萝莉」在 2024 济南邀请赛 & 山东省赛斩获佳绩！',
    date: '2024-05-26',
    imgSrc: imgUrl20240526,
    link: 'https://mp.weixin.qq.com/s/ESO3wY2sJvN5iYzphkOz7g'
  },
  {
    title: 'SDUTACM 第十六届校赛圆满结束',
    summary: '让我们一起回望比赛期间的精彩瞬间吧！',
    date: '2024-05-29',
    imgSrc: imgUrl16th,
    link: 'https://mp.weixin.qq.com/s/7T3TDDV9r8q1JJPo-sN7RQ'
  },
  {
    title: '芜湖🐱 起飞🛫',
    summary: '欢迎解锁 9#409 撸猫现场😽！',
    date: '2024-08-14',
    imgSrc: imgUrl20240814,
    link: 'https://acm.sdut.edu.cn/onlinejudge3/posts/40' // 可选
  },
  // 纳新时添加
  // {
  //   title: '光锥实验室纳新啦',
  //   summary: '2024 暑期纳新报名开放，欢迎加入！',
  //   date: '2024-06-30',
  //   imgSrc: imgUrl20240630,
  //   link: 'https://lcl.sdutacm.cn/'
  // }
  // todo add more news here
]

const last5News = newsItems.slice(-5).reverse()

export { newsItems, last5News }
