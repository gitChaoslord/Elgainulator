import { createCalculator } from '@store/features/core';
import { useAppDispatch } from '@store/index';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NewCalculator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleAddCalculator = () => dispatch(createCalculator());

  return (
    <button className="calculator__new-btn" onClick={handleAddCalculator}>
      <div className="m-auto">{t("ADD_CALCULATOR")}</div>
    </button>
  )
}
export default NewCalculator