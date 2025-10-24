import { Github, Linkedin } from "lucide-react";

// Small reusable component so you can drop it anywhere (Home, Footer, etc.)
export default function SocialLinks() {
  return (
    // flex row, center on small screens, add spacing and subtle color
    <div className="flex items-center justify-center gap-4 text-gray-600">
      {/* Each link: opens in new tab, accessible label, safe rel attributes */}
      <a
        href="https://github.com/cameron-salazar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="p-2 rounded-lg hover:bg-gray-100 hover:scale-110 transition transform"
        title="GitHub"
      >
        {/* size controls the icon box, strokeWidth controls line thickness */}
        <Github size={40} strokeWidth={1.75} />
      </a>

      <a
        href="https://www.linkedin.com/in/cameron-salazar-b137712a8/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="p-2 rounded-lg hover:bg-gray-100 hover:scale-110 transition transform"
        title="LinkedIn"
      >
        <Linkedin size={40} strokeWidth={1.75} />
      </a>
    </div>
  );
}
