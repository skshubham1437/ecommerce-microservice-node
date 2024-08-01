const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const { sequelize } = require('../src/models');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Products API', () => {
  before((done) => {
    sequelize.sync({ force: true }).then(() => done());
  });

  it('should list all products', (done) => {
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
