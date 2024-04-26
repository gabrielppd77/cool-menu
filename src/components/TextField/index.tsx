import { Search } from "lucide-react";

export default function TextField() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-2.5">
        <Search className="size-5 text-primary" />
      </div>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-1.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Buscar no cardápio"
      />
    </div>
  );
}
