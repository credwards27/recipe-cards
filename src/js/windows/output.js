/* output.js
    
    Recipe output window main entry point.
*/

// Dependencies.
const ReactDOM = require("react-dom"),
    onReady = require("app/front/utils/ready.js"),
    App = require("app/front/output/components/app.js");

// Recipe card dimension properties.
const CARD_DIMENSIONS = {
    max: 1440,
    min: 320,
    actual: 0,
    maxScale: 1,
    minScale: 0
};

let htmlElem = null,
    
    cardWrapper = null;

/* Updates recipe card scale.
*/
function updateScale() {
    let { clientWidth: vWidth } = htmlElem,
        { actual, maxScale, minScale } = CARD_DIMENSIONS,
        scale = vWidth / actual,
        origin = vWidth < actual ? "top left " : "top center";
    
    // Clamp
    switch (true) {
        case scale > maxScale:
            scale = maxScale;
            break;
        
        case scale < minScale:
            scale = minScale;
            break;
    }
    
    cardWrapper.style.transformOrigin = origin;
    cardWrapper.style.transform = `scale(${scale})`;
}

onReady(document, () => {
    /*let app = ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
    
    window.app = app;*/
    
    htmlElem = document.getElementsByTagName("html")[0];
    cardWrapper = document.getElementById("recipe-cards");
    
    let templateCard = document.getElementsByClassName("recipe-card")[0],
        dims = CARD_DIMENSIONS,
        cardWidth = parseInt(
            getComputedStyle(templateCard).width.replace(/\D+/g, ""),
            10
        );
    
    dims.actual = cardWidth;
    dims.maxScale = dims.max / cardWidth;
    dims.minScale = dims.min / cardWidth;
    
    window.addEventListener("resize", (e) => {
        updateScale();
    });
    
    updateScale();
});
