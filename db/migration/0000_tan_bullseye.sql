CREATE TYPE "public"."priority_enum" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TABLE "todo" (
	"id" serial PRIMARY KEY NOT NULL,
	"todo_text" varchar(255) NOT NULL,
	"is_done" boolean DEFAULT false NOT NULL,
	"category" varchar(50) DEFAULT 'งาน' NOT NULL,
	"color" varchar(10),
	"deadline" date,
	"priority" "priority_enum" DEFAULT 'medium' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
