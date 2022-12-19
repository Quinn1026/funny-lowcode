<template>
  <div class="container">
    <!-- 组件列表 -->
    <div class="left-board">
      <draggable
        :list="componentList"
        :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
        @start="onStart"
        @end="onEnd"
        item-key="id">
        <template #item="{ element }">
          <div class="component-body">{{ element.__config__.label }}</div>
        </template>
      </draggable>
    </div>
    <!-- 展示区域 -->
    <div class="center-board">
      
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { reactive } from 'vue'
import { componentConfigs } from '../components/config'
const componentList = reactive(componentConfigs)
const onStart = (e) => {
  console.log('拖动开始', e)
}
const onEnd = (e) => {
  console.log('拖动结束', e)
}
</script>

<style>
.left-board {
  width: 260px;
  height: calc(100vh - 76px);
  border-right: 1px solid #e9ebec;
}
.center-board {
  width: 100%;
  margin: 0 350px 0 260px;
  box-sizing: border-box;
}
.component-body {
  width: 120px;
  height: 30px;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
  margin: 10px 10px 0;
}
.component-body:hover {
  cursor: move;
}
</style>