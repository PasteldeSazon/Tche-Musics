import musicas from "./data/musicas.js";

function carregarFavoritos() {
  const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];

  musicas.forEach((musica) => {
    musica.favorita = favoritosSalvos.includes(musica.titulo);
  });
}

function salvarFavoritos() {
  const favoritos = musicas
    .filter((musica) => musica.favorita)
    .map((musica) => musica.titulo);

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function renderizarFavoritos() {
  const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const musicasFavoritas = favoritosSalvos
    .map((titulo) => musicas.find((musica) => musica.titulo === titulo))
    .filter(Boolean);
  const htmlFavoritos = document.getElementById("cardFavorito");

  if (!htmlFavoritos) return;

  htmlFavoritos.innerHTML = musicasFavoritas
    .map(
      (musica) => `
        <div class="card" data-id="${musica.id}">
          <img src="../../${musica.imagem}" alt="Capa de ${musica.titulo}">
          <h2>${musica.titulo}</h2>
          <p>${musica.autor}</p>
          <a href="../../${musica.link}">Clique aqui</a>
        </div>
      `,
    )
    .join("");
}

renderizarFavoritos();

export { carregarFavoritos, salvarFavoritos };
