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
  address: string;
  zip_code: string;
  reports: Report[];
  notes: Note[];
  userPharmacies: User_Pharmacy[];
};

export type NoteBody = "This pharmacy does not know when they'll get Wegovy." |
                       "This pharmacy has other doses of Wegovy, just not the one I was looking for." |
                       "This pharmacy does not have Wegovy now but has been getting them in recently." |
                       "This pharmacy had the dose of Wegovy I needed.";

export type Note = {
  id: string;
  body: NoteBody;
  username: string;
  pharmacyId: string;
}

export type Report = {
  id: string;
  hasWegovy: boolean;
  reportTime: Date;
  dosingInfo?: string;
  username: string;
  pharmacyId: string;
}

export type User_Pharmacy = {
  id: string;
  username: string;
  pharmacyId: string;
}



