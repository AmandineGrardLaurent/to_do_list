import { FormEditTask } from "@/components/FormEditTask";
import { readTask } from "@/data/taskActions";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const task = await readTask(id);
  return (
    <div className="bg-pink-400 p-60">
      <section className="bg-white pt-15 pl-25 pb-15 pr-25 rounded-xl drop-shadow-xl">
        <h1 className="text-center font-bold text-3xl font-mono">
          Modification de la tâche
        </h1>
        <FormEditTask task={task} />
      </section>
    </div>
  );
}
