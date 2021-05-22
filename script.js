//Pega a classe css .nav-links e guarda na constante nav 
const nav = document.querySelector('.nav-links');

//Pega a classe css .burger e guarda na constante burger
const burger = document.querySelector('.burger');

//Pega todos os links "a" que estão dentro da tag nav e guarda na constante links
const links = nav.querySelectorAll('a');


//Quando clicado, a constante burger executa a função de abrir o menu,
//E quando clicado novamente, a função menu se fecha.
burger.addEventListener('click', () => {

    nav.classList.toggle('nav-open');

    burger.classList.toggle('toggle');

});

//Para cada "a" dentro da tag nav guardada na constante links é
//Executado a seguinte função:
links.forEach(link => {

    //Para cada link "a" clicado, é feita a função:
    //Classe nav-open se fecha
    //Classe toggle é desativada
    link.addEventListener('click', () => {

        nav.classList.toggle('nav-open');

        burger.classList.toggle('toggle');

    });

});