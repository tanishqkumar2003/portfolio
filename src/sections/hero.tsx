import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import DP from "../../public/dp.png";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-center text-lg md:text-[2rem]">
        <MotionDiv delayOffset={0.2} className={cn(poppins.className)}>
          <span className="font-semibold">Hi, I'm Tanishq Kumar! 👋</span>
        </MotionDiv>
      </h1>

      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <Image src={DP} alt="Dp" className="max-w-xs" />
        </MotionDiv>
      </div>

      <h1 className="text-center text-2xl font-semibold">
        <MotionDiv delayOffset={0.8}>Software Engineer</MotionDiv>
      </h1>

      <h1 className="text-center text-xl ">
        <MotionDiv delayOffset={1}>Full Stack Developer</MotionDiv>
      </h1>

      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p className="text-lg">Welcome to my personal portfolio!</p>
        </MotionDiv>

        <MotionDiv delayOffset={1.4}>
          <p className="text-lg">
            {/* Typescript & Python guy at the morning. Systems & Infra kid at the
            night. */}
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
