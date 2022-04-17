const app = require('../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')
const { default: mongoose } = require('mongoose')
chai.use(chaiHttp)
chai.expect()

/*

*/

// unit tests for all user routes
describe('User routes', () => {

    //unit test to get all users
    describe('GET /users', () => {

        // non callback function unit test to test async route to get all users from the database, specify a timeout of 20 seconds
        it('should return all users', () => {
            chai.request(app)
                .get('/users')
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
                .get('/users/625afb28db5c90c2a26c967a')
                .then(res => {
                    chai.expect(res.status).to.equal(200);
                    chai.expect(res.body).to.be.an('object');
                    chai.expect(res.body).to.have.property('_id')
                
                }).catch(err =>{
                    console.log(err)
                })
        });
    });

    //unit test to edit a user based on the _id
    describe('PATCH /users/:id', () => {

        it('should edit a user based on the _id', () => {
            chai.request(app)
                .patch('/users/625afb28db5c90c2a26c967a')
                .send({
                    name: 'Better David',
                    username: 'betterdavid',
                })
                .then(res => {
                    chai.expect(res.status).to.equal(200)
                    chai.expect(res.body).to.be.an('object')
                    chai.expect(res.body.name).to.equal('Better David')
                    chai.expect(res.body.username).to.equal('betterdavid')
                }).catch (err => {
                    console.log(err)
                })
        })
    })
})

describe("Detail route", () => {
    it('should return the item details for a specified id', (done) => {
        chai.request(app) 
            .get('/detail?id=dfde3ffa-b68d-407a-b317-e76dd93d2ff4')
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.status).to.equal(200)
                chai.expect(res.body).to.be.an('array')
                chai.expect(res.body[0]._id).to.equal('dfde3ffa-b68d-407a-b317-e76dd93d2ff4')
                chai.expect(res.body[0]).to.have.property('contact')
                done()
            })
    })
})

describe('result route', () => {

    before (function () {
        const mongoose = require('mongoose');
        const dotenv = require('dotenv').config(__dirname + '/../.env');
        mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, function(err){
            if(err){
                console.log(err)
            } else {
            }
        });
    });

    it('should return all items meeting search query', (done) => {
        chai.request(app)
            .get('/result?searchText=a')
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.be.an('array');
                chai.expect(res.body.length).to.equal(1);
                chai.expect(res.body[0]._id).to.equal('6252014344df4a71ce1ee562');
                done();
            })
    });

    after(function () {
        mongoose.disconnect();
    })
})

describe('favorites route', () => {
    it('should return all items meeting search query', (done) => {
        chai.request(app)
            .get('/favorites?searchText=ab')
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.status).to.equal(200)
                chai.expect(res.body).to.be.an('array')
                chai.expect(res.body.length).to.equal(2)
                chai.expect(res.body[0]._id).to.equal('15585ec6-1703-410a-b43c-599134a95235')
                chai.expect(res.body[1]._id).to.equal('42f51800-5036-4e8e-9580-5d85e4b0a6ee')
                done()
            })
    })
})

//unit test to assign item to buyer and mark as purchased
describe('PATCH /purchase', () => {
    it('should edit item to assign to buyer', (done) => {
        chai.request(app)
            .patch('/purchase/42f51800-5036-4e8e-9580-5d85e4b0a6ee')
            .send({
                purchased_by: 'c4df07d4-9574-4316-ba13-a32037a11b6d',
            })
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.body.item_status).to.equal("Purchased")
                chai.expect(res.body.purchased_by).to.equal("c4df07d4-9574-4316-ba13-a32037a11b6d")
                done()
            })
    })
})

//unit test to get items posted by user
describe("GET /items/:id", () => {
    it('should return the items posted by a user of a specific id', (done) => {
        chai.request(app) 
            .get('/items/c4df07d4-9574-4316-ba13-a32037a11b6d')
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.body[0].posted_by).to.equal("c4df07d4-9574-4316-ba13-a32037a11b6d")
                done()
            })
    })
})

//unit test to get items purchased by user
describe("GET /purchased/:id", () => {
    it('should return the items purchased by a user of a specific id', (done) => {
        chai.request(app) 
            .get('/purchased/c4df07d4-9574-4316-ba13-a32037a11b6d')
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.body[0].purchased_by).to.equal("c4df07d4-9574-4316-ba13-a32037a11b6d")
                done()
            })
    })
})


//unit test to edit listing
describe('PATCH /edit-listing', () => {
    it('should edit listing details', (done) => {
        chai.request(app)
            .patch('/edit-listing/15585ec6-1703-410a-b43c-599134a95235')
            .send({
                title: 'New Name',
                price: '$1000',
                location: 'New York'
            })
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.body.title).to.equal("New Name")
                chai.expect(res.body.price).to.equal("$1000")
                chai.expect(res.body.location).to.equal("New York")
                chai.expect(res.body.category).to.equal("Clothing")
                done()
            })
    })
})
