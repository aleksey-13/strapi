// module.exports = ({ env }) => ({
//   connection: {
//     client: "mysql",
//     connection: {
//       socketPath: env("INSTANCE_UNIX_SOCKET"),
//       database: env("DB_NAME"),
//       user: env("DB_USER"),
//       password: env("DB_PASS"),
//     },
//   },
// });
const fs = require("fs");
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.DATABASE_HOST || "34.66.68.94",
      port: process.env.DATABASE_PORT || 8080,
      database: process.env.DATABASE_NAME || "strapi-test-db",
      user: process.env.DATABASE_USERNAME || "hose",
      password: process.env.DATABASE_PASSWORD || "1q2w3e4r",
      ssl: env.bool("DATABASE_SSL", true),
    },
    debug: false,
  },
});
