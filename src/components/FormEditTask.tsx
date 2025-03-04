"use client";

import { editTask } from "@/data/taskActions";
import Link from "next/link";

export function FormEditTask({ task }: { task: TaskType[] }) {
  const id = task[0].id;
  const formAction = editTask.bind(null, id);
  console.log(id);
  return (
    <form action={formAction} className="flex flex-col mt-6">
      <label htmlFor="label" className="flex flex-col">
        Description de la tâche
        <input
          id="label"
          name="label"
          type="text"
          placeholder="Tâche à réaliser"
          required
          defaultValue={task[0].label}
          className="border border-gray-300"
        />
      </label>
      <label htmlFor="date" className="flex flex-col">
        Date max pour réaliser la tâche
        <input
          id="date"
          name="date"
          type="date"
          required
          className="border border-gray-300"
        />
      </label>
      <fieldset>
        <legend>Statut</legend>
        <label>
          à faire
          <input
            id="à faire"
            name="status"
            value="à faire"
            type="radio"
            defaultChecked={task[0].status === "à faire"}
          />
        </label>
        <label>
          fait
          <input
            id="fait"
            name="status"
            value="fait"
            type="radio"
            defaultChecked={task[0].status === "fait"}
          />
        </label>
      </fieldset>
      <div className="flex justify-center gap-10">
        <Link
          href="/"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Annuler
        </Link>
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Modifier
        </button>
      </div>
    </form>
  );
}
