/* output.js
    
    Recipe output window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    App = require("app/front/output/components/app.js");

onReady(document, async () => {
    let htmlElem = document.getElementsByTagName("html")[0],
        selected = await ipc.invoke("get-selected-recipe"),
        app;
    
    app = ReactDOM.render(
        <App
            recipe={selected}
            htmlElem={htmlElem}
            max={1440}
            min={320}
        />,
        document.getElementById("app")
    );
    
    window.app = app;
});
