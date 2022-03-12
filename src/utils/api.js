import axios from "axios";

const BASE_URL = "http://localhost:8080";



export default {
    getAll: () => axios.get(`${BASE_URL}/videos`),
    getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}`),
    postComment: (id,newName,newComment) => axios.post(`${BASE_URL}/videos/${id}/comments`,{
        name: newName,
        comment: newComment,
      }),
    deleteComment: (video_id,comment_id) => axios
    .delete(`${BASE_URL}/videos/${video_id}/comments/${comment_id}`),
    postVideo: (title,description,image) => axios.post(`${BASE_URL}/videos`,{
      title: title,
      description: description,
      image: image,
    }),  

}
