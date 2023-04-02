<template>
  <el-container>
    <el-header class="header-downline">
      <div class="header">
        <b>FUNNY</b>
        <div class="tools-btns">
          <el-button @click="handleViewJson">查看JSON</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-header>
    <div class="main">
      <!-- 左侧组件和中间编辑区域 -->
      <MainEditor ref="editor" />
    </div>
  </el-container>
</template>

<script setup>
import MainEditor from './MainEditor'
import { ref } from 'vue'

const editor = ref(null)

const handleViewJson = () => {
  console.log(`view json`)
  editor.value?.viewJson?.()
}
</script>

<style>
.header-downline {
  border-bottom: 1px solid #e9ebec;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
</style>
