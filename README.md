# Tchê Musics

Tchê Musics é uma biblioteca digital de músicas gaúchas criada para um projeto
escolar. O site reúne letras, áudios, capas, biografias de artistas e textos
explicando o significado de cada música.

## Funcionalidades

- Catálogo com 22 músicas gaúchas.
- Busca por título ou artista.
- Ordenação por artista, nome e popularidade.
- Páginas individuais com letra, capa e reprodutor de áudio.
- Páginas com o significado das letras.
- Lista de favoritos salva no navegador.
- Páginas sobre artistas, documentação, ferramentas e o Rio Grande do Sul.
- Navegação responsiva para telas menores.

## Tecnologias

- HTML5
- CSS3
- JavaScript com módulos ES
- `localStorage` para favoritos
- GitHub Pages para publicação

## Estrutura

```text
Tche-musics/
├── index.html
├── assets/
│   ├── media/
│   │   ├── audios/
│   │   └── imagens/
│   ├── scripts/
│   │   ├── data/musicas.js
│   │   ├── favoritos.js
│   │   ├── filtros.js
│   │   ├── localStorage.js
│   │   └── ui.js
│   └── styles/estilo.css
├── enciclopedia/
├── form/
├── pages/
│   ├── biografias/
│   ├── letras/
│   ├── paginas/
│   └── significados-letras/
├── outros/
└── README.md
```

As músicas são cadastradas em `assets/scripts/data/musicas.js`. Cada registro
define o título, artista, capa, áudio e link para a página da letra.

## Como executar

A forma mais facil é clonando o repositório via terminal (forma que eu uso que é mais facil):
- Vá no seu EXPLORADOR DE ARQUIVOS
- Selecione a pasta ou espaço em que vai clonar o projeto
- Clique com o botão direito e ache "abrir com terminal"
- No terminal execute o seguinte código

``` git clone https://github.com/PasteldeSazon/Tche-Musics.git ```

- E pronto! Voce pode ver o projeto no seu explorador de arquivos 

Se quiser pode fazer um fork direto pelo Git Hub

Se quiser algo mais faci ainda, acesse esse link:

<https://pasteldesazon.github.io/Site-trabalho-escola/>

## Aprendizados

O projeto pratica estruturação de páginas HTML, organização de arquivos,
estilização com CSS, manipulação do DOM, filtros, busca, armazenamento local e
publicação de um site estático.

## Licença

Projeto desenvolvido para fins educacionais.

## Autor

Desenvolvido por Gabriel Passos.
