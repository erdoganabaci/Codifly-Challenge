const developers = [
  { id: "d1", name: "Kristof", projects: ["p1", "p2"] },
  { id: "d2", name: "Arvid", projects: ["p1", "p2", "p4"] },
  { id: "d3", name: "Joren", projects: ["p3", "p4"] },
];
const projects = [
  { id: "p1", name: "Color Passport - The Digital One" },
  { id: "p2", name: "In The Pocket - Smart City App" },
  { id: "p3", name: "Teamleader - App" },
  { id: "p4", name: "Apporto - Social Shopping App" },
];

// O(n) + O(n) = O(n) linear time complexity
const getDeveloperProjects = (developers, projects, developerId) => {
  // O(n) time complexity
  const developerProjects = developers
    .filter((item) => item.id === developerId)
    .map((developer) => developer.projects);

  // old usage
  // let arr = [];
  // developerProjects[0].forEach((element) => {
  //   const filteredProject = projects.find((item) => item.id === element);
  //   arr.push(filteredProject.name);
  //   // console.log(projects.find((item) => item === element));
  // });

  // O(n) time complexity
  const developerProjectsName = developerProjects[0].map((developerProject) =>
    projects
      .filter((item) => item.id === developerProject)
      .map((item) => item.name)
  );
  return developerProjectsName;
};

console.log(getDeveloperProjects(developers, projects, "d2"));
