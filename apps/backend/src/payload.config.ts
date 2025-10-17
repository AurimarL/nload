
import { config } from '@repo/api'
import { migrations } from './migrations'

export default config({
    dbUrl: "postgres://postgres:postgres@127.0.0.1:5432",
    secret: "algo-secreto",
    prodMigrations: migrations
})