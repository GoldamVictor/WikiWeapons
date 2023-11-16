const errorDiv = document.getElementById("error");

const errorRender = (title, content) => {
  errorDiv.innerHTML = `
  <div class="error">
    <a onclick="errorClear(); return false;" class="close-button">x</a>
    <h1>${title}</h1>
    <p>
      ${content}
    </p>
  </div>
  `;
};

const errorClear = () => {
  errorDiv.innerHTML = "";
};

const changeUrl = (newUrl) => {
  window.location.href = newUrl;
};

const loginButtonHandler = () => {
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;

  if (userEmail == "xx@gmail.com" && userPassword == "123") {
    const validUser = {
      email: userEmail,
      isValid: true,
    };
    localStorage.setItem("user", JSON.stringify(validUser));
    changeUrl("index.html");
  } else {
    errorRender("Credenciales Inválidas", "oe, usted puso eso maaaaal D:<");
  }
};
