<template>
  <el-container style="height:100%">
    <Sidebar />
    <el-main>
        <RightHeader/>
        <RightBody/>
    </el-main>
  </el-container>
</template>

<script>
import Sidebar from "../components/layout/Sidebar";
import RightHeader from "../components/layout/RightHeader";
import RightBody from "../components/layout/RightBody";

export default {
  components: {
    Sidebar,
    RightHeader,
    RightBody
  }
};
</script>

<style lang="less" scoped>
</style>