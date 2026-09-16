"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="my-16 flex gap-50 py-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 sm:w-1/2"
      >
        <h2 className="mb-6 text-3xl font-bold text-white">Get in Touch</h2>

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded border border-zinc-600 bg-zinc-700 p-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          placeholder="Your Message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="rounded border border-zinc-600 bg-zinc-700 p-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          disabled={isSending}
          className="w-36 rounded bg-blue-600 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 disabled:opacity-50"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-sm text-white">{status}</p>}
      </form>

      <div className="hidden sm:block">
        <Image src="/email.png" alt="email" width={350} height={350} />
      </div>
    </section>
  );
}
