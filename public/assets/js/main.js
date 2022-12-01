const scrollContainer = document.querySelector('main');
let flame = document.getElementById('flammeVaisseau')
let vaisseau = document.getElementById('vaisseau')
let timer = null;


scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY
    flame.style.display = 'block';
    vaisseau.style.display = 'none';
    vaisseau.style.animation = 'animate 1s';
    vaisseau.classList.add('rotate');
    vaisseau.removeAttribute('id');
    

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