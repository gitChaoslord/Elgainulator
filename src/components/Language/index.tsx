import React from 'react';
import { useTranslation } from 'react-i18next';
import { localeCodes, localeOptions } from '@constants/locales';
import classNames from 'classnames';
import "./index.css";

const isLangValid = (lang: string) => localeCodes.includes(lang);

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (isLangValid(e.target.value)) i18n.changeLanguage(e.target.value);
  }

  return (
    <select onChange={changeLanguage} className="language__switch" value={i18n.language}>
      {localeCodes.map((code) => (
        <option
          className={classNames("language__option", { "active": code === i18n.language })}
          key={code}
          value={code}
        >
          {localeOptions[code].native}
        </option>
      ))}
    </select>
  )
}
export default LanguageSwitch