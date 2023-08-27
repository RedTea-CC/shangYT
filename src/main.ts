import { createApp } from 'vue'
// 清除默认样式
import '@/style/reset.scss'
import App from './App.vue'
// 全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'


const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.mount('#app')
