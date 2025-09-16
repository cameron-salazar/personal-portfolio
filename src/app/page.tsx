

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Cameron Salazar</h1>
        <p className="text-muted-foreground">
          Software Engineer • Portfolio
        </p>
        <a
          href="/projects"
          className="inline-block rounded-lg px-4 py-2 bg-black text-white"
        >
          View Projects
        </a>
      </div>
    </main>
  );
}

