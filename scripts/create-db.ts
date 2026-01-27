import { Client } from "pg";

async function createDatabaseIfNotExists() {
  const dbName = process.env.DB_NAME;
  if (!dbName) {
    console.error("Missing required environment variable: DB_NAME");
    process.exit(1);
  }

  const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined;

  const client = new Client({
    host: process.env.DB_HOST,
    port,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "postgres",
  });

  try {
    await client.connect();

    const res = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName]
    );

    if (res.rowCount === 0) {
      console.log(`Creating database: ${dbName}`);
      // Basic escaping of double quotes in identifier to avoid SQL injection
      const safeName = dbName.replace(/"/g, '""');
      await client.query(`CREATE DATABASE "${safeName}"`);
    } else {
      console.log(`Database already exists: ${dbName}`);
    }
  } catch (err) {
    console.error("Error creating/checking database:", err);
    process.exitCode = 1;
  } finally {
    try {
      await client.end();
    } catch (_e) {
      // ignore
    }
  }
}

createDatabaseIfNotExists().catch((err) => {
  console.error(err);
  process.exit(1);
});
