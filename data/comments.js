const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const { ObjectId } = require("mongodb");

module.exports = { 
  async createComment(postId, userId, userName, content) {

  },

  async getAllCommentsOfUser(userId) {
   
  },

  async getAllCommentsOfPost(postId) {
    
  },

//   async getCommentsbyName(content) {
   
//   },

  async getCommentById(commentId) {
    
  },

  async deleteCommentById(commentId) {

  },

};