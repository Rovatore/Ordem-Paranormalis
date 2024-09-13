function ToggleMode() {
  const html = document.documentElement
  html.classList.toggle("oculto")

  //Pegar a tag imagem
  const img = document.querySelector("#logo-ordo img")
  // subistituir a imagem (if e else)
  if (html.classList.contains("oculto")) {
    img.setAttribute("src", "./assets/imgs/outrolado.jpeg")
  } else {
    img.setAttribute("src", "./assets/imgs/ordo.png")
  }
}
