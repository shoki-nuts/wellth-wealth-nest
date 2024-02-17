import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeormConfig : TypeOrmModuleOptions = {
//     type: 'postgres',
//     host: process.env.DATABASE_HOST,
//     port: parseInt(process.env.DATABASE_PORT),
//     username: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE,
//     entities: [(__dirname + '/**/domeins/*.entity.ts')],
//     synchronize: true,
// };

// db connection config
export const typeormConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "welth-wealth",
    password: "welth-wealth",
    database: "postgres",
    entities:  [(__dirname + '/**/domeins/*.entity.ts')],
    synchronize: true,
};