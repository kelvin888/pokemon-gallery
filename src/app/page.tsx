import Container from "@/components/container/Container";
import Categories from "./home/categories/Categories";
import Header from "../components/header/Header";
import Hero from "./home/hero/Hero";

export default function Home() {
  return (
    <main className="bg-gray-300 min-h-screen relative">
      <Header />
      <Container className="flex flex-col gap-9 py-5">
        <Hero />
        <Categories />
      </Container>
    </main>
  );
}
