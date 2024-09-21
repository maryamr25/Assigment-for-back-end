import express from "express"
const app = express();
const PORT = 3000;

// middleware to parse JSON bodies (for POST/PUT requests)
app.use(express.json());


// array to hold the user data
let users = [
    {id : 1, name: "maryam"},
    {id : 2, name: "amna"},
    {id : 3, name: "ayesha"}
];

// get all user
app.get('/users',(req,res) => {
    res.status(200).json(users);
})

?



// start the server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})