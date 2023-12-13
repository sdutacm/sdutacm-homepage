<script setup>
import { ref } from 'vue'

const isDarkTheme = ref(false)
const acitveProject = ref(0)

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}

const clickProject = (target) => {
  acitveProject.value = target === acitveProject.value ? 0 : target
}
</script>

<template>
  <header>
    <div class="menu">
      <el-icon>
        <Menu />
      </el-icon>
    </div>
    <div class="logo">
      <img src="./assets/icon/sdutacm_logo_colorful.svg" alt="logo" />
      <h1>SDUTACM</h1>
    </div>
    <div class="nav">
      <div class="nav-item"><span>Online Judge3</span></div>
      <div class="nav-item"><span>Rank Land</span></div>
      <div class="nav-item"><span>光锥实验室</span></div>
      <div class="nav-item"><span>快速链接</span></div>
    </div>
    <div class="toggle" @click="toggleTheme">
      <el-icon v-show="isDarkTheme">
        <Sunny />
      </el-icon>
      <el-icon v-show="!isDarkTheme">
        <Moon />
      </el-icon>
    </div>
  </header>

  <main>
    <!-- 极光背景 -->
    <div class="jumboContainer">
      <div class="jumbo"></div>
    </div>

    <!-- SDUTACM简介 -->
    <div class="summary">
      <span class="title">山东理工大学ACM</span>
      <span class="slogan">NO EFFORT GOES IN VAIN</span>
      <div class="text">
        <p>
          山东理工大学ACM实验室，包含ACM集训队、光锥实验室（原运维技术中心）以及ACM协会（社团）。
        </p>
        <p>自2008年成立，我们一直专注于编程竞赛体系的完善，培养拥有计算机专业素养的优秀人才。</p>
        <p>
          我们拥有自研的在线评测平台和榜单系统，以及全面的训练计划和培养方案，并提供更多的竞赛机遇和更大的发展平台。
        </p>
        <p>我们秉持“宁拙毋巧，功不唐捐”的培养理念，与各位同仁共同推动算法竞赛的发展。</p>
      </div>
    </div>

    <!-- 最新动态 -->
    <div class="section-title">最新动态</div>
    <div class="news">
      <!-- 新闻动态1 -->
      <div class="news-item1">
        <a class="n-link" target="_blank" href="https://acm.sdut.edu.cn/onlinejudge3/posts/35">
          <div class="news-img">
            <img src="../src/assets/img/sdutacm-homepage-news-1.png" alt="" />
          </div>
          <div class="news-info">
            <span class="news-title">蔚蓝系列赛</span>
            <span class="news-summary">OJ3作者bLue同学用爱赞助，火热报名中......</span>
            <span class="news-date">2023-12-01</span>
          </div>
        </a>
      </div>
      <!-- 新闻动态2 -->
      <div class="news-item2">
        <a class="n-link">
          <div class="news-img">
            <img src="../src/assets/img/sdutacm-homepage-news-2.png" alt="" />
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
            <img src="../src/assets/img/sdutacm-homepage-news-3.png" alt="" />
          </div>
          <div class="news-info">
            <span class="news-title">ICPC济南站 双铜牌</span>
            <span class="news-summary">恭喜「开发9G」&「清纯白毛小萝莉」!</span>
            <span class="news-date">2023-12-3</span>
          </div>
        </a>
      </div>
      <!-- 新闻动态4 -->
      <div class="news-item4">
        <a class="n-link">
          <div class="news-img">
            <img src="../src/assets/img/sdutacm-homepage-news-4.png" alt="" />
          </div>
          <div class="news-info">
            <span class="news-title">第十五届SDUTACM校赛</span>
            <span class="news-summary"
              >2023年山东理工大学程序设计竞赛（SDUT校赛）于2023年5月28日举行</span
            >
            <span class="news-date">2023-05-28</span>
          </div>
        </a>
      </div>
      <!-- 新闻动态5 -->
      <div class="news-item5">
        <a class="n-link">
          <div class="news-img">
            <img src="../src/assets/img/sdutacm-homepage-news-5.png" alt="" />
          </div>
          <div class="news-info">
            <span class="news-title">SDUTACM十五周年庆典</span>
            <span class="news-summary">15载时光荏苒，SDUTACM实验室迎来了自己的十五岁生日</span>
            <span class="news-date">2023-10-15</span>
          </div>
        </a>
      </div>
    </div>

    <!-- 我们的项目 -->
    <div class="section-title">我们的项目</div>
    <div class="project">
      <div
        class="project-item1 project-item"
        :class="{ acitve: acitveProject === 1 }"
        @click="clickProject(1)"
      >
        <div class="project-bubble"></div>
        <span class="project-title">SDUT OJ 3</span>
        <p class="project-summary">
          <span>Online Judge 3，自研第三代在线评测系统，2018 年内测，2019 年正式上线。</span>
          <span
            >使用全栈同构技术栈开发，结合自研的次世代top0性能的评测姬，轻松服务近千人的大型比赛。</span
          >
        </p>
        <div class="project-links">
          <a class="p-link" target="_blank" href="https://acm.sdut.edu.cn/onlinejudge3/">前往</a>
          <a class="p-link" target="_blank" href="https://acm.sdut.edu.cn/onlinejudge3/contests"
            >竞赛</a
          >
          <a class="p-link" target="_blank" href="https://acm.sdut.edu.cn/onlinejudge3/posts"
            >排名</a
          >
          <a class="p-link" target="_blank" href="https://github.com/sdutacm/onlinejudge3">源码</a>
        </div>
      </div>
      <div
        class="project-item2 project-item"
        :class="{ acitve: acitveProject === 2 }"
        @click="clickProject(2)"
      >
        <div class="project-bubble"></div>
        <span class="project-title">RankLand</span>
        <p class="project-summary">
          <span
            >RankLand，由我们的开源组织 algoUX
            开发、算法竞赛爱好者们自发维护的、专注于托管和分享任何竞赛榜单的宝地。</span
          >
          <span>轻松查阅 ICPC、CCPC 等赛事的历史榜单。</span>
        </p>
        <div class="project-links">
          <a class="p-link" target="_blank" href="https://rl.algoux.cn/">前往</a>
          <a class="p-link" target="_blank" href="https://rl.algoux.cn/search?kw=ICPC">探索</a>
          <a class="p-link" target="_blank" href="https://rl.algoux.cn/collection/official"
            >榜单合集</a
          >
          <a class="p-link" target="_blank" href="https://rl.algoux.cn/playground">游乐场</a>
        </div>
      </div>
      <div
        class="project-item3 project-item"
        :class="{ acitve: acitveProject === 3 }"
        @click="clickProject(3)"
      >
        <div class="project-bubble"></div>
        <span class="project-title">光之魔法书</span>
        <p class="project-summary">
          <span>光之魔法书，集前后端、数据库、爬虫、服务器等知识于一体的学习实践指北。</span>
          <span
            >作为光锥实验室的入门魔法指南，你需要通过学习、实践、总结进而对web魔法体系有一个清晰的概念。</span
          >
        </p>
        <div class="project-links">
          <a class="p-link" target="_blank" href="https://lcl-magicbook.sdutacm.cn/">前往</a>
          <a class="p-link" target="_blank" href="https://lcl-magicbook.sdutacm.cn/missions/"
            >见习任务</a
          >
          <a class="p-link" target="_blank" href="https://lcl-magicbook.sdutacm.cn/catalog/"
            >魔法目录</a
          >
          <a
            class="p-link"
            target="_blank"
            href="https://lcl-magicbook.sdutacm.cn/pleasant-gallery/"
            >意义不明展览馆</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="less">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 1.6rem;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0 0.6rem;
  background-color: #fff;
  box-shadow: 0 0 0.4rem #ccc;
  background: transparent;
  backdrop-filter: blur(0.4rem);
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 100;

  .menu {
    display: none;
    width: 0.6rem;
    height: 0.6rem;
    cursor: pointer;

    .el-icon {
      font-size: 0.6rem;
      color: #333;
    }
  }

  .logo {
    width: 5rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;

    img {
      width: 1rem;
      height: 1rem;
    }

    h1 {
      font-size: 0.64rem;
      font-weight: 700;
    }
  }

  .nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    color: #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .nav-item {
      width: 2.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 0.36rem;
        font-weight: 500;
        margin: 0.5rem 0;

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 0.04rem;
          background-color: #666;
          transition: width 0.3s;
        }
      }

      &:hover {
        span::after {
          content: '';
          width: 100%;
        }
      }
    }
  }

  .toggle {
    width: 0.6rem;
    height: 0.6rem;
    cursor: pointer;

    .el-icon {
      font-size: 0.6rem;
      color: #333;
    }
  }
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 1.6rem;
  padding: 0 3.6rem;
  overflow: auto;
  z-index: 0;
  background-color: #f5f5f5;

  * {
    z-index: 10;
  }
}

// 板块标题
.section-title {
  font-size: 0.8rem;
  font-weight: 700;
}

// SDUTACM简介
.summary {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  gap: 0.2rem;

  .title {
    font-size: 1rem;
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 900;
  }

  .slogan {
    position: relative;
    font-size: 0.48rem;
    font-weight: 500;
    margin: 0 0.7rem;
    color: #666;

    &::after {
      content: '';
      width: 0.5rem;
      height: 0.04rem;
      display: block;
      background-color: #666;
      position: absolute;
      left: -0.7rem;
      top: 50%;
    }

    &::before {
      content: '';
      width: 0.5rem;
      height: 0.04rem;
      display: block;
      background-color: #666;
      position: absolute;
      right: -0.7rem;
      top: 50%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      font-size: 0.32rem;
      line-height: 0.48rem;
      margin: 0.1rem 0;
    }
  }
}

// 最新动态
.news {
  width: 100%;
  max-width: 24rem;
  height: 100%;
  display: grid;
  grid-template-columns: 147fr 57fr 84fr;
  grid-template-rows: auto;
  grid-template-areas:
    'no1 no1 no2'
    'no1 no1 no3'
    'no4 no5 no5';
  gap: 0.52rem 0.48rem;

  .news-item() {
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.3s;
    overflow: hidden;

    .n-link {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .news-img {
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
      }

      .news-info {
        width: 100%;
        height: 2.4rem;
        padding: 0.2rem 0.4rem;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;

        .news-title {
          width: 100%;
          font-size: 0.36rem;
          font-weight: 700;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .news-summary {
          width: 100%;
          font-size: 0.32rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        .news-date {
          text-align: right;
          font-size: 0.32rem;
          color: #ccc;
        }
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      box-shadow: 0 0 0.4rem #ccc;
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

// 我们的项目
.project {
  width: 100%;
  max-width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  gap: 0.8rem;

  .project-item {
    width: 100%;
    height: 5rem;
    background-color: #fff;
    border-radius: 0.2rem;
    position: relative;
    overflow: hidden;
    background-color: #eee;
    transition: box-shadow 0.3s;

    .project-bubble {
      width: 12rem;
      height: 12rem;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: -5rem;
      right: -4.5rem;
      transition:
        transform 0.3s,
        box-shadow 0.3s;
    }

    .project-title {
      font-size: 0.48rem;
      font-weight: 700;
      position: absolute;
      top: 2.2rem;
      right: 0;
      width: 40%;
      text-align: center;
      transition: transform 0.3s;
      cursor: default;
    }

    .project-summary {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 60%;
      height: 100%;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transition: opacity 0.2s 0s;
      // z-index: -10; // todo 不生效

      span {
        font-size: 0.32rem;
        font-weight: 500;
        line-height: 0.48rem;
        margin: 0.2rem 0;
        // z-index: -10; // todo 不生效
      }
    }

    .project-links {
      display: flex;
      width: 40%;
      height: 80%;
      position: absolute;
      bottom: 0;
      right: 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s 0s;
      z-index: 0;

      .p-link {
        text-align: center;
        font-size: 0.32rem;
        font-weight: 500;
        line-height: 0.8rem;
        width: 30%;

        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          transform: translate(-100%, 0);
          display: block;
          width: 0;
          height: 5rem;
          // background:
          //   linear-gradient(105deg, transparent 75%, #fff 90%) center,
          //   url('../src/assets/img/sdutacm-homepage-project-oj3-home.png') no-repeat center / cover;
          opacity: 0;
          transition: opacity 0.3s 1s;
        }

        &::after {
          content: '';
          display: block;
          width: 0;
          height: 0.04rem; // todo 高度不一致
          background-color: #999;
          transition: width 0.3s;
        }

        &:hover {
          &::before {
            width: 150%;
            opacity: 1;
            transition: opacity 0.3s;
          }

          &::after {
            width: 100%;
          }

          .project-summary {
            opacity: 0;
            transition: opacity 0.3s 0.15s;
          }
        }
      }
    }

    &.acitve {
      .project-bubble {
        transform: scale(3.5);
      }

      .project-title {
        transform: translateY(-1.6rem);
      }

      .project-summary {
        z-index: 20;
        opacity: 1;
        transition: opacity 0.3s 0.15s;
      }

      .project-links {
        z-index: 20;
        opacity: 1;
        transition: opacity 0.3s 0.1s;
      }
    }

    &:hover:not(.acitve) {
      .project-bubble {
        transform: scale(1.2);
        box-shadow: 0 0 0.4rem #ccc;
      }
    }
    &:hover {
      box-shadow: 0 0 0.4rem #ccc;
    }
  }

  // 我们的项目的单独配置: 背景图 + 链接预览图

  .project-item1 {
    // .project-item();
    background:
      url('../src/assets/img/sdutacm-homepage-project-oj3-logo.png') no-repeat 10% 50% / 50%,
      #f4f4f4;

    .project-links {
      .p-link {
        &:nth-child(1) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-oj3-home.png') no-repeat left / cover;
          }
        }

        &:nth-child(2) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-oj3-contests.png') no-repeat left /
                cover;
          }
        }

        &:nth-child(3) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-oj3-users.png') no-repeat left / cover;
          }
        }

        &:nth-child(4) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-oj3-github.png') no-repeat left /
                cover;
          }
        }
      }
    }
  }

  .project-item2 {
    // .project-item();
    background:
      url('../src/assets/img/sdutacm-homepage-project-rankland-logo.png') no-repeat 10% 50% / 50%,
      #fff2df;

    .project-links {
      .p-link {
        &:nth-child(1) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-rankland-home.png') no-repeat left /
                cover;
          }
        }

        &:nth-child(2) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-rankland-search.png') no-repeat left /
                cover;
          }
        }

        &:nth-child(3) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-rankland-collection.png') no-repeat
                left / cover;
          }
        }

        &:nth-child(4) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-rankland-playground.png') no-repeat
                left / cover;
          }
        }
      }
    }
  }

  .project-item3 {
    // .project-item();
    background:
      url('../src/assets/img/sdutacm-homepage-project-magicbook-logo.png') no-repeat 10% 50% / 50%,
      #d6e6f2;

    .project-links {
      .p-link {
        &:nth-child(1) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-magicbook-home@2.png') no-repeat left /
                cover;
          }
        }

        &:nth-child(2) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-magicbook-missions@2.png') no-repeat
                left / cover;
          }
        }

        &:nth-child(3) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-magicbook-catalog@2.png') no-repeat
                left / cover;
          }
        }

        &:nth-child(4) {
          &::before {
            background:
              linear-gradient(105deg, transparent 75%, #fff 90%) center,
              url('../src/assets/img/sdutacm-homepage-project-magicbook-gallery@2.png') no-repeat
                left / cover;
          }
        }
      }
    }
  }
}

// 尾随注释是在>1101px时的样式
@media screen and (max-width: 1100px) {
  header {
    height: 1.2rem; // 1.6rem

    .menu {
      display: block; // none
    }

    .logo {
      width: 3rem; // 5rem

      img {
        width: 0.8rem; // 1rem
        height: 0.8rem; // 1rem
      }

      h1 {
        font-size: 0.48rem; // 0.64rem
      }
    }

    .nav {
      display: none; // flex
    }
  }

  .section-title {
    font-size: 0.6rem; // 0.8rem
  }

  main {
    margin-top: 1.2rem; // 1.6rem
    padding: 0 0.6rem; // 0 3.6rem
  }

  .summary {
    .title {
      font-size: 0.64rem; // 1rem
    }

    .slogan {
      font-size: 0.36rem; // 0.48rem
    }
  }

  .news {
    grid-template-columns: 1fr 1fr; // 147fr 57fr 84fr
    grid-template-rows: auto;
    grid-template-areas:
      'no1 no1'
      'no2 no3'
      'no4 no5';
  }

  .project {
    width: 80%; // 100%
    max-width: 16rem; // 20rem

    .project-item {
      height: 4rem; // 5rem
      background-size: 40%;

      .project-bubble {
        width: 8rem; // 12rem
        height: 8rem; // 12rem
        top: -3rem; // -5rem
        right: -3rem; // -4.5rem
      }

      .project-title {
        font-size: 0.4rem; // 0.48rem
        top: 2rem; // 2.2rem
      }

      .project-summary {
        padding: 0 .4rem;

        span {
          font-size: 0.28rem; // 0.32rem
          line-height: 0.4rem; // 0.48rem
        }
      }

      .project-links {
        .p-link {
          font-size: 0.28rem; // 0.32rem
          line-height: 0.6rem; // 0.8rem
          width: 50%; // 30%
        }
      }

      &:hover:not(.acitve) {
        .project-bubble {
          transform: scale(1.1);
          box-shadow: 0 0 0.4rem #ccc;
        }
      }
      &:hover {
        box-shadow: 0 0 0.4rem #ccc;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .news {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 4rem);
    grid-template-areas:
      'no1'
      'no2'
      'no3'
      'no4'
      'no5';
  }
}

/* 动画容器 */
.jumboContainer {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;

  /* 动画细节样式 */
  .jumbo {
    opacity: 0.5;
    inset: 0px;
    position: absolute;

    --stripes: repeating-linear-gradient(
      100deg,
      #fff 0%,
      #fff 7%,
      transparent 10%,
      transparent 12%,
      #fff 16%
    );
    --stripesDark: repeating-linear-gradient(
      100deg,
      #000 0%,
      #000 7%,
      transparent 10%,
      transparent 12%,
      #000 16%
    );
    --rainbow: repeating-linear-gradient(
      100deg,
      #60a5fa 10%,
      #e879f9 10%,
      #60a5fa 20%,
      #5eead4 25%,
      #60a5fa 30%
    );
    background-image: var(--stripes), var(--rainbow);
    background-size: 300%, 200%;
    background-position:
      50% 50%,
      50% 50%;

    filter: blur(10px) invert(100%);

    mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);

    -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);

    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: var(--stripes), var(--rainbow);
      background-size: 200%, 100%;
      animation: jumbo 60s linear infinite;
      background-attachment: fixed;
      mix-blend-mode: difference;
    }
  }
}

/* 动画位置 */
@keyframes jumbo {
  from {
    background-position:
      50% 50%,
      50% 50%;
  }

  to {
    background-position:
      350% 50%,
      350% 50%;
  }
}
</style>
