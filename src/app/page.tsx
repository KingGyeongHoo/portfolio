import { Intro } from "@/pages/intro/Intro";
import { Career } from "@/pages/career/Career";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex-col">
      <Intro />
      <Career />
    </main>
  );
}
