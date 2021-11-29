const mongoCollections = require("../config/mongoCollections");
const comments = mongoCollections.comments;
const { ObjectId } = require("mongodb");

module.exports = { 
  async createComment(postId, userId, username, content) {
    if(!postId) throw "You must provide the postId!";
    if(!userId) throw "You must provide the userId!";
    if(!username) throw "You must provide the username!";
    if(!content) throw "You must provide the content for the comment!";
    if(typeof postId !== "string") {
      throw "The postId is not a string.";
    }
    if(typeof userId !== "string") {
      throw "The userId is not a string.";
    }
    if(typeof username !== "string") {
      throw "The username is not a string.";
    }
    if(typeof content !== "string") {
      throw "The content is not a string.";
    }

    if(postId.match(/^\s+$/g) || postId === "") {
      throw "The postId is just empty spaces.";
    }
    if(userId.match(/^\s+$/g) || userId === "") {
      throw "The userId is just empty spaces.";
    }
    if(username.match(/^\s+$/g) || username === "") {
      throw "The username is just empty spaces.";
    }
    if(content.match(/^\s+$/g) || content === "") {
      throw "The content is just empty spaces.";
    }

    let commentTime = new Date().toLocaleString();

    let newComment = {
      postId: postId, 
      userId: userId, 
      username: username,
      content: content,
      commentTime: commentTime
    };
    
    const commentCollection = await comments();
    const insertInfo = await commentCollection.insertOne(newComment);
    if(insertInfo.insertedCount === 0) throw "Could not create this comment.";

    const newId = insertInfo.insertedId.toString();
    const  getComment = await this.getCommentById(newId);
    return getComment;
  },

  async getAllCommentsOfUser(userId) {
    if(!userId) throw "You must provide the userId!";
    if(typeof userId !== "string") {
      throw "The userId is not a string.";
    }
    if(userId.match(/^\s+$/g) || userId === "") {
      throw "The userId is just empty spaces.";
    }

    if(userId.length !== 12 && userId.length !== 24) throw "The userId provided is not a valid ObjectId.";
    if(userId.length === 24 && !userId.match(/^[A-Fa-f0-9]+$/g)) throw "The userId provided is not a valid ObjectId.";

    const commentCollection = await comments();
    const commentList = await commentCollection.find({userId: userId}).toArray();
    if(commentList.length !== 0) {
      for(let i = 0; i < commentList.length; i++) {
        commentList[i]._id = commentList[i]._id.toString();
      }
    }
    return commentList;
   
  },

  async getAllCommentsOfPost(postId) {
    if(!postId) throw "You must provide the postId!";
    if(typeof postId !== "string") {
      throw "The postId is not a string.";
    }
    if(postId.match(/^\s+$/g) || postId === "") {
      throw "The postId is just empty spaces.";
    }

    if(postId.length !== 12 && postId.length !== 24) throw "The postId provided is not a valid ObjectId.";
    if(postId.length === 24 && !postId.match(/^[A-Fa-f0-9]+$/g)) throw "The postId provided is not a valid ObjectId.";

    const commentCollection = await comments();
    const commentList = await commentCollection.find({postId: postId}).toArray();
    if(commentList.length !== 0) {
      for(let i = 0; i < commentList.length; i++) {
        commentList[i]._id = commentList[i]._id.toString();
      }
    }
    return commentList;
  },

//   async getCommentsbyName(content) {
   
//   },

  async getCommentById(commentId) {
    if(!commentId) throw "You must provide the commentId.";
    if(typeof commentId !== "string") {
      throw "The commentId is not a string.";
    }
    if(commentId.match(/^\s+$/g) || commentId === "") {
      throw "The commentId is just empty spaces.";
    }
    if(commentId.length !== 12 && commentId.length !== 24) throw "The commentId provided is not a valid ObjectId.";
    if(commentId.length === 24 && !commentId.match(/^[A-Fa-f0-9]+$/g)) throw "The commentId provided is not a valid ObjectId.";

    let parsedId = ObjectId(commentId);
    const commentCollection = await comments();
    const commentById = await commentCollection.findOne({ _id: parsedId });
    if(commentById === null) throw "Could not find the comment with that id (no exist).";
    commentById._id = commentById._id.toString();
    return commentById;
  },

  async deleteComment(commentId) {
    if(!commentId) throw "You must provide the commentId.";
    if(typeof commentId !== "string") {
      throw "The commentId is not a string.";
    }
    if(commentId.match(/^\s+$/g) || commentId === "") {
      throw "The commentId is just empty spaces.";
    }
    if(commentId.length !== 12 && commentId.length !== 24) throw "The commentId provided is not a valid ObjectId.";
    if(commentId.length === 24 && !commentId.match(/^[A-Fa-f0-9]+$/g)) throw "The commentId provided is not a valid ObjectId.";

    let parsedId = ObjectId(commentId);
    const commentCollection = await comments();
    const deletionInfo = await commentCollection.deleteOne({ _id: parsedId });
    if(deletionInfo.deletedCount === 0) {
      throw "Could not delete the comment with that id (no exist).";
    }
    return {commentDeleted: true};
  },

};