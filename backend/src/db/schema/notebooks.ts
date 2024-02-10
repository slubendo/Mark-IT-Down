import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const notebooks = pgTable("notebooks", {
    id: serial("id").primaryKey(),
    notebook: text("notebook").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})


export type User = typeof notebooks.$inferSelect
