const connection = require("../config/mongoConnection");
const data = require("../data/");
const user = data.users;

async function main() {
    const db = await connection.connectToDb();
    await db.dropDatabase();

    try{
        user1 = await user.createUser("user01.jpeg-1639017120258", "Bans", "Patel", "user01", "bpatel@gmail.com", "helloo12", "736-787-8373", "India", "Hello I am Bansri", "Female", "Doctor", "2021-02-29")
    }catch(e){
        console.log(e);
    }
  
    try{
        user2 = await user.createUser("user02.jpeg-1639017199758", "Krina", "Shah", "user02", "kshah@gmail.com", "true1234", "126-547-8373", "Zimbabwe", "Hello I am Krina. I am from Zimbabwe", "Female", "Patient", "2021-04-27")
    }catch(e){
        console.log(e);
    }
  
    try{
        user3 = await user.createUser("RossGeller.jpeg-1639017318602", "Ross", "Geller", "user03", "rg123@gmail.com", "friends1234", "336-237-4673", "United States", "Hello I am Ross. I am from US", "Male", "Patient", "2021-12-04")
    }catch(e){
        console.log(e);
    }
  
    try{
        user4 = await user.createUser("monica.jpeg-1639017441746", "Moneka", "Bing", "user04", "moneka03@gmail.com", "friends09", "543-217-4863", "China", "Hello I am Moneka. I am from China", "Female", "Doctor", "1971-04-09")
    }catch(e){
        console.log(e);
    }
  
    try{
        user5 = await user.createUser("Lee-Min-ho.jpeg-1639017543030", "Lee", "Min Ho", "user05", "dhfjf@gmail.com", "flowers74", "436-256-4653", "South Korea", "Hello I am Lee. I am from SK", "Male", "Patient", "2021-12-03")
    }catch(e){
        console.log(e);
    }
  
    try{
        user6 = await user.createUser("user06.jpeg-1639017613794", "Terry", "Smith", "user06", "terry8989@yahoo.com", "terryuser06", "4785468989", "South Africa", "Hello I am Terry. I like to skate. I want to go on a trip", "Male", "Doctor", "1990-03-11")
    }catch(e){
        console.log(e);
    }
  
    try{
        user7 = await user.createUser("user07.jpeg-1639017688867", "Lyle", "Autin", "user07", "lyle09@rocket.co", "lyleuser@07", "(551)-789-5678", "Belgium", "Hello I am Lyle. I work at a construction company.", "Male", "Patient", "1986-11-27")
    }catch(e){
        console.log(e);
    }
  
    try{
        user8 = await user.createUser("user08.jpeg-1639017757304", "Laura", "Langstass", "user08", "langstass67@mail.com", "laurauser@87", "(656)-989-2318", "Iceland", "Hello I am Laura. I like to workout and remain healthy. I am very health consious", "Female", "Patient", "1989-12-12")
    }catch(e){
        console.log(e);
    }
  
    try{
        user9 = await user.createUser("JohnWick.png-1639017869801", "John", "Wick", "user09", "wick8989@mail.com", "wickuser@09", "7679090454", "Brazil", "Hello I am John. I am an actor. I like dogs", "Male", "Doctor", "1980-11-23")
    }catch(e){
        console.log(e);
    }
  
    try{
        user10 = await user.createUser("user10.jpeg-1639017948313", "Kate", "Williams", "user10", "katew43@mail.com", "kateuser@10", "3468768989", "Kenya", "Hello I am Kate. I like travelling", "Female", "Patient", "1991-08-12")
    }catch(e){
        console.log(e);
    }
  
    try{
        user11 = await user.createUser("user11.jpeg-1639018018451", "Maria", "Hernandez", "user11", "mher9090@hotspot.edu", "heruser@11", "323-987-5678", "Japan", "Hello I am Maria. I like to socialize", "Female", "Patient", "1991-09-15")
    }catch(e){
        console.log(e);
    }
  
    try{
        user12 = await user.createUser("user12.jpeg-1639018099237", "Allie", "Parker", "user12", "alliep12@bits.edu", "alluser@12", "(898)-763-9092", "Argentina", "Hello I am Allie. I like to play volleyball. Also, I want to explore the world as much as I can", "Female", "Doctor", "1986-06-19")
    }catch(e){
        console.log(e);
    }
  
    try{
        user13 = await user.createUser("user13.jpeg-1639018187974", "Shang", "Lee", "user13", "leeshang12@shanghaiu.edu", "shanguser@13", "8978908333", "China", "Hello I am Shang. I want to explore the world as much as I can. I like to read books", "Female", "Patient", "1975-04-12")
    }catch(e){
        console.log(e);
    }
  
    try{
        user14 = await user.createUser("user14.jpeg-1639018255955", "Maya", "Moore", "user14", "mmoore43@gmail.com", "muser@14", "989-767-3456", "Jamaica", "Hello I am Maya. I love adventurous sports. I like to read books too", "Female", "Patient", "1972-02-11")
    }catch(e){
        console.log(e);
    }
  
    try{
        user15 = await user.createUser("user15.jpeg-1639018337826", "Sarah", "Kyler", "user15", "sarahk@yahoo.com", "sarahuser@15", "5467894343", "Spain", "Hello I am Sarah. I am a college student. I like computers", "Female", "Patient", "1997-07-17")
    }catch(e){
        console.log(e);
    }
  
    try{
        user16 = await user.createUser("user16.jpeg-1639018451856", "Eseed", "Badan", "user16", "Ebada96@pocket.in", "badanuser@16", "9085673343", "Turkey", "Hello I am Eseed Badan. I am a Software Developer at Microgadgets", "Male", "Patient", "1985-04-21")
    }catch(e){
        console.log(e);
    }
  
    try{
        user17 = await user.createUser("ben.jpeg-1639018539470", "Ben", "Aflick", "user17", "benaf12@flock.com", "batmenuser@17", "6785673456", "Guatemala", "Hello I am Ben Aflick. I am the new Batmen", "Male", "Doctor", "1980-06-16")
    }catch(e){
        console.log(e);
    }
  
    try{
        user18 = await user.createUser("user18.png-1639018644018", "Ken", "Goodson", "user18", "keng09@rocketmail.co.in", "gooduser@18", "9876789089", "Indonesia", "Hello I am Ken Goodson. I am a cardiologist", "Male", "Doctor", "1971-09-11")
    }catch(e){
        console.log(e);
    }
  
    try{
        user19 = await user.createUser("user19.jpeg-1639018723574", "Charles", "Barkley", "user19", "charlesB90@yahoo.com", "charlesuser@19", "2346578776", "Australia", "Hello I am Charles. I like traveling. I aspire to be a doctor. I want to cure people from diseases", "Male", "Patient", "1995-05-29")
    }catch(e){
        console.log(e);
    }
  
    try{
        user20 = await user.createUser("user20.jpeg-1639018797247", "Shawn", "Rodgers", "user20", "rodgers879@gmail.com", "rodgersuser@20", "8379086789", "Canada", "Hello I am Shawn. I like music. Music heals people", "Male", "Doctor", "1989-03-21")
    }catch(e){
        console.log(e);
    }

    // user1 = await user.createUser("user01.jpeg-1638934231488", "Bans", "Patel", "user01", "bpatel@gmail.com", "helloo12", "736-787-8373", "India", "Hello I am Bansri", "Female", "Doctor", "2021-11-27")
    // user2 = await user.createUser("jpg", "Krina", "Shah", "user02", "kshah@gmail.com", "true1234", "126-547-8373", "Zimbabwe", "Hello I am Krina. I am from Zimbabwe", "Female", "Patient", "2021-04-27")
    // user3 = await user.createUser("img2", "Ross", "Geller", "user03", "rg123@gmail.com", "friends1234", "336-237-4673", "United States", "Hello I am Ross. I am from US", "Male", "Patient", "2021-12-04")
    // user4 = await user.createUser("img3", "Moneka", "Bing", "user04", "moneka03@gmail.com", "friends09", "543-217-4863", "China", "Hello I am Moneka. I am from China", "Female", "Doctor", "1971-04-09")
    // user5 = await user.createUser("jpg2", "Lee", "Min Ho", "user05", "dhfjf@gmail.com", "flowers74", "436-256-4653", "South Korea", "Hello I am Lee. I am from SK", "Male", "Patient", "2021-12-03")
    // user6 = await user.createUser("jpg3", "Terry", "Smith", "user06", "terry8989@yahoo.com", "terryuser05", "4785468989", "South Africa", "Hello I am Terry. I like to skate. I want to go on a trip", "Male", "Doctor", "1990-03-11")
    // user7 = await user.createUser("jpg4", "Lyle", "Autin", "user07", "lyle09@rocket.co", "lyleuser@07", "(551)-789-5678", "Belgium", "Hello I am Lyle. I work at a construction company.", "Male", "Patient", "1986-11-27")
    // user8 = await user.createUser("jpg5", "Laura", "Langstass", "user08", "langstass67@mail.com", "laurauser@87", "(656)-989-2318", "Iceland", "Hello I am Laura. I like to workout and remain healthy. I am very health consious", "Female", "Patient", "1989-12-12")
    // user9 = await user.createUser("jpg7", "John", "Wick", "user09", "wick8989@mail.com", "wickuser@09", "7679090454", "Brazil", "Hello I am John. I am an actor. I like dogs", "Male", "Doctor", "1980-11-23")
    // user10 = await user.createUser("jpg8", "Kate", "Williams", "user10", "katew43@mail.com", "kateuser@10", "3468768989", "Kenya", "Hello I am Kate. I like travelling", "Female", "Patient", "1991-08-12")
    // user11 = await user.createUser("jpg9", "Maria", "Hernandez", "user11", "mher9090@hotspot.edu", "heruser@11", "323-987-5678", "Japan", "Hello I am Maria. I like to socialize", "Female", "Patient", "1991-09-15")
    // user12 = await user.createUser("jpg10", "Allie", "Parker", "user12", "alliep12@bits.edu", "alluser@12", "(898)-763-9092", "Argentina", "Hello I am Allie. I like to play volleyball. Also, I want to explore the world as much as I can", "Female", "Doctor", "1986-06-19")
    // user13 = await user.createUser("jpg11", "Shang", "Lee", "user13", "leeshang12@shanghaiu.edu", "shanguser@13", "8978908333", "China", "Hello I am Shang. I want to explore the world as much as I can. I like to read books", "Female", "Patient", "1975-04-12")
    // user14 = await user.createUser("jpg12", "Maya", "Moore", "user14", "mmoore43@gmail.com", "muser@14", "989-767-3456", "Jamaica", "Hello I am Maya. I love adventurous sports. I like to read books too", "Female", "Patient", "1972-02-11")
    // user15 = await user.createUser("jpg13", "Sarah", "Kyler", "user15", "sarahk@yahoo.com", "sarahuser@15", "5467894343", "Spain", "Hello I am Sarah. I am a college student. I like computers", "Female", "Patient", "1997-07-17")
    // user16 = await user.createUser("jpg14", "Eseed", "Badan", "user16", "Ebada96@pocket.in", "badanuser@16", "9085673343", "Turkey", "Hello I am Eseed Badan. I am a Software Developer at Microgadgets", "Male", "Patient", "1985-04-21")
    // user17 = await user.createUser("jpg15", "Ben", "Aflick", "user17", "benaf12@flock.com", "batmenuser@17", "6785673456", "Guatemala", "Hello I am Ben Aflick. I am the new Batmen", "Male", "Doctor", "1980-06-16")
    // user18 = await user.createUser("jpg16", "Ken", "Goodson", "user18", "keng09@rocketmail.co.in", "gooduser@18", "9876789089", "Indonesia", "Hello I am Ken Goodson. I am a cardiologist", "Male", "Doctor", "1971-09-11")
    // user19 = await user.createUser("jpg17", "Charles", "Barkley", "user19", "charlesB90@yahoo.com", "charlesuser@19", "2346578776", "Australia", "Hello I am Charles. I like traveling. I aspire to be a doctor. I want to cure people from diseases", "Male", "Patient", "1995-05-29")
    // user20 = await user.createUser("jpg18", "Shawn", "Rodgers", "user20", "rodgers879@gmail.com", "rodgersuser@20", "8379086789", "Canada", "Hello I am Shawn. I like music. Music heals people", "Male", "Doctor", "1989-03-21")


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


    console.log("Done seeding database");

    await connection.closeConnection();
}

main().catch((error) => {
    console.log(error);
});