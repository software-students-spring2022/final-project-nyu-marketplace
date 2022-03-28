// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require('cors')
const data = require('../public/FakeData.json')

app.use(cors())
// we will put some server logic here later...


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
    console.log(req.query);
    res.json(data.Items.filter(element => element.title.includes(req.query['searchText']) || element.description.includes(req.query['searchText'])))
})

// export the express app we created to make it available to other modules
module.exports = app