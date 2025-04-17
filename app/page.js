'use client';

import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Header />
    </main>
  );
}
