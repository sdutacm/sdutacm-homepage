<script setup>
import { ref, onMounted } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import GodRays from './components/GodRays.vue'
import SectionNews from './components/SectionNews.vue'
import SectionProject from './components/SectionProject.vue'
import SnowBackground from './components/SnowBackground.vue'
import { useThemeStore } from './store/themeStore'

const themeStore = useThemeStore() // 主题仓库
const section1 = ref(null) // 页面位置指示器 - 第一节
const section2 = ref(null) // 页面位置指示器 - 第二节
const section3 = ref(null) // 页面位置指示器 - 第三节

const scrollToAnchor = (anchor) => {
  const rect = anchor.getBoundingClientRect()
  window.scroll({
    // top = 元素距离页面顶部的距离 + 页面滚动的距离 - 100
    top: rect.top + window.scrollY - 100,
    behavior: 'smooth'
  })
}

onMounted(() => {
  // todo: 彩蛋信息
  console.log(
    '主题食用说明：\n' +
      "1. 使用 window.magic('<some>-theme') 添加隐藏主题\n" +
      '2. 使用 window.magicClear() 清空隐藏主题\n' +
      '3. 使用 window.magic<特殊日期>() 快速添加主题\n'
  )
  console.log('当前主题：', themeStore.theme)
})
</script>

<template>
  <!-- 顶部导航栏及其下拉列表 -->
  <NavigationBar />

  <!-- 极光背景 -->
  <GodRays v-if="themeStore.theme === 'light-theme' || themeStore.theme === 'dark-theme'" />

  <!-- 下雪背景 -->
  <SnowBackground v-if="themeStore.theme === 'christmas-theme'" />

  <main>
    <!-- 页面位置指示器 -->
    <div class="indicator">
      <div class="dot" @click="scrollToAnchor(section1)"></div>
      <div class="dot" @click="scrollToAnchor(section2)"></div>
      <div class="dot" @click="scrollToAnchor(section3)"></div>
    </div>

    <!-- SDUTACM简介 -->
    <div class="summary">
      <span class="title" ref="section1">山东理工大学ACM</span>
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
    <div class="section-title" ref="section2">最新动态</div>
    <SectionNews />

    <!-- 我们的项目 -->
    <div class="section-title" ref="section3">我们的项目</div>
    <SectionProject />

    <!-- 时间线 -->
    <!-- <div class="section-title">时间线</div>
    <div class="time-line">
      敬请期待
    </div> -->

    <!-- 加入我们 -->
    <!-- <div class="section-title">加入我们</div>
    <div class="join-us">敬请期待</div> -->
  </main>

  <footer>
    <span> © 2008-2023 SDUTACM. All Rights Reserved. </span>
  </footer>
</template>

<style scoped lang="less">
// 全局样式
// 电脑 ✅ 平板 ✅ 手机 ✅
main {
  z-index: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.6rem 3.6rem;
  width: 100%;
  height: 100%;
  background-color: var(--ah-c-background-bg);
  flex-direction: column;
  gap: 1rem;

  * {
    z-index: 10;
  }
}

// 页面指示器
.indicator {
  position: fixed;
  top: 50%;
  right: 0.6rem;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 0.04rem;
  height: 6.4rem;
  background-color: var(--ah-c-background-indicator);
  flex-direction: column;
  transform: translate(0, -50%);

  .dot {
    position: relative;
    border-radius: 50%;
    width: 0.28rem;
    height: 0.28rem;
    background-color: var(--ah-c-background-indicator);
    transition: all var(--ah-t-long);

    &:hover {
      border: var(--ah-c-background-indicator) 0.04rem solid;
      transform: scale(1.2);
      background-color: var(--ah-c-background-indicator-active);
    }
  }
}

// SDUTACM简介
.summary {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  width: 100%;
  flex-direction: column;
  gap: 0.2rem;

  .title {
    font-size: 1rem;
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 900;
    color: var(--ah-c-text1);
  }

  .slogan {
    position: relative;
    margin: 0 0.7rem;
    font-size: 0.48rem;
    font-weight: 500;
    color: var(--ah-c-text3);

    &::after {
      position: absolute;
      top: 50%;
      left: -0.7rem;
      display: block;
      width: 0.5rem;
      height: 0.04rem;
      background-color: var(--ah-c-text3);
      content: '';
    }

    &::before {
      position: absolute;
      top: 50%;
      right: -0.7rem;
      display: block;
      width: 0.5rem;
      height: 0.04rem;
      background-color: var(--ah-c-text3);
      content: '';
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      margin: 0.1rem 0;
      font-size: 0.32rem;
      color: var(--ah-c-text2);
      line-height: 0.48rem;
    }
  }
}

// 页脚
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom);
  width: 100%;
  height: 2rem;

  span {
    font-size: 0.32rem;
    color: var(--ah-c-text3);
  }
}

// 仅PC端样式
// 电脑 ✅ 平板 ❌ 手机 ❌
@media screen and (width >=1101px) {
  // nothing
}

// 放了一些非pc端的主题样式在这里
// 电脑 ❌ 平板 ✅ 手机 ✅
@media screen and (width <=1100px) {
  main {
    margin-top: 1.2rem; // 1.6rem
    padding: 1.6rem; // 1.6rem 3.6rem
  }

  .summary {
    .title {
      font-size: 0.64rem; // 1rem
    }

    .slogan {
      font-size: 0.32rem; // 0.48rem
    }
  }
}

// 非移动端展示时的 "我们的项目"板块的交互样式
// 电脑 ✅ 平板 ✅ 手机 ❌
@media screen and (width >=601px) {
  // nothing
}

// ipad端的样式. 尾随注释是在>1100px时的样式
// 电脑 ❌ 平板 ✅ 手机 ❌
@media screen and (width >=601px) and (width <=1100px) {
  // nothing
}

// 移动端的样式
// 电脑 ❌ 平板 ❌ 手机 ✅
@media screen and (width <=600px) {
  main {
    padding: 1rem 0.8rem;
  }

  .indicator {
    right: 0.3rem;

    .dot {
      width: 0.22rem;
      height: 0.22rem;
    }
  }
}
</style>
