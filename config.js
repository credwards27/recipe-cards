/* config.js
    
    General configuration.
*/

// Full configuration object.
const CONFIG = {
    // Environment paths.
    PATH: {
        // Source paths.
        SRC: {
            // Generic build source path root.
            ROOT: "src",
            
            // SASS build source path.
            SASS: "sass",
            
            // JS build source path.
            JS: "js",
            
            // Image source path.
            IMG: "img",
            
            // Font source path.
            FONT: "font"
        },
        
        // Destination output paths.
        DEST: {
            // Generic build output path root.
            ROOT: "dist",
            
            // SASS build output path.
            SASS: "assets/css",
            
            // JS build output path.
            JS: "assets/js",
            
            // Image source path.
            IMG: "assets/img",
            
            // Font output path.
            FONT: "assets/font"
        },
        
        // External node modules directory
        MODULES: `${__dirname}/node_modules`
    }
};

// Set up paths
(() => {
    let paths = CONFIG.PATH,
        groups = [ "SRC", "DEST" ];
    
    for (let i=0, l=groups.length; i<l; ++i) {
        let group = paths[groups[i]],
            root = group.ROOT = group.ROOT.replace(/\/+$/, "");
        
        for (let k in group) {
            if (!group.hasOwnProperty(k) || "ROOT" === k) { continue; }
            
            let path = group[k].replace(/^\/+/, "");
            group[k] = `${root}/${path}`;
        }
    }
})();

module.exports = CONFIG;
