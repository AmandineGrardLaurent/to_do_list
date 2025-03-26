import { date, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const tasksTable = mysqlTable("tasks_table", {
	id: serial().primaryKey().autoincrement(),
	label: varchar({ length: 255 }).notNull(),
	status: varchar({ length: 20 }).notNull(),
	date: date().notNull(),
});
