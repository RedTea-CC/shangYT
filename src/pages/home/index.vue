<template>
  <div class="home">
    <el-carousel height="350px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../../assets/images/web-banner-1.png" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
