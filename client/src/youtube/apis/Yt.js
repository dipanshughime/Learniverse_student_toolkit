import axios from 'axios';
const KEY = 'AIzaSyB0Jpt0B1YhCut1d_I7L5Xwzdm_OZLolRg'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})