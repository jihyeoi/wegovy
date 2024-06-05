// // Placeholder data for Users
// const users = [
//   {
//     username: 'john_doe',
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     zipcode: '10001',
//     password: 'password',
//     reports: [],  // Will be populated later
//     notes: [],    // Will be populated later
//     userPharmacies: []  // Will be populated later
//   },
//   {
//     username: 'jane_smith',
//     name: 'Jane Smith',
//     email: 'jane.smith@example.com',
//     zipcode: '90210',
//     password: 'password',
//     reports: [],  // Will be populated later
//     notes: [],    // Will be populated later
//     userPharmacies: []  // Will be populated later
//   }
// ];

// // Placeholder data for Pharmacies
// const pharmacies = [
//   {
//     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//     name: 'Good Health Pharmacy',
//     address: '1240 health st',
//     zipcode: '90210',
//     reports: [],  // Will be populated later
//     notes: [],    // Will be populated later
//     userPharmacies: []  // Will be populated later
//   },
//   {
//     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//     name: 'Community Pharmacy',
//     address: '4430 community st',
//     zipcode: '90210',
//     reports: [],  // Will be populated later
//     notes: [],    // Will be populated later
//     userPharmacies: []  // Will be populated later
//   }
// ];

// // Placeholder data for Reports
// const reports = [
//   {
//     id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
//     has_wegovy: true,
//     report_time: '2024-01-23',
//     username: users[0].username,
//     pharmacyId: pharmacies[0].id,
//   }
// ];

// // Placeholder data for Notes
// const notes = [
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     body: 'This pharmacy had the dose of Wegovy I needed.',
//     username: users[1].username,
//     pharmacyId: pharmacies[1].id,
//   }
// ];

// // Placeholder data for User_Pharmacy (many-to-many relationships)
// const userPharmacies = [
//   {
//     id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
//     username: users[0].username,
//     pharmacyId: pharmacies[0].id,
//   },
//   {
//     id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
//     username: users[1].username,
//     pharmacyId: pharmacies[1].id,
//   }
// ];

// // Linking back to user and pharmacy
// users[0].reports.push(reports[0]);
// users[0].userPharmacies.push(userPharmacies[0]);
// pharmacies[0].reports.push(reports[0]);
// pharmacies[0].userPharmacies.push(userPharmacies[0]);

// users[1].notes.push(notes[0]);
// users[1].userPharmacies.push(userPharmacies[1]);
// pharmacies[1].notes.push(notes[0]);
// pharmacies[1].userPharmacies.push(userPharmacies[1]);


// module.exports = {
//   users,
//   pharmacies,
//   notes,
//   reports,
//   userPharmacies
// };