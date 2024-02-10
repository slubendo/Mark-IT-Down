import { pgTable, text, timestamp, serial, integer } from "drizzle-orm/pg-core";
import { notebooks } from "./notebooks";

export const notes = pgTable("notes", {
    id: serial("id").primaryKey(),
    note: text("note").notNull(),
    notebookId: serial("notebook_Id").references(() => notebooks.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})


export type User = typeof notes.$inferSelect
