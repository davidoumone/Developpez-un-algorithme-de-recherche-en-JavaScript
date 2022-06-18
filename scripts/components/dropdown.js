var filter, a, i;
/**
 * bouton filter ingredients
 */
const inputfilter = document.querySelector(".dropbtn");

inputfilter.addEventListener("click", () => {
    diplaymenu();
});

function diplaymenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    // document.querySelector(".arrowbottom").classList.toggle("rotation");
}


inputfilter.addEventListener("keyup", () => {
    filterFunction();
})

function filterFunction() {
    filter = inputfilter.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

/**
 * bouton filter Appareils
 */
const inputAppareils = document.querySelector(".btnappareil");

inputAppareils.addEventListener("click", () => {
    diplaymenuAppareils();
});

function diplaymenuAppareils() {
    document.getElementById("Appareils").classList.toggle("showappareils");
    // document.querySelector(".arrowbottom2").classList.toggle("rotation");
}


inputAppareils.addEventListener("keyup", () => {
    filterAppareils();
})

function filterAppareils() {
    filter = inputAppareils.value.toUpperCase();
    div = document.getElementById("Appareils");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

/**
 * bouton filter ustensiles
 */
const inputUstensiles = document.querySelector(".btnustensiles");


inputUstensiles.addEventListener("click", () => {
    diplaymenuustensiles();
});

function diplaymenuustensiles() {
    document.getElementById("Ustensiles").classList.toggle("showustensiles");
    // document.querySelector(".arrowbottom3").classList.toggle("rotation");
}


inputUstensiles.addEventListener("keyup", () => {
    filterUstensiles();
})

function filterUstensiles() {
    filter = inputUstensiles.value.toUpperCase();
    div = document.getElementById("Ustensiles");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}