import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

// neonConfig.fetchConnectionCache = true;

const sql = neon("postgresql://slubendo:aBhXLSwDQ80M@ep-square-band-32006169.us-west-2.aws.neon.tech/neondb");
export const db = drizzle(sql, { logger: true });


export * from 'drizzle-orm'