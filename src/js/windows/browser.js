/* browser.js
    
    Recipe browser window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    App = require("app/front/browser/components/app.js");

onReady(document, async () => {
    let selected = await ipc.invoke("get-selected-recipe"),
        app;
    
    app = ReactDOM.render(
        <App
            selected={selected?.id}
        />,
        document.getElementById("app")
    );
    
    window.app = app;
});
