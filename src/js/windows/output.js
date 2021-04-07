/* output.js
    
    Recipe output window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    App = require("app/front/output/components/app.js");

onReady(document, () => {
    let htmlElem = document.getElementsByTagName("html")[0];
    
    app = ReactDOM.render(
        <App
            htmlElem={htmlElem}
            max={1440}
            min={320}
        />,
        document.getElementById("app")
    );
    
    window.app = app;
});
