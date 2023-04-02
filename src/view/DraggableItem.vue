<template>
  <el-col :span="config.span">
    <el-form-item :label="config.label">
      <el-input
        v-if="config.type === 'input'"
        v-model="val"
        placeholder="请输入..."
      />
      <el-input
        v-else-if="config.type === 'textarea'"
        type="textarea"
        v-model="val"
        placeholder="请输入..."
      />
      <el-select
        v-else-if="config.type === 'select'"
        v-model="val"
        placeholder="请选择...">
        <el-option
          v-for="(item) in config.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-radio-group
        v-else-if="config.type === 'radio'"
        v-model="val">
        <el-radio
          v-for="(item) in config.options"
          :key="item.value"
          :label="item.value">
          {{ item.label }}
        </el-radio>
      </el-radio-group>
      <el-checkbox-group
        v-else-if="config.type === 'checkbox'"
        v-model="val">
        <el-checkbox
          v-for="(item) in config.options"
          :key="item.value"
          :label="item.value">
          {{ item.label }}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </el-col>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['config'])
const emit = defineEmits(['updateValue'])

const val = ref(props.config?.value)

watch(val, (value) => {
  emit('updateValue', value)
})
</script>