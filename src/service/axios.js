import axios from 'axios';
import { token } from '../helper'

const fetch = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})
fetch.defaults.headers.common['Authorization'] = String(token);

export default fetch 