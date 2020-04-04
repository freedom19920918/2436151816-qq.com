<template>
  <div class="login">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="login-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input clearable v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input clearable type="password" v-model="loginForm.pwd" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button :loading="loading" type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginApi } from "../apis/users";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名必须填" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符" }
        ],
        pwd: [
          { required: true, message: "密码必须填" },
          { min: 3, max: 10, message: "长度在 3 到 8 个字符" }
        ]
      },
      loading: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("1:", this.loginForm);
          this.loading = true;
          const params = {
            account: this.loginForm.username,
            password: this.loginForm.pwd
          };
          loginApi(params)
            .then(res => {
              console.log("res:", res);
              const { role, token } = res;
              if (token) {
                localStorage.setItem("role", role);
                localStorage.setItem("token", token);
                this.loading = false;
                this.$message.success("恭喜您，登录成功");
                this.$router.replace("/index");
              } else {
                this.$message.error("用户名或者密码错误");
                 this.loading = false;
              }
            })
            .catch(e => {
              console.log("e:", e);
              this.loading = false;
            });
        }
      });
    }
  }
};
</script>

<style lang="less">
.login {
  height: 100%;
  width: 100%;
  background: #304156;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-ruleForm {
    width: 450px;
    .el-form-item {
      .el-form-item__label {
        color: #fff;
      }
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>