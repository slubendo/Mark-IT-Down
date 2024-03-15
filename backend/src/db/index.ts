import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

// neonConfig.fetchConnectionCache = true;

const sql = neon("postgresql://s.v.lubendo:PBAmO98hlbEQ@ep-lively-butterfly-a6xs61gi.us-west-2.aws.neon.tech/neondb");
export const db = drizzle(sql, { logger: true });


export * from 'drizzle-orm'