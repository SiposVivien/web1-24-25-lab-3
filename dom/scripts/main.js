//Gombok kiválasztása
const prevBtn = document.querySelector('button.btn:nth-child(1)');
const numBtn = document.querySelector('button.btn:nth-child21)');
const nextBtn = document.querySelector('button.btn:nth-child(3)');

let counter = 1;
//const prevBtn = document.querySelector('button.btn');
//megfog állni az első lehetőségnél

prevBtn.classList.add('btn-info');

//Több elem lekérése egyszerre.
const buttons = document.querySelectorAll('.btn-group button.btn');
//mindegyiket meg fogja találni ami button.btn


//FOREACH: kiszedi a tömmből az elemeket és az indexet is és vár egy füvg amit mi írunk és odaadja a nevet meg az indexet

['btn-info', 'btn-primary', 'btn-info'].forEach( (className, index) => {
    buttonss[index].classList.add(className);
});

//Eseménykezelők beállítása a gombokra
buttons[0].addEventListener('click', (e) => {
    console.log(e);
    if (counter < 2) {
        return;
    }

    counter--;
    buttons[1].innerHTML = counter; //átalakítja stringé és átírja arra a számra | a text content is ez csinálja
});



buttons[2].addEventListener('click', (e) => {
    counter++;
    buttons[1].innerHTML = counter;
});

// e: event rövidítése


