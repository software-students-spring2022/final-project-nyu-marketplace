// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require('cors')
const argon2 = require('argon2')
const session = require('express-session')
const passport = require('passport')
const JWT = require('jsonwebtoken')
const multer = require('multer')

require('./passport')

//import models
const User = require('../models/user.js')
const Item = require('../models/item.js')

app.use(cors({
    origin: ['http://localhost:4000','http://localhost:3001'],
    credentials:true,
  }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public/images'))

const sessionOptions = { 
	secret: 'secret for signing session id', 
	saveUninitialized: true, 
	resave: false,
    cookie:{
        httpOnly: true,
    }
}
app.use(session(sessionOptions))

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

// ROUTES

// API route for search
app.get('/result', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    
    if (req.query.searchText === 'undefined'){req.query.searchText = ''}

    if (Object.keys(req.query).length === 1){
        const query = await Item.find({
            $or: [
                {"title": {"$regex": req.query.searchText, "$options": "i"}},
                {"description": {"$regex": req.query.searchText, "$options": "i"}},
            ],
            item_status: "Available"
        })
        res.json(query)
    }
    else {
        const query = await Item.find({
            $or: [
                {"title": {"$regex": req.query.searchText, "$options": "i"}},
                {"description": {"$regex": req.query.searchText, "$options": "i"}},
            ],
            "category": req.query.category,
            item_status: "Available"
        })
        res.json(query)
    }
})

app.get('/favorites', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const id = req.user.id;
    const found = await User.findById(id);
    const favorites = found.favorites;
    if (req.query.searchText === 'undefined'){req.query.searchText = ''}
    if (Object.keys(req.query).length === 1){
        const items = await Item.find({
            $or: [
                {"title": {"$regex": req.query.searchText, "$options": "i"}},
                {"description": {"$regex": req.query.searchText, "$options": "i"}},
            ], 
            '_id': {$in: favorites}
        })
        res.json(items)
    }
    else {
        const items = await Item.find({
            $or: [
                {"title": {"$regex": req.query.searchText, "$options": "i"}},
                {"description": {"$regex": req.query.searchText, "$options": "i"}},
            ],
            "category": req.query.category,
            '_id': {$in: favorites}
        })
        res.json(items)
    }
})

app.get('/add-favorites', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const id = req.query.id;
    const userid = req.user.id;
    const found = await User.findById(userid);
    found.favorites.push(id);
    await found.save();
    res.status(200).send();
    
})

// Route for sending item details
app.get('/detail',  passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    if (JSON.stringify(req.query) !== '{}') {
        const query = await Item.findById(req.query.id)
        res.json(query)

    }
})

app.get("/items", passport.authenticate('jwt', {failureRedirect: '/'}), (req, res) => {
    Item.find({}, (err, docs) => {
        // todo limit # of docs for homepage display
        //console.log(docs)
        res.json(docs)
    } )
})

// ************ USER ROUTES ***********************


// route to add a user to the database
app.post("/add-user", async (req, res) => {
    try {
        const found = await User.findOne({username: req.body.username})
        if (found) {return res.status(403).json({"msg": 'User already exists.'})}
        const to_add = req.body
        to_add['password'] = await argon2.hash(to_add['password'])
        const user = await User.create(to_add)
        res.status(200).json({"msg": "Successfully registered.","status": "200"})
    } catch (err) {
        res.status(403).json({ "msg": err })
    }
})


app.post("/auth/login", passport.authenticate('local'), async (req, res) => {
    const username = req.body.username
    const found = await User.findOne({email: username})
    const id = found._id
    try {
        const token = await JWT.sign({
            id: id,
            username: username,
        }, process.env.secret || 'secret')
        res.status(200).json(JSON.stringify({"jwt": token}))
    } catch (error) {
        res.status(403).json({"msg": error.message})
    }
})

// route to get all users from database
app.get("/users", passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    await User.find()
    .then(users => {
        res.json(users)
    }
    ).catch(err => {
        res.json({message: err})
    }
    )
})

//route to get a user's information from database
app.get("/user", passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const id = req.user.id
    const found = await User.findById(id)
    res.json(found)
})



// Route to get the information of a user from the database based on the id 
app.get("/users/:id", passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.json({ message: err })
    }
})

// Route to edit the info of a user on the database based on the _id
app.patch("/users/:id", passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json(user)
    } catch (err) {
        res.json({ message: err })
    }
})

app.post('/update', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    try {
        const found = await User.findById(req.user.id);
        found['password'] = await argon2.hash(req.body.password)
        await found.save();
        res.status(200).json({"msg": "Password updated.","status": "200"})
    } catch (err) {
        res.status(403).json({ "msg": err })
    }
})

// ************ END USER ROUTES ************


// ************ ITEM ROUTES ****************

// Item status FLOW: 1. Item is available 2. Item is reserved 3. Item is confirmed purchase following item exchange

// Route to POST new listing/item
app.post('/new-listing/save', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const item = new Item(req.body)
    try{
        await item.save()
        res.sendStatus(200)
        //console.log(item)
    } catch (err) {
        res.status(400).send(err)

    }
})

// route that saves an Item into a User's reserved_item array and updates the item's status to reserved. Only works if the item does not already have a status of reserved
app.post('/reserve-item', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const item_id = req.query.id
    const user_id = req.user.id
    const user = await User.findById(user_id)
    const item = await Item.findById(item_id)
    if (item.item_status === 'reserved'){
        res.send('Item already reserved')
    } else {
        user.reserved_items.push(item_id)
        item.item_status = 'reserved'
        await user.save()
        await item.save()
        res.send('Item reserved')
    }
})

// route that saves an Item into a User's item_history array, updates the item's status to purchased, and removes the item from the user's reserved_items array
app.get('/purchase-item', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const item_id = req.query.id
    const user_id = req.user.id
    const user = await User.findById(user_id)
    const item = await Item.findById(item_id)
    if (item.item_status === 'purchased'){
        res.send('Item already purchased')
    } else {
        user.item_history.push(item_id)
        item.item_status = 'purchased'
        user.reserved_items.pull(item_id)
        await user.save()
        await item.save()
        res.send('Item purchased')
    }
})

// route that removes an item from a User's reserved_items array and updates the item's status to available
app.post('/cancel-order', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {

    const item_id = req.query.id
    const user_id = req.user.id
    const user = await User.findById(user_id)
    const item = await Item.findById(item_id)
    if (item.item_status === 'available'){
        res.send('Item already available')
    } else {
        user.reserved_items.pull(item_id)
        item.item_status = 'available'
        await user.save()
        await item.save()
        res.send('Item reservation canceled, status set to available')
    }
})

// route that changes the item_status of an Item object to 'available'
app.post('/status/available', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const item = await Item.findById(req.body.item_id)
    item.item_status = 'available'
    await item.save()
    res.send(item)
    console.log("item status changed to available")
})

//route that gets all the items in a user's item_history (these are purchased items)
app.get('/purchased', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const user = await User.findById(req.user.id)
    const items = await Item.find({_id: {$in: user.item_history}})
    res.send(items)
})

// route that gets all the items in a user's reserved_items
app.get('/reserved', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const user = await User.findById(req.user.id)
    const items = await Item.find({_id: {$in: user.reserved_items}})
    res.send(items)
})

// Route to get all items posted by the user
app.get('/posted-items', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const user = await User.findById(req.user.id)
    const items = await Item.find({posted_by: user._id})
    res.send(items)
})

//route to edit an item/listing
app.patch('/edit-listing', passport.authenticate('jwt', {failureRedirect: '/'}), async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.body.item_id, req.body, {
        new: true
    }
    )
    res.send(item)
})


// Route to save listing edits
// app.patch('/edit-listing/:id', (req, res) => {
//     const {id} = req.params
//     const item = data.Items.find(item => item._id === id)
//     const {title, price, description, location, category, } = req.body
//     if(title) item.title = title
//     if(price) item.price = price
//     if(description) item.description = description
//     if(location) item.location = location
//     if(category) item.category = category
//     res.json(item)
// })

// **************************** END ITEM ROUTES **************************

app.post('/upload', passport.authenticate('jwt'), (req, res) => {
    const upload = multer({storage: storage}).single('file')
    upload(req, res, (err) => {
        if (err){
            res.sendStatus(500);
        }
        res.json({name: req.file.filename})
    })
})

app.get('/auth', passport.authenticate('jwt'), (req, res) => {
    res.status(200).json({log: 'True', username: req.user.username, id: req.user.id})
})

app.get('/', (req, res) => {
    res.json({'err': 'visitor'})
})

// export the express app we created to make it available to other modules
module.exports = app