import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function Info() {
  return (
    <div className="flex flex-col md:flex-row gap-12 p-8 md:p-12 items-center md:items-start max-w-6xl mx-auto">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Frontend Developer
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
          I&apos;m Mazen Mohamed, a self-taught frontend developer who loves
          crafting responsive and modern web experiences. I specialize in using
          frameworks like Next.js to build fast, user-friendly interfaces, and
          I&apos;m always exploring new tools to grow as a developer.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://github.com/MazenSayed2710"
            className="text-2xl text-zinc-400 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mazen-mohamed-96324b263/"
            className="text-2xl text-zinc-400 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.instagram.com/mazen_mohamedd10/?fbclid=IwY2xjawJzjzxleHRuA2FlbQIxMAABHv7UZfUJ0hLEEtP8lmRLHAywLRTY4M0XCL84zSxQwzqXPWTQUBVAmeId6M1L_aem_YxzT0fFJ5Wx-xEoQUNhZGw#"
            className="text-2xl text-zinc-400 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100064074040964"
            className="text-2xl text-zinc-400 hover:text-white transition-colors duration-300 hover:scale-110"
          >
            <FaFacebook />
          </Link>
        </div>
        <a
          href="/resume.pdf"
          download
          className="w-36 py-3 px-5 bg-blue-600 hover:bg-blue-700 text-gray-300 font-semibold rounded
                     transition-colors duration-200"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Info;
