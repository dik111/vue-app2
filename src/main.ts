import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import {Button,Layout,Menu,Breadcrumb,Avatar,Dropdown} from "ant-design-vue";

createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(Layout)
    .use(Menu)
    .use(Breadcrumb)
    .use(Avatar)
    .use(Dropdown)
    .mount('#app')
