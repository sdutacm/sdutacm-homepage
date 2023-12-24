<template>
  <div class="news">
    <!-- 新闻动态1 -->
    <div class="news-item1">
      <a class="n-link" target="_blank" rel="noopener noreferrer" href="https://acm.sdut.edu.cn/onlinejudge3/posts/35">
        <div class="news-img">
          <img src="../../src/assets/img/sdutacm-homepage-news-1.png" alt="" />
        </div>
        <div class="news-info">
          <span class="news-title">蔚蓝系列赛</span>
          <span class="news-summary">OJ3作者bLue同学用爱赞助，火热报名中！</span>
          <span class="news-date">2023-12-01</span>
        </div>
      </a>
    </div>
    <!-- 新闻动态2 -->
    <div class="news-item2">
      <a class="n-link">
        <div class="news-img">
          <img src="../../src/assets/img/sdutacm-homepage-news-2.png" alt="" />
        </div>
        <div class="news-info">
          <span class="news-title">ICPC杭州站 银牌</span>
          <span class="news-summary">恭喜「张鱼小丸子」!</span>
          <span class="news-date">2023-12-10</span>
        </div>
      </a>
    </div>
    <!-- 新闻动态3 -->
    <div class="news-item3">
      <a class="n-link">
        <div class="news-img">
          <img src="../../src/assets/img/sdutacm-homepage-news-3.png" alt="" />
        </div>
        <div class="news-info">
          <span class="news-title">ICPC济南站 双铜牌</span>
          <span class="news-summary">恭喜「开发9G」&「清纯白毛小萝莉」!</span>
          <span class="news-date">2023-12-03</span>
        </div>
      </a>
    </div>
    <!-- 新闻动态4 -->
    <div class="news-item4">
      <a class="n-link" target="_blank" rel="noopener noreferrer"
        href="https://mp.weixin.qq.com/s/Qe6mxR_qBC1l7gA2XzVjOg">
        <div class="news-img">
          <img src="../../src/assets/img/sdutacm-homepage-news-5.png" alt="" />
        </div>
        <div class="news-info">
          <span class="news-title">SDUTACM十五周年庆典</span>
          <span class="news-summary">15载时光荏苒</span>
          <span class="news-date">2023-10-15</span>
        </div>
      </a>
    </div>
    <!-- 新闻动态5 -->
    <div class="news-item5">
      <a class="n-link" target="_blank" rel="noopener noreferrer"
        href="https://mp.weixin.qq.com/s/QZiaCEux-yAhlRo4adSg6A">
        <div class="news-img">
          <img src="../../src/assets/img/sdutacm-homepage-news-4.png" alt="" />
        </div>
        <div class="news-info">
          <span class="news-title">第十五届SDUTACM校赛</span>
          <!-- <span class="news-summary">2023年山东理工大学程序设计竞赛（SDUT校赛）于2023年5月28日举行</span> -->
          <span class="news-date">2023-05-28</span>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 最新动态
.news {
  display: grid;
  width: 100%;
  max-width: 24rem;
  height: 100%;
  grid-template:
    'no1 no1 no2'
    'no1 no1 no3'
    'no4 no5 no5' / 147fr 57fr 84fr;
  gap: 0.52rem 0.48rem;

  .news-item() {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 0.2rem;
    transition: box-shadow var(--ah-t-long);

    .n-link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      flex-direction: column;

      .news-img {
        overflow: hidden;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--ah-t-long);
        }
      }

      .news-info {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        padding: 0.2rem 0.4rem;
        width: 100%;
        height: 2.4rem;
        background-color: var(--ah-c-background-card);
        flex-direction: column;

        .news-title {
          overflow: hidden;
          width: 100%;
          font-size: 0.36rem;
          font-weight: 700;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--ah-c-text2);
        }

        .news-summary {
          overflow: hidden;
          width: 100%;
          font-size: 0.32rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--ah-c-text3);
        }

        .news-date {
          font-size: 0.32rem;
          text-align: right;
          color: var(--ah-c-text4);
        }
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      box-shadow: var(--ah-s-shadow-1);
    }
  }

  .news-item1 {
    .news-item();

    grid-area: no1;
  }

  .news-item2 {
    .news-item();

    grid-area: no2;
  }

  .news-item3 {
    .news-item();

    grid-area: no3;
  }

  .news-item4 {
    .news-item();

    grid-area: no4;
  }

  .news-item5 {
    .news-item();

    grid-area: no5;
  }
}

// ipad端的样式. 尾随注释是在>1100px时的样式
// 电脑 ❌ 平板 ✅ 手机 ❌
@media screen and (width >=601px) and (width <=1100px) {
  .news {
    grid-template:
      'no1 no1'
      'no2 no3'
      'no4 no5' / 1fr 1fr;
  }
}

// 移动端的样式
// 电脑 ❌ 平板 ❌ 手机 ✅
@media screen and (width <=600px) {
  .news {
    grid-template:
      'no1'
      'no2'
      'no3'
      'no4'
      'no5' / 1fr;
  }
}
</style>