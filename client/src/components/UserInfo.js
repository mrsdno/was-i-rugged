import React, { useState } from "react";

const UserInfo = () => {
  const [userName, setUserName] = useState("");
  const [userDiscord, setUserDiscord] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setUserName(inputValue);
    } else {
      setUserDiscord(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !userDiscord) {
      setErrorMessage("Please provide this information!");
    }

    alert(`Ready to get data for ${userName}`);

    setUserName("");
    setUserDiscord("");
  };

  return (
    <div className="user-info-wrapper">
      <h1>Welcome!</h1>
      <p> We need some info from you before we can start.</p>
      <form>
        <label for="fname">What is your name?</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={userName}
        />
        <label for="lname">What is your discord id?</label>
        <input
          value={userDiscord}
          type="text"
          id="discord"
          name="discord"
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Let's get started.
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
