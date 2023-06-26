<template>
    <div class="product">
        <h4>Tytuł: {{ book.title }}</h4>
        <h5>Autor: {{ book.author }}</h5>
        <h5>Cena: {{ book.price }} zł</h5>
        <p>Opis: {{ book.description }}</p>
        <span>Data wydania: {{ book.published_at }}</span>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted, inject, PropType} from "vue";
import {useRoute, RouteLocationNormalized} from "vue-router";
import type BookObject from "../types";

const book: BookObject = ref({} as PropType<BookObject>);
const route: RouteLocationNormalized = useRoute();

onMounted(() => {
    const findBook = inject("findBook")

    book.value = findBook(Number(route.params.id))
})
</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    border: 3px solid black;
    padding: 10px;
    height: 90%;
}
</style>
