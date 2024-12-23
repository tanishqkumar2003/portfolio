type projectInfoType = {
  id: number;
  title: string;
  description: string[];
  skills: string[];
  gSource: string;
  lSource: string;
  iSource: string;
};

export const projectsInfo: projectInfoType[] = [
  {
    id: 1,
    title: "E-Commerce Store",
    description: [
      "Ecommerce Store that enables users to experience the real-time shopping experience.",
      "Starting right from browsing products and adding them to cart to checkout.",
    ],
    skills: ["Python", "Django", "HTML", "CSS", "JS", "SQLITE"],
    gSource: "https://",
    lSource: "",
    iSource: "",
  },
  {
    id: 2,
    title: "Blog App REST APIs",
    description: [
      "Blog Application's REST APIs to use with any frontend system.",
      "Well documented every step to use APIs with ease.",
    ],
    skills: ["Python", "Django", "MySQL"],
    gSource: "https://github.com/tanishqkumar2003/Thought-Sphere",
    lSource: "",
    iSource: "",
  },
  {
    id: 3,
    title: "",
    description: [],
    skills: [],
    gSource: "",
    lSource: "",
    iSource: "",
  },
  {
    id: 4,
    title: "",
    description: [],
    skills: [],
    gSource: "",
    lSource: "",
    iSource: "",
  },
  {
    id: 5,
    title: "",
    description: ["", ""],
    skills: ["", ""],
    gSource: "",
    lSource: "",
    iSource: "",
  },
];
