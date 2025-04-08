<script setup>
import { ref } from 'vue';
const props = defineProps({
    contenu: String,
    svg: String,
    goto: String,
    class: String
});
</script>

<template>
    <router-link :to="props.goto"
        :class="['flex items-center p-3 rounded-full border-2 border-slate-700 transition-all duration-700', props.class, {
            'bg-slate-100 text-slate-700 hover:bg-slate-700 hover:text-slate-100': props.class === 'white',
            'bg-slate-700 text-slate-100 hover:bg-slate-100 hover:text-slate-700': props.class === 'black'
        }]">
        {{ props.contenu }}
        <span v-html="props.svg"></span>
    </router-link>
</template>

<style scoped></style>
