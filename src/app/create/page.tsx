import { FormCreateTask } from "@/components/FormCreateTask";

export default function Page() {
  return (
    <div className="bg-pink-400 p-60">
      <section className="bg-white pt-15 pl-25 pb-15 pr-25 rounded-xl drop-shadow-xl">
        <h1 className="text-center font-bold text-3xl font-mono">
          Create A Task
        </h1>
        <FormCreateTask />
      </section>
    </div>
  );
}
