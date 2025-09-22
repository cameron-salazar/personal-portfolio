import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contactme", label: "Contact Me" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-5xl mx-auto flex items-center gap-6 p-4">
        <Link href="/" className="font-semibold">Cameron</Link>
        <ul className="flex gap-4 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link className="hover:underline" href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
