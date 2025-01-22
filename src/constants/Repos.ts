import pythonContent from "../assets/docs/Python Course Content.pdf";
import powerBiContent from "../assets/docs/Power BI Content.pdf";
import gitContent from "../assets/docs/GIT Content.pdf";

const Repos = [
  {
    name: "Python Programming",
    description:
      "Learn Python from variables and conditionals to data visualization using Numpy, Matplotlib and Dash.",
    languages: "Python",
    colors: "bg-cyan-700",
    link: pythonContent,
  },
  {
    name: "Microsoft PowerBI",
    description:
      "Master PowerBI, starting from the fundamentals to data visualization in dashboards.",
    languages: "PowerBI",
    colors: "bg-yellow-500",
    link: powerBiContent,
  },
  {
    name: "VCS Using Git",
    description:
      "Learn about version control using the most popular VCS tool Git.",
    languages: "Git",
    colors: "bg-red-500",
    link: gitContent,
  },
  {
    name: "Java Programming",
    description:
      "Learn the hyper-popular Java programming language, including key concepts such as OOP and write programs that run anywhere!",
    languages: "Java",
    colors: "bg-orange-400",
    link: "Coming Soon!",
  },
  {
    name: "Web Development",
    description: "Master the foundations of the 3 languages of the web.",
    languages: ["HTML", "CSS", "JavaScript"],
    colors: ["bg-orange-600", "bg-purple-500", "bg-yellow-300"],
    link: "Coming Soon!",
  },
];

export default Repos;
