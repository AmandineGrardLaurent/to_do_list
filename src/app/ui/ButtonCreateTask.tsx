import Link from "next/link";

export function ButtonCreateTask() {
  return (
    <div className="mt-5 text-center">
      <Link
        href="/create"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Ajouter une nouvelle tâche
      </Link>
    </div>
  );
}
