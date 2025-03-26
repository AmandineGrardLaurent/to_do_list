import Link from "next/link";
import { ButtonDeleteTask } from "./ButtonDeleteTask";
import { searchTasks } from "@/actions/task";
import clsx from "clsx";

export async function TasksList({ query }: { query: string }) {
  const tasks = await searchTasks(query);

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {tasks?.map((task) => (
          <li
            key={task.id}
            className={clsx("border flex flex-row gap-3 p-2 ", {
              "bg-green-200 border-green-200": task.status === "fait",
              "bg-red-200  border-red-200": task.status === "à faire",
            })}
          >
            <p>
              {task.label} - {task.status}
            </p>
            {task.status === "à faire" && (
              <p>avant le : {new Date(task.date).toLocaleDateString()}</p>
            )}
            <Link href={`/${task.id}/edit`}> &#x1F58D;</Link>
            <ButtonDeleteTask id={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
