import {createApp } from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

import '../src/assets/css/reset.css'

import 'element-plus/lib/theme-chalk/index.css';

import { ElInput, ElButton, ElCalendar,ElBacktop,ElSelect,ElOption,ElDatePicker,ElPagination, ElMain,ElMessageBox,ElMessage} from 'element-plus';
// 设置elemnt 中文
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
locale.use(lang)
//  md编辑器
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// 瀑布流
// import waterfall from 'vue-waterfall2'  
// highlightjs 核心代码
import hljs from 'highlight.js/lib/core';
// 按需引入语言包
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
VueMarkdownEditor.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(App)

app.use(ElInput)
app.use(ElSelect)
app.use(ElButton)
app.use(ElCalendar)
app.use(ElBacktop)
app.use(ElOption)
app.use(ElDatePicker)
app.use(ElPagination)
app.use(ElMain)
app.use(ElMessageBox)
app.use(ElMessage)
app.use(VueMarkdownEditor);

// app.use(waterfall)
app.use(store).use(router).mount('#app')
