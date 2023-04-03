<template>
  <el-row>
    <Draggable
      class="children-draggable"
      :list="list"
      group="componentsGroup"
      animation="300"
      item-key="id">
      <template #item="{ element, index }">
        <DraggableItem :config="element" @update-value="(val) => handleUpdateValue(val, element, index)" />
      </template>
    </Draggable>
  </el-row>
</template>

<script setup>
import { ref, watch } from 'vue'
import Draggable from 'vuedraggable'
import DraggableItem from './DraggableItem.vue'

const props = defineProps(['children'])
const emit = defineEmits(['updateValue'])

const list = ref(props.children)

watch(list, (val) => {
  emit('updateValue', val)
})

const handleUpdateValue = (val, el, idx) => {
  list.value[idx].value = val
}

</script>

<style scoped>
.children-draggable {
  width: 100%;
  min-height: 100px;
  border: 1px solid black;
}
</style>