module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '167.71.39.208'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'test_strapi_db'),
      user: env('DATABASE_USERNAME', 'jarvis2'),
      password: env('DATABASE_PASSWORD', 'asd123'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false,
    },
    debug: false,
  },
});
