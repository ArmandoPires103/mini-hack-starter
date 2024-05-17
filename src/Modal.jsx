import React from 'react'
import "./Modal.css"

const Modal = ({ schools, onSelect, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Select a School to Compare</h2>
          <ul>
            {schools.map((school) => (
              <li key={school.schoool}>
                <button onClick={() => onSelect(school)}>
                  {school.school}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Modal