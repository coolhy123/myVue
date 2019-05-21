<template>
<div>
<el-radio-group v-model="isCollapse"  class="isCollapse">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
 
</el-radio-group>
 <div class="title">
    <el-row>
      <label class="">欢迎：  进入</label>
    </el-row>
</div>
<el-menu 
default-active="1-4-1" 
class="el-menu-vertical-demo" 
@open="handleOpen"
 @close="handleClose" 
 :collapse="isCollapse"
 background-color="#409EFF"
      text-color="#fff"
      active-text-color="#fff"
 >
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location" style="margin-left:-122px"></i>
      <span slot="title" style="margin-left:5px" >导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
</el-menu>


</div>
    
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.isCollapse{
margin-bottom: 20px; 
margin-top: -50px;
float: left;
}

.title{
  width: 80%;
  float: right;
  margin-top: -50px;
}

</style>
