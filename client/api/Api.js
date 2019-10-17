import axios from 'axios';

const axiosApi = axios.create();

export default class Api {
    /** Gets gitHub Users */
    static getUsers() {
        return axiosApi.get('https://api.github.com/users');
    }
};