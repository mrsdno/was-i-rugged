import React, { createContext, useContext, useState, useEffect } from "react";

// Initialize new context for students
const ProjectContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useProjectContext = () => useContext(ProjectContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState();
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem("projects") || "[]")
  );

  // Function to add a student
const addProject = (project) => {
    // Check if the user forgot to enter a name
    if (!project.name) {
      return;
    }
    const id = projects.length + 1;

    // We use the spread operator to fill in the details from the student object that was passed while adding the new `id`
    const newProject = { ...project, id };

    // Update state with the students array with the newStudent
    setProjects([...projects, newProject]);
    console.log(projects);
  };


  // Function to remove a student
  const removeProject = (id) => {
    // Copy the content of the students array into our new list with the spread operator, then filter out the student that matches the `id` that was passed
    const newProjectsList = [
      ...projects.filter((project) => project.id !== id),
    ];

    setProjects(newProjectsList);
  };



  // List of options for the project status
  const status = ["Active", "Semi-Active", "Maybe Rugged"];

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, removeProject }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </ProjectContext.Provider>
  );
};
