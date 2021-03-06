/* index-back.js
    
    Back end app entry point.
*/

// Dependencies.
const { app, BrowserWindow } = require("electron"),
    windowManager = require("app/back/window-manager.js");
    AppManager = require("app/back/app-manager.js");

// Non-object dependencies.
require("app/back/protocols.js");

// Live reload for development
try {
    require("electron-reloader")(module);
}
catch {}

// Event handlers
app.on("window-all-closed", () => {
    if ("darwin" !== process.platform) {
        app.quit();
    }
});

app.on("activate", async () => {
    if (!BrowserWindow.getAllWindows().length) {
        try {
            await windowManager.getWindow("browser");
        }
        catch (e) {}
    }
});

// Initialize
app.whenReady().then(() => {
    new AppManager();
    windowManager.getWindow();
    
    //
    // DEBUG
    //
    
    windowManager.getWindow("output");
    
    //
    // END DEBUG
    //
});
