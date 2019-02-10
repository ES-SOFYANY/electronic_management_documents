import chai from 'chai';
import request from 'supertest';
import document from '../../data-mock/document';
import mockData from '../../data-mock/data';
import Server from '../../index';


/* eslint-disable */

const expect = chai.expect;
describe('Document routes integrartion test ', () => {

    before((done) => {
        mockData().then(done);
    });

    it('should get documents', () =>
        request(Server)
            .get('/api/v1/documents')
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body).to.be.an.an('array');
            })
    );

    it('should add a new document', () => {
            request(Server)
                .post('/api/v1/documents')
                .field('document', JSON.stringify(document))
                //.attach('image', 'path/to/file.jpg')
                .expect('Content-Type', /json/)
                .then(response => {
                    expect(response.body)
                        .to.be.an.an('object')
                        .that.has.property('name')
                        .equal('facture');
                })
        }
    );

    it('should get an document by id', () =>
        request(Server)
            .get('/api/v1/documents/5be3601f90e40b35547ae6b4')
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body)
                    .to.be.an.an('object')
                    .that.has.property('name')
                    .equal('fiche de paie');
            })
    );

    it('should update a document', () =>
        request(Server)
            .put('/api/v1/documents/5be3601f90e40b35547ae6b4')
            .send(document)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body)
                    .to.be.an.an('object')
                    .that.has.property('name')
                    .equal('facture');
            })
    );

    it('should patch a document and respond with the patched thing', () =>
        request(Server)
            .patch('/api/v1/documents/1be3601f90e40b35547ae6b1')
            .send({name: 'bulletin de paie'})
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body)
                    .to.be.an.an('object')
                    .that.has.property('name')
                    .equal('bulletin de paie');
                expect(response.body.category).equal("paie");
            })
    );

    it('should respond with 204 on successful removals', () =>
        request(Server)
            .delete('/api/v1/documents/5be3601f90e40b35547ae6b1')
            .expect(204)
    );

    it('should respond with 404 when document does not exist', () =>
        request(Server)
            .delete('/api/v1/documents/5be3601f90e40b35547ae6b0')
            .expect(404)
    );
});
