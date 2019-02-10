'use strict'
/* eslint-disable no-unused-expressions */

import {DocumentController} from './documentController';
import sinon from 'sinon';
import chai from 'chai';
import DocumentService from './documentService';
import httpMocks from 'node-mocks-http';

chai.use(require('sinon-chai'));

const expect = chai.expect;
let controller = new DocumentController(DocumentService)

let request = httpMocks.createRequest();
let response = httpMocks.createResponse();
describe('DocumentController Document Test', () => {

    afterEach(() => {
        if (controller.service.findById.restore) {
            controller.service.findById.restore();
        }
    });

    it('should export a function all', () => {
        expect(controller.all).to.be.a('Function');
    });

    it('should export a function findById', () => {
        expect(controller.findById).to.be.a('Function');
    });

    it('should export a function create', () => {
        expect(controller.create).to.be.a('Function');
    });

    it('should export a function patch', () => {
        expect(controller.patch).to.be.a('Function');
    });

    it('should export a function update', () => {
        expect(controller.update).to.be.a('Function');
    });

    it('should export a function destroy', () => {
        expect(controller.destroy).to.be.a('Function');
    });

    it('service findById should be called when controller findById have been called', () => {
        sinon.spy(controller.service, 'findById');
        controller.findById(request, response);
        expect(controller.service.findById).calledOnce;
    });
    it('service update should be called when controller update have been called', () => {
        sinon.spy(controller.service, 'update');
        controller.update(request, response);
        expect(controller.service.update).calledOnce;
    });
    it('service create should be called when controller create have been called', () => {
        sinon.spy(controller.service, 'create');
        controller.create(request, response);
        expect(controller.service.create).calledOnce;
    });
    it('service findById should be called when controller destroy have been called', () => {
        sinon.spy(controller.service, 'findById');
        controller.destroy(request, response);
        expect(controller.service.findById).calledOnce;
    });

    it('service findById should be called when controller patch have been called', () => {
        sinon.spy(controller.service, 'findById');
        controller.patch(request, response);
        expect(controller.service.findById).calledOnce;
    });

})