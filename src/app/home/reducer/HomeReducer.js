import Types from '../../ActionsTypesConstants';

const INITIAL_STATE = {
		isLoading: false,
		documents: []
};

const HomeReducer = (state = INITIAL_STATE, action) => {
		switch (action.type) {
				case Types.REQUEST_DOCUMENTS: {
						return {
								...state,
								documents: [],
								isLoading: true
						}
				}
				case Types.RECEIVE_DOCUMENTS: {
						const {documents} = action;
						return {
								...state,
								documents,
								isLoading: false

						}
				}
				default:
						return state;
		}
};

export default HomeReducer;