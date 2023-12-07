<script setup>
import { ref } from 'vue'

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
    <!-- page1: SDUTACM -->
    <div class="page-1">
      <div class="container">
        <img class="logo" src="./assets/icon/sdutacm_logo_colorful.svg" alt="logo" />
        <div class="content">
          <span class="title">山东理工大学ACM</span>
          <span class="slogan">NO EFFORT GOES IN VAIN</span>
          <div class="text">
            <p>山东理工大学ACM实验室，包含ACM集训队、光锥实验室（原运维技术中心）以及ACM协会（社团）。</p>
            <p>自2008年成立，我们一直专注于编程竞赛体系的完善，培养拥有计算机专业素养的优秀人才。</p>
            <p>我们拥有自研的在线评测平台和榜单系统，以及全面的训练计划和培养方案，并提供更多的竞赛机遇和更大的发展平台。</p>
            <p>我们秉持“宁拙毋巧，功不唐捐”的培养理念，与各位同仁共同推动算法竞赛的发展。</p>
          </div>
        </div>
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
  padding: 0 .6rem;
  background-color: #fff;
  box-shadow: 0 0 0.4rem #ccc;
  background: transparent;
  backdrop-filter: blur(0.4rem);
  background-color: rgba(255, 255, 255, 0.85);

  .menu {
    display: none;
    width: .6rem;
    height: .6rem;
    cursor: pointer;

    .el-icon {
      font-size: .6rem;
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
    width: .6rem;
    height: .6rem;
    cursor: pointer;

    .el-icon {
      font-size: .6rem;
      color: #333;
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

  .container {
    width: 22rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .logo {
      width: 5rem;
      height: 5rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
      width: 15rem;

      .title {
        font-size: 1rem;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 900;
      }

      .slogan {
        position: relative;
        font-size: 0.48rem;
        font-weight: 500;
        margin: 0 .7rem;
        color: #666;

        &::after {
          content: '';
          width: .5rem;
          height: .04rem;
          display: block;
          background-color: #666;
          position: absolute;
          left: -.7rem;
          top: 50%;
        }

        &::before {
          content: '';
          width: .5rem;
          height: .04rem;
          display: block;
          background-color: #666;
          position: absolute;
          right: -.7rem;
          top: 50%;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
        p {
          font-size: .32rem;
          line-height: .48rem;
          margin: .1rem 0;
        }
      }
    }
  }
}

.page-2 {
  .page();
  background-color: #f5e1f5;
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
}
</style>
