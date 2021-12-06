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
    ["TB","Tuberculosis","Tuber","Active TB Disease","Miliary TB","Latent TB Infection","Phthisis"," scrofula","Active Tuberculosis","struma","pulmonary","Miliary Tuberculosis","Latent Tuberculosis","cough"]

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
    ["Epilepsy","seizures","Convulsive seizures","convolutions","convolution","seizure","convulsion","stroke","attack","fit","collapse","paroxysm","tremor","contortion","stress","mental","brain","nervous system"]

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
    ["skin cancer","cancer","skin","Basal cell carcinoma.","carcinoma",
    "Melanoma","Squamous cell carcinoma","Allergy","Skin Allergy","Germs",
    "skin rashes","rashes","dark spots","spots","itching"]

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

   try {
    let newDisease = await dis.createDisease(
      "Hypertension",
      "High blood pressure (hypertension) is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.",
       ["Most people with high blood pressure have no signs or symptoms, even if blood pressure readings reach dangerously high levels.",
        "A few people with high blood pressure may have headaches, shortness of breath or nosebleeds",
        "The above signs and symptoms aren't specific and usually don't occur until high blood pressure has reached a severe or life-threatening stage."],
      
      ["Current guidelines recommend that all people, including those with hypertension, engage in at least 150 minutesTrusted Source of moderate-intensity, aerobic exercise every week, or 75 minutes per week of high-intensity exercise.",
        "Avoiding or learning to manage stress can help a person control blood pressure.",
       "Reducing salt intake, moderating alcohol consumption, and eating more fruits and vegetables and less fat."
      ],
    ["Thiazides",
      "Chlorthalidone",
      "indapamide",
      "beta-blockers",
    "alpha-blockers",
  "vasodilators",
"angiotensin-converting enzyme (ACE) inhibitors",
"angiotensin receptor blockers"
],
    ["hypertension","high blood pressure","stress","pressure","tension","Hyper","blood Pressure","sleep","no sleep"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }


  try {
    let newDisease = await dis.createDisease(
      "Heart Disease",
      "The term “heart disease” refers to several types of heart conditions. The most common type of heart disease in the United States is coronary artery disease (CAD), which affects the blood flow to the heart. Decreased blood flow can cause a heart attack. ",
       ["Chest pain","chest tightness","chest pressure","and chest discomfort (angina)","Shortness of breath","Pain, numbness, weakness or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed","Pain in the neck, jaw, throat, upper abdomen or back"],
      
      ["Don't smoke.",
      "Control other health conditions, such as high blood pressure, high cholesterol and diabetes.",
      "Exercise at least 30 minutes a day on most days of the week.",
      "Eat a diet that's low in salt and saturated fat.",
      "Maintain a healthy weight.",
      "Reduce and manage stress.",
      "Practice good hygiene."
      ],
    ["Anticoagulants",
      "Antiplatelet therapies",
      "Angiotensin-converting enzyme inhibitors",
      "Angiotensin-converting enzyme inhibitors",
      "Beta-blockers",
      "Calcium channel blockers",
      "Cholesterol-lowering medications",
      "Cholesterol-lowering medications",
      "Digitalis",
      "Diuretics",
      "Vasodilator"
      ],
    ["heart disease","heart attack","arrhythmia","heart failure","attack","heart","fainted","cardiovascular disease","arrest","cardiac arrest","chest pains","coronary","coronary infarction","stroke"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }

  
  try {
    let newDisease = await dis.createDisease(
      "Asthma",
      "Asthma is a chronic (long-term) disease of the lungs. It inflames and narrows the airways, making it harder to breathe. These are tubes that carry air into and out of your lungs. It most often starts in childhood but can affect people of all ages.The airways of people who have asthma are extra sensitive to the things they’re allergic to (allergens). They are also sensitive to certain substances that can be inhaled through the air.Asthma symptoms start when irritants cause the lining of the airways to become inflamed (swollen) and narrow. The muscles around the airways can then spasm (contract rapidly). This causes the airways to narrow even more. When the lining of the airways is inflamed, it produces more mucus. The mucus clogs the airways and further blocks the flow of air. When these symptoms are severe and not easily controlled, it’s called an 'asthma attack.'",      
       ["Airway blockage: When you breathe as usual, the bands of muscle around your airways are relaxed, and air moves freely. But when you have asthma, the muscles tighten. It’s harder for air to pass through.",
       "Inflammation: Asthma causes red, swollen bronchial tubes in your lungs. This inflammation can damage your lungs. Treating this is key to managing asthma in the long run.",
       "Airway irritability: People with asthma have sensitive airways that tend to overreact and narrow when they come into contact with even slight triggers."
      ],
      ["Coughing: Coughing from asthma is usually worse early in the morning and at night. This can lead to problems sleeping.",
      "Tightness in the chest. You may feel breathless and like something is squeezing your chest.",
      "Wheezing. A hoarse, squeaky, musical, or whistling sound when you breathe.",
      "Coughing with mucus."],
      ["Beclomethasone (QVAR)",
      "Budesonide (Pulmicort)",
      "Montelukast (Singulair)",
      "Formoterol (Perforomist)",
      "Budesonide and formoterol (Symbicort)",
      "Fluticasone and vilanterol (Breo)",
      "Mometasone and formoterol (Dulera)",
      "Levalbuterol (Xopenex HFA)",
      "Ipratropium (Atrovent FHA)",
      "Tiotropium bromide (Spiriva)"
      ],

    ["Asthma","asthma attack","bronchial asthma","attack","bronchospasm","respiratory disease","respiratory disorder","respiratory illness","status asthmaticus","choking","exhausted"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }

  
  try {
    let newDisease = await dis.createDisease(
      "Gout",
      "Gout is a common and complex form of arthritis that can affect anyone. It's characterized by sudden, severe attacks of pain, swelling, redness and tenderness in one or more joints, most often in the big toe.An attack of gout can occur suddenly, often waking you up in the middle of the night with the sensation that your big toe is on fire. The affected joint is hot, swollen and so tender that even the weight of the bedsheet on it may seem intolerable.",
       ["Intense joint pain. Gout usually affects the big toe, but it can occur in any joint. Other commonly affected joints include the ankles, knees, elbows, wrists and fingers. The pain is likely to be most severe within the first four to 12 hours after it begins.",
       "Lingering discomfort. After the most severe pain subsides, some joint discomfort may last from a few days to a few weeks. Later attacks are likely to last longer and affect more joints.",
       "Inflammation and redness. The affected joint or joints become swollen, tender, warm and red.",
       "Limited range of motion. As gout progresses, you may not be able to move your joints normally.",
       "The symptoms of gout may be sudden and often start at night. The affected joint swells and becomes red, hot, and painful."
      ],
      
      ["Drink plenty of water to help your kidneys function better and avoid dehydration.",
        "Exercise regularly to stay at a healthy weight. Extra weight increases uric acid in your body and puts more stress on joints.",
       "Do your best to limit the purines in your body, since these chemicals can trigger uric acid buildup.",
       "Foods and drinks containing high purine levels include: Alcohol, Red meat and organ meats (liver, for example), Shellfish, Gravy, Drinks and foods high in fructose (fruit sugar), Protein from animal sources.",
       "All protein from animal flesh can potentially lead to elevated uric acid levels."
      ],
    ["NSAIDs",
      "Colchicine",
      "Corticosteroids",
      "Allopurinol",
    "Febuxostat",
    "Pegloticase",
    "Probenecid"
  ],
    ["gout","gouty arthritis","crystalline arthritis","urarthritis","arthritis","gustation"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }



  
  try {
    let newDisease = await dis.createDisease(
      "Hyperlipidemia",
      "Hyperlipidemia (high cholesterol) means your blood has too many lipids (fats) in it. These can add up and lead to blockages in your blood vessels. This is why high cholesterol can put you at risk for a stroke or heart attack. But you can make lifestyle changes like eating healthier and exercising to lower your cholesterol. Medicine can help, too.",
       ["Most people don’t have symptoms when their cholesterol is high",
       "People who have a genetic problem with cholesterol clearance that causes very high cholesterol levels may get xanthomas (waxy, fatty plaques on the skin) or corneal arcus (cholesterol rings around the iris of the eye). ",
        ],
      
      ["Exercising",
        "Quitting smoking.",
       "Sleeping at least seven hours each night.",
       "Keeping your stress level under control.",
       "Eating healthier foods.",
       "Limiting how much alcohol you drink.",
       "Losing a few pounds to reach a healthy weight."
      ],
    ["simvastatin",
      "lovastatin",
      "atorvastatin",
      "rosuvastatin",
    "evolocumab (repatha)"],
    ["hyperlipidemia","high cholesterol","hypercholesterolemia","lipemia","hyperlipaemia"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }




  

  try {
    let newDisease = await dis.createDisease(
      "Malaria",
      "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills. While the disease is uncommon in temperate climates, malaria is still common in tropical and subtropical countries. Each year nearly 290 million people are infected with malaria, and more than 400,000 people die of the disease. To reduce malaria infections, world health programs distribute preventive drugs and insecticide-treated bed nets to protect people from mosquito bites. The World Health Organization has recommended a malaria vaccine for use in children who live in countries with high numbers of malaria cases. Protective clothing, bed nets and insecticides can protect you while traveling. You also can take preventive medicine before, during and after a trip to a high-risk area. Many malaria parasites have developed resistance to common drugs used to treat the disease. Some people who have malaria experience cycles of malaria 'attacks.' An attack usually starts with shivering and chills, followed by a high fever, followed by sweating and a return to normal temperature. Malaria signs and symptoms typically begin within a few weeks after being bitten by an infected mosquito. However, some types of malaria parasites can lie dormant in your body for up to a year.",
       ["Fever",
       "Chills",
       "General feeling of discomfort",
       "Headache",
       "Nausea and vomiting",
       "Diarrhea",
       "Abdominal pain",
       "Muscle or joint pain",
       "Fatigue",
       "Rapid breathing",
       "Rapid heart rate",
       "Cough"],
      
      ["If you live in or are traveling to an area where malaria is common, take steps to avoid mosquito bites. Mosquitoes are most active between dusk and dawn",
      "Cover your skin. Wear pants and long-sleeved shirts. Tuck in your shirt, and tuck pant legs into socks.",
      "Apply insect repellent to skin. Use an insect repellent registered with the Environmental Protection Agency on any exposed skin. These include repellents that contain DEET, picaridin, IR3535, oil of lemon eucalyptus (OLE), para-menthane-3,8-diol (PMD) or 2-undecanone. Do not use a spray directly on your face. Do not use products with OLE or PMD on children under age 3.",
      "Apply repellent to clothing. Sprays containing permethrin are safe to apply to clothing.",
      "Sleep under a net. Bed nets, particularly those treated with insecticides, such as permethrin, help prevent mosquito bites while you are sleeping."
      ],
    ["Chloroquine phosphate.",
      "Artemisinin-based combination therapies (ACTs). ",
      "Atovaquone-proguanil (Malarone)",
      "Quinine sulfate (Qualaquin) with doxycycline (Oracea, Vibramycin, others)",
    "Primaquine phosphate"],
    ["Malaria","ague","jungle fever","marsh or swamp fever","paludism","Plasmodium falciparum","falciparum","Plasmodium malariae","Plasmodium"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }

  
  try {
    let newDisease = await dis.createDisease(
      "Chicken Pox",
      "Chickenpox is an infection caused by the varicella-zoster virus. It causes an itchy rash with small, fluid-filled blisters. Chickenpox is highly contagious to people who haven't had the disease or been vaccinated against it. Chickenpox infection is caused by the varicella-zoster virus. It can spread through direct contact with the rash. It can also spread when a person with the chickenpox coughs or sneezes and you inhale the air droplets. Chickenpox is normally a mild disease. But it can be serious and can lead to complications including: Bacterial infections of the skin, soft tissues, bones, joints or bloodstream (sepsis) Dehydration, Pneumonia, Inflammation of the brain (encephalitis), Toxic shock syndrome, Reye's syndrome in children and teenagers who take aspirin during chickenpox, Death. Today, a vaccine is available that protects children against chickenpox. Routine vaccination is recommended by the U.S. Centers for Disease Control and Prevention (CDC). The chickenpox vaccine is a safe, effective way to prevent chickenpox and its possible complications.",
       ["The itchy blister rash caused by chickenpox infection appears 10 to 21 days after exposure to the virus and usually lasts about five to 10 days",
       "Fever",
      "Loss of appetite",
      "Headache",
      "Tiredness and a general feeling of being unwell (malaise)",
      "Once the chickenpox rash appears, it goes through three phases:",
      "Raised pink or red bumps (papules), which break out over several days",
      "Small fluid-filled blisters (vesicles), which form in about one day and then break and leak",
      "Crusts and scabs, which cover the broken blisters and take several more days to heal"],
      
      ["The chickenpox (varicella) vaccine is the best way to prevent chickenpox. Experts from the CDC estimate that the vaccine provides complete protection from the virus for nearly 98% of people who receive both of the recommended doses. When the vaccine doesn't provide complete protection, it significantly lessens the severity of chickenpox.",
        "Young children: In the United States, children receive two doses of the varicella vaccine — the first between ages 12 and 15 months and the second between ages 4 and 6 years — as part of the routine childhood vaccination schedule. The vaccine can be combined with the measles, mumps and rubella vaccine, but for some children between the ages of 12 and 23 months, the combination may increase the risk of fever and seizure from the vaccine. Discuss the pros and cons of combining the vaccines with your child's doctor.",
       "Unvaccinated older children: Children ages 7 to 12 years who haven't been vaccinated should receive two catch-up doses of the varicella vaccine, given at least three months apart. Children age 13 or older who haven't been vaccinated should also receive two catch-up doses of the vaccine, given at least four weeks apart.",
       "Unvaccinated adults who've never had chickenpox and are at high risk of exposure. This includes health care workers, teachers, child care employees, international travellers, military personnel, adults who live with young children and all women of childbearing age. Adults who've never had chickenpox or been vaccinated usually receive two doses of the vaccine, four to eight weeks apart. If you don't remember whether you've had chickenpox or the vaccine, a blood test can determine your immunity.",
       "The chickenpox vaccine isn't approved for: Pregnant women, 	People who have weakened immune systems, such as those who are infected with HIV, or people who are taking immune-suppressing medications"
      ],
    ["acyclovir",
      "Sitavig",
      "Zovirax",
      "diphenhydramine"],
    ["Chicken","Chicken Pox","Pox","Skin","Dots","Varicella","Zoster","Shingles","Varicella-Zoster"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }


  try {
    let newDisease = await dis.createDisease(
      "COVID-19",
      "A new virus called severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) was identified as the cause of a disease outbreak that began in China in 2019. The disease is called coronavirus disease 2019 (COVID-19).In March 2020, the World Health Organization (WHO) declared COVID-19 a pandemic. Public health groups, including the U.S. Centers for Disease Control and Prevention (CDC) and WHO, are monitoring the pandemic and posting updates on their websites. These groups have also issued recommendations for preventing the spread of the virus that causes COVID-19.How does the coronavirus spread? Data has shown that the COVID-19 virus mainly spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus coughs, sneezes, breathes, sings or talks. These droplets can be inhaled or land in the mouth, nose or eyes of a person nearby. Sometimes the COVID-19 virus can spread when a person is exposed to small droplets or aerosols that stay in the air for several minutes or hours — called airborne transmission. The virus can also spread if you touch a surface with the virus on it and then touch your mouth, nose or eyes. But the risk is low. The COVID-19 virus can spread from someone who is infected but has no symptoms. This is called asymptomatic transmission. The COVID-19 virus can also spread from someone who is infected but hasn't developed symptoms yet. This is called presymptomatic transmission. It's possible to get COVID-19 twice or more, but this is uncommon.",
       ["Fever or chills",
       "Cough",
       "Shortness of breath or difficulty breathing",
       "Fatigue",
       "Muscle or body aches",
       "Headache",
       "New loss of taste or smell",
      "Sore throat",
    "Congestion or runny nose",
    "Diarrhea",
    "Nausea or vomiting"

  ],

      
      [
        "If you haven't gotten a COVID-19 vaccine, you can reduce your risk of infection from the COVID-19 virus and reduce the risk of spreading it to others. The CDC and WHO recommend following these precautions:",
"Keep at least 6 feet (2 meters) of distance between yourself and people outside your household.",
"Avoid crowds and indoor places that have poor airflow (ventilation).",
"Wash your hands often with soap and water for at least 20 seconds. If you’re not able to wash your hands, use an alcohol-based hand sanitizer that contains at least 60% alcohol.",
"Wear a mask in public places, especially when social distancing is difficult.",
"Cover your mouth and nose with your elbow or a tissue when you cough or sneeze. Throw away the used tissue. Wash your hands right away.",
"Avoid touching your eyes, nose and mouth.",
"Clean and disinfect often-touched surfaces daily.",
"If you have a chronic medical condition, you may have a higher risk of serious illness. Check with your health care provider about other ways to protect yourself.",
"If you develop symptoms or you've been exposed to the virus that causes COVID-19, contact your health care provider for medical advice. Your health care provider will likely recommend that you get tested for COVID-19. If you have emergency COVID-19 symptoms, such as trouble breathing, seek care immediately. If you need to go to a hospital, call ahead so that health care providers can take steps to ensure that others aren't exposed.",
"Take the following precautions to avoid spreading the virus that causes COVID-19:",
"Stay home from work, school and public areas and stay in isolation, except to get medical care.",
"Avoid public transportation, taxis and ride-hailing services.",
"Wear a cloth face mask around other people or pets.",
"Wash your hands frequently with soap and water for at least 20 seconds.",
"Isolate yourself as much as possible from other people or pets in your home.",
"Use a separate bedroom and bathroom if possible.",
"Avoid sharing dishes, glasses, bedding and other household items.",
"Clean and disinfect often-touched surfaces daily."
      ],
    ["Antiviral drugs. In addition to remdesivir, other antiviral drugs being tested include favipiravir and merimepodib. Studies have found that the combination of lopinavir and ritonavir isn't effective.",
    "Dexamethasone. The corticosteroid dexamethasone is one type of anti-inflammatory drug that researchers are studying to treat or prevent organ dysfunction and lung injury from inflammation. Studies have found that it reduces the risk for deaths by about 30% for people on ventilators and by about 20% for people who needed supplemental oxygen.",
    "The U.S. National Institutes of Health has recommended this drug for people hospitalized with COVID-19 who are on mechanical ventilators or need supplemental oxygen. Other corticosteroids, such as prednisone, methylprednisolone or hydrocortisone, may be used if dexamethasone isn't available. Dexamethasone and other corticosteroids may be harmful if given for less severe COVID-19 infection.",
    "In some cases, the drugs tocilizumab or baricitinib may be given with dexamethasone in hospitalized people who are on mechanical ventilation or need supplemental oxygen. Remdesivir may be given with dexamethasone in hospitalized people who need supplemental oxygen or who are on mechanical ventilation.",
    "Anti-inflammatory therapy. Researchers study many anti-inflammatory drugs to treat or prevent dysfunction of several organs and lung injury from infection-associated inflammation.",
    "Immune-based therapy. Researchers study the use of a type of immune-based therapy called convalescent plasma. The FDA has granted emergency use authorization for convalescent plasma therapy to treat COVID-19. Convalescent plasma is blood donated by people who've recovered from COVID-19. Convalescent plasma with high antibodies may be used to treat some hospitalized people ill with COVID-19 who are either early in their illness or who have weakened immune systems.",
    "Researchers also study other immune-based therapies, including mesenchymal stem cells and monoclonal antibodies. Monoclonal antibodies are proteins created in a lab that can help the immune system fight off viruses.",
    "Several monoclonal antibody medications are available. These include sotrovimab, a combination of bamlanivimab and etesevimab, and a combination of two antibodies called casirivimab and imdevimab. These drugs are used to treat mild to moderate COVID-19 in people who have a higher risk of developing serious illness due to COVID-19. Treatment consists of a single intravenous infusion given in an outpatient setting. To be most effective, these medications need to be given soon after COVID-19 symptoms start and prior to hospitalization.",
    "The FDA has also authorized the use of casirivimab and imdevimab as well as bamlanivimab and etesevimab as a treatment for people at higher risk of serious illness who have recently been exposed to the COVID-19 virus or who are at high risk of exposure. For example, people at high risk of exposure may include those living in nursing homes or prisons where others have recently been infected with the COVID-19 virus. This treatment is for people who aren't fully vaccinated, or who are fully vaccinated but have a weakened immune system.",
    "Drugs being studied that have uncertain effectiveness. Researchers study amlodipine and losartan. But it's not yet known how effective these drugs may be in treating or preventing COVID-19. Famotidine isn’t likely to be beneficial in treating COVID-19.",
    "Ivermectin. Ivermectin isn't a drug for treating viruses and the FDA hasn’t approved use of this drug to treat or prevent COVID-19. Taking large doses of this drug can cause serious harm. Don't use medications intended for animals on yourself.",
    "Hydroxychloroquine and chloroquine. These malaria drugs were authorized for emergency use by the FDA during the COVID-19 pandemic. However, the FDA withdrew that authorization when data analysis showed that the drugs are not effective for treating COVID-19. They can also cause serious heart problems.",
    "Drugs to prevent COVID-19. Researchers are studying drugs to prevent COVID-19 before and after exposure to the virus."],
    ["corona","covid","covid-19","coronavirus","virus","Sars","Sars-covid","omicron"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }


  
  try {
    let newDisease = await dis.createDisease(
      "Small Pox",
      "Smallpox is a contagious, disfiguring and often deadly disease that has affected humans for thousands of years. Naturally occurring smallpox was wiped out worldwide by 1980 — the result of an unprecedented global immunization campaign. Samples of smallpox virus have been kept for research purposes. And advances in synthetic biology have made it possible to create smallpox from published amino acid sequences. This has led to concerns that smallpox could someday be used as a biological warfare agent. No cure or treatment for smallpox exists. A vaccine can prevent smallpox, but the risk of the vaccine's side effects is too high to justify routine vaccination for people at low risk of exposure to the smallpox virus. Smallpox is caused by infection with the variola virus. The virus can be transmitted:Directly from person to person. Indirectly from an infected person. 	Via contaminated items.",
       ["The first symptoms of smallpox usually appear 10 to 14 days after you're infected. During the incubation period of seven to 17 days, you look and feel healthy and can't infect others.Following the incubation period, a sudden onset of flu-like signs and symptoms occurs",
       "Fever",
       "Overall discomfort",
       "Headache",
       "Severe fatigue",
       "Severe back pain",
       "Vomiting"
          ],
      
      ["In the event of an outbreak, people who had smallpox would be kept in isolation in an effort to control the spread of the virus. Anyone who had contact with someone who developed an infection would need a smallpox vaccine, which can prevent or lessen the severity of the disease if given within four days of exposure to the smallpox virus.",
      "Two vaccines are available. One vaccine (ACAM2000) uses a live virus that's related to smallpox, and it can occasionally cause serious complications, such as infections affecting the heart or brain. That's why it's not recommended that everyone be vaccinated at this time. The potential risks of the vaccine outweigh the benefits, in the absence of an actual smallpox outbreak.",
      "A second vaccine, a modified vaccinia Ankara vaccine (Jynneos), has been found to be safe, and it can be used in people who aren't able to take ACAM2000, who have weakened immune systems or who have skin disorders.",
      "Immunity or partial immunity after a smallpox vaccine may last up to 10 years, and 20 years with revaccination. If an outbreak ever occurred, people who were vaccinated as children would still likely receive a new vaccination after direct exposure to someone with the virus."
      ],
    ["TPOXX",
      "TEMBEXA",
      "brincidofovir ",
      "Cidofovir"],
    ["small pox","small","pox"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }


  try {
    let newDisease = await dis.createDisease(
      "Alzheimer's",
      "Alzheimer's disease is a progressive neurologic disorder that causes the brain to shrink (atrophy) and brain cells to die. Alzheimer's disease is the most common cause of dementia — a continuous decline in thinking, behavioural and social skills that affects a person's ability to function independently. Approximately 5.8 million people in the United States age 65 and older live with Alzheimer's disease. Of those, 80% are 75 years old and older. Out of the approximately 50 million people worldwide with dementia, between 60% and 70% are estimated to have Alzheimer's disease. The early signs of the disease include forgetting recent events or conversations. As the disease progresses, a person with Alzheimer's disease will develop severe memory impairment and lose the ability to carry out everyday tasks. Medications may temporarily improve or slow progression of symptoms. These treatments can sometimes help people with Alzheimer's disease maximize function and maintain independence for a time. Different programs and services can help support people with Alzheimer's disease and their caregivers. There is no treatment that cures Alzheimer's disease or alters the disease process in the brain. In advanced stages of the disease, complications from severe loss of brain function — such as dehydration, malnutrition or infection — result in death.",
       ["Memory loss that affects daily life",
       "Changes in the ability to follow a plan or solve a problem:",
       "Changes in the ability to complete familiar tasks",
       "Confusion about time or place",
       "Problems with vision or understanding visual information",
       "Problems with words",
       "Misplacing things",
      "Poor judgment",
    "Withdrawal from activities",
  "Changes in mood and personality",
  "Depression.",
  "Unreported pain, illness, or medicine side effects (due to the inability to communicate).",
  "Falls.",
  "Pneumonia or other infections.",
  "Malnutrition or dehydration.",],
      
      ["Avoid smoking.",
      "Control vascular risk factors, including high blood pressure, high cholesterol and diabetes.",
      "Eat a balanced diet — such as the Mediterranean diet — that's rich in vegetables, fruits and lean protein, particularly protein sources containing omega-3 fatty acids.",
      "Be physically and socially active, including engaging in aerobic exercise.",
      "Take care of your mental health.",
      "Use thinking (cognitive) skills, such as memory skills."
      ],
    ["Cholinesterase inhibitors",
      "Memantine",
      "MCI"],
    ["Alzheimer's","Alzheimer","presenile dementia","senile psychosis","psychosis","psych","mental","brain"]

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