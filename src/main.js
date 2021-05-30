import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/reset.css'
import 'element-plus/lib/theme-chalk/index.css';
import { ElInput, ElButton, ElCalendar,ElBacktop} from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
const app = createApp(App)
app.use(ElInput)
app.use(ElButton)
locale.use(lang)
app.use(ElCalendar)
app.use(ElBacktop)
app.use(store).use(router).mount('#app')
