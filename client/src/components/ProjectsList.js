import React from "react";

const ProjectsList = ( { projects } ) => {

    if (!projects.length) {
        return <h3>No projects yet.</h3>
    }

    return (
        <div className="projects-wrapper">
            <div className="scrollbar">
            <div className="force-overflow">
            {projects && projects.map((project) => (
                <div className="card" key={project.id}>
                    <div className="cardBody">
                        <h3>{project.name}</h3>
                        <p>{project.discord}</p>
                        <p>{project.twitter}</p>
                    </div>
                </div>
            ))}
                </div>
            </div>
        </div>
    )

};

export default ProjectsList;
