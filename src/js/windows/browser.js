/* browser.js
    
    Recipe browser window main entry point.
*/

// Dependencies.
const onReady = require("app/front/utils/ready.js"),
    RecipeList = require("app/front/browser/recipe-list.js");

onReady(() => {
    let data = document.getElementById("test-data"),
        recipes;
    
    data = JSON.parse(data.innerText.trim());
    
    recipes = new RecipeList(data.recipes);
    
    window.recipes = recipes;
});
