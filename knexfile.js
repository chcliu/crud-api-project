module.exports = {
    production: {
        client: "pg",
        connection: {
            host: "127.0.0.1",
            user: 'postgres',
            database: "tabelog",
        },
        port: 5432,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        }
    },
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            database: 'tabelog',
            charset: 'utf8'
        },
        port: 5432,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + '/migrations',
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    }
};