/* browser.js
    
    Recipe browser window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    App = require("app/front/browser/components/app.js");

onReady(document, () => {
    let app = ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
    
    window.app = app;
});
