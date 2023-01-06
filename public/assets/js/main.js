const scrollContainer = document.querySelector('main');
let flame = document.getElementById('flammeVaisseau')
let vaisseau = document.getElementById('vaisseau')
let timer = null;

/**
 * Etape actuelle.
 */
let step = 0;
/**
 * Maximum du scroll
 */
const MAX_STEP = 20;
/**
 * Minimum du scroll
 */
const MIN_STEP = 0;

/**
 * Un tableau qui permet de stocker
 * pour chaque etape, les class pour la flame et le vaisseau
 * Pour ajouter une etape, il suffit d' ajouter un objet dans le tableau
 * au bon endroit (l'ordre compte).
 */
const classListByStep = [{
    vaisseau: ['rotate1'],
    flame: ['rotate1Flame']
}, {
    vaisseau: ['rotate2'],
    flame: ['rotate2Flame']
}, {
    vaisseau: ['rotate3'],
    flame: ['rotate3Flame']
}, {
    vaisseau: ['rotate4'],
    flame: ['rotate4Flame']
}, {
    vaisseau: ['rotate5'],
    flame: ['rotate5Flame']
}, {
    vaisseau: ['rotate6'],
    flame: ['rotate6Flame']
}, {
    vaisseau: ['rotate7'],
    flame: ['rotate7Flame']
}];


/**
 * Pour eviter d'ecrire 850 fois les meme lignes de code
 * On a fait un tableau, qui va contenir dans l'ordre
 * toutes les class par etapes. Cette methode permet d'aller appliquer 
 * les bonnes class a chaque etape.
 * @param {number} classListNumber L'emplacement dans le tableau
 */
 const setClassList = (classListNumber) => {
    vaisseau.classList = [...classListByStep[classListNumber].vaisseau];
    flame.classList = [...classListByStep[classListNumber].flame];
}

/**
 * Permet juste de supprimer toutes les class
 * dans le cas ou on est la premiere etape.
 */
const removeClassList = () => {
    vaisseau.classList = [];
    flame.classList = [];
}


/**
 * La methode permet de gerer les class a utiliser sur notre vaisseau.
 * Les cases represente les etapes de scroll.
 * A chaque etape on regarde la direction (Ton soucis ete ici).
 * Si on avance, on va chercher les class qui correspond grace a la methodes setClassList
 * Si on recule, si on est a la premiere etapes (la 7) on supprime les class pour reafficher a letat initial
 * Mais si on peut encore reculer, on va chercher les class de l'etape precedente.
 * @param {number} step L'etape ou l'on se trouve.
 * @param {boolean} isRight La direction
 */
 const applyStep = (step, isRight) => {
    switch (step) {
        case 7: {
            if (isRight) {
                setClassList(0);
            } else {
                removeClassList();
            }
            break;
        }
        case 8: {
            if (isRight) {
                setClassList(1);
            } else {
                setClassList(0);
            }
            break;
        }
        case 9: {
            if (isRight) {
                setClassList(2);
            } else {
                setClassList(1);
            }
            break;
        }
        case 10: {
            if (isRight) {
                setClassList(3);
            } else {
                setClassList(2);
            }
            break;
        }
        case 11: {
            if (isRight) {
                setClassList(4);
            } else {
                setClassList(3);
            }
            break;
        }
        case 12: {
            if (isRight) {
                setClassList(5);
            } else {
                setClassList(4);
            }
            break;
        }
        case 13: {
            if (isRight) {
                setClassList(6);
            } else {
                setClassList(5);
            }
            break;
        }
    }
}

/**
 * Dans un premier temps on affiche le vaisseau avec la flamme.
 * Ensuite on augmente et on diminue le step sans depasser le min et le max definit plus haut.
 * Et on transmet les infos a notre methodes qui va appliquer les regles css selon la situation.
 * @param {boolean} isRight Permet de savoir si on va vers la droite ou vers la gauche.
 */
const moveShip = (isRight) => {
    flame.style.visibility = 'visible';
    vaisseau.style.visibility = 'hidden';

    if (isRight) {
        step = step === MAX_STEP ? MAX_STEP : step + 1;
    } else {
        step = step === MIN_STEP ? MIN_STEP : step - 1;
    }

    applyStep(step, isRight);
}

/**
 * On ecoute le scroll.
 * On applique le scroll horizontalement
 * On definit le sens de navigation : vers la droite ou vers l'avant
 * On anime le vaisseau.
 * 
 * ATTENTION A FAIRE DES METHODES LES MOINS GROSSES POSSIBLE
 * CHAQUE METHODE A SON ROLE.
 * 
 * L'ecoute de l'event ne va faire que transmettre l'information de scroll a notre
 * methode d'animation du vaisseau.
 */
scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

    const isRight = evt.deltaY > 0;

    moveShip(isRight);
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
    flame.style.visibility = 'hidden';
    vaisseau.style.visibility = 'visible';
});