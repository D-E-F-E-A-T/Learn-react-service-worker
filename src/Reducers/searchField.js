import { CHANGE_SEARCH_FIELD } from '../Actions/types';

const INITIAL_STATE = {
	searchField: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return {
				...state,
				searchField: action.payload,
			};
		default:
			return state;
	}
};
