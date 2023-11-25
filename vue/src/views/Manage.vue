<template>
  <el-container style="min-height: 100vh">

    <el-aside :width="sideWidth + 'px'" style="border: 0px;">
      <!-- <Aside :isCollapse="isCollapse" :logoTextShow="logoTextShow" /> -->
      <el-menu style="min-height: 100%; overflow-x: hidden;" class="menu" background-color="#000000" text-color="#2483ff"
        active-text-color="#fff200" :collapse-transition="false" :collapse="isCollapse" router>
        <div style="height: 60px; line-height: 60px; text-align: center; width: 200px;">
          <span class="baseiconfont icon-tuopu" style="font-size: 30px;color: white;padding: 10px;"></span>
          <b style="color: white" v-show="logoTextShow">拓扑系统</b>
        </div>
        <el-menu-item index="/home">
          <template slot="title">
            <div class="lii">
              <a>
              <i class="baseiconfont icon-zhuye"></i>
              <span slot="title">主页</span>
              </a>
            </div>
          </template>
        </el-menu-item>
        <el-menu-item index="/IpNodeDetectProcess">
          <span class="baseiconfont icon-leidatance"></span>
          <span slot="title">探测任务</span>
        </el-menu-item>
        <el-menu-item index="/PathManage">
          <span class="baseiconfont icon-orbit-full"></span>
          <span slot="title">拓扑路径管理</span>
        </el-menu-item>

        <el-menu-item index="/IpNodeMap">
          <span class="baseiconfont icon-ef-zhongdiangenzong-gongju"></span>
          <span slot="title">关键节点识别</span>
        </el-menu-item>
        <el-menu-item index="/TopologyResult">
          <span class="baseiconfont icon-wangluotuopu"></span>
          <span slot="title">抽象拓扑图</span>
        </el-menu-item>
      </el-menu>
      <div></div>
    </el-aside>

    <el-container>
      <el-header>
        <div style="line-height: 60px; display: flex">
          <div style="flex: 1;" class="header">
            <span :class="'el-icon-s-fold'" style=" color:white;"></span>
            <el-breadcrumb separator="/" style="display: inline-block; margin-left: 10px;">
              <el-breadcrumb-item>
                <span style=" color:white;">{{ currentPathName }}</span>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </el-header>

      <el-main>
        <!--        表示当前页面的子路由会在 <router-view /> 里面展示-->
        <router-view />
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      collapseBtnClass: 'el-icon-s-fold',
      isCollapse: false,
      sideWidth: 200,
      logoTextShow: true,
    }
  },
  components: {

  },
  computed: {
    currentPathName() {
      return this.$store.state.currentPathName;　　//需要监听的数据
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.menu {
  border: none !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.lii {
  position: relative !important;
  list-style: none !important;
  width: 80px !important;
  height: 80px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  cursor: pointer !important;
  transition: .5s !important;
}

.lii::before {
  content: '';
  position: absolute;
  inset: 30px;
  box-shadow: 0 0 0 10px #2483ff, 0 0 0 20px black, 0 0 0 22px #2483ff;
  transition: .5s;
}

.lii:hover::before {
  inset: 15px;
}

.lii::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: black;
  transform: rotate(45deg);
  transition: .5s;
}

.lii:hover::after {
  inset: -10px;
  transform: rotate(0deg);
}

.lii:nth-child(2):hover::after {
  inset: 0px;
}

.lii a {
  position: relative;
  text-decoration: none;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lii a i {
  font-size: 2em;
  transition: .5s;
  color: #2483ff;
}

.lii:hover a i {
  color: #2483ff;
  transform: translateY(-40%);
}

.lii a span {
  position: absolute;
  font-family: consolas;
  color: #2483ff;
  opacity: 0;
  transition: .5s;
  transform: scale(0) translateY(200%);
}

.lii:hover a span {
  opacity: 1;
  transform: scale(1) translateY(100%);

}

.lii:hover a i,
.lii:hover a span {
  filter: drop-shadow(0 0 20px #2483ff)drop-shadow(0 0 40px #2483ff)drop-shadow(0 0 60px #2483ff);
}
</style>