var listaFilmes = ["Projeto almanaque","Capitão fantástico","O mapa das pequenas coisas perfeitas"];
//elemnto 1, 2, 3, ...
//índice  0, 1, 2, ...

//add novos elementos - indice 3
listaFilmes.push("Star Wars VII");
//aumentado indices 
listaFilmes.push("Star Wars VI");
listaFilmes.push("Star Wars V");
listaFilmes.push("Star Wars IV");
listaFilmes.push("Star Wars III");
listaFilmes.push("Star Wars II");
listaFilmes.push("Star Wars I");

console.log(listaFilmes.length);

var titulo = "Filmes preferidos do jotinha";

//usar h1, strong
document.write("<h1>" + titulo + "</h1>");
// como estava antes de melhorar o código com o "for"
// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

//       valor inicial, condição, expressão final
for (var indice = 0;indice <listaFilmes.length; indice++){
  document.write(indice);
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
