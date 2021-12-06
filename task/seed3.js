const connection = require("../config/mongoConnection");
const data = require("../data");
const posts = data.posts;
const comments = data.comments;

async function main() {
    const db = await connection.connectToDb();
    // await db.dropDatabase();

    // const post1 = await posts.createPost("img", "Bans", "Patel", "user01", "bpatel@gmail.com", "helloo12", "736-787-8373", "India", "Hello I am Bansri", "Female", "Doctor", "2021-11-27")
    
    
    // const id1 = user1._id
    // const id2 = user2._id

    // try{
    //     let user2 = await user.updateUser(id1, "img", "Bansri", "Patel", "bpatl@gmail.com", "736-787-9999", "New Zealand", "Hello I am Bansri", "Female", "Doctor", "2020-11-20")
    // }catch(e){
    //     console.log(e)
    // }

    // try{
    //     let user2 = await user.updateUser(id2, "jpg", "Trisha", "Shah", "tsha@gmail.com", "546-732-1299", "United Kingdom", "Hello I am Trisha", "Female", "Doctor", "1997-11-21")
    // }catch(e){
    //     console.log(e)
    // }


    // console.log("Done seeding database");

    // await connection.closeConnection();

    //const comment = await comments.deleteComment("61ad4bde4310ce4256360d2f");
    // const post = await posts.deletePost("61ad57320cbb2c27b8b1a121");
    // const getall = await comments.getAllCommentsOfPost("61ad52b1bddbc797bb18c948");

    // if(getall.length !== 0) {
    //   for(let i = 0; i < getall.length; i++) {
    //     await comments.deleteComment(getall[i]._id);
    //   }
    // }

    const update = await comments.updateIsLike("61adeb66d6d928c550a2a770", "61a3dedad8226a1572add66f", 0);
    const islike = await comments.checkIsLike("61adeb66d6d928c550a2a770", "61a3dedad8226a1572add66f");
    console.log(islike);
}

main().catch((error) => {
    console.log(error);
});