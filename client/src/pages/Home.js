import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_PROJECTS } from "../utils/queries";
import Projects from '../components/ProjectsList'

const Home = () => {

  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];


  return (
    <div className="banner">
          <div className="col-12 col-md-8 mb-3">
        {loading ? (
          <div>Loading...</div>
              ) : (
                      <Projects projects={projects} />
        )}
      </div>
    </div>
  );
};

export default Home;
