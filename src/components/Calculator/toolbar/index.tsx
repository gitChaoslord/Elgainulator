import { MAX_NAME_LIMIT, THEME_OPTIONS } from '@constants/calculator';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiCheck, BiEditAlt, BiX } from 'react-icons/bi';
import { ACTIONS } from '../actions';
import { useCalculatorContext } from '../context/useContext';
import "./index.css";

interface PropTypes {
  onDelete: (id: string) => void;
}



const Toolbar: React.FC<PropTypes> = ({ onDelete }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const { name, id, theme, dispatch } = useCalculatorContext();
  const formRef = React.useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  const handleDelete = () => onDelete(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newName = data.get("name") as string;
    if (newName === "" || newName.length > MAX_NAME_LIMIT) return;
    handleNameUpdate(newName);
  };

  const handleNameUpdate = (name: string) => {
    dispatch({ type: ACTIONS.UPDATE_NAME, payload: { value: name } });
    setIsEditing(false);
  }

  // TODO: on click outside end edit save / cancel
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

      <div className="toolbar__top">
        {isEditing ? <form className="min-w-0 flex-grow h-full" onSubmit={handleSubmit} ref={formRef}>
          <label htmlFor="name" className="hidden">name</label>
          <input maxLength={MAX_NAME_LIMIT} autoFocus name="name" defaultValue={name} className="bg-black/50 py-1 w-full outline-none pl-2 pr-1 rounded-b rounded-s-none" placeholder="Calculator name" type="text" />
          <button type="submit" className="hidden" />
        </form> : <h2 className="toolbar__title py-1" onDoubleClick={() => setIsEditing(true)}>{name}</h2>}

        <div className="toolbar__actions">

          {isEditing && <button className="toolbar__action" onClick={() => formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))} title="Confirm">
            <BiCheck />
          </button>}

          {!isEditing && <button className="toolbar__action" onClick={() => {
            setIsEditing(true);
          }} title="Edit">
            <BiEditAlt />
          </button>}

          <button className="toolbar__action close" onClick={handleDelete} title="Remove Calculator">
            <BiX />
          </button>
        </div>
      </div>

      <div className="toolbar__bottom">
        <select value={theme} className="capitalize bg-skin-fill" onChange={(e) => dispatch({ type: ACTIONS.SELECT_THEME, payload: { value: e.target.value } })}>
          {THEME_OPTIONS.map(({ value, label, className }) => <option className={className} value={value}>{t(label)}</option>)}
        </select>
      </div>
    </div>

  )
}
export default Toolbar;