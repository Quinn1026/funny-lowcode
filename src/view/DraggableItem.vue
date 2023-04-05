<template>
  <el-col
    :span="config.span"
    :class="[{ 'active-item': isActive }, 'component-item']"
    @click.stop="() => handleClick(config)">
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
        :style="config.style"
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
      <div v-else>{{ item.label }}</div>
    </el-form-item>
  </el-col>
</template>

<script setup>
import { ref, toRef, watch, computed } from 'vue'

const props = defineProps(['config', 'activeId'])
const emit = defineEmits(['updateValue', 'onActive'])

const val = ref(props.config?.value)
watch(val, (value) => {
  emit('updateValue', value)
})

const currentId = props.config?.id
const isActive = computed(() => {
  return currentId === props.activeId
})
const handleClick = () => {
  emit('onActive', props.config)
}
</script>

<style lang="less" scoped>
.component-item {
  padding: 6px;
  margin: 6px 6px 0;
  border-radius: 6px;
}
.active-item {
  background-color: #e1f3d8;
}
</style>
