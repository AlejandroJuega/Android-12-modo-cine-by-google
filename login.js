const loginBtn = document.getElementById("loginBtn");
const googleLogin = document.getElementById("googleLogin");
const music = document.getElementById("bgMusic");
music.volume = 0.6;

function entrar() {
  music.pause();
  localStorage.setItem("modoCineUser", "true");
  document.body.classList.add("fade-out");
  setTimeout(() => (window.location.href = "index.html"), 500);
}

loginBtn.onclick = () => {
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (email && pass) entrar();
  else alert("Introduce tu correo y contraseña");
};

googleLogin.onclick = entrar;
