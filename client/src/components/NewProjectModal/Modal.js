import "./Modal.css";
import React, { useState } from "react";
import { ADD_PROJECT } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_PROJECTS } from "../../utils/queries";


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [name, setNewProjectName] = useState("");
  const [twitter, setNewProjectTwitter] = useState("");
  const [discord, setNewProjectDiscord] = useState("");
  const [addProject, { data, loading, error }] = useMutation(ADD_PROJECT, {
    refetchQueries: [
      { query: QUERY_PROJECTS }, 
      "projects"
    ]
  });


  const picture = "this is the picture";
  const status = "active";

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setNewProjectName(inputValue);
    } else if (inputType === "discord") {
      setNewProjectDiscord(inputValue);
    } else {
      setNewProjectTwitter(inputValue);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // add thought to database
      await addProject({
        variables: { name, twitter, discord, picture, status },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <form className="form" onSubmit={handleSubmit}>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="string"
            placeholder="Project Name"
          />

          <input
            value={discord}
            name="discord"
            onChange={handleInputChange}
            type="string"
            placeholder="Project Discord"
          />
          <input
            value={twitter}
            name="twitter"
            onChange={handleInputChange}
            type="string"
            placeholder="Project Twitter"
          />
          {error && <span className="ml-2">Something went wrong...</span>}
          <button type="submit" onClick={handleClose}>
            Submit
          </button>
        </form>

        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export { Modal };
