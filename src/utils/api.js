import axios from "axios";

const BASE_URL = "http://localhost:8080";



export default {
    getAll: () => axios.get(`${BASE_URL}/videos`),
    getVideoById: (id) => axios.get(`${BASE_URL}/videos/${id}`),
    postComment: (id,newName,newComment) => axios.post(`${BASE_URL}/videos/${id}/comments`,{
        name: newName,
        comment: newComment,
      }),
    deleteComment: (videoId,commentId) => axios
    .delete(`${BASE_URL}/videos/${videoId}/comments/${commentId}`),
    postVideo: (title,description,image) => axios.post(`${BASE_URL}/videos`,{
      title: title,
      description: description,
      image: image,
    }), 
    addLike: (videoId) =>{axios.put(`${BASE_URL}/videos/${videoId}/likes`)},
    

}
