function adicionarFilme() {
  var addFilme = document.getElementById("filme").value;
  if (addFilme.endsWith(".jpg")){ 
   listarFilmes(addFilme)
} else {
  console.error("URL inválida!");
}
document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
  console.log(filme);
  var movie = "<img src=" + filme + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + movie;
}
 
