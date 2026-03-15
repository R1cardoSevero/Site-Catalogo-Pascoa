const galeria = document.getElementById("galeria");

const imagens = [
    "./imagens/imagem8.jpeg",
    "./imagens/imagem2.jpeg",
    "./imagens/imagem14.jpeg",
    "./imagens/imagem5.jpeg",
    "./imagens/imagem11.jpeg",
    "./imagens/imagem1.jpeg",
    "./imagens/imagem16.jpg",
    "./imagens/imagem7.jpeg",
    "./imagens/imagem3.jpeg",
    "./imagens/imagem12.jpeg",
    "./imagens/imagem9.jpeg",
    "./imagens/imagem4.jpeg",
    "./imagens/imagem15.jpg",
    "./imagens/imagem6.jpeg",
    "./imagens/imagem13.jpeg",
    "./imagens/imagem10.jpeg",
];

imagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    galeria.appendChild(img);
});