"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchTask() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((result: string) => {
    console.log(result);
    const params = new URLSearchParams(searchParams);
    if (result) {
      params.set("query", result);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  });
  return (
    <section>
      <input
        type="search"
        placeholder="Rechercher une tâche"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        className="border border-black p-1.5 mb-2 mt-10 w-full"
      />
    </section>
  );
}
