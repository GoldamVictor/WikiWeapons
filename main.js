const changeUrl = (newUrl) => {
  window.location.href = newUrl;
};

const loadingHandler = () => {
  let localUser;
  try {
    localUser = JSON.parse(localStorage.getItem("user"));
  } catch (err) {}
  if (!localUser?.isValid) {
    changeUrl("./logueo.html");
  }
};

loadingHandler();
