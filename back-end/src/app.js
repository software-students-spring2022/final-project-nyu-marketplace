// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require('cors')
const session = require('express-session');
let data = require('../public/FakeData.json')

app.use(cors({
    origin: ['http://localhost:4000','http://localhost:3001'],
    credentials:true,
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// we will put some server logic here later...

app.use(express.static('./public/images'));

const sessionOptions = { 
	secret: 'secret for signing session id', 
	saveUninitialized: true, 
	resave: false,
    cookie:{
        httpOnly: true,
    }
};
app.use(session(sessionOptions));

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

// Route for sending item details
app.get('/detail', (req, res) => {
    if (JSON.stringify(req.query) !== '{}') {
        let detailData = data.Items.filter(element => element._id === req.query['id'])
        let contactData = data.Users.filter(x => x._id === detailData[0].posted_by)
        detailData[0].contact = contactData[0].contact
        res.json(detailData);
    }
})

app.get("/items", (req, res) => {
    res.json(data.Items)
})

//Route to get all Users
app.get("/users", (req, res) => {
    res.json(data.Users)
})

// Route to get the information of a User based on the _id
app.get("/users/:id", (req, res) => {
    const {id} = req.params
    const user = data.Users.find(user => user._id === id)
    res.json(user)
})

// Route to get items purchased by user
app.get("/purchased/:id", (req, res) => {
    const {id} = req.params
    const user = data.Users.find(user => user._id === id)
    const items = data.Items.filter(element => element.purchased_by === user._id)
    res.json(items)
})

// Route to get items posted by user
app.get("/items/:id", (req, res) => {
    const {id} = req.params
    const user = data.Users.find(user => user._id === id)
    const items = data.Items.filter(element => element.posted_by === user._id)
    res.json(items)
})

// Route to assign item to user upon purchase
app.patch('/purchase/:id', (req, res) => {
        const {id} = req.params
        const item = data.Items.find(item => item._id === id)
        const {purchased_by} = req.body
        if(purchased_by) item.purchased_by = purchased_by
        if(purchased_by) item.item_status = "Purchased"
        res.json(item)
})

// Route to edit the information of a User based on the _id
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

// Route to save listing edits
app.patch('/edit-listing/:id', (req, res) => {
    const {id} = req.params
    const item = data.Items.find(item => item._id === id)
    const {title, price, description, location, category, } = req.body
    if(title) item.title = title
    if(price) item.price = price
    if(description) item.description = description
    if(location) item.location = location
    if(category) item.category = category
    res.json(item)
})



app.get('/auth', (req, res) => {
    if (req.session.log) {res.send('True')} else {res.send('False')}
    /*w/o db, we will use pretending code instead
    if (data.Users.find((user) => {user.session_id === req.sessionID}) !== undefined){
        res.send('True')
    } else {
        res.send('False')
    }*/
})

app.post('/auth', (req, res) => {
    req.session.log = true;
    res.send('data');
})
// export the express app we created to make it available to other modules
module.exports = app