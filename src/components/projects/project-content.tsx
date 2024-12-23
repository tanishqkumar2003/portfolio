export type projectData = {
  image: {
    src: string;
  };
  title: string;
  description: string;
  header: string;
  tags: string[];
  link: {
    github: string;
    youtube?: string;
    live?: string;
  };
};

export const projectsContent: projectData[] = [
  {
    image: {
      src: "/medium.jpeg",
    },
    title: "Thought-Sphere",
    header: "Blogging website",
    description:
      "Thought-Sphere is a blogging website which allows user to do CRUD operations on their blogs. Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests.",
    tags: [
      "Typescript",
      "React.js",
      "Hono.js",
      "Prisma",
      "PostgreSQL",
      "Connection - pooling",
      "Custom hooks",
      "TailwindCSS",
      "ShadcnUI",
    ],
    link: {
      github: "https://github.com/tanishqkumar2003/Thought-Sphere",
      youtube: "",
      live: "https://thoughtsphere-6b5e7.web.app/",
    },
  },
  // {
  //   image: {
  //     src: "/portfolio.jpeg",
  //   },
  //   title: "Portfolio",
  //   header: "Tanishq Kumar | portfolio",
  //   description:
  //     "The goal of this project is to design and develop a personal portfolio website that effectively highlights my skills, projects, and professional experience.",
  //   tags: [
  //     "Javascript",
  //     "React.js",
  //     "Next.js",
  //     "Tailwind Css",
  //     "Framar Motion",
  //     "Typescript",
  //     "Shadcn UI",
  //   ],
  //   link: {
  //     github: "https://github.com/pradhumngautam/pradhumn-portfolio",
  //     youtube: "",
  //     live: "https://pradhumngautam.vercel.app/",
  //   },
  // },
  // {
  //   image: {
  //     src: "/swift.jpeg",
  //   },
  //   title: "Swift Spend",
  //   header: "Banking app",
  //   description:
  //     "SWIFT SPEND is a banking app which enables user to transfer money to other users. Backend involves RESTful APIs and custom token-based authentication for secure access control including the password hashing through bCrypt, sessions are used for making transactions for controlling multiple transfer requests on same account or in the case of server/database crash.",
  //   tags: [
  //     "Javascript",
  //     "Node.js",
  //     "Express.js",
  //     "Mongoose",
  //     "MongoDB",
  //     "JWT",
  //     "bCrypt",
  //   ],
  //   link: {
  //     github: "https://github.com/pradhumngautam/paytm",
  //     youtube: "",
  //     live: "https://paytm-gules.vercel.app/",
  //   },
  // },
];
