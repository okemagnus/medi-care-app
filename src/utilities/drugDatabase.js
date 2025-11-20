//src/setup/drugDatabase.js

//Create sample drug database ONLY if it doesn't already exist
if (!localStorage.getItem("drugDatabase")) {
  localStorage.setItem(
    "drugDatabase",
    JSON.stringify([
      {
        drugId: "PCM500",
        name: "Paracetamol 500mg",
        batch: "BATCH001",
        nafdac: "04-1234",
        expiry: "2026-12-31"
      },
      {
        drugId: "AMOX250",
        name: "Amoxicillin 250mg",
        batch: "BATCH777",
        nafdac: "04-5678",
        expiry: "2025-08-10"
      },
      {
        drugId: "VITC1000",
        name: "Vitamin C 1000mg",
        batch: "VTC-88",
        nafdac: "04-9999",
        expiry: "2027-01-05"
      }
    ])
  );

  console.log("Initial Drug Database Created");
}
