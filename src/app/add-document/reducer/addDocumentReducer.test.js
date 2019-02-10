import Types from '../../ActionsTypesConstants';
import AddDocumentReducer from './addDocumentReducer';

const INITIAL_STATE = {
    document: {
        name: '',
        date: new Date(),
        category: '',
        description: '',
        file: '',
        expiredDocument: false,
        expiredDate: null
    },
    file: null
};
const STATE_CHANGE_FIELD_DOCUMENT = {
    document: {
        name: 'Facture',
        date: new Date(),
        category: '',
        description: '',
        file: '',
        expiredDocument: false,
        expiredDate: null
    },
    file: null
};
const STATE_CHANGE_FILE_DOCUMENT = {
    document: {
        name: '',
        date: new Date(),
        category: '',
        description: '',
        file: '',
        expiredDocument: false,
        expiredDate: null
    },
    file: 'file'
};
const STATE_POST_DOCUMENT_FAILURE = {
    document: {
        name: '',
        date: new Date(),
        category: '',
        description: '',
        file: '',
        expiredDocument: false,
        expiredDate: null
    },
    file: null,
    error: true
};

describe('addDocument reducer', () => {

    it('should return the initial state', () => {
        expect(AddDocumentReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle UPDATE_FIELD_DOCUMENT', () => {
        expect(
            AddDocumentReducer(INITIAL_STATE, {
                type: Types.UPDATE_FIELD_DOCUMENT,
                key: 'name',
                value: 'Facture'
            })
        ).toEqual(STATE_CHANGE_FIELD_DOCUMENT);
    });
    it('should handle UPDATE_FILE_DOCUMENT', () => {
        expect(
            AddDocumentReducer(INITIAL_STATE, {
                type: Types.UPDATE_FILE_DOCUMENT,
                value: 'file'
            })
        ).toEqual(STATE_CHANGE_FILE_DOCUMENT);
    });

    it('should handle POST_DOCUMENT_SUCCESS', () => {
        expect(
            AddDocumentReducer(INITIAL_STATE, {
                type: Types.POST_DOCUMENT_SUCCESS
            })
        ).toEqual(INITIAL_STATE);
    });

    it('should handle POST_DOCUMENT_FAILURE', () => {
        expect(
            AddDocumentReducer(INITIAL_STATE, {
                type: Types.POST_DOCUMENT_FAILURE
            })
        ).toEqual(STATE_POST_DOCUMENT_FAILURE);
    });
});
