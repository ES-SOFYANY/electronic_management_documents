'use strict'
/* eslint-disable no-unused-expressions */

import chai from 'chai';
import DocumentService from './documentService';

chai.use(require('sinon-chai'));

const expect = chai.expect;
let documentService = new DocumentService()

describe('DocumentService Test', () => {


    it('should export a function all', () => {
        expect(documentService.all).to.be.a('Function');
    });

    it('should export a function findById', () => {
        expect(documentService.findById).to.be.a('Function');
    });

    it('should export a function create', () => {
        expect(documentService.create).to.be.a('Function');
    });

    it('should export a function patch', () => {
        expect(documentService.patchUpdates).to.be.a('Function');
    });

    it('should export a function update', () => {
        expect(documentService.update).to.be.a('Function');
    });

    it('should export a function destroy', () => {
        expect(documentService.removeEntity).to.be.a('Function');
    });
})