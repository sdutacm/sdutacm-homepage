<script setup>
import { ref } from 'vue'
// import { sdutlinks, fastlinks } from './data/fastlinks'

const acitveProject = ref(0) // 在“我们的项目”板块中当前激活的项目

const clickProject = (target) => {
  acitveProject.value = target === acitveProject.value ? 0 : target
}
</script>

<template>
  <div class="project">
    <div
      class="project-item1 project-item"
      :class="{ active: acitveProject === 1 }"
      @click="clickProject(1)"
    >
      <div class="project-bubble"></div>
      <span class="project-title">SDUT OJ 3</span>
      <p class="project-summary">
        <span>Online Judge 3，自研第三代在线评测系统，2018 年内测，2019 年正式上线。</span>
        <span
          >使用全栈同构技术栈开发，结合自研的次时代 Top 0
          性能的评测姬，轻松服务近千人的大型比赛。</span
        >
      </p>
      <div class="project-links">
        <div class="link-item">
          <div class="img" id="img-1-1"></div>
          <a class="link" target="_blank" href="https://acm.sdut.edu.cn/onlinejudge3/">前往</a>
        </div>
        <div class="link-item">
          <div class="img" id="img-1-2"></div>
          <a class="link" target="_blank" href="https://acm.sdut.edu.cn/onlinejudge3/contests"
            >竞赛</a
          >
        </div>
        <div class="link-item">
          <div class="img" id="img-1-3"></div>
          <a class="link" target="_blank" href="https://acm.sdut.edu.cn/onlinejudge3/users">排名</a>
        </div>
        <div class="link-item">
          <div class="img" id="img-1-4"></div>
          <a class="link" target="_blank" href="https://github.com/sdutacm/onlinejudge3">源码</a>
        </div>
      </div>
    </div>
    <div
      class="project-item2 project-item"
      :class="{ active: acitveProject === 2 }"
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
        <div class="link-item">
          <div class="img" id="img-2-1"></div>
          <a class="link" target="_blank" href="https://rl.algoux.cn/">前往</a>
        </div>
        <div class="link-item">
          <div class="img" id="img-2-2"></div>
          <a class="link" target="_blank" href="https://rl.algoux.cn/search?kw=ICPC">探索</a>
        </div>
        <div class="link-item">
          <div class="img" id="img-2-3"></div>
          <a class="link" target="_blank" href="https://rl.algoux.cn/collection/official"
            >榜单合集</a
          >
        </div>
        <div class="link-item">
          <div class="img" id="img-2-4"></div>
          <a class="link" target="_blank" href="https://rl.algoux.cn/playground">游乐场</a>
        </div>
      </div>
    </div>
    <div
      class="project-item3 project-item"
      :class="{ active: acitveProject === 3 }"
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
        <div class="link-item">
          <div class="img" id="img-3-1"></div>
          <a class="link" target="_blank" href="https://lcl-magicbook.sdutacm.cn/">前往</a>
        </div>
        <div class="link-item">
          <div class="img" id="img-3-2"></div>
          <a class="link" target="_blank" href="https://lcl-magicbook.sdutacm.cn/missions"
            >见习任务</a
          >
        </div>
        <div class="link-item">
          <div class="img" id="img-3-3"></div>
          <a class="link" target="_blank" href="https://lcl-magicbook.sdutacm.cn/catalog"
            >魔法目录</a
          >
        </div>
        <div class="link-item">
          <div class="img" id="img-3-4"></div>
          <a class="link" target="_blank" href="https://lcl-magicbook.sdutacm.cn/pleasant-gallery"
            >古怪展馆</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 我们的项目
.project {
  display: flex;
  width: 100%;
  max-width: 20rem;
  height: 100%;
  flex-direction: column;
  place-self: center center;
  gap: 0.8rem;

  .project-item {
    position: relative;
    overflow: hidden;
    border-radius: 0.2rem;
    width: 100%;
    height: 5rem;
    transition: box-shadow var(--ah-t-long);

    .project-bubble {
      position: absolute;
      top: -5rem;
      right: -4.5rem;
      border-radius: 50%;
      width: 12rem;
      height: 12rem;
      background-color: var(--ah-c-background-card);
      transition:
        transform var(--ah-t-long),
        box-shadow var(--ah-t-long);
    }

    .project-title {
      position: absolute;
      top: 2.2rem;
      right: 0;
      width: 40%;
      font-size: 0.48rem;
      font-weight: 700;
      text-align: center;
      color: var(--ah-c-text2);
      transition: transform var(--ah-t-long);
      cursor: default;
    }

    .project-summary {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 0 1rem;
      width: 60%;
      height: 100%;
      color: var(--ah-c-text2);
      opacity: 0;
      transition: opacity 0.2s 0s;
      flex-direction: column;
      user-select: none;

      span {
        margin: 0.2rem 0;
        font-size: 0.32rem;
        font-weight: 500;
        line-height: 0.48rem;
        user-select: none;
      }
    }

    .project-links {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40%;
      height: 80%;
      max-height: 0;
      opacity: 0;
      transition: opacity var(--ah-t-short) 0s;
      flex-direction: column;

      .link-item {
        width: 30%;
        height: 100%;
        max-height: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .img {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 5rem;
          width: 0;
          opacity: 0;
          transform: translateX(-100%);
          transition:
            opacity 0.2s ease-in-out,
            width 0s ease-in-out;
        }

        .link {
          position: relative;
          width: 100%;
          height: 100%;
          color: var(--ah-c-text2);
          font-size: 0.32rem;
          text-align: center;
          line-height: 0.8rem;
          font-weight: 500;

          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            display: block;
            width: 20%;
            height: 0.04rem;
            background-color: var(--ah-c-text1);
            opacity: 0;
            transition:
              width var(--ah-t-short),
              opacity var(--ah-t-short);
            transform: translateX(-50%);
          }
        }

        &:hover {
          .img {
            width: 150%;
            opacity: 1;
          }

          .link {
            &::after {
              width: 60%;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  // 我们的项目的单独配置: 背景图 + 链接预览图
  .project-item1 {
    background:
      url('../../src/assets/img/sdutacm-homepage-project-oj3-logo.png') no-repeat 10% 50% / 50%,
      #f4f4f4;

    .project-links {
      #img-1-1 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-oj3-home.png') no-repeat left / cover;
      }
      #img-1-2 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-oj3-contests.png') no-repeat left /
            cover;
      }

      #img-1-3 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-oj3-users.png') no-repeat left / cover;
      }

      #img-1-4 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-oj3-github.png') no-repeat left / cover;
      }
    }
  }

  .project-item2 {
    background:
      url('../../src/assets/img/sdutacm-homepage-project-rankland-logo.png') no-repeat 10% 50% / 50%,
      #fff2df;

    .project-links {
      #img-2-1 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-rankland-home.png') no-repeat left /
            cover;
      }

      #img-2-2 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-rankland-search.png') no-repeat left /
            cover;
      }

      #img-2-3 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-rankland-collection.png') no-repeat
            left / cover;
      }

      #img-2-4 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-rankland-playground.png') no-repeat
            left / cover;
      }
    }
  }

  .project-item3 {
    background:
      url('../../src/assets/img/sdutacm-homepage-project-magicbook-logo.png') no-repeat 10% 50% /
        50%,
      #d6e6f2;

    .project-links {
      #img-3-1 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-magicbook-home@2.png') no-repeat left /
            cover;
      }

      #img-3-2 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-magicbook-missions@2.png') no-repeat
            left / cover;
      }

      #img-3-3 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-magicbook-catalog@2.png') no-repeat
            left / cover;
      }

      #img-3-4 {
        background:
          var(--ah-bg-project),
          url('../../src/assets/img/sdutacm-homepage-project-magicbook-gallery@2.png') no-repeat
            left / cover;
      }
    }
  }
}

// // 非移动端展示时的 "我们的项目"板块的交互样式
// // 电脑 ✅ 平板 ✅ 手机 ❌
@media screen and (width >=601px) {
  .project-item {
    &.active {
      .project-bubble {
        transform: scale(3.5);
      }

      .project-title {
        transform: translateY(-1.6rem);
      }

      .project-summary {
        opacity: 1;
        transition: opacity var(--ah-t-long) var(--ah-t-short);

        span {
          user-select: auto;
        }
      }

      .project-links {
        max-height: 10rem;
        opacity: 1;
        transition: opacity var(--ah-t-long) var(--ah-t-short);
      }
    }

    &:hover:not(.active) {
      .project-bubble {
        transform: scale(1.2);
        box-shadow: var(--ah-s-shadow-1);
      }
    }

    &:hover {
      box-shadow: var(--ah-s-shadow-1);
    }
  }
}

// ipad端的样式. 尾随注释是在>1100px时的样式
// 电脑 ❌ 平板 ✅ 手机 ❌
@media screen and (width >=601px) and (width <=1100px) {
  .project {
    width: 100%; // 100%
    max-width: 14rem; // 20rem

    .project-item {
      height: 4.5rem; // 5rem
      background-size: 40%;

      .project-bubble {
        top: -3rem; // -5rem
        right: -3rem; // -4.5rem
        width: 8rem; // 12rem
        height: 8rem; // 12rem
      }

      .project-title {
        width: 30%; // 40%
        top: 2rem; // 2.2rem
        font-size: 0.4rem; // 0.48rem
      }

      .project-summary {
        padding: 0 0.4rem;

        span {
          font-size: 0.28rem; // 0.32rem
          line-height: 0.4rem; // 0.48rem
        }
      }

      // .project-links {
      //   .p-link {
      //     width: 50%; // 30%
      //     font-size: 0.28rem; // 0.32rem
      //     line-height: 0.6rem; // 0.8rem
      //   }
      // }

      .project-links {
        width: 30%; // 40%

        .link-item {
          .img {
            height: 4.5rem; // 5rem
          }

          .link {
            font-size: 0.28rem; // 0.32rem
            line-height: 0.6rem; // 0.8rem
          }

          &:hover {
            .img {
              width: 230%; // 150%
            }
          }
        }
      }

      &:hover:not(.active) {
        .project-bubble {
          // transform: scale(1.1);
          box-shadow: var(--ah-s-shadow-1);
        }
      }

      &:hover {
        box-shadow: var(--ah-s-shadow-1);
      }
    }
  }
}

// 移动端的样式
// 电脑 ❌ 平板 ❌ 手机 ✅
@media screen and (width <=600px) {
  .project {
    width: 100%;

    .project-item {
      height: 7rem;
      background-position: 50% 20%;
      background-size: 60%;

      .project-bubble {
        top: 80%;
        left: 50%;
        width: 12rem;
        height: 12rem;
        transform: translate(-50%, -20%);
      }

      .project-title {
        top: 70%;
        right: 50%;
        transform: translate(50%, -20%);
      }

      .project-summary {
        padding: 0 0.4rem;
        width: 100%;
      }

      .project-links {
        padding: 0.4rem;
        margin-bottom: 0.4rem;
        width: 100%;
        height: auto;
        flex-direction: row;
        gap: 0.2rem;

        .link-item .link {
          font-size: 0.28rem;
          line-height: 0.64rem;
          background-color: var(--ah-c-background-button);
          border-radius: 0.2rem;
        }
      }

      &.active {
        .project-bubble {
          transform: translate(-50%, -50%) scale(1.5);
        }

        .project-title {
          transform: translate(50%, -4rem);
        }

        .project-summary {
          opacity: 1;
          transition: opacity var(--ah-t-long) var(--ah-t-short);

          span {
            user-select: auto;
          }
        }

        .project-links {
          z-index: 30;
          opacity: 1;
          transition: opacity var(--ah-t-long) var(--ah-t-short);
        }
      }
    }
  }
}
</style>
