import { Map, List, fromJS } from 'immutable';
import Api from '../../api/Api';

export const GET_USERS = 'users/GET_USERS';

export const DEFAULT_STATE = Map({
    users: List()
});

export default function(state=DEFAULT_STATE, action) {

    if (action.type === `${GET_USERS}_FULFILLED`) {
        return state.set('users', fromJS(action.payload).get('data'))
    }

    return state;
}

export const getUsers = () => ({
    type: GET_USERS,
    payload: Api.getUsers()
});
