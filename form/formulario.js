const formPrincipal = document.querySelector("form");

formPrincipal.addEventListener("submit", (event) => {
  // Impede o recarregamento padrão da página ao clicar no submit
  event.preventDefault();

  // Captura dos campos de texto, select e textarea
  const nome = document.getElementById("nome").value;
  //   const nomeInput = document.getElementById("nome");
  const erroNome = document.getElementById("erroNome");

  const email = document.getElementById("email").value;
  //   const emailInput = document.getElementById("email");
  const erroEmail = document.getElementById("emailErro");

  const tipoMusica = document.getElementById("tipo-musica").value;
  const cantorGosto = document.getElementById("cantor-gosto").value;
  const artistaAdicionar = document.getElementById("artista-adicionar").value;
  const musicaGostou = document.getElementById("musica-gostou").value;
  const gauchaFavorita = document.getElementById("gaucha-favorita").value;
  const gauchaRecomendo = document.getElementById("gaucha-recomendo").value;
  const adicionar = document.getElementById("adicionar").value;
  const novasBiografias = document.getElementById("novas-biografias").value;
  const melhorar = document.getElementById("melhorar").value;
  const musicaMarcante = document.getElementById("musica-marcante").value;
  const musicaUnica = document.getElementById("musica-unica").value;

  const musica = document.getElementById("musica")?.checked || "Não respondido";
  const danca = document.getElementById("danca")?.checked || "Não respondido";
  const churrasco =
    document.getElementById("churrasco")?.checked || "Não respondido";
  const tradicoes =
    document.getElementById("tradicoes")?.checked || "Não respondido";
  const historia =
    document.getElementById("historia")?.checked || "Não respondido";
  const vestimenta =
    document.getElementById("vestimenta")?.checked || "Não respondido";

  // Captura segura das opções selecionadas (Radio) -> Pega o valor textual
  const conheciaMusica =
    document.querySelector('input[name="conhecia"]:checked')?.value ||
    "Não respondido";
  const moradia =
    document.querySelector('input[name="moradia"]:checked')?.value ||
    "Não respondido";
  const ctg =
    document.querySelector('input[name="ctg"]:checked')?.value ||
    "Não respondido";
  const festival =
    document.querySelector('input[name="festival"]:checked')?.value ||
    "Não respondido";

  const facil =
    document.querySelector('input[name="facil"]:checked')?.value ||
    "Não respondido";
  const encontrar =
    document.querySelector('input[name="encontrar"]:checked')?.value ||
    "Não respondido";

  // Analiza os inputs vazios e mostra uma mensagem personalizada para cada
  //nome
  if (nome == "") {
    alert("Nome é obrigatório.");
    console.log("hsgdhsvdhsvdgdvsdf");
    return;
  }
  const regexNome = /^[A-Za-zÀ-ÿ\s]+$/;
  if (!regexNome.test(nome)) {
    alert("O nome deve conter apenas letras.");
    return;
  }
  // if (nome =="67") {
  //   alert("O seu nome não é 67, por favor pare de ser criança");

  //   return;
  // }
  // if (nome == "42") {
  //   alert("O seu nome não é 42, por favor pare de ser criança");

  //   return;
  // }

  //fimnome

  if (conheciaMusica === "Não respondido") {
    alert(
      "Você deve marcar o campo 'Você já conhecia a música gaúcha antes de visitar o site?' para proseguir",
    );
    return;
  }

  if (moradia === "Não respondido") {
    alert(
      "Você deve informar a seguinte opção: 'Você mora no Rio Grande do Sul?' para proseguir",
    );
    return;
  }

  if (ctg === "Não respondido") {
    alert(
      "Você deve marcar a opçaõ: 'Participa de CTG? (Centro de Tradições Gaúchas)' para proseguir",
    );
    return;
  }

  if (festival == "Não respondido") {
    alert(
      "Você precisa marcar a opçaõ: 'Já foi a algum rodeio ou festival tradicionalista?'",
    );
    return;
  }

  if (facil == "Não respondido") {
    alert(
      "Você deve marcar a opção:'O conteúdo foi fácil de navegar?' para continuar",
    );
    return;
  }

  if (encontrar == "Não respondido") {
    alert(
      "Para prosseguir, marque uma das opções do campo: 'Encontrou a música que procurava?'",
    );
    return;
  }

  // Exibe todas as respostas de maneira legível e organizada no Console do navegador
  console.log("=== NOVA RESPOSTA DO FORMULÁRIO ===");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Estilo Favorito:", tipoMusica);
  console.log("Já conhecia música gaúcha?:", conheciaMusica);
  console.log("Grupo/Cantor preferido:", cantorGosto);
  console.log("Artista para adicionar:", artistaAdicionar);
  console.log("Música preferida do site:", musicaGostou);
  console.log("Música gaúcha favorita:", gauchaFavorita);
  console.log("Recomendação de música:", gauchaRecomendo);
  console.log("Mora no RS?:", moradia);
  console.log("Participa de CTG?:", ctg);
  console.log("Vai a festivais/rodeios?:", festival);
  const cultural = [];
  if (musica === true) {
    cultural.push("Música");
  }
  if (danca === true) {
    cultural.push("Dança");
  }
  if (churrasco === true) {
    cultural.push("Churrasco");
  }
  if (tradicoes === true) {
    cultural.push("Tradições");
  }
  if (historia === true) {
    cultural.push("História");
  }
  if (vestimenta === true) {
    cultural.push("Vestimenta");
  }
  if (cultural.length === 0) {
    alert(
      "Você tem que marcar algumas opções do seguinte campo: 'Qual aspecto da cultura gaúcha mais gosta?'",
    );
    return;
  }
  console.log("Aspectos da cultura preferidos:", cultural.join(", "));

  console.log("Fácil de navegar?:", facil);
  console.log("Encontrou a música?:", encontrar);
  console.log("Músicas sugeridas:", adicionar);
  console.log("Sugestão de Biografias:", novasBiografias);
  console.log("Sugestão de melhorias:", melhorar);
  console.log("Música marcante e motivo:", musicaMarcante);
  console.log("Recomendação para iniciantes:", musicaUnica);
  console.log("====================================");

  const confirmarDados = confirm(`Seus dados são:
    Nome: ${nome}
    Email: ${email}
    Estilo Favorito: ${tipoMusica}
    Já conhecia música gaúcha?: ${conheciaMusica}
    Grupo/Cantor preferido: ${cantorGosto}
    Artista para adicionar: ${artistaAdicionar}
    Música preferida do site: ${musicaGostou}
    Música gaúcha favorita: ${gauchaFavorita}
    Recomendação de música: ${gauchaRecomendo}
    Mora no RS?: ${moradia}
    Participa de CTG?: ${ctg}
    Vai a festivais/rodeios?: ${festival}`);

  if (confirmarDados === true) {
    alert("Dados enviados para meu banco de dados!");
  } else {
    alert(
      "Que pena, então agora você voltará ao fomulário para mudar os dados incorretos",
    );
  }
  // Opcional: Descomente a linha abaixo se quiser limpar os campos do formulário após o envio
  // formPrincipal.reset();
});
