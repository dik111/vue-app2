<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider  collapsible>
      <div class="logo">
        <img src="./assets/logo.png" alt="">
        <span>后台管理系统</span>
      </div>
      <a-menu theme="dark"  mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span><user-outlined /><span>User</span></span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span><team-outlined /><span>Team</span></span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{background: headerColor, padding: '0 15px'}" >
        <a-dropdown>
        <a-avatar style="backgroundColor:#87d068">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
          <template #overlay>
            <a-menu>
              <a-menu-item >
                <router-link  rel="noopener noreferrer" to="/home"
                >返回首页</router-link
                >
              </a-menu-item>
              <a-menu-item key="1">
                <router-link  rel="noopener noreferrer" to="/setting"
                >设置</router-link
                >
              </a-menu-item>
              <a-menu-item key="2">
                <router-link  rel="noopener noreferrer" to="/mine"
                >个人信息</router-link
                >
              </a-menu-item>
              <a-menu-item key="2">
                <a-button type="primary" @click="loginOut">登出</a-button>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <!--路由内容展示区域-->
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue3 Application @2020 Created by yuwei
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
import {defineComponent,reactive,computed,onMounted} from 'vue'
import globalColor from '@/theme'
import router from "@/router";
import {useStore} from  'vuex'
export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
  },
  setup (props,ctx){
    const store = useStore()
    const menus = computed(() => store.homeStore.state.menus)
    onMounted(() =>{
      store.dispatch('homeStore/getMenus')
    })
    const state = reactive({
      headerColor : globalColor.headerColor
    })
    // 登出操作
    function loginOut (){
      router.push('/login')
    }
    return {
      ...state,
      loginOut,
      menus
    }
  }
  // data() {
  //   return {
  //     collapsed: false,
  //     selectedKeys: ['1'],
  //   };
  // },
});
</script>

<style lang="scss">
.logo{
  height: 64px;
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px;
  img{
    width: 64px;
    height: 64px;
    border-radius: 5px;
  }
}
.ant-layout-header{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
}
</style>
