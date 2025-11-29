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
                Outside of coding, I'm passionate about movies, video games, anime, and working out.
                I'm an avid moviegoer who loves discussing films, and I've been a Nintendo fan for as long as I can remember.
                My favorite franchise is The Legend of Zelda and I enjoy diving into animes like One Piece.
                Most days, you can find me relaxing with YouTube or spending time at the gym.
                <br /> <br />
                I discovered coding in high school and quickly became fascinated that something meaningful can be created using only lines of code.
                Over time, I realized how much I loved solving problems, building projects, and watching my ideas come to life.
                I hope to contribute to software that helps people, inspires creativity, and brings joy.
                <br /> <br />
                <br /> <br />
            </p>
        </div>

      </section>
    );
}