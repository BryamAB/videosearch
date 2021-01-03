import axios from "axios";


const KEY = 'AIzaSyA05TFKy5VZTJIzbNL9Dd39jIasZL8VQFI';

export default axios.create({
    baseURL:  "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,

        key: KEY
    }

});

