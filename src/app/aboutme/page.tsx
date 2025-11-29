import Image from "next/image";

export default function AboutMe() {
    return (
      <section className="px-8 py-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">About Me</h2>
        </div>


        <div className="w-full max-w-5xl mx-auto rounded-xl bg-white/70 dark:bg-black/50 shadow-md p-4 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                    src="/images/about1.jpg"
                    alt="Cameron photo 1"
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    priority                           // load high quality on first paint
                    quality={100}
                    className="object-cover scale-118"
                    />
                </div>

                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                    src="/images/about2.jpg"
                    alt="Cameron photo 2"
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    priority                           // load high quality on first paint
                    quality={100}
                    className="object-cover"
                    />
                </div>

                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                    <Image
                    src="/images/about3.jpg"
                    alt="Cameron photo 3"
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    priority                           // load high quality on first paint
                    quality={100}
                    className="object-cover scale-190"
                    />
                </div>
            </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
            <p> 
                I was born and raised in Houston, Texas. I am a proud Mexican/Filipina who graduated from
                Texas State University.
                Go Bobcats!
                <br /> <br />
                Some of my interests are: movies, video games, anime, working out, and YouTube.
                I am an avid movie goer, love going to the movies and discussing them. It all started with Harry Potter and the Infinity saga from Marvel.
                I am a big Nintendo fan with my favorite franchise being the Legend of Zelda and found my love for fighting games through Super Smash Bros.
                I watch a few animes, but my favorite is One Piece. I love to workout and I would say my main source of entertainment is YouTube.
                <br /> <br />
                I first discovered coding in high school and quickly became fascinated with how things can be made with just a few lines of code.
                I enjoy creating things through code and solving problems along the way to make a great final project.
                I hope to create or be apart of projects that can help and bring joy to people.
                <br /> <br />
                <br /> <br />
            </p>
        </div>

      </section>
    );
}