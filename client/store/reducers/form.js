import { Map, fromJS, List } from 'immutable';

export const UPDATE_SEARCH = 'users/UPDATE_SEARCH';
export const SORT_ACSENDING = 'users/SORT_ACSENDING';

export const DEFAULT_STATE = Map({
    search: "",
    sort: false
});

export default function(state=DEFAULT_STATE, action) {

    if (action.type === UPDATE_SEARCH) {
        return state.set('search', action.payload);
    }

    if (action.type === SORT_ACSENDING) {
        return state.update('sort', (v) => !v);
    }


    return state;
}

export const updateSearch = (value) => ({
    type: UPDATE_SEARCH,
    payload: value
});

export const sortDescending = () => ({
    type: SORT_ACSENDING
});
