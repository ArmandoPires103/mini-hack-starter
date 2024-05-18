import React, { useState } from 'react';
import './Modal.css';
import BoroughFilter from './BoroughFilter';

const Modal = ({ schools, onSelect, onClose }) => {
  const [selectedSchools, setSelectedSchools] = useState(schools);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className='modal-title'>Select a School to Compare</h2>
        <BoroughFilter
          schools={schools}
          setSelectedSchools={setSelectedSchools}
        />
        <ul>
          {selectedSchools.map((school) => (
            <li key={school.school}>
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

export default Modal;

