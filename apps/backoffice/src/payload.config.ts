
import { config } from '@repo/api'

export default config({
    dbUrl: process.env.DATABASE_URI || "",
    secret: process.env.PAYLOAD_SECRET || "",
})