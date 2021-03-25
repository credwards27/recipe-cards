/* browser.js
    
    Recipe browser window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    App = require("app/front/browser/components/app.js"),
    BrowserForm = require("app/front/browser/components/browser-form.js"),
    RecipeList = require("app/front/browser/components/recipe-list.js");

onReady(document, () => {
    let data = document.getElementById("test-data");
    
    data = JSON.parse(data.innerText.trim());
    
    let app = ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
    
    window.app = app;
});
