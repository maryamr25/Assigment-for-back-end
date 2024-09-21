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

//add a new user
app.post('/users',(req,res) => {
    const newUser = {
        id : users.length + 1,
        name : req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
})

// update user
app.put('/users/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const user = users.findIndex(u => u.id === id);
    if (user !== -1) {
        users[user].name = req.body.name;
        res.status(200).json(users[user]);
        } else {
            res.status(404).json({message: "User not found"});
    }
})
// delete the user
app.delete('/users/:id',(req,res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !==id);
    res.status(204).send();
})



// start the server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})