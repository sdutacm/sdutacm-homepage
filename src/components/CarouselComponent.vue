<script setup>
import { ref } from "vue";

const active = ref(2);
const cards = ref(Array.from({ length: 10 }, (_, i) => ({
  title: `Card ${i + 1}`,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
})));

const cardStyle = (i) => {
  const isActive = i === active.value;
  const offset = (active.value - i) / 3;
  const direction = Math.sign(active.value - i);
  const absOffset = Math.abs(active.value - i) / 3;
  const isPointerEventsAuto = isActive ? "auto" : "none";
  const opacity = Math.abs(active.value - i) >= 3 ? "0" : "1";
  const display = Math.abs(active.value - i) > 3 ? "none" : "block";

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

// export { active, cards, cardStyle };
</script>

<template>
  <div class="carousel">
    <button class="nav left" v-if="active > 0" @click="active--">
      <el-icon>
        <ArrowLeft />
      </el-icon>
    </button>
    <div v-for="(card, i) in cards" :key="i" class="card-container" :style="cardStyle(i)">
      <div class="card">
        <h2>{{ card.title }}</h2>
        <p>{{ card.content }}</p>
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
@color-purple: #8B5CF6;
@color-pink: #EC4899;
@color-gray: #9CA3AF;
@color-black: #1F2937;
@card-size: 7.36rem;

// body {
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
//   background-image: linear-gradient(45deg, @color-purple, @color-pink);
//   font-family: 'Montserrat', sans-serif;
// }

// * {
//   box-sizing: border-box;
// }

.carousel {
  position: relative;
  width: @card-size;
  height: @card-size;
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
  padding: .64rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: .32rem;
  color: @color-gray;
  text-align: justify;
  transition: all 0.3s ease-out;

  h2 {
    text-align: center;
    font-size: .64rem;
    font-weight: bold;
    margin: 0 0 0.7em;
    color: @color-black;
  }

  p,
  h2 {
    transition: all 0.3s ease-out;
    opacity: var(--active);
  }
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
    transform: translateX(100%) translatey(-50%);
  }
}
</style>