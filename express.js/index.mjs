import express from "express"
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    {id : 1, name: "maryam"},
    {id : 2, name: "amna"},
    {id : 3, name: "ayesha"}
]