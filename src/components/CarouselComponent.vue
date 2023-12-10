<script setup>
import { ref } from "vue";

// 导入参数
const news = ref([
  {
    title: "2021年山东省大学生程序设计竞赛（SDUT校赛）",
    content:
      "2021年山东省大学生程序设计竞赛（SDUT校赛）将于2021年10月16日在山东理工大学举行。",
    imgUrl: "@/src/assets/news/15周年庆典.jpeg",
  },
  {
    title: "2022年山东省大学生程序设计竞赛（SDUT校赛）",
    content:
      "2022年山东省大学生程序设计竞赛（SDUT校赛）将于2022年10月16日在山东理工大学举行。",
    imgUrl: "../assets/news/15周年庆典.jpeg",
  },
  {
    title: "2022年山东省大学生程序设计竞赛（SDUT校赛）",
    content:
      "2022年山东省大学生程序设计竞赛（SDUT校赛）将于2022年10月16日在山东理工大学举行。",
    imgUrl: "../assets/news/15周年庆典.jpeg",
  },
  {
    title: "2022年山东省大学生程序设计竞赛（SDUT校赛）",
    content:
      "2022年山东省大学生程序设计竞赛（SDUT校赛）将于2022年10月16日在山东理工大学举行。",
    imgUrl: "../assets/news/15周年庆典.jpeg",
  },
]);

const active = ref(2);
const cards = ref(Array.from({ length: 4 }, (_, i) => ({
  title: `Card ${i + 1}`,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
})));

const cardStyle = (i) => {
  const isActive = i === active.value; // 是否是当前激活的卡片
  const offset = (active.value - i) / 3; // 偏移量
  const direction = Math.sign(active.value - i); // 方向
  const absOffset = Math.abs(active.value - i) / 3; // 偏移量的绝对值
  const isPointerEventsAuto = isActive ? "auto" : "none"; // 是否允许点击
  const opacity = Math.abs(active.value - i) >= 3 ? "0" : "1"; // 透明度
  const display = Math.abs(active.value - i) > 3 ? "none" : "block"; // 是否显示

  return {
    "--active": isActive ? 1 : 0,
    "--offset": offset,
    "--direction": direction,
    "--abs-offset": absOffset,
    "pointer-events": isPointerEventsAuto,
    opacity,
    display,
  };
};
</script>

<template>
  <div class="carousel">
    <button class="nav left" v-if="active > 0" @click="active--">
      <el-icon>
        <ArrowLeft />
      </el-icon>
    </button>
    <div v-for="(card, i) in news" :key="i" class="card-container" :style="cardStyle(i)">
      <div class="card">
        <div class="card-content"
          :style="{ backgroundImage: `url(${card.imgUrl})`}"
        >
          <div class="info">
            <h2>{{ card.title }}</h2>
            <p>{{ card.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <button class="nav right" v-if="active < cards.length - 1" @click="active++">
      <el-icon>
        <ArrowRight />
      </el-icon>
    </button>
  </div>
</template>

<style scoped lang="less">
.carousel {
  position: relative;
  width: 80%;
  max-width: 11rem;
  height: 7.36rem;
  perspective: 500px;
  transform-style: preserve-3d;
}

.card-container {
  position: absolute;
  width: 100%;
  height: 100%;
  transform:
    rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -9.6rem)) translateX(calc(var(--direction) * -1.6rem));
  filter: blur(calc(var(--abs-offset) * .32rem));
  transition: all 0.3s ease-out;
}

.card {
  width: 100%;
  height: 100%;
  // padding: .64rem;
  background-color: hsl(200deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: .32rem;
  text-align: justify;
  transition: all 0.3s ease-out;

  .card-content {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: .32rem;
    // background-image: url(../assets/news/15周年庆典.jpeg);
  }

  // h2 {
  //   text-align: center;
  //   font-size: .64rem;
  //   font-weight: bold;
  //   margin: 0 0 0.7em;
  // }

  // p,
  // h2 {
  //   transition: all .3s ease-out;
  //   opacity: var(--active);
  // }
}

.nav {
  color: white;
  font-size: 1.6rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;

  &.left {
    transform: translateX(-100%) translatey(-50%);
  }

  &.right {
    right: 0;
    transform: translateX(100%) translateY(-50%);
  }
}

@media screen and (max-width: 1024px) {
  .card-container {
    transform:
      rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -9.6rem)) translateX(calc(var(--direction) * -.6rem));
  }

  .nav {
    font-size: 1rem;

    &.left {
      transform: translateX(-90%) translatey(-50%);
    }

    &.right {
      right: 0;
      transform: translateX(90%) translateY(-50%);
    }
  }
}
</style>