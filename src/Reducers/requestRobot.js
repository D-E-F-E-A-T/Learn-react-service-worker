import { ROBOT_REQUEST_FAILED, ROBOT_REQUEST_SUCCESS, ROBOT_REQUEST_PENDING } from '../Actions/types';

const INITIAL_STATE = {
	pending: false,
	error: '',
	robots: [],
};

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case ROBOT_REQUEST_PENDING:
			return {
				...state,
				pending: true,
			};
		case ROBOT_REQUEST_SUCCESS:
			return {
				...state,
				robots: [...state.robots, ...action.payload],
			};
		case ROBOT_REQUEST_FAILED:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
