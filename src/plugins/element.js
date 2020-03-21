import Vue from 'vue'
import {
  Button,
  Select,
  Input,
  Form,
  FormItem,
  Message // 弹框提示
} from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$message = Message

// 按需引入element-ui
// export default Vue => {
//   Vue.component(Button.name, Button)
//   Vue.component(Select.name, Select)
//   Vue.component(Input.name, Input)
//   Vue.component(Form.name, Form)
//   Vue.component(FormItem.name, FormItem)
// }
