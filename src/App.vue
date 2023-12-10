<script setup>
import { ref } from 'vue'
// import CarouselComponent from './components/CarouselComponent.vue'

const isDarkTheme = ref(false)

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
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
      <div class="news-item1">
        <img src="../src/assets/img/news/1.png" alt="" />
        <div class="news-info">
          <span class="news-title">蔚蓝编程大赛</span>
          <span class="news-summary">bLue杯预热赛</span>
        </div>
        <span class="news-date">2021-09-12</span>
      </div>
      <div class="news-item2">
        <img src="../src/assets/img/news/1.png" alt="" />
        <div class="news-info">
          <span class="news-title">SDUTACM十五周年庆典</span>
          <!-- <span class="news-summary">15载时光荏苒，SDUTACM实验室迎来了自己的十五岁生日</span> -->
        </div>
        <span class="news-date">2021-09-12</span>
      </div>
      <div class="news-item3">
        <img src="../src/assets/img/news/2.png" alt="" />
        <div class="news-info">
          <span class="news-title">第十五届SDUTACM校赛</span>
          <!-- <span class="news-summary">2023年山东理工大学程序设计竞赛（SDUT校赛）于2023年5月28日举行</span> -->
        </div>
        <span class="news-date">2021-09-12</span>
      </div>
      <div class="news-item4">4</div>
      <div class="news-item5">5</div>
    </div>

    <!-- 我们的项目 -->
    <div class="section-title">我们的项目</div>
    <div class="project">
      <div class="project-item1">
        <div class="info">
          <span class="title">Online Judge 3</span>
          <div class="links">
            <span>前往</span>
            <span>竞赛</span>
            <span>源码</span>
          </div>
        </div>
      </div>
      <div class="project-item2">
        <div class="info">
          <span class="title">Rank Land</span>
          <div class="links">
            <span>前往</span>
            <span>竞赛</span>
            <span>源码</span>
          </div>
        </div>
      </div>
      <div class="project-item3">
        <div class="info">
          <span class="title">光锥实验室·见习任务</span>
          <div class="links">
            <span class="active">学习路线</span>
            <span>资料</span>
          </div>
        </div>
      </div>
    </div>

    <!-- page1: SDUTACM -->
    <!-- <div class="page-1">
      <CarouselComponent />
    </div> -->
    <!-- page2: OJ, RL, Type -->
    <!-- <div class="page-2">
      <h1>What we have</h1>
    </div> -->
    <!-- page3: timeline -->
    <!-- <div class="page-3">
      <h1>Timeline</h1>
    </div> -->
    <!-- page4: join us -->
    <!-- <div class="page-4">
      <h1>Join us</h1>
    </div> -->
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
          display: block;
          width: 100%;
          height: 0.04rem;
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 4rem);
  grid-template-areas:
    'no1 no1 no2'
    'no1 no1 no3'
    'no4 no5 no5';
  gap: 0.8rem 0.4rem;

  .news-item() {
    background-color: #999;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: box-shadow 0.3s;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      transition: transform 0.3s;
      object-fit: cover;
    }

    .news-info {
      width: 100%;
      height: 1.6rem;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0.2rem 2.2rem 0.2rem 0.4rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.1rem;
      overflow: hidden;

      .news-title {
        font-size: 0.36rem;
        font-weight: 700;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .news-summary {
        font-size: 0.32rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .news-date {
      width: 2rem;
      position: absolute;
      bottom: 0.2rem;
      right: 0;
      font-size: 0.3rem;
      color: #ccc;
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
  max-width: 24rem;
  height: 10rem;
  background-color: #999;
  display: flex;
  justify-self: center;
  align-self: center;

  .project-item() {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 0.2rem;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: normal;

    .info {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 0.4rem;
      padding: 0.4rem;
      position: absolute;
      top: 0.5rem;
      right: -0rem;
      transform: translateX(10%);
      color: #fff;
      z-index: 50;

      .title {
        font-size: .84rem;
        font-weight: 700;
      }

      .links {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        gap: 0.2rem;

      }

      span {
        font-size: 0.64rem;
        font-weight: 500;
        padding: 0.2rem 0.4rem;

        &:hover {
          text-decoration: underline;
          background-color: #eee3;
        }

        &:active {
          // background-color: #eee5;
        }
      }
    }

    &:hover {
      flex: 2;

      .info {
        display: flex;
      }
    }
  }

  .project-item1 {
    .project-item();
    background-color: #a64;

    &:hover {
      background-color: #d2d;
    }
  }

  .project-item2 {
    .project-item();
    background-color: #214;

    &:hover {
      background-color: #d2d;
    }
  }

  .project-item3 {
    .project-item();
    background-color: #a2b;

    &:hover {
      background-color: #d2d;
    }
  }
}

@media screen and (max-width: 1100px) {
  header {
    height: 1.2rem;

    .menu {
      display: block;
    }

    .logo {
      width: 3rem;
      height: 100%;

      img {
        width: 0.8rem;
        height: 0.8rem;
      }

      h1 {
        font-size: 0.48rem;
      }
    }

    .nav {
      display: none;
    }
  }

  .section-title {
    font-size: 0.6rem;
  }

  main {
    margin-top: 1.2rem;
    padding: 0 0.6rem;
  }

  .summary {
    .title {
      font-size: 0.7rem;
    }

    .slogan {
      font-size: 0.36rem;
    }

    .text {
      p {
        font-size: 0.28rem;
        line-height: 0.36rem;
      }
    }
  }

  .news {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 4rem);
    grid-template-areas:
      'no1 no2'
      'no1 no3'
      'no4 no3'
      'no4 no5';
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
</style>
