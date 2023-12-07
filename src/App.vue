<script setup>
import { ref } from 'vue'

const isDarkTheme = ref(false)
const sunStyle = ref({ opacity: 1, display: 'flex' })
const moonStyle = ref({ opacity: 0, display: 'none' })

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  if (isDarkTheme.value) {
    sunStyle.value = { opacity: 0, display: 'none' }
    moonStyle.value = { opacity: 1, display: 'flex' }
  } else {
    sunStyle.value = { opacity: 1, display: 'flex' }
    moonStyle.value = { opacity: 0, display: 'none' }
  }
}
</script>

<template>
  <header>
    <div class="menu">菜单</div>
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
      <el-icon :style="sunStyle"><Sunny /></el-icon>
      <el-icon :style="moonStyle"><Moon /></el-icon>
    </div>
  </header>

  <main>
    <!-- page1: SDUTACM -->
    <div class="page-1">
      <div class="introduction">
        <div class="logo">logo</div>
        <div class="content">content</div>
      </div>
      <div class="news">news</div>
    </div>
    <!-- page2: OJ, RL, Type -->
    <div class="page-2">
      <h1>What we have</h1>
    </div>
    <!-- page3: timeline -->
    <div class="page-3">
      <h1>Timeline</h1>
    </div>
    <!-- page4: join us -->
    <div class="page-4">
      <h1>Join us</h1>
    </div>
  </main>
</template>

<style scoped lang="less">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.6rem;
  top: 0;
  position: sticky;
  background-color: #fff;
  box-shadow: 0 0 0.4rem #ccc;
  background: transparent;
  backdrop-filter: blur(0.4rem);
  background-color: rgba(255, 255, 255, 0.85);

  .menu {
    display: none;
  }

  .logo {
    width: 5rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    margin-left: 0.4rem;
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
    width: 15rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;

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
    margin-right: 0.4rem;
    cursor: pointer;

    el-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
    }
  }
}
.page() {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    font-weight: 900;
    color: #333;
  }
}
.page-1 {
  .page();
  background-color: #f5f5f5;
}
.page-2 {
  .page();
  background-color: #f512f5;
}
.page-3 {
  .page();
  background-color: #f2f515;
}
.page-4 {
  .page();
  background-color: #15f5f2;
}

@media screen and (max-width: 1280px) {
  // 当屏幕宽度小于1280px时
  header {
    .menu {
      display: block;
    }
    .nav {
      display: none;
    }
  }
}
</style>
