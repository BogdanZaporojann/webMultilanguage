import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from 'i18next'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icons/css/flag-icons.min.css'

function App() {

  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ar',
      name: 'العربية',
      country_code: 'sa',
    },
  ]

  const { t } = useTranslation();

  const myBirthday = new Date('1999-02-07')
  const timeDifference = new Date() - myBirthday
  const numbers_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))


  return (

    <div className="container">
      <div className="d-flex flex-column align-items-start">
        <h1 className="fonst-wigth-normal mb-3">{t('welcome_message')}</h1>
        <p>{t('I_have_this_numbers_of_days', { numbers_of_days })}</p>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code} className="dropdown-item">
              <button onClick={()=>i18next.changeLanguage(code)} className="dropdown-item">
                <span className={`fi fi-${country_code}`}></span>
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
