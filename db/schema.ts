import { pgTable, serial, varchar, boolean, timestamp, date, pgEnum } from "drizzle-orm/pg-core";

export const priorityEnum = pgEnum("priority_enum", ["low", "medium", "high"]);

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  todoText: varchar("todo_text", { length: 255 }).notNull(),
  isDone: boolean("is_done").notNull().default(false),
  category: varchar("category", { length: 50 }).notNull().default("งาน"),
  color: varchar("color", { length: 10 }),
  deadline: date("deadline"),
  priority: priorityEnum("priority").notNull().default("medium"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
export { todo as todoTable };