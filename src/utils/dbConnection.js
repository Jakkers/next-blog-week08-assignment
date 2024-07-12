//add your connectiong string here
//this way you can import in the relevant pages when you get or add data to the database.

import pg from "pg";

export function dbConnect() {
  const connectionString = process.env.NEXT_PUBLIC_DB_URL;
  const db = new pg.Pool({
    connectionString: connectionString,
  });
  return db;
}
