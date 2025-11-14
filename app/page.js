'use client'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Work />
      <Skills />
    </>
  );
}
