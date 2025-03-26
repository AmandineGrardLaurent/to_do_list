import { addTask } from "@/data/taskActions";
import Link from "next/link";

export function FormCreateTask() {
  const formAction = addTask;
  console.log(addTask);
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
          className="border border-gray-300"
        />
      </label>
      <label htmlFor="date" className="flex flex-row gap-2">
        A réaliser pour le :
        <input id="date" name="date" type="date" required />
      </label>
      <div className="flex justify-center gap-10">
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Enregistrer
        </button>
        <Link
          href="/"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Annuler
        </Link>
      </div>
    </form>
  );
}
