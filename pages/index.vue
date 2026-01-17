<template>
  <div>
    <p>这是 SSR 页面</p>
    <p>当前时间：{{ now }}</p>
  </div>
</template>

<script setup>
const now = new Date().toLocaleString()
</script>
