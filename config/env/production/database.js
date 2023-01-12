const fs = require("fs");
module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: process.env.DATABASE_HOST || "34.66.68.94",
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DATABASE_NAME || "strapi-test-db",
      user: process.env.DATABASE_USERNAME || "hose",
      password: process.env.DATABASE_PASSWORD || "1q2w3e4r",
      //   ssl: env.bool("DATABASE_SSL", true),
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
    debug: false,
  },
});
