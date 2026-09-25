🎤 Roteiro da apresentação — Tchê Musics
1. Começo: apresentar a ideia

“Bom, o projeto que eu desenvolvi se chama Tchê Musics.

A ideia surgiu como uma forma de criar uma biblioteca digital de músicas gaúchas, onde uma pessoa pudesse não só encontrar e ouvir músicas, mas também conhecer suas letras, seus artistas e um pouco mais sobre o significado delas.

Ao longo do desenvolvimento, o projeto foi crescendo e eu comecei a adicionar várias funcionalidades para deixar essa experiência mais completa.”

Mostre a página inicial.

Observação: Não fale de código ainda.

2. Mostre o que a pessoa consegue fazer

Aqui você apresenta o site como se estivesse ensinando alguém a utilizá-lo.

“Logo na página inicial, temos o catálogo de músicas. Cada música possui sua capa, nome e artista, e a partir daqui o usuário pode escolher o que quer ouvir.”

Clique em uma música.

“Ao entrar em uma música, temos o áudio, a letra e outras informações relacionadas a ela.”

Mostre rapidamente.

Depois volte para a página inicial.

3. Explique a pesquisa

Digite alguma coisa no campo de pesquisa.

“Como o catálogo possui várias músicas, uma das funcionalidades que eu adicionei foi a pesquisa.

Por exemplo, se eu procurar pelo nome de um artista, o site mostra somente as músicas relacionadas a ele.”

Faça uma pesquisa.

Depois faça uma pesquisa sem acento, se estiver funcionando.

“Também fiz com que a pesquisa não dependa exatamente da forma como a pessoa escreve. Ela consegue encontrar o resultado mesmo com diferenças de letras maiúsculas, minúsculas ou acentuação.”

Observação: Para uma pessoa leiga, isso é muito mais interessante do que falar normalize("NFD").

4. Explique os filtros

Agora mostre o seletor.

“Além de pesquisar, também é possível organizar as músicas.”

Mostre:

Nome;
Artista;
Popularidade.

“Então, por exemplo, posso colocar as músicas em ordem alfabética pelo nome, pelo artista ou organizar pela popularidade.”

Faça uma demonstração.

Só depois, se quiser falar da programação:

“Por trás disso existe JavaScript, que é o que permite que a página perceba o que o usuário selecionou e reorganize as músicas automaticamente.”

Pronto.

Você explicou programação sem precisar ensinar programação.

5. Explique os favoritos

Essa provavelmente é uma das melhores funcionalidades para mostrar para público leigo.

Clique no coração.

“Também existe um sistema de favoritos.”

Favorite duas músicas.

“Se eu gostar de uma música, posso marcá-la como favorita.”

Abra a página de favoritos.

“E depois posso acessar uma área onde ficam somente as músicas que escolhi.”

Agora faça uma coisa importante:

Recarregue a página.

“E existe um detalhe interessante aqui. Mesmo se eu atualizar a página, minhas escolhas continuam salvas.”

Explique:

“Isso acontece porque o site utiliza um recurso do próprio navegador chamado armazenamento local. Ele permite guardar pequenas informações no computador do usuário.”

Não diga localStorage imediatamente.

Depois:

“Tecnicamente, esse recurso é chamado de localStorage.”

Para quem não programa, a analogia é muito melhor:

“É como se o navegador tivesse uma pequena gaveta onde o site pode guardar algumas informações.”

6. Mostre o catálogo de conteúdo

Agora fale que o projeto não é somente uma playlist.

“Mas o Tchê Musics não foi pensado somente como um lugar para ouvir músicas.”

Abra uma página de letra.

“Cada música possui sua própria página, onde é possível acompanhar a letra.”

Depois abra o significado.

“E eu também adicionei páginas explicando o significado e o contexto de várias músicas.”

Aqui você pode falar:

“A ideia foi fazer com que o site também ajudasse a conhecer melhor aquilo que está por trás das músicas.”

7. Fale da parte cultural

Essa parte merece atenção porque é o diferencial do projeto.

“Como o projeto é voltado para a música gaúcha, eu também quis trabalhar com a parte cultural.

Então foram adicionados conteúdos relacionados aos artistas, às músicas, às letras, aos significados e a elementos da cultura gaúcha.”

Mostre rapidamente algumas músicas conhecidas.

Você pode dizer:

“Dessa forma, o site não funciona somente como uma biblioteca de áudio. Ele também reúne informações para quem quer conhecer melhor essas músicas e a cultura relacionada a elas.”

8. Agora explique: “Mas como você fez isso?”

Só agora entre na programação.

Você pode falar:

“Até aqui eu mostrei o que o usuário consegue fazer. Mas para tudo isso funcionar, existe uma parte que não aparece na tela: o código.”

Mostre rapidamente a estrutura do projeto:

Tchê Musics
├── páginas
├── imagens
├── áudios
└── scripts

E diga:

“Eu organizei o projeto em diferentes tipos de arquivos. As páginas ficam separadas dos áudios, imagens e dos códigos que controlam as funcionalidades.”

9. Explique JavaScript com uma analogia

Aqui não fale:

“Eu utilizo módulos ES6 com manipulação do DOM...”

😂

Fale:

“O HTML é responsável principalmente por montar a estrutura da página.

O CSS cuida da aparência.

E o JavaScript funciona como a parte que dá instruções para a página.”

Faça uma analogia:

“É parecido com uma casa. O HTML seria a estrutura da casa, o CSS seria a decoração e o JavaScript seria aquilo que faz algumas coisas acontecerem quando alguém interage com ela.”

Depois dê exemplos:

“Quando eu pesquiso uma música, o JavaScript processa essa pesquisa.

Quando eu seleciono um filtro, ele reorganiza os resultados.

Quando eu clico no coração, ele altera o favorito.

Então o JavaScript é o responsável por grande parte da interação do site.”

10. Explique o catálogo automático

Essa é uma das partes mais interessantes para mostrar que houve programação de verdade.

Abra musicas.js.

Mas não fique mostrando código por muito tempo.

Mostre uma pequena parte.

“Uma coisa que eu também mudei foi a forma como as músicas são cadastradas.”

Você pode explicar:

“Em vez de precisar montar manualmente cada card da página, eu criei uma lista com as informações das músicas.”

Analogia:

“É como uma ficha de cadastro. Para cada música eu informo o nome, artista, imagem, áudio e outras informações.”

Depois:

“O JavaScript lê essas informações e monta os cards automaticamente.”

Faça o paralelo:

Informações da música
        ↓
    JavaScript
        ↓
   Card na página

Isso é muito mais compreensível para quem nunca programou.

11. Mostre a evolução

Se você tiver como mostrar uma versão antiga ou explicar como era antes:

“Essa também foi uma das principais evoluções do projeto.”

“No início, muitas coisas precisavam ser colocadas manualmente nas páginas. Conforme o projeto cresceu, eu comecei a procurar formas de automatizar partes repetitivas.”

Então:

“Isso tornou o projeto mais organizado e facilitou a adição de novas músicas.”

Essa é uma ótima forma de explicar por que você programou, e não simplesmente o que você programou.

12. Fale da quantidade de conteúdo

Aqui você pode mostrar a estrutura geral:

“Além da programação, o projeto também cresceu bastante em conteúdo.”

Fale sobre:

Músicas;
Áudios;
Capas;
Letras;
Biografias;
Significados;
Páginas informativas.

“Então foram duas partes acontecendo ao mesmo tempo: eu estava desenvolvendo o sistema e também construindo o conteúdo que ele apresenta.”

13. Git — explique de forma simples

Se quiser mostrar o GitHub:

“Também utilizei uma ferramenta chamada Git para acompanhar as mudanças no projeto.”

E não precisa entrar em branch, merge, commit etc., a menos que alguém pergunte.

Analogia:

“Ele funciona um pouco como um histórico de versões. Se eu fizer uma alteração e alguma coisa der errado, consigo acompanhar o que foi modificado.”

14. E a inteligência artificial?

Se alguém perguntar, você pode ser completamente transparente:

“Eu utilizei inteligência artificial durante o desenvolvimento, mas não para simplesmente gerar o projeto inteiro.

Usei principalmente para tarefas repetitivas, para tirar dúvidas e para ajudar em alguns problemas específicos.

As decisões sobre o funcionamento do projeto, a organização das funcionalidades e os testes foram feitos durante o desenvolvimento do projeto.”

15. O encerramento

Eu faria algo bem natural:

“Então, esse é o Tchê Musics.

O projeto começou com a ideia de criar uma biblioteca de músicas gaúchas, mas durante o desenvolvimento ele foi crescendo e acabou envolvendo tanto a parte de programação quanto a parte cultural.

Hoje o site permite pesquisar músicas, organizar o catálogo, favoritar músicas, ouvir os áudios, acompanhar as letras e conhecer melhor o significado de várias delas.

E, na parte de desenvolvimento, eu consegui utilizar o que estou aprendendo em programação para transformar uma página que inicialmente era mais estática em um site com várias funcionalidades interativas.

No final, o objetivo não foi apenas fazer um site para mostrar músicas, mas criar uma forma de juntar tecnologia e cultura gaúcha em um único projeto.

Esse foi o Tchê Musics. Obrigado!”
