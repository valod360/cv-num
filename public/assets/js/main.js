const scrollContainer = document.querySelector('main');
let flame = document.getElementById('flammeVaisseau')
let vaisseau = document.getElementById('vaisseau')
let timer = null;
let animationMoment = 0;

/* recuperer le deltay et lui attribuer une valeur puis la retirer si il scroll en negatif une fois fait
faire les animation selon la position du scroll */

/* faire une function qui triger avant qu'il arrive sur la div suivante*/

scrollContainer.addEventListener('wheel', (evt) => {

    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
    if (evt.deltaY == 100) {
        ++animationMoment;
    } if (evt.deltaY == -100) {
        --animationMoment;
    }
    console.log(animationMoment)

    flame.style.display = 'block';
    vaisseau.style.display = 'none';
    /*  vaisseau.style.animation = 'animate 1s';
     vaisseau.classList.add('rotate');
     vaisseau.removeAttribute('id'); */


});


const onScrollStop = callback => {
    let isScrolling;
    window.addEventListener('wheel', e => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            callback();
        }, 150);
    },
        false
    );
};

onScrollStop(() => {
    flame.style.display = 'none';
    vaisseau.style.display = 'block';
});