/* Menu mobile */
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open')
  }
}
/* dark mode */
const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('light')
})

/* Digitador */
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 90 * i);
  });
}

const titulo = document.querySelector('#text-digitador');
typeWriter(titulo);
//entrada lateral
const myObsever = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObsever.observe(element))

//mover card com o vanila
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1
});

//parte ver mais
var verMaisbtn = document.querySelector("#show-hide")
var contEsc = document.querySelector(".outros-projetos")
verMaisbtn.addEventListener("click", function () {
  if (contEsc.style.display === "block") {
    contEsc.style.display = "none";
    this.textContent = 'Ver Mais';
  } else {
    contEsc.style.display = "block";
    this.textContent = 'Ver Menos';
  }
})