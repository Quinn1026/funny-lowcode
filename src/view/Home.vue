<template>
  <el-container>
    <el-header class="header-downline">
      <div class="header">
        <b>FUNNY</b>
        <div class="tools-btns">
          <el-button>查看JSON</el-button>
          <el-button>清空</el-button>
        </div>
      </div>
    </el-header>
    <div class="main">
      <!-- 左侧组件和中间编辑区域 -->
      <MainEditor />

      <!-- 右侧属性面板 -->
      <RightAttributePanel />
    </div>
  </el-container>
</template>

<script setup>
import MainEditor from './MainEditor.vue'
import RightAttributePanel from './RightAttributePanel.vue'

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
