import React from 'react';
import { useCalculatorContext } from './context';

interface PropTypes {
  onDelete: (id: string) => void;
  onNameUpdate: (id: string, name: string) => void;
}

const maxNameLimit = 30;

const Toolbar: React.FC<PropTypes> = ({ onDelete, onNameUpdate }) => {
  const { name, id } = useCalculatorContext();

  const handleDelete = () => onDelete(id);

  // prop will come here
  const handleRename = () => {
    if ((name + "a").length > maxNameLimit) return name;
    onNameUpdate(id, `${name}a`);
  }

  return (
    <div className="toolbar">
      <h2 className="toolbar__title">{name}</h2>
      <div className="toolbar__actions">
        <button onClick={handleRename}>E</button>
        <button onClick={handleDelete}>X</button>
      </div>
    </div>

  )
}
export default Toolbar;