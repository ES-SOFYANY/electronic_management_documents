import DocumentService from './documentService';
import ParentController from '../common/parentController';

export class DocumentController extends ParentController{

    constructor(DocumentService){
        super();
        this.service = new DocumentService();
    }
    all(req, res) {
        this.service.all()
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    findById(req, res) {
        this.service
            .findById(req.params.id)
            .then(this.handleEntityNotFound(res))
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    create(req, res) {
        let document;
        document = req.body.document ? JSON.parse(req.body.document) : null;
        if(req.files && req.files.length){
            document.urlFile = req.files.map(x=> x.path);
        }
        this.service
            .create(document)
            .then(this.respondWithResult(res, 201))
            .catch(this.handleError(res));
    }

    update(req, res) {
        this.service
            .update(req.params.id, req.body)
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    patch(req, res) {
        this.service
            .findById(req.params.id)
            .then(this.handleEntityNotFound(res))
            .then(this.service.patchUpdates(req.body))
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }

    destroy(req, res) {

        this.service
            .findById(req.params.id)
            .then(this.handleEntityNotFound(res))
            .then(this.service.removeEntity())
            .then(this.respondWithoutResult(res))
            .catch(this.handleError(res));
    }
}

export default new DocumentController(DocumentService);
