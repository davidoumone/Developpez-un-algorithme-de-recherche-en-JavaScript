import { recipes } from "../../data/recipes.js";
let index;
let tagindex;
/**
 * partie search du tableau recipes
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
  console.log(tableingredients);
  return tableingredients;
}

searchIngredients(recipes);

function searchAppareils(inforecipes) {
  let tableAppareils = [];
  inforecipes.forEach(recipe => {
    tableAppareils.push(recipe.appliance);
  })
  tableAppareils = new Set(tableAppareils);
  tableAppareils = new Array(tableAppareils);
  console.log(tableAppareils);
  return tableAppareils;
}

searchAppareils(recipes);

function searchUstensiles(inforecipes) {
  let tableUstensiles = [];
  inforecipes.forEach(recipe => {
    recipe.ustensils.forEach(ustensil => {
      tableUstensiles.push(ustensil);
    })
  })
  tableUstensiles = new Set(tableUstensiles);
  tableUstensiles = new Array(tableUstensiles);
  console.log(tableUstensiles);
  return tableUstensiles;
}

searchUstensiles(recipes);
/**
 * partie dropdown
 */
function displaydropdowningredients() {
  let dropdownIngredient = "";
  recipes.forEach(ingredient => {
    const Ingredientdropdown = `${dropdownIngredients(ingredient.ingredients)}`
    dropdownIngredient += Ingredientdropdown
  });
  document.querySelector("#ingredient").innerHTML = dropdownIngredient;
}

displaydropdowningredients();

function dropdownIngredients(ingredients) {
  let ingredientelement = "";

  ingredients.forEach(element => {
    const elementingredient = `<a class="tagIngredient" href="#">${element.ingredient}</a>`
    ingredientelement += elementingredient
  })
  return ingredientelement;
}


function displaydropdownAppareils() {
  let dropdownAppareil = "";
  recipes.forEach(appareil => {
    const Appareildropdown = `<a href="#">${appareil.appliance}</a>`
    dropdownAppareil += Appareildropdown
  });
  document.querySelector("#appareil").innerHTML = dropdownAppareil;
}

displaydropdownAppareils();

function dropdownUstensiles() {
  let dropdownUstensile = "";
  recipes.forEach(ustensile => {
    const Ustensiledropdown = `<a href="#">${ustensile.ustensils}</a>`
    dropdownUstensile += Ustensiledropdown
  })
  document.querySelector("#ustensile").innerHTML = dropdownUstensile;

}

dropdownUstensiles();

/**
 * partie tags creation au moment du clic sur un des elements du dropdowns
 */
function clickTagIngredient() {
  const tagsIngredients = document.querySelectorAll(".tagIngredient");
  tagsIngredients.forEach(tagsigdt => {
    tagsigdt.addEventListener("click", (event) => {
      const indextagsingredients = Array.from(tagsIngredients).indexOf(event.target);
      recuptagsIngredients(indextagsingredients);
    })
  })
}

clickTagIngredient();


function recuptagsIngredients(elementtagsingredients) {
  index = elementtagsingredients;
  const tagsIngredient = recipes[index];
  // console.log(tagsIngredient);
}

/**
 *  ajoute un écouteur d'événement à chaque bouton tags ingredients pour la fermeture.
*/

function selectagsingredients() {
  const ingredienttag = document.querySelectorAll(".tagingredient");
  ingredienttag.forEach((taging) => {
    taging.addEventListener("click", (event) => {
      const tagings = Array.from(ingredienttag).indexOf(event.target);
      closetagsings(tagings);
    });
  });
}

selectagsingredients();

function closetagsings(tagings) {
  tagindex = tagings;
  const ingredienttag = document.querySelectorAll(".tagingredient");
  const tagclosing = ingredienttag[tagindex];
  console.log(tagclosing);
  tagclosing.style.display = "none";
}

/**
 *  ajoute un écouteur d'événement à chaque bouton tags appareils pour la fermeture.
*/

function selectagsappareils() {
  const appareiltag = document.querySelectorAll(".tagappareil");
  appareiltag.forEach((tagapp) => {
    tagapp.addEventListener("click", (event) => {
      const tagapps = Array.from(appareiltag).indexOf(event.target);
      closetagsapps(tagapps);
    });
  });
}

selectagsappareils();

function closetagsapps(tagapps) {
  tagindex = tagapps;
  const appareiltag = document.querySelectorAll(".tagappareil");
  const tagclosing = appareiltag[tagindex];
  console.log(tagclosing);
  tagclosing.style.display = "none";
}

/**
 *  ajoute un écouteur d'événement à chaque bouton tags ustensiles pour la fermeture.
*/

function selectagsustensiles() {
  const ustensiletag = document.querySelectorAll(".tagustensile");
  ustensiletag.forEach((tagust) => {
    tagust.addEventListener("click", (event) => {
      const tagusts = Array.from(ustensiletag).indexOf(event.target);
      closetagsusts(tagusts);
    });
  });
}

selectagsustensiles();

function closetagsusts(tagusts) {
  tagindex = tagusts;
  const ustensiletag = document.querySelectorAll(".tagustensile");
  const tagclosing = ustensiletag[tagindex];
  console.log(tagclosing);
  tagclosing.style.display = "none";
}


/**
 * partie menu
 */
function displaymenu() {
  let sectionmenu = "";
  recipes.forEach(recipe => {
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

displaymenu();



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

