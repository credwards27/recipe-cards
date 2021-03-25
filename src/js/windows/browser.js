/* browser.js
    
    Recipe browser window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    RecipeList = require("app/front/browser/components/recipe-list.js");

onReady(document, () => {
    let data = document.getElementById("test-data");
    
    data = JSON.parse(data.innerText.trim());
    
    let recipeList = ReactDOM.render(
        <RecipeList
            {...{
                recipes: data.recipes
            }}
        />,
        document.getElementById("recipe-list")
    );
    
    window.recipes = recipeList;
});
