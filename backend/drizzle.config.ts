import { Config } from "drizzle-kit"

import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.local',
});

// const connectionString = process.env.MIGRATION_DATABASE_URL;

// if (!connectionString) {
//   throw new Error('MIGRATION_DATABASE_URL environment variable is missing.');
// }

export default {
  schema: "./src/db/schema/*",
  driver: "pg",
  dbCredentials: {
    connectionString: 'postgresql://s.v.lubendo:PBAmO98hlbEQ@ep-lively-butterfly-a6xs61gi.us-west-2.aws.neon.tech/neondb?sslmode=require',
  },
  out: "./drizzle",
} satisfies Config