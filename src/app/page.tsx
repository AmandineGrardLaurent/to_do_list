import { ButtonCreateTask } from "@/components/ButtonCreateTask";
import { TasksList } from "@/components/TasksList";
import "./globals.css";
import SearchTask from "@/components/SearchTask";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  return (
    <div className="bg-pink-400 p-25">
      <section className="bg-white pt-15 pl-25 pb-15 pr-25 rounded-xl drop-shadow-xl">
        <h1 className="text-center font-bold text-3xl font-mono">TODO LIST</h1>
        <SearchTask />
        <TasksList query={query} />
        <ButtonCreateTask />
      </section>
    </div>
  );
}
