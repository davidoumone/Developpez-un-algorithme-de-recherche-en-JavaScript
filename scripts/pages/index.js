import { recipes } from "../../data/recipes.js";
let tagIngredients = [];
let tagAppareil = [];
let tagUstensile = [];
/**
 * filtre les recettes sur input searchTerm
 */
const filtersearch = document.querySelector(".searchTerm");

filtersearch.addEventListener("keyup", () => {
  filterRecettes();
})

function filterRecettes() {
  let resultfilterInput = [];
  let filter = filtersearch.value.toLowerCase();
  recipes.forEach(Input => {
    Input.ingredients.forEach(dataInput => {
      // console.log(Input.name);
      // console.log(Input.description);
      // console.log(dataInput.ingredient);
      if (Input.name.toLowerCase().includes(filter)) {
        resultfilterInput.push(Input);
      }
      if (Input.description.toLowerCase().includes(filter)) {
        resultfilterInput.push(Input);
      }
      if (dataInput.ingredient.toLowerCase().includes(filter)) {
        resultfilterInput.push(Input);
      }
    })
  })
  resultfilterInput = new Set(resultfilterInput);
  resultfilterInput = new Array(resultfilterInput);
  console.log(resultfilterInput);
  // if (resultfilterInput.length > 0) {
  //   displaymenu(resultfilterInput);
  // } else {
  //   displaymenu(recipes);
  // }
}

/**
 * filtre les recettes sur input searchTerm avec les elements du DOM
 */

// function filterRecettes() {
//   let filter = filtersearch.value.toUpperCase();
//   const recettes = document.getElementsByClassName("menu-card");
//   for (let i = 0; i < recettes.length; i++) {
//     let txtValue = recettes[i].innerHTML
//     if (txtValue.toUpperCase().indexOf(filter) >= 4) {
//       recettes[i].style.display = "";
//     } else {
//       recettes[i].style.display = "none";
//     }
//   }
// }
/**
 * partie dropdown ingredients
 */

function searchIngredients(inforecipes) {
  let tableingredients = [];
  inforecipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      tableingredients.push(ingredient.ingredient)
    })
  })
  tableingredients = new Set(tableingredients);
  tableingredients = new Array(tableingredients);
  return tableingredients;
}

function displaydropdowningredients() {
  let dropdownIngredient = "";
  let [utilIngredients] = searchIngredients(recipes);
  utilIngredients.forEach(ingredient => {
    const Ingredientdropdown = `<a class="tagIngredient" href="#">${ingredient}</a>`
    dropdownIngredient += Ingredientdropdown
  });
  document.querySelector("#ingredient").innerHTML = dropdownIngredient;
}
displaydropdowningredients();

/**
 * partie dropdown appareils
 */
function searchAppareils(inforecipes) {
  let tableAppareils = [];
  inforecipes.forEach(recipe => {
    tableAppareils.push(recipe.appliance);
  })
  tableAppareils = new Set(tableAppareils);
  tableAppareils = new Array(tableAppareils);
  return tableAppareils;
}

function displaydropdownAppareils() {
  let dropdownAppareil = "";
  let [utilsAppreils] = searchAppareils(recipes);
  utilsAppreils.forEach(appareil => {
    const Appareildropdown = `<a class="tagAppareil" href="#">${appareil}</a>`
    dropdownAppareil += Appareildropdown
  });
  document.querySelector("#appareil").innerHTML = dropdownAppareil;
}

displaydropdownAppareils();

/**
 * partie dropdown ustensiles
 */
function searchUstensiles(inforecipes) {
  let tableUstensiles = [];
  inforecipes.forEach(recipe => {
    recipe.ustensils.forEach(ustensil => {
      tableUstensiles.push(ustensil);
    })
  })
  tableUstensiles = new Set(tableUstensiles);
  tableUstensiles = new Array(tableUstensiles);
  return tableUstensiles;
}

function displaydropdownUstensiles() {
  let dropdownUstensile = "";
  let [utilsUstensiles] = searchUstensiles(recipes);
  utilsUstensiles.forEach(ustensile => {
    const Ustensiledropdown = `<a class="tagUstensile" href="#">${ustensile}</a>`
    dropdownUstensile += Ustensiledropdown
  })
  document.querySelector("#ustensile").innerHTML = dropdownUstensile;

}

displaydropdownUstensiles();

/**
 * partie tags creation au moment du clic sur un des elements du dropdown ingredient + fermeture du tag
 */
function clickTagIngredient() {
  const containIngredients = document.querySelector("#containIngredients")
  const tagsIngredients = document.querySelectorAll(".tagIngredient");
  tagsIngredients.forEach(tagsigdt => {
    tagsigdt.addEventListener("click", () => {
      tagIngredients.push(tagsigdt.innerHTML);
      document.getElementById("myDropdown").style.display = "none";
      const button = document.createElement('button');
      button.innerHTML = tagsigdt.innerHTML;
      button.className = 'tagingredient';
      containIngredients.appendChild(button);
      closetagsings(button);
      filterAll();
    })
  })

}

clickTagIngredient();

function closetagsings(buttoningredient) {
  buttoningredient.addEventListener("click", () => {
    buttoningredient.style.display = "none";
    tagIngredients.pop(buttoningredient.innerHTML);
    filterAll();
  })

}

/**
 * partie tags creation au moment du clic sur un des elements du dropdown appareils + fermeture du tag
 */

function clicktagAppareil() {
  const containAppareils = document.querySelector("#containAppareils");
  const tagAppareils = document.querySelectorAll(".tagAppareil");
  tagAppareils.forEach(appareil => {
    appareil.addEventListener("click", () => {
      tagAppareil.push(appareil.innerHTML);
      document.getElementById("Appareils").style.display = "none";
      const button = document.createElement('button');
      button.innerHTML = appareil.innerHTML;
      button.className = 'tagappareil';
      containAppareils.appendChild(button);
      closetagapps(button);
      filterAll();
    })
  })
}

clicktagAppareil();

function closetagapps(buttonappareils) {
  buttonappareils.addEventListener("click", () => {
    buttonappareils.style.display = "none";
    tagAppareil.pop(buttonappareils.innerHTML);
    filterAll();
  })
}

/**
 * partie tags creation au moment du clic sur un des elements du dropdown Ustensiles + fermeture du tag
 */

function clicktagUstensile() {
  const containUstensiles = document.querySelector("#containUstensiles");
  const tagUstensiles = document.querySelectorAll(".tagUstensile");
  tagUstensiles.forEach(ustensile => {
    ustensile.addEventListener("click", () => {
      tagUstensile.push(ustensile.innerHTML);
      document.getElementById("Ustensiles").style.display = "none";
      const button = document.createElement('button');
      button.innerHTML = ustensile.innerHTML;
      button.className = 'tagustensile';
      containUstensiles.appendChild(button);
      closetagusten(button);
      filterAll();
    })
  })
}

clicktagUstensile();

function closetagusten(buttonustensiles) {
  buttonustensiles.addEventListener("click", () => {
    buttonustensiles.style.display = "none";
    tagUstensile.pop(buttonustensiles.innerHTML);
    filterAll();
  })
}

/**
 * fonction qui appelle les autres fonctions de filtres avec les tags
 */

function filterAll() {
  let filterings = filteringredients(recipes);
  console.log(filterings);
  let filterapps = filterappareils(filterings);
  console.log(filterapps);
  let filterust = filterustensiles(filterapps);
  console.log(filterust);
  // console.log(displaymenu(filterust));
  /**
   * mettre a jour les dropdowns avec le dernier filtre
   */
}

/**
 * partie filtre tableau recipes avec les tags ingredients
 */
function filteringredients(recette) {
  if (tagIngredients.length === 0) {
    return recette
  }
  let resultat = [];
  for (let i = 0; i < recette.length; i++) {
    const element = recette[i];
    for (let j = 0; j < tagIngredients.length; j++) {
      const resulttagingredient = tagIngredients[j];
      for (let x = 0; x < element.ingredients.length; x++) {
        const ingredient = element.ingredients[x];
        if (ingredient.ingredient === resulttagingredient) {
          resultat.push(element)
        }
      }
    }
  }

  return resultat;
}

/**
 * partie filtre tableau recipes avec les tags appareils
 */

function filterappareils(recette) {
  if (tagAppareil.length === 0) {
    return recette
  }
  let resultfilterapps = [];
  for (let a = 0; a < recette.length; a++) {
    const recipesAppareil = recette[a];
    for (let b = 0; b < tagAppareil.length; b++) {
      const resultappareil = tagAppareil[b];
      if (recipesAppareil.appliance === resultappareil) {
        resultfilterapps.push(recipesAppareil);
      }
    }
  }
  return resultfilterapps;
}

/**
 * partie filtre tableau recipes avec les tags ustensiles
 */

function filterustensiles(recette) {
  if (tagUstensile.length === 0) {
    return recette
  }
  let resultfilterustensiles = [];
  for (let c = 0; c < recette.length; c++) {
    const recipesUstensiles = recette[c];
    for (let d = 0; d < recipesUstensiles.ustensils.length; d++) {
      const ustensile = recipesUstensiles.ustensils[d];
      for (let e = 0; e < tagUstensile.length; e++) {
        const resultustensile = tagUstensile[e];
        if (ustensile === resultustensile) {
          resultfilterustensiles.push(recipesUstensiles);
        }
      }
    }
  }

  return resultfilterustensiles;
}



/**
 * partie menu
 */
function displaymenu(recettes) {
  let sectionmenu = "";
  recettes.forEach(recipe => {
    const MenuContain = `<article class="menu-card">
      <div class="menu-card-content">
        <p class="title-recette">${recipe.name}</p>
        <div class="time">
          <div class="time-clock">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"
              />
            </svg>
          </div>
          <span class="time-minutes"><strong>${recipe.time}</strong></span>
        </div>
        <div class="menu-ingredients">
          <div class="ingredients-quantite">
           ${displayingredient(recipe.ingredients)}            
          </div>
          <div class="ingredients-description">
            <p>
            ${recipe.description}
            </p>
          </div>
        </div>
      </div>
    </article>`;
    sectionmenu += MenuContain
  });

  document.querySelector("#content-recettes").innerHTML = sectionmenu;
}

displaymenu(recipes);



/**
 * Il prend un tableau d'objets et renvoie une chaîne de caractères HTML.
 * @param ingredients - [{ingredient: "tomato", measure: "400ml"}]
 * @returns les ingrédients de chaque élément du menu.
 */
function displayingredient(ingredients) {
  let sectioningredients = "";
  ingredients.forEach(menu => {
    const ingredientsection = `<ul>
  <li><strong>${menu.ingredient}: </strong> ${menu.quantity ? menu.quantity : ""} ${menu.unit ? menu.unit : ""}</li>
</ul>`
    sectioningredients += ingredientsection
  })

  return sectioningredients
}

