import { useState } from "react"
import { IntlProvider } from "react-intl"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import arabicMessages from "../translations/ar.json"
import englishMessages from "../translations/en.json"
import farsiMessages from "../translations/fa.json"

import Arabic from "./Arabic"
import English from "./English"
import Farsi from "./Farsi"

const messagesList = {
  fa: farsiMessages,
  ar: arabicMessages,
  en: englishMessages,
}

export default function App() {
  const { pathname } = window.location
  const [locale, setLocale] = useState(pathname.split("/")[1] || "en")

  const handleChangeLocale = lang => {
    const isEnglish = lang === "en"
    document.querySelector("html").dir = isEnglish ? "ltr" : "rtl"

    setLocale(lang)
  }

  return (
    <IntlProvider locale={locale} messages={messagesList[locale]}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <English handleChangeLocale={handleChangeLocale} />
          </Route>
          <Route path="/fa">
            <Farsi handleChangeLocale={handleChangeLocale} />
          </Route>
          <Route path="/ar">
            <Arabic handleChangeLocale={handleChangeLocale} />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  )
}
