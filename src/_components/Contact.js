import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="my-16 flex gap-50 py-10">
      <form className="flex flex-col gap-4 w-full sm:w-1/2">
        <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 bg-zinc-700 border border-zinc-600 rounded text-white placeholder-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          className="p-3 bg-zinc-700 border border-zinc-600 rounded text-white placeholder-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-36 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded
                     transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="hidden sm:block">
        <Image src="/email.png" alt="email" width={350} height={350} />
      </div>
    </section>
  );
}
