import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 scroll-mt-24 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-2 w-full text-center text-3xl font-semibold md:mb-4">
            About Me
          </h2>
        </MotionDiv>

        <article className="flex flex-col text-lg text-neutral-300 font-medium">
          <MotionDiv delayOffset={0.4}>
            <div className="my-2">
              I'm Tanishq Kumar a Full Stack Developer from India. Passionate
              about Software Development, Cloud Engineering, Backend Systems &
              Open-Source Softwares.
            </div>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <div className="flex flex-col gap-2">
              <p>
                I'm currently pursuing Masters in Computer Application from Dr. A. P. J. Abdul Kalam Technical University, Lucknow(U.P.), India.
              </p>
              <p>
                I am passionate about creating not just functional, but also
                aesthetically pleasing and intuitive user interfaces, ensuring a
                seamless user experience.
              </p>
            </div>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <Image
            src="/photo.jpeg"
            alt="photo"
            width={420}
            height={420}
            className="mt-6 rounded-xl transition-all hover:rotate-3 hover:scale-105"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
