import React, { useState } from 'react';
import './Prompt.css';

const Prompt = ({ message, onConfirm, onCancel }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleConfirm = () => {
    setIsVisible(false);
    onConfirm();
  };

  const handleCancel = () => {
    setIsVisible(false);
    onCancel();
  };

  if (!isVisible) return null;

  return (
    <div className="prompt-overlay">
      <div className="prompt-box">
        <p>{message}</p>
        <div className="prompt-buttons">
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
