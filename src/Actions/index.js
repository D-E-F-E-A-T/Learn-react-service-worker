import { CHANGE_SEARCH_FIELD, ROBOT_REQUEST_FAILED, ROBOT_REQUEST_SUCCESS, ROBOT_REQUEST_PENDING } from './types';

export const changeSearchField = text => {
	return {
		type: CHANGE_SEARCH_FIELD,
		payload: text,
	};
};

export const robotRequest = () => dispatch => {
	dispatch({ type: ROBOT_REQUEST_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(robots => dispatch({ type: ROBOT_REQUEST_SUCCESS, payload: robots }))
		.catch(err => dispatch({ type: ROBOT_REQUEST_FAILED, payload: err.message }));
};
