const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const dis = data.diseases;
const ObjectId  = require('mongodb').ObjectId;


async function main() {
  const db = await dbConnection.connectToDb();
  await db.dropDatabase();

  try {
    let newDisease = await dis.createDisease(
      "Tuberculosis",
      "Tuberculosis (TB) is a potentially serious infectious disease that mainly affects the lungs. The bacteria that cause tuberculosis are spread from person to person through tiny droplets released into the air via coughs and sneezes. Once rare in developed countries, tuberculosis infections began increasing in 1985, partly because of the emergence of HIV, the virus that causes AIDS. HIV weakens a person's immune system, so it can't fight the TB germs. In the United States, because of stronger control programs, tuberculosis began to decrease again in 1993. But it remains a concern. Many tuberculosis strains resist the drugs most used to treat the disease. People with active tuberculosis must take many types of medications for months to get rid of the infection and prevent antibiotic resistance.",
      ["Bad cough that lasts 3 weeks or longer","Coughing up blood or sputum (mucus from deep inside the lungs)","Chest pain","Fever","Fatigue","Loss of appetite","Unintended weight loss","Chills","Night sweats"],
      ["The best way to prevent getting a tuberculosis infection is to avoid being in close contact with a person who has active TB disease.",
      "There is a vaccine against tuberculosis. It’s used in countries where TB is common. It’s not often used in the United States because the chances of being infected with TB are low.",
      "Tuberculosis is treated with antibiotic medicine. The medicine(s) your doctor recommends will depend on many factors. These include your age, your health, whether your TB is active or latent, and whether your TB is drug resistant. This means that certain medicines won’t work on it." ,
      "Don’t drink alcohol or take acetaminophen (one brand name: Tylenol) while taking TB medicines. Alcohol and acetaminophen can increase the risk of liver problems. Always check with your doctor before you take any other medicine. Some medicines interact with TB medicines and can cause side effects.",
      "Cover your mouth and nose with a tissue any time you cough, sneeze, or laugh. Put the tissue in a closed bag before you throw it away.",
      "Avoid close contact with other people.",
      "Sleep in a bedroom by yourself. Air out the room often so the bacteria don’t stay in the room.",
      "Stay home from work or school until your doctor says it’s okay to return.", 
    ],
    ["isoniazid (INH)",
      "rifampin (RIF)",
      "ethambutol (EMB)",
      "pyrazinamide (PZA)"],
    ["TB","Tuberculosis","Tuber","Active TB Disease","Miliary TB","Latent TB Infection","Phthisis"," scrofula","Active Tuberculosis","struma","pulmonary","Miliary Tuberculosis","Latent Tuberculosis"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }

  try {
    let newDisease = await dis.createDisease(
      "Diabetes",
      "Diabetes is a chronic disease that occurs either when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces. Insulin is a hormone that regulates blood sugar. Hyperglycaemia, or raised blood sugar, is a common effect of uncontrolled diabetes and over time leads to serious damage to many of the body's systems, especially the nerves and blood vessels. In 2014, 8.5% of adults aged 18 years and older had diabetes. In 2019, diabetes was the direct cause of 1.5 million deaths and 48% of all deaths due to diabetes occurred before the age of 70 years. Between 2000 and 2016, there was a 5% increase in premature mortality rates (i.e. before the age of 70) from diabetes. In high-income countries the premature mortality rate due to diabetes decreased from 2000 to 2010 but then increased in 2010-2016. In lower-middle-income countries, the premature mortality rate due to diabetes increased across both periods. By contrast, the probability of dying from any one of the four main noncommunicable diseases (cardiovascular diseases, cancer, chronic respiratory diseases or diabetes) between the ages of 30 and 70 decreased by 18% globally between 2000 and 2016.",
      ["Extreme hunger.",
      "Extreme thirst.",
      "Frequent urination.",
      "Unexplained weight loss.",
      "Fatigue or drowsiness.",
      "Blurry vision.",
      "Slow-healing wounds, sores, or bruises.",
      "Dry, itchy skin.",
      "Tingling or numbness in the hands or feet.",
      "Frequent or recurring skin, gum, bladder, or vaginal yeast infections."],
      
      ["Exercising and maintaining a healthy weight can reduce your risk of diabetes. Any amount of activity is better than none. Try to exercise for 30 to 60 minutes most days of the week. Always talk with your doctor before starting an exercise program.",
        " A diet high in fat, calories, and cholesterol increases your risk of diabetes. A poor diet can lead to obesity (another risk factor for diabetes) and other health problems. A healthy diet is high in fiber and low in fat, cholesterol, salt, and sugar. Also, remember to watch your portion size. How much you eat is just as important as what you eat.",
       "Your diet should include lots of complex carbohydrates (such as whole grains), fruits, and vegetables. It’s important to eat at least 3 meals per day and never skip a meal. Eat at about the same time every day. This helps keep your insulin or medicine and sugar levels steady. Avoid empty calories, such as foods high in sugar and fat, or alcohol.",
       "Exercising helps your body use insulin and lower your blood sugar level. It also helps control your weight, gives you more energy, and is good for your overall health. Exercise also is good for your heart, your cholesterol levels, your blood pressure, and your weight. These are all factors that can affect your risk of heart attack and stroke. Talk with your doctor about starting an exercise program.",
       "Losing excess weight and maintaining a healthy body weight will help you in 2 ways. First, it helps insulin work better in your body. Second, it will lower your blood pressure and decrease your risk for heart disease.",
       " If your diabetes can’t be controlled with diet, exercise, and weight control, your doctor may recommend medicine or insulin. Most people who have type 2 diabetes start with an oral medicine (taken by mouth). Oral medicines can make your body produce more insulin. They also help your body use the insulin it makes more efficiently. Some people need to add insulin to their bodies with insulin injections, insulin pens, or insulin pumps. Always take medicines exactly as your doctor prescribes. Oral medicine doesn’t work for everyone. It isn’t effective in the treatment of type 1 diabetes.",
      "The longer your diabetes is uncontrolled, the more damage you do to your health. That’s why treatment is important at any age. Keeping blood sugar levels very close to the ideal can minimize, delay, and in some cases even prevent the problems that diabetes can cause.",
      "Avoid tobacco use – smoking increases the risk of diabetes and cardiovascular disease."
    ],
    ["regular insulin (Humulin and Novolin)",
      "insulin aspart (NovoLog, FlexPen, Fiasp)",
      "insulin glulisine (Apidra)",
      "insulin lispro (Humalog)",
      "insulin isophane (Humulin N, Novolin N)",
      "insulin degludec (Tresiba)",
      "insulin detemir (Levemir)",
      "insulin glargine (Lantus)",
      "insulin glargine (Toujeo)"
    ],
    ["Diabetes",
    " type 1 diabetes ",
    " type 2 diabetes",
    " blood sugar ",
    " blood glucose",
    " Prediabetes",
  "diabetics",
"insulin",
"insulin dependent"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }
  

  
  try {
    let newDisease = await dis.createDisease(
      "Epilepsy",
      "Epilepsy is a disorder of the brain. People who have epilepsy have electrical activity in the brain that is not normal, causing seizures. There are different types of seizures. In some cases, a seizure may cause jerking, uncontrolled movements, and loss of consciousness. In other cases, seizures cause only a period of confusion, a staring spell, or muscle spasms. Epilepsy is also called a “seizure disorder.” Epilepsy is not a mental illness, and it is not a sign of low intelligence. It is also not contagious. Seizures do not normally cause brain damage. Between seizures, a person with epilepsy is no different from anyone else.",
       ["Generalized tonic-clonic (grand mal) seizures",
       "Absence (or petit mal) seizures",
       "Partial (focal) seizures",
      "Aura in vision",
    "Unusual Anxiety",
  "deja vu",
  "extreme happiness",
  "a rising sensation in the abdomen"
],
      
      [
"Stay calm.",
"Don’t move the person to another place.",
"Don’t try to keep the person from moving or shaking.",
"Don’t try to wake the person by shouting at or shaking them.",
"Remove items that could cause injury if the person falls or bumps into them.",
"Gently turn the person on his or her side so any fluid in the mouth can safely come out.",
"Never try to force the person’s mouth open or put anything in it.",
"Place something soft (such as a pillow) under his or her head.",
"Most seizures aren’t life-threatening. You don’t need to call a doctor or an ambulance unless the person isn’t known to have epilepsy or unless the seizure lasts longer than 5 minutes.",
"When the seizure is over, watch the person for signs of confusion.",
"Allow the person to rest or sleep if he or she wishes."
      ],
    ["Oxymazetol",
      "Levipil XR 1000,500,250",
      "Keppra",
      "Frisium",
    "Rivotril"],
    ["Epilepsy","seizures","Convulsive seizures","convolutions","convolution","seizure","convulsion","stroke","attack","fit","collapse","paroxysm","tremor","contortion"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }

  
  try {
    let newDisease = await dis.createDisease(
      "Skin Cancer",
      "Skin cancer is the most common form of cancer in the United States. Almost all skin cancers are the result of too much exposure to ultraviolet light. This is found in sunlight, tanning booths, and sunlamps. Skin cancer is usually one of the most curable types of cancer. Basal cell carcinoma and squamous cell carcinoma are two of the most common forms of skin cancer. They are very curable. These cancers occur in the basal and squamous cell layers at the top of the skin. They are almost always slow-growing. If found early, they are easy to treat and do not spread.Melanoma is a less common but aggressive form of skin cancer. It occurs in skin cells that make a skin color pigment called melanin. If it is not found early, it will likely spread to other tissues. It can spread through the whole body and may cause death. Only 2% of skin cancer cases are melanoma. But it causes the most deaths from skin cancer.",
       ["A for asymmetry – Mole is not symmetrical. This means it’s not the same on both sides. If it was folded in half, the two halves wouldn’t match.",
       "B for border –Edges of the mole are blurry or jagged.",
       "C for color – Changes in the color of a mole. This could be darkening, loss of color, spreading color, or multiple colors.",
       "D for diameter – A mole more than ¼ inch in diameter.",
       "E for evolving – Mole looks different from others or is changing in shape, size, or color.",
       "A mole that itches or bleeds.",
       "A fast-growing mole.",
       "A scaly or crusted growth on the skin.",
       "A sore that won’t heal.",
       "A patch of skin that has changed color."],
      
      ["Avoid the sun.",
      "Use sunscreen.",
      "Wear a wide-brimmed hat, protective clothing, and sunglasses.",
      "Don’t try to get a tan.",
      "Protect your kids from sunburns.",
      "Continue checking your skin. Call  your doctor if you see changes.",
      "Eat a healthy diet, get plenty of sleep, and try to keep your energy up by staying active."
      ],
    ["Radiation",
      "Chemotherapy",
      "Biological therapy",
      "Targeted therapy",
    "Cryotherapy"],
    ["skin cancer","cancer","skin","Basal cell carcinoma.","carcinoma","Melanoma","Squamous cell carcinoma"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }


  try {
    let newDisease = await dis.createDisease(
      "ACL Injury",
      "ACL refers to the anterior cruciate ligament. It is 1 of 4 ligaments in your knee. The other knee ligaments are PCL (posterior cruciate ligament), MCL (medial collateral ligament), and LCL (lateral collateral ligament). The ACL is located behind the kneecap (patella). It stabilizes the knee when it rotates. The ACL and PCL connect your thigh bone (femur) to your shin bone (tibia). An ACL injury is the overstretching or tearing of the ACL ligament. A torn ACL is a common knee injury. On average, women are 2 to 8 times more at risk of ACL injuries than men. Teenagers also are getting ACL injuries at an increased rate, probably because more kids are involved in organized sports. The increase in ACL injuries is also due to more awareness and advanced testing.",
       ["The primary sign of an ACL injury is a popping noise. This is often combined with pain and swelling",
       "You could experience grinding feelings of your bones or kneecap",
       "Another sign is not being able to put weight on your leg. People with a mild ACL injury might feel like their knee is unstable, or like it might “give out” when they are using it.",
       "If you are moving and quickly stop or change directions and you feel the Knee Pain",
       "Swelling that starts immediately (but can start four to six hours after the injury) and lasts for two to four weeks",
       "Loss of range of motion in your knee.",
       "Tenderness.",
      "Discomfort when you walk."],
      
      ["After surgery you’ll need to keep your wound clean and dry. You’ll use ice to reduce swelling and pain. You may use a brace and crutches",
        "You’ll have physical therapy to strengthen your knee and the muscles around it. The first few days following surgery, you’ll perform gentle range-of-motion and simple strengthening exercises, and some weight-bearing exercises. Physical therapy will start within the first week, including advanced strengthening and balance activities.",
       "After about 12 to 16 weeks, if you’re not an athlete, sport-specific activities are added to the rehabilitation program, such as hopping, jumping and agility drills. An athlete should be able to return to normal activity about six to nine months after the ACL surgery.",
       "Putting a brace around your knee will keep it stable. You’ll have to use crutches so that you don’t put weight on that leg.",
       "Physical therapy: Exercises will help your knee function and strengthen the leg muscles around it, supporting it",
       "If you play soccer, basketball and volleyball, you should be especially mindful of two things: how you take hard, quick steps to accelerate in another direction (or “cut”) and how you land on your feet from a jump or a step (“plant”)."
      ],
    [
      "Oxycodone/acetaminophen –10 mg/325 (Percocet®) Take as directed for pain (with food)",
      "Hydrocodone/acetaminophen – 5 mg/325 (Norco®) ",
      "Oxycodone Hydrochloride –10 mg (OxyContin®)",
      "Oxycodone – 5mg.",
      "Promethazine (Phenergan®)",
      "Zolpidem (Ambien®) ",
      "Ondansetron (Zofran®)"],
    ["arthroscope","ACL","anterior cruciate ligament","Ligament","ligament Tear","tear","Tissue Tear","Knee Pain","Knees","bones","Tenderness","tendon","reconstruct","ACL Reconstruction"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }

  // try {
  //   let newDisease = await dis.createDisease(
  //     "",
  //     "",
  //      ["","","","","","",""],
      
  //     ["",
  //       "",
  //      "",
  //      "",
  //      "",
  //      ""
  //     ],
  //   ["",
  //     "",
  //     "",
  //     ""],
  //   ["","","","","",""]

  //     );
  //     console.log("Done seeding database");
  // } catch (e) {
  //   console.log(e);
  // }


  await dis.searchDisease("cancer");
  await dbConnection.closeConnection();
}

main();