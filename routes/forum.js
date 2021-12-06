const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;
const commentData = data.comments;
const diseaseData = data.diseases;

router.get('/:id', async (req, res) => {
    try {
      const postList = await postData.getAllPostsOfForum(req.params.id);
      const getDisease = await diseaseData.getDiseaseById(req.params.id);
      res.render('forum/forum', {
        title: getDisease.diseaseName + " Forum",
        forumName: getDisease.diseaseName + " Forum",
        getDiseaseId: getDisease._id.toString(),
        postList: postList
      });
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

router.get('/post/:id', async (req, res) => {
    try {
      const getPost = await postData.getPostById(req.params.id);
      const getComments = await commentData.getAllCommentsOfPost(req.params.id);
      //const getPostLike = await postData.checkIsLike(req.params.id, req.session.user);
      const getPostLikes = await postData.checkIsLike(req.params.id, "61a3dedad8226a1572add77f");
      //const getCommentLikes = await commentData.checkIsLike(req.params.id, "61a3dedad8226a1572add66f");
      res.render('forum/post', {
        title: getPost.title,
        getPost: getPost,
        getComments: getComments,
        // likes: getPostLikes.likes,
        // dislikes: getPostLikes.dislikes,
        userId: "61a3dedad8226a1572add66f"
      });
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

router.post('/search', async (req, res) => {
  const postName = req.body.postName;
  try {
    const searchPost= await postData.getPostsbyName(postName);
    res.render('forum/search', {
      title: "Search Results",
      searchPost:searchPost
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }

});

router.post('/:id', async (req, res) => {
    const diseaseId = req.params.id;
    const title = req.body.postTitle;
    const content = req.body.postContent;
    try {
      //const newPost= await postData.createPost(diseaseId, req.session.user._id, req.session.user.username, title, content);
      const newPost= await postData.createPost(diseaseId, "61a3dedad8226a1572add66f", "newuser", title, content);
      res.redirect(`/forum/${diseaseId}`);
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

router.post('/post/:id', async (req, res) => {
  const postId = req.params.id;
  const content = req.body.commentContent;
  try {
    const newComment = await commentData.createComment(postId, "61a3dedad8226a1572add66f", "newuser", content);
    res.redirect(`/forum/post/${postId}`);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});


router.post('/delete/post/:id', async (req, res) => {
    if(!req.params.id) {
      res.status(400).json({ error: "You must Supply an ID to delete." });
      return;
    }
    try {
      await postData.getPostById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Could not find a post with that id." });
      return;
    }
    try {
      const getpost = await postData.getPostById(req.params.id);
      const diseaseId = getpost.diseaseId;
      const postId = req.body.postId;
      await postData.deletePost(postId);
      //res.status(200).json({ postId: req.params.id, "deleted": true });
      res.redirect(`/forum/${diseaseId}`);
    } catch (e) {
      res.status(500).json({ error: e });
    }
});

router.post('/delete/comment/:id', async (req, res) => {
      if(!req.params.id) {
        res.status(400).json({ error: "You must Supply an ID to delete." });
        return;
      }
      try {
        await commentData.getCommentById(req.params.id);
      } catch (e) {
        res.status(404).json({ error: "Could not find a comment with that id." });
        return;
      }
      try {
        const getcomment = await commentData.getCommentById(req.params.id);
        const postId = getcomment.postId;
        const commentId = req.body.commentId;
        await commentData.deleteComment(commentId);
        //res.status(200).json({ commentId: req.params.id, "deleted": true });
        res.redirect(`/forum/post/${postId}`);
      } catch (e) {
        res.status(500).json({ error: e });
      }
});

router.post('/like/:pid/:uid', async (req, res) => {
  try {
    await postData.getPostById(req.params.pid);
  } catch (e) {
    res.status(404).json({ error: "Could not find a post with that id." });
    return;
  }

  try {
    const pid = req.body.pid;
    const uid = req.body.uid;
    const likeStatus = await postData.checkIsLike(pid, uid);
    if(likeStatus === 1) {
      await postData.updateIsLike(pid, uid, 2);
    }
    if(likeStatus === 0) {
      await postData.updateIsLike(pid, uid, 1);
    }
    if(likeStatus === 2) {
      await postData.updateIsLike(pid, uid, 1);
    }
    res.redirect(`/forum/post/${pid}`);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});


router.post('/dislike/:pid/:uid', async (req, res) => {
  try {
    await postData.getPostById(req.params.pid);
  } catch (e) {
    res.status(404).json({ error: "Could not find a post with that id." });
    return;
  }

  try {
    const pid = req.body.pid;
    const uid = req.body.uid;
    const likeStatus = await postData.checkIsLike(pid, uid);
    if(likeStatus === 1) {
      await postData.updateIsLike(pid, uid, 0);
    }
    if(likeStatus === 0) {
      await postData.updateIsLike(pid, uid, 2);
    }
    if(likeStatus === 2) {
      await postData.updateIsLike(pid, uid, 0);
    }
    res.redirect(`/forum/post/${pid}`);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post('/commentLike/:cid/:uid', async (req, res) => {
  try {
    await commentData.getCommentById(req.params.cid);
  } catch (e) {
    res.status(404).json({ error: "Could not find a comment with that id." });
    return;
  }

  try {
    const cid = req.body.cid;
    const uid = req.body.uid;
    const getcomment = await commentData.getCommentById(req.params.cid);
    const postId = getcomment.postId;
    const likeStatus = await commentData.checkIsLike(cid, uid);
    if(likeStatus === 1) {
      await commentData.updateIsLike(cid, uid, 2);
    }
    if(likeStatus === 0) {
      await commentData.updateIsLike(cid, uid, 1);
    }
    if(likeStatus === 2) {
      await commentData.updateIsLike(cid, uid, 1);
    }
    res.redirect(`/forum/post/${postId}`);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post('/commentDislike/:cid/:uid', async (req, res) => {
  try {
    await commentData.getCommentById(req.params.cid);
  } catch (e) {
    res.status(404).json({ error: "Could not find a comment with that id." });
    return;
  }

  try {
    const cid = req.body.cid;
    const uid = req.body.uid;
    const getcomment = await commentData.getCommentById(req.params.cid);
    const postId = getcomment.postId;
    const likeStatus = await commentData.checkIsLike(cid, uid);
    if(likeStatus === 1) {
      await commentData.updateIsLike(cid, uid, 0);
    }
    if(likeStatus === 0) {
      await commentData.updateIsLike(cid, uid, 2);
    }
    if(likeStatus === 2) {
      await commentData.updateIsLike(cid, uid, 0);
    }
    res.redirect(`/forum/post/${postId}`);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
