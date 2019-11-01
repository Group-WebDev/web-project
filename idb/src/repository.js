import axios from 'axios'
const BASE_URL = 'http://localhost:5000';

export function getItem(){
    return axios.get(`${BASE_URL}/api/item/list`)
        .then(response => response.data)
}