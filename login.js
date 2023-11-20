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

const loginButtonHandler = async () => {
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  const userData = { email: userEmail, password: userPassword, };
  
  try{
    const response = await fetch("https://ypsh82-3000.csb.app/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify(userData), 
    });
    
    if (response.ok) {
      const validUser = await response.json();
      localStorage.setItem("user", JSON.stringify(validUser));
      
      changeUrl("index.html");
    } else {
      const errorText = await response.text();
      errorRender("Credenciales Inválidas", errorText);
    }
  } catch (error) { 
    console.error("Error during fetch:", error);
    errorRender("Error de conexión", "Hubo un problema al conectar con el servidor.");
  }
};
