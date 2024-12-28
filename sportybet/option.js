const btns = document.querySelectorAll('.btn');
const container = document.querySelector('.login-container');

const form = document.querySelector('.form');
const alert = document.querySelector('.alert');
const loader = document.querySelector('.small-load');

// Affiche le conteneur de connexion au clic sur les boutons
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.add('show-container');
    loader.style.display = 'flex';
    setTimeout(() => {
      loader.style.display = 'none';
      location.href = 'aviator.html';
    }, 5000);
  });
});

// Gère la soumission du formulaire sans validation d'ID
form.addEventListener('submit', (e) => {
  e.preventDefault();
  displayAlert('Connexion réussie, veuillez patienter...', 'success');
  setTimeout(() => {
    location.href = 'aviator.html';
  }, 1000);
});

// Fonction pour afficher des messages d'alerte
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(action);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(action);
  }, 1000);
}

