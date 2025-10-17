import sharp from 'sharp'
import { buildConfig } from 'payload'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import {Money} from './collections/Money'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { MigrateDownArgs, MigrateUpArgs } from '@payloadcms/db-sqlite'

export interface IProdMigration {
    down: (args: MigrateDownArgs) => Promise<void>;
    name: string;
    up: (args: MigrateUpArgs) => Promise<void>;
}

export const config = ({ dbUrl, secret, prodMigrations }: {
    dbUrl: string, secret: string,
    prodMigrations?: IProdMigration[]
}) => buildConfig({
    // If you'd like to use Rich Text, pass your editor here
    // editor: lexicalEditor(),

    // Define and configure your collections in this array
    collections: [Users, Media, Money],

    // Your Payload secret - should be a complex and secure string, unguessable
    secret: secret,
    // Whichever Database Adapter you're using should go here
    // Mongoose is shown as an example, but you can also use Postgres
    db: postgresAdapter({
        // Postgres-specific arguments go here.
        // `pool` is required.
        pool: {
            connectionString: dbUrl,
        },
        idType: "uuid",
        push: true,
        prodMigrations: prodMigrations
    }),
    // If you want to resize images, crop, set focal point, etc.
    // make sure to install it and pass it to the config.
    // This is optional - if you don't need to do these things,
    // you don't need it!
    sharp,

    typescript: {
        outputFile: "./src/payload-types.ts"
    },
})
