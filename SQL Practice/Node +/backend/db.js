import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Incognito446",
    database: process.env.DB_NAME || "crud_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const initDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || "localhost",
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASSWORD || "Incognito446",
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || "crud_db"}\`;`);
        await connection.end();

        const db = await pool.getConnection();
        console.log("Connected to MySQL Database");

        await db.query(`
      CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        description TEXT,
        cover_url VARCHAR(255)
      );
    `);
        db.release();
        console.log("Books table ensured");
    } catch (err) {
        console.error("Database initialization failed:", err);
    }
};

export default pool;
