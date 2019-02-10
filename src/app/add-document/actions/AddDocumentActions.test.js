import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Actions from './AddDocumentActions';
import Types from '../../ActionsTypesConstants';
import nock from 'nock';
import {document} from '../../constants/mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('documents actions', () => {

    it('creates POST_DOCUMENT_SUCCESS after post document', (done) => {
        nock('http://localhost')
            .post('/api/v1/documents')
            .reply(201,
                     document
            );
        const expectedActions = [
            {type: Types.POST_DOCUMENT},
            {type: Types.POST_DOCUMENT_SUCCESS, documents: document}
        ];
        const store = mockStore({documents: []})

        store.dispatch(Actions.postDocument()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        })

    });
});