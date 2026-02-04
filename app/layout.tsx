"use client";
import { ReactNode } from "react";
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-100 flex flex-col">

        <header className="bg-zinc-950 shadow-md py-4">
          <nav className="max-w-6xl mx-auto px-6 text-left">
            
            <ul className="flex flex-col sm:flex-row gap-4 text-sm text-gray-100 font-medium">
              <li className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-600 hover:scale-105 transition transform text-center">
                <Link href="/">Home</Link>
              </li>
              <li className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-600 hover:scale-105 transition transform text-center">
                <Link href="/about">About</Link>
              </li>
              <li className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-600 hover:scale-105 transition transform text-center">
                <Link href="/project">Projects</Link>
              </li>
              <li className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-600 hover:scale-105 transition transform text-center">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

       
        <main className="flex-1">
          {children}
        </main>


        <footer className="bg-zinc-900 py-4 text-center text-gray-400">
          © 2026 Eyerusalem Abebe. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
