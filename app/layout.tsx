"use client";
import { ReactNode, useState } from "react";
import './globals.css';
import Link from 'next/link';


export default function RootLayout({ children }: { children: ReactNode }) {
  const[showNav,setShowNav]=useState(false);
  return (
    <html lang='en'
    >
    <body className="min-h-screen  text-gray-100">
  
      <header className="bg-zinc-950 shadow-md py-2 flex justify-end">

  
  <button
            onClick={() => setShowNav(!showNav)}
            className="text-white focus:outline-none cursor-pointer mr-6"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

        <nav className={`fixed top-12 right-4 w-48 bg-zinc-900 z-50 text-center rounded-xl shadow-lg transition-all duration-300 ${
            showNav ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"} `}>
          
          <ul className="flex flex-col gap-2 p-3 text-sm">

            <li className="px-4 py-2 mb-4 rounded-xl shadow-md bg-gray-800 hover:scale-105 hover:bg-gray-500 transition transform"><Link href="/" >Home</Link></li>
            <li className="px-4 py-2 rounded-xl bg-gray-800 mb-4 shadow-md hover:scale-105 hover:bg-gray-500 transition transform"><Link href="/about">About</Link></li>
            <li className="px-4 py-2 rounded-xl bg-gray-800 mb-4 shadow-md hover:scale-105 hover:bg-gray-500 transition transform"><Link href="/project">Projects</Link></li>
            <li className="px-4 py-2 rounded-xl bg-gray-800 mb-4 shadow-md hover:scale-105 hover:bg-gray-500 transition transform"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        
      </header>

   
      <main className="flex-1">{children}</main>

  
      <footer className="bg-zinc-900 py-2 text-center text-gray-400">
        © 2026 Eyerusalem Abebe. All rights reserved.
        

      </footer>
    </body>
    </html>
  );
}
