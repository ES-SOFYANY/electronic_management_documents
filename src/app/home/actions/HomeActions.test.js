import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Actions from './HomeActions';
import Types from '../../ActionsTypesConstants';
import nock from 'nock';
import {document} from '../../constants/mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('documents actions', () => {

    it('creates RECEIVE_DOCUMENTS after successfuly fetching documents', (done) => {
        nock('http://localhost')
            .get('/api/v1/documents')
            .reply(200,
                     [document]
            );
        const expectedActions = [
            {type: Types.REQUEST_DOCUMENTS},
            {type: Types.RECEIVE_DOCUMENTS, documents: [document]}
        ];
        const store = mockStore({documents: []})

        store.dispatch(Actions.requestDocumentsData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        })

    });
});