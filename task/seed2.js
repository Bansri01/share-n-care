const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const user = data.user;

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();

    try{
        let user1 = create("img", "Bansri", "Patel", "user01", "bpatel@gmail.com", "helloo", "736-787-8373", "India", "Hello I am Bansri", "Female", "Doctor", 12/02/2020)
    }catch(e){
        console.log(e)
    }

    console.log("Done seeding database");

    await db.serverConfig.close();
}

main();