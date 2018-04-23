import axios from "axios";

export default {

  getComment: function() {
    return axios.get("/api/comments");
  },

  getOneComment: function(id) {
    return axios.get("/api/comments/" + id);
  },

  deleteComment: function(id) {
    return axios.delete("/api/comments/" + id);
  },

  saveComment: function(comment) {
    return axios.post("/api/comments", comment);
  }
};
