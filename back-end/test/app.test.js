const app = require('../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')
chai.use(chaiHttp)
chai.expect()

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWYwMzlmOGQ4NDczZWJlNjk2NDFhNiIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1MDQwNTc1Nn0.VXPXz9Y5YP1rG8AL4fovJl3PH6zSXOGG4oAIJEQKCoU'

// unit tests for all user routes
describe('User routes', () => {


    //unit test to get all users
    describe('GET /users', () => {

        // non callback function unit test to test async route to get all users from the database, specify a timeout of 20 seconds
        it('should return all users', () => {
            chai.request(app).keepOpen()
                .get('/users')
                .set('Authorization', `Bearer ${token}`)
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body).to.be.an('array')
                    
                }
                ).catch(err => {
                    console.log(err)
                })
        })
    })
    //unit test for async route to get a user by id
    describe('GET /users/:id', () => {

        it('Should return a user with the given id', () => {
            chai.request(app)
                .get('/users/625f57a2edb960d8aa7aa64d')
                .set('Authorization', `Bearer ${token}`)
                .then(res => {
                    chai.expect(res.status).to.equal(200);
                    chai.expect(res.body).to.be.an('object');
                
                }).catch(err =>{
                    console.log(err)
                })
        });
    });

    //unit test to edit a user based on the _id
    describe('PATCH /users/:id', () => {

        it('should edit a user based on the _id', () => {
            chai.request(app)
                .patch('/users/625f57a2edb960d8aa7aa64d')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    name: 'Better David',
                    username: 'betterdavid',
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body).to.be.an('object')
                }).catch (err => {
                    console.log(err)
                })
        })
    })
})

describe('Item Routes', () => {
    // unit test for /new-listin/save route that adds a new listing to the database
    describe('POST /new-listing/save', () => {
        it('should add a new listing to the database', () => {
            chai.request(app)
                .post('/new-listing/save')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    title: 'unit test item',
                    description: 'unit test description',
                    price: '$100.00',
                    location: "New York",
                    category: "Dorm",
                    "posted_by": "625afb28db5c90c2a26c967a"
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body).to.be.an('object')
                    chai.expect(res.body).to.have.property('_id')
                    chai.expect(res.body.title).to.equal('unit test item')
                    chai.expect(res.body.description).to.equal('unit test description')
                    chai.expect(res.body.price).to.equal('$100.00')
                    chai.expect(res.body.location).to.equal('New York')
                    chai.expect(res.body.category).to.equal('Dorm')
                    chai.expect(res.body.posted_by).to.equal('625afb28db5c90c2a26c967a')
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    })

    // unit test for /reserve-item route that adds an Item into a User's reserved_items array and updates the status of the item to reserved
    describe('POST /reserve-item', () => {
        it('should add an item into a user\'s reserved_items array and update the status of the item to reserved', () => {
            chai.request(app)
                .post('/reserve-item')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    item_id: '6252014344df4a71ce1ee562',
                    user_id: '625afb28db5c90c2a26c967a'
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    })

    describe('POST /purchase-item', () => {
        it('should add an item into a user\'s reserved_items array and update the status of the item to reserved', () => {
            chai.request(app)
                .post('/purchase-item')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    item_id: '6252014344df4a71ce1ee562',
                    user_id: '625afb28db5c90c2a26c967a'
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body.status).to.equal('purchased')
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    })

    // unit test for /status/available route that updates the status of the item to available
    describe('POST /status/available', () => {
        it('should update the status of the item to available', () => {
            chai.request(app)
                .post('/status/available')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    item_id: '6252014344df4a71ce1ee562'
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body.status).to.equal('available')
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    }) 

    // unit test for /purchased routes that returns all items in a User's item_history
    describe('GET /purchased', () => {
        it('should return all items in a User\'s item_history', () => {
            chai.request(app)
                .get('/purchased')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    user_id: '625db175eddab47954f17d6d'
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body).to.be.an('array')
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    })

    // unit test for /reserved routes that returns all items in a User's reserved_items
    describe('GET /reserved', () => {
        it('should return all items in a User\'s reserved_items', () => {
            chai.request(app)
                .get('/reserved')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    user_id: '625afb28db5c90c2a26c967a'
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body).to.be.an('array')
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    })
    
    //unit test for /posted-items that returns all items posted by a User
    describe('GET /posted-items', () => {
        it('should return all items posted by a User', () => {
            chai.request(app)
                .get('/posted-items')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    user_id: '625afb28db5c90c2a26c967a'
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body).to.be.an('array')
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    })

    //unit test for /edit-listing that updates an item in the database
    describe('PATCH /edit-listing', () => {
        it('should update an item in the database', () => {
            chai.request(app)
                .patch('/edit-listing')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    item_id: '6252014344df4a71ce1ee562',
                    title: 'unit test item EDITED',
                    price: '$100.00'
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                }).catch(err => {
                    console.log(err)
                }
            )
        })
    })


describe("Detail route", () => {

    before (function (){
        mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, function(err){
            if(err){
                console.log('Could not connect to database')
                console.log(err)
            } else {
                console.log('Connected to database yay!')
            }
        })
    })

    it('should return the item details for a specified id', (done) => {
        chai.request(app) 
            .get('/detail?id=625f039f8d8473ebe69641a6')
            .set('Authorization', `Bearer ${token}`)
            .then(res => {
                chai.expect(res.status).to.equal(200)
                done()
            })
            .catch(err => {console.log(err)})
    })
    
})

describe('result route', () => {

    it('should return all items meeting search query', (done) => {
        chai.request(app)
            .get('/result?searchText=Our Very First Item!')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                chai.expect(res.status).to.equal(200);
                done();
            })
    });

    it('should return all items meeting search query', (done) => {
        chai.request(app)
            .get('/result?searchText=Our Very First Item!&cateogry=dorm')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                chai.expect(res.status).to.equal(200);
                done();
            })
    });
})

describe('favorites route', () => {
    it('should return all items meeting search query', (done) => {
        chai.request(app)
            .get('/favorites?searchText=Our Very First Item!')
            .set('Authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.status).to.equal(200)
                done()
            })
    })
})

describe('add-user route', () => {

    it('should reject existing user', (done) => {
        chai.request(app)
            .post('/add-user')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'Better David',
                username: 'betterdavid',
                email: 'a@a',
                password: 'asdfasdf'
            })
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.status).to.equal(403)
                done()
            })
    })

})


})


