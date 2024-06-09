"use server"

import React from "react";
import Header from "@components/layout/Header";
import Input from "@/components/ui/input";
import wave from "/public/wave.svg";
import Image from "next/image";
import FilterButtonCafé from "@/components/ui/filterButtonCafe";
import IconCafe from "@/components/ui/iconCafe";
import Wave from "@/components/ui/wave";
import { PiMagnifyingGlass } from "react-icons/pi";


let name = "Ana";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex w-full h-screenheader flex-col items-center bg-purple.1">
        <div className="flex h-full flex-col items-center justify-between gap-16 pt-40 ">
          <div div className="flex w-fit flex-col gap-8 px-12">
            <div>
              <h1 className="text-5xl text-purple.5 select-none">
                Olá, <b>{name}</b>
              </h1>
              <h1 className="text-5xl text-purple.5 select-none">
                O que vamos reparar hoje?
              </h1>
            </div>
            <Input
              placeholder="Pesquisar..."
              prepend={<IconCafe Icon={PiMagnifyingGlass} />}
              append={<FilterButtonCafé />}
            />
          </div>
          <Wave variant="default"/>
        </div>
      </main>
    </>
  );
};

export default Home;
