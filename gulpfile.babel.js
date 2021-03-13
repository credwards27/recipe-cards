/* gulpfile.babel.js
    
    Gulp configuration.
*/

"use strict";

// Gulp dependencies
import gulp from "gulp";
import plugins from "gulp-load-plugins";

import webpack from "webpack";
import webpackStream from "webpack-stream";

import del from "del";
import liveServer from "live-server";

import CONFIG from "./config";
import CONFIG_WEBPACK from "./webpack.config";

import getArg from "./args";

// Environment paths.
const PATH = CONFIG.PATH,
    
    // Gulp plugins collection.
    PLUGINS = plugins();

//
// TASKS
//

// Watches the project for changes and recompiles.
gulp.task("watch", (done) => {
    gulp.watch(`${PATH.SRC.SASS}/**/*.scss`, gulp.series("sass"));
    gulp.watch(`${PATH.SRC.JS}/**/*.js`, gulp.series("js"));
    
    done();
});

// Clears the build destination directories for a clean build.
gulp.task("clean", () => {
    return del([
        `${PATH.DEST.SASS}/**/*`,
        `${PATH.DEST.JS}/**/*`
    ]);
});

// SASS build task.
gulp.task("sass", () => {
    let action = gulp.src(`${PATH.SRC.SASS}/browser.scss`),
        sass = PLUGINS.dartSass,
        sourcemaps = PLUGINS.sourcemaps,
        production = getArg("production");
    
    if (!production) {
        action = action.pipe(sourcemaps.init());
    }
    
    action = action.pipe(sass().on("error", sass.logError))
        .pipe(PLUGINS.cleanCss());
    
    if (!production) {
        action = action.pipe(sourcemaps.write());
    }
    
    action = action.pipe(gulp.dest(PATH.DEST.SASS));
    
    return action;
});

// JS build task.
gulp.task("js", () => {
    let action;
    
    action = gulp.src(`${PATH.SRC.JS}/windows/browser.js`)
        .pipe(PLUGINS.plumber({
            errorHandler: function(err) {
                console.log(err);
                this.emit("end");
            }
        }))
        .pipe(webpackStream(CONFIG_WEBPACK, webpack))
        .pipe(gulp.dest(PATH.DEST.JS));
    
    return action;
});

/* Live reload server.
*/
gulp.task("server", (done) => {
    liveServer.start({
        port: 8080,
        host: "localhost",
        root: "dist",
        open: false,
        wait: 250
    });
    
    done();
});

// Complete build task.
gulp.task(
    "build",
    gulp.series(
        "clean",
        gulp.parallel("sass", "js")
    )
);

//
// Aliases
//

gulp.task("w", gulp.parallel("watch"));

// Default gulp task.
gulp.task("default", gulp.series("build", "watch", "server"));
