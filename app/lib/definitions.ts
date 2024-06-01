// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  username: string;
  name: string;
  email: string;
  password: string;
  zip_code: string;
  reports: Report[];
  notes: Note[];
  userPharmacies: User_Pharmacy[];
};

export type Pharmacy = {
  id: string;
  name: string;
  zip_code: string;
  reports: Report[];
  notes: Note[];
  userPharmacies: User_Pharmacy[];
};

export type Report = {
  id: string;
  title: string;
  content: string;
  userId: number;
  user: User;
  pharmacyId: number;
  pharmacy: Pharmacy;
}

export type Note = {
  id: string;
  subject: string;
  body: string;
  userId: number;
  user: User;
  pharmacyId: number;
  pharmacy: Pharmacy;
}

export type User_Pharmacy = {
  id: string;
  userId: number;
  user: User;
  pharmacyId: number;
  pharmacy: Pharmacy;
}



