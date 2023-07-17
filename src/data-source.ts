import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    "type": "sqlite",
    "database": "src/database/database.sqlite",
    //MYSQL
    // type: 'postgres',
	// host: process.env.DB_HOST,
	// port: port,
	// username: process.env.DB_USER,
	// password: process.env.DB_PASS,
	// database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})
