// 整个包的入口
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'
import Switch from './switch.vue'
import CheckboxGroup from './checkbox-group.vue'
import Form from './form.vue'
import FormItem from './form-item.vue'
import './font.scss'
const components = [
  Dialog,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  CheckboxGroup,
  Form,
  FormItem,
  Button
]
const install = function (Vue) {
  // 全局注册所有组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
