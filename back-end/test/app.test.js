const app = require('../src/app')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp);
chai.expect();

// unit tests for all user routes
describe('User routes', () => {

    //unit test to get all users
    describe('GET /users', () => {
        it('should return all users', (done) => {
            chai.request(app)
                .get('/users')
                .end((err, res) => {
                    if (err) done(err)
                    chai.expect(res.status).to.equal(200);
                    chai.expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    //unit test to get a user based on the _id
    describe('GET /users/:id', () => {
        it('should return a user based on the _id', (done) => {
            chai.request(app)
                .get('/users/8ccccc14-e94a-44d2-9730-d014d9104536')
                .end((err, res) => {
                    if (err) done(err)
                    chai.expect(res.status).to.equal(200);
                    chai.expect(res.body).to.be.an('object');
                    chai.expect(res.body.name).to.equal('Hillier Banasiak');
                    chai.expect(res.body).to.have.property('_id');
                    chai.expect(res.body).to.have.property('_id').to.equal('8ccccc14-e94a-44d2-9730-d014d9104536');
                    done();
                });
        });
    });

    //unit test to edit a user based on the _id
    describe('PATCH /users/:id', () => {
        it('should edit a user based on the _id', (done) => {
            chai.request(app)
                .patch('/users/8ccccc14-e94a-44d2-9730-d014d9104536')
                .send({
                    name: 'Better Hillier Banasiak',
                    username: 'betterhillierbanasiak'
                })
                .end((err, res) => {
                    if (err) done(err)
                    chai.expect(res.status).to.equal(200);
                    chai.expect(res.body).to.be.an('object');
                    chai.expect(res.body.name).to.equal('Better Hillier Banasiak');
                    chai.expect(res.body.username).to.equal('betterhillierbanasiak');
                    chai.expect(res.body).to.have.property('_id');
                    chai.expect(res.body).to.have.property('_id').to.equal('8ccccc14-e94a-44d2-9730-d014d9104536');
                    done();
                });
        });
    });
});

describe("Detail route", () => {
    it('should return the item details for a specified id', (done) => {
        chai.request(app) 
            .get('/detail?id=dfde3ffa-b68d-407a-b317-e76dd93d2ff4')
            .end((err, res) => {
                if (err) done(err)
                chai.expect(res.status).to.equal(200);
                chai.expect(res.body).to.be.an('array');
                chai.expect(res.body[0]._id).to.equal('dfde3ffa-b68d-407a-b317-e76dd93d2ff4');
                chai.expect(res.body[0]).to.have.property('contact');
                done();
            })
    })
})