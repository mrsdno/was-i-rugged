import React, { createContext, useContext, useState } from 'react';

// Initialize new context for students
const ProjectContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useProjectContext = () => useContext(ProjectContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "WomenRise",
      twitter: "@womenrisenft",
      discord: "883829465732489249",
    },
    {
      id: 2,
      name: "HUG",
      twitter: "@theHUG",
      discord: "953021386039902250",
    },
  ]);

  

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
  const status = [
    'Active',
    'Semi-Active',
    'Maybe Rugged'
  ];

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, removeProject, status }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </ProjectContext.Provider>
  );
};
