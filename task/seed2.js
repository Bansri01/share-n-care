const connection = require("../config/mongoConnection");
const data = require("../data/");
const user = data.users;

async function main() {
    const db = await connection.connectToDb();
    await db.dropDatabase();


    user1 = await user.createUser("img", "Bans", "Patel", "user01", "bpatel@gmail.com", "helloo12", "736-787-8373", "India", "Hello I am Bansri", "Female", "Doctor", "2021-11-27")
    user2 = await user.createUser("jpg", "krina", "Shah", "user02", "kshah@gmail.com", "true1234", "126-547-8373", "Zimbabwe", "Hello I am Krina. I am from Zimbabwe", "Female", "Patient", "2021-04-27")
    user3 = await user.createUser("img2", "Ross", "Geller", "user03", "rg123@gmail.com", "friends1234", "336-237-4673", "United States", "Hello I am Ross. I am from US", "Male", "Patient", "2021-12-04")
    user4 = await user.createUser("img3", "Moneka", "Bing", "user04", "moneka03@gmail.com", "friends09", "543-217-4863", "China", "Hello I am Moneka. I am from China", "Female", "Doctor", "1971-04-09")
    user5 = await user.createUser("jpg2", "Lee", "min ho", "user05", "lee03@gmail.com", "flowers74", "436-256-4653", "South Korea", "Hello I am Lee. I am from SK", "Male", "Patient", "2021-12-03")
    
    const id1 = user1._id
    const id2 = user2._id

    try{
        let user2 = await user.updateUser(id1, "img", "Bansri", "Patel", "bpatl@gmail.com", "736-787-9999", "New Zealand", "Hello I am Bansri", "Female", "Doctor", "2020-11-20")
    }catch(e){
        console.log(e)
    }

    try{
        let user2 = await user.updateUser(id2, "jpg", "Trisha", "Shah", "tsha@gmail.com", "546-732-1299", "United Kingdom", "Hello I am Trisha", "Female", "Doctor", "1997-11-21")
    }catch(e){
        console.log(e)
    }


    console.log("Done seeding database");

    await connection.closeConnection();
}

main().catch((error) => {
    console.log(error);
});