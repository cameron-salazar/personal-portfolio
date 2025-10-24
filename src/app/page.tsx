import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center space-y-8">
      {/* Photo */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-black shadow-md">
        <Image
          src="/images/profile.jpg"          // put file at public/images/profile.jpg
          alt="Photo of Cameron Salazar"
          fill
          sizes="320px"                      // ask for crisp size
          priority                           // load high quality on first paint
          quality={100}
          className="object-cover object-[59%_40%] scale-125" // adjust crop focus as needed
        />
      </div>

      {/* Name + intro */}
      <div className="space-y-2 max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight">Cameron Salazar</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A Software Engineer passionate about making experiences for people through tech.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-4">
        <a href="/projects" className="px-6 py-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          View Projects
        </a>
        <a href="/resume" className="px-6 py-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          View Resume
        </a>
      </div>

      {/* Socials */}
      <SocialLinks />
    </main>
  );
}

