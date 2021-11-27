const connection = require("../config/mongoConnection");
const data = require("../data/");
const user = data.users;

async function main() {
    const db = await connection.connectToDb();
    await db.dropDatabase();


    user1 = await user.createUser("img", "Bans", "Patel", "user01", "bpatel@gmail.com", "helloo12", "736-787-8373", "India", "Hello I am Bansri", "Female", "Doctor", "2021-11-27")
    user2 = await user.createUser("jpg", "krina", "Shah", "user02", "kshah@gmail.com", "true1234", "126-547-8373", "United States", "Hello I am Krina. I am from US", "Female", "Patient", "2021-04-27")

    // const id1 = user1._id

    // try{
    //     let user2 = await user.updateUser(id1, "img", "Bansri", "Patel", "bpatl@gmail.com", "736-787-9999", "India", "Hello I am Bansri", "Female", "Doctor", "2020-11-20")
    // }catch(e){
    //     console.log(e)
    // }


    console.log("Done seeding database");

    await connection.closeConnection();
}

main().catch((error) => {
    console.log(error);
});