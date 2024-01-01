import Image from "next/image";
import Button from "./Button";
import { File, FileText } from "lucide-react";

const HomeSection = () => (
  <section className="flex flex-wrap justify-between content-start py-24">
    <div className="grid content-center gap-4 max-w-[650px] px-6 max-lg:order-2">
      <div className="max-sm:text-4xl text-5xl font-[600]">Urooj Khan</div>
      <div className="text-xl mb-2">
        Highly skilled and results-driven Full-Stack Developer with 5+ years of
        hands-on experience.
      </div>
      <a href="/Urooj Khan.pdf" className="flex gap-2 bg-zinc-200 dark:bg-zinc-900 w-max px-4 py-3 rounded-md font-[600]" download>
        Download Resume <FileText />
      </a>
    </div>
    <div className="flex max-lg:w-full justify-center items-center">
      <Image
        className="rotate-[5deg] mb-4 sm:mb-28"
        width={360}
        height={360}
        src="/my.png"
        alt="mypic"
      />
    </div>
  </section>
);

export default HomeSection;
