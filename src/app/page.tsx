"use client";

import Image from "next/image";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-full w-full justify-center">
        <div className="w-full max-w-7xl px-8">
          <Header />

          <div className="flex h-[350px] w-full flex-col">
            <div className="flex flex-1 items-center justify-center">
              <div className="bg-text h-0.5 w-full" />
              <Image
                alt="logo-main"
                src="/logo.jpeg"
                width="300"
                height="300"
              />
              <div className="bg-text h-0.5 w-full" />
            </div>
          </div>

          <Menu />
        </div>
      </main>
    </QueryClientProvider>
  );
}
