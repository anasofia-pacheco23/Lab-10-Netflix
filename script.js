const getData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
};

const mostrarRecomendados = async () => {
  const listaRecomendados = document.getElementById("recomendados");

  const data = await getData();
  data.recomendaciones.forEach((movie) => {
    const carta = document.createElement("li");

    const imagenContenedor = document.createElement("div");
    imagenContenedor.classList.add("imagen");

    const imagen = document.createElement("img");
    imagen.src = movie.imagen;
    imagenContenedor.appendChild(imagen);
    carta.appendChild(imagenContenedor);

    const footer = document.createElement("div");
    footer.classList.add("texto_abajo");

    const divCalificacion = document.createElement("div");
    divCalificacion.classList.add("stars");

    const pLabel = document.createElement("p");
    pLabel.innerText = "Ratings:";
    divCalificacion.appendChild(pLabel);

    let i = 1;
    do {
      const iconoEstrella = document.createElement("img");
      iconoEstrella.src =
        Math.floor(movie.calificacion) >= i
          ? "iconos/yellow_fill_star.png"
          : "iconos/yellow_outline_star.png";
      divCalificacion.appendChild(iconoEstrella);
      i = i + 1;
    } while (i <= 5);
    footer.appendChild(divCalificacion);

    const bookmarkContenedor = document.createElement("div");
    bookmarkContenedor.classList.add("bookmark");
    const bookmarkIcon = document.createElement("img");
    bookmarkIcon.src = "iconos/baseline_bookmark_border_white_48dp.png";
    bookmarkContenedor.appendChild(bookmarkIcon);
    footer.appendChild(bookmarkContenedor);
    carta.appendChild(footer);

    listaRecomendados.appendChild(carta);
  });
};

mostrarRecomendados();

const mostrarTendencias = async () => {
  const listaTendencias = document.getElementById("tendencias");
  const data = await getData();

  data.tendencias.forEach((movie) => {

const carta = document.createElement("li");

const imagenContenedor = document.createElement("div");
imagenContenedor.classList.add("imagen");
const imagen = document.createElement("img");
imagen.src = movie.imagen;
imagenContenedor.appendChild(imagen);
carta.appendChild(imagenContenedor);

const footer = document.createElement("div");
footer.classList.add("texto_abajo");

const calificacion = document.createElement("div");
calificacion.classList.add("stars");

const texto = document.createElement("p");
texto.innerText = "Ratings:";
calificacion.appendChild(texto);

let i = 1;
    do {
      const iconoEstrella = document.createElement("img");

      iconoEstrella.src =
        Math.floor(movie.calificacion) >= i
          ? "iconos/yellow_fill_star.png"
          : "iconos/yellow_outline_star.png";

      calificacion.appendChild(iconoEstrella);
      i = i + 1;
    } while (i <= 5);

footer.appendChild(calificacion);

const guardado = document.createElement("div");
guardado.classList.add("bookmark");
const guardadoIcon = document.createElement("img");
guardadoIcon.src = "iconos/baseline_bookmark_border_white_48dp.png";
guardado.appendChild(guardadoIcon);

footer.appendChild(guardado);
carta.appendChild(footer);
listaTendencias.appendChild(carta);
  })
};

mostrarTendencias();

mostrarTendencias();

const mostrarBanner = async () => {
  const banner = document.getElementById("bannerPrincipal");

  const data = await getData();
  const dataBanner = data.banner;

  banner.style.backgroundImage = `url(${dataBanner.imagen})`;

  const contenidoBanner = document.createElement("div");
  contenidoBanner.classList.add("banner_contenido");

  const tituloBanner = document.createElement("div");
  tituloBanner.classList.add("titulo_principal");

  const titulo = document.createElement("h1");
  titulo.innerText = dataBanner.titulo;
  
  tituloBanner.appendChild(titulo);
  contenidoBanner.appendChild(tituloBanner);
  banner.appendChild(contenidoBanner);

}

mostrarBanner();