<template>
  <el-header class="right-header">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item
        :to="{ path: item.path }"
        v-for="(item,index) in breadcrumbs"
        :key="index"
      >{{item.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="setting">
      <div>欢迎您，{{accountInfo.account}}</div>
      <el-dropdown @command="handleCommand">
        <i class="el-icon-setting" style="margin-right: 15px;cursor:pointer"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal-center">个人中心</el-dropdown-item>
          <el-dropdown-item command="loginout">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { getAccountInfoApi } from "../../apis/users";
export default {
  data() {
    return {
      curPath: "",
      breadcrumbs: [
        {
          path: "/index",
          title: "首页"
        }
      ],
      accountInfo: {}
    };
  },
  created() {
    this.breadcrumbs = this.$route.meta.breadArr;
    this.curPath = this.$route.path;
    console.log("this.$route:", this.$route);
    //获取用户信息
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const res = await getAccountInfoApi();
      this.accountInfo = res.accountInfo;
      console.log("res-userinfo:", res.accountInfo);
    },
    //点击右上角采单事件
    handleCommand(params) {
      console.log("params:", params);
      switch (params) {
        case "personal-center":
          return this.$router.push("/index/personalCenter");
        case "loginout":
          return this.$confirm("您确定要退出登录吗?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "info"
          })
            .then(() => {
              localStorage.removeItem('token');
              localStorage.removeItem('role');
              this.$router.replace('/');
              this.$message({
                type: "success",
                message: "退出登录成功!"
              });
            })
            .catch(() => {
           
            });
      }
    }
  },
  watch: {
    "$route.path"() {
      this.breadcrumbs = this.$route.meta.breadArr;
      this.curPath = this.$route.path;
    }
  }
};
</script>

<style lang="less" scoped>
.right-header {
  padding: 0px;
  &.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .setting {
    display: flex;
    // align-items: center;
  }
}
</style>