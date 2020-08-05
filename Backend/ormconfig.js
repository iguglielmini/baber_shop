let connection = {
    "synchronize": true,
    "autoLoadEntities": true,
    "host": process.env.DATABASE_URL,
    "type": process.env.DATABASE_TYPE,
    "port": process.env.DATABASE_PORT,
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASS,
    "database": process.env.DATABASE_NAME,
    "entities": ["dist/**/tenant.entity{.ts,.js}"]
}

if (process.env.NODE_ENV === 'production') {
    connection = {
        "url": process.env.DATABASE_URL,
        "type": process.env.DATABASE_TYPE
    }
}

module.exports = connection;
