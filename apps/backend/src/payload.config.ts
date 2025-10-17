
import { config } from '@repo/api'
import { migrations } from './migrations'

export default config({
    dbUrl: process.env.DATABASE_URI || "",
    secret: process.env.PAYLOAD_SECRET || "",
    prodMigrations: migrations
})