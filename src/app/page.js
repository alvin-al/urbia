import Image from "next/image";
import Header from "@/components/header";
import Homepage from "@/homepage/page.jsx";
import { getAllArticles } from "@/lib/api";

export default async function Home() {
  return (
    <main>
      <Homepage />
    </main>
  );
}
