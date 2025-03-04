import { deleteTask } from "@/data/task";

export function ButtonDeleteTask({ id }: { id: string }) {
  const deleteId = deleteTask.bind(null, id);
  return (
    <form action={deleteId}>
      <button type="submit">&#x2716;</button>
    </form>
  );
}
