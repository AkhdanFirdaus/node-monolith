const pg = require("pg");

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

db.on("connect", () => {
  console.log("DB Connected");
});

module.exports = db;
