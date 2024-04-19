"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { CircleArrowUp } from "lucide-react";

import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";

import { MenuDataType } from "./api/route";

export default function Home() {
  const [menuData, setMenuData] = useState<MenuDataType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isVisibleButtonGoTop, setVisibleButtonGoTop] = useState(false);

  useEffect(() => {
    const toggleButtonTopVisible = () => {
      window.scrollY > 300
        ? setVisibleButtonGoTop(true)
        : setVisibleButtonGoTop(false);
    };

    window.addEventListener("scroll", toggleButtonTopVisible);

    return () => {
      window.removeEventListener("scroll", toggleButtonTopVisible);
    };
  }, []);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response = await fetch("/api", {
          headers: {
            Accept: "application/json",
            method: "GET",
          },
        });

        if (response) {
          const data = await response.json();
          setMenuData(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <main className="flex min-h-full w-full justify-center">
      <div className="w-full max-w-7xl px-8">
        <Header />

        <section id="home" className="flex h-[350px] w-full flex-col">
          <div className="flex flex-1 items-center justify-center">
            <div className="bg-primary h-0.5 w-full" />
            <Image alt="logo-main" src="/logo.jpeg" width="300" height="300" />
            <div className="bg-primary h-0.5 w-full" />
          </div>
        </section>

        <section id="menu" className="bg-paper w-full rounded p-4 shadow-lg">
          <h1 className="text-primary font-bold">MENU</h1>
          {/* {isLoading ? <>Carregando...</> : <CategoryNav />} */}
        </section>

        {/* <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
          <Image src="/logo.jpeg" alt="logo-image" width={500} height={500} />
        </div>  */}

        {isVisibleButtonGoTop && (
          <Link href="/#home">
            <CircleArrowUp className="fixed bottom-4 right-4 size-8 animate-pulse" />
          </Link>
        )}
      </div>
    </main>
  );
}
