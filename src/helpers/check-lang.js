const checkLang = () => {
  const lang = window.location.pathname.split('/')[1];

  let language = 'english';
  if (lang === 'fa') {
    language = 'farsi';
  }

  return language;
};

export default checkLang;
