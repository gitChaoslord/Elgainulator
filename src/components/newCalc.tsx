import React from 'react';
import { useTranslation } from 'react-i18next';

const NewCalculator: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <button className="calculator__new-btn" onClick={onClick}>
      <div className="m-auto">{t("ADD_CALCULATOR")}</div>
    </button>
  )
}
export default NewCalculator