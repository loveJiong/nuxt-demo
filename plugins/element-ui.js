// 全局使用
import Vue from 'vue'
import Element from 'element-ui'

// 按需使用
import { Button, Loading, MessageBox } from 'element-ui'

export default () => {
  // 全局使用
  Vue.use(Element)
  // 按需使用
  Vue.use(Button)
  // 注入 $root
  Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgBox = MessageBox
}
