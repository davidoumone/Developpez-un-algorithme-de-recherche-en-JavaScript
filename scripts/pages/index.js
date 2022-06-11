import { recipes } from "../../data/recipes.js";





/**
 * La fonction displaymenu() est une boucle forEach qui parcourt le tableau des recettes et crée une
 * variable appelée sectionmenu qui est une chaîne de code HTML qui est ensuite ajoutée au code HTML
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
  <li><strong>${menu.ingredient}: </strong> ${menu.quantity} ${menu.unit}</li>
</ul>`
    sectioningredients += ingredientsection
  })

  return sectioningredients
}

