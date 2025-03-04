"use server";

import { db } from "@/db/connexion";
import { tasksTable } from "@/db/schema";
import "dotenv/config";
import { sql, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function browseTasks() {
	try {
		const result = await db.select().from(tasksTable);
		return result;
	} catch (error) {
		console.error("Database Error:", error);
	}
}

export async function readTask(id: string) {
	try {
		const result = await db
			.select()
			.from(tasksTable)
			.where(sql`${tasksTable.id} = ${id}`);
		return result;
	} catch (error) {
		console.error("Database Error:", error);
	}
}

export async function editTask(id: string, formdata: FormData) {
	const data = {
		label: formdata.get("label") as string | null,
		status: formdata.get("status") as string | null,
		date: formdata.get("date") as Date | null,
	};

	if (!data.label || !data.status || !data.date) {
		console.error("Missing data");
		return;
	}
	try {
		await db
			.update(tasksTable)
			.set({
				label: data.label,
				status: data.status,
				date: data.date,
			})
			.where(sql`${tasksTable.id} = ${id}`);
	} catch (error) {
		console.error("Database Error:", error);
	}
	redirect("/");
}

export async function addTask(formdata: FormData) {
	const data = {
		label: formdata.get("label"),
		date: formdata.get("date"),
	};
	try {
		await db.insert(tasksTable).values({
			label: sql`${data.label}`,
			status: "à faire",
			date: sql`${data.date}`,
		});
	} catch (error) {
		console.error("Database Error:", error);
	}
	redirect("/");
}

export async function deleteTask(id: string) {
	try {
		await db.delete(tasksTable).where(eq(tasksTable.id, id));
	} catch (error) {
		console.error("Database Error:", error);
	}
	revalidatePath("/");
}

export async function searchTasks(query: string) {
	try {
		const tasks = await db
			.select()
			.from(tasksTable)
			.where(sql`${tasksTable.label} LIKE ${`%${query}%`}`);

		return tasks;
	} catch (error) {
		console.error("Database Error :", error);
	}
}
