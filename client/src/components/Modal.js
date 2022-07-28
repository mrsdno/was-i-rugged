import "./Modal.css";
import React, { useState } from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectTwitter, setNewProjectTwitter] = useState("");
  const [newProjectDiscord, setNewProjectDiscord] = useState("");

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
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newProjectName) {
            setErrorMessage('At least give us a name!');
        }

        alert(`Ready to get data for ${newProjectName}`);

        setNewProjectName('');
        setNewProjectDiscord('');
        setNewProjectTwitter('');
    }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}

        <form className="form">
          <input
            value={newProjectName}
            name="name"
            onChange={handleInputChange}
            type="string"
            placeholder="Project Name"
          />

          <input
            value={newProjectDiscord}
            name="discord"
            onChange={handleInputChange}
            type="string"
            placeholder="Project Discord"
          />
          <input
            value={newProjectTwitter}
            name="twitter"
            onChange={handleInputChange}
            type="string"
            placeholder="Project Twitter"
          />
        </form>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>

        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export { Modal };
