var filter, a, i;
/**
 * bouton filter ingredients
 */
const inputfilter = document.querySelector(".dropbtn");

inputfilter.addEventListener("click", () => {
    diplaymenu();
});

function diplaymenu() {
    document.getElementById("myDropdown").style.display = "block";
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
    document.getElementById("Appareils").style.display = "block";
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
    document.getElementById("Ustensiles").style.display = "block";
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

// Fermez la liste déroulante si l'utilisateur clique en dehors de celle-ci
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        const dropdownings = document.getElementById("myDropdown");
        if (dropdownings.style.display = "block") {
            dropdownings.style.display = "none";
        }
    }

    if (!e.target.matches('.btnappareil')) {
        const dropdownapps = document.getElementById("Appareils");
        if (dropdownapps.style.display = "block") {
            dropdownapps.style.display = "none";
        }
    }

    if (!e.target.matches('.btnustensiles')) {
        const dropdownusts = document.getElementById("Ustensiles");
        if (dropdownusts.style.display = "block") {
            dropdownusts.style.display = "none";
        }
    }
}