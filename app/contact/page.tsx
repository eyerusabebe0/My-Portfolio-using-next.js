"use client"; // for Next.js app directory

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();

   
    if (!res.ok) {
      alert(result.error || "Failed to send message");
      return;
    }

    
    alert("Message sent successfully 🚀");

   
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
}


  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center py-20 px-6 bg-zinc-900 text-center">

  
      <div className="max-w-2xl mx-auto bg-transparent py-12 px-8 shadow-lg">
        <h3 className="text-3xl font-semibold mb-4 text-indigo-400 underline decoration-indigo-400 decoration-4 underline-offset-8">
          Contact
        </h3>

        <p className="text-zinc-400 mb-8">
          Feel free to reach out for collaboration, opportunities, or just to say hello.
        </p>

        <p className="mb-4 text-zinc-300 text-lg">
          Email:
          <a href="mailto:jeryabebe1321@gmail.com" className="ml-2 text-indigo-400 hover:underline">
            jeryabebe1321@gmail.com
          </a>
        </p>

        <p className="text-zinc-300 text-lg">
          GitHub:
          <a href="https://github.com/eyerusabebe0" target="_blank" rel="noopener noreferrer" className="ml-2 text-indigo-400 hover:underline">
            eyerusabebe0
          </a>
        </p>
      </div>


      <div className="max-w-2xl mx-auto bg-transparent py-12 px-8 shadow-lg border border-zinc-700/60 rounded-2xl backdrop-blur-sm">
        <p className="text-2xl font-semibold mb-10 text-indigo-400">Drop a message</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            placeholder="Your name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl text-zinc-450 py-2 border border-indigo-400 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-transparent focus:border-indigo-400 text-sm md:text-base mb-5"
          />

          <input
            placeholder="Your email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-indigo-400 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 mb-5 focus:bg-transparent text-zinc-450 text-sm md:text-base mb-5"
          />

          <textarea
            placeholder="Your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-xl w-full h-28 border px-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 mb-5 focus:bg-transparent text-zinc-450 text-sm md:text-base mb-5 md:col-span-2"
          />

          <button
            type="submit"
            className="block border border-indigo-400 px-2 py-2 cursor-pointer bg-gradient-to-r from-zinc-900 via-indigo-400 to-zinc-900 rounded-2xl text-zinc-950 w-full font-extrabold hover:bg-gradient-to-r hover:from-indigo-400 hover:via-zinc-900 hover:to-indigo-400 hover:text-white hover:scale-105 md:col-span-2"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
