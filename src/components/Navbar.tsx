import Link from "next/link";

const Navbar = () => (
  <nav className="w-full bg-white/80 backdrop-blur border-b border-black/10 shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-6 flex items-center justify-between h-16">
      <Link
        href="#hero"
        className="text-2xl font-caveat font-bold tracking-wide text-[#6d8c4c] transition-colors"
      >
        Kate Art Gallery
      </Link>
      <ul className="flex gap-8 text-base font-medium">
        <li>
          <Link
            href="#hero"
            className="px-3 py-1 rounded text-[#6d8c4c] transition-colors hover:bg-[#6d8c4c]/10"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#gallery"
            className="px-3 py-1 rounded text-[#6d8c4c] transition-colors hover:bg-[#6d8c4c]/10"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="px-3 py-1 rounded text-[#6d8c4c] transition-colors hover:bg-[#6d8c4c]/10"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="px-3 py-1 rounded text-[#6d8c4c] transition-colors hover:bg-[#6d8c4c]/10"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
