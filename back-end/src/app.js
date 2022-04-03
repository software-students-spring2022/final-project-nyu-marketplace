// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require('cors')
let data = require('../public/FakeData.json')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// we will put some server logic here later...

app.use(express.static('public'));

// API route for search. As of now, searches based on title, but keys may be added to widen search params
app.get('/search', (req,res) => {
    const {q} = req.query

    const keys = ["title", "category"]

    const search = (data) => {
        return data.Items.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(q))
        )
    }
    res.send(search(data))
    
})

app.get('/result', (req, res) => {
    if (req.query.searchText === 'undefined'){req.query.searchText = ''}
    if (Object.keys(req.query).length === 1){res.json(data.Items.filter(element => element.title.toLowerCase().includes(req.query['searchText'].toLocaleLowerCase()) || element.description.toLowerCase().includes(req.query['searchText'].toLowerCase())));}
    else {res.json(data.Items.filter(element => (element.title.toLowerCase().includes(req.query['searchText']) || element.description.toLowerCase().includes(req.query['searchText'])) && element.category === req.query.category));}
})

app.get('/favorites', (req, res) => {
    if (Object.keys(req.query).length === 1){res.json(data.Items.filter(element => element.title.toLowerCase().includes(req.query['searchText'].toLocaleLowerCase()) || element.description.toLowerCase().includes(req.query['searchText'].toLowerCase())));}
    else {res.json(data.Items.filter(element => (element.title.toLowerCase().includes(req.query['searchText']) || element.description.toLowerCase().includes(req.query['searchText'])) && element.category === req.query.category));}
})

app.get('/detail', (req, res) => {
    res.json(data.Items.filter(element => element._id === req.query['id']));
})
// export the express app we created to make it available to other modules

app.get("/items", (req, res) => {
    res.json(data.Items)
})

// Route to get the information of a User based on the _id
app.get("/users/:id", (req, res) => {
    const {id} = req.params
    const user = data.Users.find(user => user._id === id)
    res.json(user)
})

// Route to edit the inofrmation of a User based on the _id
app.patch("/users/:id", (req, res) => {
    const {id} = req.params
    const user = data.Users.find(user => user._id === id)
    const {name, username} = req.body
    if(name) user.name = name
    if(username) user.username = username
    res.json(user)
})

// Route to POST new listing, just send JSON back for now
app.post('/new-listing/save', (req, res) => {
    res.json(req.body)
})

module.exports = app