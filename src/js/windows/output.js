/* output.js
    
    Recipe output window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    copy = require("app/all/deep-copy.js"),
    App = require("app/front/output/components/app.js");

let htmlElem = null,
    
    recipeCards = null,
    
    resizeTimeout = -1;

/* Updates recipe card dimensions and layout.
*/
function updateRecipeCards() {
    let vpWidth = htmlElem.clientWidth,
        vpHeight = htmlElem.clientHeight;
    
    for (let i=0, l=recipeCards.length; i<l; ++i) {
        let card = recipeCards[i],
            { width, height } = card.getBoundingClientRect();
        
        //debugger;
    }
}

onReady(document, () => {
    /*let app = ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
    
    window.app = app;*/
    
    htmlElem = document.getElementsByTagName("html")[0];
    recipeCards = document.getElementsByClassName("recipe-card");
    
    window.addEventListener("resize", (e) => {
        if (-1 !== resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        
        resizeTimeout = setTimeout(() => {
            resizeTimeout = -1;
            updateRecipeCards();
        }, 500);
    });
    
    updateRecipeCards();
});
