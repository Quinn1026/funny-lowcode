<template>
  <el-form :model="form" label-width="90px" class="attr-board">
    <el-form-item
      label="组件类型 "
      prop="type">
      <el-select
        v-model="form.type"
        style="width:100%"
        placeholder="please select...">
        <el-option
          v-for="(item, index) in typeOptions"
          :key="index"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      label="字段名 "
      prop="code">
      <el-input v-model="form.code" />
    </el-form-item>
    <el-form-item
      label="标题 "
      prop="label">
      <el-input v-model="form.label" />
    </el-form-item>
    <el-form-item
      label="栅格大小 "
      prop="span">
      <el-slider v-model="form.span" :max="24" />
    </el-form-item>
  </el-form>
</template>

<script setup>
import { getComponentsType } from '../components/config'
import { ref, toRef } from 'vue'
const typeOptions = getComponentsType()
const props = defineProps(['activeItem'])
const form = toRef(props, 'activeItem')
</script>

<style lang="less" scoped>
.attr-board {
  padding: 10px;
}
</style>