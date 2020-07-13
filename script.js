// Pegar o container do texto
const postWrap = document.querySelector(".post-wrap");

// Criar a barra de leitura
let bar = document.createElement("div");

// Estilo da barra
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#6949d6";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s"

// Adiciona a barra no corpo da página
document.body.append(bar);

window.addEventListener("load", () => {
    // Verifica moveimento do scroll
    document.addEventListener("scroll", updateBar);
})

function updateBar() {

    // Tamanho da caixa que contém o texto
    const textHeight = postWrap.offsetHeight;

    // Verifica em que posição da página está
    const pagePosition = window.pageYOffset;

    // Regra de 3
    const updatedBar = pagePosition * 100 / textHeight;

    // Atualiza a barra
    bar.style.width = updatedBar + "%";
}

