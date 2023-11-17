<template>
    <div
        class="card mb-5 p-4"
        :class="`has-background-${bgColor}-dark`"
    >
        <label
            v-if="label"
            class="label has-text-white"
            >{{ label }}</label
        >
        <div class="field">
            <div class="control">
                <textarea
                    ref="textareaRef"
                    :value="modelValue"
                    class="textarea"
                    :placeholder="placeholder"
                    @input="$emit('update:modelValue', $event.target.value)"
                ></textarea>
            </div>
        </div>

        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'success'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
    }
});

defineEmits(['update:modelValue']);

const textareaRef = ref(null);

const focusTextArea = () => {
    textareaRef.value.focus();
};

defineExpose({
    focusTextArea
});
</script>
