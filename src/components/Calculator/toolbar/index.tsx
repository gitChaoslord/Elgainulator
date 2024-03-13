import { destroyCalculator, renameCalculator } from '@store/features/core';
import { useAppDispatch } from '@store/index';
import React from 'react';
import { BiCheck, BiEditAlt, BiX } from 'react-icons/bi';
import "./index.css";

const maxNameLimit = 30;
interface PropTypes {
  name: string;
  id: string;
}

const Toolbar: React.FC<PropTypes> = ({ name, id }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const formRef = React.useRef<HTMLFormElement>(null);
  const dispatch = useAppDispatch();

  const handleDelete = () => dispatch(destroyCalculator(id));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newName = data.get("name") as string;
    if (newName === "" || newName.length > maxNameLimit) return;
    handleNameUpdate(newName);
  };

  const handleNameUpdate = (name: string) => {
    dispatch(renameCalculator({ id, name }));
    setIsEditing(false);
  }

  // TODO: on click outside end edit save / cancel
  // TODO: should handle select/focused calculator in the future

  const handleEscPress = React.useCallback((e: KeyboardEvent) => {
    if (isEditing && e.key === "Escape") setIsEditing(false);
  }, [isEditing]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscPress)
    return () => {
      document.removeEventListener("keydown", handleEscPress)
    }
  }, [handleEscPress])

  return (
    <div className="toolbar">

      {isEditing ? <form className="min-w-0 flex-grow h-full" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name" className="hidden">name</label>
        <input maxLength={maxNameLimit} autoFocus name="name" defaultValue={name} className="bg-black/50 w-full outline-none" placeholder="Calculator name" type="text" />
        <button type="submit" className="hidden" />
      </form> : <h2 className="toolbar__title" onDoubleClick={() => setIsEditing(true)}>{name}</h2>}

      <div className="toolbar__actions">

        {isEditing && <button className="toolbar__action" onClick={() => formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))} title="Confirm">
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