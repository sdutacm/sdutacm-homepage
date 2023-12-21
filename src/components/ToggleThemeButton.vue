<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SunIcon from './icon/IconSun.vue'
import MoonIcon from './icon/IconMoon.vue'
import ChristmasIcon from './icon/IconChristmas.vue'

const HtmlElement = document.querySelector('html')
const themeList = ['light-theme', 'dark-theme', 'christmas-theme'] // tips: light-theme是默认主题, 这个类下面并没有属性, 默认如此
const currentThemeList = ref(themeList.slice(0, 2))
const currentTheme = ref('light-theme')
const wrongWords = [
  '🤔学徒, 你的主题名字写错了吧?',
  '😤好好检查你的咒语！',
  '😒出门右拐，学费不退！',
  '🫠要不要试一下“阿布拉卡达布拉”？',
  '🫥我觉得你的咒语有点问题',
  '😳你小子指定是故意的'
]

onMounted(() => {
  // 检查localStorage中是否有主题设置
  const theme = JSON.parse(localStorage.getItem('theme'))
  if (theme) {
    theme.forEach((item) => {
      if (!currentThemeList.value.includes(item)) {
        currentThemeList.value.push(item)
      }
    })
  } else {
    localStorage.setItem('theme', JSON.stringify(currentThemeList.value))
  }
  // 检查是否为深色主题
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDark) {
    addTheme('dark-theme')
  }
  // 挂载window上的方法
  window.magic = (theme) => addTheme(theme)
  window.magic1225 = () => addTheme('christmas-theme')
  window.magicClear = () => clearAllTheme()
})

onUnmounted(() => {
  // 卸载window上的方法
  window.magic = null
  window.magic1225 = null
  window.magicClear = null
})

// 添加主题
const addTheme = (theme) => {
  if (theme === '阿布拉卡达布拉') {
    console.log('你觉得我应该做点什么？...')
    setTimeout(() => {
      console.log('😤📱原神，启动！')
    }, 5000)
    return
  }
  // 检查如果合法, 则修改为该主题
  if (!theme.endsWith('-theme')) {
    theme += '-theme'
  }
  // 判断后缀是否为-theme
  if (themeList.includes(theme)) {
    currentTheme.value = theme
    HtmlElement.classList.remove(...themeList)
    HtmlElement.classList.add(theme)
    if (theme === 'light-theme') {
      console.log('🌞天亮了~')
    } else if (theme === 'dark-theme') {
      console.log('🌚天黑了~')
    } else if (theme === 'christmas-theme') {
      console.log('🎄Merry Christmas🎄')
    }
    // 如果不存在于用户的列表中, 则添加到currentTheme和localStorage中
    if (!currentThemeList.value.includes(theme)) {
      currentThemeList.value.push(theme)
      localStorage.setItem('theme', JSON.stringify(currentThemeList.value))
    }
  } else {
    // 输出一些可爱的提示😘
    console.log(wrongWords[Math.floor(Math.random() * wrongWords.length)])
  }
}

// 清空所有
const clearAllTheme = () => {
  localStorage.removeItem('theme')
  currentThemeList.value = themeList.slice(0, 2)
  console.log('🥴我们这是在哪里？')
}

// 切换主题
const toggleTheme = () => {
  // 选择主题: 如果当前主题是最后一个, 则切换到第一个, 否则切换到下一个
  const nextIndex = currentThemeList.value.indexOf(currentTheme.value) + 1
  const nextTheme =
    nextIndex === currentThemeList.value.length
      ? currentThemeList.value[0]
      : currentThemeList.value[nextIndex]
  // 切换主题
  HtmlElement.classList.remove(...themeList)
  HtmlElement.classList.add(nextTheme)
  currentTheme.value = nextTheme
}
</script>

<template>
  <div class="icon" @click="toggleTheme()">
    <SunIcon v-if="currentTheme === themeList[0]" />
    <MoonIcon v-else-if="currentTheme === themeList[1]" />
    <ChristmasIcon v-else-if="currentTheme === themeList[2]" />
  </div>
</template>

<style scoped>
.icon {
  width: 0.6rem;
  height: 0.6rem;
  cursor: pointer;
}
</style>
