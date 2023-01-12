const fs = require("fs");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "34.66.68.94"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi-test-db"),
      user: env("DATABASE_USERNAME", "hose"),
      password: env("DATABASE_PASSWORD", "1q2w3e4r"),
      // ssl: env.bool('DATABASE_SSL', true),
      ssl: {
        ca: fs.readFileSync("./config/env/production/server-ca.pem").toString(),
        cert: fs
          .readFileSync("./config/env/production/client-cert.pem")
          .toString(),
        key: fs
          .readFileSync("./config/env/production/client-key.pem")
          .toString(),
        rejectUnauthorized: false,
      },
    },
  },
});
