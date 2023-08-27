<template>
  <div class="container">
    <HospitalTop />
    <div class="content">
      <!-- 展示路由组件的区域 -->
      <router-view></router-view>
    </div>
    <HospitalBottom />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
}
</style>
