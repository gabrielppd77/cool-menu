"use client";

import Image from "next/image";

import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <main id="home" className="flex min-h-full w-full justify-center">
      <div className="w-full max-w-7xl px-8">
        <Header />

        <div className="flex h-[350px] w-full flex-col">
          <div className="flex flex-1 items-center justify-center">
            <div className="h-0.5 w-full bg-primary" />
            <Image alt="logo-main" src="/logo.jpeg" width="300" height="300" />
            <div className="h-0.5 w-full bg-primary" />
          </div>
        </div>

        <section id="menu" className="rounded bg-paper p-4 shadow-lg">
          <Menu />
        </section>
      </div>
    </main>
  );
}
