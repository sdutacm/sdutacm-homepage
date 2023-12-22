<template>
  <!-- 极光背景 -->
  <div class="jumbo-container">
    <div class="jumbo"></div>
  </div>
</template>

<style lang="less" scoped>
/* 动画容器 */
.jumbo-container {
  position: fixed;
  z-index: 0;
  overflow: hidden;
  inset: 0;

  /* 动画细节样式 */
  .jumbo {
    position: absolute;
    background-position:
      50% 50%,
      50% 50%;
    background-size: 300%, 200%;
    opacity: 0.5;
    filter: var(--stripes-filter);
    inset: 0;
    background-image: var(--stripes-style), var(--rainbow);
    mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: var(--stripes-style), var(--rainbow);
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