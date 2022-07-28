import React, { Component } from "react";
import { Modal } from "./Modal.js";

class NewProjectDashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1>Tell us about the project</h1>
        </Modal>

        
        <button type="button" className="new-project-btn" onClick={this.showModal}>
          Add New Project
        </button>
      </div>
    );
  }
}

export default NewProjectDashboard;
