<template>
    <RouterLink class="element" :to="{ name: 'book', params: { id: book.id } }">
        <h1>{{ book.title }}</h1>
        <span>{{ book.author }}</span>
    </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import type BookObject from "@/types";

defineProps({
    book: {
        type: Object as BookObject,
        required: true
    }
});
</script>

<style scoped>
.element {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 5px;
    margin:5px;
    height: 100%;
}

h1 {
    text-align: center;
}
</style>
