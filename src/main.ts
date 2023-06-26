import './assets/main.css'

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import BookObject from "../types.ts";

const books: BookObject[] = [
    {
        "id": 1,
        "title": "Read more",
        "author": "Ben Aflek",
        "published_at": "2023-01-01",
        "description": "Taki opis, ze ho ho",
        "price": 29.99,
    },
    {
        "id": 2,
        "title": "Be Healthy",
        "author": "Cen Kafel",
        "published_at": "2023-02-02",
        "description": "Jeszcze lepszy opis uuuuuuaaaaaaa",
        "price": 39.99,
    },
    {
        "id": 3,
        "title": "Parapara pa",
        "author": "Dan Peker",
        "published_at": "2023-03-03",
        "description": "No lepiej juz nie bedzie, a mam jeszcze dwa produkty, nie?",
        "price": 45.99,
    },
    {
        "id": 4,
        "title": "No more money",
        "author": "Ewans Popini",
        "published_at": "2023-04-04",
        "description": "Brak pomysłu to tez jakiś pomysł, prawda? Tak rzecze autor",
        "price": 59.99,
    },
    {
        "id": 5,
        "title": "Your bank is my bank",
        "author": "Bogol Banksterski",
        "published_at": "2023-05-05",
        "description": "Pieniądz rodzi pieniądz, dlatego zarabiaj.",
        "price": 129.99,
    }
]

const findBook = (id: number): BookObject => books.find((elem: BookObject): boolean => elem.id === id)

const app: App = createApp(App)

app.provide("books", books)
app.provide("findBook", findBook)

app.use(router)

app.mount("#app")
