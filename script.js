
const passwordScreen = document.getElementById("login-screen");
const desktop = document.getElementById("desktop");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

function checkPassword() {
  if (passwordInput.value === "020125") {
    passwordScreen.style.display = "none";
    desktop.style.display = "block";
  } else {
    errorMsg.textContent = "Mmm... esa no es la clave, amor.";
  }
}

const questions = [
  {
    question: "¿Cuál fue nuestro primer apodo de pareja?",
    options: ["chiwi", "bebé", "amor", "upi"],
    correct: "chiwi",
    content: "<img src='https://via.placeholder.com/300x200?text=Fotos+de+nosotros' />"
  },
  {
    question: "¿Cuándo fue que nos dijimos 'me gustas' por primera vez?",
    options: ["2 de febrero", "15 de enero", "19 de enero", "16 de enero"],
    correct: "16 de enero",
    content: "<ul><li>Tu sonrisa</li><li>Cómo hablas de tus sueños</li><li>Tu forma de abrazarme</li></ul>"
  },
  {
    question: "¿Con qué juego te pedí ser novios?",
    options: ["minecraft", "roblox"],
    correct: "roblox",
    content: "<p>Ese momento fue mágico 💖</p>"
  },
  {
    question: "¿Cuál es nuestra canción?",
    options: ["mistery of love", "we are the people", "can't help falling in love", "todas las anteriores"],
    correct: "todas las anteriores",
    content: "<p>🎶 Todas nuestras canciones, todos nuestros momentos 🎶</p>"
  }
];

function openApp(index) {
  const q = questions[index];
  document.getElementById("app-window").style.display = "block";
  document.getElementById("app-question").innerText = q.question;
  document.getElementById("app-feedback").innerText = "";
  document.getElementById("app-content").innerHTML = "";
  const optionsDiv = document.getElementById("app-options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (opt === q.correct) {
        document.getElementById("app-feedback").innerText = "¡Correcto! 💖";
        document.getElementById("app-content").innerHTML = q.content;
      } else {
        document.getElementById("app-feedback").innerText = "Mmm... intenta de nuevo, amor.";
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function closeApp() {
  document.getElementById("app-window").style.display = "none";
}
