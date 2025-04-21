import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-zinc-700 px-5 py-2  rounded-full mb-8 w-fit m-auto">
      <ul className="flex space-x-8 justify-center">
        <li>
          <Link
            href="#home"
            className="text-white transition-colors hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#about"
            className="text-white transition-colors hover:text-blue-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#products"
            className="text-white transition-colors hover:text-blue-500"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white transition-colors hover:text-blue-500"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
