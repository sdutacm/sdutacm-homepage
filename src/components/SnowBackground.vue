<template>
  <div class="snow-background">
    <div
      v-for="(flake, index) in flakes"
      :key="index"
      class="flake"
      :style="flakeStyle(flake)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flakes: []
    }
  },
  mounted() {
    this.createFlakes()
  },
  methods: {
    createFlakes() {
      const numFlakes = 50 // 设置雪花数量
      for (let i = 0; i < numFlakes; i++) {
        this.flakes.push({
          left: Math.random() * 100, // 雪花的初始位置
          top: Math.random() * 100 - 60,
          size: Math.random() * 10 + 1, // 雪花的大小
          speed: Math.random() * 2 + 5, // 雪花的下落速度, 越大越慢:
          opacity: Math.random() * 0.5 + 0.5 // 雪花的透明度: 0.5 ~ 1
        })
      }
    },
    flakeStyle(flake) {
      return {
        left: flake.left + '%',
        top: flake.top + '%',
        width: flake.size + 'px',
        height: flake.size + 'px',
        animationDuration: flake.speed + 's',
        opacity: flake.opacity
      }
    }
  }
}
</script>

<style scoped>
.snow-background {
  position: fixed;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.flake {
  position: absolute;
  border-radius: 50%;
  background-color: #ffffff;
  pointer-events: none;
  animation: snowfall linear infinite;
}

@keyframes snowfall {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100vh);
  }
}
</style>
