import 'dotenv/config';
import path from 'path';
import { Knex } from 'knex';

const root = (p: string) => path.join(__dirname, 'src', p);

const config: Knex.Config = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PWD || 'secret',
        database: process.env.DB_NAME || 'codeinplace',
        bigNumberStrings: false,
    },
    pool: { max: 2 },
    migrations: {
        directory: root('migrations'),
        extension: 'ts',
    },
    seeds: {
        directory: root('seeds'),
        extension: 'ts',
        timestampFilenamePrefix: true,
    },
};
export default config;
