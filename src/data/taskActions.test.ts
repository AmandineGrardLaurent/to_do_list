import { expect, vi } from "vitest";
import { addTask, browseTasks, deleteTask, editTask } from "@/data/taskActions";
import { db } from "@/db/connexion";
import { redirect } from "next/navigation";
import { describe } from "vitest";
import { it } from "vitest";

vi.mock("@/db/connexion", () => ({
	db: {
		insert: vi.fn(),
		select: vi.fn(),
		update: vi.fn(),
	},
}));

vi.mock("next/navigation", () => ({
	redirect: vi.fn(),
}));

describe("browseTasks", () => {
	it("appeler db.select", async () => {
		await browseTasks();
		expect(db.select).toHaveBeenCalledTimes(1);
	});
});

describe("addTask", () => {
	it("tester si le db.insert est appelé et tester la redirection", async () => {
		const formDataMock = new FormData();
		formDataMock.append("label", "Eplucher les carottes");
		formDataMock.append("date", "2025-03-14");

		await addTask(formDataMock);

		expect(db.insert).toHaveBeenCalledTimes(1);
		expect(redirect).toHaveBeenCalledWith("/");
	});
});

// describe("editTask", async () => {
// const taskId = 1;
// const formDataMock = new FormData();
// formDataMock.append("label", "Eplucher les carottes");
// formDataMock.append("status", "à faire");
// formDataMock.append("date", "2025-03-14");

// await editTask(taskId, formDataMock);
// expect(db.update).toBeCalled();
// });
