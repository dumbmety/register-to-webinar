export default function checkLang() {
  const lang = window.location.pathname.split("/")[1]
  return lang === "fa" ? "farsi" : "english"
}
