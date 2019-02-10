import Types from '../../ActionsTypesConstants';

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

const addDocumentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.UPDATE_FIELD_DOCUMENT: {
            const document = {...state.document, [action.key]: action.value};
            return {...state, document};
        }
        case Types.UPDATE_FILE_DOCUMENT: {
            return {...state, file: action.value};
        }
        case Types.POST_DOCUMENT: {
            return {...state, file: action.value};
        }
        case Types.POST_DOCUMENT_SUCCESS: {
            return INITIAL_STATE;
        }
        case Types.POST_DOCUMENT_FAILURE: {
            return {...state, error: true};
        }
        default:
            return state;
    }
};

export default addDocumentReducer;