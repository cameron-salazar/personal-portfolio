

export default function Home() {
  return (
    <main className="min-h-[60vh] max-w-3xl mx-auto p-8 space-y-4">
      <h1 className="text-4xl font-bold">Cameron Salazar</h1>
      <p className="text-lg text-gray-500">
        Software Engineer • Portfolio
      </p>
      <div className="flex gap-3">
        <a
          href="/projects" className="px-4 py-2 rounded-lg border">View Projects
        </a>
        <a href="/resume" className="px-4 py-2 rounded-lg border">Resume
        </a>
        <a href="/contactme" className="px-4 py-2 rounded-lg border">Contact Me
        </a>
      </div>
    </main>
  );
}

