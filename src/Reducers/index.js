import { combineReducers } from 'redux';
import robots from './requestRobot';
import searchField from './searchField';

export default combineReducers({
	robots,
	searchField,
});
