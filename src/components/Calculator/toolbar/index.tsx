import React from 'react';
import { BiCheck, BiEditAlt, BiX, BiCog } from 'react-icons/bi';
import { ACTIONS } from '../actions';
import { useCalculatorContext } from '../context/useContext';
import SettingsModal from '../settingsModal';
import "./index.css";

interface PropTypes {
  onDelete: (id: string) => void;
}

const maxNameLimit = 30;

const Toolbar: React.FC<PropTypes> = ({ onDelete }) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [isEditingSettings, setIsEditingSettings] = React.useState<boolean>(false);
  const { name, id, dispatch } = useCalculatorContext();
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleDelete = () => onDelete(id);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newName = data.get("name") as string;
    if (newName === "" || newName.length > maxNameLimit) return;
    handleNameUpdate(newName);
  };

  const handleSubmitForSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const theme = data.get("theme");
    const defaultValueString = data.get("defaultValue");

    const defaultValue = defaultValueString ? parseFloat(defaultValueString.toString()) : 0;

    if (typeof theme === "string" && !isNaN(defaultValue)) {
        dispatch({
            type: ACTIONS.UPDATE_SETTINGS,
            payload: { theme, defaultValue },
        });
    } else {
        console.error("Invalid settings entered");
    }

    setIsEditingSettings(false);
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
        <SettingsModal isOpen={isEditingSettings} onClose={() => setIsEditingSettings(false)}>
          <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmitForSettings}>
              <div>
                <label htmlFor="themeSelect">Theme:</label>
                <select id="themeSelect" name="theme">
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
              <div>
                <label htmlFor="defaultValue">Default Calculator Value:</label>
                <input id="defaultValue" name="defaultValue" type="number" step="any" placeholder="Enter default value" />
              </div>
              </div>
              <button type="submit">Save Settings</button>
            </form>
          </div>
        </SettingsModal>
      {isEditing ? <form className="min-w-0 flex-grow h-full" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name" className="hidden">name</label>
        <input maxLength={maxNameLimit} autoFocus name="name" defaultValue={name} className="bg-black/50 w-full outline-none" placeholder="Calculator name" type="text" />
        <button type="submit" className="hidden" />
      </form> : <h2 className="toolbar__title" onDoubleClick={() => setIsEditing(true)}>{name}</h2>}

      <div className="toolbar__actions">

      <button className="toolbar__action" onClick={() => setIsEditingSettings(true)} title="setSettings">
        <BiCog />
      </button>

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