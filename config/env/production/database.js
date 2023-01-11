const fs = require("fs");
module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: process.env.DATABASE_HOST || "34.66.68.94",
      port: process.env.DATABASE_PORT || 5432,
      database: process.env.DATABASE_NAME || "strapi-test-db",
      user: process.env.DATABASE_USERNAME || "hose",
      password: process.env.DATABASE_PASSWORD || "1q2w3e4r",
      ssl: env.bool("DATABASE_SSL", false),
    },
    debug: false,
  },
});
