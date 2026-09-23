import musicas from "./data/musicas.js";
import renderizarMusicas from "./ui.js";
import { carregarFavoritos, salvarFavoritos } from "./localStorage.js";

const lista = document.getElementById("cardMusica");

carregarFavoritos();
renderizarMusicas(musicas);

function alternarFavorito(idMusica) {
  const musica = musicas.find((item) => item.id === Number(idMusica));

  if (!musica) return;

  musica.favorita = !musica.favorita;

  const botao = document.querySelector(`button[data-id="${idMusica}"]`);
  if (botao) {
    renderizarMusicas(musicas);
  }
}

if (lista) {
  lista.addEventListener("click", (event) => {
    const botao = event.target.closest("button[data-id]");

    if (!botao) return;

    alternarFavorito(botao.dataset.id);
    salvarFavoritos();
  });
}

export default alternarFavorito;
