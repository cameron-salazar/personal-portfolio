import Image from "next/image";

export default function Projects() {
    return (
      <section className="max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        
        <div className="border p-6 rounded-xl shadow-lg bg-white/70 dark:bg-black/60 backdrop-blur-sm">
          <h3 className="text-xl font-medium font-semibold">Arioso</h3>
          <p className="text-gray-550">
            Part of a small team, we built a social media web application for music lovers to connect, share, and connect through music.
            As part of the front-end team, I used React to make multiple components, such as the log in page, sign up page, create a post component and more, 
            and connected the UI with the Flask backend. 
            <br /> <br />
            Built with React, Flask, and MongoDB.
          </p>
          
          <video controls className="rounded-lg border w-full max-h-[400px]">
            <source src="/videos/arioso_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="flex gap-4">
            <a
            href="https://github.com/arioso-collective/arioso_music_social"
            target="_blank"
            className="px-4 py-2 rounded-lg border bg-black text-white"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div className="border p-6 rounded-xl shadow-lg bg-white/70 dark:bg-black/60 backdrop-blur-sm">
          <h4 className="text-xl font-medium font-semibold">Vision Chess</h4>
          <p className="text-gray-550">
            Part of a small team, we built a web-based, accessible application to play chess for the visually impaired.
            The application integrates drag-and-drop mechanics, keyboard functionality, speech synthesis, and speech recognition in order to play.
            I focused on implementing the accessibility features and UI design.
            Unfortunately the video below does not provide audio, but please feel free to look at the repo. 
            <br /><br />
            Built with React, JavaScript, and Figma.
          </p>

          <video controls className="rounded-lg border w-full max-h-[400px]">
            <source src="/videos/vision_chess.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="flex gap-4">
            <a
            href="https://github.com/bradlyhayes12/Chess-game-impairedvision"
            target="_blank"
            className="px-4 py-2 rounded-lg border bg-black text-white"
            >
              GitHub Repo
            </a>
          </div>
        </div> 

        <div className="border p-6 rounded-xl shadow-lg bg-white/70 dark:bg-black/60 backdrop-blur-sm">
          <h3 className="text-xl font-medium font-semibold">Robot Arm w/ Rubber Duck</h3>
          <p className="text-gray-550">
            As part of a Blender workshop, I made a robot arm with a rubber duck at the end of it.
            I learned how to make multiple components, connected them, and learned how to move/animate them.
          </p>

          <video controls className="rounded-lg border w-full max-h-[400px]">
            <source src="/videos/rubber_duck.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    );
  }
  