CREATE TABLE IF NOT EXISTS "notebooks" (
	"id" serial PRIMARY KEY NOT NULL,
	"notebook" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"note" text NOT NULL,
	"title" text DEFAULT 'Untitled' NOT NULL,
	"notebook_Id" serial NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "notes" ADD CONSTRAINT "notes_notebook_Id_notebooks_id_fk" FOREIGN KEY ("notebook_Id") REFERENCES "notebooks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
