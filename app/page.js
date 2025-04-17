'use client';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Header />
      <About/>
    </main>
  );
}
