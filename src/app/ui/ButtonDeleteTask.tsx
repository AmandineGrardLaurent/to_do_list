import { deleteTask } from "@/actions/task";

export function ButtonDeleteTask({ id }: { id: number }) {
  const deleteId = deleteTask.bind(null, id);
  return (
    <form action={deleteId}>
      <button type="submit" data-testid="delete-task-button">
        &#x2716;
      </button>
    </form>
  );
}
