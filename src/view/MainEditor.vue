<template>
  <div class="container">
    <!-- 组件列表 -->
    <div class="left-board">
      <Draggable
        :list="componentList"
        :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
        :clone="cloneComponent"
        animation="300"
        :sort="false"
        @start="onStart"
        @end="onEnd"
        item-key="id">
        <template #item="{ element }">
          <div class="component-body">{{ element.label }}</div>
        </template>
      </Draggable>
    </div>
    <!-- 展示区域 -->
    <div class="center-board">
      <el-form class="center-form">
        <Draggable
          class="center-draggable"
          :list="list"
          :group="{ name: 'componentsGroup', pull: false, put: true }"
          animation="300"
          item-key="id">
          <template #item="{ element, index }">
            <DraggableItem :config="element" @update-value="(val) => handleUpdateValue(val, element, index)" />
          </template>
        </Draggable>
        <!-- <div v-if="!list.length" class="component-empty">请拖入组件...</div> -->
      </el-form>
    </div>
    <!-- 属性面板 -->
    <div class="right-board">

    </div>
  </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import DraggableItem from './DraggableItem'
import { ref, reactive } from 'vue'
import { componentConfigs } from '@/components/config'
import {
  deepClone
} from '@/utils/index'
let idGlobal = 0
const componentList = reactive(componentConfigs)
const list = ref([])

const onStart = (e) => {}
const onEnd = (e) => {}

const handleUpdateValue = (val, ele, idx) => {
  list.value[idx].value = val
}

const cloneComponent = (clone) => {
  const temp = deepClone(clone)
  const { type } = temp
  temp.id = `add${++idGlobal}`
  temp.code = `code${++idGlobal}`
  temp.value = type === 'checkbox' ? [] : null
  return temp
}

const viewJson = () => {
  console.log(
    JSON.stringify(list.value, null, 2)
  )
}
defineExpose({ viewJson })
</script>

<style>
.container {
  display: flex;
}
.left-board {
  width: 260px;
  height: calc(100vh - 76px);
  /* border-right: 1px solid #e9ebec; */
}
.center-board {
  flex: 1;
  border-left: 1px solid #e9ebec;
  border-right: 1px solid #e9ebec;
}
.component-empty {
  width: 120px;
  margin: 50px auto;
  font-size: large;
  color: gray;
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
.center-form {
  height: calc(100vh - 76px);
}
.center-draggable {
  height: 100%;
}
.right-board {
  width: 350px;
  /* border-left: 1px solid #e9ebec; */
}
</style>