<template>
    <q-input 
        :model-value="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :placeholder="placeholder"
        :label="label"
        :rules="[val => (val && val.length > 0) || 'Este campo é obrigatório!']"
        @keyup.enter="onEnter"
    />
</template>

<script lang="ts">
export default {
    name: 'InputComponent',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        rules: {
            type: Array,
            default: () => []
        },
    },
    methods: {
        onEnter() {
            this.$emit('enter', this.modelValue);
        }
    },
    emits: ['update:modelValue', 'enter']
}
</script>