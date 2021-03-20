/* browser.js
    
    Recipe browser window main entry point.
*/

// Dependencies.
const onReady = require("app/front/utils/ready.js"),
    RecipeList = require("app/front/browser/recipe-list.js");

onReady(() => {
    let data = document.getElementById("test-data"),
        recipeLists = document.querySelectorAll("[data-recipe-list]"),
        recipes = [];
    
    data = JSON.parse(data.innerText.trim());
    
    for (let i=0, l=recipeLists.length; i<l; ++i) {
        recipes.push(new RecipeList(
            data.recipes,
            recipeLists[i]
        ));
    }
    
    window.recipes = recipes[0];
});
