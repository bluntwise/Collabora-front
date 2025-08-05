<template>
  <div class="dropdown-container">
    <label v-if="label" class="dropdown-label">{{ label }}</label>
    <select
      class="select-field"
      :multiple="multiple"
      v-model="selectedValue"
    >
      <option v-if="!multiple && placeholder" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option._id"
        :value="option._id"
      >
        {{ optionLabel(option) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: String,
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Array],
    default: () => ([])
  },
  multiple: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  labelFields: {
    type: Array,
    default: () => ['firstName', 'lastName', 'email']
  }
});

const emit = defineEmits(['update:modelValue']);

const selectedValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
});

function optionLabel(option) {
  return props.labelFields.map(field => option[field]).join(' ');
}
</script>

<style scoped>
.dropdown-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.dropdown-label {
  margin-bottom: 0.5em;
  font-weight: 500;
  color: #555;
}

.select-field {
  width: 100%;
  min-height: 2.5em;
  padding: 0.6em 0.8em;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
}
</style>
