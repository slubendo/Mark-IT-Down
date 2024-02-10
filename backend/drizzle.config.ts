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
    connectionString: 'postgresql://slubendo:aBhXLSwDQ80M@ep-square-band-32006169.us-west-2.aws.neon.tech/neondb?sslmode=require',
  },
  out: "./drizzle",
} satisfies Config