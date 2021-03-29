/* webpack.config.js
    
    Webpack configuration.
*/

const MinifyPlugin = require("babel-minify-webpack-plugin"),
    path = require("path"),
    getArg = require("./args"),
    CONFIG = require("./config"),
    
    wp = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            configFile: path.resolve(
                                __dirname,
                                "babel.config.js"
                            )
                        }
                    }
                }
            ]
        },
        
        plugins: [],
        
        entry: {
            browser: `./${CONFIG.PATH.SRC.JS}/windows/browser.js`,
            output: `./${CONFIG.PATH.SRC.JS}/windows/output.js`
        },
        
        output: {
            filename: "[name].bundle.js",
            chunkFilename: "[name].bundle.js"
        },
        
        externals: {
            react: "React",
            "react-dom": "ReactDOM"
        },
        
        mode: "development",
        devtool: "source-map"
    };

// Initialize
(() => {
    if (getArg("production")) {
        wp.mode = "production";
        
        wp.plugins.push(
            new MinifyPlugin({
                // Disable consecutive adds, it makes too many assumptions
                consecutiveAdds: false
            }, {})
        );
        
        delete wp.devtool;
    }
})();

module.exports = wp;
