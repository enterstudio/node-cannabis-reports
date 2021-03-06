const chai = require('chai');
const config = require('config');
const CannabisReport = require('../src/index');
const api = new CannabisReport(config.api.key);
const sinon = require('sinon');
const sinonAsPromised = require('sinon-as-promised');
const expect = chai.expect;

describe('Strains', function() {

  describe('GET /strains', function() {
    it('should get ALL strains', function() {
      let data = require('./data/strains/strains');
      let stub = sinon.stub(api.Strains, 'getAll').resolves(data);

      return api.Strains.getAll().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /strains/:ucpc', function() {
    it('should get a SINGLE strain', function() {
      let data = require('./data/strains/strain');
      let stub = sinon.stub(api.Strains, 'getStrain').resolves(data);

      return api.Strains.getStrain().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /strains/:ucpc/user', function() {
    it('should get user who added strain to the database', function() {
      let data = require('./data/strains/user');
      let stub = sinon.stub(api.Strains, 'getUser').resolves(data);

      return api.Strains.getUser().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /strains/:ucpc/reviews', function() {
    it('should get reviews for strain', function() {
      let data = require('./data/strains/review');
      let stub = sinon.stub(api.Strains, 'getReviews').resolves(data);

      return api.Strains.getReviews().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /strains/:ucpc/effectsFlavors', function() {
    it('should get the average effects and flavors for this strain', function() {
      let data = require('./data/strains/effectsFlavors');
      let stub = sinon.stub(api.Strains, 'getEffectsFlavors').resolves(data);

      return api.Strains.getEffectsFlavors().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /strains/:ucpc/seedCompany', function() {
    it('should get the seed company that was responsible for a cannabis strain',
       function() {
         let data = require('./data/strains/seedCompany');
         let stub = sinon.stub(api.Strains, 'getSeedCompany').resolves(data);

         return api.Strains.getSeedCompany().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('object');
         });
       });
  });

  describe('GET /strains/:ucpc/genetics', function() {
    it('should get the strains that were the parent material for the strain with the given UCPC',
       function() {
         let data = require('./data/strains/genetics');
         let stub = sinon.stub(api.Strains, 'getGenetics').resolves(data);

         return api.Strains.getGenetics().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('array');
         });
       });
  });

  describe('GET /strains/:ucpc/children', function() {
    it('should get the child strains that this one has been bred into',
       function() {
         let data = require('./data/strains/children');
         let stub = sinon.stub(api.Strains, 'getChildren').resolves(data);

         return api.Strains.getChildren().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('array');
         });
       });
  });

  describe('GET /strains/:ucpc/availability/geo/:lat/:lng/:radius', function() {
    it('should get information about the availability of a strain using latitude and longitude',
       function() {
         let data = require('./data/strains/availability');
         let stub = sinon.stub(api.Strains, 'getAvailability').resolves(data);

         return api.Strains.getAvailability().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('array');
         });
       });
  });
});

describe('Flowers', function() {
  describe('GET /flowers', function() {
    it('should get ALL flowers', function() {
      let data = require('./data/flowers/flowers');
      let stub = sinon.stub(api.Flowers, 'getAll').resolves(data);

      return api.Flowers.getAll().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /flowers/type/:flowerType', function() {
    it('should get flowers of a certain type', function() {
      let data = require('./data/flowers/type');
      let stub = sinon.stub(api.Flowers, 'getByType').resolves(data);

      return api.Flowers.getByType().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /flowers/:ucpc', function() {
    it('should get an individual flower based on the UCPC', function() {
      let data = require('./data/flowers/flower');
      let stub = sinon.stub(api.Flowers, 'getFlower').resolves(data);

      return api.Flowers.getFlower().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /flowers/:ucpc/user', function() {
    it('should get the user who added the product to the database', function() {
      let data = require('./data/flowers/user');
      let stub = sinon.stub(api.Flowers, 'getUser').resolves(data);

      return api.Flowers.getUser().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /flowers/:ucpc/reviews', function() {
    it('should get the reviews for a cannabis flower', function() {
      let data = require('./data/flowers/reviews');
      let stub = sinon.stub(api.Flowers, 'getReviews').resolves(data);

      return api.Flowers.getReviews().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /flowers/:ucpc/effectsFlavors', function() {
    it('should get the average effects and flavors from reviews for this flower',
       function() {
         let data = require('./data/flowers/effectsFlavors');
         let stub = sinon.stub(api.Flowers, 'getEffectsFlavors').resolves(data);

         return api.Flowers.getEffectsFlavors().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('object');
         });
       });
  });

  describe('GET /flowers/:ucpc/producer', function() {
    it('should get the producer for a given flower', function() {
      let data = require('./data/flowers/producer');
      let stub = sinon.stub(api.Flowers, 'getProducer').resolves(data);

      return api.Flowers.getProducer().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /flowers/:ucpc/strain', function() {
    it('should get the information about a strain for a flower with the given UCPC', function() {
      let data = require('./data/flowers/strain');
      let stub = sinon.stub(api.Flowers, 'getStrain').resolves(data);

      return api.Flowers.getProducer().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /flowers/:ucpc/availability/geo/:lat/:lng/:radius', function() {
    it('should get information about the availability of a product using latitude and longitude',
       function() {
         let data = require('./data/flowers/availability');
         let stub = sinon.stub(api.Flowers, 'getAvailability').resolves(data);

         return api.Flowers.getAvailability().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('array');
         });
       });
  });
});

describe('Extracts', function() {
  describe('GET /extracts', function() {
    it('should get ALL extracts', function() {
      let data = require('./data/extracts/extracts');
      let stub = sinon.stub(api.Extracts, 'getAll').resolves(data);

      return api.Extracts.getAll().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /extracts/type/:extractType', function() {
    it('should get extracts of a certain type', function() {
      let data = require('./data/extracts/type');
      let stub = sinon.stub(api.Extracts, 'getByType').resolves(data);

      return api.Extracts.getByType().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /extracts/:ucpc', function() {
    it('should get an individual extract based on the UCPC', function() {
      let data = require('./data/extracts/ucpc');
      let stub = sinon.stub(api.Extracts, 'getExtract').resolves(data);

      return api.Extracts.getExtract().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /extracts/:ucpc/user', function() {
    it('should get the user who added the product to the database', function() {
      let data = require('./data/extracts/user');
      let stub = sinon.stub(api.Extracts, 'getUser').resolves(data);

      return api.Extracts.getUser().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /extracts/:ucpc/reviews', function() {
    it('should get the reviews for a cannabis extract', function() {
      let data = require('./data/extracts/reviews');
      let stub = sinon.stub(api.Extracts, 'getReviews').resolves(data);

      return api.Extracts.getReviews().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('array');
      });
    });
  });

  describe('GET /extracts/:ucpc/effectsFlavors', function() {
    it('should get the average effects and flavors from reviews for this extracts',
       function() {
         let data = require('./data/extracts/effectsFlavors');
         let stub = sinon.stub(api.Extracts, 'getEffectsFlavors').resolves(data);

         return api.Flowers.getEffectsFlavors().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('object');
         });
       });
  });

  describe('GET /extracts/:ucpc/producer', function() {
    it('should get the producer for a given extract', function() {
      let data = require('./data/extracts/producer');
      let stub = sinon.stub(api.Extracts, 'getProducer').resolves(data);

      return api.Extracts.getProducer().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /extracts/:ucpc/strain', function() {
    it('should get the information about a strain for a extract with the given UCPC', function() {
      let data = require('./data/extracts/strain');
      let stub = sinon.stub(api.Extracts, 'getStrain').resolves(data);

      return api.Extracts.getProducer().then(function(res) {
        expect(res.data).to.not.be.empty;
        expect(res.data).to.be.an('object');
      });
    });
  });

  describe('GET /extracts/:ucpc/availability/geo/:lat/:lng/:radius', function() {
    it('should get information about the availability of a product using latitude and longitude',
       function() {
         let data = require('./data/extracts/availability');
         let stub = sinon.stub(api.Extracts, 'getAvailability').resolves(data);

         return api.Extracts.getAvailability().then(function(res) {
           expect(res.data).to.not.be.empty;
           expect(res.data).to.be.an('array');
         });
       });
  });
});
