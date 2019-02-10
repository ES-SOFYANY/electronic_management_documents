import Types from '../../ActionsTypesConstants';
import HomeReducer from './HomeReducer';
import {document} from '../../constants/mocks';

const INITIAL_STATE = {
    documents: [],
    isLoading: false
};
const STATE_LOADING_DOCUMENT = {
    documents: [],
    isLoading: true
};
const STATE_WITH_DOCUMENTS = {
    documents: [document],
    isLoading: false
};
describe('Home reducer', () => {

    it('should return the initial state', () => {
        expect(HomeReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle REQUEST_DOCUMENTS', () => {
        expect(
            HomeReducer([], {
                type: Types.REQUEST_DOCUMENTS
            })
        ).toEqual(STATE_LOADING_DOCUMENT);
    });

    it('should handle RECEIVE_DOCUMENTS', () => {
        expect(
            HomeReducer(STATE_LOADING_DOCUMENT,
                {
                    type: Types.RECEIVE_DOCUMENTS,
                    documents: [document]
                }
            )
        ).toEqual(STATE_WITH_DOCUMENTS)
    })
});
