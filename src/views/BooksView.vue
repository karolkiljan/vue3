<template>
    <li class="book-list">
        <ul v-for="book in books" :key="book.id">
            <BookListElement :book="book" />
        </ul>
    </li>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import BookListElement from "@/components/BookListElement.vue";
import BookObject from "../types.ts";

const books = ref<BookObject[]>([])

onMounted(() => {
    books.value = inject("books")
})

</script>

<style scoped>
ul, li {
    list-style: none;
}

li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    align-self: center;
}

ul {
    padding: 5px;
    flex: 1;
}
</style>
