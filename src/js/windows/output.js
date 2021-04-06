/* output.js
    
    Recipe output window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    App = require("app/front/output/components/app.js");

onReady(document, () => {
    let recipe = document.getElementById("test-data"),
        htmlElem = document.getElementsByTagName("html")[0];
    
    recipe = JSON.parse(recipe.text.replace(/&lt;/g, "<"));
    
    app = ReactDOM.render(
        <App
            htmlElem={htmlElem}
            recipe={recipe}
            max={1440}
            min={320}
        />,
        document.getElementById("app")
    );
    
    window.app = app;
});
