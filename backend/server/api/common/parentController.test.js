'use strict'
/* eslint-disable no-unused-expressions */

import ParentController from './parentController';
import sinon from 'sinon';
import chai from 'chai';
import httpMocks from 'node-mocks-http';

chai.use(require('sinon-chai'));

const expect = chai.expect;

describe('ParentController Test', () => {

    let request, response;
    let parentController = new ParentController();

    beforeEach(() => {
        request = httpMocks.createRequest();
        response = httpMocks.createResponse();
    });

    afterEach(() => {
        if (response.status.restore) {
            response.status.restore();
        }
    });

    it('should export a function respondWithResult', () => {
        expect(parentController.respondWithResult).to.be.a('Function');
        expect(parentController.respondWithResult()).to.be.a('Function');
    });
    it('should export a function respondWithoutResult', () => {
        expect(parentController.respondWithoutResult).to.be.a('Function');
        expect(parentController.respondWithoutResult()).to.be.a('Function');
    });
    it('should export a function handleEntityNotFound', () => {
        expect(parentController.handleEntityNotFound).to.be.a('Function');
        expect(parentController.handleEntityNotFound()).to.be.a('Function');
    });
    it('should export a function handleError', () => {
        expect(parentController.handleError).to.be.a('Function');
        expect(parentController.handleError()).to.be.a('Function');
    });

    it('response status should been called with 204 when respondWithoutResult called ', () => {
        sinon.spy(response, 'status');
        parentController.respondWithoutResult(response)();
        expect(response.status).calledOnce;
        expect(response.status).calledWith(204);
    });

    it('response status should not been called when respondWithResult called with null entity', () => {
        sinon.spy(response, 'status');
        parentController.respondWithResult(response)(null);
        expect(response.status).to.have.not.been.called;
    });

    it('response status should been called with 201 when respondWithResult called ', () => {
        sinon.spy(response, 'status');
        parentController.respondWithResult(response, 201)({});
        expect(response.status).calledOnce;
        expect(response.status).calledWith(201);
    });

    it('response entity should been called when respondWithResult called with entity ', () => {
        sinon.spy(response, 'json');
        parentController.respondWithResult(response)({});
        expect(response.json).calledWith({});
        parentController.respondWithResult(response)({id: 5});
        expect(response.json).calledWith({id: 5});
    });

    it('the function handleEntityNotFound should return entity', () => {
        const entity = parentController.handleEntityNotFound(response)({id: 6});
        expect(entity).to.not.be.undefined;
        expect(entity.id).equal(6);
    });

    it('the function handleEntityNotFound should return entity', () => {
        sinon.spy(response, 'status');
        parentController.handleEntityNotFound(response)(null);
        expect(response.status).calledOnce;
        expect(response.status).calledWith(404);
    });

    it('handleError should handle error and return default status code ( 500 )', () => {
        sinon.spy(response, 'status');
        sinon.spy(response, 'send');
        const errorMessage = 'error';
        parentController.handleError(response)(errorMessage);
        expect(response.status).calledOnce;
        expect(response.status).calledWith(500);
        expect(response.send).calledWith(errorMessage);
    });

    it('handleError should handle error and return status code', () => {
        sinon.spy(response, 'status');
        sinon.spy(response, 'send');
        const errorMessage = 'error';
        const badRequestCode = 400;
        parentController.handleError(response, badRequestCode)(errorMessage);
        expect(response.status).calledOnce;
        expect(response.status).calledWith(badRequestCode);
        expect(response.send).calledWith(errorMessage);
    });

});