import LOGGER from '../../common/logger';
import Document from './document.model';

export default class DocumentService {

    all() {
        return Document.find({}).exec();
    }

    findById(id) {
        LOGGER.info(`${this.constructor.name}.byId(${id})`);
        return Document.findById(id).exec();
    }

    create(document) {
        return Document.create(document);
    }

    update(id, document) {
        if (document._id) {
            Reflect.deleteProperty(document, '_id');
        }
        return Document.findOneAndUpdate({_id: id}, document,
            {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()
    }

    patchUpdates(patches) {

        if (patches._id) {
            Reflect.deleteProperty(patches, '_id');
        }
        return function(entity) {
            try {
                for (let prop in patches) {
                    entity[prop] = patches[prop];
                }
            } catch (err) {
                return Promise.reject(err);

            }

            return entity.save();
        };
    }

    removeEntity() {
        return function(entity) {
            if (entity) {
                return entity.remove();
            }
        };
    }
}