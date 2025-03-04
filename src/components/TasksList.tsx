import Link from "next/link";
import { ButtonDeleteTask } from "./ButtonDeleteTask";
import { searchTasks } from "@/data/task";
import { formatDateToLocal } from "@/app/helpers/helpers";

export async function TasksList({ query }: { query: string }) {
  const tasks = await searchTasks(query);

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {tasks?.map((task) => (
          <li
            key={task.id}
            className="border border-pink-400 flex flex-row gap-3 p-2 "
          >
            <p>{task.label}</p>

            <p>- {task.status}</p>
            <p>avant le {formatDateToLocal(task.date)}</p>
            <Link href={`/${task.id}/edit`}> &#x1F58D;</Link>
            <ButtonDeleteTask id={task.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
