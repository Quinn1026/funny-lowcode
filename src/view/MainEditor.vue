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
          group="componentsGroup"
          animation="300"
          item-key="id">
          <template #item="{ element, index }">
            <RowItem
              v-if="element.type === 'container'"
              :children="element.children"
              :activeId="activeId"
              @update-value="(val) => handleUpdateValue(val, element, index)"
              @on-active="handleActvieItem"
            />
            <DraggableItem
              v-else
              :config="element"
              :activeId="activeId"
              @update-value="(val) => handleUpdateValue(val, element, index)"
              @on-active="handleActvieItem"
            />
          </template>
        </Draggable>
        <!-- <div v-if="!list.length" class="component-empty">请拖入组件...</div> -->
      </el-form>
    </div>
    <!-- 属性面板 -->
    <div class="right-board">
      <AttrEditor :activeItem="activeItem" />
    </div>
  </div>
</template>

<script setup>
import Draggable from 'vuedraggable'
import DraggableItem from './DraggableItem'
import RowItem from './RowItem'
import AttrEditor from './AttrEditor'
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

const handleUpdateValue = (val, el, idx) => {
  if (el.type === 'container') {
    list.value[idx].children = val
  } else {
    list.value[idx].value = val
  }
}

const activeId = ref('')
const activeItem = ref({})
const handleActvieItem = (item) => {
  activeId.value = item.id
  activeItem.value = item
}

const cloneComponent = (clone) => {
  const temp = deepClone(clone)
  const { type } = temp
  temp.id = `add${++idGlobal}`
  if (type === 'container') {
    !Array.isArray(temp.children) && (temp.children = [])
  } else {
    temp.code = `code${++idGlobal}`
    temp.value = type === 'checkbox' ? [] : null
  }
  return temp
}

const viewJson = () => {
  console.log(
    JSON.stringify(list.value, null, 2)
  )
}
defineExpose({ viewJson })
</script>

<style scoped>
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
  padding: 8px;
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
  min-height: 68px;
}
.right-board {
  width: 350px;
  /* border-left: 1px solid #e9ebec; */
}
</style>