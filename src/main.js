import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/reset.css'
import 'element-plus/lib/theme-chalk/index.css';
import { ElInput, ElButton } from 'element-plus';

const app = createApp(App)
app.use(ElInput)
app.use(ElButton)
app.use(store).use(router).mount('#app')
