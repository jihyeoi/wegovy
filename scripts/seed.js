const { db } = require('@vercel/postgres');
const {
  users,
  pharmacies,
  notes,
  reports,
  user_pharmacies
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        username VARCHAR(50) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        zipcode TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`)

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (username, name, email, zipcode, password)
        VALUES (${user.username}, ${user.name}, ${user.email}, ${user.zipcode}, ${hashedPassword})
        ON CONFLICT (username) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      users: insertedUsers,
    };
  } catch(error) {
    console.error('Error seeding users: ', error);
    throw error;
  }
}

async function seedPharmacies(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp`;
    // Create the "pharmacies" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pharmacies (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address TEXT NOT NULL,
        zipcode TEXT NOT NULL,
      );
    `;

    console.log(`Created "pharmacies" table`)

    // Insert data into the "pharmacies" table
    const insertedPharmacies = await Promise.all(
      pharmacies.map(async (pharmacy) => {
        return client.sql`
        INSERT INTO pharmacy (id, name, address, zipcode)
        VALUES (${pharmacy.id}, ${pharmacy.name}, ${pharmacy.address}, ${pharmacy.zipcode})
        ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedPharmacies.length} pharmacies`)

    return {
      createTable,
      pharmacies: insertedPharmacies,
    };
  } catch(error) {
    console.error('Error seeding pharmacies: ', error);
    throw error;
  }
}

async function seedNotes(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS notes (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        body TEXT NOT NULL,
        username VARCHAR(50) REFERENCES users(username),
        pharmacyId UUID REFERENCES pharmacies(id)
      );
    `;

    console.log(`Created "notes" table`);

    const insertedNotes = await Promise.all(
      notes.map(note => {
        return client.sql`
          INSERT INTO notes (id, body, username, pharmacyId)
          VALUES (${note.id}, ${note.body}, ${note.user.username}, ${note.pharmacy.id})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedNotes.length} notes`)

    return {
      createTable,
      notes: insertedNotes,
    };
  } catch(error) {
    console.error('Error seeding notes: ', error);
    throw error;
  }
}

async function seedReports(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS reports (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        has_wegovy BOOLEAN NOT NULL,
        report_time TIMESTAMP NOT NULL,
        username VARCHAR(50) REFERENCES users(username),
        pharmacyId UUID REFERENCES pharmacies(id),
        dosing_info TEXT
      );
    `;

    console.log(`Created "reports" table`);

    const insertedReports = await Promise.all(
      reports.map(report => {
        return client.sql`
          INSERT INTO reports (id, has_wegovy, report_time, username, pharmacyId, dosing_info)
          VALUES (${report.id}, ${report.has_wegovy}, ${report.report_time}, ${report.username}, ${report.pharmacyId}, ${report.dosing_info || null})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedReports.length} reports`)

    return {
      createTable,
      notes: insertedReports,
    };
  } catch(error) {
    console.error('Error seeding reports: ', error);
    throw error;
  }
}

async function seedUserPharmacies(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS user_pharmacies (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        username VARCHAR(50) REFERENCES users(username),
        pharmacyId UUID REFERENCES pharmacies(id)
      );
    `;

    console.log(`Created "user_pharmacies" table`);

    const insertedUserPharmacies = await Promise.all(
      user_pharmacies.map(up => {
        return client.sql`
          INSERT INTO user_pharmacies (id, username, pharmacyId)
          VALUES (${up.id}, ${up.username}, ${up.pharmacyId})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUserPharmacies.length} user-pharmacies`)

    return {
      createTable,
      notes: insertedUserPharmacies,
    };
  } catch(error) {
    console.error('Error seeding user_pharmacies: ', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedPharmacies(client);
  await seedNotes(client);
  await seedReports(client);
  await seedUserPharmacies(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
