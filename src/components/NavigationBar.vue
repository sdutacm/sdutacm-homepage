<script setup>
import { ref } from 'vue'
import { sdutlinks, fastlinks } from '../data/fastlinks'
import { throttle } from '../utils'
import MenuIcon from './icon/IconMenu.vue'
import ToggleThemeButton from './ToggleThemeButton.vue'

const isFastLinkShow = ref(false) // 是否显示快速链接
const isFastLinkHover = ref(false) // 是否鼠标悬浮在快速链接上
const isDropDownHover = ref(false) // 是否鼠标悬浮在下拉菜单上
const fastlinkShowIndex = ref(1) // 当前显示的快速链接组的索引

const clickFastLinkTitle = (index) => {
  fastlinkShowIndex.value = index === fastlinkShowIndex.value ? 0 : index
}
</script>

<template>
  <header>
    <!-- 菜单(仅在移动端居左显示) -->
    <div class="menu" @click="isFastLinkShow = !isFastLinkShow">
      <MenuIcon />
    </div>

    <!-- LOGO(PC端居左, 移动端居中) -->
    <a class="logo" href="/" rel="noopener noreferrer">
      <img src="../assets/logo/sdutacm_logo_colorful.svg" alt="logo" />
      <h1>SDUTACM</h1>
    </a>
    <!-- 导航条(仅在PC端居中显示) -->
    <div class="nav">
      <div v-for="link in sdutlinks" :key="link.title" class="nav-item">
        <a target="_blank" rel="noopener noreferrer" :href="link.link">
          <span>{{ link.title }}</span>
        </a>
      </div>
      <div
        class="nav-item"
        :class="{ 'is-show': isFastLinkShow }"
        ref="pcFastLinkElement"
        @mouseover="isFastLinkHover = true"
        @mouseleave="
          throttle(() => {
            isFastLinkHover = false
          }, 200)()
        "
      >
        <span>快速链接</span>
      </div>
    </div>
    <!-- 切换主题(居右显示) -->
    <ToggleThemeButton />
  </header>

  <!-- 下拉窗口 -->
  <div
    class="dropdown"
    :style="{
      transform:
        isFastLinkShow || isFastLinkHover || isDropDownHover ? '' : 'translate(-50%, -100%)'
    }"
    @mouseover="isDropDownHover = true"
    @mouseleave="
      throttle(() => {
        isDropDownHover = false
      }, 200)()
    "
  >
    <!-- 内部快速链接 -->
    <div class="inside">
      <span class="dropdown-title">我们的项目</span>
      <div class="dropdown-group">
        <a
          v-for="item in sdutlinks"
          :key="item.link"
          :href="item.link"
          class="dropdown-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="dropdown-icon">
            <!-- <span :style="{ backgroundImage: `url(${item.icon})` }"></span> -->
            <img :src="item.icon" alt="" />
          </div>
          <div class="dropdown-content">
            <span class="dropdown-content-title">{{ item.title }}</span>
            <el-icon>
              <Right />
            </el-icon>
          </div>
        </a>
      </div>
    </div>
    <!-- 外部快速链接 -->
    <div class="outside">
      <!-- 外部容器 -->
      <div
        v-for="groups in fastlinks"
        :key="groups.index"
        class="container"
        :class="{ 'is-show': fastlinkShowIndex === groups.index }"
      >
        <span class="dropdown-title" @click="clickFastLinkTitle(groups.index)"
          >算法竞赛{{ groups.title }}</span
        >
        <div class="dropdown-group">
          <a
            v-for="item in groups.links"
            :key="item.link"
            :href="item.link"
            class="dropdown-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="dropdown-icon">
              <!-- <span v-if="item.local_icon" :style="{ backgroundImage: `url(${item.local_icon})` }"></span> -->
              <img v-if="item.icon" :src="item.icon" alt="" />
              <span v-else>
                {{ item.title[0] }}
              </span>
            </div>
            <div class="dropdown-content">
              <span class="dropdown-content-title" :class="{ desc: item.desc !== '' }">{{
                item.title
              }}</span>
              <span class="dropdown-content-desc">{{ item.desc }}</span>
              <el-icon>
                <Right />
              </el-icon>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
// 全局样式
// 电脑 ✅ 平板 ✅ 手机 ✅
header {
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.6rem;
  width: 100%;
  min-width: var(--ah-breakpoint-xs);
  height: 1.6rem;
  background-color: var(--ah-c-background-header);
  box-shadow: var(--ah-s-shadow-2);

  .menu {
    display: none;
    width: 0.6rem;
    height: 0.6rem;
    cursor: pointer;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 100%;
    flex-direction: row;
    gap: 0.2rem;
    user-select: none;
    cursor: pointer;

    img {
      width: 1rem;
      height: 1rem;
    }

    h1 {
      font-size: 0.64rem;
      font-weight: 700;
      color: var(--ah-c-text1);
    }
  }

  .nav {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 0.4rem;
    transform: translate(-50%, -50%);

    .nav-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 100%;
      cursor: pointer;

      a,
      span {
        font-size: 0.36rem;
        font-weight: 500;
        text-decoration: none;
        color: var(--ah-c-text1);
        transition: transform var(--ah-t-short);
        user-select: none;
      }

      &::after {
        position: absolute;
        bottom: 20%;
        left: 50%;
        display: block;
        width: 60%;
        height: 0.04rem;
        background-color: var(--ah-c-text1);
        opacity: 0;
        transition:
          transform var(--ah-t-short),
          opacity var(--ah-t-short);
        content: '';
        transform: translate(-50%, 0);
        animation: hide-animation 0.3s forwards;
      }

      &:hover {
        &::after {
          transform: translate(-50%, -0.1rem);
          opacity: 1;
        }

        a,
        span {
          transform: translate(0, -12%);
        }
      }

      &.is-show::after {
        opacity: 1;
        animation: show-animation 0.3s forwards;
      }
    }
  }
}

// 下拉窗口
.dropdown {
  position: fixed;
  top: 1.2rem;
  left: 50%;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  padding: 0.8rem;
  width: 100%;
  gap: 0.2rem;
  min-width: var(--ah-breakpoint-xs);
  max-width: 28rem;
  background-color: var(--ah-c-background-transparent-drop-down);
  box-shadow: var(--ah-s-shadow-2);
  backdrop-filter: blur(4rem);
  transition: transform var(--ah-t-long) ease-in-out;
  transform: translate(-50%, 0);

  // 内部快速链接
  .inside {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
  }

  // 外部快速链接
  .outside {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 0.2rem;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
    }
  }

  // 分段标题
  .dropdown-title {
    display: flex;
    justify-content: space-between;
    padding-right: 0.4rem;
    width: 100%;
    font-size: 0.48rem;
    font-weight: 700;
    color: var(--ah-c-text1);
    user-select: none;
  }

  // 分段内容组
  .dropdown-group {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-height: 10rem;
    transition: max-height var(--ah-t-long);
    flex-wrap: wrap;

    // 每个内容组包含了很多个链接单元 item
    .dropdown-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      // width: 50%;
      height: 1rem;

      .dropdown-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 18%;

        img,
        span {
          display: block;
          border-radius: 10%;
          width: 0.48rem;
          height: 0.48rem;
          font-size: 0.44rem;
          font-weight: 700;
          text-align: center;
          color: var(--ah-c-text1);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          line-height: 0.5rem;
        }
      }

      .dropdown-content {
        position: relative;
        width: 82%;
        height: 100%;

        .dropdown-content-title {
          position: absolute;
          top: 50%;
          left: 0.2rem;
          overflow: hidden;
          padding-right: 0.32rem;
          width: 100%;
          // font-size: 0.32rem;
          font-weight: 500;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--ah-c-text1);
          transition: transform var(--ah-t-short);
          transform: translate(0, -50%);
          line-height: 0.5rem;
          user-select: none;
        }

        .dropdown-content-desc {
          position: absolute;
          top: 50%;
          left: 0.2rem;
          overflow: hidden;
          padding-right: 0.32rem;
          width: 100%;
          font-size: 0.24rem;
          font-weight: 500;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--ah-c-text3);
          opacity: 0;
          visibility: hidden;
          transition:
            opacity var(--ah-t-short),
            transform var(--ah-t-short);
          transform: translate(0, -50%);
          line-height: 0.4rem;
          user-select: none;
        }

        .el-icon {
          position: absolute;
          top: 50%;
          right: 0.06rem;
          display: none;
          font-size: 0.32rem;
          color: var(--ah-c-text1);
          transform: translate(0, -50%);

          &:hover {
            color: var(--ah-c-text3);
          }
        }
      }

      &:hover {
        background-color: var(--ah-c-background-transparent-drop-down-hover);

        .dropdown-content-title:is(.desc) {
          transform: translate(0, -90%);
        }

        .dropdown-content-desc {
          opacity: 1;
          visibility: visible;
          transform: translate(0, 10%);
        }

        .el-icon {
          display: flex;
        }
      }
    }
  }
}

// 仅PC端样式
// 电脑 ✅ 平板 ❌ 手机 ❌
@media screen and (width >=1101px) {
  .dropdown-item {
    width: 48%;
  }
}

// 放了一些非pc端的主题样式在这里
// 电脑 ❌ 平板 ✅ 手机 ✅
@media screen and (width <=1100px) {
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

  .dropdown {
    .dropdown-item {
      width: 33%;
    }

    .inside {
      display: flex; // none
    }

    .outside {
      flex-direction: column; // row

      .dropdown-title {
        &::after {
          content: '\276F';
          text-align: center;
          transform: rotate(270deg);
          transition: transform var(--ah-t-long);
        }
      }

      .container:not(.is-show) {
        .dropdown-title::after {
          transform: rotate(90deg);
        }

        .dropdown-group {
          // display: none;
          max-height: 0;
          transition: max-height var(--ah-t-short);
        }
      }
    }
  }
}

// 非移动端展示时的 "我们的项目"板块的交互样式
// 电脑 ✅ 平板 ✅ 手机 ❌
@media screen and (width >=601px) {
  .dropdown-content-title {
    font-size: 0.32rem;
  }
}

// 移动端的样式
// 电脑 ❌ 平板 ❌ 手机 ✅
@media screen and (width <=600px) {
  .dropdown {
    padding: 0.8rem 0.4rem;

    .dropdown-group .dropdown-item .dropdown-icon {

      img,
      span {
        display: block;
        border-radius: 10%;
        width: 0.40rem;
        height: 0.40rem;
        font-size: 0.36rem;
        font-weight: 700;
      }
    }

    .dropdown-title {
      font-size: 0.36rem;
    }

    .dropdown-content-title {
      font-size: 0.28rem;
    }
  }
}
</style>
