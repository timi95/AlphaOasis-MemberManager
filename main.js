const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600, icon: `file://{__dirname}/dist/assets/favicon.ico` })
    win.loadURL(`file://{__dirname}/dist/index.html`);

    win.on('closed', function(){ wind = null})

    app.on('window-all-closed', function(){
        if (proccess.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', function() {
        if (win === null) {
            createWindow()
        }
    })
}