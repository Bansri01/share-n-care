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
      ["WHO recommends a scale-up of TB preventive treatment among populations at highest risk including household contacts of TB patients, people living with HIV and other people at risk with lowered” immunity or living in crowded settings.",
      "WHO recommends an integration of TB preventive treatment services into ongoing case finding efforts for active TB. All household contacts of TB patients and people living with HIV are recommended to be screened for active TB. If active TB is ruled out, they should be initiated on TB preventive treatment.",
      "WHO recommends that either a tuberculin skin test  or interferon-gamma release assay (IGRA) be used to test for TB infection. Both tests are helpful to find people more likely to benefit from TB preventive treatment but should not become a barrier to scale-up access. Testing for TB infection is not required before starting TB preventive treatment in people living with HIV, and children under 5 years who are contacts of people with active TB.",
      "WHO recommends new shorter options for preventive treatment in addition to the widely used 6 months of daily isoniazid. The shorter options that are now recommended range from a 1 month daily regimen of rifapentine plus isoniazid to 3 months weekly rifapentine plus isoniazid, 3 months daily rifampicin plus isoniazid, or 4 months of daily rifampicin alone."  
    ],
    ["isoniazid (INH)",
      "rifampin (RIF)",
      "ethambutol (EMB)",
      "pyrazinamide (PZA)"],
    ["TB","Tuberculosis0","Tuber","Active TB Disease","Miliary TB","Latent TB Infection"]

      );
      console.log("Done seeding database");
  } catch (e) {
    console.log(e);
  }

  





  await dbConnection.closeConnection();
}

main();