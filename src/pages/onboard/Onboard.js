import React from "react";
import "./onboard.scss";

const Onboard = () => {
  const openModal = () => {
    const modal = document.querySelector(".modal");
    modal.showModal();
  };
  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.close();
  };
  const submitModal = () => {};
  return (
    <div className="onboardSection">
      <div className="topBar">
        <div className="searchBar">
          <input type="text" placeholder="Filter" />
        </div>
        <div className="createBtn">
          <button onClick={openModal}>Create New</button>
        </div>
      </div>

      <div className="tableList">
        {/* looping after fetching */}
        <table>
          <thead>
            <tr>
              <th>STD Name</th>
              <th>STD ID</th>
              <th>Term-1</th>
              <th>Term-2</th>
              <th>Final</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Student 1</td>
              <td>12</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>
                <button className="status status-edit">Edit</button>
                <button className="status status-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Student 1</td>
              <td>12</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>
                <button className="status status-edit">Edit</button>
                <button className="status status-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Student 1</td>
              <td>12</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>
                <button className="status status-edit">Edit</button>
                <button className="status status-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Student 1</td>
              <td>12</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>
                <button className="status status-edit">Edit</button>
                <button className="status status-delete">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Student 1</td>
              <td>12</td>
              <td>300</td>
              <td>300</td>
              <td>300</td>
              <td>
                <button className="status status-edit">Edit</button>
                <button className="status status-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modalSection">
        <dialog className="modal">
          <form class="form" method="dialog">
            <label>
              Your name <input type="text" />
            </label>
            <label>
              Your email <input type="email" />
            </label>
            <button class="button" type="submit">
              submit form
            </button>
          </form>
          <button onClick={closeModal}>close</button>
        </dialog>
      </div>
    </div>
  );
};

export default Onboard;
