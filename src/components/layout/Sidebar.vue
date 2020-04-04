<template>
  <el-aside width="250px">
    <div class="aside">
      <div class="header">
        <img src="../../assets/imgs/logo.svg" width="50px" height="50px" />
        <span>外卖商家中心</span>
      </div>

      <!-- 左侧导航 -->
      <el-menu :default-active="curPath" router class="el-menu">
        <template v-for="item in accessMenu">
          <!-- 没有儿子 -->
          <el-menu-item v-if="!item.children" :index="item.path" :key="item.title">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <!-- 有儿子 -->
          <el-submenu v-else :index="item.title" :key="item.title">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span class="title">{{item.title}}</span>
            </template>

            <el-menu-item :index="o.path" v-for="o in item.children" :key="o.title">{{o.title}}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      curPath: "/index",
      menu: [
        {
          path: "/index",
          title: "后台首页",
          icon: "icon-shouye",
          roles:['super','normal']
        },
        {
          path: "/index/orderManage",
          title: "订单管理",
          icon: "icon-order",
          roles:['super','normal']
        },
        {
          title: "商品管理",
          icon: "icon-goods",
          children: [
            {
              path: "/index/productsManage/list",
              title: "商品列表"
            },
            {
              path: "/index/productsManage/add",
              title: "添加商品"
            }
          ],
          roles:['super']
        },
        {
          title: "店铺管理",
          icon: "icon-order",
          path: "/index/shopManage",
          roles:['super']
        },
        {
          title: "账号管理",
          icon: "icon-user",
          children: [
            {
              title: "账号列表",
              path: "/index/accountManage/list"
            },
            {
              title: "添加账号",
              path: "/index/accountManage/add"
            },
            {
              title: "修改密码",
              path: "/index/accountManage/changePwd"
            }
          ],
            roles:['super']
        },
        {
          title: "销售统计",
          icon: "icon-xiazai7",
          children: [
            {
              title: "商品统计",
              path: "/index/saleStatistics/productStatistics"
            },
            {
              title: "订单统计",
              path: "/index/saleStatistics/orderStatistics"
            }
          ],
            roles:['super','normal']
        }
      ],
      accessMenu:[],
    };
  },
  created() {
    const role = localStorage.getItem('role');
  this.accessMenu = this.menu.filter((item)=>item.roles.includes(role));
    //刷新后保持侧边栏的选中状态
    this.curPath = this.$route.path;
  }
};
</script>

<style lang="less" >
.aside {
  background: #304156;
  height: 100%;
  color: #fff;
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    padding-left: 20px;
    img {
      margin-right: 10px;
    }
    span {
      font-weight: bold;
    }
  }
  .title {
    color: #fff;
  }
  .el-menu {
    .iconfont {
      color: #fff;
      margin-right: 10px;
    }
  }
  .el-menu,
  .el-menu-item,
  .el-submenu {
    background: #304156;
    color: #fff;

    .el-submenu__title {
      &:hover {
        background: #304156;
      }
      &:focus {
        //  background: #202F3F;
      }
    }
  }

  .el-menu-item {
    &.is-active {
      background: #202f3f;
    }
    // &:hover {
    //   background: rgba(0, 0, 0, 0.1);
    // }
  }
}
</style>