import { combineReducers } from 'redux';
import users from './users';
import form from './form';

export default combineReducers({
    users,
    form
});