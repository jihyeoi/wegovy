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
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(50) NOT NULL UNIQUE,
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
        INSERT INTO users (id, name, username, email, password)
        VALUES (${user.id}, ${user.name}, ${user.username}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
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

    console.log(`Created "users" table`)

    // Insert data into the "users" table
    const insertedPharmacies = await Promise.all(
      users.map(async (pharmacy) => {
        return client.sql`
        INSERT INTO pharmacy (id, name, address, zipcode)
        VALUES (${pharmacy.id}, ${pharmacy.name}, ${pharmacy.address}, ${pharmacy.zipcode})
        ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedPharmacies.length} users`)

    return {
      createTable,
      pharmacies: insertedPharmacies,
    };
  } catch(error) {
    console.error('Error seeding users: ', error);
    throw error;
  }
}
