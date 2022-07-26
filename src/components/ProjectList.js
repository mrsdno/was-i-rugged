import React, { useState } from 'react';
// Import our custom useStudentContext hook to have access to the initial state
import { useProjectContext } from '../utils/ProjectContext';

export default function StudentList() {
  // TODO: Import the students, actions and majors from our custom useStudentContext hook
  // Assign students variable from our custom hook
  const { projects, addProject, removeProject, status } = useProjectContext();

  // Initialize state for new students and new student majors
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectTwitter, setNewProjectTwitter] = useState("");
  const [newProjectDiscord, setNewProjectDiscord] = useState("");
  

  return (
    <div>
      {projects ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Twitter</th>
                  <th>Discord</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.twitter}</td>
                    <td>{project.discord}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          removeProject(project.id);
                        }}
                      >
                        <span role="img" aria-label="close">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                onChange={(e) => setNewProjectName(e.target.value)}
                placeholder="New project name..."
                type="text"
                value={newProjectName}
              />

              <input
                onChange={(e) => setNewProjectTwitter(e.target.value)}
                placeholder="New project twitter..."
                type="text"
                value={newProjectTwitter}
              />

              <input
                onChange={(e) => setNewProjectDiscord(e.target.value)}
                placeholder="New project discord..."
                type="text"
                value={newProjectDiscord}
              />
              <button
                type="button"
                onClick={() => {
                  // TODO: Write an onClick for the button so that it will add students
                  addProject({
                    name: newProjectName,
                    twitter: newProjectTwitter,
                    discord: newProjectDiscord
                  });
                  setNewProjectStatus("");
                  setNewProjectName("");
                }}
              >
                Add Project
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
