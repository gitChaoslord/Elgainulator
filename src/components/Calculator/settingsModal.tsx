import React from 'react';
import './settings/settings.css'

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
  }

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, children }) => {
    const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

    if (!isOpen) return null;
  
    const toggleExpand = () => setIsExpanded(!isExpanded);
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className={`modal-content ${isExpanded ? 'expanded' : ''}`} onClick={e => e.stopPropagation()}>
          {children}
          <button className="expand-collapse-btn" onClick={toggleExpand}>
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <label htmlFor="switchKey">Switch Key Value:</label>
            <input id="switchKey" name="switchKey" type="text" />
          <button className="close-modal" onClick={onClose}>Close</button>
        </div>
      </div>
    );
};

export default SettingsModal;