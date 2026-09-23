import musicas from "./data/musicas.js";
import renderizarMusicas from "./ui.js";

const filtroPesquisa = document.getElementById("campoBusca");
const select = document.getElementById("filtro");
const contador = document.getElementById("contaodr-musicas")

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .trim();
}

function atualizarLista() {
  const pesquisa = normalizarTexto(filtroPesquisa.value);
  const resultado = musicas.filter((musica) => {
    const titulo = normalizarTexto(musica.titulo);
    const autor = normalizarTexto(musica.autor);
    return titulo.includes(pesquisa) || autor.includes(pesquisa);
  });

  if (resultado.length === 0) {
    alert(
      "Ops, parece que a música digitada não existe, por favor, isnsira um nome válido",
    );
    return;
  } else {
    contador.innerHTML = `<b>Músicas encontradas: </b>${resultado.length}`
  }


  switch (select.value) {
    case "autor-az":
      resultado.sort((a, b) => a.autor.localeCompare(b.autor));
      break;
    case "autor-za":
      resultado.sort((a, b) => b.autor.localeCompare(a.autor));
      break;
    case "nome-az":
      resultado.sort((a, b) => a.titulo.localeCompare(b.titulo));
      break;
    case "nome-za":
      resultado.sort((a, b) => b.titulo.localeCompare(a.titulo));
      break;
    case "popularidade-maior":
      musicas.sort((a, b) => a.popularidade - b.popularidade);
      break;
    case "popularidade-menor":
      musicas.sort((a, b) => b.popularidade - a.popularidade);
      break;
  }

  renderizarMusicas(resultado);
}

filtroPesquisa.addEventListener("input", atualizarLista);
select.addEventListener("change", atualizarLista);
