import mysql from "mysql2/promise";

async function main() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Incognito446",
  });

  console.log("MYSQL connected successfully!");

  await db.execute("CREATE DATABASE mysql_db");

  const [rows] = await db.execute("SHOW DATABASES");
  console.log(rows);

  await db.end();
}

main().catch(console.error);
