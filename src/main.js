import {createApp } from 'vue'

import App from './App.vue'

import router from './router'

import store from './store'

import '../src/assets/css/reset.css'

import 'element-plus/lib/theme-chalk/index.css';

import { ElInput, ElButton, ElCalendar,ElBacktop} from 'element-plus';
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
app.use(ElButton)
app.use(ElCalendar)
app.use(ElBacktop)
app.use(VueMarkdownEditor);
app.use(store).use(router).mount('#app')
