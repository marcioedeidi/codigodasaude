// CÓDIGO DA SAÚDE
// Arquivo de interações da Landing Page


// Mensagem quando o formulário for enviado

const formulario = document.querySelector("form");


if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        alert(
            "Obrigado por se cadastrar! Em breve entraremos em contato com você."
        );


        formulario.reset();

    });

}




// Animação simples ao carregar a página

window.addEventListener("load", function() {

    document.body.style.opacity = "1";

});




// Ano automático no rodapé

const ano = new Date().getFullYear();

const rodape = document.querySelector("footer p");


if (rodape) {

    rodape.innerHTML =
    "© " + ano + " Código da Saúde - Todos os direitos reservados.";

}
