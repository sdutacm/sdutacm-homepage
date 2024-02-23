<template>
  <div class="news">
    <div
      v-for="(item, index) in newsItems"
      :key="index"
      :class="'news-item news-item' + (index + 1)"
    >
      <a
        v-if="item.link && item.link !== '#'"
        class="n-link"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="news-img">
          <img :src="item.imgSrc" :alt="'新闻 ' + item.title" />
        </div>
        <div class="news-info">
          <span class="news-title">{{ item.title }}</span>
          <span class="news-summary">{{ item.summary }}</span>
          <span class="news-date">{{ item.date }}</span>
        </div>
      </a>
      <a v-else class="n-link">
        <div class="news-img">
          <img :src="item.imgSrc" alt="" />
        </div>
        <div class="news-info">
          <span class="news-title">{{ item.title }}</span>
          <span class="news-summary">{{ item.summary }}</span>
          <span class="news-date">{{ item.date }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { last5News } from '../data/news'

const newsItems = last5News
</script>

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

  .news-item {
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
    grid-area: no1;
  }

  .news-item2 {
    grid-area: no2;
  }

  .news-item3 {
    grid-area: no3;
  }

  .news-item4 {
    grid-area: no4;
  }

  .news-item5 {
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
      'no5';

    .news-item {
      height: 5.5rem;
    }
  }
}
</style>
