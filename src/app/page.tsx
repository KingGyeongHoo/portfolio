import { Intro } from "@/sections/intro/Intro";
import { Career } from "@/sections/career/Career";
import { Contact } from "@/sections/contact/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex-col">
      <Intro />
      <Career />
      <Contact />
    </main>
  );
}
