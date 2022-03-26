const container = document.querySelector('.container');
const ules = document.querySelectorAll('.sor .ules:not(.foglalt');
const count = document.getElementById('count');
const total = document.getElementById('total');
const filmValasztas = document.getElementById('film');


populateUI();
let jegyAr = +filmValasztas.value;

function setMovieData(filmIndex, filmAr) {
    localStorage.setItem('selectedFilmIndex', filmIndex);
    localStorage.setItem('selectedFilmAr', filmAr);
}




function updateSelectedCount() {
    const valasztottUlesek = document.querySelectorAll('.sor .ules.kivalasztott')

    const ulesIndex = [...valasztottUlesek].map(function (seat) {
        return [...ules].indexOf(seat)
    })

    localStorage.setItem('valasztottUlesek', JSON.stringify(ulesIndex))

    const valasztottUlesekCount = valasztottUlesek.length;

    count.innerText = valasztottUlesekCount;
    total.innerText = valasztottUlesekCount * jegyAr;

}

function populateUI() {
    const valasztottUlesek = JSON.parse(localStorage.getItem('valasztottUlesek'));

    console.log(valasztottUlesek);
}


filmValasztas.addEventListener('change', e => {
    jegyAr = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('ules') && !e.target.classList.contains('foglalt')) {
        e.target.classList.toggle('kivalasztott');
    }

    updateSelectedCount();
});