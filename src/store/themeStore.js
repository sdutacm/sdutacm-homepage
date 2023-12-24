import { defineStore } from 'pinia'
import { ref } from 'vue'

const themeListAll = ['light-theme', 'dark-theme', 'christmas-theme']

export const useThemeStore = defineStore(
  'theme',
  () => {
    const theme = ref('light-theme')

    // 设置主题颜色
    const setTheme = (themeName) => {
      if (themeListAll.includes(themeName)) {
        theme.value = themeName
      } else {
        console.error('themeName is not in themeListAll')
      }
    }

    const getTheme = () => {
      return theme.value
    }

    return { theme, setTheme, getTheme }
  }
)