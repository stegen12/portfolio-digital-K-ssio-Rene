let count = 0;

document.getElementById("welcomeBtn").addEventListener("click", function() {
  count++;
  document.getElementById("message").textContent = 
    `Bem-vindo(a) ao meu portfólio! Você clicou ${count} vez(es).`;
});
