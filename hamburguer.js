

const menu = document.getElementById('menu');
menu = addEventListener('click', btn_toggle);

function btn_toggle() {
  const btn = document.getElementById('hamburguer');
  btn.classList.toggle('active');
}