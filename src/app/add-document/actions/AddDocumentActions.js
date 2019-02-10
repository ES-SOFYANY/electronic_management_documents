import Types from '../../ActionsTypesConstants';
import {push} from 'connected-react-router'

function postDocument(document, file) {
    return async (dispatch) => {
        dispatch({
            type: Types.POST_DOCUMENT
        });
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('document', JSON.stringify(document));
            const result = await fetch("http://localhost:3000/api/v1/documents",
                {
                    method: 'POST',
                    body: formData
                }
            ).then(response => response.json());

            dispatch({
                type: Types.POST_DOCUMENT_SUCCESS,
                document: result
            });
            dispatch(push('/'));

        } catch (err) {
            dispatch({
                type: Types.POST_DOCUMENT_FAILURE,
                error: err
            });
        }
    };
}

function changeFieldDocument(key, value) {
    return (dispatch) => {
        dispatch({
            type: Types.UPDATE_FIELD_DOCUMENT,
            key: key,
            value: value
        });
    }
}

function changeFileDocument(value) {
    return (dispatch) => {
        dispatch({
            type: Types.UPDATE_FILE_DOCUMENT,
            value: value
        });
    }
}

export default {
    postDocument,
    changeFieldDocument,
    changeFileDocument
}