import React from 'react'
import "./Modal.css"

const Modal = ({ singleSchool, onSelect, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Select a School to Compare</h2>
          <ul>
            {singleSchool.map((singleSchool, index) => (
              <li key={index}>
                <button onClick={() => onSelect(singleSchool)}>
                  {singleSchool.school}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Modal