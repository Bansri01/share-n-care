const connection = require("../config/mongoConnection");
const data = require("../data/");
const user = data.users;

async function main() {
    const db = await connection.connectToDb();
    await db.dropDatabase();

    try{
        let user1 = await user.createUser("img", "Bansri", "Patel", "user01", "bpatel@gmail.com", "helloo12", "736-787-8373", "India", "Hello I am Bansri", "Female", "Doctor", "2020-11-20")
    }catch(e){
        console.log(e)
    }

    console.log("Done seeding database");

    await connection.closeConnection();
}

main().catch((error) => {
    console.log(error);
});