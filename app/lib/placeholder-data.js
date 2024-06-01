// Placeholder data for Users
const users = [
  {
    username: 'john_doe',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'securepassword123',
    zip_code: '10001',
    reports: [],  // Will be populated later
    notes: [],    // Will be populated later
    userPharmacies: []  // Will be populated later
  },
  {
    username: 'jane_smith',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'anothersecure123',
    zip_code: '90210',
    reports: [],  // Will be populated later
    notes: [],    // Will be populated later
    userPharmacies: []  // Will be populated later
  }
];

// Placeholder data for Pharmacies
const pharmacies = [
  {
    id: 'ph1',
    name: 'Good Health Pharmacy',
    zip_code: '90210',
    reports: [],  // Will be populated later
    notes: [],    // Will be populated later
    userPharmacies: []  // Will be populated later
  },
  {
    id: 'ph2',
    name: 'Community Pharmacy',
    zip_code: '90210',
    reports: [],  // Will be populated later
    notes: [],    // Will be populated later
    userPharmacies: []  // Will be populated later
  }
];

// Placeholder data for Reports
const reports = [
  {
    id: 'r1',
    title: 'Annual Sales Report',
    content: 'Detailed analysis of annual sales.',
    userId: users[0].id,
    user: users[0],
    pharmacyId: pharmacies[0].id,
    pharmacy: pharmacies[0]
  }
];

// Placeholder data for Notes
const notes = [
  {
    id: 'n1',
    subject: 'Meeting Notes',
    body: 'Notes from the strategy meeting.',
    userId: users[1].id,
    user: users[1],
    pharmacyId: pharmacies[1].id,
    pharmacy: pharmacies[1]
  }
];

// Placeholder data for User_Pharmacy (many-to-many relationships)
const userPharmacies = [
  {
    id: 'up1',
    userId: users[0].id,
    user: users[0],
    pharmacyId: pharmacies[0].id,
    pharmacy: pharmacies[0]
  },
  {
    id: 'up2',
    userId: users[1].id,
    user: users[1],
    pharmacyId: pharmacies[1].id,
    pharmacy: pharmacies[1]
  }
];

// Linking back to user and pharmacy
users[0].reports.push(reports[0]);
users[0].userPharmacies.push(userPharmacies[0]);
pharmacies[0].reports.push(reports[0]);
pharmacies[0].userPharmacies.push(userPharmacies[0]);

users[1].notes.push(notes[0]);
users[1].userPharmacies.push(userPharmacies[1]);
pharmacies[1].notes.push(notes[0]);
pharmacies[1].userPharmacies.push(userPharmacies[1]);
