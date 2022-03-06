import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "7df8a143-9efa-4f6b-9de0-47e12f1b49c9";


export default {
    getAll: () => axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`),
    getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}?api_key=${API_KEY}`),
    postComment: (id,newName,newComment) => axios.post(`${BASE_URL}/videos/${id}/comments?api_key=${API_KEY}`,{
        name: newName,
        comment: newComment,
      }),
    deleteComment: (video_id,comment_id) => axios
    .delete(`${BASE_URL}/videos/${video_id}/comments/${comment_id}?api_key=${API_KEY}`)  
}
