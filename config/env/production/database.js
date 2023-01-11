module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      //   socketPath: env("INSTANCE_UNIX_SOCKET"),
      //   database: env("DB_NAME"),
      //   user: env("DB_USER"),
      //   password: env("DB_PASS"),
      host: env("DATABASE_HOST", "34.66.68.94"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi-test-db"),
      user: env("DATABASE_USERNAME", "hose"),
      password: env("DATABASE_PASSWORD", "1q2w3e4r"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
