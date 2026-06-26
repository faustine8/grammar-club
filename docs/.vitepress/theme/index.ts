import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import OutlineTitleSync from './OutlineTitleSync.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(OutlineTitleSync)
    })
  }
}
