const mongoCollections = require("../config/mongoCollections");
const posts = mongoCollections.posts;
const { ObjectId } = require("mongodb");
const commentData = require('./comments');

module.exports = { 
  async createPost(diseaseId, userId, userName, title, content) {
    if(!diseaseId) throw "You must provide the diseaseId!";
    if(!userId) throw "You must provide the userId!";
    if(!userName) throw "You must provide the userName!";
    if(!title) throw "You must provide a title for the post!";
    if(!content) throw "You must provide the content for the post!";
    if(typeof diseaseId !== "string") {
      throw "The diseaseId is not a string.";
    }
    if(typeof userId !== "string") {
      throw "The userId is not a string.";
    }
    if(typeof userName !== "string") {
      throw "The userName is not a string.";
    }
    if(typeof title !== "string") {
      throw "The title is not a string.";
    }

    if(typeof content !== "string") {
      throw "The content is not a string.";
    }
    if(diseaseId.match(/^\s+$/g) || title === "") {
      throw "The diseaseId is just empty spaces.";
    }
    if(userId.match(/^\s+$/g) || title === "") {
      throw "The userId is just empty spaces.";
    }
    if(userName.match(/^\s+$/g) || title === "") {
      throw "The userName is just empty spaces.";
    }
    if(title.match(/^\s+$/g) || title === "") {
      throw "The title is just empty spaces.";
    }
    if(content.match(/^\s+$/g) || title === "") {
      throw "The content is just empty spaces.";
    }

    let postTime = new Date().toUTCString();

    let newPost = {
      diseaseId: diseaseId, 
      userId: userId, 
      userName: userName,
      title: title,
      content: content,
      postTime: postTime
    };
    
    const postCollection = await posts();
    const insertInfo = await postCollection.insertOne(newPost);
    if(insertInfo.insertedCount === 0) throw "Could not create this post.";

    const newId = insertInfo.insertedId.toString();
    const getPost = await this.getPostById(newId);
    return getPost;
  },

  async getAllPostsOfUser(userId) {
    if(!userId) throw "You must provide the userId!";
    if(typeof userId !== "string") {
      throw "The userId is not a string.";
    }
    if(userId.match(/^\s+$/g) || userId === "") {
      throw "The userId is just empty spaces.";
    }

    const postCollection = await posts();
    const postList = await postCollection.find({userId: userId}).toArray();
    if(postList.length !== 0) {
      for(let i = 0; i < postList.length; i++) {
        postList[i]._id = postList[i]._id.toString();
      }
    }
    return postList;
  },

  async getAllPostsOfForum(diseaseId) {
    if(!diseaseId) throw "You must provide the diseaseId!";
    if(typeof diseaseId !== "string") {
      throw "The diseaseId is not a string.";
    }
    if(diseaseId.match(/^\s+$/g) || diseaseId === "") {
      throw "The diseaseId is just empty spaces.";
    }

    const postCollection = await posts();
    const postList = await postCollection.find({diseaseId: diseaseId}).toArray();
    if(postList.length !== 0) {
      for(let i = 0; i < postList.length; i++) {
        postList[i]._id = postList[i]._id.toString();
      }
    }
    return postList;
  },

  async getPostsbyName(title) {
    if(!title) throw "You must provide the title.";
    if(typeof title !== "string") {
      throw "The title is not a string.";
    }
    if(title.match(/^\s+$/g) || title === "") {
      throw "The title is just empty spaces.";
    }
  
    const postCollection = await posts();
    const postByTitle = await postCollection.find({title: {$regex: title, $options:"$i"}}).toArray();
    if(postByTitle.length !== 0) {
      for(let i = 0; i < postByTitle.length; i++) {
        postByTitle[i]._id = postByTitle[i]._id.toString();
      }
    }
    return postByTitle;
  },

  async getPostById(postId) {
    if(!postId) throw "You must provide the postId.";
    if(typeof postId !== "string") {
      throw "The postId is not a string.";
    }
    if(postId.match(/^\s+$/g) || postId === "") {
      throw "The postId is just empty spaces.";
    }
    if(postId.length !== 12 && postId.length !== 24) throw "The postId provided is not a valid ObjectId.";
    if(postId.length === 24 && !postId.match(/^[A-Fa-f0-9]+$/g)) throw "The postId provided is not a valid ObjectId.";

    let parsedId = ObjectId(postId);
    const postCollection = await posts();
    const postById = await postCollection.findOne({ _id: parsedId });
    if(postById === null) throw "Could not find the post with that id (no exist).";
    postById._id = postById._id.toString();
    return postById;
  },

  async deletePost(postId) {
    if(!postId) throw "You must provide the postId.";
    if(typeof postId !== "string") {
      throw "The postId is not a string.";
    }
    if(postId.match(/^\s+$/g) || postId === "") {
      throw "The postId is just empty spaces.";
    }
    if(postId.length !== 12 && postId.length !== 24) throw "The postId provided is not a valid ObjectId.";
    if(postId.length === 24 && !postId.match(/^[A-Fa-f0-9]+$/g)) throw "The postId provided is not a valid ObjectId.";

    let commentList = commentData.getAllCommentsOfPost(postId);
    if(commentList.length !== 0) {
      for(let i = 0; i < commentList.length; i++) {
        await commentData.deleteCommentById(commentList[i].commentId);
      }
    }

    let parsedId = ObjectId(postId);
    const postCollection = await posts();
    const deletionInfo = await postCollection.deleteOne({ _id: parsedId });
    if(deletionInfo.deletedCount === 0) {
      throw "Could not delete the post with that id (no exist).";
    }
    return {postDeleted: true};
  }
};