import React from 'react';
import { useCalculatorContext } from '../context';

interface PropTypes {
  onDelete: (id: string) => void;
  onNameUpdate: (id: string, name: string) => void;
}

const maxNameLimit = 30;

const Toolbar: React.FC<PropTypes> = ({ onDelete, onNameUpdate }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const { name, id } = useCalculatorContext();

  const handleDelete = () => onDelete(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const newName = data.get("name") as string;
    if (newName === "") {
      console.log("empty")
      // TODO: popup/toast
      return;
    }
    if (newName.length > maxNameLimit) {
      console.log("many characters")
      // TODO: popup/toast
      return;
    }
    onNameUpdate(id, newName);
    setIsEditing(false);
  }


  return (
    <div className="toolbar">

      {isEditing ? <form className="min-w-0 flex-grow" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input name="name" defaultValue={name} className="bg-black" placeholder="Calculator name" type="text" />
        <button type="submit" className="hidden" />
      </form> : <h2 className="toolbar__title">{name}</h2>}

      <div className="toolbar__actions">
        {isEditing ? <button onClick={() => setIsEditing(false)}>N</button> : <button onClick={() => setIsEditing(true)}>E</button>}
        <button onClick={handleDelete}>X</button>
      </div>
    </div>

  )
}
export default Toolbar;