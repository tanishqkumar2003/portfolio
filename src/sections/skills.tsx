import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import pythonIcon from "@/assets/icons/python.png";
import javaIcon from "@/assets/icons/java.png";
import html5Icon from "@/assets/icons/html5.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import pnpmIcon from "@/assets/icons/pnpm.png";
import viteIcon from "@/assets/icons/vite.png";
import prettierIcon from "@/assets/icons/prettier.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import prismaIcon from "@/assets/icons/prisma.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import macosIcon from "@/assets/icons/macos.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import warpIcon from "@/assets/icons/warp.webp";
import postmanIcon from "@/assets/icons/postman.svg";
import { cn } from "@/lib/utils";

export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
          invert: false,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
          invert: true,
        },
        {
          name: "Django",
          icon: nextjsIcon,
          invert: true,
        },
        {
          name: "TypeScript",
          icon: typescriptIcon,
          invert: false,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
          invert: false,
        },
        {
          name: "HTML5",
          icon: html5Icon,
          invert: false,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
          invert: false,
        },

        {
          name: "shadcn/ui",
          icon: shadcnuiIcon,
          invert: false,
        },
        {
          name: "PNPM",
          icon: pnpmIcon,
          invert: false,
        },
        {
          name: "Vite",
          icon: viteIcon,
          invert: false,
        },
        {
          name: "Prettier",
          icon: prettierIcon,
          invert: false,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: nodejsIcon,
          invert: false,
        },
        {
          name: "Hono.js",
          icon: nodejsIcon,
          invert: false,
        },
        {
          name: "Express.js",
          icon: expressjsIcon,
          invert: true,
        },
        {
          name: "Prisma ORM",
          icon: prismaIcon,
          invert: true,
        },
        {
          name: "PostresQL",
          icon: mysqlIcon,
          invert: false,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
          invert: false,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
          invert: false,
        },
        {
          name: "Python",
          icon: pythonIcon,
          invert: false,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "macOS",
          icon: macosIcon,
          invert: true,
        },
        {
          name: "VS Code",
          icon: vscodeIcon,
          invert: false,
        },
        {
          name: "Postman",
          icon: postmanIcon,
          invert: false,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center scroll-mt-24"
    >
      <MotionDiv>
        <h2 className="mb-4 text-3xl font-semibold">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center ">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3 className="text-lg my-3 text-neutral-400 font-semibold">
                {item.title}
              </h3>

              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  name,
  invert,
}: {
  icon: string;
  name: string;
  invert: boolean;
}) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image
            src={icon}
            alt={name}
            priority
            className={cn(invert && "invert")}
          />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
