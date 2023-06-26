import {createRouter, createWebHistory, Router} from "vue-router"
import BooksView from "@/views/BooksView.vue";
import BookDetails from "@/views/BookDetails.vue";

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'books',
      component: BooksView
    },
    {
      path: '/:id',
      name: 'book',
      component: BookDetails,
      props: true
    }
  ]
})

export default router
