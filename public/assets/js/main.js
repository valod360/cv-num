const scrollContainer = document.querySelector('main');
let flame = document.getElementById('flammeVaisseau')
let vaisseau = document.getElementById('vaisseau')
let timer = null;
let animationMoment = 0;
let padAnim = false;

/* recuperer le deltay et lui attribuer une valeur puis la retirer si il scroll en negatif une fois fait
faire les animation selon la position du scroll */

/* faire une function qui triger avant qu'il arrive sur la div suivante*/

/* commencer par faire une variable pour le pad ensuite faire en sorte que quand c'est trop ou pas assez
je le met comme un scroll de souris normal puis j'ajoute cette valeur de base*/

scrollContainer.addEventListener('wheel', (evt) => {

    evt.preventDefault();


    scrollContainer.scrollLeft += evt.deltaY





    console.log(padAnim);



    if (evt.deltaY == 100) {
        ++animationMoment;
        padAnim = false
    } if (evt.deltaY == -100) {
        --animationMoment;
        padAnim = false;
    } if (animationMoment <= 0) {
        animationMoment = 0;
    } else if (animationMoment >= 20) {
        animationMoment = 20;
    }
    console.log(animationMoment)


    //cette partie a finir

    if (evt.deltaY < 0 && evt.deltaY != -100) {
        padAnim = true
    } else if (evt.deltaY > 0 && evt.deltaY != 100) {
        padAnim = true
    } else if (evt.deltaY == 0) {
        padAnim = false
    }

    // for the computer pad
    if (padAnim == true) {
        vaisseau.removeAttribute('id');
        vaisseau.classList.add('vaisseauPad');
        flame.removeAttribute('id');
        flame.classList.add('flammeVaisseauPad');
    } if (padAnim == false) {
        vaisseau.classList.remove('vaisseauPad');
        vaisseau.setAttribute('id', 'vaisseau');
        flame.classList.remove('flammeVaisseauPad');
        flame.setAttribute('id', 'flammeVaisseau');
    }






    flame.style.display = 'block';
    vaisseau.style.display = 'none';


    // frame 1
    //if is to SET the animation and the else to REMOVE it
    if (animationMoment == 8) {
        vaisseau.removeAttribute('id');
        vaisseau.classList.add('rotate1');
        //flame rotate
        flame.removeAttribute('id');
        flame.classList.add('rotate1Flame');
    } else if (animationMoment == 7) {
        vaisseau.classList.remove('rotate1');
        vaisseau.setAttribute('id', 'vaisseau')
        //flame rotate
        flame.classList.remove('rotate1Flame');
        flame.setAttribute('id', 'flammeVaisseau')
    }

    // frame 2
    if (animationMoment == 9) {
        vaisseau.classList.remove('rotate1');
        vaisseau.classList.add('rotate2');
        //flame rotate
        flame.classList.remove('rotate1Flame');
        flame.classList.add('rotate2Flame');
    } else if (animationMoment == 8) {
        vaisseau.classList.add('rotate1');
        vaisseau.classList.remove('rotate2');
        //flame rotate
        flame.classList.add('rotate1Flame');
        flame.classList.remove('rotate2Flame');
    }

    //frame 3
    if (animationMoment == 10) {
        vaisseau.classList.remove('rotate2');
        vaisseau.classList.add('rotate3');
        //flame rotate
        flame.classList.remove('rotate2Flame');
        flame.classList.add('rotate3Flame');
    } else if (animationMoment == 9) {
        vaisseau.classList.add('rotate2');
        vaisseau.classList.remove('rotate3');
        //flame rotate
        flame.classList.add('rotate2Flame');
        flame.classList.remove('rotate3Flame');
    }

    //frame 4
    if (animationMoment == 11) {
        vaisseau.classList.remove('rotate3');
        vaisseau.classList.add('rotate4');
        //flame rotate
        flame.classList.remove('rotate3Flame');
        flame.classList.add('rotate4Flame');
    } else if (animationMoment == 10) {
        vaisseau.classList.add('rotate3');
        vaisseau.classList.remove('rotate4');
        //flame rotate
        flame.classList.add('rotate3Flame');
        flame.classList.remove('rotate4Flame');
    }

    //frame5
    if (animationMoment == 12) {
        vaisseau.classList.remove('rotate4');
        vaisseau.classList.add('rotate5');
        //flame rotate
        flame.classList.remove('rotate4Flame');
        flame.classList.add('rotate5Flame');
    } else if (animationMoment == 11) {
        vaisseau.classList.add('rotate4');
        vaisseau.classList.remove('rotate5');
        //flame rotate
        flame.classList.add('rotate4Flame');
        flame.classList.remove('rotate5Flame');
    }

    //frame6
    if (animationMoment == 13) {
        vaisseau.classList.remove('rotate5');
        vaisseau.classList.add('rotate6');
        //flame rotate
        flame.classList.remove('rotate5Flame');
        flame.classList.add('rotate6Flame');
    } else if (animationMoment == 12) {
        vaisseau.classList.add('rotate5');
        vaisseau.classList.remove('rotate6');
        //flame rotate
        flame.classList.add('rotate5Flame');
        flame.classList.remove('rotate6Flame');
    }

    //frame 7
    if (animationMoment == 14) {
        vaisseau.classList.remove('rotate6');
        vaisseau.classList.add('rotate7');
        //flame rotate
        flame.classList.remove('rotate6Flame');
        flame.classList.add('rotate7Flame');
    } else if (animationMoment == 13) {
        vaisseau.classList.add('rotate6');
        vaisseau.classList.remove('rotate7');
        //flame rotate
        flame.classList.add('rotate6Flame');
        flame.classList.remove('rotate7Flame');
    }

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