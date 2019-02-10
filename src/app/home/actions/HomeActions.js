import Types from '../../ActionsTypesConstants';

function requestDocumentsData() {
		return async (dispatch) => {
				dispatch({
						type: Types.REQUEST_DOCUMENTS
				});
				try {
						const result = await fetch("/api/v1/documents").then(response => response.json());
						dispatch({
								type: Types.RECEIVE_DOCUMENTS,
								documents: result
						});
				} catch (err) {
						dispatch({
								type: Types.FETCH_DOCUMENTS_FAILURE,
								error: err
						});
				}
		};
}

export default {
		requestDocumentsData
}