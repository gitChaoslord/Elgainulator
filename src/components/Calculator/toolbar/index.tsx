import React from 'react';
import { BiCheck, BiEditAlt, BiX } from 'react-icons/bi';
import { useCalculatorContext } from '../context';
import "./index.css";

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
  };

  // TODO: should handle select/focused calculator in the future

  const handleEscPress = React.useCallback((e: KeyboardEvent) => {
    if (isEditing && e.key === "Escape") setIsEditing(false);
  }, [isEditing])

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscPress)
    return () => {
      document.removeEventListener("keydown", handleEscPress)
    }
  }, [handleEscPress])

  return (
    <div className="toolbar">

      {isEditing ? <form className="min-w-0 flex-grow" onSubmit={handleSubmit}>
        {/* <label htmlFor="name">name</label> */}
        <input maxLength={maxNameLimit} autoFocus name="name" defaultValue={name} className="bg-black w-full" placeholder="Calculator name" type="text" />
        <button type="submit" className="hidden" />
      </form> : <h2 className="toolbar__title" onDoubleClick={() => setIsEditing(true)}>{name}</h2>}

      <div className="toolbar__actions">

        {isEditing && <button className="toolbar__action" onClick={() => setIsEditing(false)} title="Confirm">
          <BiCheck />
        </button>}

        {!isEditing && <button className="toolbar__action" onClick={() => {
          setIsEditing(true);
        }} title="Edit">
          <BiEditAlt />
        </button>}

        <button className="toolbar__action" onClick={handleDelete} title="Remove Calculator">
          <BiX />
        </button>

      </div>
    </div>

  )
}
export default Toolbar;