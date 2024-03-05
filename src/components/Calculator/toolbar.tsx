import React from 'react';
import { useCalculatorContext } from './context';

interface PropTypes {
  onDelete: (id: string) => void;
}

const Toolbar: React.FC<PropTypes> = ({ onDelete }) => {
  const { name, id } = useCalculatorContext();

  const handleDelete = () => onDelete(id);

  return (
    <div className="toolbar">
      <h2 className="toolbar__title">{name}</h2>
      <button onClick={handleDelete}>X</button>
    </div>

  )
}
export default Toolbar;